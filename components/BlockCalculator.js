"use client";

import { useMemo, useState } from "react";
import { F, SelectF, UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS, num } from "./Fields";
import { toFeet, CMU_BLOCKS_PER_SQFT, MORTAR_BAGS_PER_100SQFT_BLOCK, CORE_FILL_YD3_PER_BLOCK } from "../lib/calc";
import { fmtNum } from "../lib/format";

const BLOCK_SIZE_OPTIONS = [
  { value: "4", label: "4-in nominal (4 × 8 × 16)" },
  { value: "6", label: "6-in nominal (6 × 8 × 16)" },
  { value: "8", label: "8-in nominal (8 × 8 × 16) — standard" },
  { value: "10", label: "10-in nominal (10 × 8 × 16)" },
  { value: "12", label: "12-in nominal (12 × 8 × 16)" },
];

export default function BlockCalculator() {
  const [length, setLength] = useState("20");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [height, setHeight] = useState("8");
  const [heightUnit, setHeightUnit] = useState("ft");
  const [blockSize, setBlockSize] = useState("8");
  const [waste, setWaste] = useState("10");
  const [coreFill, setCoreFill] = useState(false);

  const r = useMemo(() => {
    const lFt = toFeet(length, lengthUnit);
    const hFt = toFeet(height, heightUnit);
    const sqft = lFt * hFt;
    const wasteFactor = 1 + num(waste) / 100;
    const blocks = Math.ceil(sqft * CMU_BLOCKS_PER_SQFT);
    // 1e-9 epsilon keeps exact products (180 × 1.1 = 198) from ceiling up on float noise.
    const blocksWaste = Math.ceil(blocks * wasteFactor - 1e-9);
    // Guide figure: 15 eighty-pound Type N bags net per 100 sq ft of 8-in block wall.
    const mortarBags = Math.ceil((sqft * MORTAR_BAGS_PER_100SQFT_BLOCK) / 100);
    const mortarWaste = Math.ceil(mortarBags * wasteFactor - 1e-9);
    // APPROXIMATE: ~0.006 yd³ grout per standard 8×8×16 block.
    const coreFillYd3 = blocks * CORE_FILL_YD3_PER_BLOCK;
    return { sqft, blocks, blocksWaste, mortarBags, mortarWaste, coreFillYd3, wastePct: num(waste) };
  }, [length, lengthUnit, height, heightUnit, waste]);

  const showMortarCaveat = blockSize !== "8";

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Wall dimensions</h3>
        <div className="field-row">
          <UnitF label="Wall length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
          <UnitF label="Wall height" value={height} set={setHeight} unit={heightUnit} setUnit={setHeightUnit} options={DIMENSION_OPTIONS} />
        </div>
        <SelectF
          label="Block size (nominal)"
          value={blockSize}
          set={setBlockSize}
          options={BLOCK_SIZE_OPTIONS}
          hint="Every CMU has the same 8×16 face, so block count is identical across sizes — depth only changes wall strength and core volume."
        />
        <div className="field-row">
          <F label="Waste / overage (%)" value={waste} set={setWaste} hint="10% is the standard buffer for cuts, breakage, and mortar loss." />
        </div>
        <div className="field">
          <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={coreFill}
              onChange={(e) => setCoreFill(e.target.checked)}
              style={{ width: 18, height: 18, accentColor: "var(--accent-deep)" }}
            />
            Fill cores with grout (approx.)
          </label>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>
            Adds an approximate grout volume for reinforced cores — confirm with your supplier on real orders.
          </div>
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <Row label="Wall face area" value={`${fmtNum(r.sqft)} sq ft`} />
        <TotalRow label="Concrete blocks (net)" value={r.blocks.toLocaleString("en-US")} />
        <Row label={`Blocks with ${r.wastePct}% overage`} value={r.blocksWaste.toLocaleString("en-US")} />
        <TotalRow label="Mortar bags, 80-lb Type N (net)" value={r.mortarBags.toLocaleString("en-US")} />
        <Row label={`Mortar with ${r.wastePct}% overage`} value={r.mortarWaste.toLocaleString("en-US")} />
        {coreFill && (
          <Row label="Core-fill grout (approx.)" value={`${fmtNum(r.coreFillYd3)} yd³`} />
        )}
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            {showMortarCaveat
              ? `Mortar figure is the published rate for 8-in block (15 eighty-pound Type N bags per 100 sq ft, 3/8-in joints); thinner or thicker walls need slightly less or more — check with your supplier. This is a mortared CMU wall; segmental retaining-wall block is a different product and takes no mortar.`
              : `One 80-lb Type N bag lays about 8 blocks. This is a mortared CMU wall; segmental retaining-wall block is a different product and takes no mortar.`}
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

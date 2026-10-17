"use client";

import { useMemo, useState } from "react";
import { F, UnitF, SelectF, ResultHead, Row, TotalRow, ResultNote, num, DIMENSION_OPTIONS } from "./Fields";
import { toFeet, densityLbs, densityOptions, SHAPE_OPTIONS, shapeAreaSqFt, withOverage, DENSITIES, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum, fmt$ } from "../lib/format";

// Soil options: every density variant of each soil, from the single source of truth.
// The value encodes "key:variantIndex" so weight follows the selected variant.
const soilKeys = ["topsoil", "dirt", "garden"];
const materialOptions = soilKeys.flatMap((key) =>
  densityOptions(key).map((o) => ({ value: `${key}:${o.value}`, label: o.label }))
);

// Settlement/compaction buffer applied to the ORDER quantity, extending the
// long-standing fixed 10% overage. "Light" (×1.10) is exactly what the
// calculator did before the selector existed, so the default behavior is
// unchanged. Guidance follows our settlement guide
// (app/guides/how-much-extra-soil-to-order/): topsoil settles 10–20%,
// fill dirt 10–15%, sand ~5%.
const SETTLEMENT_OPTIONS = [
  { value: "none", factor: 0.0, label: "None ×1.00 — gravel, already-settled fill" },
  { value: "light", factor: 0.1, label: "Light ×1.10 — sand, small precise jobs" },
  { value: "standard", factor: 0.15, label: "Standard ×1.15 — topsoil & fill dirt, typical" },
  { value: "heavy", factor: 0.25, label: "Heavy ×1.25 — deep compacted fills, topsoil upper end" },
];

export default function DirtCalculator() {
  const [length, setLength] = useState("4");
  const [width, setWidth] = useState("8");
  const [depth, setDepth] = useState("12");
  const [depthUnit, setDepthUnit] = useState("in");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [widthUnit, setWidthUnit] = useState("ft");
  const [shape, setShape] = useState("rect");
  const [diameter, setDiameter] = useState("10");
  const [diameterUnit, setDiameterUnit] = useState("ft");
  const [base, setBase] = useState("10");
  const [baseUnit, setBaseUnit] = useState("ft");
  const [height, setHeight] = useState("10");
  const [heightUnit, setHeightUnit] = useState("ft");
  const [price, setPrice] = useState("0");
  const [delivery, setDelivery] = useState("0");
  const [taxPct, setTaxPct] = useState("0");

  const [material, setMaterial] = useState("topsoil:0");
  // Default "light" (×1.10) reproduces the calculator's original fixed 10% overage.
  const [settlement, setSettlement] = useState("light");

  const settleHint = material.startsWith("topsoil") || material.startsWith("garden")
    ? "Topsoil settles 10–20% — most jobs want Standard (×1.15) or Heavy (×1.25)"
    : "Fill dirt settles 10–15% — Light (×1.10) or Standard (×1.15) covers most jobs";

  const r = useMemo(() => {
    const dFt = toFeet(depth, depthUnit);
    const areaSqFt = shapeAreaSqFt(shape, {
      length: toFeet(length, lengthUnit),
      width: toFeet(width, widthUnit),
      diameter: toFeet(diameter, diameterUnit),
      base: toFeet(base, baseUnit),
      height: toFeet(height, heightUnit),
    });
    const yards = (areaSqFt * dFt) / 27;
    const [mKey, vIdx] = material.split(":");
    const lbs = densityLbs(mKey, vIdx);
    const tons = (yards * lbs) / 2000;
    const sf = SETTLEMENT_OPTIONS.find((o) => o.value === settlement)?.factor ?? 0.1;
    const overage = withOverage(yards, sf);
    const overageTons = withOverage(tons, sf);
    // Cost prices the overage-included order quantity, like the concrete calculator.
    const materialCost = overage * num(price);
    const deliv = num(delivery);
    const tax = (materialCost + deliv) * (num(taxPct) / 100);
    const total = materialCost + deliv + tax;
    return { yards, tons, lbs, overage, overageTons, sf, materialCost, deliv, tax, total };
  }, [shape, length, lengthUnit, width, widthUnit, diameter, diameterUnit, base, baseUnit, height, heightUnit, depth, depthUnit, material, settlement, price, delivery, taxPct]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Fill dimensions</h3>
        <SelectF label="Area shape" value={shape} set={setShape} options={SHAPE_OPTIONS} hint="Rectangle is the default; circle and triangle cover round beds and corners" />
        {shape === "circle" ? (
          <UnitF label="Diameter" value={diameter} set={setDiameter} unit={diameterUnit} setUnit={setDiameterUnit} options={DIMENSION_OPTIONS} />
        ) : shape === "triangle" ? (
          <div className="field-row">
            <UnitF label="Base" value={base} set={setBase} unit={baseUnit} setUnit={setBaseUnit} options={DIMENSION_OPTIONS} />
            <UnitF label="Height" value={height} set={setHeight} unit={heightUnit} setUnit={setHeightUnit} options={DIMENSION_OPTIONS} />
          </div>
        ) : (
          <div className="field-row">
            <UnitF label="Length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
            <UnitF label="Width" value={width} set={setWidth} unit={widthUnit} setUnit={setWidthUnit} options={DIMENSION_OPTIONS} />
          </div>
        )}
        <UnitF
          label="Depth"
          value={depth}
          set={setDepth}
          unit={depthUnit}
          setUnit={setDepthUnit}
          options={DIMENSION_OPTIONS}
          hint="Raised beds: 12 in; lawn topdress: 1–2 in"
        />
        <SelectF label="Soil type" value={material} set={setMaterial} options={materialOptions} />
        <SelectF label="Settlement / compaction buffer" value={settlement} set={setSettlement} options={SETTLEMENT_OPTIONS} hint={settleHint} />
        <h3 style={{ marginTop: 26 }}>Cost estimate</h3>
        <div className="field-row">
          <F label="Price per cubic yard ($)" value={price} set={setPrice} />
          <F label="Delivery fee ($)" value={delivery} set={setDelivery} />
        </div>
        <div className="field-row">
          <F label="Tax (%)" value={taxPct} set={setTaxPct} />
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Cubic meters" value={fmtNum(r.yards * YD3_TO_M3)} />
        <Row label="Weight" value={`${fmtNum(r.tons)} tons`} />
        <Row label="Tonnes" value={fmtNum(r.tons * TONS_TO_TONNES)} />
        <Row label={`With settlement (×${(1 + r.sf).toFixed(2)})`} value={`${fmtNum(r.overage)} yd³`} />
        <Row label="Overage weight" value={`${fmtNum(r.overageTons)} tons`} />
        {r.total > 0 && (
          <>
            <div
              style={{
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: ".1em",
                color: "#94a3b8",
                marginTop: 20,
                marginBottom: 8,
              }}
            >
              Cost estimate (order quantity)
            </div>
            <Row label="Material" value={fmt$(r.materialCost)} />
            <Row label="Delivery" value={fmt$(r.deliv)} />
            <Row label="Tax" value={fmt$(r.tax)} />
            <TotalRow label="Project total" value={fmt$(r.total)} />
          </>
        )}
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Loose soil settles after placement — topsoil 10–20%, fill dirt
            10–15%, sand about 5%. Order the buffer: a hole never takes less
            than the math says.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { UnitF, SelectF, ResultHead, Row, TotalRow, ResultNote, num, DIMENSION_OPTIONS } from "./Fields";
import { toFeet, cubicYards, withOverage, DENSITIES, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum } from "../lib/format";

// Soil options derived from DENSITIES — the single source of truth.
const soilKeys = ["topsoil", "dirt", "garden"];
const materialOptions = soilKeys.map((value) => ({
  value,
  label: `${DENSITIES[value].label} — ${fmtNum(DENSITIES[value].lbs / 2000)} tons/yd³`,
}));

export default function DirtCalculator() {
  const [length, setLength] = useState("4");
  const [width, setWidth] = useState("8");
  const [depth, setDepth] = useState("12");
  const [depthUnit, setDepthUnit] = useState("in");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [widthUnit, setWidthUnit] = useState("ft");
  const [material, setMaterial] = useState("topsoil");

  const r = useMemo(() => {
    const yards = cubicYards(toFeet(length, lengthUnit), toFeet(width, widthUnit), toFeet(depth, depthUnit));
    const tons = yards * ((DENSITIES[material]?.lbs ?? 2400) / 2000);
    const overage = withOverage(yards);
    const overageTons = withOverage(tons);
    return { yards, tons, overage, overageTons };
  }, [length, lengthUnit, width, widthUnit, depth, depthUnit, material]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Fill dimensions</h3>
        <div className="field-row">
          <UnitF label="Length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
          <UnitF label="Width" value={width} set={setWidth} unit={widthUnit} setUnit={setWidthUnit} options={DIMENSION_OPTIONS} />
        </div>
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
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Cubic meters" value={fmtNum(r.yards * YD3_TO_M3)} />
        <Row label="Weight" value={`${fmtNum(r.tons)} tons`} />
        <Row label="Tonnes" value={fmtNum(r.tons * TONS_TO_TONNES)} />
        <Row label="With 10% overage" value={`${fmtNum(r.overage)} yd³`} />
        <Row label="Overage weight" value={`${fmtNum(r.overageTons)} tons`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Loose dirt compacts 10–30% after placement. Order the overage —
            a hole never takes less than the math says.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

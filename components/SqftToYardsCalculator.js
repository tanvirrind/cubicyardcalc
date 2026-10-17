"use client";

import { useMemo, useState } from "react";
import { F, UnitF, SelectF, ResultHead, Row, TotalRow, ResultNote, num, DIMENSION_OPTIONS } from "./Fields";
import { toFeet, densityLbs, densityOptions, SHAPE_OPTIONS, shapeAreaSqFt, withOverage, DENSITIES, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum } from "../lib/format";

const materialOptions = Object.entries(DENSITIES).map(([value, d]) => ({
  value,
  label: d.label,
}));

export default function SqftToYardsCalculator() {
  const [area, setArea] = useState("1000");
  const [depth, setDepth] = useState("3");
  const [depthUnit, setDepthUnit] = useState("in");
  const [material, setMaterial] = useState("gravel");
  const [densityIdx, setDensityIdx] = useState("0");

  const r = useMemo(() => {
    const sqft = num(area);
    const dFt = toFeet(depth, depthUnit);
    const yards = (sqft * dFt) / 27;
    const tons = (yards * densityLbs(material, densityIdx)) / 2000;
    return { yards, feet: yards * 27, tons, overage: withOverage(yards) };
  }, [area, depth, depthUnit, material, densityIdx]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Area & depth</h3>
        <F label="Area (square feet)" value={area} set={setArea} />
        <UnitF
          label="Depth"
          value={depth}
          set={setDepth}
          unit={depthUnit}
          setUnit={setDepthUnit}
          options={DIMENSION_OPTIONS}
          hint="Depth is required — area alone can't become volume"
        />
        <SelectF
          label="Material (for weight estimate)"
          value={material}
          set={(v) => { setMaterial(v); setDensityIdx("0"); }}
          options={materialOptions}
        />
        <SelectF
          label="Material type (density)"
          value={densityIdx}
          set={setDensityIdx}
          options={densityOptions(material)}
          hint="Weight changes with type; volume does not"
        />
      </div>

      <div className="result-card">
        <ResultHead>Conversion</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Cubic meters" value={fmtNum(r.yards * YD3_TO_M3)} />
        <Row label="Cubic feet" value={fmtNum(r.feet)} />
        <Row label="Weight (tons)" value={fmtNum(r.tons)} />
        <Row label="Weight (tonnes)" value={fmtNum(r.tons * TONS_TO_TONNES)} />
        <Row label="With 10% overage" value={`${fmtNum(r.overage)} yd³`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Formula: square feet × depth in feet ÷ 27. Convert inches to feet
            first (inches ÷ 12) — the calculator does it for you.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

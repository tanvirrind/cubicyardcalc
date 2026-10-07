"use client";

import { useMemo, useState } from "react";
import { F, UnitF, SelectF, ResultHead, Row, TotalRow, ResultNote, num, DEPTH_OPTIONS } from "./Fields";
import { toFeet, cubicYards, withOverage, DENSITIES } from "../lib/calc";
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

  const r = useMemo(() => {
    const sqft = num(area);
    const dFt = toFeet(depth, depthUnit);
    const yards = (sqft * dFt) / 27;
    const tons = (yards * (DENSITIES[material]?.lbs ?? 0)) / 2000;
    return { yards, feet: yards * 27, tons, overage: withOverage(yards) };
  }, [area, depth, depthUnit, material]);

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
          options={DEPTH_OPTIONS}
          hint="Depth is required — area alone can't become volume"
        />
        <SelectF
          label="Material (for weight estimate)"
          value={material}
          set={setMaterial}
          options={materialOptions}
        />
      </div>

      <div className="result-card">
        <ResultHead>Conversion</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Cubic feet" value={fmtNum(r.feet)} />
        <Row label="Weight (tons)" value={fmtNum(r.tons)} />
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

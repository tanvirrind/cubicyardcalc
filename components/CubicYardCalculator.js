"use client";

import { useMemo, useState } from "react";
import { F, UnitF, SelectF, ResultHead, Row, TotalRow, ResultNote, num, DEPTH_OPTIONS } from "./Fields";
import { toFeet, cubicYards, withOverage, DENSITIES } from "../lib/calc";
import { fmtNum } from "../lib/format";

const materialOptions = Object.entries(DENSITIES).map(([value, d]) => ({
  value,
  label: d.label,
}));

export default function CubicYardCalculator() {
  const [length, setLength] = useState("10");
  const [width, setWidth] = useState("10");
  const [depth, setDepth] = useState("4");
  const [depthUnit, setDepthUnit] = useState("in");
  const [material, setMaterial] = useState("gravel");

  const r = useMemo(() => {
    const lFt = toFeet(length, "ft");
    const wFt = toFeet(width, "ft");
    const dFt = toFeet(depth, depthUnit);
    const yards = cubicYards(lFt, wFt, dFt);
    const feet = yards * 27;
    const overage = withOverage(yards);
    const lbs = yards * (DENSITIES[material]?.lbs ?? 0);
    const tons = lbs / 2000;
    return { yards, feet, overage, lbs, tons };
  }, [length, width, depth, depthUnit, material]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Project dimensions</h3>
        <div className="field-row">
          <F label="Length (ft)" value={length} set={setLength} />
          <F label="Width (ft)" value={width} set={setWidth} />
        </div>
        <UnitF
          label="Depth"
          value={depth}
          set={setDepth}
          unit={depthUnit}
          setUnit={setDepthUnit}
          options={DEPTH_OPTIONS}
          hint="Inches is typical for slabs, driveways and beds"
        />
        <SelectF
          label="Material (for weight estimate)"
          value={material}
          set={setMaterial}
          options={materialOptions}
        />
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Cubic feet" value={fmtNum(r.feet)} />
        <Row label="Weight" value={`${fmtNum(r.lbs, 0)} lbs`} />
        <Row label="Weight (tons)" value={fmtNum(r.tons)} />
        <Row label="With 10% overage" value={`${fmtNum(r.overage)} yd³`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Formula: length × width × depth (in feet) ÷ 27. Overage covers
            compaction, spillage and uneven ground.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

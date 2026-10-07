"use client";

import { useMemo, useState } from "react";
import { F, UnitF, ResultHead, Row, TotalRow, ResultNote, DEPTH_OPTIONS } from "./Fields";
import { toFeet, cubicYards, withOverage, DENSITIES } from "../lib/calc";
import { fmtNum } from "../lib/format";

export default function GravelCalculator() {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("20");
  const [depth, setDepth] = useState("4");
  const [depthUnit, setDepthUnit] = useState("in");

  const r = useMemo(() => {
    const yards = cubicYards(toFeet(length, "ft"), toFeet(width, "ft"), toFeet(depth, depthUnit));
    const tons = (yards * DENSITIES.gravel.lbs) / 2000; // ≈1.4 tons/yd³
    const overage = withOverage(yards);
    return { yards, tons, overage, overageTons: withOverage(tons) };
  }, [length, width, depth, depthUnit]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Area dimensions</h3>
        <div className="field-row">
          <F label="Length (ft)" value={length} set={setLength} />
          <F label="Width (ft)" value={width} set={setWidth} />
        </div>
        <UnitF
          label="Gravel depth"
          value={depth}
          set={setDepth}
          unit={depthUnit}
          setUnit={setDepthUnit}
          options={DEPTH_OPTIONS}
          hint="Count the full base depth, not just the top layer"
        />
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Tons" value={fmtNum(r.tons)} />
        <Row label="Weight (lbs)" value={fmtNum(r.tons * 2000, 0)} />
        <Row label="With 10% overage" value={`${fmtNum(r.overage)} yd³`} />
        <Row label="Overage (tons)" value={fmtNum(r.overageTons)} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Gravel weighs ~2,800 lbs per yard (1.4 tons). Suppliers usually
            bill by the ton — the math above matches their scale tickets.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

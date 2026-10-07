"use client";

import { useMemo, useState } from "react";
import { F, UnitF, ResultHead, Row, TotalRow, ResultNote, DEPTH_OPTIONS } from "./Fields";
import { toFeet, cubicYards, withOverage, DENSITIES } from "../lib/calc";
import { fmtNum } from "../lib/format";

export default function SandCalculator() {
  const [length, setLength] = useState("10");
  const [width, setWidth] = useState("10");
  const [depth, setDepth] = useState("2");
  const [depthUnit, setDepthUnit] = useState("in");

  const r = useMemo(() => {
    const yards = cubicYards(toFeet(length, "ft"), toFeet(width, "ft"), toFeet(depth, depthUnit));
    const tons = (yards * DENSITIES.sand.lbs) / 2000; // ≈1.35 tons/yd³
    const overage = withOverage(yards);
    const bags50 = Math.ceil((yards * DENSITIES.sand.lbs) / 50);
    return { yards, tons, overage, overageTons: withOverage(tons), bags50 };
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
          label="Sand depth"
          value={depth}
          set={setDepth}
          unit={depthUnit}
          setUnit={setDepthUnit}
          options={DEPTH_OPTIONS}
          hint="Paver bedding: 1 in; leveling: 2 in"
        />
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Tons" value={fmtNum(r.tons)} />
        <Row label="Weight (lbs)" value={fmtNum(r.tons * 2000, 0)} />
        <Row label="With 10% overage" value={`${fmtNum(r.overage)} yd³`} />
        <Row label="50 lb bags (approx.)" value={r.bags50.toLocaleString("en-US")} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Sand weighs ~2,700 lbs per yard dry (1.35 tons). Wet sand weighs
            more — assume the heavy end if the pile has been rained on.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

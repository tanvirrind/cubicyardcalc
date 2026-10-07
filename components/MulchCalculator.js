"use client";

import { useMemo, useState } from "react";
import { F, UnitF, ResultHead, Row, TotalRow, ResultNote, DEPTH_OPTIONS } from "./Fields";
import { toFeet, cubicYards, withOverage, DENSITIES, MULCH_BAGS_PER_YARD } from "../lib/calc";
import { fmtNum } from "../lib/format";

export default function MulchCalculator() {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("10");
  const [depth, setDepth] = useState("3");
  const [depthUnit, setDepthUnit] = useState("in");

  const r = useMemo(() => {
    const yards = cubicYards(toFeet(length, "ft"), toFeet(width, "ft"), toFeet(depth, depthUnit));
    const overage = withOverage(yards);
    const bags = MULCH_BAGS_PER_YARD.map((b) => ({
      label: b.label,
      count: Math.ceil(yards * b.perYard),
    }));
    const tons = (yards * DENSITIES.mulch.lbs) / 2000;
    return { yards, overage, bags, tons };
  }, [length, width, depth, depthUnit]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Bed dimensions</h3>
        <div className="field-row">
          <F label="Length (ft)" value={length} set={setLength} />
          <F label="Width (ft)" value={width} set={setWidth} />
        </div>
        <UnitF
          label="Mulch depth"
          value={depth}
          set={setDepth}
          unit={depthUnit}
          setUnit={setDepthUnit}
          options={DEPTH_OPTIONS}
          hint="2 in = refresh, 3 in = most new beds, 4 in = heavy weed control"
        />
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Weight (approx.)" value={`${fmtNum(r.tons)} tons`} />
        <Row label="With 10% overage" value={`${fmtNum(r.overage)} yd³`} />
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
          Bagged mulch (rounded up)
        </div>
        {r.bags.map((b) => (
          <Row key={b.label} label={b.label} value={b.count.toLocaleString("en-US")} />
        ))}
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            One cubic yard = 27 cubic feet = 13.5 bags of 2 cu ft mulch.
            Over ~2 yards, bulk delivery is usually cheaper than bags.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

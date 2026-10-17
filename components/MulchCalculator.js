"use client";

import { useMemo, useState } from "react";
import { UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS } from "./Fields";
import { toFeet, cubicYards, withOverage, DENSITIES, MULCH_BAGS_PER_YARD, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum } from "../lib/format";

export default function MulchCalculator() {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("10");
  const [depth, setDepth] = useState("3");
  const [depthUnit, setDepthUnit] = useState("in");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [widthUnit, setWidthUnit] = useState("ft");

  const r = useMemo(() => {
    const yards = cubicYards(toFeet(length, lengthUnit), toFeet(width, widthUnit), toFeet(depth, depthUnit));
    const overage = withOverage(yards);
    const bags = MULCH_BAGS_PER_YARD.map((b) => ({
      label: b.label,
      count: Math.ceil(yards * b.perYard),
    }));
    const tons = (yards * DENSITIES.mulch.lbs) / 2000;
    return { yards, overage, bags, tons };
  }, [length, lengthUnit, width, widthUnit, depth, depthUnit]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Bed dimensions</h3>
        <div className="field-row">
          <UnitF label="Length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
          <UnitF label="Width" value={width} set={setWidth} unit={widthUnit} setUnit={setWidthUnit} options={DIMENSION_OPTIONS} />
        </div>
        <UnitF
          label="Mulch depth"
          value={depth}
          set={setDepth}
          unit={depthUnit}
          setUnit={setDepthUnit}
          options={DIMENSION_OPTIONS}
          hint="2 in = refresh, 3 in = most new beds, 4 in = heavy weed control"
        />
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Cubic meters" value={fmtNum(r.yards * YD3_TO_M3)} />
        <Row label="Weight (approx.)" value={`${fmtNum(r.tons)} tons`} />
        <Row label="Tonnes" value={fmtNum(r.tons * TONS_TO_TONNES)} />
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

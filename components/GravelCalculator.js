"use client";

import { useMemo, useState } from "react";
import { UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS } from "./Fields";
import { toFeet, cubicYards, withOverage, DENSITIES, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum } from "../lib/format";

export default function GravelCalculator() {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("20");
  const [depth, setDepth] = useState("4");
  const [depthUnit, setDepthUnit] = useState("in");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [widthUnit, setWidthUnit] = useState("ft");

  const r = useMemo(() => {
    const yards = cubicYards(toFeet(length, lengthUnit), toFeet(width, widthUnit), toFeet(depth, depthUnit));
    const tons = (yards * DENSITIES.gravel.lbs) / 2000; // ≈1.4 tons/yd³
    const overage = withOverage(yards);
    return { yards, tons, overage, overageTons: withOverage(tons) };
  }, [length, lengthUnit, width, widthUnit, depth, depthUnit]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Area dimensions</h3>
        <div className="field-row">
          <UnitF label="Length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
          <UnitF label="Width" value={width} set={setWidth} unit={widthUnit} setUnit={setWidthUnit} options={DIMENSION_OPTIONS} />
        </div>
        <UnitF
          label="Gravel depth"
          value={depth}
          set={setDepth}
          unit={depthUnit}
          setUnit={setDepthUnit}
          options={DIMENSION_OPTIONS}
          hint="Count the full base depth, not just the top layer"
        />
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Cubic meters" value={fmtNum(r.yards * YD3_TO_M3)} />
        <Row label="Tons" value={fmtNum(r.tons)} />
        <Row label="Tonnes" value={fmtNum(r.tons * TONS_TO_TONNES)} />
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

"use client";

import { useMemo, useState } from "react";
import { UnitF, ResultHead, Row, TotalRow, ResultNote, num, DIMENSION_OPTIONS } from "./Fields";
import { toFeet, cubicYards, withOverage, DENSITIES, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum } from "../lib/format";

// Fill dirt preset — density from DENSITIES (2,200 lbs/yd³), the single source of truth.
const LBS_PER_YARD = DENSITIES.dirt.lbs;

export default function FillDirtCalculator() {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("20");
  const [depth, setDepth] = useState("6");
  const [depthUnit, setDepthUnit] = useState("in");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [widthUnit, setWidthUnit] = useState("ft");

  const r = useMemo(() => {
    const yards = cubicYards(toFeet(length, lengthUnit), toFeet(width, widthUnit), toFeet(depth, depthUnit));
    const tons = (yards * LBS_PER_YARD) / 2000;
    const overage = withOverage(yards);
    return { yards, tons, overage, overageTons: withOverage(tons) };
  }, [length, lengthUnit, width, widthUnit, depth, depthUnit]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Grading dimensions</h3>
        <div className="field-row">
          <UnitF label="Length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
          <UnitF label="Width" value={width} set={setWidth} unit={widthUnit} setUnit={setWidthUnit} options={DIMENSION_OPTIONS} />
        </div>
        <UnitF
          label="Fill depth"
          value={depth}
          set={setDepth}
          unit={depthUnit}
          setUnit={setDepthUnit}
          options={DIMENSION_OPTIONS}
          hint="Measure the average depth across the full area"
        />
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
            Fill dirt compacts — order the overage, especially under slabs or
            pavers. Confirm screened vs. common fill with your supplier.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

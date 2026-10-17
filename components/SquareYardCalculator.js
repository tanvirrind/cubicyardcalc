"use client";

import { useMemo, useState } from "react";
import { UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS } from "./Fields";
import { toFeet, SQYD_TO_SQM } from "../lib/calc";
import { fmtNum } from "../lib/format";

export default function SquareYardCalculator() {
  const [length, setLength] = useState("12");
  const [width, setWidth] = useState("15");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [widthUnit, setWidthUnit] = useState("ft");

  const r = useMemo(() => {
    const sqft = toFeet(length, lengthUnit) * toFeet(width, widthUnit);
    const sqyd = sqft / 9;
    const sqm = sqyd * SQYD_TO_SQM;
    return { sqft, sqyd, sqm };
  }, [length, lengthUnit, width, widthUnit]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Area dimensions</h3>
        <div className="field-row">
          <UnitF label="Length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
          <UnitF label="Width" value={width} set={setWidth} unit={widthUnit} setUnit={setWidthUnit} options={DIMENSION_OPTIONS} />
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Area</ResultHead>
        <TotalRow label="Square yards" value={fmtNum(r.sqyd)} />
        <Row label="Square feet" value={fmtNum(r.sqft, 0)} />
        <Row label="Square meters" value={fmtNum(r.sqm)} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Square feet ÷ 9 = square yards. Remember: square yards measure
            flat area — for volume (mulch, soil, concrete) use cubic yards,
            which also need depth.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

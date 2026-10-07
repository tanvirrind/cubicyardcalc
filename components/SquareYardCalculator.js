"use client";

import { useMemo, useState } from "react";
import { F, ResultHead, Row, TotalRow, ResultNote, num } from "./Fields";
import { fmtNum } from "../lib/format";

export default function SquareYardCalculator() {
  const [length, setLength] = useState("12");
  const [width, setWidth] = useState("15");

  const r = useMemo(() => {
    const sqft = num(length) * num(width);
    const sqyd = sqft / 9;
    return { sqft, sqyd };
  }, [length, width]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Area dimensions</h3>
        <div className="field-row">
          <F label="Length (ft)" value={length} set={setLength} />
          <F label="Width (ft)" value={width} set={setWidth} />
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Area</ResultHead>
        <TotalRow label="Square yards" value={fmtNum(r.sqyd)} />
        <Row label="Square feet" value={fmtNum(r.sqft, 0)} />
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

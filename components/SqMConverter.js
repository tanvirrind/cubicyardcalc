"use client";

import { useMemo, useState } from "react";
import { F, SelectF, ResultHead, Row, TotalRow, ResultNote, num } from "./Fields";
import { SQYD_TO_SQM } from "../lib/calc";
import { fmtNum } from "../lib/format";

export default function SqMConverter() {
  const [mode, setMode] = useState("m2"); // m2 -> yd2, or yd2 -> m2
  const [amount, setAmount] = useState("100");

  const r = useMemo(() => {
    const a = num(amount);
    const primary = mode === "m2" ? a / SQYD_TO_SQM : a * SQYD_TO_SQM;
    const sqft = mode === "m2" ? primary * 9 : a * 9;
    return {
      primaryLabel: mode === "m2" ? "Square yards" : "Square meters",
      primary,
      secondaryLabel: mode === "m2" ? "Square meters entered" : "Square yards entered",
      secondary: a,
      sqft,
    };
  }, [mode, amount]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Convert</h3>
        <SelectF
          label="Convert from"
          value={mode}
          set={setMode}
          options={[
            { value: "m2", label: "Square meters → square yards" },
            { value: "yd2", label: "Square yards → square meters" },
          ]}
        />
        <F
          label={mode === "m2" ? "Square meters" : "Square yards"}
          value={amount}
          set={setAmount}
        />
      </div>

      <div className="result-card">
        <ResultHead>Conversion</ResultHead>
        <TotalRow label={r.primaryLabel} value={fmtNum(r.primary)} />
        <Row label={r.secondaryLabel} value={fmtNum(r.secondary)} />
        <Row label="Square feet" value={fmtNum(r.sqft)} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            1 m² = 1.19599 yd² (÷ 0.836127). 1 yd² = 0.8361 m² (× 0.836127).
            Square yards × 9 = square feet — every time.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

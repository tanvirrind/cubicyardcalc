"use client";

import { useMemo, useState } from "react";
import { F, SelectF, ResultHead, Row, TotalRow, ResultNote, num } from "./Fields";
import { fmtNum } from "../lib/format";

export default function CubicFeetConverter() {
  const [mode, setMode] = useState("ft3"); // ft3 -> yd3, or yd3 -> ft3
  const [amount, setAmount] = useState("54");

  const r = useMemo(() => {
    const a = num(amount);
    const primary = mode === "ft3" ? a / 27 : a * 27;
    return {
      primaryLabel: mode === "ft3" ? "Cubic yards" : "Cubic feet",
      primary,
      secondaryLabel: mode === "ft3" ? "Cubic feet entered" : "Cubic yards entered",
      secondary: a,
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
            { value: "ft3", label: "Cubic feet → cubic yards" },
            { value: "yd3", label: "Cubic yards → cubic feet" },
          ]}
        />
        <F
          label={mode === "ft3" ? "Cubic feet" : "Cubic yards"}
          value={amount}
          set={setAmount}
        />
      </div>

      <div className="result-card">
        <ResultHead>Conversion</ResultHead>
        <TotalRow label={r.primaryLabel} value={fmtNum(r.primary)} />
        <Row label={r.secondaryLabel} value={fmtNum(r.secondary)} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            ft³ ÷ 27 = yd³. yd³ × 27 = ft³. A cubic yard is a 3 × 3 × 3 ft
            cube — 27 cubic feet, every time.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

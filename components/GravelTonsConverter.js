"use client";

import { useMemo, useState } from "react";
import { F, SelectF, ResultHead, Row, TotalRow, ResultNote, num } from "./Fields";
import { withOverage, DENSITIES } from "../lib/calc";
import { fmtNum } from "../lib/format";

// Gravel density from DENSITIES (2,800 lbs/yd³ = 1.4 t/yd³) — single source of truth.
const TONS_PER_YARD = DENSITIES.gravel.lbs / 2000;

export default function GravelTonsConverter() {
  const [mode, setMode] = useState("yards"); // yards -> tons, or tons -> yards
  const [amount, setAmount] = useState("5");

  const r = useMemo(() => {
    const a = num(amount);
    const primary = mode === "yards" ? a * TONS_PER_YARD : a / TONS_PER_YARD;
    return {
      primaryLabel: mode === "yards" ? "Tons" : "Cubic yards",
      primary,
      secondaryLabel: mode === "yards" ? "Yards entered" : "Tons entered",
      secondary: a,
      overagePrimary: withOverage(primary),
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
            { value: "yards", label: "Cubic yards → tons" },
            { value: "tons", label: "Tons → cubic yards" },
          ]}
        />
        <F
          label={mode === "yards" ? "Cubic yards" : "Tons (US short tons)"}
          value={amount}
          set={setAmount}
        />
      </div>

      <div className="result-card">
        <ResultHead>Conversion</ResultHead>
        <TotalRow label={r.primaryLabel} value={fmtNum(r.primary)} />
        <Row label={r.secondaryLabel} value={fmtNum(r.secondary)} />
        <Row label="Density used" value={`${fmtNum(TONS_PER_YARD)} tons/yd³`} />
        <Row label="Rounded up (+10%)" value={fmtNum(r.overagePrimary)} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Yards × {fmtNum(TONS_PER_YARD)} = tons. Tons ÷ {fmtNum(TONS_PER_YARD)}{" "}
            = yards. Stone type and moisture change real weight — confirm with
            your supplier&apos;s quote.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

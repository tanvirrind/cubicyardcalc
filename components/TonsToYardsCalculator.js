"use client";

import { useMemo, useState } from "react";
import { F, SelectF, ResultHead, Row, TotalRow, ResultNote, num } from "./Fields";
import { withOverage, DENSITIES } from "../lib/calc";
import { fmtNum } from "../lib/format";

// Labels derived from DENSITIES — the single source of truth for densities.
const materialKeys = ["topsoil", "dirt", "gravel", "sand", "mulch", "concrete"];
const materialOptions = materialKeys.map((value) => ({
  value,
  label: `${DENSITIES[value].label} — ${fmtNum(DENSITIES[value].lbs / 2000)} tons/yd³`,
}));

export default function TonsToYardsCalculator() {
  const [mode, setMode] = useState("tons"); // tons → yards, or yards → tons
  const [amount, setAmount] = useState("5");
  const [material, setMaterial] = useState("gravel");

  const r = useMemo(() => {
    const a = num(amount);
    const density = (DENSITIES[material]?.lbs ?? 2800) / 2000;
    const yards = mode === "tons" ? a / density : a;
    const tons = mode === "tons" ? a : a * density;
    return {
      primaryLabel: mode === "tons" ? "Cubic yards" : "Tons",
      primary: mode === "tons" ? yards : tons,
      secondaryLabel: mode === "tons" ? "Tons entered" : "Yards entered",
      secondary: mode === "tons" ? tons : yards,
      overagePrimary: withOverage(mode === "tons" ? yards : tons),
      density,
    };
  }, [mode, amount, material]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Convert</h3>
        <SelectF
          label="Convert from"
          value={mode}
          set={setMode}
          options={[
            { value: "tons", label: "Tons → cubic yards" },
            { value: "yards", label: "Cubic yards → tons" },
          ]}
        />
        <F
          label={mode === "tons" ? "Tons (US short tons)" : "Cubic yards"}
          value={amount}
          set={setAmount}
        />
        <SelectF label="Material" value={material} set={setMaterial} options={materialOptions} />
      </div>

      <div className="result-card">
        <ResultHead>Conversion</ResultHead>
        <TotalRow label={r.primaryLabel} value={fmtNum(r.primary)} />
        <Row label={r.secondaryLabel} value={fmtNum(r.secondary)} />
        <Row label="Density used" value={`${fmtNum(r.density)} tons/yd³`} />
        <Row label="Rounded up (+10%)" value={fmtNum(r.overagePrimary)} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Tons → yards: yards = tons ÷ density. Yards → tons: tons = yards ×
            density. Moisture changes real density — confirm with your supplier
            for final orders.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

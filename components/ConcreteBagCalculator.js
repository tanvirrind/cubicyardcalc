"use client";

import { useMemo, useState } from "react";
import { F, SelectF, ResultHead, Row, TotalRow, ResultNote, num } from "./Fields";
import { CONCRETE_BAGS_PER_YARD } from "../lib/calc";
import { fmtNum } from "../lib/format";

const bagOptions = CONCRETE_BAGS_PER_YARD.map((b) => ({
  value: b.label,
  label: `${b.label} — ${b.perYard}/yd³`,
}));

export default function ConcreteBagCalculator() {
  const [mode, setMode] = useState("yards"); // yards -> bags, or bags -> yards
  const [yards, setYards] = useState("1");
  const [bagSize, setBagSize] = useState("80 lb bags");
  const [bagCount, setBagCount] = useState("45");

  const perYard =
    CONCRETE_BAGS_PER_YARD.find((b) => b.label === bagSize)?.perYard ?? 45;

  const r = useMemo(() => {
    if (mode === "yards") {
      const y = num(yards);
      return {
        primaryLabel: `${bagSize} needed`,
        primary: Math.ceil(y * perYard).toLocaleString("en-US"),
        secondaryLabel: "Cubic yards entered",
        secondary: fmtNum(y),
      };
    }
    const c = num(bagCount);
    return {
      primaryLabel: "Cubic yards",
      primary: fmtNum(c / perYard),
      secondaryLabel: `${bagSize} entered`,
      secondary: c.toLocaleString("en-US"),
    };
  }, [mode, yards, bagSize, bagCount, perYard]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Convert</h3>
        <SelectF
          label="Convert from"
          value={mode}
          set={setMode}
          options={[
            { value: "yards", label: "Cubic yards → bags" },
            { value: "bags", label: "Bags → cubic yards" },
          ]}
        />
        {mode === "yards" ? (
          <F label="Cubic yards" value={yards} set={setYards} />
        ) : (
          <F label="Number of bags" value={bagCount} set={setBagCount} step="1" />
        )}
        <SelectF label="Bag size" value={bagSize} set={setBagSize} options={bagOptions} />
      </div>

      <div className="result-card">
        <ResultHead>Conversion</ResultHead>
        <TotalRow label={r.primaryLabel} value={r.primary} />
        <Row label={r.secondaryLabel} value={r.secondary} />
        <Row label="Yield used" value={`${perYard} bags/yd³`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Bag counts round up — partial bags don&apos;t exist. Yields vary
            by mix, so verify against the exact product label.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

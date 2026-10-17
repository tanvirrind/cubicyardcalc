"use client";

import { useMemo, useState } from "react";
import { F, SelectF, ResultHead, Row, TotalRow, ResultNote, num } from "./Fields";
import { DENSITIES, densityOptions, densityLbs, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum } from "../lib/format";

// All materials in DENSITIES, labels from the single source of truth.
const materialOptions = Object.entries(DENSITIES).map(([value, d]) => ({
  value,
  label: `${d.label} — ${fmtNum(d.lbs / 2000)} tons/yd³`,
}));

export default function YardsToTonsCalculator() {
  const [amount, setAmount] = useState("10");
  const [material, setMaterial] = useState("gravel");
  const [variantIdx, setVariantIdx] = useState("0");

  // Reset the material-type dropdown to the default variant whenever the
  // material changes, so the density always matches the selected material.
  const onMaterialChange = (key) => {
    setMaterial(key);
    setVariantIdx("0");
  };

  const r = useMemo(() => {
    const a = num(amount);
    const lbsPerYard = densityLbs(material, variantIdx);
    const density = lbsPerYard / 2000; // tons per cubic yard
    const tons = a * density; // US short tons
    const tonnes = tons * TONS_TO_TONNES; // metric tonnes
    const lbs = a * lbsPerYard; // total pounds
    return { tons, tonnes, lbs, density, lbsPerYard };
  }, [amount, material, variantIdx]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Convert</h3>
        <F label="Cubic yards" value={amount} set={setAmount} />
        <SelectF label="Material" value={material} set={onMaterialChange} options={materialOptions} />
        <SelectF
          label="Material type"
          value={variantIdx}
          set={setVariantIdx}
          options={densityOptions(material)}
          hint="Weight changes with type and moisture; volume does not"
        />
      </div>

      <div className="result-card">
        <ResultHead>Conversion</ResultHead>
        <TotalRow label="Tons (US short tons)" value={fmtNum(r.tons)} />
        <Row label="Tonnes (metric)" value={fmtNum(r.tonnes)} />
        <Row label="Total pounds" value={fmtNum(r.lbs)} />
        <Row label="Yards entered" value={fmtNum(num(amount))} />
        <Row label="Density used" value={`${fmtNum(r.density)} tons/yd³ (${fmtNum(r.lbsPerYard)} lbs/yd³)`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Tons = cubic yards × density ÷ 2,000. Metric tonnes = tons ×
            0.9072. Moisture and compaction change real density — pick the
            matching material type and confirm with your supplier for final
            orders.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

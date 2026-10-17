"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { F, num, SelectF, ResultHead, Row, TotalRow, ResultNote } from "./Fields";
import { FENCE_COST, FENCE_MATERIALS_SHARE } from "../lib/calc";
import { fmtNum } from "../lib/format";

/** Whole-dollar range, matching the site's "$1,800–$4,500" style. */
const fmtRange = (lo, hi) => `$${fmtNum(lo, 0)}–$${fmtNum(hi, 0)}`;

const TYPE_OPTIONS = Object.entries(FENCE_COST).map(([value, t]) => ({
  value,
  label: t.label,
}));

const HEIGHT_OPTIONS = [
  { value: "4", label: "4 ft" },
  { value: "6", label: "6 ft (privacy standard)" },
  { value: "8", label: "8 ft" },
];

export default function FenceCostCalculator() {
  const [feet, setFeet] = useState("100");
  const [type, setType] = useState("wood");
  const [height, setHeight] = useState("6");

  const r = useMemo(() => {
    const t = FENCE_COST[type] ?? { label: "", perFt: {} };
    const perFt = t.perFt?.[height] ?? [0, 0];
    const ft = num(feet);
    const lo = ft * perFt[0];
    const hi = ft * perFt[1];
    const matLo = lo * FENCE_MATERIALS_SHARE;
    const matHi = hi * FENCE_MATERIALS_SHARE;
    return { label: t.label, perFt, lo, hi, matLo, matHi };
  }, [feet, type, height]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Fence details</h3>
        <F label="Linear feet" value={feet} set={setFeet} hint="Measure the run where the fence will go — gates are extra" />
        <SelectF label="Fence type" value={type} set={setType} options={TYPE_OPTIONS} />
        <SelectF label="Fence height" value={height} set={setHeight} options={HEIGHT_OPTIONS} hint="Taller fences cost more per foot in both materials and labor" />
      </div>

      <div className="result-card">
        <ResultHead>Ballpark estimate</ResultHead>
        <Row label="Selected fence" value={`${r.label} — ${height} ft`} />
        <Row label="Installed per linear foot" value={fmtRange(r.perFt[0], r.perFt[1])} />
        <TotalRow label="Installed range" value={fmtRange(r.lo, r.hi)} />
        <Row label="Materials only — rough share (~50% of installed)" value={fmtRange(r.matLo, r.matHi)} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Ballpark, not a quote. Slopes, gates, old-fence removal, and
            permits all move the number; labor is roughly the other half of
            installed cost. See <Link href="/methodology/">how we estimate</Link>{" "}
            for what these ranges assume.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

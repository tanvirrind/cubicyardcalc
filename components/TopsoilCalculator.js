"use client";

import { useMemo, useState } from "react";
import { F, UnitF, ResultHead, Row, TotalRow, ResultNote, num, DEPTH_OPTIONS } from "./Fields";
import { toFeet, cubicYards, withOverage, DENSITIES } from "../lib/calc";
import { fmtNum } from "../lib/format";

// Topsoil density from DENSITIES (2,400 lbs/yd³ = 1.2 t/yd³) — single source of truth.
const LBS_PER_YARD = DENSITIES.topsoil.lbs;

const PRESETS = [
  { label: "4×8 ft raised bed @ 12 in", l: "4", w: "8", d: "12", u: "in" },
  { label: "10×10 ft garden @ 6 in", l: "10", w: "10", d: "6", u: "in" },
  { label: "1,000 sq ft topdress @ 1 in", l: "100", w: "10", d: "1", u: "in" },
];

export default function TopsoilCalculator() {
  const [length, setLength] = useState("10");
  const [width, setWidth] = useState("10");
  const [depth, setDepth] = useState("6");
  const [depthUnit, setDepthUnit] = useState("in");

  const applyPreset = (p) => {
    setLength(p.l);
    setWidth(p.w);
    setDepth(p.d);
    setDepthUnit(p.u);
  };

  const r = useMemo(() => {
    const yards = cubicYards(toFeet(length, "ft"), toFeet(width, "ft"), toFeet(depth, depthUnit));
    const tons = (yards * LBS_PER_YARD) / 2000;
    const overage = withOverage(yards);
    return { yards, tons, overage, overageTons: withOverage(tons) };
  }, [length, width, depth, depthUnit]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Bed dimensions</h3>
        <div className="field-row">
          <F label="Length (ft)" value={length} set={setLength} />
          <F label="Width (ft)" value={width} set={setWidth} />
        </div>
        <UnitF
          label="Soil depth"
          value={depth}
          set={setDepth}
          unit={depthUnit}
          setUnit={setDepthUnit}
          options={DEPTH_OPTIONS}
          hint="Raised beds: 8–12 in; lawn topdress: 1–2 in"
        />
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 6 }}>
            Quick presets
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => applyPreset(p)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Weight" value={`${fmtNum(r.tons)} tons`} />
        <Row label="With 10% overage" value={`${fmtNum(r.overage)} yd³`} />
        <Row label="Overage weight" value={`${fmtNum(r.overageTons)} tons`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Topsoil settles after spreading — the overage covers it. For
            grading or raising low spots (not planting), use fill dirt
            instead: it&apos;s cheaper.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

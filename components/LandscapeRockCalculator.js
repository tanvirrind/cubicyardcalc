"use client";

import { useMemo, useState } from "react";
import { F, UnitF, ResultHead, Row, TotalRow, ResultNote, num, DEPTH_OPTIONS } from "./Fields";
import { toFeet, cubicYards, withOverage, DENSITIES } from "../lib/calc";
import { fmtNum } from "../lib/format";

// Rock density from DENSITIES (4,500 lbs/yd³) — the single source of truth.
const LBS_PER_YARD = DENSITIES.rock.lbs;

export default function LandscapeRockCalculator() {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("10");
  const [depth, setDepth] = useState("3");
  const [depthUnit, setDepthUnit] = useState("in");

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
          label="Rock depth"
          value={depth}
          set={setDepth}
          unit={depthUnit}
          setUnit={setDepthUnit}
          options={DEPTH_OPTIONS}
          hint="2–3 in for decorative beds, deeper for drainage"
        />
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Weight" value={`${fmtNum(r.tons)} tons`} />
        <Row label="With 10% overage" value={`${fmtNum(r.overage)} yd³`} />
        <Row label="Overage weight" value={`${fmtNum(r.overageTons)} tons`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Weight uses {LBS_PER_YARD.toLocaleString("en-US")} lbs per cubic
            yard — dense stone. Lighter decorative rock weighs less; confirm
            your stone&apos;s density with the supplier.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

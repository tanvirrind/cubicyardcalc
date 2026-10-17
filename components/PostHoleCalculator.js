"use client";

import { useMemo, useState } from "react";
import { F, UnitF, SelectF, ResultHead, Row, TotalRow, ResultNote, num, DIMENSION_OPTIONS, WASTE_OPTIONS } from "./Fields";
import { toFeet, withOverage, CONCRETE_BAGS_PER_YARD, YD3_TO_M3 } from "../lib/calc";
import { fmtNum } from "../lib/format";

export default function PostHoleCalculator() {
  const [diameter, setDiameter] = useState("12");
  const [diameterUnit, setDiameterUnit] = useState("in");
  const [depth, setDepth] = useState("36");
  const [depthUnit, setDepthUnit] = useState("in");
  const [holes, setHoles] = useState("1");
  const [postSide, setPostSide] = useState("3.5");
  const [postUnit, setPostUnit] = useState("in");
  const [waste, setWaste] = useState("10");

  const r = useMemo(() => {
    const dFt = toFeet(diameter, diameterUnit);
    const hFt = toFeet(depth, depthUnit);
    const sideFt = toFeet(postSide, postUnit);
    const n = num(holes, 1) || 1;

    const holeFt3 = Math.PI * (dFt / 2) ** 2 * hFt;
    const postFt3 = sideFt > 0 ? sideFt * sideFt * hFt : 0;
    const netFt3 = Math.max(holeFt3 - postFt3, 0);
    const totalFt3 = netFt3 * n;
    const totalYd3 = totalFt3 / 27;

    const factor = num(waste, 10) / 100;
    const overageFt3 = withOverage(totalFt3, factor);
    const overageYd3 = overageFt3 / 27;

    // ft³ yield per bag, derived from the shared per-yard table (27 ÷ perYard).
    const bags = CONCRETE_BAGS_PER_YARD.map((b) => {
      const yieldFt3 = 27 / b.perYard;
      return {
        label: b.label,
        yieldFt3,
        count: Math.ceil(overageFt3 / yieldFt3),
      };
    });

    return { holeFt3, postFt3, netFt3, totalFt3, totalYd3, overageFt3, overageYd3, bags, n };
  }, [diameter, diameterUnit, depth, depthUnit, holes, postSide, postUnit, waste]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Hole dimensions</h3>
        <div className="field-row">
          <UnitF
            label="Hole diameter"
            value={diameter}
            set={setDiameter}
            unit={diameterUnit}
            setUnit={setDiameterUnit}
            options={DIMENSION_OPTIONS}
            hint="Rule of thumb: 3× the post width"
          />
          <UnitF
            label="Hole depth"
            value={depth}
            set={setDepth}
            unit={depthUnit}
            setUnit={setDepthUnit}
            options={DIMENSION_OPTIONS}
            hint="1/3 of post length, or below frost line"
          />
        </div>
        <div className="field-row">
          <F
            label="Number of holes"
            value={holes}
            set={setHoles}
            step="1"
            min="1"
          />
          <UnitF
            label="Square post side"
            value={postSide}
            set={setPostSide}
            unit={postUnit}
            setUnit={setPostUnit}
            options={DIMENSION_OPTIONS}
            hint="3.5 in for a 4×4 post. Enter 0 to skip."
          />
        </div>
        <SelectF
          label="Waste & overage"
          value={waste}
          set={setWaste}
          options={WASTE_OPTIONS}
          hint="Concrete sinks into loose soil — 10% is the safe default"
        />
      </div>

      <div className="result-card">
        <ResultHead>Concrete needed</ResultHead>
        <Row label="Per hole (net of post)" value={`${fmtNum(r.netFt3)} ft³`} />
        <TotalRow label={`${r.n} hole${r.n === 1 ? "" : "s"} — total`} value={`${fmtNum(r.totalFt3)} ft³`} />
        <Row label="Cubic yards" value={fmtNum(r.totalYd3, 3)} />
        <Row label="Cubic meters" value={fmtNum(r.totalYd3 * YD3_TO_M3, 3)} />
        <Row
          label={`With ${waste}% overage`}
          value={`${fmtNum(r.overageFt3)} ft³`}
        />
        <div
          style={{
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: ".1em",
            color: "#94a3b8",
            marginTop: 20,
            marginBottom: 8,
          }}
        >
          Bags (rounded up, includes overage)
        </div>
        {r.bags.map((b) => (
          <Row
            key={b.label}
            label={b.label}
            value={b.count.toLocaleString("en-US")}
          />
        ))}
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Bag yields are manufacturer-rated: an 80 lb bag pours 0.60 ft³,
            so bags = ft³ ÷ yield, rounded up. Under 2 yards, bags beat
            ready-mix — see the concrete bag calculator for the breakeven.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { F, SelectF, UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS, num } from "./Fields";
import { toFeet, REBAR_LBS_PER_FT, REBAR_SIZES, TONS_TO_TONNES, withOverage } from "../lib/calc";
import { fmtNum } from "../lib/format";

const SPACING_OPTIONS = ["6", "12", "18", "24"].map((s) => ({
  value: s,
  label: `${s} in on center`,
}));

const SIZE_OPTIONS = REBAR_SIZES.map((s) => ({ value: s, label: `Bar ${s}` }));

/**
 * One direction of a slab grid: how many parallel bars fit and how long each is.
 * Bars are placed across the perpendicular dimension, each spanning the full
 * direction length minus edge clearance on both sides.
 */
const directionCalc = (dim, dimUnit, spacingIn, clearanceIn) => {
  const dimIn = toFeet(dim, dimUnit) * 12;
  const bars = Math.max(1, Math.floor((dimIn - 2 * clearanceIn) / spacingIn) + 1);
  const barLenFt = Math.max(0, toFeet(dim, dimUnit) - 2 * (clearanceIn / 12));
  return { bars, ft: bars * barLenFt };
};

export default function RebarCalculator() {
  const [length, setLength] = useState("10");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [width, setWidth] = useState("10");
  const [widthUnit, setWidthUnit] = useState("ft");
  const [spacing, setSpacing] = useState("12");
  const [size, setSize] = useState("#4");
  const [clearance, setClearance] = useState("3");
  const [waste, setWaste] = useState("10");

  const r = useMemo(() => {
    const spacingIn = Math.max(1, num(spacing, 12));
    const clearanceIn = num(clearance, 3);
    // Bars running the length direction are spaced across the width, and vice versa.
    const alongL = directionCalc(length, lengthUnit, spacingIn, clearanceIn);
    const alongW = directionCalc(width, widthUnit, spacingIn, clearanceIn);
    const totalBars = alongL.bars + alongW.bars;
    const totalFt = alongL.ft + alongW.ft;
    const lbs = totalFt * (REBAR_LBS_PER_FT[size] ?? 0);
    const tons = lbs / 2000;
    const wastePct = num(waste, 10);
    const overageFt = withOverage(totalFt, wastePct / 100);
    return { alongL, alongW, totalBars, totalFt, lbs, tons, wastePct, overageFt };
  }, [length, lengthUnit, width, widthUnit, spacing, size, clearance, waste]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Slab dimensions</h3>
        <div className="field-row">
          <UnitF label="Length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
          <UnitF label="Width" value={width} set={setWidth} unit={widthUnit} setUnit={setWidthUnit} options={DIMENSION_OPTIONS} />
        </div>
        <div className="field-row">
          <SelectF
            label="Bar spacing"
            value={spacing}
            set={setSpacing}
            options={SPACING_OPTIONS}
            hint="Typical slabs: 12–24 in on center; tighter in structural work"
          />
          <SelectF
            label="Bar size"
            value={size}
            set={setSize}
            options={SIZE_OPTIONS}
            hint="#4 (1/2 in) is the common residential slab bar"
          />
        </div>
        <div className="field-row">
          <F
            label="Edge clearance (in)"
            value={clearance}
            set={setClearance}
            hint="3 in minimum per ACI; more in corrosive or ground-contact conditions"
          />
          <F
            label="Waste %"
            value={waste}
            set={setWaste}
            hint="Covers laps, splices, and cuts"
          />
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Total bars (both directions)" value={r.totalBars.toLocaleString("en-US")} />
        <Row label={`Bars — length direction`} value={r.alongL.bars.toLocaleString("en-US")} />
        <Row label={`Bars — width direction`} value={r.alongW.bars.toLocaleString("en-US")} />
        <Row label="Linear feet" value={fmtNum(r.totalFt)} />
        <Row label="Weight" value={`${fmtNum(r.lbs)} lbs`} />
        <Row label="Weight" value={`${fmtNum(r.tons)} tons (${fmtNum(r.tons * TONS_TO_TONNES)} t)`} />
        <Row label={`With ${r.wastePct}% waste`} value={`${fmtNum(r.overageFt)} ft`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            {`Splice laps are not counted above — a typical Class B splice is about 40× the bar diameter (≈20 in for #4 bar; check ACI 318 for the exact requirement). Add lap allowance through the waste % on jobs with many splices.`}
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

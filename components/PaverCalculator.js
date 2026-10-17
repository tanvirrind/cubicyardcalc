"use client";

import { useMemo, useState } from "react";
import { F, num, SelectF, UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS, WASTE_OPTIONS } from "./Fields";
import { toFeet, densityLbs, densityOptions, PAVER_SIZES } from "../lib/calc";
import { fmtNum } from "../lib/format";

const PAVER_OPTIONS = PAVER_SIZES.map((p, i) => ({ value: String(i), label: p.label })).concat([
  { value: "custom", label: "Custom size…" },
]);

const JOINT_OPTIONS = [
  { value: "0.0625", label: "1/16 in" },
  { value: "0.125", label: "1/8 in (recommended)" },
  { value: "0.1875", label: "3/16 in" },
  { value: "0.25", label: "1/4 in" },
];

export default function PaverCalculator({ initialPaverIdx = "1" }) {
  const [length, setLength] = useState("10");
  const [width, setWidth] = useState("10");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [widthUnit, setWidthUnit] = useState("ft");
  const [paverIdx, setPaverIdx] = useState(initialPaverIdx);
  const [customLength, setCustomLength] = useState("9");
  const [customWidth, setCustomWidth] = useState("9");
  const [joint, setJoint] = useState("0.125");
  const [waste, setWaste] = useState("10");
  const [baseDepth, setBaseDepth] = useState("4");
  const [baseDepthUnit, setBaseDepthUnit] = useState("in");
  const [gravelIdx, setGravelIdx] = useState("0");
  const [sandDepth, setSandDepth] = useState("1");
  const [sandDepthUnit, setSandDepthUnit] = useState("in");

  const r = useMemo(() => {
    const areaSqFt = toFeet(length, lengthUnit) * toFeet(width, widthUnit);
    const j = num(joint);
    let paverL, paverW;
    if (paverIdx === "custom") {
      paverL = num(customLength);
      paverW = num(customWidth);
    } else {
      const p = PAVER_SIZES[parseInt(paverIdx, 10)] ?? PAVER_SIZES[0];
      paverL = p.length;
      paverW = p.width;
    }
    const pitchL = (paverL + j) / 12; // ft
    const pitchW = (paverW + j) / 12; // ft
    const pitchArea = pitchL * pitchW;
    const pavers = pitchArea > 0 ? Math.ceil(areaSqFt / pitchArea) : 0;
    const paversWithWaste = Math.ceil(pavers * (1 + num(waste) / 100));
    const baseDepthFt = toFeet(baseDepth, baseDepthUnit);
    const gravelYards = (areaSqFt * baseDepthFt) / 27;
    const lbs = densityLbs("gravel", gravelIdx);
    const gravelTons = (gravelYards * lbs) / 2000;
    const sandDepthFt = toFeet(sandDepth, sandDepthUnit);
    const sandYards = (areaSqFt * sandDepthFt) / 27;
    return { areaSqFt, paverL, paverW, pavers, paversWithWaste, gravelYards, gravelTons, lbs, sandYards };
  }, [length, lengthUnit, width, widthUnit, paverIdx, customLength, customWidth, joint, waste, baseDepth, baseDepthUnit, gravelIdx, sandDepth, sandDepthUnit]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Area dimensions</h3>
        <div className="field-row">
          <UnitF label="Length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
          <UnitF label="Width" value={width} set={setWidth} unit={widthUnit} setUnit={setWidthUnit} options={DIMENSION_OPTIONS} />
        </div>
        <SelectF label="Paver size" value={paverIdx} set={setPaverIdx} options={PAVER_OPTIONS} hint="Nominal face size; the joint gap is added on top" />
        {paverIdx === "custom" && (
          <div className="field-row">
            <F label="Custom length (in)" value={customLength} set={setCustomLength} />
            <F label="Custom width (in)" value={customWidth} set={setCustomWidth} />
          </div>
        )}
        <SelectF label="Joint gap" value={joint} set={setJoint} options={JOINT_OPTIONS} hint="Spacing between pavers — wider joints eat more pavers per square foot" />
        <SelectF label="Waste & overage" value={waste} set={setWaste} options={WASTE_OPTIONS} hint="Covers cuts, breakage, and future repairs" />

        <h3 style={{ marginTop: 26 }}>Base materials</h3>
        <UnitF
          label="Gravel base depth"
          value={baseDepth}
          set={setBaseDepth}
          unit={baseDepthUnit}
          setUnit={setBaseDepthUnit}
          options={DIMENSION_OPTIONS}
          hint="Compacted crusher run under the bedding sand — 4 in for patios, 6+ in for driveways"
        />
        <SelectF
          label="Gravel type (density)"
          value={gravelIdx}
          set={setGravelIdx}
          options={densityOptions("gravel")}
          hint="Weight changes with type; volume does not"
        />
        <UnitF
          label="Bedding sand depth"
          value={sandDepth}
          set={setSandDepth}
          unit={sandDepthUnit}
          setUnit={setSandDepthUnit}
          options={DIMENSION_OPTIONS}
          hint="Screeded sand the pavers sit in — 1 in is standard"
        />
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <Row label="Patio area" value={`${fmtNum(r.areaSqFt, 1)} sq ft`} />
        <Row label="Pavers needed (net)" value={fmtNum(r.pavers, 0)} />
        <TotalRow label={`With ${waste}% waste`} value={`${fmtNum(r.paversWithWaste, 0)} pavers`} />
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
          Base materials
        </div>
        <Row label="Gravel base" value={`${fmtNum(r.gravelYards)} yd³`} />
        <Row label="Gravel base (tons)" value={fmtNum(r.gravelTons)} />
        <Row label="Bedding sand" value={`${fmtNum(r.sandYards)} yd³ (${fmtNum(r.sandYards * 27, 1)} ft³)`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            {`Paver count assumes ${r.paverL} × ${r.paverW} in pavers laid square with the selected joint gap. Selected gravel weighs ~${r.lbs.toLocaleString("en-US")} lbs per yard — order the base gravel by the ton, the bedding sand by the yard.`}
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

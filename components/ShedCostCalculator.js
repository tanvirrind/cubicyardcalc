"use client";

import { useMemo, useState } from "react";
import { F, num, SelectF, UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS } from "./Fields";
import { toFeet, DENSITIES, SHED_COST } from "../lib/calc";
import { fmtNum } from "../lib/format";

/** Whole-dollar range, matching the site's "$3,000–$5,400" style. */
const fmtRange = (lo, hi) => `$${fmtNum(lo, 0)}–$${fmtNum(hi, 0)}`;

const TYPE_OPTIONS = Object.entries(SHED_COST).map(([value, t]) => ({
  value,
  label: t.label,
}));

export default function ShedCostCalculator() {
  const [length, setLength] = useState("10");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [width, setWidth] = useState("12");
  const [widthUnit, setWidthUnit] = useState("ft");
  const [type, setType] = useState("kit");
  const [padDepth, setPadDepth] = useState("4");
  const [padDepthUnit, setPadDepthUnit] = useState("in");

  const r = useMemo(() => {
    const sqft = toFeet(length, lengthUnit) * toFeet(width, widthUnit);
    const t = SHED_COST[type] ?? { label: "", perSqFt: [0, 0] };
    const padYd3 = (sqft * toFeet(padDepth, padDepthUnit)) / 27;
    const padTons = (padYd3 * DENSITIES.gravel.lbs) / 2000;
    return { sqft, label: t.label, perSqFt: t.perSqFt, padYd3, padTons };
  }, [length, lengthUnit, width, widthUnit, type, padDepth, padDepthUnit]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Shed size</h3>
        <div className="field-row">
          <UnitF label="Length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
          <UnitF label="Width" value={width} set={setWidth} unit={widthUnit} setUnit={setWidthUnit} options={DIMENSION_OPTIONS} />
        </div>
        <SelectF
          label="Build type"
          value={type}
          set={setType}
          options={TYPE_OPTIONS}
          hint="Kit: prefab delivered; custom: site-built by a contractor; shed home: finished and insulated"
        />
        <h3 style={{ marginTop: 26 }}>Gravel pad</h3>
        <UnitF
          label="Pad depth"
          value={padDepth}
          set={setPadDepth}
          unit={padDepthUnit}
          setUnit={setPadDepthUnit}
          options={DIMENSION_OPTIONS}
          hint="4 inches of compacted crushed stone is the standard shed base"
        />
      </div>

      <div className="result-card">
        <ResultHead>Ballpark estimate</ResultHead>
        <TotalRow label="Shed footprint (sq ft)" value={fmtNum(r.sqft)} />
        <Row label={`Per sq ft — ${r.label}`} value={`$${r.perSqFt[0]}–$${r.perSqFt[1]}`} />
        <TotalRow label="Building cost range" value={fmtRange(r.sqft * r.perSqFt[0], r.sqft * r.perSqFt[1])} />
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
          Gravel pad (material only)
        </div>
        <Row label="Pad volume" value={`${fmtNum(r.padYd3)} yd³`} />
        <Row label="Pad weight" value={`${fmtNum(r.padTons)} tons`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Pad figures are material only at {DENSITIES.gravel.lbs.toLocaleString("en-US")} lbs
            per yard — size the actual order with the gravel calculator. The
            building range is a ballpark; permits, electrical, and site prep
            are not included.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

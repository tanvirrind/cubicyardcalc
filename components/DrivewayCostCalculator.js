"use client";

import { useMemo, useState } from "react";
import { F, num, SelectF, UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS } from "./Fields";
import { toFeet, DENSITIES, DRIVEWAY_COST } from "../lib/calc";
import { fmtNum, fmt$ } from "../lib/format";

/** Whole-dollar range, matching the site's "$3,200–$6,400" style. */
const fmtRange = (lo, hi) => `$${fmtNum(lo, 0)}–$${fmtNum(hi, 0)}`;

const MATERIAL_OPTIONS = Object.entries(DRIVEWAY_COST).map(([value, m]) => ({
  value,
  label: m.label,
}));

/** Thickness defaults: 3 in asphalt, 4 in concrete and gravel. */
const defaultThickness = (material) => (material === "asphalt" ? "3" : "4");

export default function DrivewayCostCalculator() {
  const [length, setLength] = useState("20");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [width, setWidth] = useState("40");
  const [widthUnit, setWidthUnit] = useState("ft");
  const [material, setMaterial] = useState("asphalt");
  const [thickness, setThickness] = useState("3");
  const [thicknessUnit, setThicknessUnit] = useState("in");
  const [priceTon, setPriceTon] = useState("0");
  const [priceYd, setPriceYd] = useState("0");

  const pickMaterial = (v) => {
    setMaterial(v);
    setThickness(defaultThickness(v));
  };

  const r = useMemo(() => {
    const lFt = toFeet(length, lengthUnit);
    const wFt = toFeet(width, widthUnit);
    const sqft = lFt * wFt;
    const sqyd = sqft / 9;
    const [lo, hi] = DRIVEWAY_COST[material]?.installedPerSqFt ?? [0, 0];
    const dFt = toFeet(thickness, thicknessUnit);
    const yd3 = (sqft * dFt) / 27;
    const asphaltTons = (yd3 * DENSITIES.asphalt.lbs) / 2000;
    const gravelTons = (yd3 * DENSITIES.gravel.lbs) / 2000;
    // DIY prices the raw volume math; installed is the ballpark range above.
    const diyCost =
      material === "asphalt"
        ? asphaltTons * num(priceTon)
        : material === "concrete"
          ? yd3 * num(priceYd)
          : gravelTons * num(priceTon);
    const showDiy =
      (material === "concrete" && num(priceYd) > 0) ||
      (material !== "concrete" && num(priceTon) > 0);
    return { sqft, sqyd, lo, hi, yd3, asphaltTons, gravelTons, diyCost, showDiy };
  }, [length, lengthUnit, width, widthUnit, material, thickness, thicknessUnit, priceTon, priceYd]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Driveway dimensions</h3>
        <div className="field-row">
          <UnitF label="Length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
          <UnitF label="Width" value={width} set={setWidth} unit={widthUnit} setUnit={setWidthUnit} options={DIMENSION_OPTIONS} />
        </div>
        <SelectF
          label="Driveway material"
          value={material}
          set={pickMaterial}
          options={MATERIAL_OPTIONS}
          hint="Installed ranges mirror our asphalt-vs-concrete cost comparison"
        />
        <h3 style={{ marginTop: 26 }}>DIY material estimate (optional)</h3>
        {material === "asphalt" ? (
          <div className="field-row">
            <UnitF label="Asphalt thickness" value={thickness} set={setThickness} unit={thicknessUnit} setUnit={setThicknessUnit} options={DIMENSION_OPTIONS} hint="2–4 in of compacted hot mix over a stone base" />
            <F label="Price per ton ($)" value={priceTon} set={setPriceTon} hint="Hot-mix asphalt is sold by the ton" />
          </div>
        ) : material === "concrete" ? (
          <div className="field-row">
            <UnitF label="Concrete thickness" value={thickness} set={setThickness} unit={thicknessUnit} setUnit={setThicknessUnit} options={DIMENSION_OPTIONS} hint="4 in minimum for passenger cars" />
            <F label="Price per cubic yard ($)" value={priceYd} set={setPriceYd} hint="Ready-mix delivered price" />
          </div>
        ) : (
          <div className="field-row">
            <UnitF label="Gravel depth" value={thickness} set={setThickness} unit={thicknessUnit} setUnit={setThicknessUnit} options={DIMENSION_OPTIONS} hint="4 in minimum — less ruts fast" />
            <F label="Price per ton ($)" value={priceTon} set={setPriceTon} hint="Quarries sell gravel by the ton" />
          </div>
        )}
      </div>

      <div className="result-card">
        <ResultHead>Ballpark estimate</ResultHead>
        <TotalRow label="Driveway area (sq ft)" value={fmtNum(r.sqft)} />
        <Row label="Square yards (sq yd)" value={fmtNum(r.sqyd)} />
        <Row label="Installed per sq ft" value={`$${r.lo}–$${r.hi}`} />
        <TotalRow label="Installed range" value={fmtRange(r.sqft * r.lo, r.sqft * r.hi)} />
        {r.showDiy && (
          <>
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
              DIY material estimate
            </div>
            <Row label="Material volume" value={`${fmtNum(r.yd3)} yd³`} />
            {material === "asphalt" && <Row label="Hot-mix asphalt (tons)" value={fmtNum(r.asphaltTons)} />}
            {material === "gravel" && <Row label="Gravel (tons)" value={fmtNum(r.gravelTons)} />}
            <TotalRow label="DIY material cost" value={fmt$(r.diyCost)} />
          </>
        )}
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Installed ranges are typical US ballparks — labor and base prep
            vary by metro. The DIY line is material only and stays hidden
            until you enter a price.
            {material === "asphalt" &&
              " Honest note: a driveway-scale asphalt job is not realistically DIY — 300°F hot mix needs a paver, a roller, and a crew. Concrete is the DIY-feasible option."}
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

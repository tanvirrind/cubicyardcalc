"use client";

import { useMemo, useState } from "react";
import { F, num, SelectF, UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS, WASTE_OPTIONS, AREAS_OPTIONS } from "./Fields";
import { toFeet, densityLbs, densityOptions, SHAPE_OPTIONS, shapeAreaSqFt, depthFromTons, withOverage, DENSITIES, STONE_BAG_FT3, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum, fmt$ } from "../lib/format";

export default function GravelCalculator({ initialDensityIdx = "0" }) {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("20");
  const [depth, setDepth] = useState("4");
  const [depthUnit, setDepthUnit] = useState("in");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [widthUnit, setWidthUnit] = useState("ft");
  const [shape, setShape] = useState("rect");
  const [diameter, setDiameter] = useState("10");
  const [diameterUnit, setDiameterUnit] = useState("ft");
  const [base, setBase] = useState("10");
  const [baseUnit, setBaseUnit] = useState("ft");
  const [height, setHeight] = useState("10");
  const [heightUnit, setHeightUnit] = useState("ft");
  const [densityIdx, setDensityIdx] = useState(initialDensityIdx);
  const [price, setPrice] = useState("0");
  const [delivery, setDelivery] = useState("0");
  const [taxPct, setTaxPct] = useState("0");
  const [waste, setWaste] = useState("10");
  const [areas, setAreas] = useState("1");
  const [calcMode, setCalcMode] = useState("volume"); // volume (standard) | weight (reverse)
  const [targetTons, setTargetTons] = useState("5");


  const r = useMemo(() => {
    // Identical-area multiplier: every displayed quantity is scaled by n.
    // n = 1 (the default) is the identity, so single-area math is untouched.
    const n = num(areas, 1);
    const areaSqFt = shapeAreaSqFt(shape, {
      length: toFeet(length, lengthUnit),
      width: toFeet(width, widthUnit),
      diameter: toFeet(diameter, diameterUnit),
      base: toFeet(base, baseUnit),
      height: toFeet(height, heightUnit),
    });
    const lbs = densityLbs("gravel", densityIdx);
    if (calcMode === "weight") {
      // Reverse mode: target tons (total across all areas) -> depth per area.
      // Depth is computed from the per-area share so it stays per-area;
      // volume and weight rows show the totals.
      const totalTons = num(targetTons);
      const depthFt = depthFromTons(totalTons / n, lbs, areaSqFt);
      const volTotalYd = (totalTons * 2000) / (lbs || 1);
      // Cost prices the target tons directly — no overage in reverse mode.
      const materialCost = totalTons * num(price);
      const deliv = num(delivery);
      const tax = (materialCost + deliv) * (num(taxPct) / 100);
      const total = materialCost + deliv + tax;
      return { reverse: true, depthFt, volTotalYd, totalTons, lbs, materialCost, deliv, tax, total };
    }
    const dFt = toFeet(depth, depthUnit);
    const yards = (areaSqFt * dFt) / 27;
    const tons = (yards * lbs) / 2000;
    const overage = withOverage(yards, num(waste) / 100);
    const overageTons = withOverage(tons, num(waste) / 100);
    // Bag count on the overage-included order quantity, like the cost estimate.
    const stoneBags = Math.ceil((overage * 27) / STONE_BAG_FT3);
    // Cost prices the overage-included order quantity, like the concrete calculator.
    const materialCost = overageTons * num(price);
    const deliv = num(delivery);
    // Delivery fee is per delivery trip, not per area: material rows scale by
    // n below, delivery is added once, tax applies to (scaled material + delivery).
    const scaledMaterial = materialCost * n;
    const tax = (scaledMaterial + deliv) * (num(taxPct) / 100);
    const total = scaledMaterial + deliv + tax;
    return {
      yards: yards * n,
      tons: tons * n,
      lbs,
      overage: overage * n,
      overageTons: overageTons * n,
      stoneBags: stoneBags * n,
      materialCost: scaledMaterial,
      deliv: deliv,
      tax: tax,
      total: total,
    };
  }, [shape, length, lengthUnit, width, widthUnit, diameter, diameterUnit, base, baseUnit, height, heightUnit, depth, depthUnit, densityIdx, price, delivery, taxPct, waste, areas, calcMode, targetTons]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Calculator mode</h3>
        <SelectF
          label="Estimate from"
          value={calcMode}
          set={setCalcMode}
          options={[
            { value: "volume", label: "Volume → materials" },
            { value: "weight", label: "Weight → depth" },
          ]}
          hint="Weight → depth finds the depth a target tonnage spreads over your area"
        />
        <h3 style={{ marginTop: 26 }}>Area dimensions</h3>
        <SelectF label="Area shape" value={shape} set={setShape} options={SHAPE_OPTIONS} hint="Rectangle is the default; circle and triangle cover round beds and corners" />
        {shape === "circle" ? (
          <UnitF label="Diameter" value={diameter} set={setDiameter} unit={diameterUnit} setUnit={setDiameterUnit} options={DIMENSION_OPTIONS} />
        ) : shape === "triangle" ? (
          <div className="field-row">
            <UnitF label="Base" value={base} set={setBase} unit={baseUnit} setUnit={setBaseUnit} options={DIMENSION_OPTIONS} />
            <UnitF label="Height" value={height} set={setHeight} unit={heightUnit} setUnit={setHeightUnit} options={DIMENSION_OPTIONS} />
          </div>
        ) : (
          <div className="field-row">
            <UnitF label="Length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
            <UnitF label="Width" value={width} set={setWidth} unit={widthUnit} setUnit={setWidthUnit} options={DIMENSION_OPTIONS} />
          </div>
        )}
        {calcMode === "weight" ? (
          <F
            label="Target tons"
            value={targetTons}
            set={setTargetTons}
            hint="Total across all areas"
          />
        ) : (
          <UnitF
            label="Gravel depth"
            value={depth}
            set={setDepth}
            unit={depthUnit}
            setUnit={setDepthUnit}
            options={DIMENSION_OPTIONS}
            hint="Count the full base depth, not just the top layer"
          />
        )}
        <SelectF
          label="Gravel type (density)"
          value={densityIdx}
          set={setDensityIdx}
          options={densityOptions("gravel")}
          hint="Weight changes with type; volume does not"
        />
        {calcMode === "volume" && (
          <SelectF label="Waste & overage" value={waste} set={setWaste} options={WASTE_OPTIONS} hint="Added to the order quantity" />
        )}
        <SelectF label="Identical areas" value={areas} set={setAreas} options={AREAS_OPTIONS} hint="e.g. 3 identical beds" />
        <h3 style={{ marginTop: 26 }}>Cost estimate</h3>
        <div className="field-row">
          <F label="Price per ton ($)" value={price} set={setPrice} hint="Quarries sell gravel by the ton" />
          <F label="Delivery fee ($)" value={delivery} set={setDelivery} />
        </div>
        <div className="field-row">
          <F label="Tax (%)" value={taxPct} set={setTaxPct} />
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        {r.reverse ? (
          <>
            <TotalRow label="Depth needed" value={`${fmtNum(r.depthFt * 12)} in`} />
            <Row label="Depth (feet)" value={`${fmtNum(r.depthFt, 4)} ft`} />
            <Row label="Implied volume" value={`${fmtNum(r.volTotalYd)} yd³`} />
            <Row label="Weight check" value={`${fmtNum(r.totalTons)} tons`} />
          </>
        ) : (
          <>
            <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
            <Row label="Cubic meters" value={fmtNum(r.yards * YD3_TO_M3)} />
            <Row label="Tons" value={fmtNum(r.tons)} />
            <Row label="Tonnes" value={fmtNum(r.tons * TONS_TO_TONNES)} />
            <Row label="Weight (lbs)" value={fmtNum(r.tons * 2000, 0)} />
            <Row label={`With ${waste}% overage`} value={`${fmtNum(r.overage)} yd³`} />
            <Row label="Overage (tons)" value={fmtNum(r.overageTons)} />
            <Row label="0.5 ft³ bags (50 lb)" value={r.stoneBags.toLocaleString("en-US")} />
          </>
        )}
        {r.total > 0 && (
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
              {r.reverse ? "Cost estimate (target tons)" : "Cost estimate (order quantity)"}
            </div>
            <Row label="Material" value={fmt$(r.materialCost)} />
            <Row label="Delivery" value={fmt$(r.deliv)} />
            <Row label="Tax" value={fmt$(r.tax)} />
            <TotalRow label="Project total" value={fmt$(r.total)} />
          </>
        )}
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            {`Selected gravel type weighs ~${r.lbs.toLocaleString("en-US")} lbs per yard. Suppliers usually bill by the ton — the math above matches their scale tickets.`}
          </ResultNote>
          {!r.reverse && (
            <div style={{ marginTop: 10 }}>
              <ResultNote>
                Bags are approximate — 50-lb bags average ~0.5 ft³; bulk stone varies.
              </ResultNote>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

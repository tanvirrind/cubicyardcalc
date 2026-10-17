"use client";

import { useMemo, useState } from "react";
import { F, SelectF, UnitF, ResultHead, Row, TotalRow, ResultNote, num, DIMENSION_OPTIONS, AREAS_OPTIONS } from "./Fields";
import { toFeet, densityLbs, densityOptions, SHAPE_OPTIONS, shapeAreaSqFt, withOverage, DENSITIES, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum, fmt$ } from "../lib/format";

// Settlement/compaction buffer applied to the ORDER quantity, extending the
// long-standing fixed 10% overage. "Light" (×1.10) is exactly what the
// calculator did before the selector existed, so the default behavior is
// unchanged. Guidance follows our settlement guide
// (app/guides/how-much-extra-soil-to-order/): fill dirt settles 10–15%,
// so most jobs want Light or Standard.
const SETTLEMENT_OPTIONS = [
  { value: "none", factor: 0.0, label: "None ×1.00 — already-settled fill" },
  { value: "light", factor: 0.1, label: "Light ×1.10 — typical grading jobs" },
  { value: "standard", factor: 0.15, label: "Standard ×1.15 — 10–15% settlement range" },
  { value: "heavy", factor: 0.25, label: "Heavy ×1.25 — deep compacted lifts" },
];

export default function FillDirtCalculator() {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("20");
  const [depth, setDepth] = useState("6");
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
  const [densityIdx, setDensityIdx] = useState("0");
  // Default "light" (×1.10) reproduces the calculator's original fixed 10% overage.
  const [settlement, setSettlement] = useState("light");
  const [areas, setAreas] = useState("1");
  const [price, setPrice] = useState("0");
  const [delivery, setDelivery] = useState("0");
  const [taxPct, setTaxPct] = useState("0");


  const r = useMemo(() => {
    // Identical-area multiplier: every displayed quantity is scaled by n.
    // n = 1 (the default) is the identity, so single-area math is untouched.
    // The settlement buffer still applies first to the order quantity; the
    // areas multiplier then scales the final (buffer-included) quantities.
    const n = num(areas, 1);
    const dFt = toFeet(depth, depthUnit);
    const areaSqFt = shapeAreaSqFt(shape, {
      length: toFeet(length, lengthUnit),
      width: toFeet(width, widthUnit),
      diameter: toFeet(diameter, diameterUnit),
      base: toFeet(base, baseUnit),
      height: toFeet(height, heightUnit),
    });
    const yards = (areaSqFt * dFt) / 27;
    const lbs = densityLbs("dirt", densityIdx);
    const tons = (yards * lbs) / 2000;
    const sf = SETTLEMENT_OPTIONS.find((o) => o.value === settlement)?.factor ?? 0.1;
    const overage = withOverage(yards, sf);
    const overageTons = withOverage(tons, sf);
    // Cost prices the overage-included order quantity, like the concrete calculator.
    const materialCost = overage * num(price);
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
      sf,
      materialCost: scaledMaterial,
      deliv: deliv,
      tax: tax,
      total: total,
    };
  }, [shape, length, lengthUnit, width, widthUnit, diameter, diameterUnit, base, baseUnit, height, heightUnit, depth, depthUnit, densityIdx, settlement, price, delivery, taxPct, areas]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Grading dimensions</h3>
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
        <UnitF
          label="Fill depth"
          value={depth}
          set={setDepth}
          unit={depthUnit}
          setUnit={setDepthUnit}
          options={DIMENSION_OPTIONS}
          hint="Measure the average depth across the full area"
        />
        <SelectF
          label="Fill dirt type (density)"
          value={densityIdx}
          set={setDensityIdx}
          options={densityOptions("dirt")}
          hint="Weight changes with type; volume does not"
        />
        <SelectF
          label="Settlement / compaction buffer"
          value={settlement}
          set={setSettlement}
          options={SETTLEMENT_OPTIONS}
          hint="Fill dirt settles 10–15% — Light or Standard for most jobs; Heavy for deep compacted lifts"
        />
        <SelectF label="Identical areas" value={areas} set={setAreas} options={AREAS_OPTIONS} hint="e.g. 3 identical beds" />
        <h3 style={{ marginTop: 26 }}>Cost estimate</h3>
        <div className="field-row">
          <F label="Price per cubic yard ($)" value={price} set={setPrice} />
          <F label="Delivery fee ($)" value={delivery} set={setDelivery} />
        </div>
        <div className="field-row">
          <F label="Tax (%)" value={taxPct} set={setTaxPct} />
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Cubic meters" value={fmtNum(r.yards * YD3_TO_M3)} />
        <Row label="Weight" value={`${fmtNum(r.tons)} tons`} />
        <Row label="Tonnes" value={fmtNum(r.tons * TONS_TO_TONNES)} />
        <Row label={`With settlement (×${(1 + r.sf).toFixed(2)})`} value={`${fmtNum(r.overage)} yd³`} />
        <Row label="Overage weight" value={`${fmtNum(r.overageTons)} tons`} />
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
              Cost estimate (order quantity)
            </div>
            <Row label="Material" value={fmt$(r.materialCost)} />
            <Row label="Delivery" value={fmt$(r.deliv)} />
            <Row label="Tax" value={fmt$(r.tax)} />
            <TotalRow label="Project total" value={fmt$(r.total)} />
          </>
        )}
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Fill dirt compacts — order the overage, especially under slabs or
            pavers. Confirm screened vs. common fill with your supplier.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { F, UnitF, SelectF, ResultHead, Row, TotalRow, ResultNote, num, DIMENSION_OPTIONS, WASTE_OPTIONS } from "./Fields";
import { toFeet, SHAPE_OPTIONS, shapeAreaSqFt, withOverage, DENSITIES, CONCRETE_BAGS_PER_YARD, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum, fmt$ } from "../lib/format";

export default function ConcreteCalculator() {
  const [mode, setMode] = useState("slab"); // slab | yards
  const [length, setLength] = useState("10");
  const [width, setWidth] = useState("20");
  const [thickness, setThickness] = useState("4");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [widthUnit, setWidthUnit] = useState("ft");
  const [thicknessUnit, setThicknessUnit] = useState("in");
  const [shape, setShape] = useState("rect");
  const [diameter, setDiameter] = useState("10");
  const [diameterUnit, setDiameterUnit] = useState("ft");
  const [base, setBase] = useState("10");
  const [baseUnit, setBaseUnit] = useState("ft");
  const [height, setHeight] = useState("10");
  const [heightUnit, setHeightUnit] = useState("ft");
  const [directYards, setDirectYards] = useState("1");
  const [waste, setWaste] = useState("10");
  const [priceYd, setPriceYd] = useState("150");
  const [delivery, setDelivery] = useState("0");
  const [taxPct, setTaxPct] = useState("0");

  const r = useMemo(() => {
    let yards;
    if (mode === "slab") {
      const tFt = toFeet(thickness, thicknessUnit);
      const areaSqFt = shapeAreaSqFt(shape, {
        length: toFeet(length, lengthUnit),
        width: toFeet(width, widthUnit),
        diameter: toFeet(diameter, diameterUnit),
        base: toFeet(base, baseUnit),
        height: toFeet(height, heightUnit),
      });
      yards = (areaSqFt * tFt) / 27;
    } else {
      yards = num(directYards);
    }
    const lbs = yards * DENSITIES.concrete.lbs;
    const tons = lbs / 2000;
    // Slab mode uses the selected waste factor; the known-cubic-yards mode
    // keeps the original fixed 10% default untouched.
    const overage = mode === "slab" ? withOverage(yards, num(waste) / 100) : withOverage(yards);
    const bags = CONCRETE_BAGS_PER_YARD.map((b) => ({
      label: b.label,
      count: Math.ceil(yards * b.perYard),
    }));
    // Cost estimate prices the order quantity (overage included), then
    // delivery, then tax on material + delivery.
    const orderYards = overage;
    const material = orderYards * num(priceYd);
    const deliv = num(delivery);
    const tax = (material + deliv) * (num(taxPct) / 100);
    const total = material + deliv + tax;
    return { yards, lbs, tons, overage, bags, material, deliv, tax, total };
  }, [mode, shape, length, lengthUnit, width, widthUnit, diameter, diameterUnit, base, baseUnit, height, heightUnit, thickness, thicknessUnit, directYards, waste, priceYd, delivery, taxPct]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Slab or direct volume</h3>
        <SelectF
          label="Estimate from"
          value={mode}
          set={setMode}
          options={[
            { value: "slab", label: "Slab dimensions" },
            { value: "yards", label: "Known cubic yards" },
          ]}
        />
        {mode === "slab" ? (
          <>
            <SelectF label="Slab shape" value={shape} set={setShape} options={SHAPE_OPTIONS} />
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
            <div className="field-row">
              <UnitF label="Thickness" value={thickness} set={setThickness} unit={thicknessUnit} setUnit={setThicknessUnit} options={DIMENSION_OPTIONS} hint="4 in = patios, 6 in = driveways" />
            </div>
            <SelectF label="Waste & overage" value={waste} set={setWaste} options={WASTE_OPTIONS} hint="Added to the order quantity" />
          </>
        ) : (
          <F label="Cubic yards" value={directYards} set={setDirectYards} />
        )}

        <h3 style={{ marginTop: 26 }}>Cost estimate</h3>
        <div className="field-row">
          <F label="Price per cubic yard ($)" value={priceYd} set={setPriceYd} hint="2026 ready-mix: ~$125–$195 delivered" />
          <F label="Delivery fee ($)" value={delivery} set={setDelivery} hint="Short-load fees often $50–$200" />
        </div>
        <div className="field-row">
          <F label="Tax (%)" value={taxPct} set={setTaxPct} />
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Cubic meters" value={fmtNum(r.yards * YD3_TO_M3)} />
        <Row label="Weight" value={`${fmtNum(r.lbs, 0)} lbs`} />
        <Row label="Weight (tons)" value={fmtNum(r.tons)} />
        <Row label="Weight (tonnes)" value={fmtNum(r.tons * TONS_TO_TONNES)} />
        <Row label={mode === "slab" ? `With ${waste}% overage` : "With 10% overage"} value={`${fmtNum(r.overage)} yd³`} />
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
          Bag counts (rounded up)
        </div>
        {r.bags.map((b) => (
          <Row key={b.label} label={b.label} value={b.count.toLocaleString("en-US")} />
        ))}
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
        <Row label="Material" value={fmt$(r.material)} />
        <Row label="Delivery" value={fmt$(r.deliv)} />
        <Row label="Tax" value={fmt$(r.tax)} />
        <TotalRow label="Project total" value={fmt$(r.total)} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Bags rounded up — you can&apos;t buy a partial bag. Over ~1–2
            yards, ready-mix delivery is usually cheaper than bags. Cost is
            priced on the overage-included order quantity.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

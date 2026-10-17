"use client";

import { useMemo, useState } from "react";
import { F, num, SelectF, UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS, WASTE_OPTIONS } from "./Fields";
import { toFeet, shapeAreaSqFt, withOverage, SHAPE_OPTIONS, SOD_ROLL_SQFT, SOD_PALLET_SQFT, SQYD_TO_SQM } from "../lib/calc";
import { fmtNum, fmt$ } from "../lib/format";

export default function SodCalculator() {
  const [shape, setShape] = useState("rect");
  const [length, setLength] = useState("20");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [width, setWidth] = useState("15");
  const [widthUnit, setWidthUnit] = useState("ft");
  const [diameter, setDiameter] = useState("10");
  const [diameterUnit, setDiameterUnit] = useState("ft");
  const [base, setBase] = useState("10");
  const [baseUnit, setBaseUnit] = useState("ft");
  const [height, setHeight] = useState("10");
  const [heightUnit, setHeightUnit] = useState("ft");
  const [waste, setWaste] = useState("10");
  const [price, setPrice] = useState("0");

  const r = useMemo(() => {
    const sqft = shapeAreaSqFt(shape, {
      length: toFeet(length, lengthUnit),
      width: toFeet(width, widthUnit),
      diameter: toFeet(diameter, diameterUnit),
      base: toFeet(base, baseUnit),
      height: toFeet(height, heightUnit),
    });
    const sqyd = sqft / 9;
    const sqm = sqyd * SQYD_TO_SQM;
    const rolls = Math.ceil(sqft / SOD_ROLL_SQFT);
    const pallets = Math.ceil(sqft / SOD_PALLET_SQFT);
    // Cost prices the overage-included order area, like the material calculators.
    const orderSqft = withOverage(sqft, num(waste) / 100);
    const cost = orderSqft * num(price);
    return { sqft, sqyd, sqm, rolls, pallets, orderSqft, cost };
  }, [shape, length, lengthUnit, width, widthUnit, diameter, diameterUnit, base, baseUnit, height, heightUnit, waste, price]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Lawn dimensions</h3>
        <SelectF label="Lawn shape" value={shape} set={setShape} options={SHAPE_OPTIONS} hint="Rectangle is the default; circle and triangle cover round lawns and corners" />
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
        <SelectF label="Cutting waste & overage" value={waste} set={setWaste} options={WASTE_OPTIONS} hint="Sod cuts and curves waste material — 10% is the safe default" />
        <h3 style={{ marginTop: 26 }}>Cost estimate</h3>
        <F label="Price per sq ft ($)" value={price} set={setPrice} hint="Your supplier's price for the sod itself, before delivery" />
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Lawn area (sq ft)" value={fmtNum(r.sqft)} />
        <Row label="Square yards (sq yd)" value={fmtNum(r.sqyd)} />
        <Row label="Square meters (sq m)" value={fmtNum(r.sqm)} />
        <TotalRow label={`Sod rolls (${SOD_ROLL_SQFT} sq ft each)`} value={r.rolls.toLocaleString("en-US")} />
        <Row label="Pallets (typical 450 sq ft)" value={r.pallets.toLocaleString("en-US")} />
        <Row label={`Order area — with ${waste}% overage (sq ft)`} value={fmtNum(r.orderSqft)} />
        {r.cost > 0 && (
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
              Cost estimate (order area)
            </div>
            <Row label="Price per sq ft" value={fmt$(num(price))} />
            <TotalRow label="Sod material cost" value={fmt$(r.cost)} />
          </>
        )}
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            A standard roll covers 10 sq ft (2 × 5 ft); a typical pallet covers
            ~450 sq ft — suppliers range 400–500, so confirm the pallet size
            before you order. The cost line prices the overage-included order
            area, which is what you actually pay for.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

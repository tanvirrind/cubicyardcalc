"use client";

import { useMemo, useState } from "react";
import { F, SelectF, UnitF, ResultHead, Row, TotalRow, ResultNote, num, DIMENSION_OPTIONS } from "./Fields";
import { toFeet, densityLbs, densityOptions, SHAPE_OPTIONS, shapeAreaSqFt, withOverage, DENSITIES, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum, fmt$ } from "../lib/format";

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
  const [price, setPrice] = useState("0");
  const [delivery, setDelivery] = useState("0");
  const [taxPct, setTaxPct] = useState("0");


  const r = useMemo(() => {
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
    const overage = withOverage(yards);
    const overageTons = withOverage(tons);
    // Cost prices the overage-included order quantity, like the concrete calculator.
    const materialCost = overage * num(price);
    const deliv = num(delivery);
    const tax = (materialCost + deliv) * (num(taxPct) / 100);
    const total = materialCost + deliv + tax;
    return { yards, tons, lbs, overage, overageTons, materialCost, deliv, tax, total };
  }, [shape, length, lengthUnit, width, widthUnit, diameter, diameterUnit, base, baseUnit, height, heightUnit, depth, depthUnit, densityIdx, price, delivery, taxPct]);

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
        <Row label="With 10% overage" value={`${fmtNum(r.overage)} yd³`} />
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

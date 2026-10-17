"use client";

import { useMemo, useState } from "react";
import { F, SelectF, UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS, num, WASTE_OPTIONS } from "./Fields";
import { toFeet, densityLbs, densityOptions, SHAPE_OPTIONS, shapeAreaSqFt, withOverage, DENSITIES, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum, fmt$ } from "../lib/format";

export default function AsphaltCalculator() {
  const [length, setLength] = useState("20");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [width, setWidth] = useState("20");
  const [widthUnit, setWidthUnit] = useState("ft");
  const [thickness, setThickness] = useState("3");
  const [thicknessUnit, setThicknessUnit] = useState("in");
  const [shape, setShape] = useState("rect");
  const [diameter, setDiameter] = useState("10");
  const [diameterUnit, setDiameterUnit] = useState("ft");
  const [base, setBase] = useState("10");
  const [baseUnit, setBaseUnit] = useState("ft");
  const [height, setHeight] = useState("10");
  const [heightUnit, setHeightUnit] = useState("ft");
  const [densityIdx, setDensityIdx] = useState("0");
  const [waste, setWaste] = useState("10");

  const [priceTon, setPriceTon] = useState("110");

  const r = useMemo(() => {
    const tFt = toFeet(thickness, thicknessUnit);
    const areaSqFt = shapeAreaSqFt(shape, {
      length: toFeet(length, lengthUnit),
      width: toFeet(width, widthUnit),
      diameter: toFeet(diameter, diameterUnit),
      base: toFeet(base, baseUnit),
      height: toFeet(height, heightUnit),
    });
    const yards = (areaSqFt * tFt) / 27;
    const lbs = densityLbs("asphalt", densityIdx);
    const tonsPerYard = lbs / 2000;
    const tons = yards * tonsPerYard;
    const overageYards = withOverage(yards, num(waste) / 100);
    const overageTons = withOverage(tons, num(waste) / 100);
    // Cost is priced on the order quantity (overage included), like the concrete calculator.
    const cost = overageTons * num(priceTon);
    return { yards, tons, lbs, overageYards, overageTons, cost, tonsPerYard };
  }, [shape, length, lengthUnit, width, widthUnit, diameter, diameterUnit, base, baseUnit, height, heightUnit, thickness, thicknessUnit, densityIdx, priceTon, waste]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Paved area dimensions</h3>
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
          label="Asphalt thickness"
          value={thickness}
          set={setThickness}
          unit={thicknessUnit}
          setUnit={setThicknessUnit}
          options={DIMENSION_OPTIONS}
          hint="Residential driveway: 2–3 in over compacted base. Parking areas: 3–4 in."
        />
        <SelectF label="Waste & overage" value={waste} set={setWaste} options={WASTE_OPTIONS} hint="Added to the order quantity" />
        <div className="field-row">
          <F label="Price per ton ($)" value={priceTon} set={setPriceTon} hint="2026 hot mix: ~$75–$150/ton picked up, $110–$200 delivered" />
        </div>
        <SelectF
          label="Asphalt mix (density)"
          value={densityIdx}
          set={setDensityIdx}
          options={densityOptions("asphalt")}
          hint="Weight changes with mix; volume does not"
        />
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Cubic meters" value={fmtNum(r.yards * YD3_TO_M3)} />
        <Row label="Tons" value={fmtNum(r.tons)} />
        <Row label="Tonnes" value={fmtNum(r.tons * TONS_TO_TONNES)} />
        <Row label={`With ${waste}% overage`} value={`${fmtNum(r.overageYards)} yd³`} />
        <Row label="Overage (tons)" value={fmtNum(r.overageTons)} />
        <TotalRow label="Material cost" value={fmt$(r.cost)} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            {`Selected asphalt mix weighs ~${r.lbs.toLocaleString("en-US")} lbs per yard. Plants sell by the ton — cost above prices the overage-included order quantity. Thick lifts are laid in layers; count the full compacted depth.`}
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { F, UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS, num } from "./Fields";
import { toFeet, cubicYards, withOverage, DENSITIES, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
import { fmtNum, fmt$ } from "../lib/format";

export default function AsphaltCalculator() {
  const [length, setLength] = useState("20");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [width, setWidth] = useState("20");
  const [widthUnit, setWidthUnit] = useState("ft");
  const [thickness, setThickness] = useState("3");
  const [thicknessUnit, setThicknessUnit] = useState("in");
  const [priceTon, setPriceTon] = useState("110");

  const r = useMemo(() => {
    const yards = cubicYards(toFeet(length, lengthUnit), toFeet(width, widthUnit), toFeet(thickness, thicknessUnit));
    const tonsPerYard = DENSITIES.asphalt.lbs / 2000; // ≈1.96 tons/yd³
    const tons = yards * tonsPerYard;
    const overageYards = withOverage(yards);
    const overageTons = withOverage(tons);
    // Cost is priced on the order quantity (overage included), like the concrete calculator.
    const cost = overageTons * num(priceTon);
    return { yards, tons, overageYards, overageTons, cost, tonsPerYard };
  }, [length, lengthUnit, width, widthUnit, thickness, thicknessUnit, priceTon]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Paved area dimensions</h3>
        <div className="field-row">
          <UnitF label="Length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
          <UnitF label="Width" value={width} set={setWidth} unit={widthUnit} setUnit={setWidthUnit} options={DIMENSION_OPTIONS} />
        </div>
        <UnitF
          label="Asphalt thickness"
          value={thickness}
          set={setThickness}
          unit={thicknessUnit}
          setUnit={setThicknessUnit}
          options={DIMENSION_OPTIONS}
          hint="Residential driveway: 2–3 in over compacted base. Parking areas: 3–4 in."
        />
        <div className="field-row">
          <F label="Price per ton ($)" value={priceTon} set={setPriceTon} hint="2026 hot mix: ~$75–$150/ton picked up, $110–$200 delivered" />
        </div>
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <TotalRow label="Cubic yards" value={fmtNum(r.yards)} />
        <Row label="Cubic meters" value={fmtNum(r.yards * YD3_TO_M3)} />
        <Row label="Tons" value={fmtNum(r.tons)} />
        <Row label="Tonnes" value={fmtNum(r.tons * TONS_TO_TONNES)} />
        <Row label="With 10% overage" value={`${fmtNum(r.overageYards)} yd³`} />
        <Row label="Overage (tons)" value={fmtNum(r.overageTons)} />
        <TotalRow label="Material cost" value={fmt$(r.cost)} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            Hot-mix asphalt weighs ~3,915 lbs per yard (1.96 tons). Plants sell
            by the ton — cost above prices the overage-included order
            quantity. Thick lifts are laid in layers; count the full compacted
            depth.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

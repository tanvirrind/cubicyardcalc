"use client";

import { useMemo, useState } from "react";
import { F, UnitF, SelectF, ResultHead, Row, TotalRow, ResultNote, num, DIMENSION_OPTIONS, WASTE_OPTIONS } from "./Fields";
import { toFeet, SHAPE_OPTIONS, shapeAreaSqFt, withOverage, DENSITIES, CONCRETE_BAGS_PER_YARD, MIX_RATIOS, DRY_VOLUME_FACTOR, CEMENT_LBS_PER_FT3, YD3_TO_M3, TONS_TO_TONNES } from "../lib/calc";
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
  // Optional mix-ratio breakdown (needs only the wet volume r.yards).
  const [showMix, setShowMix] = useState(false);
  const [mixIdx, setMixIdx] = useState("0");
  const [cementParts, setCementParts] = useState("1");
  const [sandParts, setSandParts] = useState("2");
  const [aggParts, setAggParts] = useState("4");

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
    // Site-mix breakdown from the wet volume: dry volume = 1.54 × wet,
    // split by parts. Cement bags use the estimating convention
    // 1 bag (94 lb) ≈ 1 ft³ of loose cement.
    const preset = MIX_RATIOS[num(mixIdx, 0)] ?? MIX_RATIOS[0];
    const mixParts = preset.parts ?? [num(cementParts, 1), num(sandParts, 1), num(aggParts, 1)];
    const mixTotal = mixParts[0] + mixParts[1] + mixParts[2] || 1;
    const dryFt3 = yards * 27 * DRY_VOLUME_FACTOR;
    const cementFt3 = (dryFt3 * mixParts[0]) / mixTotal;
    const cementBags = Math.ceil((cementFt3 * CEMENT_LBS_PER_FT3) / CEMENT_LBS_PER_FT3);
    const sandFt3 = (dryFt3 * mixParts[1]) / mixTotal;
    const sandYd3 = sandFt3 / 27;
    const sandTons = (sandYd3 * 2700) / 2000;
    const aggFt3 = (dryFt3 * mixParts[2]) / mixTotal;
    const aggYd3 = aggFt3 / 27;
    const aggTons = (aggYd3 * 2800) / 2000;
    const mix = { dryFt3, cementBags, sandYd3, sandTons, aggYd3, aggTons };
    return { yards, lbs, tons, overage, bags, material, deliv, tax, total, mix };
  }, [mode, shape, length, lengthUnit, width, widthUnit, diameter, diameterUnit, base, baseUnit, height, heightUnit, thickness, thicknessUnit, directYards, waste, priceYd, delivery, taxPct, mixIdx, cementParts, sandParts, aggParts]);

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

        <div style={{ marginTop: 22 }}>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => setShowMix((s) => !s)}
          >
            {showMix ? "Hide mix breakdown" : "Show mix breakdown (optional)"}
          </button>
        </div>
        {showMix && (
          <>
            <SelectF
              label="Mix ratio (cement : sand : aggregate)"
              value={mixIdx}
              set={setMixIdx}
              options={MIX_RATIOS.map((m, i) => ({ value: String(i), label: m.label }))}
              hint="Parts by volume"
            />
            {mixIdx === String(MIX_RATIOS.length - 1) && (
              <div className="field-row">
                <F label="Cement parts" value={cementParts} set={setCementParts} />
                <F label="Sand parts" value={sandParts} set={setSandParts} />
                <F label="Aggregate parts" value={aggParts} set={setAggParts} />
              </div>
            )}
          </>
        )}

        <h3 style={{ marginTop: 26 }}>Cost estimate</h3>        <div className="field-row">
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
        {showMix && (
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
              Mix breakdown (approx.)
            </div>
            <Row label="Dry volume" value={`${fmtNum(r.mix.dryFt3)} ft³`} />
            <Row label="Cement (94-lb bags)" value={r.mix.cementBags.toLocaleString("en-US")} />
            <Row label="Sand" value={`${fmtNum(r.mix.sandYd3)} yd³ (${fmtNum(r.mix.sandTons)} tons)`} />
            <Row label="Aggregate" value={`${fmtNum(r.mix.aggYd3)} yd³ (${fmtNum(r.mix.aggTons)} tons)`} />
            <div style={{ marginTop: 12 }}>
              <ResultNote>
                Estimating method: 1.54 dry-volume factor; 1 bag ≈ 1 ft³ of
                loose cement. Order ready-mix, not site-mix, over ~1–2 yards.
              </ResultNote>
            </div>
          </>
        )}
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

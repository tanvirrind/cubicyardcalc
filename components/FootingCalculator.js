"use client";

import { useMemo, useState } from "react";
import { F, UnitF, ResultHead, Row, TotalRow, ResultNote, num, DIMENSION_OPTIONS } from "./Fields";
import { toFeet, cubicYards, withOverage, CONCRETE_BAGS_PER_YARD, YD3_TO_M3 } from "../lib/calc";
import { fmtNum, fmt$ } from "../lib/format";

export default function FootingCalculator() {
  const [length, setLength] = useState("40");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [width, setWidth] = useState("16");
  const [widthUnit, setWidthUnit] = useState("in");
  const [depth, setDepth] = useState("8");
  const [depthUnit, setDepthUnit] = useState("in");
  const [waste, setWaste] = useState("10");
  const [priceYd, setPriceYd] = useState("150");
  const [delivery, setDelivery] = useState("0");
  const [taxPct, setTaxPct] = useState("0");

  const r = useMemo(() => {
    const yards = cubicYards(
      toFeet(length, lengthUnit),
      toFeet(width, widthUnit),
      toFeet(depth, depthUnit)
    );
    const overageYards = withOverage(yards, num(waste) / 100);
    // Bag counts price the order quantity (overage included), rounded up —
    // you can't buy a partial bag.
    const bags = CONCRETE_BAGS_PER_YARD.map((b) => ({
      label: b.label,
      count: Math.ceil(overageYards * b.perYard),
    }));
    // Cost estimate prices the order quantity (overage included), then
    // delivery, then tax on material + delivery.
    const material = overageYards * num(priceYd);
    const deliv = num(delivery);
    const tax = (material + deliv) * (num(taxPct) / 100);
    const total = material + deliv + tax;
    return { yards, overageYards, bags, material, deliv, tax, total, wastePct: num(waste) };
  }, [length, lengthUnit, width, widthUnit, depth, depthUnit, waste, priceYd, delivery, taxPct]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Footing dimensions</h3>
        <UnitF
          label="Total footing length"
          value={length}
          set={setLength}
          unit={lengthUnit}
          setUnit={setLengthUnit}
          options={DIMENSION_OPTIONS}
          hint="Add up every run of footing into one total length"
        />
        <div className="field-row">
          <UnitF
            label="Footing width"
            value={width}
            set={setWidth}
            unit={widthUnit}
            setUnit={setWidthUnit}
            options={DIMENSION_OPTIONS}
            hint="Typical: ~2x the wall thickness, 16–24 in"
          />
          <UnitF
            label="Footing depth"
            value={depth}
            set={setDepth}
            unit={depthUnit}
            setUnit={setDepthUnit}
            options={DIMENSION_OPTIONS}
            hint="Typical: 8–12 in"
          />
        </div>
        <div className="field-row">
          <F label="Waste / overage (%)" value={waste} set={setWaste} hint="Typical 5–10% for uneven trenches" />
        </div>

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
        <Row label={`With ${r.wastePct}% overage`} value={`${fmtNum(r.overageYards)} yd³`} />
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
          Bag counts (rounded up, with overage)
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
            Bags and cost are priced on the overage-included order quantity —
            trench walls cave and forms flex, so footings eat the buffer. Over
            ~1–2 yards, ready-mix delivery is usually cheaper than bags.
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { num, SelectF, UnitF, ResultHead, Row, TotalRow, ResultNote, DIMENSION_OPTIONS, WASTE_OPTIONS } from "./Fields";
import { toFeet, BRICK_SIZES, MORTAR_BAGS_PER_1000_BRICK } from "../lib/calc";
import { fmtNum } from "../lib/format";

const BRICK_OPTIONS = BRICK_SIZES.map((b, i) => ({ value: String(i), label: b.label }));

const JOINT_OPTIONS = [
  { value: "0.25", label: "1/4 in" },
  { value: "0.375", label: "3/8 in (recommended)" },
  { value: "0.5", label: "1/2 in" },
];

export default function BrickCalculator({ initialBrickIdx = "0" }) {
  const [length, setLength] = useState("10");
  const [height, setHeight] = useState("4");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [heightUnit, setHeightUnit] = useState("ft");
  const [brickIdx, setBrickIdx] = useState(initialBrickIdx);
  const [joint, setJoint] = useState("0.375");
  const [waste, setWaste] = useState("10");

  const r = useMemo(() => {
    const areaSqFt = toFeet(length, lengthUnit) * toFeet(height, heightUnit);
    const b = BRICK_SIZES[parseInt(brickIdx, 10)] ?? BRICK_SIZES[0];
    const j = num(joint);
    const bricksPerSqFt = 144 / ((b.length + j) * (b.height + j));
    const bricks = Math.ceil(areaSqFt * bricksPerSqFt * (1 + num(waste) / 100));
    const bags = Math.ceil((bricks / 1000) * MORTAR_BAGS_PER_1000_BRICK);
    return { areaSqFt, bricksPerSqFt, bricks, bags };
  }, [length, lengthUnit, height, heightUnit, brickIdx, joint, waste]);

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Wall dimensions</h3>
        <div className="field-row">
          <UnitF label="Wall length" value={length} set={setLength} unit={lengthUnit} setUnit={setLengthUnit} options={DIMENSION_OPTIONS} />
          <UnitF label="Wall height" value={height} set={setHeight} unit={heightUnit} setUnit={setHeightUnit} options={DIMENSION_OPTIONS} />
        </div>
        <SelectF
          label="Brick size"
          value={brickIdx}
          set={setBrickIdx}
          options={BRICK_OPTIONS}
          hint="Single-wythe (one brick thick) face — veneer, garden walls, fire pits"
        />
        <SelectF
          label="Mortar joint"
          value={joint}
          set={setJoint}
          options={JOINT_OPTIONS}
          hint="Wider joints mean fewer bricks per square foot — and more mortar"
        />
        <SelectF label="Waste & overage" value={waste} set={setWaste} options={WASTE_OPTIONS} hint="Covers cuts, chipped units, and color blending" />
      </div>

      <div className="result-card">
        <ResultHead>Estimate</ResultHead>
        <Row label="Wall area" value={`${fmtNum(r.areaSqFt, 1)} sq ft`} />
        <Row label="Bricks per sq ft" value={fmtNum(r.bricksPerSqFt, 2)} />
        <TotalRow label={`Bricks needed (with ${waste}% waste)`} value={fmtNum(r.bricks, 0)} />
        <Row label="Mortar (approx.)" value={`${fmtNum(r.bags, 0)} bags`} />
        <div style={{ marginTop: 18 }}>
          <ResultNote>
            {`Rule of thumb: ~${MORTAR_BAGS_PER_1000_BRICK} eighty-pound bags of mortar per 1,000 modular bricks with 3/8-in joints. Mortar varies with joint width, brick size, and waste — treat the bag count as an ordering estimate, not a mix design.`}
          </ResultNote>
        </div>
      </div>
    </div>
  );
}

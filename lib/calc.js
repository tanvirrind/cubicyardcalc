// Shared volume/weight conversions for the cubic-yard calculators.
// All math lives here so every page and component agrees.

/** Feet per unit key (used for L/W/D and depth conversions). */
const FT_PER = { ft: 1, in: 1 / 12, yd: 3, cm: 0.0328084, m: 3.28084 };

export const toFeet = (value, unit) => {
  const v = parseFloat(value);
  const n = Number.isFinite(v) && v >= 0 ? v : 0;
  return n * (FT_PER[unit] ?? 1);
};

/** cubic yards = L_ft × W_ft × D_ft / 27 */
export const cubicYards = (lFt, wFt, dFt) => (lFt * wFt * dFt) / 27;

/** +10% overage (or any factor), the industry-standard planning buffer. */
export const withOverage = (yards, factor = 0.1) => yards * (1 + factor);

/**
 * Typical bulk densities, lbs per cubic yard.
 *
 * `.lbs` is the long-standing default for the material — it never changes,
 * so any code reading `DENSITIES.x.lbs` keeps its exact old behavior.
 * `.variants` powers the per-calculator material-type dropdowns; index 0 is
 * always the default above. Variant values are rounded, typical published
 * loose bulk densities (ASTM C33 / industry supplier spec-sheet ranges) —
 * representative, not lab precision.
 */
export const DENSITIES = {
  concrete: {
    label: "Concrete",
    lbs: 4050,
    variants: [{ label: "Ready-mix concrete", lbs: 4050 }],
  },
  gravel: {
    label: "Gravel",
    lbs: 2800,
    variants: [
      { label: "Crushed stone (typical)", lbs: 2800 },
      { label: "Pea gravel", lbs: 2700 },
      { label: "River rock", lbs: 2900 },
      { label: "Crushed concrete (RCA)", lbs: 2900 },
      { label: "Decomposed granite", lbs: 2650 },
    ],
  },
  dirt: {
    label: "Fill dirt",
    lbs: 2200,
    variants: [
      { label: "Screened fill (typical)", lbs: 2200 },
      { label: "Sandy soil", lbs: 2400 },
      { label: "Clay soil", lbs: 2500 },
    ],
  },
  topsoil: {
    label: "Topsoil",
    lbs: 2400,
    variants: [
      { label: "Screened topsoil (typical)", lbs: 2400 },
      { label: "Enriched garden soil", lbs: 2200 },
      { label: "Heavy clay topsoil", lbs: 2600 },
    ],
  },
  mulch: {
    label: "Mulch",
    lbs: 800,
    variants: [
      { label: "Bark / hardwood mulch (typical)", lbs: 800 },
      { label: "Cedar mulch", lbs: 600 },
      { label: "Pine bark mulch", lbs: 700 },
      { label: "Bulk compost", lbs: 1000 },
    ],
  },
  sand: {
    label: "Sand",
    lbs: 2700,
    variants: [
      { label: "Mason / concrete sand (typical)", lbs: 2700 },
      { label: "Coarse fill sand", lbs: 2800 },
      { label: "Paver / joint sand", lbs: 2700 },
      { label: "Wet sand", lbs: 3100 },
    ],
  },
  rock: {
    label: "Rock",
    lbs: 4500,
    variants: [
      { label: "Mixed landscape rock (typical)", lbs: 4500 },
      { label: "River rock", lbs: 4700 },
      { label: "Limestone / flagstone", lbs: 4800 },
      { label: "Lava rock (lightweight)", lbs: 1500 },
    ],
  },
  garden: {
    label: "Garden soil",
    lbs: 2400,
    variants: [{ label: "Garden soil", lbs: 2400 }],
  },
  asphalt: {
    label: "Hot-mix asphalt",
    lbs: 3915,
    variants: [
      { label: "Hot-mix asphalt (typical)", lbs: 3915 },
      { label: "Warm-mix asphalt", lbs: 3800 },
      { label: "Reclaimed asphalt — millings", lbs: 3300 },
    ],
  },
};

/** Area-shape options for the material calculators. Rectangle is the default. */
export const SHAPE_OPTIONS = [
  { value: "rect", label: "Rectangle" },
  { value: "circle", label: "Circle" },
  { value: "triangle", label: "Triangle" },
];

/**
 * Plan-view area in square feet for the selected shape (all dims in feet).
 * rect: length × width; circle: π × (diameter/2)²; triangle: base × height / 2.
 */
export const shapeAreaSqFt = (shape, d) => {
  if (shape === "circle") return Math.PI * (d.diameter / 2) ** 2;
  if (shape === "triangle") return (d.base * d.height) / 2;
  return d.length * d.width;
};

/**
 * Dropdown options for a material's density variants. Value = variant index
 * (as a string for <select>); index 0 is always the long-standing default.
 */
export const densityOptions = (key) =>
  (DENSITIES[key]?.variants ?? []).map((v, i) => ({
    value: String(i),
    label: `${v.label} — ${v.lbs.toLocaleString("en-US")} lbs/yd³`,
  }));

/** lbs/yd³ for the selected variant; falls back to the material default. */
export const densityLbs = (key, idx) => {
  const v = DENSITIES[key]?.variants?.[parseInt(idx, 10)];
  return v ? v.lbs : DENSITIES[key]?.lbs ?? 0;
};

/**
 * Tons per cubic yard for the tons converter — derived from DENSITIES so the
 * converter, the labels, and the reference tables can never disagree.
 */
export const TONS_PER_YARD = Object.fromEntries(
  Object.entries(DENSITIES).map(([k, d]) => [k, d.lbs / 2000])
);

/** Bag counts per cubic yard of concrete (manufacturer yields, verified). */
export const CONCRETE_BAGS_PER_YARD = [
  { label: "80 lb bags", perYard: 45 },
  { label: "60 lb bags", perYard: 60 },
  { label: "50 lb bags", perYard: 72 },
  { label: "40 lb bags", perYard: 90 },
  { label: "90 lb bags", perYard: 40 },
];

/** Metric equivalents — cubic yards stay the primary result. */
export const YD3_TO_M3 = 0.764554857984; // 27 cu ft = 0.764554857984 m³
export const TONS_TO_TONNES = 0.90718474; // 1 short ton = 0.90718474 t
export const SQYD_TO_SQM = 0.836127; // 1 sq yd = 0.836127 m²

/** Bag sizes of mulch → bags per cubic yard (27 cu ft / bag size). */
export const MULCH_BAGS_PER_YARD = [
  { label: "2 cu ft bags", perYard: 13.5 },
  { label: "3 cu ft bags", perYard: 9 },
];

// Shared volume/weight conversions for the cubic-yard calculators.
// All math lives here so every page and component agrees.

/** Feet per unit key (used for L/W/D and depth conversions). */
const FT_PER = { ft: 1, in: 1 / 12, yd: 3 };

export const toFeet = (value, unit) => {
  const v = parseFloat(value);
  const n = Number.isFinite(v) && v >= 0 ? v : 0;
  return n * (FT_PER[unit] ?? 1);
};

/** cubic yards = L_ft × W_ft × D_ft / 27 */
export const cubicYards = (lFt, wFt, dFt) => (lFt * wFt * dFt) / 27;

/** +10% overage (or any factor), the industry-standard planning buffer. */
export const withOverage = (yards, factor = 0.1) => yards * (1 + factor);

/** Typical bulk densities, lbs per cubic yard. */
export const DENSITIES = {
  concrete: { label: "Concrete", lbs: 4050 },
  gravel: { label: "Gravel", lbs: 2800 },
  dirt: { label: "Fill dirt", lbs: 2200 },
  topsoil: { label: "Topsoil", lbs: 2400 },
  mulch: { label: "Mulch", lbs: 800 },
  sand: { label: "Sand", lbs: 2700 },
  rock: { label: "Rock", lbs: 4500 },
  garden: { label: "Garden soil", lbs: 2400 },
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

/** Bag sizes of mulch → bags per cubic yard (27 cu ft / bag size). */
export const MULCH_BAGS_PER_YARD = [
  { label: "2 cu ft bags", perYard: 13.5 },
  { label: "3 cu ft bags", perYard: 9 },
];

// Shared volume/weight conversions for the cubic-yard calculators.
// All math lives here so every page and component agrees.

/** Feet per unit key (used for L/W/D and depth conversions). */
/** Feet per unit key (used for L/W/D and depth conversions). Exported so methodology can read it. */
export const FT_PER = { ft: 1, in: 1 / 12, yd: 3, cm: 0.0328084, m: 3.28084 };

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

/**
 * Rebar: nominal weight in lbs per linear foot (ASTM A615).
 * Keyed by bar designation (#3–#8) as the industry sizes them.
 */
export const REBAR_LBS_PER_FT = {
  "#3": 0.376,
  "#4": 0.668,
  "#5": 1.043,
  "#6": 1.502,
  "#8": 2.67,
};

export const REBAR_SIZES = Object.keys(REBAR_LBS_PER_FT);

/**
 * CMU block coverage: standard 8×16 face lays 1.125 blocks per sq ft of
 * wall face (8×16 face + 3/8-in mortar joints).
 */
export const CMU_BLOCKS_PER_SQFT = 1.125;

/**
 * Mortar for CMU walls, per the published mortar guide
 * (app/guides/how-much-mortar-do-i-need/): 15 eighty-pound Type N bags
 * net per 100 sq ft of 8-in block wall with 3/8-in joints (16 with waste).
 */
export const MORTAR_BAGS_PER_100SQFT_BLOCK = 15;

/**
 * Core-fill grout for CMU cores: APPROXIMATE — ~0.006 yd³ per standard
 * 8×8×16 block, net of mortar. Verify with your supplier on real orders.
 */
export const CORE_FILL_YD3_PER_BLOCK = 0.006;

/* ------------------------------------------------------------------ */
/* Next-batch constants (paver / brick / sod / cost estimators /      */
/* mix-ratio / reverse calc / stone bags). Worker-verified at write    */
/* time where marked VERIFY; ballpark figures stay labeled as such.    */
/* ------------------------------------------------------------------ */

/** Paver face sizes, inches (nominal). Custom is handled in the component. */
export const PAVER_SIZES = [
  { label: "4 × 8 in (running bond)", length: 8, width: 4 },
  { label: "6 × 6 in", length: 6, width: 6 },
  { label: "6 × 9 in", length: 9, width: 6 },
  { label: "12 × 12 in", length: 12, width: 12 },
];

/**
 * Brick actual unit dims, inches. Face coverage uses nominal joints:
 * bricks per sq ft = 144 ÷ ((length + 0.375) × (height + 0.375)).
 * Modular: 144 ÷ (8 × 2.625) = 6.857 bricks/sq ft.
 */
export const BRICK_SIZES = [
  { label: "Modular (3⅝ × 2¼ × 7⅝ in)", length: 7.625, height: 2.25 },
  { label: "Standard (3⅝ × 2¼ × 8 in)", length: 8, height: 2.25 },
  { label: "Queen (2¾ × 2¾ × 7⅝ in)", length: 7.625, height: 2.75 },
  { label: "King (2¾ × 2¾ × 9⅝ in)", length: 9.625, height: 2.75 },
];
export const MORTAR_JOINT_IN = 0.375;

/**
 * Mortar for brick veneer: TYPICAL published estimating rule — about 9
 * eighty-pound bags per 1,000 modular bricks with 3/8-in joints
 * (published masonry estimating tables; varies with joint width, waste,
 * and brick size — other sizes scale by brick count). Approximate.
 */
export const MORTAR_BAGS_PER_1000_BRICK = 9;

/** Sod conventions (typical US retail; label the pallet as typical). */
export const SOD_ROLL_SQFT = 10; // standard 2×5 ft roll
export const SOD_PALLET_SQFT = 450; // typical pallet; common range 400–500

/**
 * Installed fence cost, $/linear ft by type and height — BALLPARK US
 * ranges, web-verified Oct 2026 (Angi, howmuchfence.com, thinkknoll.com):
 * 4 ft ≈ 15% less, 8 ft ≈ 30% more than 6 ft. Chain-link and wood bands
 * matched sources; vinyl/aluminum bands were corrected down to the
 * verified consensus (vinyl 6 ft ~$28–62, aluminum 6 ft ~$30–58).
 */
export const FENCE_COST = {
  "chain-link": {
    label: "Chain-link",
    perFt: { 4: [8, 15], 6: [10, 22], 8: [16, 30] },
  },
  wood: {
    label: "Wood privacy",
    perFt: { 4: [15, 32], 6: [18, 45], 8: [30, 70] },
  },
  vinyl: {
    label: "Vinyl",
    perFt: { 4: [24, 53], 6: [28, 62], 8: [36, 81] },
  },
  aluminum: {
    label: "Aluminum / ornamental",
    perFt: { 4: [26, 49], 6: [30, 58], 8: [39, 75] },
  },
};
/** Rough materials-only share of installed fence cost (typical split). */
export const FENCE_MATERIALS_SHARE = 0.5;

/**
 * Driveway cost per sq ft — installed ranges mirror the published guide
 * app/guides/asphalt-vs-concrete-driveway-cost/ ($4–8 asphalt, $8–15
 * concrete, verified there). VERIFY gravel ranges at write time; DIY
 * material lines are computed from the calculators' own math.
 */
export const DRIVEWAY_COST = {
  asphalt: { label: "Asphalt", installedPerSqFt: [4, 8] },
  concrete: { label: "Concrete", installedPerSqFt: [8, 15] },
  gravel: { label: "Gravel", installedPerSqFt: [1.5, 3] }, // budget/economy anchor, verified: lawnguru "about $1–$3/sq ft" installed; mid-contractor sources (bovees, homeguide) quote $4–$10 — wide by design, ballpark only
};

/**
 * Shed cost per sq ft — BALLPARK US ranges, web-verified Oct 2026
 * (Angi, alansfactoryoutlet.com citing HomeGuide/HomeAdvisor,
 * shedcalculator.com 2026 guide): prefab kits ~$12–40/sq ft (the common
 * $1,500–$4,000 kit totals), custom-built $60–120, finished shed homes
 * $100–200.
 */
export const SHED_COST = {
  kit: { label: "Prefab kit", perSqFt: [12, 40] },
  custom: { label: "Custom-built", perSqFt: [60, 120] },
  "shed-home": { label: "Finished shed home", perSqFt: [100, 200] },
};

/**
 * Concrete mix ratios (cement : sand : aggregate, by volume).
 * Standard estimating method: dry volume = 1.54 × wet volume; cement
 * weight = cement ft³ × 94 lb (the 94-lb-bag = 1-ft³ estimating
 * convention), bags = weight ÷ 94 — so bags ≈ cement ft³ numerically.
 */
export const MIX_RATIOS = [
  { label: "1 : 2 : 4 (general purpose)", parts: [1, 2, 4] },
  { label: "1 : 1.5 : 3 (high strength)", parts: [1, 1.5, 3] },
  { label: "1 : 3 : 6 (lean / fill)", parts: [1, 3, 6] },
  { label: "Custom", parts: null },
];
export const DRY_VOLUME_FACTOR = 1.54;
export const CEMENT_LBS_PER_FT3 = 94;

/**
 * Bulk landscape-stone bag size: the standard 50-lb bag ≈ 0.5 ft³
 * (54 bags ≈ 1 yd³). Approximate — varies by stone and moisture.
 */
export const STONE_BAG_FT3 = 0.5;

/**
 * Reverse mode: required depth in feet for a target weight over an area.
 * depth_ft = (tons × 2000 ÷ density_lbs_per_yd3 × 27) ÷ area_sqft.
 */
export const depthFromTons = (tons, lbsPerYard, areaSqFt) => {
  if (!lbsPerYard || !areaSqFt) return 0;
  return ((tons * 2000) / lbsPerYard) * 27 / areaSqFt;
};

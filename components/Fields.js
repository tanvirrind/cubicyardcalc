// Shared field helpers — same CalcBid pattern (F per component) lifted up
// so the 8 calculators stay consistent. Renders the design-system classes
// from globals.css: .field, .field-row, .unit-row.

export const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

export function F({ label, value, set, step = "any", min = "0", hint, type = "number" }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        min={min}
        step={step}
        onChange={(e) => set(e.target.value)}
      />
      {hint && (
        <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>
      )}
    </div>
  );
}

/** Number input with a unit select on the right. */
export function UnitF({
  label,
  value,
  set,
  unit,
  setUnit,
  options,
  step = "any",
  min = "0",
  hint,
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <div className="unit-row">
        <input
          type="number"
          value={value}
          min={min}
          step={step}
          onChange={(e) => set(e.target.value)}
        />
        <select value={unit} onChange={(e) => setUnit(e.target.value)} aria-label={`${label} unit`}>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      {hint && (
        <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>
      )}
    </div>
  );
}

/** Standalone select field. */
export function SelectF({ label, value, set, options, hint }) {
  return (
    <div className="field">
      <label>{label}</label>
      <select value={value} onChange={(e) => set(e.target.value)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {hint && (
        <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>
      )}
    </div>
  );
}

/** Result-card rows, matching the CalcBid result-card classes. */
export function ResultHead({ children = "Results" }) {
  return (
    <div
      style={{
        fontSize: 13,
        textTransform: "uppercase",
        letterSpacing: ".1em",
        color: "#94a3b8",
        marginBottom: 8,
      }}
    >
      {children}
    </div>
  );
}

export function Row({ label, value }) {
  return (
    <div className="r-row">
      <span className="r-label">{label}</span>
      <span>{value}</span>
    </div>
  );
}

export function TotalRow({ label, value }) {
  return (
    <div className="r-row total">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

export function ResultNote({ children }) {
  return <div style={{ fontSize: 12.5, color: "#94a3b8" }}>{children}</div>;
}

/** Standardized waste/overage options for the material calculators.
 * Each calculator renders these with the existing SelectF and applies
 * the selection via withOverage(qty, num(waste) / 100). */
export const WASTE_OPTIONS = [
  { value: "0", label: "None (0%)" },
  { value: "5", label: "5%" },
  { value: "10", label: "10% (recommended)" },
  { value: "15", label: "15%" },
];

/** Identical-area multiplier options 1..20 for the material calculators.
 * Rendered with the existing SelectF and applied via num(areas, 1) as a
 * multiplier on every displayed quantity. Default "1" is the identity. */
export const AREAS_OPTIONS = Array.from({ length: 20 }, (_, i) => ({
  value: String(i + 1),
  label: i === 0 ? "1 (one area)" : String(i + 1),
}));

/** Per-field linear-unit options for length/width/depth/thickness. Default stays ft/in. */
export const DIMENSION_OPTIONS = [
  { value: "in", label: "in" },
  { value: "ft", label: "ft" },
  { value: "yd", label: "yd" },
  { value: "cm", label: "cm" },
  { value: "m", label: "m" },
];

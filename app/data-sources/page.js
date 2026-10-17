import Link from "next/link";
import Faq, { faqJsonLd } from "../../components/Faq";
import JsonLd from "../../components/JsonLd";
import {
  DENSITIES,
  CONCRETE_BAGS_PER_YARD,
  MULCH_BAGS_PER_YARD,
  YD3_TO_M3,
  TONS_TO_TONNES,
  SQYD_TO_SQM,
  REBAR_LBS_PER_FT,
} from "../../lib/calc";

const SITE_URL = "https://cubicyardcalculator.site";

// 1 yd³ = 3 × 3 × 3 ft = 27 ft³, exact and definitional — there is no
// lib/calc export for this because it is not a measured constant.
const FT3_PER_YD3 = 27;

// Every table below is rendered live from the shared calculation library,
// so the reference numbers can never drift from the calculators.

// Density rows: every material, every variant, tons derived as lbs ÷ 2,000.
const DENSITY_ROWS = Object.values(DENSITIES).flatMap((m) =>
  m.variants.map((v, i) => ({
    material: m.label,
    first: i === 0,
    rowSpan: m.variants.length,
    variant: `${v.label}${i === 0 ? " (default)" : ""}`,
    lbs: v.lbs.toLocaleString("en-US"),
    tons: (v.lbs / 2000).toFixed(2),
  }))
);

// Bag-yield rows: bag sizes and bags-per-yd³ come from the shared library;
// the per-bag yield column is derived numerically (27 ft³ ÷ bags per yd³)
// and matches manufacturer published coverage figures.
const fmtYield = (perYard) =>
  `${(FT3_PER_YD3 / perYard).toFixed(2).replace(/\.?0+$/, "")} ft³`;
const BAG_ROWS = [
  ...CONCRETE_BAGS_PER_YARD.map((b) => ({
    material: "Concrete",
    bag: b.label,
    perYard: b.perYard,
    yield: fmtYield(b.perYard),
    basis: "Manufacturer published yields (Quikrete, Sakrete product data sheets)",
  })),
  ...MULCH_BAGS_PER_YARD.map((b) => ({
    material: "Mulch",
    bag: b.label,
    perYard: b.perYard,
    yield: fmtYield(b.perYard),
    basis: "27 ft³ per yd³ ÷ bag size",
  })),
];

// Conversion rows: every factor is imported from lib/calc where it exists.
const CONVERSION_ROWS = [
  {
    from: "1 cubic yard (yd³)",
    to: "27 cubic feet (ft³)",
    basis: "Definitional — 3 ft × 3 ft × 3 ft",
  },
  {
    from: "1 cubic foot (ft³)",
    to: `${(1 / FT3_PER_YD3).toFixed(6)} cubic yards (yd³)`,
    basis: "Derived from 27 ft³ per yd³",
  },
  {
    from: "1 cubic yard (yd³)",
    to: `${YD3_TO_M3} cubic meters (m³)`,
    basis: "Site constant YD3_TO_M3 (shared library)",
  },
  {
    from: "1 cubic meter (m³)",
    to: `${(1 / YD3_TO_M3).toFixed(4)} cubic yards (yd³)`,
    basis: "Derived from YD3_TO_M3",
  },
  {
    from: "1 short ton (2,000 lb)",
    to: `${TONS_TO_TONNES} metric tonnes (t)`,
    basis: "Site constant TONS_TO_TONNES (shared library)",
  },
  {
    from: "1 square yard (yd²)",
    to: `${SQYD_TO_SQM} square meters (m²)`,
    basis: "Site constant SQYD_TO_SQM (shared library)",
  },
  {
    from: "1 square meter (m²)",
    to: `${(1 / SQYD_TO_SQM).toFixed(4)} square yards (yd²)`,
    basis: "Derived from SQYD_TO_SQM",
  },
];

// Rebar rows: nominal weights from the shared library (ASTM A615 basis).
const REBAR_ROWS = Object.entries(REBAR_LBS_PER_FT).map(([size, lbs]) => ({
  size,
  lbs: lbs.toFixed(3),
  per10ft: (lbs * 10).toFixed(1),
}));

export const metadata = {
  title: "Data Sources & Reference: Densities, Bag Yields, and Conversions",
  description:
    "The exact reference data behind every calculator on cubicyardcalculator.site: material densities in lbs and tons per cubic yard, concrete and mulch bag yields, rebar weights, and unit conversion factors — rendered from the same library the calculators use.",
  keywords: [
    "gravel density lbs per cubic yard",
    "concrete bag yield chart",
    "how many 80 lb bags per cubic yard",
    "rebar weight per foot chart",
    "cubic yard to tons conversion",
    "material density reference table",
  ],
  alternates: { canonical: `${SITE_URL}/data-sources/` },
  openGraph: {
    title: "Data Sources & Reference: Densities, Bag Yields, and Conversions | Cubic Yard Calculator",
    description:
      "Every density, bag yield, rebar weight, and conversion factor the calculators run on — one published reference, read live from the site's shared math library.",
    url: `${SITE_URL}/data-sources/`,
  },
};

const faqs = [
  {
    q: "Where do the density figures come from?",
    a: "They are typical published loose bulk densities — ASTM C33 aggregate spec ranges and industry supplier spec-sheet figures for aggregates, USDA/NRCS soil references for soils — representative ranges, not lab precision. Real density varies with moisture, compaction, and the specific product, so confirm weight-sensitive numbers (like truck load limits) with your supplier.",
  },
  {
    q: "Are the concrete bag counts from the manufacturers?",
    a: "Yes — the bags-per-cubic-yard figures follow manufacturer published yields on Quikrete and Sakrete product data sheets (for example, an 80 lb bag yields about 0.6 cubic feet). Real yield varies with mixing method and conditions, so treat bag counts as estimates.",
  },
  {
    q: "What does 'typical published ranges, not lab precision' mean?",
    a: "It means these are representative defaults chosen to give realistic planning estimates, not values measured for any one product. A lab-tested or supplier-specified value for a particular material will legitimately differ. Use this page to estimate and compare, then confirm with your supplier's spec sheet before ordering weight-sensitive quantities.",
  },
  {
    q: "Why is there a tons column next to every density?",
    a: "Because tons are derived directly from the same density figures (lbs ÷ 2,000), so the tables and the weight converters can never disagree. Run the same numbers through the gravel-to-tons or tons-to-cubic-yards converters and you'll get identical results.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Data Sources & Reference: Densities, Bag Yields, and Conversions",
  description: metadata.description,
  url: `${SITE_URL}/data-sources/`,
  inLanguage: "en-US",
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  author: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
};

const linkStyle = { color: "var(--accent-deep)", fontWeight: 700 };

export default function DataSourcesPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="kicker">Trust &amp; transparency</div>
        <h1 className="h2">Data sources &amp; reference</h1>
        <p className="sub">
          Every reference number on this site — densities, bag yields, rebar
          weights, conversion factors — is rendered on this page{" "}
          <strong>live from the same shared calculation library the
          calculators use</strong>. The tables below can never drift out of
          sync with the calculators, because they read the same data.
        </p>
        <p style={{ color: "var(--muted)", fontSize: 15, marginTop: 4 }}>
          Last updated October 2026
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">In short:</span> densities are
            typical published loose bulk ranges (lbs ÷ 2,000 = tons); bag
            counts follow manufacturer published yields; conversions are the
            exact factors the calculators apply. See also our{" "}
            <Link href="/methodology/" style={linkStyle}>
              methodology
            </Link>{" "}
            for how the math works.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 44 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>
            1. Material density table
          </h2>
          <p>
            Every material and every variant, exactly as the calculators
            read them. The <strong>(default)</strong> variant is the one each
            calculator pre-selects. Tons are derived directly (lbs ÷ 2,000)
            from the same figures — not a second source.
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 860, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Density table (rendered from the shared library)</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Material</th><th>Material type</th><th>lbs / yd³</th><th>tons / yd³</th></tr>
            </thead>
            <tbody>
              {DENSITY_ROWS.map((r, idx) => (
                <tr key={`${r.material}-${r.variant}-${idx}`}>
                  {r.first && (
                    <td rowSpan={r.rowSpan} style={{ fontWeight: 700 }}>
                      {r.material}
                    </td>
                  )}
                  <td>{r.variant}</td>
                  <td>{r.lbs}</td>
                  <td>{r.tons}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 0 }}>
            Representative ranges for planning. For weight-sensitive decisions
            (truck load limits, structural loads), use your supplier&apos;s
            product-specific spec sheet.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 44 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>
            2. Bag-yield table
          </h2>
          <p>
            Bag counts come from <strong>manufacturer published yields</strong>{" "}
            — the coverage figures printed on the bag — not from our own
            estimates. The per-bag yield column is derived numerically
            (27 ft³ ÷ bags per yd³) and matches the published data-sheet
            figures, e.g. an 80 lb bag of concrete mix yields about 0.6 ft³.
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 860, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Bag yields (rendered from the shared library)</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Material</th><th>Bag size</th><th>Bags per yd³</th><th>Approx. yield per bag</th></tr>
            </thead>
            <tbody>
              {BAG_ROWS.map((r) => (
                <tr key={`${r.material}-${r.bag}`}>
                  <td style={{ fontWeight: 700 }}>{r.material}</td>
                  <td>{r.bag}</td>
                  <td>{r.perYard}</td>
                  <td>{r.yield}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 0 }}>
            Concrete basis: published manufacturer yields (Quikrete, Sakrete
            product data sheets). Mulch basis: 27 ft³ per yd³ ÷ bag size. Real
            yield varies with mixing, so bag counts are estimates.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 44 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>
            3. Conversion factors
          </h2>
          <p>
            The exact factors the calculators apply. Where a factor exists in
            the shared library, it is imported directly — reverse directions
            are computed from the same constants, so there is exactly one
            source of truth.
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 860, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Conversion table (rendered from the shared library)</h3>
          <table className="ref-table">
            <thead>
              <tr><th>From</th><th>Equals</th><th>Basis</th></tr>
            </thead>
            <tbody>
              {CONVERSION_ROWS.map((r) => (
                <tr key={r.from}>
                  <td style={{ fontWeight: 700 }}>{r.from}</td>
                  <td>{r.to}</td>
                  <td style={{ color: "var(--muted)", fontSize: 15 }}>{r.basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 0 }}>
            27 ft³ per yd³ is definitional. Metric factors are the exact
            constants used across every calculator on the site.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 44 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>
            4. Rebar weight table
          </h2>
          <p>
            Nominal weights in pounds per linear foot, the industry sizing
            basis for reinforcing bar — the same figures the{" "}
            <Link href="/calculators/rebar-calculator/" style={linkStyle}>
              rebar calculator
            </Link>{" "}
            uses.
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 860, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Rebar weights (rendered from the shared library)</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Bar size</th><th>lbs per linear ft</th><th>lbs per 10 ft</th></tr>
            </thead>
            <tbody>
              {REBAR_ROWS.map((r) => (
                <tr key={r.size}>
                  <td style={{ fontWeight: 700 }}>{r.size}</td>
                  <td>{r.lbs}</td>
                  <td>{r.per10ft}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 0 }}>
            Nominal bar weights per the ASTM A615 basis used by the
            calculators.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 44 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>
            5. Sources &amp; basis
          </h2>
          <p>
            We name our <strong>source classes</strong> honestly. These are
            the kinds of published references behind the figures —{" "}
            <strong>typical published ranges, not lab precision</strong>:
          </p>
          <ul style={{ lineHeight: 1.8, paddingLeft: 20 }}>
            <li>
              <strong>Aggregates</strong> (gravel, crushed stone, sand, rock):
              bulk-density ranges published under the ASTM C33 aggregate
              specification framework and on aggregate supplier / quarry
              spec sheets.
            </li>
            <li>
              <strong>Soils</strong> (fill dirt, topsoil, garden soil, mulch,
              compost): USDA / NRCS soil survey bulk-density references and
              landscape-supplier published figures.
            </li>
            <li>
              <strong>Rebar</strong>: nominal bar weights per the ASTM A615
              basis, keyed by bar designation (#3–#8).
            </li>
            <li>
              <strong>Bag yields</strong>: manufacturer published coverage
              figures — Quikrete and Sakrete product data sheets for
              concrete; 27 ft³ ÷ bag size for mulch.
            </li>
            <li>
              <strong>Conversions</strong>: definitional constants (27 ft³ =
              1 yd³) and the site&apos;s shared-library metric factors, which
              are also what every calculator applies.
            </li>
          </ul>
          <p>
            Because calculators and reference tables read the same data, a
            correction in the shared library appears everywhere at once. The
            full verification process is documented in our{" "}
            <Link href="/methodology/" style={linkStyle}>
              methodology
            </Link>
            .
          </p>
          <p>
            Try the numbers yourself: the{" "}
            <Link href="/calculators/gravel-to-tons-calculator/" style={linkStyle}>
              gravel-to-tons converter
            </Link>{" "}
            and the{" "}
            <Link href="/calculators/tons-to-cubic-yards-calculator/" style={linkStyle}>
              tons-to-cubic-yards converter
            </Link>{" "}
            apply the same density figures shown in the table above.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
      </div>
    </section>
  );
}

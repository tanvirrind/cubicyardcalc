import Link from "next/link";
import Faq, { faqJsonLd } from "../../components/Faq";
import JsonLd from "../../components/JsonLd";
import {
  DENSITIES,
  CONCRETE_BAGS_PER_YARD,
  MULCH_BAGS_PER_YARD,
  YD3_TO_M3,
  FT_PER,
} from "../../lib/calc";

const SITE_URL = "https://cubicyardcalculator.site";

// Unit factors read live from the shared calculation library — the page can
// never disagree with the calculators.
const UNIT_LABELS = { ft: "feet (ft)", in: "inches (in)", yd: "yards (yd)", cm: "centimeters (cm)", m: "meters (m)" };
const UNIT_FACTORS = Object.entries(FT_PER).map(([unit, factor]) => ({ unit: UNIT_LABELS[unit] || unit, factor: String(factor) }));

const SHAPE_FORMULAS = [
  {
    shape: "Rectangle",
    inputs: "length × width",
    formula: "Area = length × width (square feet)",
  },
  {
    shape: "Circle",
    inputs: "diameter",
    formula: "Area = π × (diameter ÷ 2)² (square feet)",
  },
  {
    shape: "Triangle",
    inputs: "base × height",
    formula: "Area = base × height ÷ 2 (square feet)",
  },
];

export const metadata = {
  title: "Our Methodology: How the Calculations Work",
  description:
    "How cubicyardcalculator.site does the math: the volume formula, unit conversions, density figures, bag yields, and cost estimates — plus how we verify and correct them.",
  keywords: [
    "cubic yard calculation method",
    "cubic yard formula",
    "how cubic yard calculators work",
    "material density cubic yard",
    "cubic yard calculator methodology",
  ],
  alternates: { canonical: `${SITE_URL}/methodology/` },
  openGraph: {
    title: "Our Methodology: How the Calculations Work | Cubic Yard Calculator",
    description:
      "The exact volume math, unit conversions, density figures, and bag yields behind every calculator on this site — and how we keep them honest.",
    url: `${SITE_URL}/methodology/`,
  },
};

const faqs = [
  {
    q: "Where do your density numbers come from?",
    a: "They are typical published loose bulk densities — ASTM C33 / industry supplier spec-sheet ranges — representative, not lab precision. Actual density varies with moisture, compaction, and the specific product, so confirm weight-sensitive numbers (like dump-truck load limits) with your supplier.",
  },
  {
    q: "Why do the calculators add 10% overage?",
    a: "A 10% planning buffer is the industry-standard convention for ordering bulk material. It covers compaction and settling, spillage, uneven subgrade, and ordinary waste. You can treat the pre-overage number as your exact measured quantity.",
  },
  {
    q: "Are the concrete bag counts exact?",
    a: "They are based on manufacturer published yields for standard bag sizes (e.g., an 80 lb bag yields about 0.6 cu ft). Real yield varies with mixing, so bag counts are estimates, not guarantees — ready-mix is usually the better buy past about 1–2 cubic yards.",
  },
  {
    q: "Why does my supplier's number differ from the calculator?",
    a: "Suppliers quote specific products with their own density specs, moisture content, and yield factors, which legitimately differ from our representative figures. Use our calculators to estimate and compare, then confirm final quantities with the supplier before ordering.",
  },
  {
    q: "How do I report a math error I found on this site?",
    a: "Use the contact page (/contact/) with the calculator or page name, the numbers you entered, and what you believe is wrong. Every report is checked against the shared calculation library, and published corrections are dated.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Our Methodology: How the Calculations Work",
  description: metadata.description,
  url: `${SITE_URL}/methodology/`,
  inLanguage: "en-US",
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  author: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
};

export default function MethodologyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="kicker">Trust &amp; transparency</div>
        <h1 className="h2">Our methodology</h1>
        <p className="sub">
          Every calculator on this site runs the same shared math library —
          one set of formulas, densities, and yields — so a guide and a
          calculator can never disagree. This page documents exactly what
          that math is, where the reference numbers come from, and how we
          keep them honest.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">In short:</span> volume is
            length × width × depth in feet, divided by 27. Densities are
            representative published ranges, not lab measurements. Costs
            are planning ballparks — always confirm with your supplier.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 40 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>
            1. How the volume math works
          </h2>
          <p>
            The core formula is the same across every{" "}
            <Link href="/calculators/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              calculator
            </Link>{" "}
            on this site:
          </p>
          <div className="card" style={{ padding: "20px 28px", textAlign: "center", fontSize: 19 }}>
            <strong>
              Cubic yards = (length<sub>ft</sub> × width<sub>ft</sub> × depth<sub>ft</sub>) ÷ 27
            </strong>
          </div>
          <p>
            Measurements entered in other units are converted to feet first,
            using these factors (each number below is the number of feet in
            one unit):
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Unit conversion factors (to feet)</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Unit</th><th>Feet per unit</th></tr>
            </thead>
            <tbody>
              {UNIT_FACTORS.map((u) => (
                <tr key={u.unit}>
                  <td>{u.unit}</td>
                  <td>{u.factor}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 0 }}>
            Cubic yards stay the primary result throughout the site; the
            metric equivalent shown alongside is 1 yd³ = {YD3_TO_M3} m³.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 36 }}>
          <p>
            For non-rectangular areas, the shape formulas below produce the
            plan-view area in square feet; multiplying by depth in feet gives
            cubic feet, and dividing by 27 gives cubic yards:
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Area-shape formulas</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Shape</th><th>You enter</th><th>Area formula</th></tr>
            </thead>
            <tbody>
              {SHAPE_FORMULAS.map((s) => (
                <tr key={s.shape}>
                  <td>{s.shape}</td>
                  <td>{s.inputs}</td>
                  <td>{s.formula}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ maxWidth: 720, marginTop: 44 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>
            2. The 10% overage convention
          </h2>
          <p>
            Calculators on this site apply a default 10% overage to the
            exact measured volume — the industry-standard planning buffer
            for ordering bulk material. It exists because real projects are
            never as tidy as a formula: soil compacts and settles, trucks
            spill, subgrades are uneven, and a little material is always
            wasted on site.
          </p>
          <p>
            The pre-overage figure is your true measured quantity, and the
            overage figure is what we recommend ordering. Ordering exactly
            the measured amount is the most common cause of a second
            delivery — which usually costs more than the extra material
            would have.
          </p>

          <h2 className="h2" style={{ fontSize: 28, marginTop: 40 }}>
            3. Where the density figures come from
          </h2>
          <p>
            Weight-per-cubic-yard figures are the one place where honesty
            requires a caveat. Density varies with moisture, compaction,
            and the exact product — a yard of wet sand is meaningfully
            heavier than a yard of dry sand. So our values are{" "}
            <strong>
              typical published loose bulk densities — ASTM C33 / industry
              supplier spec-sheet ranges; representative, not lab precision
            </strong>
            . They are defaults designed to give a realistic planning
            estimate, and each calculator&apos;s dropdown lists the
            material-type variants below. Tons are derived directly from the
            same figures (lbs ÷ 2,000), so the converters and the tables
            can never disagree.
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 860, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Density table (rendered from the same data the calculators use)</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Material</th><th>Material type</th><th>lbs / yd³</th><th>tons / yd³</th></tr>
            </thead>
            <tbody>
              {Object.values(DENSITIES).flatMap((m) =>
                m.variants.map((v, i) => (
                  <tr key={`${m.label}-${v.label}`}>
                    {i === 0 && (
                      <td rowSpan={m.variants.length} style={{ fontWeight: 700 }}>
                        {m.label}
                      </td>
                    )}
                    <td>{v.label}{i === 0 ? " (default)" : ""}</td>
                    <td>{v.lbs.toLocaleString("en-US")}</td>
                    <td>{(v.lbs / 2000).toFixed(2)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 0 }}>
            These are representative ranges for planning. For
            weight-sensitive decisions (truck load limits, structural
            loads), use your supplier&apos;s product-specific spec sheet.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 44 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>
            4. Bag-yield basis
          </h2>
          <p>
            Bag counts come from <strong>manufacturer published yields</strong>{" "}
            — the coverage figures printed on the bag — not from our own
            estimates. The calculators use these bags-per-cubic-yard
            figures:
          </p>
          <ul style={{ lineHeight: 1.8, paddingLeft: 20 }}>
            {CONCRETE_BAGS_PER_YARD.map((b) => (
              <li key={b.label}>
                Concrete: {b.label} — <strong>{b.perYard} bags per yd³</strong>
              </li>
            ))}
            {MULCH_BAGS_PER_YARD.map((b) => (
              <li key={b.label}>
                Mulch: {b.label} — <strong>{b.perYard} bags per yd³</strong>
              </li>
            ))}
          </ul>
          <p>
            Real yield varies with mixing method and conditions, so bag
            counts are estimates. And a useful rule of thumb: for concrete,
            ready-mix delivery usually beats bag-mixing on cost once the
            order passes about 1–2 cubic yards.
          </p>

          <h2 className="h2" style={{ fontSize: 28, marginTop: 40 }}>
            5. Cost estimates are ballparks
          </h2>
          <p>
            Where the site shows cost estimates, they are{" "}
            <strong>planning ballparks</strong>, not quotes. Material prices
            vary widely by region, supplier, season, delivery distance, and
            order size. Use the estimates to budget and to compare suppliers
            on equal footing — then{" "}
            <strong>confirm the real number with your supplier</strong>{" "}
            before committing. See our{" "}
            <Link href="/cubic-yard-cost/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              cubic yard cost guide
            </Link>{" "}
            for how to read a quote and which questions to ask.
          </p>

          <h2 className="h2" style={{ fontSize: 28, marginTop: 40 }}>
            6. How we verify — and how we correct
          </h2>
          <p>
            Because all calculators and reference tables read from one
            shared calculation library, a fix in one place fixes it
            everywhere. Content is reviewed against the calculator math
            before publication, and our{" "}
            <Link href="/editorial-policy/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              editorial policy
            </Link>{" "}
            describes the research and review process in full.
          </p>
          <p>
            If you find an error, report it via our{" "}
            <Link href="/contact/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              contact page
            </Link>{" "}
            with the page name, the numbers you entered, and what looks
            wrong. Verified corrections are applied and{" "}
            <strong>dated</strong> — the page&apos;s last-modified date
            reflects when it was fixed.
          </p>
          <p>
            Related:{" "}
            <Link href="/guides/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              material guides
            </Link>{" "}
            and the{" "}
            <Link href="/editorial-policy/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              editorial policy
            </Link>
            .
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
      </div>
    </section>
  );
}

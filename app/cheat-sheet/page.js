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
} from "../../lib/calc";

const SITE_URL = "https://cubicyardcalculator.site";

// All figures below are rendered live from lib/calc.js — the same data the
// calculators use — so this page, the PDF cheat sheet, and the calculators
// can never disagree.

// Default (index-0) density rows, in task order
const DENSITY_ORDER = ["concrete", "gravel", "dirt", "topsoil", "mulch", "sand", "rock", "garden", "asphalt"];
const DENSITY_ROWS = DENSITY_ORDER.map((key) => ({
  material: DENSITIES[key].label,
  lbs: DENSITIES[key].lbs,
}));

const BAG_ROWS = [
  ...CONCRETE_BAGS_PER_YARD.map((b) => ({ size: b.label, count: String(b.perYard) })),
  ...MULCH_BAGS_PER_YARD.map((b) => ({ size: `Mulch — ${b.label}`, count: String(b.perYard) })),
];

// Coverage of 1 cubic yard (27 cu ft) at a given depth: sq ft = 324 ÷ depth-in
const COVERAGE_ROWS = [1, 2, 3, 4, 6, 12].map((d) => ({
  depth: `${d} inch${d === 1 ? "" : "es"}`,
  covers: `${324 / d} sq ft`,
}));

const CONVERSION_ROWS = [
  { from: "1 cubic yard (yd³)", to: "27 cubic feet (ft³)" },
  { from: "1 cubic yard (yd³)", to: `${YD3_TO_M3.toFixed(4)} cubic metres (m³)` },
  { from: "1 cubic foot (ft³)", to: `${(YD3_TO_M3 / 27).toFixed(4)} cubic metres (m³)` },
  { from: "1 short ton", to: `${TONS_TO_TONNES.toFixed(4)} tonnes` },
  { from: "1 square yard (yd²)", to: `${SQYD_TO_SQM.toFixed(4)} square metres (m²)` },
  { from: "1 square metre (m²)", to: `${(1 / SQYD_TO_SQM).toFixed(4)} square yards (yd²)` },
];

export const metadata = {
  title: "Cubic Yard Cheat Sheet — One-Page Printable PDF",
  description:
    "Free one-page cubic yard cheat sheet: material densities (lbs & tons per yd³), concrete and mulch bag counts, coverage per depth, conversions, and the core formula. Prints on one US Letter page.",
  keywords: [
    "cubic yard cheat sheet",
    "cubic yard printable",
    "cubic yard reference chart pdf",
    "material weight per cubic yard chart",
    "concrete bags per yard chart",
  ],
  alternates: { canonical: `${SITE_URL}/cheat-sheet/` },
  openGraph: {
    title: "Cubic Yard Cheat Sheet — One-Page Printable PDF | Cubic Yard Calculator",
    description:
      "The one-page cubic yard reference: densities, bag counts, coverage, conversions, and the core formula. Free PDF that prints on one US Letter page.",
    url: `${SITE_URL}/cheat-sheet/`,
  },
};

const faqs = [
  {
    q: "Do the cheat-sheet numbers match the site's calculators?",
    a: "Yes. The page tables and the PDF are generated from the same shared calculation library (lib/calc.js) that every calculator on this site uses — identical densities, bag yields, and conversion factors.",
  },
  {
    q: "How do I print the cheat sheet?",
    a: "Open the PDF (/cubic-yard-cheat-sheet.pdf) and print at 100% scale on US Letter paper (8.5 × 11 in). It is laid out to fit on exactly one page.",
  },
  {
    q: "Can I trust the density numbers for ordering by weight?",
    a: "They are representative published loose bulk densities for planning — good for comparing materials and estimating truck loads. Actual density varies with moisture and compaction, so confirm weight-sensitive numbers (dump-truck limits, structural loads) with your supplier.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cubic Yard Cheat Sheet — One-Page Printable PDF",
  description: metadata.description,
  url: `${SITE_URL}/cheat-sheet/`,
  inLanguage: "en-US",
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  author: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
};

export default function CheatSheetPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="kicker">Printable reference</div>
        <h1 className="h2">Cubic yard cheat sheet</h1>
        <p className="sub">
          Every number on this page comes straight from the same calculation
          library our calculators use — nothing rounded off by hand, nothing
          copied from a different table. Print the PDF, tape it to the truck
          dash, and order with confidence.
        </p>
        <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 10 }}>
          By the Cubic Yard Calculator team · Last updated October 2026
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">One page, everything you need:</span>{" "}
            material weights, concrete &amp; mulch bag counts, how far a yard
            spreads at each depth, unit conversions, and the core formula —
            free PDF below.
          </p>
        </div>

        <div className="card" style={{ marginTop: 28, maxWidth: 640, padding: "28px 32px", textAlign: "center" }}>
          <h2 style={{ marginTop: 0, fontSize: 24 }}>Download the printable PDF</h2>
          <p style={{ color: "var(--muted)" }}>
            Fits on one US Letter page (8.5 × 11 in). Same numbers as the
            tables below.
          </p>
          <a href="/cubic-yard-cheat-sheet.pdf" className="btn btn-primary" download>
            Download cheat sheet (PDF)
          </a>
          <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 0 }}>
            Print at 100% scale · footer: cubicyardcalculator.site
          </p>
        </div>

        <div className="card" style={{ marginTop: 32, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Material weight per cubic yard</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Material</th><th>lbs / yd³</th><th>tons / yd³</th></tr>
            </thead>
            <tbody>
              {DENSITY_ROWS.map((r) => (
                <tr key={r.material}>
                  <td style={{ fontWeight: 700 }}>{r.material}</td>
                  <td>{r.lbs.toLocaleString("en-US")}</td>
                  <td>{(r.lbs / 2000).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 0 }}>
            Representative loose bulk densities for planning. Tons = lbs ÷
            2,000. See{" "}
            <Link href="/methodology/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              our methodology
            </Link>{" "}
            for where these figures come from.
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Bags per cubic yard (manufacturer yields)</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Bag size</th><th>Bags per yd³</th></tr>
            </thead>
            <tbody>
              {BAG_ROWS.map((r) => (
                <tr key={r.size}>
                  <td>{r.size}</td>
                  <td style={{ fontWeight: 700 }}>{r.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 0 }}>
            Bag counts are estimates — real yield varies with mixing. Ready-mix
            is usually the better buy past about 1–2 cubic yards of concrete.
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>What 1 cubic yard covers (at depth)</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Depth</th><th>1 yd³ covers</th></tr>
            </thead>
            <tbody>
              {COVERAGE_ROWS.map((r) => (
                <tr key={r.depth}>
                  <td>{r.depth}</td>
                  <td style={{ fontWeight: 700 }}>{r.covers}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 0 }}>
            Rule: square feet = 324 ÷ depth in inches. Double the depth, halve
            the coverage.
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Conversions</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Conversion</th><th>Equals</th></tr>
            </thead>
            <tbody>
              {CONVERSION_ROWS.map((r) => (
                <tr key={r.from + r.to}>
                  <td>{r.from}</td>
                  <td>{r.to}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px", textAlign: "center" }}>
          <h3 style={{ marginTop: 0 }}>The core formula</h3>
          <p style={{ fontSize: 19 }}>
            <strong>
              Cubic yards = (length<sub>ft</sub> × width<sub>ft</sub> × depth<sub>ft</sub>) ÷ 27
            </strong>
          </p>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Order with a <strong>10% overage</strong>: measure exactly, multiply
            by 1.1 — cheaper than a second delivery. Depth in inches ÷ 12 =
            depth in feet (4″ = 0.333 ft, 6″ = 0.5 ft).
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 36 }}>
          <p>
            These are the same figures behind every{" "}
            <Link href="/calculators/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              calculator
            </Link>{" "}
            on this site. For the full story on how we calculate and verify —
            volume math, density sources, bag-yield basis, and cost
            ballparks — read{" "}
            <Link href="/methodology/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              our methodology
            </Link>
            .
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
      </div>
    </section>
  );
}

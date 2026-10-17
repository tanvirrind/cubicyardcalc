import Link from "next/link";
import PaverCalculator from "../../../components/PaverCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Paver Calculator — How Many Pavers Do I Need?",
  description:
    "Free paver calculator for patios, walkways and driveways. Pavers needed by size and joint gap, plus gravel base and bedding sand in cubic yards and tons.",
  keywords: [
    "paver calculator",
    "how many pavers do i need",
    "patio paver calculator",
    "how much sand for pavers",
    "how much gravel for paver patio",
    "paver base calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/paver-calculator/" },
  openGraph: {
    title: "Paver Calculator — How Many Pavers Do I Need? | Cubic Yard Calculator",
    description:
      "Pavers, joint gaps, gravel base and bedding sand for any patio or walkway. Free paver calculator.",
    url: "https://cubicyardcalculator.site/calculators/paver-calculator/",
  },
};

const faqs = [
  {
    q: "How many pavers do I need per square foot?",
    a: "It depends on paver size and joint gap. Divide 144 by the paver's pitch area in square inches (paver size plus joint on each side). For 6 × 6 in pavers with 1/8-in joints: 144 / (6.125 × 6.125) = 3.84 pavers per square foot, before waste. Smaller pavers and wider joints both raise the count.",
  },
  {
    q: "How do you calculate pavers for a 10 × 10 patio?",
    a: "A 10 × 10 patio is 100 sq ft, or 14,400 sq in. With 6 × 6 in pavers and 1/8-in joints, each paver occupies a 6.125-in pitch: 14,400 / 37.5156 = 383.8, so 384 pavers net. Add 10% for cuts and breakage: 384 × 1.10 = 422.4, so order 423 pavers.",
  },
  {
    q: "How much sand and gravel go under pavers?",
    a: "Plan on 4 inches of compacted gravel base plus 1 inch of bedding sand for patios and walkways. A 10 × 10 patio needs (100 × 0.333) / 27 = 1.23 cubic yards of gravel and (100 × 0.083) / 27 = 0.31 cubic yards of sand. The calculator above computes both from your actual dimensions.",
  },
  {
    q: "How much extra should I order for waste?",
    a: "Ten percent is the standard for square and rectangular layouts — it covers edge cuts, chipped units, and keeping a few spares for future repairs. Go to 15% for diagonal, herringbone, or fan patterns, where every edge cut throws away half a paver.",
  },
  {
    q: "What joint gap should I use between pavers?",
    a: "1/8 inch is the default for interlocking concrete pavers — it lets the joint sand lock the surface together. 1/16 inch suits saw-cut dimensional pavers, 3/16 to 1/4 inch for natural or tumbled pavers with irregular edges. Wider joints use more joint sand and slightly more pavers per square foot.",
  },
];

const patioTable = [
  { size: "8 x 8 (small patio)", pavers: "246", order: "271" },
  { size: "10 x 10 (patio)", pavers: "384", order: "423" },
  { size: "10 x 12 (large patio)", pavers: "461", order: "508" },
  { size: "12 x 12 (entertaining)", pavers: "553", order: "609" },
];

export default function PaverCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Paver Calculator",
            url: "/calculators/paver-calculator/",
            description:
              "Free paver calculator: pavers needed by size and joint gap, plus gravel base and bedding sand quantities for patios, walkways, and driveways.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Paver Calculator" },
          ])}
        />
        <div className="kicker">Patios, walkways, driveways, pool decks</div>
        <h1 className="h2">Paver calculator for patios and walkways</h1>
        <p className="sub">
          The paver count is the easy part — running short on base gravel is
          what stalls projects. This calculator covers both: pavers by size
          and joint gap, plus the compacted gravel and bedding sand underneath.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Divide your
            patio area in square inches by the paver's pitch area (paver size
            plus joint gap, squared). A 10 × 10 patio with 6 × 6 in pavers
            and 1/8-in joints: 14,400 / (6.125 × 6.125) = 383.8 →{" "}
            <strong>384 pavers net</strong>, <strong>423 with 10% waste</strong>.
            Underneath, budget 4 in of compacted gravel (~1.23 yd³) and 1 in
            of bedding sand (~0.31 yd³).
          </p>
        </div>
        <PaverCalculator initialPaverIdx="1" />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Actual paver sizes vary
          slightly by manufacturer, and cuts never land exactly on whole
          units — confirm the final count against your layout before the
          delivery truck arrives.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Common paver sizes</h3>
          <ul style={{ lineHeight: 1.7, marginBottom: 0 }}>
            <li><strong>4 × 8 in (running bond):</strong> the classic brick-shaped paver — 4.5 per sq ft before joints; herringbone patterns use this shape best.</li>
            <li><strong>6 × 6 in:</strong> 4 per sq ft nominal; a good middle ground for patios that won't look busy.</li>
            <li><strong>6 × 9 in:</strong> 2.67 per sq ft; pairs with 6 × 6 for random patterns.</li>
            <li><strong>12 × 12 in:</strong> 1 per sq ft; modern look, fastest to lay, but shows any lippage in the base.</li>
            <li>Pick <strong>Custom size</strong> above for anything else — big-format, plank, or natural-stone pavers.</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Base-layer rules</h3>
          <ul style={{ lineHeight: 1.7, marginBottom: 0 }}>
            <li><strong>Gravel base: 4 inches compacted</strong> for patios and walkways (6+ in for driveways that carry cars). Use crusher run / 3/4-in minus — it locks together when compacted; pea gravel never does.</li>
            <li><strong>Bedding sand: 1 inch screeded.</strong> More than 1.5 inches and the pavers settle unevenly underfoot.</li>
            <li>Compact the gravel in <strong>2-inch lifts</strong> with a plate compactor — one pass over 4 inches leaves soft spots that settle later.</li>
            <li><strong>Landscape fabric</strong> between soil and gravel stops weeds and keeps the base from sinking into soft ground.</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Paver counts with 6 × 6 in pavers, 1/8-in joints</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Project size</th><th>Pavers (net)</th><th>Order (10% waste)</th></tr>
            </thead>
            <tbody>
              {patioTable.map((r) => (
                <tr key={r.size}>
                  <td>{r.size}</td>
                  <td className="num">{r.pavers}</td>
                  <td className="num">{r.order}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Counts use the 6.125-in pitch (paver plus 1/8-in joint). Different
            sizes and patterns change the numbers — run the calculator above
            for your exact layout.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          For the full base-prep walkthrough, read the{" "}
          <Link href="/guides/paver-base-sand-gravel-guide/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            paver base sand and gravel guide
          </Link>
          , and for bulk aggregate math on its own use the{" "}
          <Link href="/calculators/gravel-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            gravel calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

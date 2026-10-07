import Link from "next/link";
import FillDirtCalculator from "../../../components/FillDirtCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Fill Dirt Calculator - Calculate Cubic Yards of Fill Dirt",
  description:
    "Calculate cubic yards of fill dirt for grading, backfill and leveling. Includes the fill dirt formula, coverage chart and planning tips.",
  keywords: [
    "fill dirt calculator",
    "how many yards of dirt do i need",
    "fill dirt cubic yards",
    "how much fill dirt do i need",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/fill-dirt-calculator/" },
  openGraph: {
    title: "Fill Dirt Calculator - Calculate Cubic Yards of Fill Dirt | Cubic Yard Calculator",
    description:
      "Free fill dirt calculator: cubic yards and tons for grading, backfill and leveling, with a coverage chart.",
    url: "https://cubicyardcalculator.site/calculators/fill-dirt-calculator/",
  },
};

const faqs = [
  {
    q: "How do I calculate fill dirt?",
    a: "Multiply length by width by depth in feet, then divide by 27 to get cubic yards.",
  },
  {
    q: "How much does a cubic yard of fill dirt cover?",
    a: "Coverage depends on depth. One cubic yard covers 108 square feet at 3 inches deep, or 81 square feet at 4 inches deep.",
  },
  {
    q: "Should I add extra fill dirt?",
    a: "Add about 10 percent when the area may settle, compact, or have uneven ground.",
  },
  {
    q: "What is the difference between fill dirt and topsoil?",
    a: "Fill dirt is commonly used for grading and raising low areas. Topsoil is screened and nutrient-rich for lawns, gardens, and planting.",
  },
];

const coverageTable = [
  { depth: "3 inches", cover: "108 sq ft", use: "Light leveling and low spots" },
  { depth: "4 inches", cover: "81 sq ft", use: "General fill and grading" },
  { depth: "6 inches", cover: "54 sq ft", use: "Deeper base and site buildup" },
  { depth: "12 inches", cover: "27 sq ft", use: "Deep fill and raised areas" },
];

export default function FillDirtCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Fill Dirt Calculator",
            url: "/calculators/fill-dirt-calculator/",
            description:
              "Free fill dirt calculator: cubic yards and tons for grading, backfill, leveling and site buildup.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Fill Dirt Calculator" },
          ])}
        />
        <div className="kicker">Soil and grading guide</div>
        <h1 className="h2">Fill dirt calculator</h1>
        <p className="sub">
          Estimate cubic yards of fill dirt for grading, backfill, leveling
          low spots, building up a site, or filling around a foundation.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Length in feet
            × width in feet × depth in feet ÷ 27 = cubic yards of fill dirt.
          </p>
        </div>
        <FillDirtCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Fill dirt compacts — confirm
          screened vs. common fill and delivery minimums with your supplier.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Fill dirt coverage by depth</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Depth</th><th>Area covered by 1 cubic yard</th><th>Common use</th></tr>
            </thead>
            <tbody>
              {coverageTable.map((r) => (
                <tr key={r.depth}>
                  <td>{r.depth}</td>
                  <td className="num">{r.cover}</td>
                  <td>{r.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 style={{ marginTop: 28 }}>Fill dirt planning tips</h3>
          <ul style={{ color: "var(--ink-soft)", lineHeight: 1.7, paddingLeft: 20, marginBottom: 0 }}>
            <li>Measure the average depth across the full area.</li>
            <li>Account for compaction when the soil will be used as a base.</li>
            <li>Confirm whether the supplier sells screened fill, common fill, or structural fill.</li>
            <li>Ask about delivery minimums and truck access before ordering.</li>
          </ul>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Planting instead of grading? Try the{" "}
          <Link href="/calculators/topsoil-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            topsoil calculator
          </Link>
          , or compare both soil types in the{" "}
          <Link href="/calculators/dirt-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            dirt and topsoil calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

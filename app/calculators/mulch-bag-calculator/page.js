import Link from "next/link";
import MulchBagCalculator from "../../../components/MulchBagCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Mulch Bag Calculator - Cubic Yards to Bags",
  description:
    "Calculate how many bags of mulch you need from square feet and depth. Two-way converter for cubic yards to 2 cu ft bags.",
  keywords: [
    "mulch bag calculator",
    "how many bags of mulch per cubic yard",
    "cubic yards to mulch bags",
    "mulch bags needed calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/mulch-bag-calculator/" },
  openGraph: {
    title: "Mulch Bag Calculator - Cubic Yards to Bags | Cubic Yard Calculator",
    description:
      "Free mulch bag calculator: yards to 2 and 3 cu ft bags and back, with coverage examples.",
    url: "https://cubicyardcalculator.site/calculators/mulch-bag-calculator/",
  },
};

const faqs = [
  {
    q: "How many 2-cubic-foot bags are in a cubic yard?",
    a: "There are 13.5 two-cubic-foot bags in a cubic yard, so round up to 14 bags before adding overage.",
  },
  {
    q: "How many bags of mulch do I need?",
    a: "Multiply the area by depth to get cubic feet, divide by 27 for cubic yards, then multiply cubic yards by 13.5 for two-cubic-foot bags.",
  },
  {
    q: "How deep should mulch be?",
    a: "Most beds use 2 to 3 inches. Four inches is usually a practical maximum for a fresh layer.",
  },
  {
    q: "Should I add extra mulch?",
    a: "Add around 10 percent for settling, uneven areas, and waste.",
  },
];

const coverageTable = [
  { area: "100 sq ft", depth: "2 inches", yards: "0.62 yd³", bags: "9 bags" },
  { area: "100 sq ft", depth: "3 inches", yards: "0.93 yd³", bags: "13 bags" },
  { area: "200 sq ft", depth: "3 inches", yards: "1.85 yd³", bags: "25 bags" },
  { area: "300 sq ft", depth: "3 inches", yards: "2.78 yd³", bags: "38 bags" },
];

export default function MulchBagCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Mulch Bag Calculator",
            url: "/calculators/mulch-bag-calculator/",
            description:
              "Free mulch bag calculator: convert cubic yards to 2 and 3 cu ft bags and back, with coverage examples.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Mulch Bag Calculator" },
          ])}
        />
        <div className="kicker">Landscape bag estimator</div>
        <h1 className="h2">Mulch bag calculator</h1>
        <p className="sub">
          Estimate cubic yards of mulch and convert the volume into
          two-cubic-foot bags for garden beds, borders, tree rings, and
          landscaping.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> One cubic yard
            equals 27 cubic feet, or 13.5 bags that each hold 2 cubic feet.
            Round up to 14 bags before adding overage.
          </p>
        </div>
        <MulchBagCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Check bag sizes on the label
          and confirm bulk pricing with your supplier before ordering.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Mulch coverage examples</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Area</th><th>Depth</th><th>Mulch needed</th><th>2-cu-ft bags</th></tr>
            </thead>
            <tbody>
              {coverageTable.map((r, i) => (
                <tr key={i}>
                  <td>{r.area}</td>
                  <td>{r.depth}</td>
                  <td className="num">{r.yards}</td>
                  <td className="num">{r.bags}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 style={{ marginTop: 28 }}>Mulch planning tips</h3>
          <ul style={{ color: "var(--ink-soft)", lineHeight: 1.7, paddingLeft: 20, marginBottom: 0 }}>
            <li>Measure the bed after edging so the area reflects the actual space to cover.</li>
            <li>Use 2 inches for a light refresh and 3 inches for a new layer.</li>
            <li>Keep mulch away from direct contact with tree trunks and building siding.</li>
            <li>Compare bagged and bulk pricing after accounting for delivery.</li>
          </ul>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Start from bed dimensions with the{" "}
          <Link href="/calculators/mulch-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            mulch calculator
          </Link>
          , or read the bags-vs-bulk breakdown in{" "}
          <Link href="/guides/how-much-mulch-do-i-need/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how much mulch do I need
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

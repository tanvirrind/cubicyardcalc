import Link from "next/link";
import MulchCalculator from "../../../components/MulchCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Mulch Calculator - Cubic Yards and Bags Needed",
  description:
    "Calculate cubic yards of mulch for garden beds and landscaping. Find out how many bags you need. Free mulch calculator with depth guide and coverage estimates.",
  keywords: [
    "mulch calculator",
    "how much mulch do i need",
    "how many bags of mulch in a cubic yard",
    "mulch coverage calculator",
    "how deep should mulch be",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/mulch-calculator/" },
  openGraph: {
    title: "Mulch Calculator - Cubic Yards and Bags Needed | Cubic Yard Calculator",
    description:
      "Cubic yards of mulch for beds and landscaping, plus bag counts, depth guide and coverage estimates. Free.",
    url: "https://cubicyardcalculator.site/calculators/mulch-calculator/",
  },
};

const faqs = [
  {
    q: "How do I calculate cubic yards of mulch?",
    a: "Multiply bed length by width by mulch depth in feet, then divide by 27. A 3 inch depth is 0.25 feet.",
  },
  {
    q: "How deep should mulch be?",
    a: "Most beds use 2 to 3 inches of mulch. Use 4 inches only where extra weed control or moisture protection is needed.",
  },
  {
    q: "How many 2 cubic foot bags are in a cubic yard?",
    a: "There are 13.5 bags of 2 cubic feet in 1 cubic yard. Round up to 14 bags for ordering.",
  },
  {
    q: "Is bulk mulch cheaper than bags?",
    a: "Bulk mulch is often cheaper for larger areas. Bags are convenient for small beds, repairs, and areas without easy delivery access.",
  },
  {
    q: "How much does a yard of mulch cover at 2 inches?",
    a: "One cubic yard covers about 162 square feet at 2 inches deep. At 3 inches it covers 108 square feet, and at 4 inches it covers 81 square feet.",
  },
  {
    q: "How many bags of mulch do I need for 100 square feet?",
    a: "At 3 inches deep, 100 sq ft needs about 0.93 cubic yards, or roughly 13 bags of 2 cu ft mulch. Round up to 14 bags, or 15 to 16 with overage.",
  },
];

const coverageTable = [
  { depth: "1 inch", coverage: "324 sq ft", use: "Topdressing, thin mulch refresh" },
  { depth: "2 inches", coverage: "162 sq ft", use: "Refreshing existing beds" },
  { depth: "3 inches", coverage: "108 sq ft", use: "New mulch beds" },
  { depth: "4 inches", coverage: "81 sq ft", use: "Heavy weed control" },
];

export default function MulchCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Mulch Calculator",
            url: "/calculators/mulch-calculator/",
            description:
              "Free mulch calculator: cubic yards, 2/3 cu ft bag counts, coverage and overage for garden beds.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Mulch Calculator" },
          ])}
        />
        <div className="kicker">Beds, borders, and landscape areas</div>
        <h1 className="h2">Mulch calculator — cubic yards</h1>
        <p className="sub">
          Estimate bulk mulch, 2 and 3 cubic foot bags, coverage area, and
          overage for wood chips, shredded bark, or rubber mulch.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Multiply bed
            length × width × mulch depth in feet and divide by 27. A 200 sq ft
            bed at 3 inches deep needs (200 × 0.25) / 27 ={" "}
            <strong>1.85 cubic yards</strong> — about 25 bags of 2 cu ft
            mulch, or 27 to 28 bags with 10 percent overage.
          </p>
        </div>
        <MulchCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates volume and
          bags from the numbers you punch in — check bag sizes on the label
          and confirm bulk pricing with your supplier before ordering.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Coverage per cubic yard by depth</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Depth</th><th>Area covered by 1 cubic yard</th><th>Common use</th></tr>
            </thead>
            <tbody>
              {coverageTable.map((r) => (
                <tr key={r.depth}>
                  <td className="num">{r.depth}</td>
                  <td className="num">{r.coverage}</td>
                  <td>{r.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Deep dive:{" "}
          <Link href="/guides/how-much-mulch-do-i-need/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            How much mulch do I need? (bags vs bulk)
          </Link>{" "}
          — or convert area-only estimates with the{" "}
          <Link href="/calculators/square-feet-to-cubic-yards-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            square-feet converter
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";
import GravelTonsConverter from "../../../components/GravelTonsConverter";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Gravel to Tons Calculator - Convert Yards and Tons",
  description:
    "Convert gravel cubic yards to tons or tons to cubic yards. Uses ~1.4 tons per yard with a quick reference conversion table.",
  keywords: [
    "gravel to tons calculator",
    "cubic yards of gravel to tons",
    "tons of gravel to cubic yards",
    "how many tons per yard of gravel",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/gravel-to-tons-calculator/" },
  openGraph: {
    title: "Gravel to Tons Calculator - Convert Yards and Tons | Cubic Yard Calculator",
    description:
      "Free two-way gravel converter: cubic yards to tons and tons to cubic yards at ~1.4 tons per yard.",
    url: "https://cubicyardcalculator.site/calculators/gravel-to-tons-calculator/",
  },
};

const faqs = [
  {
    q: "How many yards of gravel are in a ton?",
    a: "It depends on density. A planning estimate for common gravel is about 0.71 cubic yards per ton, or about 1.4 tons per cubic yard.",
  },
  {
    q: "How do I convert gravel from cubic yards to tons?",
    a: "Multiply cubic yards by the gravel weight per cubic yard. The calculator uses an approximate gravel density of 2,800 lbs per yard — check against your supplier.",
  },
  {
    q: "Does wet gravel weigh more?",
    a: "Yes. Moisture, stone size, and composition can change the actual weight significantly.",
  },
  {
    q: "Should I use tons or cubic yards when ordering?",
    a: "Use the unit your supplier quotes. Ask for the material density if you need to convert between them.",
  },
];

const conversionTable = [
  { yards: "0.5 cubic yards", tons: "0.70 tons" },
  { yards: "1 cubic yard", tons: "1.40 tons" },
  { yards: "2 cubic yards", tons: "2.80 tons" },
  { yards: "5 cubic yards", tons: "7.00 tons" },
  { yards: "10 cubic yards", tons: "14.00 tons" },
];

export default function GravelToTonsCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Gravel to Tons Calculator",
            url: "/calculators/gravel-to-tons-calculator/",
            description:
              "Free two-way gravel converter: cubic yards to tons and tons to cubic yards at about 1.4 tons per yard.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Gravel to Tons Calculator" },
          ])}
        />
        <div className="kicker">Weight and volume conversion</div>
        <h1 className="h2">Gravel to tons calculator</h1>
        <p className="sub">
          Convert gravel from cubic yards to tons or from tons to cubic
          yards using an approximate gravel density.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Gravel × 1.40
            = tons. Tons ÷ 1.40 = cubic yards.{" "}
            <strong>Note:</strong> gravel weight varies by stone type, size,
            and moisture — treat this as a planning estimate and confirm the
            supplier&apos;s quoted weight.
          </p>
        </div>
        <GravelTonsConverter />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Moisture and stone type move
          real density — confirm tons-per-yard with your supplier for final
          orders and hauling limits.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Approximate gravel conversions</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Gravel volume</th><th>Approximate weight</th></tr>
            </thead>
            <tbody>
              {conversionTable.map((r) => (
                <tr key={r.yards}>
                  <td>{r.yards}</td>
                  <td className="num">{r.tons}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 style={{ marginTop: 28 }}>Ordering gravel</h3>
          <ul style={{ color: "var(--ink-soft)", lineHeight: 1.7, paddingLeft: 20, marginBottom: 0 }}>
            <li>Measure the project volume before converting to weight.</li>
            <li>Ask whether the supplier&apos;s price is per ton or per cubic yard.</li>
            <li>Confirm the stone type and moisture conditions used for the quote.</li>
            <li>Check truck payload limits when ordering large quantities.</li>
          </ul>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Related tools: the{" "}
          <Link href="/calculators/gravel-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            gravel calculator
          </Link>
          , the{" "}
          <Link href="/calculators/landscape-rock-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            landscape rock calculator
          </Link>
          , and{" "}
          <Link href="/how-to-calculate-cubic-yards" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how to calculate cubic yards
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

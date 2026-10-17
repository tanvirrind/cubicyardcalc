import Link from "next/link";
import SqMConverter from "../../../components/SqMConverter";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Square Meters to Square Yards Calculator — Free Converter",
  description:
    "Free square meters to square yards converter. Instant m² → yd² and reverse, plus square feet, a common-sizes table, and the conversion formula.",
  keywords: [
    "square meters to square yards calculator",
    "m2 to yd2 converter",
    "square yards to square meters",
    "how many square yards in a square meter",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/square-meters-to-square-yards-calculator/" },
  openGraph: {
    title: "Square Meters to Square Yards Calculator — Free Converter | Cubic Yard Calculator",
    description:
      "Convert m² to yd² instantly — two-way converter with formula and size table. Free.",
    url: "https://cubicyardcalculator.site/calculators/square-meters-to-square-yards-calculator/",
  },
};

const faqs = [
  {
    q: "What is the formula for square meters to square yards?",
    a: "Divide by 0.836127, or multiply by 1.19599. So 100 m² ÷ 0.836127 = 119.599 yd². One square yard is 0.836127 square meters.",
  },
  {
    q: "How do I convert square yards back to square meters?",
    a: "Multiply by 0.836127. Switch the converter above to the reverse mode and it does it for you.",
  },
  {
    q: "Why do US suppliers use square yards instead of square meters?",
    a: "Carpet, turf, sod, and concrete flatwork in the US are priced by the square yard — the legacy unit of the trade. Metric plans get converted at estimate time, which is exactly what this tool does.",
  },
  {
    q: "How many square meters are in an acre?",
    a: "4,046.86 m² (about 4,840 yd²). An acre is defined in imperial units, so the metric figure is the rounded one.",
  },
  {
    q: "How many square feet are in a square meter?",
    a: "10.7639. The converter shows square feet alongside every result, since most US area calculators work in ft².",
  },
];

const sizeTable = [
  { m2: "10", yd2: "11.96", ft2: "107.64" },
  { m2: "25", yd2: "29.90", ft2: "269.10" },
  { m2: "50", yd2: "59.80", ft2: "538.20" },
  { m2: "100", yd2: "119.60", ft2: "1,076.39" },
  { m2: "200", yd2: "239.20", ft2: "2,152.78" },
];

export default function SqMToSqYdCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Square Meters to Square Yards Calculator",
            url: "/calculators/square-meters-to-square-yards-calculator/",
            description:
              "Free two-way converter: square meters to square yards (and back), with square feet and a common-sizes table.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Square Meters to Square Yards" },
          ])}
        />
        <div className="kicker">Metric plans, US yards — one converter</div>
        <h1 className="h2">Square meters to square yards calculator</h1>
        <p className="sub">
          Your plans are in metric but the quote is in square yards. Type
          either unit — the converter works both ways and shows square feet
          too.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> 1 m² ={" "}
            <strong>1.19599 yd²</strong>. Multiply square meters by 1.19599:
            100 m² × 1.19599 = <strong>119.60 yd²</strong>. Reverse: 1 yd² =
            0.8361 m².
          </p>
        </div>
        <SqMConverter />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Pure geometry — no judgment
          calls involved. Round up before ordering materials, since cutting
          and pattern matching waste real area.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Common sizes at a glance</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Square meters</th><th>Square yards</th><th>Square feet</th></tr>
            </thead>
            <tbody>
              {sizeTable.map((r) => (
                <tr key={r.m2}>
                  <td className="num">{r.m2}</td>
                  <td className="num">{r.yd2}</td>
                  <td className="num">{r.ft2}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            A 100 m² apartment is about 120 square yards; a 200 m² lot
            running the full metric side is roughly 239 yd².
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Need square footage from square yards for another calculator? The{" "}
          <Link href="/calculators/square-yard-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            square yard calculator
          </Link>{" "}
          covers the area side, and{" "}
          <Link href="/calculators/square-feet-to-cubic-yards-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            sq ft → cubic yards
          </Link>{" "}
          adds depth for volume.
        </p>
      </div>
    </section>
  );
}

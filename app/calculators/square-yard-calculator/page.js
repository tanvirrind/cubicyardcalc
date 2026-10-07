import Link from "next/link";
import SquareYardCalculator from "../../../components/SquareYardCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Square Yard Calculator - Convert Square Feet to Square Yards",
  description:
    "Calculate square yards from length and width with this free tool. Convert square feet to square yards for flooring, turf and landscaping.",
  keywords: [
    "square yard calculator",
    "square feet to square yards",
    "sq ft to sq yd",
    "how to calculate square yards",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/square-yard-calculator/" },
  openGraph: {
    title: "Square Yard Calculator - Convert Square Feet to Square Yards | Cubic Yard Calculator",
    description:
      "Free square yard calculator: length × width → square feet and square yards. For flooring, turf, fabric and landscaping.",
    url: "https://cubicyardcalculator.site/calculators/square-yard-calculator/",
  },
};

const faqs = [
  {
    q: "How do you calculate square yards?",
    a: "Multiply the length by the width in feet, then divide the square feet by 9.",
  },
  {
    q: "How many square feet are in a square yard?",
    a: "There are 9 square feet in 1 square yard because a yard is 3 feet long and 3 feet wide.",
  },
  {
    q: "Is a square yard the same as a cubic yard?",
    a: "No. A square yard measures area. A cubic yard measures volume and also requires depth.",
  },
];

const conversionTable = [
  { ft2: "9", yd2: "1" },
  { ft2: "100", yd2: "11.11" },
  { ft2: "500", yd2: "55.56" },
  { ft2: "900", yd2: "100" },
  { ft2: "1,000", yd2: "111.11" },
];

export default function SquareYardCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Square Yard Calculator",
            url: "/calculators/square-yard-calculator/",
            description:
              "Free square yard calculator: square feet to square yards for flooring, turf, fabric and landscaping.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Square Yard Calculator" },
          ])}
        />
        <div className="kicker">Area converter</div>
        <h1 className="h2">Square yard calculator</h1>
        <p className="sub">
          Enter length and width to calculate square feet and square yards.
          Use this for flooring, landscaping, fabric, turf, and other area
          measurements.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Length in feet
            × width in feet ÷ 9 = square yards, because 1 square yard equals
            9 square feet.
          </p>
        </div>
        <SquareYardCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Square yards measure flat
          area — for soil, mulch, gravel, or concrete you need cubic yards,
          which also require depth.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Common conversions</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Square feet</th><th>Square yards</th></tr>
            </thead>
            <tbody>
              {conversionTable.map((r) => (
                <tr key={r.ft2}>
                  <td className="num">{r.ft2}</td>
                  <td className="num">{r.yd2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Need volume instead? The{" "}
          <Link href="/calculators/cubic-yard-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            cubic yard calculator
          </Link>{" "}
          adds depth, and{" "}
          <Link href="/how-many-feet-in-a-yard" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how many feet are in a yard
          </Link>{" "}
          clears up yards vs. cubic yards.
        </p>
      </div>
    </section>
  );
}

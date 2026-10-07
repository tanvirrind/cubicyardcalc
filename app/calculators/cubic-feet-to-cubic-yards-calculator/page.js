import Link from "next/link";
import CubicFeetConverter from "../../../components/CubicFeetConverter";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Cubic Feet to Cubic Yards Calculator - Convert Both Ways",
  description:
    "Convert cubic feet to cubic yards or back with this free two-way volume converter. One cubic yard equals 27 cubic feet.",
  keywords: [
    "cubic feet to cubic yards calculator",
    "cubic feet to cubic yards",
    "cubic yards to cubic feet",
    "convert cubic feet to cubic yards",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/cubic-feet-to-cubic-yards-calculator/" },
  openGraph: {
    title: "Cubic Feet to Cubic Yards Calculator - Convert Both Ways | Cubic Yard Calculator",
    description:
      "Free two-way converter: cubic feet to cubic yards and back. 1 cubic yard = 27 cubic feet.",
    url: "https://cubicyardcalculator.site/calculators/cubic-feet-to-cubic-yards-calculator/",
  },
};

const faqs = [
  {
    q: "What is the formula for cubic feet to cubic yards?",
    a: "Divide the number of cubic feet by 27.",
  },
  {
    q: "How many cubic feet are in one cubic yard?",
    a: "One cubic yard contains 27 cubic feet.",
  },
  {
    q: "Can I convert cubic yards to cubic feet?",
    a: "Yes. Select cubic yards as the input and multiply the amount by 27.",
  },
];

const conversionTable = [
  { ft3: "27", yd3: "1" },
  { ft3: "54", yd3: "2" },
  { ft3: "81", yd3: "3" },
  { ft3: "135", yd3: "5" },
  { ft3: "270", yd3: "10" },
];

export default function CubicFeetConverterPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Cubic Feet to Cubic Yards Calculator",
            url: "/calculators/cubic-feet-to-cubic-yards-calculator/",
            description:
              "Free two-way volume converter: cubic feet to cubic yards and cubic yards to cubic feet.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Cubic Feet to Cubic Yards Calculator" },
          ])}
        />
        <div className="kicker">Two-way volume converter</div>
        <h1 className="h2">Cubic feet to cubic yards calculator</h1>
        <p className="sub">
          Convert cubic feet to cubic yards or cubic yards to cubic feet. The
          conversion is based on 27 cubic feet per cubic yard.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Cubic feet ÷ 27
            = cubic yards. To reverse it: cubic yards × 27 = cubic feet.
          </p>
        </div>
        <CubicFeetConverter />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> The 27 rule is exact for
          volume — but material weight still depends on density.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Quick conversion table</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Cubic feet</th><th>Cubic yards</th></tr>
            </thead>
            <tbody>
              {conversionTable.map((r) => (
                <tr key={r.ft3}>
                  <td className="num">{r.ft3}</td>
                  <td className="num">{r.yd3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Measuring a project? The{" "}
          <Link href="/calculators/cubic-yard-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            cubic yard calculator
          </Link>{" "}
          works from length, width and depth, and the{" "}
          <Link href="/how-many-cubic-feet-in-a-cubic-yard" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            27-cubic-foot rule
          </Link>{" "}
          explains why the math works.
        </p>
      </div>
    </section>
  );
}

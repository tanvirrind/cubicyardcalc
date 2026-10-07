import Link from "next/link";
import SqftToYardsCalculator from "../../../components/SqftToYardsCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Square Feet to Cubic Yards Calculator - Free Converter",
  description:
    "Convert square feet to cubic yards by entering area and depth. Instant results for concrete, gravel, mulch and more. Free tool.",
  keywords: [
    "square feet to cubic yards calculator",
    "square feet to cubic yards",
    "sq ft to cubic yards",
    "how to convert square feet to cubic yards",
    "100 square feet to cubic yards",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/square-feet-to-cubic-yards-calculator/" },
  openGraph: {
    title: "Square Feet to Cubic Yards Calculator - Free Converter | Cubic Yard Calculator",
    description:
      "Convert square feet to cubic yards with area and depth — instant results for concrete, gravel, mulch and more.",
    url: "https://cubicyardcalculator.site/calculators/square-feet-to-cubic-yards-calculator/",
  },
};

const faqs = [
  {
    q: "How do you convert square feet to cubic yards?",
    a: "Multiply square feet by depth in feet, then divide by 27. Convert inches to feet before calculating.",
  },
  {
    q: "Can square feet alone become cubic yards?",
    a: "No. You also need depth or thickness because cubic yards measure volume.",
  },
  {
    q: "How many cubic yards cover 1,000 square feet at 3 inches?",
    a: "Three inches is 0.25 feet. 1,000 × 0.25 / 27 = 9.26 cubic yards before overage.",
  },
  {
    q: "How do you convert square yards to cubic yards?",
    a: "Multiply square yards by depth in yards. One square yard at 1 yard deep is 1 cubic yard. For inches, divide by 36 first (36 inches = 1 yard).",
  },
  {
    q: "What depth should I use for mulch?",
    a: "Use 2 to 3 inches for most mulch projects. Use 4 inches only when the bed needs a heavier layer.",
  },
  {
    q: "What depth should I use for concrete?",
    a: "Many patios and sidewalks use 4 inches. Driveways and heavier slabs may need 5 to 6 inches or more.",
  },
];

const depthTable = [
  { depth: "1 inch", a100: "0.31", a500: "1.54", a1000: "3.09" },
  { depth: "2 inches", a100: "0.62", a500: "3.09", a1000: "6.17" },
  { depth: "3 inches", a100: "0.93", a500: "4.63", a1000: "9.26" },
  { depth: "4 inches", a100: "1.23", a500: "6.17", a1000: "12.35" },
  { depth: "6 inches", a100: "1.85", a500: "9.26", a1000: "18.52" },
  { depth: "8 inches", a100: "2.47", a500: "12.35", a1000: "24.69" },
  { depth: "12 inches", a100: "3.70", a500: "18.52", a1000: "37.04" },
];

export default function SqftToYardsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Square Feet to Cubic Yards Calculator",
            url: "/calculators/square-feet-to-cubic-yards-calculator/",
            description:
              "Free square feet to cubic yards converter: area plus depth to cubic yards, weight and overage.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Square Feet to Cubic Yards Calculator" },
          ])}
        />
        <div className="kicker">Area plus depth converter</div>
        <h1 className="h2">Square feet to cubic yards calculator</h1>
        <p className="sub">
          Enter square feet and depth to calculate cubic yards, weight in
          tons, and overage for common bulk materials.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Cubic yards =
            square feet × depth in feet / 27. For example, 1,000 sq ft at 3
            inches deep = (1,000 × 0.25) / 27 ={" "}
            <strong>9.26 cubic yards</strong>. Convert inches to feet first:
            divide inches by 12.
          </p>
        </div>
        <SqftToYardsCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Area alone can&apos;t become
          volume — pick the depth that matches your project and confirm with
          your supplier before ordering.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Square feet to cubic yards by depth</h3>
          <p style={{ color: "var(--muted)" }}>
            Cubic yards needed per 100 square feet at common depths. Scale up
            by area — for 500 sq ft, multiply by 5.
          </p>
          <table className="ref-table">
            <thead>
              <tr><th>Depth</th><th>Per 100 sq ft</th><th>Per 500 sq ft</th><th>Per 1,000 sq ft</th></tr>
            </thead>
            <tbody>
              {depthTable.map((r) => (
                <tr key={r.depth}>
                  <td className="num">{r.depth}</td>
                  <td className="num">{r.a100}</td>
                  <td className="num">{r.a500}</td>
                  <td className="num">{r.a1000}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Have L×W instead of area? The{" "}
          <Link href="/calculators/cubic-yard-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            cubic yard calculator
          </Link>{" "}
          takes dimensions directly — or go straight to{" "}
          <Link href="/calculators/concrete-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete
          </Link>
          ,{" "}
          <Link href="/calculators/mulch-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            mulch
          </Link>{" "}
          or{" "}
          <Link href="/calculators/gravel-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            gravel
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

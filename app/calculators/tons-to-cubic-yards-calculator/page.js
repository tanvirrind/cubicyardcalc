import Link from "next/link";
import TonsToYardsCalculator from "../../../components/TonsToYardsCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Tons to Cubic Yards Calculator - Convert Any Material",
  description:
    "Convert tons to cubic yards or cubic yards to tons instantly. Supports concrete, gravel, dirt, sand and more. Free two-way conversion calculator.",
  keywords: [
    "tons to cubic yards calculator",
    "tons to cubic yards",
    "how many cubic yards in a ton of gravel",
    "how many cubic yards in a ton of sand",
    "cubic yards to tons calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/tons-to-cubic-yards-calculator/" },
  openGraph: {
    title: "Tons to Cubic Yards Calculator - Convert Any Material | Cubic Yard Calculator",
    description:
      "Convert tons to cubic yards or cubic yards to tons instantly — concrete, gravel, dirt, sand and more.",
    url: "https://cubicyardcalculator.site/calculators/tons-to-cubic-yards-calculator/",
  },
};

const faqs = [
  {
    q: "How do you convert tons to cubic yards?",
    a: "Divide tons by the tons per cubic yard for the selected material. Density changes by material, so the same tonnage gives different volumes.",
  },
  {
    q: "How many cubic yards are in a ton of gravel?",
    a: "Using 2,800 lbs per cubic yard, 1 ton of gravel is about 0.71 cubic yards. Local rock type and moisture can change that estimate.",
  },
  {
    q: "How many cubic yards are in a ton of mulch?",
    a: "About 2.50 cubic yards. Mulch is light at roughly 800 lbs per cubic yard, so 2,000 / 800 = 2.5 yards per ton — much more volume per ton than stone or soil.",
  },
  {
    q: "Is a short ton 2,000 lbs?",
    a: "Yes. This calculator uses the US short ton, which equals 2,000 lbs.",
  },
  {
    q: "Why does my supplier sell gravel by the ton?",
    a: "Heavy materials are weighed on truck scales, so tons are the natural billing unit. Volume still matters for planning how much ground the load will cover.",
  },
  {
    q: "Does wet material change the conversion?",
    a: "Yes. Water adds weight without adding much volume, so wet sand, soil, or mulch gives fewer cubic yards per ton than dry material.",
  },
];

const densityTable = [
  { material: "Concrete", lbs: "4,050", tonsPerYard: "2.03", yardsPerTon: "0.49" },
  { material: "Gravel", lbs: "2,800", tonsPerYard: "1.40", yardsPerTon: "0.71" },
  { material: "Fill dirt", lbs: "2,200", tonsPerYard: "1.10", yardsPerTon: "0.91" },
  { material: "Topsoil", lbs: "2,400", tonsPerYard: "1.20", yardsPerTon: "0.83" },
  { material: "Mulch", lbs: "800", tonsPerYard: "0.40", yardsPerTon: "2.50" },
  { material: "Sand", lbs: "2,700", tonsPerYard: "1.35", yardsPerTon: "0.74" },
];

export default function TonsToYardsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Tons to Cubic Yards Calculator",
            url: "/calculators/tons-to-cubic-yards-calculator/",
            description:
              "Free two-way converter: tons to cubic yards and cubic yards to tons for concrete, gravel, dirt, sand and more.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Tons to Cubic Yards Calculator" },
          ])}
        />
        <div className="kicker">Two-way bulk material converter</div>
        <h1 className="h2">Tons to cubic yards calculator</h1>
        <p className="sub">
          Convert tons to cubic yards, or cubic yards to tons, using common
          material densities for concrete, gravel, dirt, mulch, sand, and
          topsoil.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Cubic yards =
            tons × 2,000 / density in lbs per cubic yard. One ton of gravel
            (2,800 lbs/yd) is about <strong>0.71 cubic yards</strong>, while
            one ton of mulch (800 lbs/yd) is about{" "}
            <strong>2.50 cubic yards</strong>. The material density decides
            everything — convert with the right material selected.
          </p>
        </div>
        <TonsToYardsCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Moisture changes real
          density — confirm with your supplier for final orders and hauling
          limits.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Conversion table by material</h3>
          <p style={{ color: "var(--muted)" }}>
            Typical densities powering the converter. Actual material varies
            with moisture, compaction, and rock type — use supplier figures
            for final orders.
          </p>
          <table className="ref-table">
            <thead>
              <tr><th>Material</th><th>Lbs per cubic yard</th><th>Tons per yard</th><th>Yards per ton</th></tr>
            </thead>
            <tbody>
              {densityTable.map((r) => (
                <tr key={r.material}>
                  <td>{r.material}</td>
                  <td className="num">{r.lbs}</td>
                  <td className="num">{r.tonsPerYard}</td>
                  <td className="num">{r.yardsPerTon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          See the full story in the{" "}
          <Link href="/guides/cubic-yards-to-tons-conversion-guide/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            cubic-yards-to-tons conversion guide
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

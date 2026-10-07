import Link from "next/link";
import LandscapeRockCalculator from "../../../components/LandscapeRockCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Landscape Rock Calculator - Cubic Yards of Rock and Stone",
  description:
    "Calculate cubic yards of landscape rock, decorative stone and drainage rock. Coverage chart, weight in tons and planning tips included.",
  keywords: [
    "landscape rock calculator",
    "how much rock do i need",
    "decorative stone calculator",
    "river rock calculator",
    "drainage rock calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/landscape-rock-calculator/" },
  openGraph: {
    title: "Landscape Rock Calculator - Cubic Yards of Rock and Stone | Cubic Yard Calculator",
    description:
      "Free landscape rock calculator: cubic yards and tons for decorative rock, river rock and drainage stone.",
    url: "https://cubicyardcalculator.site/calculators/landscape-rock-calculator/",
  },
};

const faqs = [
  {
    q: "How do I calculate landscape rock?",
    a: "Multiply the landscape area by the planned depth in feet, then divide by 27.",
  },
  {
    q: "How deep should landscape rock be?",
    a: "Many decorative rock beds use 2 to 3 inches. Driveway and drainage applications may need a deeper base.",
  },
  {
    q: "How much does landscape rock weigh?",
    a: "Rock density varies by stone type. This calculator uses a planning estimate of 4,500 lbs per cubic yard for dense stone — lighter decorative rock can weigh 2,500 to 3,000 lbs per yard, so confirm with your supplier.",
  },
  {
    q: "Should I add overage to landscape rock?",
    a: "Yes. Add about 10 percent for uneven ground, settling, and small measuring differences.",
  },
];

const coverageTable = [
  { depth: "2 inches", cover: "162 sq ft", use: "Light decorative coverage" },
  { depth: "3 inches", cover: "108 sq ft", use: "Landscape beds and borders" },
  { depth: "4 inches", cover: "81 sq ft", use: "Heavier beds and pathways" },
  { depth: "6 inches", cover: "54 sq ft", use: "Drainage and structural base" },
];

export default function LandscapeRockCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Landscape Rock Calculator",
            url: "/calculators/landscape-rock-calculator/",
            description:
              "Free landscape rock calculator: cubic yards and tons for decorative rock, river rock and drainage stone.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Landscape Rock Calculator" },
          ])}
        />
        <div className="kicker">Stone and rock estimator</div>
        <h1 className="h2">Landscape rock calculator</h1>
        <p className="sub">
          Estimate the cubic yards of decorative rock, river rock, crushed
          stone, or drainage rock needed for a landscape bed or project area.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Area in square
            feet × depth in feet ÷ 27 = cubic yards of landscape rock.
          </p>
        </div>
        <LandscapeRockCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Confirm the stone type and
          its approximate weight per cubic yard — and whether your supplier
          sells by yard, ton, or both.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Rock coverage by depth</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Depth</th><th>Coverage per cubic yard</th><th>Typical use</th></tr>
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
          <h3 style={{ marginTop: 28 }}>Before ordering rock</h3>
          <ul style={{ color: "var(--ink-soft)", lineHeight: 1.7, paddingLeft: 20, marginBottom: 0 }}>
            <li>Confirm the stone type and its approximate weight per cubic yard.</li>
            <li>Measure depth after edging and base preparation are complete.</li>
            <li>Ask whether the supplier sells by cubic yard, ton, or both.</li>
            <li>Check delivery access and minimum order requirements.</li>
          </ul>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Related tools: the{" "}
          <Link href="/calculators/gravel-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            gravel calculator
          </Link>
          , the{" "}
          <Link href="/calculators/gravel-to-tons-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            gravel-to-tons converter
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

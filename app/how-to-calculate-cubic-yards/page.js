import Link from "next/link";
import Faq, { faqJsonLd } from "../../components/Faq";
import JsonLd from "../../components/JsonLd";

const SITE_URL = "https://cubicyardcalculator.site";

export const metadata = {
  title: "How to Calculate Cubic Yards - Formula and Examples",
  description:
    "Learn how to calculate cubic yards for concrete, gravel, mulch, dirt and sand. The formula, inch-to-feet conversion and worked examples.",
  keywords: [
    "how to calculate cubic yards",
    "cubic yard formula",
    "calculate cubic yards",
    "cubic yards calculation examples",
  ],
  alternates: { canonical: `${SITE_URL}/how-to-calculate-cubic-yards/` },
  openGraph: {
    title: "How to Calculate Cubic Yards - Formula and Examples | Cubic Yard Calculator",
    description:
      "The cubic yard formula in three steps, inch-to-feet conversion, and four worked examples (patio, driveway, mulch bed, raised bed).",
    url: `${SITE_URL}/how-to-calculate-cubic-yards/`,
  },
};

const faqs = [
  {
    q: "What is the formula for cubic yards?",
    a: "Multiply length, width, and depth in feet, then divide the result by 27.",
  },
  {
    q: "How do I convert inches to feet?",
    a: "Divide the number of inches by 12. For example, 4 inches equals 0.333 feet.",
  },
  {
    q: "Should I order extra material?",
    a: "A 10 percent overage is a common planning allowance for waste, compaction, uneven ground, and measuring differences.",
  },
  {
    q: "Does the material change the volume?",
    a: "No. The volume formula is the same, but material density changes the estimated weight.",
  },
];

const examples = [
  { project: "10 × 10 patio at 4 inches", calc: "10 × 10 × 0.333 ÷ 27", result: "1.23 cubic yards" },
  { project: "20 × 20 driveway at 4 inches", calc: "20 × 20 × 0.333 ÷ 27", result: "4.94 cubic yards" },
  { project: "200 sq ft mulch bed at 3 inches", calc: "200 × 0.25 ÷ 27", result: "1.85 cubic yards" },
  { project: "4 × 8 raised bed at 12 inches", calc: "4 × 8 × 1 ÷ 27", result: "1.19 cubic yards" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Calculate Cubic Yards - Formula and Examples",
  description: metadata.description,
  url: `${SITE_URL}/how-to-calculate-cubic-yards/`,
  inLanguage: "en-US",
  datePublished: "2026-10-06",
  dateModified: "2026-10-06",
  author: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
};

export default function HowToPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="kicker">Volume estimation guide</div>
        <h1 className="h2">How to calculate cubic yards</h1>
        <p className="sub">
          Multiply length × width × depth in feet, then divide by 27. This
          works for concrete, gravel, mulch, dirt, sand, and other materials
          sold by volume.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Formula:</span> length in feet ×
            width in feet × depth in feet ÷ 27 = cubic yards.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 40 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>Three steps</h2>
          <ol style={{ lineHeight: 1.9, paddingLeft: 22 }}>
            <li>Measure the length and width of the project area in feet.</li>
            <li>Measure the material depth. Convert inches to feet by dividing by 12.</li>
            <li>Multiply the three measurements and divide by 27.</li>
          </ol>
        </div>

        <div className="card" style={{ marginTop: 32, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Worked examples</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Project</th><th>Calculation</th><th>Result</th></tr>
            </thead>
            <tbody>
              {examples.map((r) => (
                <tr key={r.project}>
                  <td>{r.project}</td>
                  <td className="num">{r.calc}</td>
                  <td className="num">{r.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ maxWidth: 720, marginTop: 40 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>Allow for overage</h2>
          <p>
            Multiply the calculated volume by 1.10 for a 10 percent overage.
            This helps account for compaction, spillage, uneven ground, and
            small measurement differences.{" "}
            <Link href="/calculators/cubic-yard-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              Calculate your project volume
            </Link>
            .
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Next steps:{" "}
          <Link href="/cubic-yard-coverage" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            cubic yard coverage chart
          </Link>
          ,{" "}
          <Link href="/how-many-cubic-feet-in-a-cubic-yard" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            the 27-cubic-foot rule
          </Link>
          , and{" "}
          <Link href="/cubic-yard-cost" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            what a cubic yard costs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

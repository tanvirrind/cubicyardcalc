import Link from "next/link";
import Faq, { faqJsonLd } from "../../components/Faq";
import JsonLd from "../../components/JsonLd";

const SITE_URL = "https://cubicyardcalculator.site";

export const metadata = {
  title: "Cubic Yard Coverage Calculator and Chart by Depth",
  description:
    "Find out how many square feet one cubic yard covers at common depths. Coverage chart and calculator for mulch, gravel, soil, sand and concrete.",
  keywords: [
    "cubic yard coverage",
    "how much does a cubic yard cover",
    "cubic yard coverage chart",
    "coverage per cubic yard",
  ],
  alternates: { canonical: `${SITE_URL}/cubic-yard-coverage/` },
  openGraph: {
    title: "Cubic Yard Coverage Calculator and Chart by Depth | Cubic Yard Calculator",
    description:
      "How many square feet does one cubic yard cover? Chart by depth plus a calculator for mulch, gravel, soil, sand and concrete.",
    url: `${SITE_URL}/cubic-yard-coverage/`,
  },
};

const faqs = [
  {
    q: "How much area does one cubic yard cover?",
    a: "One cubic yard covers 324 square feet at 1 inch deep, 162 square feet at 2 inches, 108 square feet at 3 inches, and 81 square feet at 4 inches.",
  },
  {
    q: "How many square feet does a cubic yard cover at 2 inches?",
    a: "One cubic yard covers about 162 square feet at a 2-inch depth.",
  },
  {
    q: "How many square feet does a cubic yard cover at 3 inches?",
    a: "One cubic yard covers about 108 square feet at a 3-inch depth.",
  },
  {
    q: "Does material type change coverage?",
    a: "No. Coverage is based on volume and depth. Material type changes weight, settling, and how much overage you may want.",
  },
];

const coverageTable = [
  { depth: "1 inch", cover: "324 sq ft", use: "Thin topdressing" },
  { depth: "2 inches", cover: "162 sq ft", use: "Light mulch or rock refresh" },
  { depth: "3 inches", cover: "108 sq ft", use: "Mulch beds and landscape rock" },
  { depth: "4 inches", cover: "81 sq ft", use: "Concrete slabs and heavier beds" },
  { depth: "6 inches", cover: "54 sq ft", use: "Driveway or shed base" },
  { depth: "8 inches", cover: "40.5 sq ft", use: "Deep base or heavy fill" },
  { depth: "12 inches", cover: "27 sq ft", use: "One-foot fill or raised beds" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cubic Yard Coverage Calculator and Chart by Depth",
  description: metadata.description,
  url: `${SITE_URL}/cubic-yard-coverage/`,
  inLanguage: "en-US",
  datePublished: "2026-10-06",
  dateModified: "2026-10-06",
  author: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
};

export default function CoveragePage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="kicker">Volume coverage guide</div>
        <h1 className="h2">Cubic yard coverage calculator and chart</h1>
        <p className="sub">
          Find how many square feet one cubic yard covers at common depths
          for mulch, gravel, dirt, sand, and concrete.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> One cubic yard
            covers <strong>108 square feet at 3 inches deep</strong>, 81
            square feet at 4 inches, and 54 square feet at 6 inches.
          </p>
        </div>

        <div className="card" style={{ marginTop: 32, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Cubic yard coverage chart</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Depth</th><th>Coverage per cubic yard</th><th>Common application</th></tr>
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
        </div>

        <div style={{ maxWidth: 720, marginTop: 40 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>Coverage formula</h2>
          <p>
            To calculate coverage, convert depth to feet and divide 27 cubic
            feet by that depth:
          </p>
          <p>
            <strong>Coverage in square feet = 27 ÷ depth in feet</strong>
          </p>
          <p>
            For example, 3 inches is 0.25 feet. Then 27 ÷ 0.25 = 108 square
            feet per cubic yard.
          </p>
          <h2 className="h2" style={{ fontSize: 28, marginTop: 36 }}>
            Calculate your required volume
          </h2>
          <p>
            Enter your project&apos;s length, width, and depth to calculate
            the total cubic yards needed. Add about 10 percent for settling,
            waste, or uneven ground.{" "}
            <Link href="/calculators/cubic-yard-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              Open the cubic yard calculator
            </Link>
            .
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Related tools:{" "}
          <Link href="/calculators/square-feet-to-cubic-yards-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            square feet to cubic yards
          </Link>
          , the{" "}
          <Link href="/calculators/mulch-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            mulch calculator
          </Link>
          , the{" "}
          <Link href="/calculators/gravel-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            gravel calculator
          </Link>
          , and the{" "}
          <Link href="/calculators/fill-dirt-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            fill dirt calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";
import Faq, { faqJsonLd } from "../../components/Faq";
import JsonLd from "../../components/JsonLd";

const SITE_URL = "https://cubicyardcalculator.site";

export const metadata = {
  title: "How Many Feet in a Yard? Feet, Inches and Cubic Yards",
  description:
    "Learn how many feet and inches are in a yard, plus the difference between a yard and a cubic yard. Quick conversion examples included.",
  keywords: [
    "how many feet in a yard",
    "feet in a yard",
    "inches in a yard",
    "yard vs cubic yard",
  ],
  alternates: { canonical: `${SITE_URL}/how-many-feet-in-a-yard/` },
  openGraph: {
    title: "How Many Feet in a Yard? Feet, Inches and Cubic Yards | Cubic Yard Calculator",
    description:
      "1 yard = 3 feet = 36 inches. Plus: why a cubic yard is a different thing entirely (27 cubic feet).",
    url: `${SITE_URL}/how-many-feet-in-a-yard/`,
  },
};

const faqs = [
  {
    q: "How many feet are in a yard?",
    a: "There are 3 linear feet in 1 yard.",
  },
  {
    q: "How many inches are in a yard?",
    a: "There are 36 inches in 1 yard because 3 feet multiplied by 12 inches equals 36 inches.",
  },
  {
    q: "Is a yard the same as a cubic yard?",
    a: "No. A yard measures length. A cubic yard measures volume and equals 27 cubic feet.",
  },
  {
    q: "How many feet are in a cubic yard?",
    a: "A cubic yard is 3 feet long, 3 feet wide, and 3 feet deep. It contains 27 cubic feet, but it is not a linear measurement.",
  },
];

const conversionTable = [
  { m: "1 yard", e: "3 feet" },
  { m: "1 yard", e: "36 inches" },
  { m: "2 yards", e: "6 feet" },
  { m: "3 yards", e: "9 feet" },
  { m: "10 yards", e: "30 feet" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Many Feet in a Yard? Feet, Inches and Cubic Yards",
  description: metadata.description,
  url: `${SITE_URL}/how-many-feet-in-a-yard/`,
  inLanguage: "en-US",
  datePublished: "2026-10-06",
  dateModified: "2026-10-06",
  author: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
};

export default function FeetInYardPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="kicker">Quick measurement answer</div>
        <h1 className="h2">How many feet in a yard?</h1>
        <p className="sub">
          There are 3 feet in 1 yard and 36 inches in 1 yard. Use the guide
          below to avoid confusing linear yards with cubic yards.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> 1 yard = 3 feet
            = 36 inches. A <strong>cubic</strong> yard is different: it is a
            3 ft × 3 ft × 3 ft volume equal to 27 cubic feet.
          </p>
        </div>

        <div className="card" style={{ marginTop: 32, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Yard conversion table</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Measurement</th><th>Equivalent</th></tr>
            </thead>
            <tbody>
              {conversionTable.map((r, i) => (
                <tr key={i}>
                  <td>{r.m}</td>
                  <td className="num">{r.e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ maxWidth: 720, marginTop: 40 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>Yards versus cubic yards</h2>
          <p>
            A yard is a unit of length. It describes how long something is.
            A cubic yard is a unit of volume used for concrete, gravel,
            mulch, dirt, sand, and other bulk materials.
          </p>
          <p>
            To calculate cubic yards, multiply length × width × depth in
            feet, then divide by 27. For example, a 10 ft × 10 ft area at 4
            inches deep needs about 1.23 cubic yards.{" "}
            <Link href="/calculators/cubic-yard-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              Open the cubic yard calculator
            </Link>
            .
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Related conversions:{" "}
          <Link href="/how-many-cubic-feet-in-a-cubic-yard" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how many cubic feet are in a cubic yard
          </Link>
          , the{" "}
          <Link href="/calculators/cubic-feet-to-cubic-yards-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            cubic feet to cubic yards converter
          </Link>
          , and the{" "}
          <Link href="/calculators/square-yard-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            square yard calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

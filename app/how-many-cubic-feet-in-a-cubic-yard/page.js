import Link from "next/link";
import Faq, { faqJsonLd } from "../../components/Faq";
import JsonLd from "../../components/JsonLd";

const SITE_URL = "https://cubicyardcalculator.site";

export const metadata = {
  title: "How Many Cubic Feet in a Cubic Yard? The 27-Cubic-Foot Rule",
  description:
    "Find out how many cubic feet are in a cubic yard and learn the simple formulas for converting cubic feet to cubic yards and back.",
  keywords: [
    "how many cubic feet in a cubic yard",
    "cubic feet per cubic yard",
    "27 cubic feet",
    "convert cubic feet to cubic yards",
  ],
  alternates: { canonical: `${SITE_URL}/how-many-cubic-feet-in-a-cubic-yard/` },
  openGraph: {
    title: "How Many Cubic Feet in a Cubic Yard? The 27-Cubic-Foot Rule | Cubic Yard Calculator",
    description:
      "1 cubic yard = 27 cubic feet. Why it works, the conversion table, and both formulas.",
    url: `${SITE_URL}/how-many-cubic-feet-in-a-cubic-yard/`,
  },
};

const faqs = [
  {
    q: "How many cubic feet are in a cubic yard?",
    a: "There are 27 cubic feet in 1 cubic yard.",
  },
  {
    q: "How do you convert cubic feet to cubic yards?",
    a: "Divide cubic feet by 27. For example, 54 cubic feet divided by 27 equals 2 cubic yards.",
  },
  {
    q: "How do you convert cubic yards to cubic feet?",
    a: "Multiply cubic yards by 27. For example, 3 cubic yards multiplied by 27 equals 81 cubic feet.",
  },
  {
    q: "Why is a cubic yard 27 cubic feet?",
    a: "A cubic yard is 3 feet long, 3 feet wide, and 3 feet deep. Multiplying 3 × 3 × 3 gives 27 cubic feet.",
  },
];

const conversionTable = [
  { yd3: "0.25", ft3: "6.75" },
  { yd3: "0.5", ft3: "13.5" },
  { yd3: "0.75", ft3: "20.25" },
  { yd3: "1", ft3: "27" },
  { yd3: "1.25", ft3: "33.75" },
  { yd3: "1.5", ft3: "40.5" },
  { yd3: "1.75", ft3: "47.25" },
  { yd3: "2", ft3: "54" },
  { yd3: "3", ft3: "81" },
  { yd3: "4", ft3: "108" },
  { yd3: "5", ft3: "135" },
  { yd3: "6", ft3: "162" },
  { yd3: "7", ft3: "189" },
  { yd3: "8", ft3: "216" },
  { yd3: "9", ft3: "243" },
  { yd3: "10", ft3: "270" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Many Cubic Feet in a Cubic Yard? The 27-Cubic-Foot Rule",
  description: metadata.description,
  url: `${SITE_URL}/how-many-cubic-feet-in-a-cubic-yard/`,
  inLanguage: "en-US",
  datePublished: "2026-10-06",
  dateModified: "2026-10-17",
  author: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
};

export default function CubicFeetInYardPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="kicker">Volume conversion guide</div>
        <h1 className="h2">How many cubic feet in a cubic yard?</h1>
        <p className="sub">
          1 cubic yard equals 27 cubic feet. This is the standard conversion
          for concrete, gravel, mulch, dirt, sand, and other bulk materials.
        </p>
        <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 10 }}>
          By the Cubic Yard Calculator team · Last updated October 2026
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> 1 cubic yard =
            27 cubic feet. Divide cubic feet by 27 to get cubic yards, or
            multiply cubic yards by 27 to get cubic feet.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 40 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>Why one cubic yard equals 27 cubic feet</h2>
          <p>
            A cubic yard is a cube measuring 3 feet on every side. The volume
            is:
          </p>
          <p>
            <strong>3 ft × 3 ft × 3 ft = 27 cubic feet</strong>
          </p>
          <p>
            Suppliers commonly sell soil, gravel, mulch, sand, and concrete
            by the cubic yard, while project dimensions are often measured in
            feet and inches.
          </p>
        </div>

        <div className="card" style={{ marginTop: 32, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Conversion table</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Cubic yards</th><th>Cubic feet</th></tr>
            </thead>
            <tbody>
              {conversionTable.map((r) => (
                <tr key={r.yd3}>
                  <td className="num">{r.yd3}</td>
                  <td className="num">{r.ft3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ maxWidth: 720, marginTop: 40 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>How many cubic feet are in a yard of concrete?</h2>
          <p>
            Still 27. A cubic yard of concrete is exactly the same volume as
            a cubic yard of anything else — 3 ft × 3 ft × 3 ft = 27 cubic
            feet. What changes is the weight: a yard of concrete weighs
            about 4,050 lbs (just over 2 tons), so when a quote says "a yard
            of concrete" it always means 27 cubic feet of it. For bagged
            work, that same 27 cubic feet takes forty-five 80-lb bags of
            concrete mix.
          </p>
          <h2 className="h2" style={{ fontSize: 28 }}>How many cubic feet are in a yard of mulch?</h2>
          <p>
            Also 27 cubic feet. Bulk mulch is sold by the cubic yard, and one
            yard — 27 cubic feet — covers about 108 square feet at a 3-inch
            depth. If you are buying bags instead, thirteen and a half
            2-cubic-foot bags add up to exactly one yard.
          </p>
          <h2 className="h2" style={{ fontSize: 28 }}>How many cubic feet are in a yard of topsoil?</h2>
          <p>
            The same 27 cubic feet. A yard of topsoil spreads about 108
            square feet 3 inches deep — or 54 square feet 6 inches deep if
            you are building a new bed. At roughly 2,400 lbs per yard, order
            delivery rather than hauling it yourself.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 40 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>Use the conversion calculator</h2>
          <p>
            Enter either cubic feet or cubic yards to convert between the two
            units.{" "}
            <Link href="/calculators/cubic-feet-to-cubic-yards-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              Open the cubic feet converter
            </Link>
            .
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Keep going:{" "}
          <Link href="/how-to-calculate-cubic-yards" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how to calculate cubic yards
          </Link>{" "}
          and{" "}
          <Link href="/how-many-feet-in-a-yard" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how many feet are in a yard
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

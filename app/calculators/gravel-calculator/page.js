import Link from "next/link";
import GravelCalculator from "../../../components/GravelCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Cubic Yard Calculator for Gravel and Rock - Free Tool",
  description:
    "Calculate cubic yards of gravel for driveways, walkways and drainage. Get weight in tons instantly. Free gravel calculator with coverage estimates.",
  keywords: [
    "gravel calculator",
    "how much gravel do i need",
    "how many tons of gravel do i need",
    "pea gravel calculator",
    "how much does a cubic yard of gravel weigh",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/gravel-calculator/" },
  openGraph: {
    title: "Cubic Yard Calculator for Gravel and Rock - Free Tool | Cubic Yard Calculator",
    description:
      "Cubic yards of gravel for driveways, walkways and drainage — weight in tons instantly. Free.",
    url: "https://cubicyardcalculator.site/calculators/gravel-calculator/",
  },
};

const faqs = [
  {
    q: "How do I calculate cubic yards of gravel?",
    a: "Measure length and width in feet, multiply by gravel depth in feet, then divide by 27. A 3 inch depth is 0.25 feet.",
  },
  {
    q: "How many tons are in a cubic yard of gravel?",
    a: "Using 2,800 lbs per cubic yard, gravel is about 1.40 tons per cubic yard. River rock and crushed stone can vary.",
  },
  {
    q: "How many tons of gravel do I need for a 2-car driveway?",
    a: "A 20x20 ft driveway at 4 inches needs about 4.94 cubic yards, or roughly 6.9 tons of standard gravel. At 6 inches deep it needs about 7.41 yards (10.4 tons). Add 15 percent for compaction.",
  },
  {
    q: "What size gravel is best for driveways?",
    a: "A compacted base of larger crushed stone (such as crusher run) topped with 2 to 3 inches of 3/4 inch crushed stone (#57) is the standard durable combination.",
  },
  {
    q: "Should gravel be ordered by ton or yard?",
    a: "Many suppliers sell gravel by the ton. Use cubic yards for volume planning and tons for ordering when needed.",
  },
  {
    q: "How much extra gravel should I order?",
    a: "Order about 10 percent extra for compaction, uneven base, and spreading loss. Larger jobs may need a supplier review.",
  },
];

const drivewayTable = [
  { size: "10 x 20 (single car)", d4: "2.47 yd", d6: "3.70 yd", tons: "3.5" },
  { size: "12 x 40", d4: "5.93 yd", d6: "8.89 yd", tons: "8.3" },
  { size: "20 x 20 (two car)", d4: "4.94 yd", d6: "7.41 yd", tons: "6.9" },
  { size: "20 x 50", d4: "12.35 yd", d6: "18.52 yd", tons: "17.3" },
];

export default function GravelCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Cubic Yard Calculator for Gravel and Rock",
            url: "/calculators/gravel-calculator/",
            description:
              "Free gravel calculator: cubic yards and tons for driveways, paths, and drainage projects.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Gravel Calculator" },
          ])}
        />
        <div className="kicker">Driveways, paths, drainage, and rock</div>
        <h1 className="h2">Cubic yard calculator for gravel and rock</h1>
        <p className="sub">
          Estimate gravel or rock in cubic yards and tons, with weight that
          matches supplier scale tickets.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Multiply length
            × width × depth in feet and divide by 27. A 20 × 20 ft driveway at
            4 inches deep needs (20 × 20 × 0.333) / 27 ={" "}
            <strong>4.94 cubic yards</strong> of gravel — about 6.9 tons. Add
            10 to 15 percent extra for compaction.
          </p>
        </div>
        <GravelCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Density varies by rock type
          and moisture — confirm tons-per-yard with your supplier before
          ordering, especially for hauling limits.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Driveway gravel volumes (before overage)</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Driveway size</th><th>4 in deep</th><th>6 in deep</th><th>Tons at 4 in</th></tr>
            </thead>
            <tbody>
              {drivewayTable.map((r) => (
                <tr key={r.size}>
                  <td>{r.size}</td>
                  <td className="num">{r.d4}</td>
                  <td className="num">{r.d6}</td>
                  <td className="num">{r.tons}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Ton figures use 2,800 lbs per yard for standard gravel. Build
            driveways in layers — count the full base depth, not just the top
            layer.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Quoted by weight? The{" "}
          <Link href="/calculators/tons-to-cubic-yards-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            tons-to-yards converter
          </Link>{" "}
          goes both directions, and the{" "}
          <Link href="/calculators/sand-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            sand calculator
          </Link>{" "}
          handles paver bedding.
        </p>
      </div>
    </section>
  );
}

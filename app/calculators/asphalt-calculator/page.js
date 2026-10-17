import Link from "next/link";
import AsphaltCalculator from "../../../components/AsphaltCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Asphalt Calculator - Tons & Cubic Yards for Driveways",
  description:
    "Calculate tons of asphalt for driveways, parking lots and paths. Get cubic yards, tonnage and material cost. Free asphalt calculator with thickness guide.",
  keywords: [
    "asphalt calculator",
    "how much asphalt do i need",
    "tons of asphalt calculator",
    "asphalt driveway calculator",
    "how many tons of asphalt per cubic yard",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/asphalt-calculator/" },
  openGraph: {
    title: "Asphalt Calculator - Tons & Cubic Yards for Driveways | Cubic Yard Calculator",
    description:
      "Tons of asphalt for driveways and parking lots — plus cubic yards, thickness guide, and material cost. Free.",
    url: "https://cubicyardcalculator.site/calculators/asphalt-calculator/",
  },
};

const faqs = [
  {
    q: "How do I calculate tons of asphalt?",
    a: "Multiply length × width × thickness in feet and divide by 27 to get cubic yards, then multiply by 1.96 tons per yard. A 20×20 ft driveway at 3 inches: (20 × 20 × 0.25) / 27 = 3.70 yards × 1.96 ≈ 7.3 tons.",
  },
  {
    q: "How many tons are in a cubic yard of asphalt?",
    a: "Hot-mix asphalt weighs about 3,915 lbs per cubic yard, which is 1.96 tons per yard. That is the industry figure plants use for scale tickets.",
  },
  {
    q: "How thick should asphalt be for a residential driveway?",
    a: "Two to three inches of compacted asphalt over 4 to 8 inches of compacted aggregate base. Two inches suits light car traffic; use three inches for heavier vehicles or soft soil.",
  },
  {
    q: "How thick should asphalt be for parking lots or roads?",
    a: "Parking lots typically get 3 to 4 inches of asphalt in two lifts; streets get 4 to 6 inches depending on base and traffic load. Anything over 2 inches is compacted in 2-inch lifts.",
  },
  {
    q: "Is asphalt sold by the ton or the cubic yard?",
    a: "Asphalt plants sell hot mix by the ton. Use cubic yards for planning the volume, then convert with 1.96 tons per yard for ordering.",
  },
  {
    q: "How much extra asphalt should I order?",
    a: "Order 5 to 10 percent extra for uneven base, edge trimming, and spillage. The calculator above applies a 10 percent overage to the tonnage.",
  },
  {
    q: "Can I buy asphalt in bags?",
    a: "Bagged cold patch is for pothole repair only, not paving. Any driveway or lot goes down as hot mix from a plant, ordered by the ton.",
  },
];

const thicknessTable = [
  { use: "Walkway / bike path", depth: "2 in" },
  { use: "Residential driveway", depth: "2–3 in" },
  { use: "Parking lot", depth: "3–4 in" },
  { use: "Road / street", depth: "4–6 in" },
];

export default function AsphaltCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Asphalt Calculator for Driveways",
            url: "/calculators/asphalt-calculator/",
            description:
              "Free asphalt calculator: tons, cubic yards and material cost for driveways, parking lots and paths.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Asphalt Calculator" },
          ])}
        />
        <div className="kicker">Driveways, parking lots, and paths</div>
        <h1 className="h2">Asphalt calculator: tons, yards, and cost</h1>
        <p className="sub">
          Estimate hot-mix asphalt in tons and cubic yards for paving jobs —
          plants sell by the ton, so the calculator prices what you&apos;ll
          actually order.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Multiply length
            × width × thickness in feet, divide by 27, then × 1.96. A 20 × 20
            ft driveway at 3 inches: (20 × 20 × 0.25) / 27 ={" "}
            <strong>3.70 cubic yards</strong> ≈ <strong>7.3 tons</strong> of
            asphalt. Order about 8 tons with overage.
          </p>
        </div>
        <AsphaltCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Mix designs and moisture
          shift the exact tons-per-yard — confirm the scale weight with your
          plant, especially on large orders.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Compacted asphalt thickness by use</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Use</th><th>Compacted thickness</th></tr>
            </thead>
            <tbody>
              {thicknessTable.map((r) => (
                <tr key={r.use}>
                  <td>{r.use}</td>
                  <td className="num">{r.depth}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Asphalt needs a compacted aggregate base under it — 4 to 8
            inches of crushed stone for driveways. Thickness above is the
            finished asphalt surface only.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          The aggregate base under asphalt is usually crushed stone — the{" "}
          <Link href="/calculators/gravel-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            gravel calculator
          </Link>{" "}
          sizes it. Comparing pavement types? See our{" "}
          <Link href="/guides/how-much-gravel-for-a-driveway/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            driveway material guide
          </Link>,{" "}
          <Link href="/guides/crushed-concrete-vs-gravel-driveway/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            crushed concrete vs gravel
          </Link>, and the{" "}
          <Link href="/calculators/concrete-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete calculator
          </Link>{" "}
          for the slab alternative.
        </p>
      </div>
    </section>
  );
}

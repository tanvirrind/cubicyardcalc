import Link from "next/link";
import ConcreteCalculator from "../../../components/ConcreteCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Concrete Calculator - Cubic Yards for Slabs and Driveways",
  description:
    "Calculate cubic yards of concrete for slabs, driveways and footings. Get volume, 60/80 lb bag counts, weight and cost. Free concrete calculator.",
  keywords: [
    "concrete calculator",
    "how many bags of concrete per cubic yard",
    "cubic yards of concrete",
    "concrete slab calculator",
    "how much concrete do i need",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/concrete-calculator/" },
  openGraph: {
    title: "Concrete Calculator - Cubic Yards for Slabs and Driveways | Cubic Yard Calculator",
    description:
      "Cubic yards of concrete for slabs, driveways and footings — plus 60/80 lb bag counts, weight and overage.",
    url: "https://cubicyardcalculator.site/calculators/concrete-calculator/",
  },
};

const faqs = [
  {
    q: "How do I calculate concrete cubic yards?",
    a: "Multiply slab length by width by thickness in feet, then divide by 27. Convert thickness from inches to feet first (4 inches = 0.333 feet).",
  },
  {
    q: "How many 80 lb bags make a cubic yard?",
    a: "A cubic yard takes about 45 bags of 80 lb concrete mix. Always round up because partial bags are not practical.",
  },
  {
    q: "How many 60 lb bags make a cubic yard?",
    a: "A cubic yard takes about 60 bags of 60 lb concrete mix. For larger work, ready-mix delivery is usually easier.",
  },
  {
    q: "How thick should a concrete slab be?",
    a: "Many patios, sidewalks, and light slabs are 4 inches thick. Driveways and heavier slabs often use 5 to 6 inches or more.",
  },
  {
    q: "How much does concrete weigh?",
    a: "Concrete weighs about 4,050 lbs per cubic yard. That is about 2.03 tons per cubic yard.",
  },
  {
    q: "Should I use bags or ready-mix concrete?",
    a: "Bags work for small pours under about 1 to 2 cubic yards, like fence posts or small pads. Ready-mix delivery is usually cheaper and much faster for larger slabs, driveways, and footings.",
  },
  {
    q: "How much concrete do I need for a 24x24 slab?",
    a: "A 24x24 ft slab at 4 inches thick needs about 7.11 cubic yards before overage. At 6 inches thick it needs about 10.67 yards. Add 10 percent extra in both cases.",
  },
  {
    q: "What is a short load fee for concrete?",
    a: "A short-load fee ($50 to $200) is charged when you order less than a full truck, often under 4 yards. It covers the plant cost of running a partial truck, so small deliveries can cost more per yard.",
  },
  {
    q: "How much does a cubic yard of concrete cost in 2026?",
    a: "Ready-mix concrete typically runs $125–$195 per cubic yard delivered in 2026, averaging around $130. The built-in cost estimator above prices your exact slab — enter your supplier's per-yard price, delivery fee, and tax.",
  },
  {
    q: "When does ready-mix become cheaper than bags?",
    a: "Usually around 1 to 2 cubic yards. A yard of 80 lb bags costs roughly $150–$200 in bags alone (45 bags), while ready-mix at $130–$150/yard plus delivery often wins past 2 yards — and saves hours of mixing.",
  },
  {
    q: "Does the cost estimator include overage?",
    a: "Yes. The material cost is priced on the overage-included order quantity, then delivery and tax are added — so the total reflects what you actually pay, not the raw math.",
  },
];

const bagTable = [
  { size: "40 lb", perYard: "90", yield: "0.30 cu ft", best: "Fence posts, tiny repairs" },
  { size: "50 lb", perYard: "72", yield: "0.375 cu ft", best: "Small pads and repairs" },
  { size: "60 lb", perYard: "60", yield: "0.45 cu ft", best: "Small slabs and posts" },
  { size: "80 lb", perYard: "45", yield: "0.60 cu ft", best: "Small slabs and footings" },
  { size: "90 lb", perYard: "40", yield: "0.675 cu ft", best: "Larger small pours" },
];

const projectTable = [
  { project: "Slab / patio", size: "10x10", d4: "1.23", d6: "1.85" },
  { project: "Driveway", size: "10x20", d4: "2.47", d6: "3.70" },
  { project: "Two-car driveway", size: "20x20", d4: "4.94", d6: "7.41" },
  { project: "Garage floor", size: "24x24", d4: "7.11", d6: "10.67" },
  { project: "Sidewalk", size: "4x50", d4: "2.47", d6: "—" },
];

export default function ConcreteCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Concrete Cubic Yard Calculator",
            url: "/calculators/concrete-calculator/",
            description:
              "Free concrete calculator: cubic yards, 60/80 lb bag counts, weight and overage for slabs, driveways and footings.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Concrete Calculator" },
          ])}
        />
        <div className="kicker">Slabs, driveways, patios, and footings</div>
        <h1 className="h2">Concrete cubic yard calculator</h1>
        <p className="sub">
          Calculate concrete volume, weight, bag counts, and a 2026 cost
          estimate — from slab dimensions or a known yardage.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Multiply length
            × width × thickness in feet and divide by 27. A 10 × 10 ft slab at
            4 inches thick needs (10 × 10 × 0.333) / 27 ={" "}
            <strong>1.23 cubic yards</strong>, or about 55 bags of 80 lb mix
            with 10 percent overage. For pours over 1 to 2 yards, ready-mix
            delivery is usually cheaper than bags.
          </p>
        </div>
        <ConcreteCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates volume and
          bags from the numbers you punch in — always check the bag label
          yields and confirm with your supplier before ordering.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Concrete bag counts per cubic yard</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Bag size</th><th>Bags per yard</th><th>Yield per bag</th><th>Best for</th></tr>
            </thead>
            <tbody>
              {bagTable.map((b) => (
                <tr key={b.size}>
                  <td className="num">{b.size}</td>
                  <td className="num">{b.perYard}</td>
                  <td className="num">{b.yield}</td>
                  <td>{b.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Bag yields come from manufacturer data — an 80 lb bag yields about
            0.60 cubic feet. Exact yields vary by mix, so check the bag label
            and always round up.
          </p>
        </div>

        <div className="card" style={{ marginTop: 20, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Common project volumes (before overage)</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Project</th><th>Size</th><th>4 in thick</th><th>6 in thick</th></tr>
            </thead>
            <tbody>
              {projectTable.map((p) => (
                <tr key={p.project}>
                  <td>{p.project}</td>
                  <td className="num">{p.size}</td>
                  <td className="num">{p.d4}</td>
                  <td className="num">{p.d6}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Converting between bags and yards? The{" "}
          <Link href="/calculators/concrete-bag-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete bag calculator
          </Link>{" "}
          goes both directions. Buying by the ton? The{" "}
          <Link href="/calculators/tons-to-cubic-yards-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            tons-to-yards converter
          </Link>{" "}
          handles the weight math, and the{" "}
          <Link href="/cubic-yard-cost" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            cubic yard cost guide
          </Link>{" "}
          breaks down 2026 delivered pricing.
        </p>
      </div>
    </section>
  );
}

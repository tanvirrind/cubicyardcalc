import Link from "next/link";
import FootingCalculator from "../../../components/FootingCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Concrete Footing Calculator - Yards, Bags & Cost",
  description:
    "Calculate concrete for strip footings: cubic yards, bag counts by size, and material cost. Add up every run, set width and depth, and get the order quantity with overage.",
  keywords: [
    "concrete footing calculator",
    "how much concrete for footings",
    "footing concrete calculator",
    "concrete footing bags calculator",
    "how many bags of concrete for a footing",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/concrete-footing-calculator/" },
  openGraph: {
    title: "Concrete Footing Calculator - Yards, Bags & Cost | Cubic Yard Calculator",
    description:
      "Concrete for strip footings — cubic yards, bag counts, and material cost with overage included. Free.",
    url: "https://cubicyardcalculator.site/calculators/concrete-footing-calculator/",
  },
};

const faqs = [
  {
    q: "How do I calculate concrete for a footing?",
    a: "Multiply the total footing length × width × depth in feet and divide by 27. A 40-ft run at 16 in wide × 8 in deep: (40 × 1.333 × 0.667) / 27 = 1.32 cubic yards, or 60 eighty-pound bags net. Add up every footing run into one total length before you calculate.",
  },
  {
    q: "How deep should a concrete footing be?",
    a: "Depths of 8 to 12 inches are typical for residential footings, but the governing factor is frost depth: footings must bear below the local frost line, which varies widely by region. Check your local building code before you dig or pour — an undersized or shallow footing is an expensive fix later.",
  },
  {
    q: "How wide should a concrete footing be?",
    a: "Footing width is typically about twice the wall thickness, with 16 to 24 inches covering most residential walls. Wider footings spread the load over more soil, which matters on soft or clay ground. The table above lists typical sizes by project.",
  },
  {
    q: "What is the difference between a footing and a slab?",
    a: "A footing is a continuous strip of concrete under a foundation or bearing wall that spreads the wall's load onto the soil; a slab is a flat concrete surface you walk or drive on. Footings are poured first, then walls are built on them. They are sized differently, so use this calculator for footings and the concrete calculator for slabs.",
  },
  {
    q: "Should I use bags or ready-mix for footings?",
    a: "Below about 1 to 2 cubic yards, mixing bagged concrete on site is usually practical; above that, ready-mix delivery is typically cheaper per yard and goes down faster. Footing trenches are awkward to work in, so ready-mix also wins on labor. The calculator shows both bag counts and ready-mix cost.",
  },
  {
    q: "How do I handle multiple footing runs?",
    a: "Add the lengths of every run together and enter the total — the calculator only needs one length number. Keep width and depth consistent across runs; if a run has different dimensions, calculate it separately and add the yards together.",
  },
  {
    q: "Do I need gravel under a concrete footing?",
    a: "A 4- to 6-inch layer of compacted gravel under the footing is typical practice: it levels the trench bottom, improves drainage, and gives a firm bearing surface. It does not replace proper depth — the footing still has to sit below the frost line.",
  },
  {
    q: "How much extra concrete should I order for footings?",
    a: "Order 5 to 10 percent extra. Trench walls cave, forms flex, and trench bottoms are never perfectly flat, so footings consume more concrete than the math says. The calculator above applies a 10 percent waste allowance by default.",
  },
];

const footingTable = [
  { use: "Garden / landscape wall", width: "16 in", depth: "8 in" },
  { use: "Detached garage / shop", width: "18–20 in", depth: "10 in" },
  { use: "House / basement wall", width: "20–24 in", depth: "12 in" },
];

export default function ConcreteFootingCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Concrete Footing Calculator",
            url: "/calculators/concrete-footing-calculator/",
            description:
              "Free concrete footing calculator: cubic yards, bag counts by size, and material cost for continuous strip footings.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Concrete Footing Calculator" },
          ])}
        />
        <div className="kicker">Strip footings for walls, garages & additions</div>
        <h1 className="h2">Concrete footing calculator: yards, bags & cost</h1>
        <p className="sub">
          Estimate ready-mix or bagged concrete for continuous strip
          footings — enter the total length of all runs, set the width and
          depth, and get the order quantity with overage priced in.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Multiply total
            length × width × depth in feet, divide by 27. A 40-ft run at 16
            in wide × 8 in deep: (40 × 1.333 × 0.667) / 27 ={" "}
            <strong>1.32 cubic yards</strong> → <strong>60 eighty-pound
            bags</strong> net (about 66 with a 10% waste allowance). Ready-mix
            delivery usually wins above ~1–2 yards.
          </p>
        </div>
        <FootingCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Trench conditions change the
          real pour volume, and ready-mix prices vary by market — confirm
          sizing against your local building code and pricing with your
          supplier before ordering.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Typical footing sizes by project</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Project</th><th className="num">Width</th><th className="num">Depth</th></tr>
            </thead>
            <tbody>
              {footingTable.map((r) => (
                <tr key={r.use}>
                  <td>{r.use}</td>
                  <td className="num">{r.width}</td>
                  <td className="num">{r.depth}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Typical ranges, not building code — footing width is usually about
            twice the wall thickness. Frost depth varies by region and
            footings must bear below the local frost line, so check your local
            code before sizing or pouring.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Pouring a slab instead of a footing? Use the{" "}
          <Link href="/calculators/concrete-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete calculator
          </Link>{" "}
          — and the{" "}
          <Link href="/calculators/concrete-bag-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete-bag calculator
          </Link>{" "}
          prices small bag-only jobs. Sizing the gravel base under the footing?
          See{" "}
          <Link href="/guides/how-much-gravel-under-a-concrete-slab/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how much gravel under a concrete slab
          </Link>.
        </p>
      </div>
    </section>
  );
}

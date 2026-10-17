import Link from "next/link";
import SodCalculator from "../../../components/SodCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Sod Calculator — How Much Sod Do I Need? (Rolls & Pallets)",
  description:
    "Free sod calculator: lawn area in square feet, square yards and square meters, sod rolls and pallets to order, plus an optional material-cost estimate with overage.",
  keywords: [
    "sod calculator",
    "how much sod do i need",
    "sod rolls calculator",
    "how many pallets of sod do i need",
    "sod cost calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/sod-calculator/" },
  openGraph: {
    title: "Sod Calculator — How Much Sod Do I Need? | Cubic Yard Calculator",
    description:
      "Sod rolls and pallets from your lawn dimensions, with optional material cost. Free.",
    url: "https://cubicyardcalculator.site/calculators/sod-calculator/",
  },
};

const faqs = [
  {
    q: "How many rolls of sod do I need?",
    a: "Divide your lawn area in square feet by 10 — a standard 2 × 5 ft roll covers 10 sq ft — and round up, then add 5–10% for cutting waste around curves and edges. A 300 sq ft lawn needs exactly 30 rolls; order 33 with waste and you'll finish with a few spares for patching.",
  },
  {
    q: "How many square feet are in a pallet of sod?",
    a: "A typical pallet covers about 450 sq ft; farms and suppliers range 400–500 depending on roll size and region. The calculator rounds pallets up, so a 300 sq ft lawn is one pallet. Confirm your supplier's pallet size before ordering — it varies.",
  },
  {
    q: "How much does sod cost per square foot?",
    a: "Sod itself runs about $0.30–$0.85 per square foot (typical US range), averaging around $0.60 for common varieties; professionally installed with site prep it lands near $1–$2.50 per sq ft. Type your supplier's price into the calculator above — the cost line prices the overage-included order area, which is what you actually pay for.",
  },
  {
    q: "How much topsoil do I need under sod?",
    a: "Plan on 4–6 inches of loose, graded topsoil under the sod — that's the layer the roots establish in, and skimping here is the most common reason new sod fails. Size the topsoil order with our topsoil calculator so the full depth is actually there.",
  },
  {
    q: "How do you lay sod so it survives?",
    a: "Lay it within 24 hours of delivery, stagger the joints like brickwork, butt every edge tight with no gaps or overlaps, and roll the lawn to press roots into the soil. Water within 30 minutes of laying, then keep it consistently moist for the first 2–3 weeks while roots knit in.",
  },
];

export default function SodCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Sod Calculator",
            url: "/calculators/sod-calculator/",
            description:
              "Free sod calculator: lawn area in square feet, yards and meters, sod rolls and pallets to order, with an optional material-cost estimate.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Sod Calculator" },
          ])}
        />
        <div className="kicker">New lawns, lawn replacement, patch jobs</div>
        <h1 className="h2">Sod calculator: rolls, pallets, and cost</h1>
        <p className="sub">
          Measure the lawn, get the sod order — rolls for small jobs,
          pallets for big ones, with cutting waste and an optional
          material-cost estimate built in.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> A 20 × 15 ft
            lawn is 300 sq ft — 33.33 sq yd (27.87 sq m). Divide by 10 sq ft
            per roll → <strong>30 rolls</strong>, or 1 typical pallet (~450
            sq ft). With 10% overage and $0.60/sq ft sod, the order is 330
            sq ft = <strong>$198.00</strong>.
          </p>
        </div>
        <SodCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Roll and pallet sizes vary
          by farm and region — confirm the square footage per pallet with
          your supplier before the truck rolls, especially on big lawns.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Prep: 4–6 inches of topsoil under the sod</h3>
          <p style={{ lineHeight: 1.7 }}>
            Sod is only as good as what it sits on. Spread and grade{" "}
            <strong>4–6 inches of loose topsoil</strong> before the sod
            arrives: till or loosen the existing ground, remove debris and
            large stones, grade for drainage away from the house, and roll
            the topsoil lightly so it settles evenly. Sod laid on compacted
            subsoil or a skim of dirt dries out and dies at the seams.
          </p>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Size the topsoil order first with the{" "}
            <Link href="/calculators/topsoil-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              topsoil calculator
            </Link>{" "}
            — our{" "}
            <Link href="/guides/how-much-topsoil-for-sod/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              how much topsoil for sod
            </Link>{" "}
            guide walks through the full prep.
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Laying tips that decide whether it lives</h3>
          <ul style={{ lineHeight: 1.7, marginBottom: 0 }}>
            <li><strong>Start along a straight edge</strong> — a driveway or sidewalk — and work outward; stagger joints like brickwork so seams don't line up.</li>
            <li><strong>Butt edges tight.</strong> No gaps (they dry out) and no overlaps (they brown). Cut curves with a sharp knife or edger.</li>
            <li><strong>Roll after laying</strong> to press the roots into the soil — good soil contact is what makes sod take.</li>
            <li><strong>Water within 30 minutes</strong> of laying each section, then keep it consistently moist — not soggy — for 2–3 weeks while roots knit in.</li>
            <li><strong>Stay off it</strong> for the first 2–3 weeks, and hold the first mow until the sod resists a gentle tug.</li>
          </ul>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Sizing the dirt underneath? Use the{" "}
          <Link href="/calculators/topsoil-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            topsoil calculator
          </Link>{" "}
          and read{" "}
          <Link href="/guides/how-much-topsoil-for-sod/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how much topsoil for sod
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";
import ConcreteBagCalculator from "../../../components/ConcreteBagCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Concrete Bag Calculator - 60 lb and 80 lb Bags per Yard",
  description:
    "Calculate concrete cubic yards and estimate 60 or 80 lb bag counts. Two-way bag↔yard converter with bag yield reference table.",
  keywords: [
    "concrete bag calculator",
    "how many bags of concrete per yard",
    "80 lb bags per cubic yard",
    "60 lb bags per cubic yard",
    "concrete bags to cubic yards",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/concrete-bag-calculator/" },
  openGraph: {
    title: "Concrete Bag Calculator - 60 lb and 80 lb Bags per Yard | Cubic Yard Calculator",
    description:
      "Free concrete bag calculator: yards to bags and bags to yards for 40–90 lb mixes, with yield reference.",
    url: "https://cubicyardcalculator.site/calculators/concrete-bag-calculator/",
  },
};

const faqs = [
  {
    q: "How many 80-pound bags make a cubic yard?",
    a: "A cubic yard takes about 45 bags of 80-pound concrete mix. Always check the yield printed on the product bag.",
  },
  {
    q: "How many 60-pound bags make a cubic yard?",
    a: "A cubic yard takes about 60 bags of 60-pound concrete mix based on common bag yields.",
  },
  {
    q: "Should I buy extra concrete bags?",
    a: "Yes. Add about 10 percent to cover waste, uneven forms, and small measurement differences.",
  },
  {
    q: "How many bags of Quikrete make a cubic yard?",
    a: "The brand doesn't change the math — the bag yield does. For standard Quikrete and Sakrete concrete mixes, one cubic yard takes 45 bags of 80 lb, 60 bags of 60 lb, 72 bags of 50 lb (Quikrete Fast-Setting), or 90 bags of 40 lb mix: bags per yard = 27 ÷ yield per bag. Always confirm against the exact product label.",
  },
  {
    q: "How many bags for a 10×10 slab?",
    a: "At 4 inches thick: 10 × 10 × 0.333 = 33.33 cubic feet = 1.23 cubic yards, × 45 = 55.56 — round up to 56 bags of 80 lb mix net, 62 with 10% overage.",
  },
  {
    q: "Does every concrete bag have the same yield?",
    a: "No. Bag yield varies by product and mix. Use the manufacturer yield when available.",
  },
];

const bagTable = [
  { size: "40 lb", perYard: "About 90", tip: "Verify the package yield" },
  { size: "50 lb", perYard: "About 72", tip: "Common for small repairs" },
  { size: "60 lb", perYard: "About 60", tip: "Round up to a whole bag" },
  { size: "80 lb", perYard: "About 45", tip: "Round up and allow overage" },
  { size: "90 lb", perYard: "About 40", tip: "Check regional availability" },
];

const brandTable = [
  { brand: "Quikrete 5000", size: "80 lb", yield: "0.60 cu ft", perYard: "45", math: "27 ÷ 0.60" },
  { brand: "Quikrete Fast-Setting", size: "50 lb", yield: "0.375 cu ft", perYard: "72", math: "27 ÷ 0.375" },
  { brand: "Sakrete High-Strength", size: "80 lb", yield: "0.60 cu ft", perYard: "45", math: "27 ÷ 0.60" },
  { brand: "Generic (standard mix)", size: "60 lb", yield: "0.45 cu ft", perYard: "60", math: "27 ÷ 0.45" },
  { brand: "Generic (standard mix)", size: "40 lb", yield: "0.30 cu ft", perYard: "90", math: "27 ÷ 0.30" },
];

export default function ConcreteBagCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Concrete Bag Calculator",
            url: "/calculators/concrete-bag-calculator/",
            description:
              "Free concrete bag calculator: convert cubic yards to bags and bags to cubic yards for 40–90 lb mixes.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Concrete Bag Calculator" },
          ])}
        />
        <div className="kicker">Concrete mix planning</div>
        <h1 className="h2">Concrete bag calculator</h1>
        <p className="sub">
          Estimate the concrete volume for your slab, walkway, footing, or
          patio and see approximate 60-pound and 80-pound bag counts.
        </p>
        <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 10 }}>
          By the Cubic Yard Calculator team · Last updated October 2026
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> One cubic yard
            is approximately 45 bags of 80-pound mix or 60 bags of 60-pound
            mix. Product yield varies, so verify the bag label.
          </p>
        </div>
        <ConcreteBagCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Yields vary by mix — use the
          yield printed on the exact product you plan to buy.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Concrete bag reference</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Bag size</th><th>Approximate bags per cubic yard</th><th>Best practice</th></tr>
            </thead>
            <tbody>
              {bagTable.map((r) => (
                <tr key={r.size}>
                  <td>{r.size}</td>
                  <td className="num">{r.perYard}</td>
                  <td>{r.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 style={{ marginTop: 28 }}>Common brand mixes</h3>
          <p style={{ color: "var(--ink-soft)", lineHeight: 1.7, marginTop: 0 }}>
            The brand on the bag doesn&apos;t change the formula — the
            yield per bag does. Every bags-per-yard figure below is
            27 ÷ the manufacturer&apos;s published yield:
          </p>
          <table className="ref-table">
            <thead>
              <tr><th>Product</th><th>Bag size</th><th>Yield / bag</th><th>Bags / yd³</th><th>Math</th></tr>
            </thead>
            <tbody>
              {brandTable.map((r) => (
                <tr key={`${r.brand}-${r.size}`}>
                  <td>{r.brand}</td>
                  <td className="num">{r.size}</td>
                  <td className="num">{r.yield}</td>
                  <td className="num">{r.perYard}</td>
                  <td className="num">{r.math}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
            Brand names are used for reference only. Cubic Yard Calculator
            is not affiliated with Quikrete or Sakrete; yields are
            manufacturer figures — confirm against your exact product label.
          </p>
          <h3 style={{ marginTop: 28 }}>Ordering tips</h3>
          <ul style={{ color: "var(--ink-soft)", lineHeight: 1.7, paddingLeft: 20, marginBottom: 0 }}>
            <li>Use the yield printed on the exact mix you plan to buy.</li>
            <li>Round bag counts up because partial bags are impractical.</li>
            <li>Plan labor and mixing time for large bag quantities.</li>
            <li>For large pours, compare bagged mix with ready-mix delivery.</li>
          </ul>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Start from dimensions with the{" "}
          <Link href="/calculators/concrete-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete calculator
          </Link>{" "}
          (it has a 2026 cost estimator), or compare delivered pricing in the{" "}
          <Link href="/cubic-yard-cost" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            cubic yard cost guide
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

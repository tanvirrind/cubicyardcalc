import Link from "next/link";
import RebarCalculator from "../../../components/RebarCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Rebar Calculator - Bars, Linear Feet & Weight",
  description:
    "How much rebar do you need for a slab? Get bar count, linear feet, weight in pounds and tons, plus overage for laps and cuts. Free rebar spacing calculator.",
  keywords: [
    "rebar calculator",
    "how much rebar do i need",
    "rebar weight calculator",
    "rebar spacing calculator",
    "concrete slab rebar calculator",
    "how many bars of rebar for a slab",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/rebar-calculator/" },
  openGraph: {
    title: "Rebar Calculator - Bars, Linear Feet & Weight | Cubic Yard Calculator",
    description:
      "Bar count, linear feet and weight for slab rebar — plus spacing guidance and overage for laps and cuts. Free.",
    url: "https://cubicyardcalculator.site/calculators/rebar-calculator/",
  },
};

const faqs = [
  {
    q: "What does #4 rebar mean?",
    a: "The number is the bar diameter in eighths of an inch: #4 is 4/8 inch, or 1/2 inch. It weighs 0.668 lbs per linear foot (ASTM A615) and is the common bar for residential slabs. #5 is 5/8 inch, #3 is 3/8 inch.",
  },
  {
    q: "How is rebar spacing figured for a slab?",
    a: "Bars per direction = floor((dimension − 2 × edge clearance) ÷ spacing) + 1. A 10 ft slab with #4 bars at 12 inches on center and 3-inch clearance needs floor((120 − 6) / 12) + 1 = 10 bars per direction.",
  },
  {
    q: "How far apart should rebar be in a concrete slab?",
    a: "Residential slabs are commonly 12 to 24 inches on center depending on the slab's use — see the spacing table above. A slab on grade with 4,000 psi concrete and light loads can run wider spacing than a slab carrying point loads.",
  },
  {
    q: "Does rebar need chairs or stands?",
    a: "Yes — rebar does nothing sitting on the ground. It belongs in the lower third of the slab (within cover requirements), so support it on chairs, dobies, or continuous bolsters on roughly 4-foot centers, and keep the spacing even while the concrete is placed.",
  },
  {
    q: "When is epoxy-coated rebar required?",
    a: "When concrete is exposed to chlorides or corrosive conditions — deicing salts, marine spray, brackish soil. Interior residential slabs on grade typically use plain carbon steel bar; a structural engineer or the local code specifies coating where it is needed.",
  },
  {
    q: "When do I need a structural engineer for rebar?",
    a: "Anything carrying structural loads: foundations, footings, walls, elevated slabs, and slabs supporting equipment or heavy point loads. This calculator is a material-quantity estimator for typical on-grade slabs — the engineer of record decides bar size and spacing on structural work.",
  },
];

const spacingTable = [
  { use: "Patio / 4-in slab", size: "#4", spacing: "18–24 in" },
  { use: "Driveway / 4–5-in slab", size: "#4", spacing: "12–18 in" },
  { use: "Garage / shop / 5–6-in slab", size: "#4 – #5", spacing: "12–18 in" },
  { use: "Structural slabs / foundations", size: "—", spacing: "Engineer of record decides" },
];

export default function RebarCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Rebar Calculator for Slabs",
            url: "/calculators/rebar-calculator/",
            description:
              "Free rebar calculator: bar count, linear feet, and weight in pounds and tons for slab reinforcement grids.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Rebar Calculator" },
          ])}
        />
        <div className="kicker">Concrete slabs, patios, and driveways</div>
        <h1 className="h2">Rebar calculator: bars, linear feet, and weight</h1>
        <p className="sub">
          Estimate rebar for a slab grid — how many bars, how many linear
          feet, and what it weighs — from your slab size, bar spacing, and
          bar size.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> A 10 × 10 ft
            slab with #4 bars at 12 inches on center and 3-inch edge
            clearance needs{" "}
            <strong>10 bars per direction × 9.5 ft = 95 ft per direction</strong>,
            or <strong>190 ft total</strong> ≈ <strong>127 lbs</strong> of
            rebar. Order about 209 ft with a 10 percent allowance for laps
            and cuts.
          </p>
        </div>
        <RebarCalculator />
        <p className="disclaimer">
          <strong>Estimate, not engineering.</strong> Spacing and bar size
          here are typical planning values for on-grade slabs — a structural
          engineer decides reinforcement on load-bearing or structural work.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Typical rebar spacing by slab use</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Slab use</th><th>Bar size</th><th>Spacing on center</th></tr>
            </thead>
            <tbody>
              {spacingTable.map((r) => (
                <tr key={r.use}>
                  <td>{r.use}</td>
                  <td className="num">{r.size}</td>
                  <td className="num">{r.spacing}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Spacing is planning guidance for typical on-grade slabs, not a
            structural prescription. Tighter spacing and larger bars carry
            more load; structural slabs and foundations follow the engineer
            of record, not a table.
          </p>
        </div>

        <div className="card" style={{ marginTop: 32, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Worked example: 10 × 10 ft slab</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Step</th><th>Math</th><th>Result</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Bars per direction</td>
                <td className="num">⌊(120 − 2 × 3) ÷ 12⌋ + 1</td>
                <td className="num">10 bars</td>
              </tr>
              <tr>
                <td>Bar length</td>
                <td className="num">10 ft − 2 × 0.25 ft</td>
                <td className="num">9.5 ft</td>
              </tr>
              <tr>
                <td>Footage per direction</td>
                <td className="num">10 × 9.5 ft</td>
                <td className="num">95 ft</td>
              </tr>
              <tr>
                <td>Total footage</td>
                <td className="num">2 × 95 ft</td>
                <td className="num">190 ft</td>
              </tr>
              <tr>
                <td>Weight (#4 = 0.668 lbs/ft)</td>
                <td className="num">190 × 0.668</td>
                <td className="num">≈ 127 lbs</td>
              </tr>
              <tr>
                <td>With 10% waste allowance</td>
                <td className="num">190 × 1.10</td>
                <td className="num">209 ft</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Sizing the pour the rebar goes in? Use the{" "}
          <Link href="/calculators/concrete-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete calculator
          </Link>{" "}
          for yards and bags, and the{" "}
          <Link href="/guides/how-much-gravel-under-a-concrete-slab/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            gravel base guide
          </Link>{" "}
          for the compacted stone that goes under the slab.
        </p>
      </div>
    </section>
  );
}

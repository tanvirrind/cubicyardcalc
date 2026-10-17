import Link from "next/link";
import DrivewayCostCalculator from "../../../components/DrivewayCostCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Driveway Cost Calculator — Asphalt vs Concrete Installed Prices",
  description:
    "Free driveway cost calculator: installed price ranges for asphalt, concrete and gravel driveways from your dimensions, plus an optional DIY material estimate.",
  keywords: [
    "driveway cost calculator",
    "asphalt driveway cost per square foot",
    "concrete driveway cost per square foot",
    "driveway cost per sq ft",
    "gravel driveway cost",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/driveway-cost-calculator/" },
  openGraph: {
    title: "Driveway Cost Calculator — Asphalt vs Concrete Installed Prices | Cubic Yard Calculator",
    description:
      "Installed driveway prices for asphalt, concrete and gravel — plus optional DIY material math. Free.",
    url: "https://cubicyardcalculator.site/calculators/driveway-cost-calculator/",
  },
};

const faqs = [
  {
    q: "How much does a 20×40 ft driveway cost?",
    a: "At 800 sq ft: asphalt runs $3,200–$6,400 installed ($4–$8 per sq ft) and plain concrete runs $6,400–$12,000 installed ($8–$15 per sq ft) — typical US ranges. Concrete costs roughly double to install, but lasts 30–40+ years versus 15–30 for asphalt.",
  },
  {
    q: "Which is cheaper, an asphalt or concrete driveway?",
    a: "Asphalt, upfront — about half the installed price. Over 30 years the gap narrows because asphalt needs sealcoating every 3–5 years (and usually a resurface around year 20–25), while concrete mostly needs periodic resealing. Asphalt still finishes cheaper lifetime in most models, but it asks for more maintenance along the way.",
  },
  {
    q: "Can I DIY an asphalt driveway?",
    a: "Not realistically at driveway scale. Hot-mix asphalt is delivered at ~300°F, must be placed and compacted within hours, and needs a paver or an experienced crew plus a vibratory roller. Concrete is the DIY-friendly option: ready-mix delivery or bags, simple forms, and a weekend with a couple of helpers.",
  },
  {
    q: "How much does a gravel driveway cost?",
    a: "About $1.50–$3 per square foot installed is our ballpark planning figure — the cheapest driveway surface by far (contractor quotes with heavy grading or long hauls can run $4–$10). The trade-off is maintenance: plan on regrading and fresh top-up stone every few years to keep it level and well drained.",
  },
  {
    q: "How thick should a driveway be?",
    a: "Residential asphalt: 2–4 inches of compacted hot mix over 4–6 inches of compacted crushed-stone base — the base does most of the structural work. Concrete: 4 inches minimum for passenger cars, 5–6 inches for heavy pickups, RVs, or work trucks. Thinner than spec is the most common cause of early failure for both.",
  },
];

const materialTable = [
  { material: "Asphalt", installed: "$4–$8 / sq ft", lifespan: "15–30 yrs", upkeep: "Sealcoat every 3–5 yrs" },
  { material: "Concrete (plain)", installed: "$8–$15 / sq ft", lifespan: "30–40+ yrs", upkeep: "Reseal every 5–7 yrs" },
  { material: "Gravel", installed: "$1.50–$3 / sq ft", lifespan: "Indefinite", upkeep: "Regrade + top up stone" },
];

export default function DrivewayCostCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Driveway Cost Calculator",
            url: "/calculators/driveway-cost-calculator/",
            description:
              "Free driveway cost calculator: installed price ranges for asphalt, concrete and gravel driveways, plus an optional DIY material estimate.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Driveway Cost Calculator" },
          ])}
        />
        <div className="kicker">New driveways, driveway replacement budgets</div>
        <h1 className="h2">Driveway cost calculator: installed ballparks</h1>
        <p className="sub">
          Enter your driveway size, pick a material, and get an installed
          price range — then optionally price the DIY material math for the
          same driveway.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> A 20 × 40 ft
            (800 sq ft) asphalt driveway runs 800 × $4–$8 ={" "}
            <strong>$3,200–$6,400 installed</strong>; the same driveway in
            concrete runs 800 × $8–$15 ={" "}
            <strong>$6,400–$12,000 installed</strong>. Typical US ranges —
            the full comparison is in our guide.
          </p>
        </div>
        <DrivewayCostCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Installed ranges are typical
          US figures for a straightforward job with standard site prep —
          excavation, a compacted stone base, and a plain finish. Your
          metro's labor rates decide the real number; get local quotes.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Asphalt vs concrete vs gravel at a glance</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Material</th><th>Installed / sq ft</th><th>Lifespan</th><th>Upkeep</th></tr>
            </thead>
            <tbody>
              {materialTable.map((r) => (
                <tr key={r.material}>
                  <td>{r.material}</td>
                  <td className="num">{r.installed}</td>
                  <td>{r.lifespan}</td>
                  <td>{r.upkeep}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            The headline trade: asphalt is the cheaper driveway that asks for
            your attention; concrete is the expensive driveway that mostly
            leaves you alone. For the full head-to-head — DIY math, 30-year
            totals, climate guidance — read{" "}
            <Link href="/guides/asphalt-vs-concrete-driveway-cost/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              asphalt vs concrete driveway cost
            </Link>
            .
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          For the complete comparison, read{" "}
          <Link href="/guides/asphalt-vs-concrete-driveway-cost/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            asphalt vs concrete driveway cost
          </Link>
          . Sizing the materials yourself? Try the{" "}
          <Link href="/calculators/asphalt-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            asphalt calculator
          </Link>
          , the{" "}
          <Link href="/calculators/concrete-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete calculator
          </Link>
          , or the{" "}
          <Link href="/calculators/gravel-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            gravel calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

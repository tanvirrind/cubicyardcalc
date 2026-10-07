import Link from "next/link";
import CubicYardCalculator from "../components/CubicYardCalculator";
import { faqJsonLd } from "../components/Faq";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "Cubic Yard Calculator: Free Tool for Concrete, Gravel, Mulch",
  description:
    "Calculate cubic yards instantly for concrete, gravel, mulch, dirt, sand and rock. Get volume, weight and cost free.",
  keywords: [
    "cubic yard calculator",
    "how to calculate cubic yards",
    "cubic yardage calculator",
    "yardage calculator",
    "how many cubic feet in a cubic yard",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/" },
  openGraph: {
    title: "Cubic Yard Calculator: Free Tool for Concrete, Gravel, Mulch | Cubic Yard Calculator",
    description:
      "Calculate cubic yards instantly for concrete, gravel, mulch, dirt, sand and rock. Get volume, weight and cost free.",
    url: "https://cubicyardcalculator.site/",
  },
};

const faqs = [
  {
    q: "How do you calculate cubic yards?",
    a: "Multiply length by width by depth in feet, then divide the total cubic feet by 27. If depth is in inches, divide the inches by 12 before using the formula.",
  },
  {
    q: "What is a cubic yard?",
    a: "A cubic yard is a volume that measures 3 feet long, 3 feet wide, and 3 feet deep. It equals 27 cubic feet.",
  },
  {
    q: "How many cubic feet are in a cubic yard?",
    a: "There are 27 cubic feet in 1 cubic yard. Multiply cubic yards by 27 to convert to cubic feet.",
  },
  {
    q: "How do I calculate cubic yards from square feet?",
    a: "Multiply square feet by depth in feet, then divide by 27. For example, 300 square feet at 3 inches deep is 300 × 0.25 / 27, or 2.78 cubic yards.",
  },
  {
    q: "How many bags of concrete make a cubic yard?",
    a: "A cubic yard of concrete takes about 45 bags of 80 lb mix, 60 bags of 60 lb mix, or 90 bags of 40 lb mix. Always round up and add 10 percent overage.",
  },
  {
    q: "What is the formula for cubic yards?",
    a: "The formula is length × width × depth in feet divided by 27. The result is cubic yards.",
  },
  {
    q: "Should I order extra material?",
    a: "Yes, most projects should include about 10 percent extra. This covers compaction, uneven ground, spillage, and small measuring differences.",
  },
  {
    q: "How many wheelbarrows are in a cubic yard?",
    a: "A standard 6 cubic foot wheelbarrow holds about 0.22 cubic yards, so one cubic yard is roughly 4 to 5 heaped wheelbarrow loads.",
  },
];

const quickAnswers = [
  {
    title: "What is a cubic yard?",
    text: "A cube 3 feet on every side — 27 cubic feet. It's how suppliers sell concrete, gravel, mulch, dirt and sand, because these materials are delivered by volume, not by piece.",
  },
  {
    title: "The formula",
    text: "Length × width × depth, all in feet, divided by 27. Got inches? Divide by 12 first. A 10×10 ft slab at 4 inches deep is (10 × 10 × 0.333) / 27 = 1.23 cubic yards.",
  },
  {
    title: "Order 10% extra",
    text: "Ground is never perfectly level, forms leak, and wheelbarrows spill. Every calculator here adds a 10% overage suggestion — the industry standard before supplier minimums.",
  },
];

const calcs = [
  { name: "Cubic yard calculator", note: "The all-purpose volume tool", href: "/calculators/cubic-yard-calculator/" },
  { name: "Concrete calculator", note: "Yards, weight, bags & cost", href: "/calculators/concrete-calculator/" },
  { name: "Mulch calculator", note: "Yards & bag counts", href: "/calculators/mulch-calculator/" },
  { name: "Gravel calculator", note: "Yards & tons", href: "/calculators/gravel-calculator/" },
  { name: "Sand calculator", note: "Yards & tons", href: "/calculators/sand-calculator/" },
  { name: "Dirt calculator", note: "Topsoil & fill dirt, yards & tons", href: "/calculators/dirt-calculator/" },
  { name: "Topsoil calculator", note: "Gardens & raised beds", href: "/calculators/topsoil-calculator/" },
  { name: "Landscape rock calculator", note: "Rock & stone, yards & tons", href: "/calculators/landscape-rock-calculator/" },
  { name: "Concrete bag calculator", note: "Yards ↔ bags, two-way", href: "/calculators/concrete-bag-calculator/" },
  { name: "Mulch bag calculator", note: "Yards ↔ bags, two-way", href: "/calculators/mulch-bag-calculator/" },
  { name: "Gravel → tons", note: "Two-way weight converter", href: "/calculators/gravel-to-tons-calculator/" },
  { name: "Fill dirt calculator", note: "Grading & backfill", href: "/calculators/fill-dirt-calculator/" },
  { name: "Sq ft → cubic yards", note: "Area + depth converter", href: "/calculators/square-feet-to-cubic-yards-calculator/" },
  { name: "Cu ft → cubic yards", note: "Two-way volume converter", href: "/calculators/cubic-feet-to-cubic-yards-calculator/" },
  { name: "Square yard calculator", note: "Sq ft → sq yd area tool", href: "/calculators/square-yard-calculator/" },
  { name: "Tons → cubic yards", note: "Two-way weight converter", href: "/calculators/tons-to-cubic-yards-calculator/" },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="kicker" style={{ color: "var(--accent)" }}>
            Free material volume tool
          </div>
          <h1>
            Cubic Yard <span className="hl">Calculator</span>
          </h1>
          <p className="lead">
            Calculate concrete, gravel, mulch, dirt, sand, and rock in cubic
            yards. Enter your dimensions to get volume, weight, and a 10
            percent overage recommendation — free, no signup.
          </p>
          <div className="hero-cta">
            <Link href="#calculate" className="btn btn-primary">
              Calculate cubic yards
            </Link>
            <Link href="/calculators/" className="btn btn-ghost">
              All 8 calculators
            </Link>
          </div>
          <div className="hero-proof">
            <span>free forever</span>
            <span>no account needed</span>
            <span>math runs in your browser</span>
          </div>
        </div>
      </header>

      <section className="section" id="calculate">
        <div className="wrap">
          <JsonLd data={faqJsonLd(faqs)} />
          <div className="kicker">The tool</div>
          <h2 className="h2">Calculate cubic yards</h2>
          <p className="sub">
            Length and width in feet, depth in feet, inches or yards. Pick
            your material for a weight estimate.
          </p>
          <div className="answer-box">
            <p>
              <span className="lead-answer">Quick answer:</span> 1 cubic yard =
              27 cubic feet (3 ft × 3 ft × 3 ft). To find cubic yards, multiply
              length × width × depth in feet and divide by 27. Example: a 10 ×
              10 ft area at 4 inches deep needs (10 × 10 × 0.333) / 27 ={" "}
              <strong>1.23 cubic yards</strong> before overage.
            </p>
          </div>
          <CubicYardCalculator />
          <p className="disclaimer">
            <strong>Ballpark, not gospel.</strong> This estimates volume and
            weight from the numbers you punch in — densities are typical
            values that change with moisture and compaction. Always confirm
            with your supplier before ordering or hauling.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="kicker">Quick answers</div>
          <h2 className="h2">The 30-second version</h2>
          <div className="grid3">
            {quickAnswers.map((a) => (
              <div className="card" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="kicker">Calculators</div>
          <h2 className="h2">One site, every bulk material</h2>
          <p className="sub">
            Sixteen free calculators — volume, weight, bag counts, cost, and
            conversions, all in one place.
          </p>
          <div className="grid3">
            {calcs.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="card trade"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div>
                  <div className="t-name">{c.name}</div>
                  <div className="t-note">{c.note}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="kicker">Popular resources</div>
          <h2 className="h2">Guides worth bookmarking</h2>
          <p className="sub">
            The reference pages people come back to — costs, coverage, and
            the formula itself.
          </p>
          <div className="grid3">
            {[
              { name: "How much is a cubic yard?", note: "2026 cost & ordering guide", href: "/cubic-yard-cost/" },
              { name: "Cubic yard coverage", note: "Chart by depth", href: "/cubic-yard-coverage/" },
              { name: "How to calculate cubic yards", note: "Formula + worked examples", href: "/how-to-calculate-cubic-yards/" },
            ].map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="card trade"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div>
                  <div className="t-name">{c.name}</div>
                  <div className="t-note">{c.note}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap faq">
          <div className="kicker">FAQ</div>
          <h2 className="h2">Straight answers</h2>
          <div style={{ marginTop: 24, maxWidth: 780 }}>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

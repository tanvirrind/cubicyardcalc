import Link from "next/link";
import GravelCalculator from "../../../components/GravelCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Pea Gravel Calculator — How Much Pea Gravel Do I Need?",
  description:
    "Free pea gravel calculator for walkways, patios and dog runs. Cubic yards and tons from your dimensions, with pea-gravel depth advice and a worked example.",
  keywords: [
    "pea gravel calculator",
    "how much pea gravel do i need",
    "pea gravel calculator for walkway",
    "how deep should pea gravel be",
    "how much pea gravel for a patio",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/pea-gravel-calculator/" },
  openGraph: {
    title: "Pea Gravel Calculator — How Much Pea Gravel Do I Need? | Cubic Yard Calculator",
    description:
      "Pea gravel in cubic yards and tons for walkways, patios and dog runs — depth advice included. Free.",
    url: "https://cubicyardcalculator.site/calculators/pea-gravel-calculator/",
  },
};

const faqs = [
  {
    q: "How much pea gravel do I need for a walkway?",
    a: "Measure length × width in feet, multiply by depth in feet (2 inches = 0.167 ft), then divide by 27. A 3 × 10 ft walkway at 2 inches deep needs about 0.19 cubic yards — roughly 500 lbs, well under one bulk-bag scoop.",
  },
  {
    q: "How deep should pea gravel be for a patio or walkway?",
    a: "Two to three inches is the sweet spot. Shallower than 2 inches and the ground shows through; deeper than 3–4 inches and the rounded stones shift underfoot instead of supporting you. For sitting areas, 2 inches with firm edging feels best.",
  },
  {
    q: "Does pea gravel compact or settle?",
    a: "Barely — the rounded stones don't lock together the way crushed rock does, which is why it feels crunchy and stays loose. Expect spreading and migration instead of compaction: use solid edging, add 10% for loss, and top up every year or two on high-traffic paths.",
  },
  {
    q: "How much does a cubic yard of pea gravel weigh?",
    a: "About 2,700 lbs per cubic yard, or 1.35 tons. That figure is pre-selected in the calculator above and matches what most landscape suppliers print on their price sheets.",
  },
  {
    q: "Can I put pea gravel straight on dirt?",
    a: "Lay landscape fabric first, then gravel. Without fabric the stones sink into the soil within a season and weeds come up through the gaps. Add edging around every edge — pea gravel migrates fast without it.",
  },
];

const walkwayTable = [
  { size: "3 x 10 (path)", yd: "0.19", tons: "0.25" },
  { size: "4 x 12 (path)", yd: "0.30", tons: "0.40" },
  { size: "5 x 20 (long run)", yd: "0.62", tons: "0.83" },
  { size: "12 x 12 (patio)", yd: "0.89", tons: "1.20" },
];

export default function PeaGravelCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Pea Gravel Calculator",
            url: "/calculators/pea-gravel-calculator/",
            description:
              "Free pea gravel calculator: cubic yards and tons for walkways, patios, and dog runs, with pea-gravel-specific depth advice.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Pea Gravel Calculator" },
          ])}
        />
        <div className="kicker">Walkways, patios, dog runs, play areas</div>
        <h1 className="h2">Pea gravel calculator for paths and patios</h1>
        <p className="sub">
          Pea gravel behaves differently from crushed stone — it shifts
          instead of locking. This calculator uses pea gravel's own density
          and depth guidance for walking surfaces.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Multiply length
            × width × depth in feet and divide by 27. A 3 × 10 ft walkway at
            2 inches deep needs (3 × 10 × 0.167) / 27 ={" "}
            <strong>0.19 cubic yards</strong> of pea gravel — about 500 lbs.
            Add 10 percent for spreading and loss.
          </p>
        </div>
        <GravelCalculator initialDensityIdx="1" />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Pea gravel size (3/8 in vs
          3/4 in) and moisture shift the weight — confirm pounds-per-yard
          with your supplier before ordering, especially by the ton.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Depth rules for pea gravel</h3>
          <ul style={{ lineHeight: 1.7, marginBottom: 0 }}>
            <li><strong>Walkways and patios:</strong> 2–3 inches. Enough to cover, not enough to wobble.</li>
            <li><strong>Dog runs:</strong> 2–3 inches over landscape fabric — deep enough to drain, shallow enough to rake.</li>
            <li><strong>Around plants / under trees:</strong> 2 inches max, kept back from stems.</li>
            <li><strong>Never compact pea gravel</strong> the way you would crushed stone — a plate compactor just pushes rounded stones sideways. Let foot traffic settle it.</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Pea gravel volumes at 2 inches deep (before overage)</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Project size</th><th>Cubic yards</th><th>Tons</th></tr>
            </thead>
            <tbody>
              {walkwayTable.map((r) => (
                <tr key={r.size}>
                  <td>{r.size}</td>
                  <td className="num">{r.yd}</td>
                  <td className="num">{r.tons}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Ton figures use 2,700 lbs per yard for pea gravel. Projects under
            half a yard are usually cheaper in bags than bulk delivery.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Planning a dog run? Read{" "}
          <Link href="/guides/how-much-gravel-for-a-dog-run/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how much gravel for a dog run
          </Link>
          , and for a sitting area see{" "}
          <Link href="/guides/how-much-pea-gravel-for-a-patio/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how much pea gravel for a patio
          </Link>
          . For crushed stone instead, use the{" "}
          <Link href="/calculators/gravel-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            gravel calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

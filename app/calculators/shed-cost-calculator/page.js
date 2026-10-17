import Link from "next/link";
import ShedCostCalculator from "../../../components/ShedCostCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Shed Cost Calculator — Kit, Custom & Shed-Home Prices",
  description:
    "Free shed cost calculator: building cost ranges for prefab kits, custom builds and finished shed homes from your footprint, plus the gravel pad volume underneath.",
  keywords: [
    "shed cost calculator",
    "how much does a shed cost",
    "prefab shed cost",
    "custom shed cost per square foot",
    "shed base gravel calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/shed-cost-calculator/" },
  openGraph: {
    title: "Shed Cost Calculator — Kit, Custom & Shed-Home Prices | Cubic Yard Calculator",
    description:
      "Building cost ranges for kits, custom builds and shed homes — plus the gravel pad underneath. Free.",
    url: "https://cubicyardcalculator.site/calculators/shed-cost-calculator/",
  },
};

const faqs = [
  {
    q: "How much does a 10×12 shed cost?",
    a: "At 120 sq ft: a prefab kit runs $1,440–$4,800 ($12–$40 per sq ft), a custom-built shed runs $7,200–$14,400 ($60–$120 per sq ft), and a finished, insulated shed home runs $12,000–$24,000 ($100–$200 per sq ft). Typical US ranges; permits, electrical, and site prep are extra.",
  },
  {
    q: "Is a shed kit or a custom build cheaper?",
    a: "The kit — by a wide margin. Prefab kits run about $12–$40 per sq ft versus $60–$120 for a contractor-built custom shed, and kits go up in a day or two. Custom wins when you need an odd size, a specific look, or a structure the kit makers don't sell. Having a pro assemble your kit adds roughly $10–$20 per sq ft.",
  },
  {
    q: "How much gravel do I need for a shed base?",
    a: "Footprint × depth ÷ 27. A 10 × 12 ft pad at 4 inches deep: 120 × 0.333 ÷ 27 = 1.48 cubic yards, about 2.07 tons — one small delivery load. The calculator above sizes the pad from your exact footprint.",
  },
  {
    q: "Gravel pad or concrete slab under a shed?",
    a: "A gravel pad runs roughly $1–$2 per square foot versus $10–$12 for a concrete slab (typical ranges). Gravel drains better, is far cheaper, and is the standard base under prefab sheds. Concrete wins for heavy workshops and anywhere you want a perfectly flat, permanent floor.",
  },
  {
    q: "Do I need a permit for a shed?",
    a: "Often, yes. Many cities require a building permit for sheds over 120 sq ft, and almost always for sheds with electrical or plumbing. Permits typically run $200–$1,500 depending on the city. Check your local rules before you build — a stop-work order costs far more than the permit.",
  },
];

const buildTable = [
  { type: "Prefab kit", perSqFt: "$12–$40", best: "Budget storage, fast install" },
  { type: "Custom-built", perSqFt: "$60–$120", best: "Odd sizes, matching the house" },
  { type: "Finished shed home", perSqFt: "$100–$200", best: "Office, studio, guest space" },
];

export default function ShedCostCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Shed Cost Calculator",
            url: "/calculators/shed-cost-calculator/",
            description:
              "Free shed cost calculator: building cost ranges for prefab kits, custom builds and finished shed homes, plus the gravel pad volume underneath.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Shed Cost Calculator" },
          ])}
        />
        <div className="kicker">Storage sheds, workshops, backyard offices</div>
        <h1 className="h2">Shed cost calculator: building + base</h1>
        <p className="sub">
          Enter the footprint, pick how it's built, and get a building cost
          range — plus the gravel pad volume and weight underneath it.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> A 10 × 12 ft
            (120 sq ft) prefab kit runs 120 × $12–$40 ={" "}
            <strong>$1,440–$4,800</strong>. The gravel pad at 4 inches adds
            120 × 0.333 / 27 = <strong>1.48 yd³</strong> of crushed stone
            (~2.07 tons), material-only.
          </p>
        </div>
        <ShedCostCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Building ranges are typical
          US figures for the structure itself — permits, electrical, grading,
          and delivery are not included. Get local quotes before you commit.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>The three ways to get a shed</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Build type</th><th>Per sq ft</th><th>Best for</th></tr>
            </thead>
            <tbody>
              {buildTable.map((r) => (
                <tr key={r.type}>
                  <td>{r.type}</td>
                  <td className="num">{r.perSqFt}</td>
                  <td>{r.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            All three sit on the same thing: 4 inches of compacted crushed
            stone. Size yours with the{" "}
            <Link href="/calculators/gravel-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              gravel calculator
            </Link>{" "}
            — our{" "}
            <Link href="/guides/how-much-gravel-for-a-shed-base/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              shed base guide
            </Link>{" "}
            covers depth, edging, and drainage.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Sizing the stone underneath? Use the{" "}
          <Link href="/calculators/gravel-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            gravel calculator
          </Link>{" "}
          and read{" "}
          <Link href="/guides/how-much-gravel-for-a-shed-base/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how much gravel for a shed base
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

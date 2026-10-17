import Link from "next/link";
import BrickCalculator from "../../../components/BrickCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Brick Calculator — How Many Bricks Do I Need?",
  description:
    "Free brick calculator for walls, veneer, and fire pits. Bricks per square foot by brick size and mortar joint, plus a mortar bag estimate.",
  keywords: [
    "brick calculator",
    "how many bricks do i need",
    "bricks per square foot",
    "how many bricks for a wall",
    "mortar calculator bricks",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/brick-calculator/" },
  openGraph: {
    title: "Brick Calculator — How Many Bricks Do I Need? | Cubic Yard Calculator",
    description:
      "Bricks per square foot by size and joint, with a mortar bag estimate. Free brick calculator.",
    url: "https://cubicyardcalculator.site/calculators/brick-calculator/",
  },
};

const faqs = [
  {
    q: "How many bricks do I need per square foot?",
    a: "For modular brick with 3/8-in joints: 144 / ((7.625 + 0.375) × (2.25 + 0.375)) = 144 / 21 = 6.857 bricks per sq ft, before waste. Standard is ~6.55, queen ~5.76, and king ~4.61 at the same joint width. Wider joints lower the count; narrower joints raise it.",
  },
  {
    q: "How much mortar do I need for a brick wall?",
    a: "The standard estimating rule is about 9 eighty-pound bags of mortar per 1,000 modular bricks with 3/8-in joints. An 8 × 3 ft garden wall needs ~182 bricks with waste (24 × 6.857 × 1.10), so ceil(0.182 × 9) = 2 bags. It scales with brick count, so other sizes price out proportionally.",
  },
  {
    q: "What mortar joint width should I use?",
    a: "3/8 inch is the US standard for brick — it forgives minor brick-size variation and is what the modular 6.857-per-sq-ft figure assumes. Use 1/4 in for crisp modern work with precise units, 1/2 in for rustic or tumbled brick. Every 1/8 in wider saves roughly 10% of your bricks but adds mortar.",
  },
  {
    q: "Does this calculator cover double-wythe (two bricks thick) walls?",
    a: "No — it counts a single wythe, one brick thick, which covers brick veneer, garden walls, and fire-pit rings. For a double-wythe structural wall, run the calculator for one wythe and double the brick count. Mortar roughly doubles too, though the collar joint uses less than a full bed joint.",
  },
  {
    q: "Should I add waste to my brick order?",
    a: "Yes — 10% is the default for straight walls and covers cuts, chipped units, and color blending (bricks vary slightly cube to cube; mixing them avoids patchy bands). Raise it to 15% for curved walls, soldier courses, or intricate patterns with heavy cutting.",
  },
];

const brickTable = [
  { size: "Modular (3⅝ × 2¼ × 7⅝ in)", bpsf: "6.86" },
  { size: "Standard (3⅝ × 2¼ × 8 in)", bpsf: "6.55" },
  { size: "Queen (2¾ × 2¾ × 7⅝ in)", bpsf: "5.76" },
  { size: "King (2¾ × 2¾ × 9⅝ in)", bpsf: "4.61" },
];

const wallTable = [
  { size: "8 x 3 (garden bed)", bricks: "182", bags: "2" },
  { size: "10 x 4 (garden wall)", bricks: "302", bags: "3" },
  { size: "12 x 6 (privacy wall)", bricks: "544", bags: "5" },
];

export default function BrickCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Brick Calculator",
            url: "/calculators/brick-calculator/",
            description:
              "Free brick calculator: bricks per square foot by brick size and mortar joint, plus a mortar bag estimate for walls, veneer, and fire pits.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Brick Calculator" },
          ])}
        />
        <div className="kicker">Brick veneer, garden walls, fire pits</div>
        <h1 className="h2">Brick calculator for walls and veneer</h1>
        <p className="sub">
          Bricks are sold by the thousand and mortar by the eighty-pound bag,
          so the whole estimate is really two divisions. This calculator does
          both: bricks per square foot from real unit dimensions and joint
          width, then the mortar bags to match.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Modular brick
            with 3/8-in joints covers 6.857 bricks per square foot. An 8 ×
            3 ft wall (24 sq ft) needs 24 × 6.857 = 164.6 →{" "}
            <strong>182 bricks with 10% waste</strong>, plus{" "}
            <strong>~2 eighty-pound bags of mortar</strong> (9 bags per 1,000
            bricks).
          </p>
        </div>
        <BrickCalculator initialBrickIdx="0" />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> The bag count is the
          standard estimating rule (~9 bags per 1,000 modular bricks at
          3/8-in joints) — joints, waste, and brick size all move it. Mix a
          bag, lay a test section, and adjust before committing the full order.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Modular vs standard vs queen vs king</h3>
          <ul style={{ lineHeight: 1.7, marginBottom: 0 }}>
            <li><strong>Modular (3⅝ × 2¼ × 7⅝ in):</strong> the US residential standard — 6.86 bricks per sq ft at 3/8-in joints. Courses measure exactly 8 in with the joint, which makes coursing math easy.</li>
            <li><strong>Standard (3⅝ × 2¼ × 8 in):</strong> slightly longer face, 6.55 per sq ft. Common where the nominal 8-in module isn't critical.</li>
            <li><strong>Queen (2¾ × 2¾ × 7⅝ in):</strong> taller face course, 5.76 per sq ft — fewer units, faster laying, chunkier look.</li>
            <li><strong>King (2¾ × 2¾ × 9⅝ in):</strong> the big one, 4.61 per sq ft. Fewer bricks to buy and lay, but each weighs more.</li>
            <li>Bigger face = fewer bricks, but don't forget the mortar scales with brick count — a king-size wall uses less labor, not much less mortar per square foot.</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Joint guidance</h3>
          <ul style={{ lineHeight: 1.7, marginBottom: 0 }}>
            <li><strong>3/8 inch — the default.</strong> Matches the modular system and forgives real-world brick size variation.</li>
            <li><strong>1/4 inch</strong> for tight, modern work with precise units — uses more bricks per sq ft and shows less mortar.</li>
            <li><strong>1/2 inch</strong> for rustic, tumbled, or reclaimed brick where variation is the point.</li>
            <li>Keep the joint <strong>consistent to the 1/16th</strong> — coursing errors compound, and a wavy joint line is the first thing people notice.</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Bricks per square foot at 3/8-in joints</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Brick size</th><th>Per sq ft</th></tr>
            </thead>
            <tbody>
              {brickTable.map((r) => (
                <tr key={r.size}>
                  <td>{r.size}</td>
                  <td className="num">{r.bpsf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Sample walls (modular, 3/8-in joints, 10% waste)</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Wall size</th><th>Bricks (10% waste)</th><th>Mortar bags (~)</th></tr>
            </thead>
            <tbody>
              {wallTable.map((r) => (
                <tr key={r.size}>
                  <td>{r.size}</td>
                  <td className="num">{r.bricks}</td>
                  <td className="num">{r.bags}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Bag counts use 9 eighty-pound bags per 1,000 bricks, rounded up —
            mortar is always an ordering estimate, never a mix design.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Read{" "}
          <Link href="/guides/how-much-mortar-do-i-need/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how much mortar do I need
          </Link>
          {" "}for the full mortar breakdown, and for concrete masonry units
          — the CMU cousin of this calculator — see the{" "}
          <Link href="/calculators/concrete-block-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete block calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";
import BlockCalculator from "../../../components/BlockCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Concrete Block Calculator - CMU Blocks, Mortar & Grout",
  description:
    "How many concrete blocks and bags of mortar do you need? Free CMU block calculator: block count, 80-lb Type N mortar bags, and approximate core-fill grout for block walls.",
  keywords: [
    "concrete block calculator",
    "cmu block calculator",
    "how many concrete blocks do i need",
    "concrete block wall calculator",
    "how many bags of mortar for a block wall",
    "cmu mortar calculator",
    "concrete block quantity calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/concrete-block-calculator/" },
  openGraph: {
    title: "Concrete Block Calculator - CMU Blocks, Mortar & Grout | Cubic Yard Calculator",
    description:
      "Block count, 80-lb Type N mortar bags, and approximate core-fill grout for mortared CMU walls. Free.",
    url: "https://cubicyardcalculator.site/calculators/concrete-block-calculator/",
  },
};

const faqs = [
  {
    q: "How do I calculate how many concrete blocks I need?",
    a: "Measure the wall face in square feet (length × height in feet) and multiply by 1.125 blocks per sq ft, then round up. A standard 8×8×16 CMU with 3/8-inch joints lays 1.125 blocks per square foot of wall face. A 20×8 ft wall is 160 sq ft × 1.125 = 180 blocks net — order 198 with a 10% waste buffer.",
  },
  {
    q: "How many bags of mortar do I need for a concrete block wall?",
    a: "Our mortar guide's rate for standard 8-in CMU with 3/8-inch joints: about 15 eighty-pound Type N bags per 100 sq ft of wall face, net (16 with waste). A 20×8 ft wall (160 sq ft) needs 24 bags net, 27 with a 10% buffer. As a rough cross-check, one 80-lb bag lays about 8 blocks.",
  },
  {
    q: "Should I use Type N or Type S mortar for a block wall?",
    a: "Type N is the general-purpose default for above-grade block work — garden walls, sheds, chimneys, mailboxes. Type S is stronger and made for structural, below-grade, or at-grade work like foundations and load-bearing walls. Note from our mortar guide: Type S yields a bit less per bag, so you need roughly 20% more bags for the same wall.",
  },
  {
    q: "Should I fill the block cores with grout?",
    a: "Only where the wall needs reinforcement. Fully grouted walls are for heavily loaded or tall walls; most garden and non-structural walls leave unreinforced cores hollow. The calculator's core-fill row is approximate — grout volume depends on block depth and how many cells are filled, so confirm with your supplier before ordering.",
  },
  {
    q: "What is a partially grouted block wall?",
    a: "Only the reinforced cells — the ones with rebar, typically around openings and at wall ends or corners — get grout; the rest stay hollow. That means a partially grouted wall orders far less grout than the full-wall figure, and costs less while still meeting code where allowed.",
  },
  {
    q: "Do I need rebar in a block wall?",
    a: "Reinforced (rebar + grout) cells are what carry loads in structural block walls, and local code sets the spacing and size. For ordering purposes it just matters which cores are reinforced: only reinforced cores get grout, which is why the calculator's grout figure is approximate rather than exact.",
  },
  {
    q: "Is this calculator for segmental retaining-wall block?",
    a: "No. Segmental retaining-wall block is dry-stacked and interlocking — it takes no mortar at all — and is a different product from mortared CMU. Use this calculator only for mortared concrete block walls; our retaining-wall blocks guide covers segmental block.",
  },
];

const sizeTable = [
  { size: "4-in", uses: "Interior partitions, light non-load-bearing walls" },
  { size: "6-in", uses: "Non-load-bearing partitions, some non-structural exterior walls" },
  { size: "8-in", uses: "Standard load-bearing exterior walls, foundations, garden walls — the most common" },
  { size: "10-in", uses: "Heavier structural walls, taller load-bearing walls" },
  { size: "12-in", uses: "Heavy load-bearing walls, tall walls, pilasters" },
];

export default function ConcreteBlockCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Concrete Block Calculator",
            url: "/calculators/concrete-block-calculator/",
            description:
              "Free concrete block calculator: CMU block count, 80-lb Type N mortar bags, and approximate core-fill grout for block walls.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Concrete Block Calculator" },
          ])}
        />
        <div className="kicker">Mortared concrete block (CMU) walls</div>
        <h1 className="h2">Concrete block calculator: blocks, mortar, and grout</h1>
        <p className="sub">
          Size a mortared concrete masonry unit (CMU) wall — block count,
          80-lb Type N mortar bags, and optional core-fill grout — from just
          the wall&apos;s length and height.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> A 20 × 8 ft
            wall is 160 sq ft × 1.125 blocks per sq ft ={" "}
            <strong>180 blocks net</strong> (198 with 10% waste). At our
            guide&apos;s rate of 15 eighty-pound Type N bags per 100 sq ft,
            it takes <strong>24 bags of mortar net</strong> — order 27 with
            the standard 10% buffer.
          </p>
        </div>
        <BlockCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> The mortar rate is published
          for 8-in block with 3/8-in joints — thinner or thicker walls need
          slightly less or more, and the grout figure is approximate, so
          confirm both with your supplier before ordering.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>CMU vs. segmental retaining-wall block</h3>
          <p style={{ color: "var(--ink-soft)", lineHeight: 1.65 }}>
            These are <strong>two different products</strong>, and the math
            does not transfer between them. CMU (concrete masonry units) are
            laid with mortar joints and sometimes reinforced with rebar and
            grout — that&apos;s what this calculator sizes.{" "}
            <strong>Segmental retaining-wall block</strong> is dry-stacked
            and interlocking: it takes <strong>no mortar at all</strong> and
            counts differently. Our{" "}
            <Link href="/guides/how-many-retaining-wall-blocks-do-i-need/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              retaining-wall blocks guide
            </Link>{" "}
            covers that product — do not use this page&apos;s block or mortar
            figures for a segmental wall.
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>CMU sizes and typical uses</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Nominal block size</th><th>Typical uses</th></tr>
            </thead>
            <tbody>
              {sizeTable.map((r) => (
                <tr key={r.size}>
                  <td className="num">{r.size}</td>
                  <td>{r.uses}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Sizes are nominal (actual blocks run about 3/8 in smaller to
            allow for joints). Every CMU has the same 8×16 face, so the block
            count is identical across sizes — depth only affects wall
            strength and core volume.
          </p>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Worked example: a 20 × 8 ft garden wall</h3>
          <ol style={{ color: "var(--ink-soft)", lineHeight: 1.75, paddingLeft: 20, marginBottom: 12 }}>
            <li>Wall face: 20 ft × 8 ft = <strong>160 sq ft</strong>.</li>
            <li>Blocks: 160 × 1.125 = <strong>180 blocks net</strong> — order <strong>198</strong> with 10% waste.</li>
            <li>Mortar: 160 × 15 / 100 = <strong>24 eighty-pound Type N bags net</strong> — order <strong>27</strong> with 10% waste.</li>
          </ol>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Anchor check: one 80-lb bag lays about 8 blocks, so 180 ÷ 8 ≈
            23 bags — right at the calculator&apos;s 24 (our guide rounds
            14.06 up to 15 bags per 100 sq ft). Core-fill grout, if needed,
            runs about 1.08 yd³ for all 180 cores — approximate, confirm
            with your supplier.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          The full mortar breakdown — Type N vs S vs M, joint-thickness
          multipliers, and per-1,000 counts — is in our{" "}
          <Link href="/guides/how-much-mortar-do-i-need/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how much mortar do I need guide
          </Link>.{" "}
          <Link href="/guides/how-many-retaining-wall-blocks-do-i-need/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Retaining-wall block
          </Link>{" "}
          is a related but different product (dry-stacked, no mortar) — see
          that guide instead. Filling cores or pouring a footing? The{" "}
          <Link href="/calculators/concrete-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete calculator
          </Link>{" "}
          sizes the concrete.
        </p>
      </div>
    </section>
  );
}

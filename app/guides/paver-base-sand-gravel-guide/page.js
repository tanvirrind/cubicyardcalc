import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Paver Base Guide: How Much Gravel & Sand for a Patio",
  description:
    "Paver base math done right: the 4-6-1 rule, gravel and sand quantities by patio size, bedding vs joint sand, compaction, and edge restraint. Free gravel and sand calculators.",
  keywords: [
    "how much sand do i need for pavers",
    "paver base depth",
    "how much gravel under pavers",
    "bedding sand vs joint sand",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/paver-base-sand-gravel-guide/" },
  openGraph: {
    title: "Paver Base Guide: How Much Gravel & Sand for a Patio | Cubic Yard Calculator",
    description:
      "The 4-6-1 rule, material tables by patio size, and the bedding-vs-joint-sand split. Free gravel and sand calculators.",
    url: "https://cubicyardcalculator.site/guides/paver-base-sand-gravel-guide/",
  },
};

const faqs = [
  {
    q: "How thick should a paver base be?",
    a: "4 to 6 inches of compacted crushed-stone base plus 1 inch of bedding sand. Use 6 inches for driveways or heavy loads, 4 inches for patios and walkways. Compact the base in 2-inch lifts with a plate compactor.",
  },
  {
    q: "Can I use sand instead of gravel under pavers?",
    a: "No — a sand-only base is the classic way to get a wavy patio. Sand has no structural strength; it shifts under load and washout. Pavers need 4 to 6 inches of compacted crushed gravel for structure, with sand only as the thin 1-inch bedding layer on top.",
  },
  {
    q: "What is the difference between bedding sand and joint sand?",
    a: "Bedding sand is coarse washed concrete sand laid 1 inch thick under the pavers as a leveling bed. Joint sand (usually polymeric sand) is swept into the narrow gaps after laying to lock the pavers together and block weeds. Different jobs, different products — never swap them.",
  },
  {
    q: "Do pavers really need a compacted base?",
    a: "Yes. Uncompacted stone keeps settling for years, and the pavers follow it down unevenly. Compact the subgrade, then compact the gravel in 2-inch lifts with a plate compactor. Skipping compaction is the number-one cause of sunken, wavy patios.",
  },
  {
    q: "How much polymeric sand do I need?",
    a: "Roughly one 50-lb bag per 60 to 80 square feet of standard pavers. A 10×10 ft patio takes about 2 bags; a 12×16 ft patio takes about 3; a 16×20 ft patio takes about 5. Wide joints and large formats use more.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Paver Base Guide: How Much Gravel & Sand for a Patio"
      description="The 4-6-1 rule, exact material quantities for common patio sizes, the bedding-vs-joint sand split, and the compaction steps that keep patios flat for decades."
      slug="paver-base-sand-gravel-guide"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
      updated="2026-10-12"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        Memorize the <strong>4-6-1 rule</strong>: <strong>4 to 6 inches</strong>{" "}
        of compacted crushed-stone base, <strong>1 inch</strong> of bedding
        sand, then polymeric joint sand swept into the gaps. For a 12×16 ft
        patio: gravel at 4 inches = (192 × 0.333) / 27 ={" "}
        <strong>2.37 cubic yards</strong>; bedding sand at 1 inch = (192 ×
        0.083) / 27 = <strong>0.59 cubic yards</strong> (16 cu ft); joint
        sand ≈ 3 fifty-pound bags. Use 6 inches of base for driveways and
        heavy loads, 4 inches for patios and walkways. Run your own patio
        through the <a href="/calculators/sand-calculator/">sand calculator</a>{" "}
        once you have the table ballpark below.
      </p>

      <h2>Materials by patio size</h2>
      <p>
        Gravel figures are compacted depth — order about 10% extra to cover
        compaction loss and irregular edges. Bedding sand is shown in cubic
        yards and cubic feet. Joint sand is estimated at one 50-lb bag per
        ~70 sq ft of standard pavers.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Patio size</th><th>Gravel base @4&Prime;</th><th>Gravel base @6&Prime;</th><th>Bedding sand @1&Prime;</th><th>Polymeric joint sand</th></tr>
        </thead>
        <tbody>
          <tr><td>10 × 10 ft</td><td className="num">1.23 yd³</td><td className="num">1.85 yd³</td><td className="num">0.31 yd³ (8.3 cu ft)</td><td className="num">~2 bags</td></tr>
          <tr><td>12 × 16 ft</td><td className="num">2.37 yd³</td><td className="num">3.56 yd³</td><td className="num">0.59 yd³ (16 cu ft)</td><td className="num">~3 bags</td></tr>
          <tr><td>16 × 20 ft</td><td className="num">3.95 yd³</td><td className="num">5.93 yd³</td><td className="num">0.99 yd³ (26.7 cu ft)</td><td className="num">~5 bags</td></tr>
        </tbody>
      </table>
      <p>
        Bedding sand is cheap and usually bought in bags (a 0.5 cu ft bag
        costs a few dollars), so even the 16×20 patio&apos;s 26.7 cu ft —
        about 54 bags of 0.5 cu ft — is fine as a small pile delivered with
        the gravel. Gravel, meanwhile, is ordered loose by the cubic yard
        or ton: a cubic yard of gravel weighs about 1.4 tons.
      </p>

      <h2>Bedding sand vs joint sand: don&apos;t mix them up</h2>
      <p>
        <strong>Bedding sand</strong> is the 1-inch layer under the pavers.
        Use <strong>coarse washed concrete sand</strong> — sharp-edged
        particles that interlock and level cleanly with a screed.{" "}
        <strong>Joint sand</strong> goes on top: after the pavers are laid,
        you sweep it into the gaps to lock everything together.{" "}
        <strong>Polymeric sand</strong> is the modern standard — it contains
        binders that set up hard when misted with water, resisting washout,
        ants, and weeds. And <strong>never use play sand</strong> for
        either job: it is too fine and rounded, holds water, and gives you
        a mushy bed and weak joints.
      </p>

      <h2>Compaction: the step people skip and regret</h2>
      <p>
        Compaction is what separates a patio that is still flat in ten
        years from one that looks like a wave pool by year three. The
        sequence: compact the soil subgrade first, then spread gravel in{" "}
        <strong>2-inch lifts</strong> — never dump all 6 inches at once —
        and run a <strong>plate compactor</strong> over each lift. Mist
        lightly with water between passes; damp stone compacts tighter
        than dry. You will hear the tone of the compactor change when a
        lift is done — it goes from a dull thud to a hard ring. Rent the
        plate compactor; it is typically $50 to $80 a day and it is the
        single most important tool in the whole project.
      </p>

      <h2>Which gravel to use under pavers</h2>
      <p>
        Not all &ldquo;gravel&rdquo; qualifies as a paver base. The
        spec is <strong>crushed stone with fines</strong> — sold as
        crusher run, dense grade, ¾-inch minus, or road base depending
        on the region. The angular faces interlock under the compactor
        and the fines fill the voids, locking the whole layer into a
        rigid slab-like bed. What to avoid: round river rock or pea
        gravel (no interlock, shifts under load), and clean washed
        stone with no fines (compacts poorly and leaves voids). For the
        bedding layer, insist on <strong>coarse washed concrete
        sand</strong> — sharp, clean, and free of silt. Stone dust is
        sometimes suggested as bedding, but it holds water and can
        stain pavers, so concrete sand is the safer default.
      </p>

      <h2>Slope for drainage</h2>
      <p>
        Before the base goes down, grade the soil so the finished patio
        slopes <strong>1 to 2 inches per 8 feet</strong> away from any
        structure — that is roughly a 1–2% grade, enough to shed rain
        without feeling tilted underfoot. Never let a patio drain
        toward the house foundation. On flat lots where achieving slope
        is hard, even a half-inch of fall per 8 feet beats dead flat.
        Set your screed rails to the slope and let the base follow it.
      </p>

      <h2>Order of operations: the base, step by step</h2>
      <p>
        The sequence matters as much as the materials. <strong>1.
        Excavate</strong> 7 to 9 inches below finished grade (base
        depth + 1 inch bedding + paver thickness). <strong>2.
        Compact the soil subgrade</strong> — soft soil under a good
        base still settles. <strong>3. Lay geotextile fabric</strong>{" "}
        on clay or wet soil. <strong>4. Spread gravel in 2-inch
        lifts</strong>, compacting each with the plate compactor and a
        light mist of water. <strong>5. Screed the bedding sand</strong>{" "}
        over the compacted base using 1-inch rails, then pull the rails
        and fill the grooves. <strong>6. Lay the pavers</strong> from
        one edge, keeping joints tight and even. <strong>7. Run the
        compactor over the pavers</strong> with a rubber pad to seat
        them into the bedding. <strong>8. Sweep polymeric sand</strong>{" "}
        into the joints, compact once more, sweep again, then mist
        lightly to activate the binder. Done in this order, the patio
        behaves as one locked plate instead of a thousand loose
        pieces.
      </p>

      <h2>Don&apos;t forget edge restraint</h2>
      <p>
        Pavers are held in place laterally by the base, the joint sand, and
        the edge. Leave off the edge restraint and the outer rows creep
        outward year after year. <strong>Spike-in plastic or aluminum
        paver edging</strong> — or a concrete haunch — around the full
        perimeter before you lay the pavers. It is a $30 to $60 line item
        that protects the entire build.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Sand layer too thick.</strong> More than 1 inch of bedding
        sand creates a shifting mattress — pavers rock and settle
        unevenly. <strong>Wrong sand type.</strong> Play sand for bedding,
        regular sand in wide joints: both fail. <strong>Skipping
        compaction.</strong> See above — the number-one patio killer.{" "}
        <strong>No edge restraint.</strong> The perimeter walks outward
        without it. <strong>Pouring all the base at once.</strong> Six
        inches of loose stone compacted in one pass is compacted on top
        and loose underneath. Two-inch lifts, always.
      </p>

      <Faq items={faqs} heading="Paver Base FAQ" />
    </GuideArticle>
  );
}

import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Fill Dirt Do I Need? (Holes, Low Spots & Pool Fill Guide)",
  description:
    "Fill-dirt quantities for holes, low spots, lawn leveling, and old swimming pools — worked examples, the 10–20% compaction rule, and the topsoil finish layer. Free fill dirt calculator.",
  keywords: [
    "how much dirt to fill a hole",
    "how much fill dirt to fill a swimming pool",
    "cubic yards to fill pool",
    "fill dirt compaction calculator",
    "how much dirt to level a yard",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-fill-dirt-to-fill-a-hole/" },
  openGraph: {
    title: "How Much Fill Dirt Do I Need? (Holes, Low Spots & Pool Fill Guide) | Cubic Yard Calculator",
    description:
      "Worked fill-dirt quantities for holes, low spots, and pool fills — with the compaction rule that prevents under-ordering. Free fill dirt calculator.",
    url: "https://cubicyardcalculator.site/guides/how-much-fill-dirt-to-fill-a-hole/",
  },
};

const faqs = [
  {
    q: "How much dirt do I need to fill a hole?",
    a: "Use (length × width × depth in feet) / 27. A 6×6×2 ft hole is 72 / 27 = 2.67 cubic yards, about 2.9 tons of fill dirt. Order 3 to 3.5 yards — loose fill settles 10–20% as it compacts.",
  },
  {
    q: "How much fill dirt does it take to fill a swimming pool?",
    a: "A typical 16×32 pool averaging 5 feet deep is about 95 cubic yards of void (16 × 32 × 5 / 27). With compaction allowance, order 110–120 yards — roughly 121–132 tons, or 6 to 7 tri-axle truckloads. Demolished wall debris displaces some volume but adds hauling, not fill.",
  },
  {
    q: "Will fill dirt settle after I fill a hole?",
    a: "Yes. Dumped loose fill can settle 15–30% over months as air voids collapse. Order 10–20% more than the void volume and compact the fill in 6–12 inch lifts with a plate compactor or tracked machine — a properly compacted fill barely settles at all.",
  },
  {
    q: "Can I fill in my own swimming pool?",
    a: "Partial fills (punching the shell for drainage, breaking down the top walls, then compacted fill) are sometimes done by homeowners, but most jurisdictions require a permit and inspection for pool decommissioning — and full removal is engineered work. Typical professional costs: $3–7k for a partial fill, $9–19k for full removal.",
  },
  {
    q: "Should I use fill dirt or topsoil to level my yard?",
    a: "Fill dirt for the depth, topsoil for the top 4–6 inches. Fill dirt is cheap, stable subsoil with no organic matter — perfect for bulk fill but plants won't thrive in it. Cap it with topsoil for lawn. See our fill dirt vs topsoil breakdown for the full comparison.",
  },
  {
    q: "How many tons is a cubic yard of fill dirt?",
    a: "About 1.1 tons. Fill dirt runs roughly 2,200 lbs per cubic yard, so multiply yards × 1.1. A 13-yard low-spot fill is about 14.3 tons — plan delivery accordingly.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Fill Dirt Do I Need?"
      description="Worked examples for holes, low spots, lawn leveling, and old pool fills — the volume formula, the compaction rule that prevents under-ordering, and the topsoil finish layer."
      slug="how-much-fill-dirt-to-fill-a-hole"
      calculatorHref="/calculators/fill-dirt-calculator/"
      calculatorLabel="Try the fill dirt calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        <strong>Yards = (length × width × depth in feet) / 27</strong>, then
        order <strong>10–20% extra</strong> because loose fill settles as it
        compacts. A 6×6 hole that&apos;s 2 feet deep is (6 × 6 × 2) / 27 =
        <strong> 2.67 cubic yards</strong> — order 3 to 3.5. Tons = yards ×
        1.1 (fill dirt runs about 2,200 lbs per yard). The extra percentage
        is the part everyone skips: the void you measure is compacted volume,
        but dirt arrives loose and full of air.
      </p>

      <h2>Worked examples across scenarios</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Scenario</th><th>Dimensions</th><th>Cubic yards</th><th>Tons (×1.1)</th><th>Order (+15%)</th></tr>
        </thead>
        <tbody>
          <tr><td>Stump hole</td><td className="num">4 × 4 × 2.5 ft</td><td className="num">1.48</td><td className="num">1.63</td><td className="num">1.75</td></tr>
          <tr><td>Small hole / sinkhole</td><td className="num">6 × 6 × 2 ft</td><td className="num">2.67</td><td className="num">2.93</td><td className="num">3–3.5</td></tr>
          <tr><td>Lawn low spot</td><td className="num">20 × 30 ft, avg 6 in</td><td className="num">11.11</td><td className="num">12.22</td><td className="num">13</td></tr>
          <tr><td>Yard leveling</td><td className="num">30 × 40 ft, avg 4 in</td><td className="num">14.81</td><td className="num">16.30</td><td className="num">17</td></tr>
          <tr><td>16 × 32 pool (avg 5 ft deep)</td><td className="num">16 × 32 × 5 ft</td><td className="num">~95</td><td className="num">~104</td><td className="num">110–120</td></tr>
        </tbody>
      </table>
      <p>
        Check the low-spot math: 20 × 30 = 600 sq ft × 0.5 ft = 300 cu ft /
        27 = 11.11 yards; × 1.1 = 12.22 tons. For uneven areas, measure depth
        in several spots and average — a low spot that&apos;s 9 inches in the
        middle and 3 at the edges is a 6-inch average. And the pool row uses
        the higher end of the compaction range (15–25%) because deep fills
        compress more; demolished wall rubble displaces some void but
        doesn&apos;t compact like clean fill.
      </p>

      <h2>The compaction rule (order +10–20% extra)</h2>
      <p>
        Here&apos;s why the extra matters. Dirt delivered loose is full of
        air voids — up to a third of its volume can be nothing. Dump it in a
        hole and it settles <strong>15–30% over the coming months</strong>,
        leaving a shallow crater where you thought you were done. Ordering
        10–20% over the measured void is the floor, not the ceiling. The
        real fix is mechanical: compact the fill in <strong>6–12 inch
        lifts</strong> with a plate compactor (small jobs) or tracked
        equipment / a jumping jack (deep fills). A lift compacted before the
        next one goes down can&apos;t collapse later. Clay-heavy fill
        compresses more than sandy fill, and deep fills need the higher end
        of the overage range. If you compact properly in lifts, the surface
        stays where you put it.
      </p>

      <h2>Filling an old swimming pool</h2>
      <p>
        A 16×32 pool averaging 5 feet deep holds about <strong>95 cubic
        yards</strong> of void (16 × 32 × 5 / 27 = 94.8) — before the
        walls, the deck demo debris, and compaction. The working number most
        contractors use: <strong>order 110–120 yards</strong>. At 1.1
        tons per yard that&apos;s 121–132 tons, roughly <strong>6–7
        tri-axle truckloads</strong> (about 18 yards per load), so schedule
        delivery across days and confirm site access for repeated heavy
        trucks. Two cost contexts frame the decision: a <strong>partial
        fill</strong> (punching drainage holes in the shell, breaking the top
        18–24 inches of walls down, engineered compacted fill) typically runs
        $3–7k, while <strong>full removal</strong> (pool shell excavated and
        hauled out) runs $9–19k. Partial fills are cheaper but can complicate
        future building on the spot — disclose it on any sale. And the
        permit note: most jurisdictions require a permit and inspection for
        pool decommissioning, often with compaction records. Check before the
        first truck arrives.
      </p>

      <h2>Fill dirt, then topsoil: the layering order</h2>
      <p>
        For any fill that ends in lawn, the layering is: <strong>fill dirt
        for the bulk, topsoil for the top 4–6 inches.</strong> Fill dirt is
        subsoil — cheap, stable, no organic matter. It&apos;s exactly what
        you want under a lawn and exactly what plants don&apos;t want around
        their roots. Using topsoil for deep fill is a double loss: it costs
        more per yard and settles more as its organic content breaks down.
        Rough in the grade with fill dirt, compact it, then cap with 4–6
        inches of screened topsoil for seed or sod. Our{" "}
        <a href="/guides/topsoil-vs-fill-dirt/">topsoil vs fill dirt
        guide</a> covers the full comparison if you&apos;re deciding between
        the two materials.
      </p>

      <h2>How many truckloads is that?</h2>
      <p>
        A tri-axle dump truck hauls roughly 18–20 yards of fill dirt per
        load (about 20–22 tons at 1.1 tons/yard). So the 13-yard low-spot
        fill is one load; the 17-yard leveling job is one load, maybe two if
        the truck is a smaller single-axle; and the 110–120 yard pool fill is
        <strong>6–7 full loads</strong>. That&apos;s the part to plan for on
        big fills: repeated heavy trucks need solid ground access, and the
        supplier may want the order split across days. For small holes under
        3 yards, many suppliers sell by the half yard with pickup in a
        trailer — a 2.67-yard hole is about what two full pickup beds carry,
        but check your truck&apos;s payload first (3 yards of fill dirt
        weighs over 3 tons).
      </p>

      <h2>Cost context</h2>
      <p>
        Bulk fill dirt typically runs <strong>$10–30 per cubic yard</strong>,
        with delivery fees of $50–150 depending on distance and load size.
        That puts a 3-yard hole fill at roughly $100–200 delivered, and a
        13-yard low-spot job at $200–500. The pool fill is a different animal:
        110–120 yards at $15–25/yard is $1,650–3,000 in material alone before
        the demolition and engineered compaction work — which is why partial
        fills land in the $3–7k range and full removals reach $9–19k.
        &ldquo;Free fill dirt&rdquo; from construction sites can work for
        non-structural fills, but verify what&apos;s in it before you accept
        a load.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Ordering the exact void volume.</strong> The #1
        under-ordering mistake — the surface sinks within a year.{" "}
        <strong>Filling deep holes in one dump.</strong> Loose fill bridges
        over voids; compact in lifts. <strong>Burying organic debris.</strong>{" "}
        Logs, brush, and demolition wood decompose and collapse — a
        guaranteed future sinkhole. Haul organics out.{" "}
        <strong>Topsoil for deep fill.</strong> Expensive, settles more, and
        buries your good soil where roots can&apos;t reach it.{" "}
        <strong>Skipping the permit on pool fills.</strong> Inspectors can
        order a completed fill reopened. <strong>Grading toward the
        house.</strong> Level the yard, but keep a gentle fall away from
        foundations — a flat yard with a wet basement is a bad trade.
      </p>

      <Faq items={faqs} heading="Fill Dirt FAQ" />
    </GuideArticle>
  );
}

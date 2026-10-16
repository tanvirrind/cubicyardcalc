import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Extra Soil Should I Order? (Settlement & the Buffer Rule)",
  description:
    "Soil settles after delivery: the fluff factor explained, settlement rates by material, order buffers by project type, worked examples, and the 10-20% buffer rule.",
  keywords: [
    "why does delivered dirt settle",
    "how much extra soil to order",
    "soil compaction factor",
    "how much does topsoil settle",
    "fluff factor dirt",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-extra-soil-to-order/" },
  openGraph: {
    title: "How Much Extra Soil Should I Order? | Cubic Yard Calculator",
    description:
      "The fluff factor, settlement rates by material, buffer rules by project, and worked ordering examples — so one delivery is enough.",
    url: "https://cubicyardcalculator.site/guides/how-much-extra-soil-to-order/",
  },
};

const faqs = [
  {
    q: "Why does delivered dirt settle?",
    a: "Bulk soil arrives loose — full of air from screening, loading, and the truck ride. Once it's placed, gravity, rain, and watering collapse those air pockets and the particles pack tighter. Topsoil typically settles 10 to 20%, fill dirt 10 to 15%, and sand about 5%. Gravel and crushed stone barely settle at all because the particles already interlock.",
  },
  {
    q: "How much extra soil should I order?",
    a: "Order 10 to 20% more than your calculated volume — that's the industry buffer rule. Use 10% for sand and small precise jobs, 15% as the default for topsoil and fill dirt, and 20% for decomposed granite or deep fills that will be mechanically compacted. Gravel needs no settlement buffer, just a small spillage allowance.",
  },
  {
    q: "How much does topsoil settle after rain?",
    a: "Expect 10 to 20% — a 6-inch layer of fresh topsoil ends up around 5 inches after a few good rains and waterings. The first big rain does most of the settling. That's why you order the buffer up front: topping off later means paying a second delivery fee that usually costs more than the extra yard would have.",
  },
  {
    q: "Does gravel settle like dirt?",
    a: "No. Clean gravel and crushed stone settle very little — roughly 0 to 5% — because the angular particles lock together instead of packing down. Order your calculated volume plus a small spillage allowance. Crusher run and road base are the exception: they contain fines and need about 15 to 20% extra loose material to reach the target compacted depth.",
  },
  {
    q: "Should I compact soil before or after I finish grading?",
    a: "Compact in lifts as you build up, not just at the end. Spread fill in 6 to 12-inch layers, compact each layer (plate compactor for granular soil, water plus time for clay-heavy fill), then place the next. Dumping two feet of loose fill and compacting only the top leaves soft pockets underneath that settle for years.",
  },
  {
    q: "What should I do with leftover dirt?",
    a: "Keep it on a tarp — you'll almost always find a low spot to top off after the first rain. Leftover topsoil is easy to give away or sell locally; clean fill dirt too. What you don't want is a second small delivery: most suppliers charge a minimum delivery fee, so a 1-yard top-off can cost nearly as much as the original load.",
  },
  {
    q: "How many tons is a cubic yard of topsoil?",
    a: "About 1.2 tons — topsoil weighs roughly 2,400 pounds per cubic yard. Fill dirt runs about 1.1 tons per yard (2,200 lb), sand about 1.35 tons (2,700 lb), and gravel about 1.4 tons (2,800 lb).",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Extra Soil Should I Order?"
      description="Delivered soil arrives fluffy and settles in place. The fluff factor, settlement rates by material, buffer rules by project, and worked examples — so one delivery is enough."
      slug="how-much-extra-soil-to-order"
      calculatorHref="/calculators/dirt-calculator/"
      calculatorLabel="Try the dirt calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        Order <strong>10–20% more soil than your calculated volume</strong> —
        that&apos;s the industry buffer rule, and it exists because a
        &ldquo;loose yard&rdquo; in the truck is not the same thing as a
        compacted yard in the ground. Use <strong>15% as your
        default</strong> for topsoil and fill dirt, 10% for sand, 20% for
        decomposed granite and deep compacted fills, and near-zero for clean
        gravel (it barely settles). The second delivery fee you avoid is
        almost always worth more than the extra yard costs.
      </p>

      <h2>The fluff factor, in plain English</h2>
      <p>
        Bulk soil is sold by the <strong>loose cubic yard</strong> — the
        volume it occupies fluffed up in the truck bed, full of air from
        screening, loading, and the ride over. Your project needs{" "}
        <strong>compacted cubic yards</strong> — the volume the same soil
        occupies after gravity, rain, and watering collapse the air pockets
        and the particles settle into each other. The difference between the
        two is the fluff factor, and it&apos;s why ordering your exact
        calculated volume always leaves you short.
      </p>
      <p>
        Think of it like a bag of chips: the bag&apos;s volume and the
        chips&apos; volume are not the same thing. A yard of topsoil that
        fills a 6-inch-deep bed on delivery day settles to roughly 5 inches
        after a few waterings — the soil didn&apos;t go anywhere, it just
        stopped being 20% air. Mechanical compaction (a plate compactor,
        roller, or just heavy equipment driving over it) speeds up the same
        process deliberately.
      </p>

      <h2>Settlement rates by material</h2>
      <p>
        Different materials carry different amounts of air and pack down
        differently. These are industry rules of thumb, not lab measurements
        — treat them as planning ranges:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material</th><th>Settles / compacts</th><th>Order buffer</th><th>Why</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Topsoil</td><td className="num">10–20%</td><td className="num">15%</td><td className="num">Screened and fluffy; organic matter compresses as it breaks down</td></tr>
          <tr><td className="num">Fill dirt</td><td className="num">10–15%</td><td className="num">15%</td><td className="num">Unscreened and variable; settles under its own weight plus rain</td></tr>
          <tr><td className="num">Sand</td><td className="num">~5%</td><td className="num">10%</td><td className="num">Particles are already dense; minimal air to lose</td></tr>
          <tr><td className="num">Decomposed granite</td><td className="num">15–20%</td><td className="num">20%</td><td className="num">Delivered loose, then compacted hard — buy the loose volume</td></tr>
          <tr><td className="num">Gravel / crushed stone</td><td className="num">~0%</td><td className="num">0–5%</td><td className="num">Angular pieces interlock; order exact plus spillage</td></tr>
          <tr><td className="num">Crusher run / road base</td><td className="num">15–20% when compacted</td><td className="num">15–20%</td><td className="num">The fines that make it pack are the air you&apos;re paying to lose</td></tr>
        </tbody>
      </table>
      <p>
        The decomposed granite and crusher run rows deserve emphasis: those
        buffers aren&apos;t really &ldquo;settlement&rdquo; — they&apos;re
        compaction loss you plan for. A 4-inch compacted DG path needs about
        5 inches of loose material to get there. Order the loose volume, not
        the finished depth.
      </p>

      <h2>Order buffers by project type</h2>
      <p>
        Material is half the story; what you&apos;re building with it is the
        other half. A raised bed and a pool fill both use &ldquo;dirt,&rdquo;
        but they settle for different reasons and want different buffers:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Buffer</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Raised beds / planters</td><td className="num">10–15%</td><td className="num">Loose screened soil settles hard after the first waterings; beds look half-empty by midsummer without it</td></tr>
          <tr><td className="num">Garden topsoil layer</td><td className="num">15–20%</td><td className="num">A 2-inch layer becomes ~1.75 in; order the high end if you&apos;re topdressing over existing grade</td></tr>
          <tr><td className="num">Grade raise / regrading</td><td className="num">10–15%</td><td className="num">Fill dirt compacts under its own weight and rain; see our <a href="/guides/how-much-dirt-to-regrade-a-yard/">regrade guide</a> for the full method</td></tr>
          <tr><td className="num">Paver / slab base (crusher run)</td><td className="num">15–20% extra loose</td><td className="num">Not settlement — this is the compaction loss to reach your target compacted depth; <a href="/guides/paver-base-sand-gravel-guide/">paver base guide</a></td></tr>
          <tr><td className="num">Pool fill / large backfill</td><td className="num">10–15% + plan a top-off</td><td className="num">Deep fills keep settling for a season; fill in lifts and expect to top off after the first rains — <a href="/guides/how-much-fill-dirt-to-fill-a-hole/">fill-a-hole guide</a></td></tr>
          <tr><td className="num">Gravel beds / paths</td><td className="num">0–5%</td><td className="num">No settlement to speak of; the buffer is just spillage and uneven subgrade</td></tr>
        </tbody>
      </table>

      <h2>Worked examples</h2>
      <p>
        <strong>Raised bed, 8 × 4 ft, 1 ft deep.</strong> Volume: 32 cu ft =
        1.19 cubic yards. Topsoil at a 15% buffer: 1.19 × 1.15 = 1.37 →{" "}
        <strong>order 1.5 yards</strong>. That extra third of a yard is what
        keeps the bed full after a month of watering.
      </p>
      <p>
        <strong>Grade raise, 20 × 20 ft, 4 inches deep.</strong> Volume: 133
        cu ft = 4.94 cubic yards. Fill dirt at 15%: 4.94 × 1.15 = 5.68 →{" "}
        <strong>order 6 yards</strong> (about 6.6 tons). Spread and compact
        it in two lifts rather than dumping all 6 inches at once.
      </p>
      <p>
        <strong>Topsoil layer, 2 inches over 500 sq ft.</strong> Volume: 83
        cu ft = 3.09 cubic yards. At 15%: 3.09 × 1.15 = 3.55 →{" "}
        <strong>order 4 yards</strong> (about 4.8 tons). Rounding up to the
        full yard is cheaper than a top-off delivery.
      </p>
      <p>
        <strong>Paver base, 200 sq ft, 4 inches compacted.</strong> Compacted
        volume: 66.7 cu ft = 2.47 cubic yards. Crusher run needs ~17% extra
        loose to compact to that depth: 2.47 × 1.17 = 2.89 →{" "}
        <strong>order 3 yards</strong>. Compact in 2-inch lifts with a plate
        compactor, watering lightly between passes.
      </p>
      <p>
        For the base calculation on any of these, our{" "}
        <a href="/calculators/dirt-calculator/">dirt calculator</a>,{" "}
        <a href="/calculators/fill-dirt-calculator/">fill dirt calculator</a>,
        and <a href="/calculators/topsoil-calculator/">topsoil calculator</a>{" "}
        handle the volume math — then apply the buffer from the tables above.
      </p>

      <h2>Rain settling vs mechanical compaction</h2>
      <p>
        Both collapse the air out of soil, but they are not interchangeable.{" "}
        <strong>Rain settles soil unevenly</strong> — low spots collect
        water and settle more, high spots less, which is how a freshly
        graded yard develops dips after the first storm. Rain is fine for
        the final settle of a garden bed, but it&apos;s a terrible way to
        compact structural fill. <strong>Mechanical compaction</strong> — a
        plate compactor for granular soils, a sheepsfoot or smooth roller
        for clay-heavy fill — densifies soil uniformly and immediately, in
        controlled lifts. The rule: compact anything that will carry weight
        (paver bases, slab subgrade, backfill against foundations) in{" "}
        <strong>6 to 12-inch lifts</strong>; let rain and time finish garden
        beds and non-structural fills. Watering a lift lightly before
        compacting helps particles slide into place — damp, not muddy.
      </p>

      <h2>Leftover soil vs the top-off order</h2>
      <p>
        The buffer rule means you&apos;ll sometimes have soil left over —
        that&apos;s the design working, not a mistake. <strong>Keep the
        leftover on a tarp</strong>, not on the lawn (it&apos;ll kill the
        grass underneath in a week). After the first good rain, walk the
        project: the low spots that appear are exactly what the leftover is
        for. Genuinely excess topsoil is easy to move — neighbors, community
        garden groups, and local listings absorb it fast.
      </p>
      <p>
        The scenario to avoid is the <strong>top-off order</strong>: you
        ordered exact, the project settled short, and now you need one more
        yard. Most suppliers charge a <strong>minimum delivery fee</strong>,
        so a single-yard top-off often costs nearly as much as a full small
        load. That fee is the entire economic argument for the buffer rule —
        a yard of extra dirt on day one is the cheapest dirt you&apos;ll
        ever buy.
      </p>

      <h2>Yards to tons for ordering</h2>
      <p>
        Bulk soil is often priced by the yard but hauled by weight — and
        truck capacity is a weight limit. Convert with the material&apos;s
        density:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material</th><th>Lbs per cubic yard</th><th>Tons per yard</th><th>6-yard load weighs</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Fill dirt</td><td className="num">2,200</td><td className="num">1.1</td><td className="num">6.6 tons</td></tr>
          <tr><td className="num">Topsoil</td><td className="num">2,400</td><td className="num">1.2</td><td className="num">7.2 tons</td></tr>
          <tr><td className="num">Sand</td><td className="num">2,700</td><td className="num">1.35</td><td className="num">8.1 tons</td></tr>
          <tr><td className="num">Gravel</td><td className="num">2,800</td><td className="num">1.4</td><td className="num">8.4 tons</td></tr>
        </tbody>
      </table>
      <p>
        For delivery planning: a pickup truck carries roughly 2–3 yards, a
        single-axle dump truck 8–10 yards, and a tandem-axle dump 16–20 yards
        — weight permitting. Wet soil weighs noticeably more than dry, so a
        load ordered after heavy rain can push a truck&apos;s limit sooner
        than the yardage suggests.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Ordering exact calculated yards.</strong> The fluff factor
        guarantees a shortfall — the buffer isn&apos;t optional padding,
        it&apos;s the real quantity. <strong>Compacting only at
        the end.</strong> Deep fill compacted once on top hides soft layers
        underneath; work in lifts. <strong>Treating bagged and bulk yards
        as equal.</strong> Bagged soil is denser than bulk loose yards —
        don&apos;t mix the two unit systems in one estimate.{" "}
        <strong>Forgetting the delivery minimum.</strong> Price the job
        including delivery fees before deciding the buffer is
        &ldquo;waste.&rdquo; <strong>Compacting garden beds like a paver
        base.</strong> Plant roots need loose soil — settle beds with water,
        not a plate compactor.
      </p>

      <Faq items={faqs} heading="Extra Soil Ordering FAQ" />
    </GuideArticle>
  );
}

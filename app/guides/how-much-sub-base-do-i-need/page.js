import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Sub-Base (Crushed Stone) Do I Need for a Driveway or Patio?",
  description:
    "Sub-base quantity guide: depth tables for driveways, patios, and shed bases, the cubic-yard formula, tons-per-yard conversions for every crushed-stone type, and the compaction adjustment most people forget.",
  keywords: [
    "how much sub base do i need",
    "how much crushed stone for a driveway",
    "how many tons of sub base for a driveway",
    "sub base depth for patio",
    "how much road base for a driveway",
    "crusher run calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-sub-base-do-i-need/" },
  openGraph: {
    title: "How Much Sub-Base (Crushed Stone) Do I Need? | Cubic Yard Calculator",
    description:
      "Depth tables, the yard formula, tons conversions by stone type, and the compaction factor — order the right amount the first time.",
    url: "https://cubicyardcalculator.site/guides/how-much-sub-base-do-i-need/",
  },
};

const faqs = [
  {
    q: "What is a sub-base, and is it different from a base layer?",
    a: "The sub-base is the load-bearing layer of crushed stone laid directly on the graded soil, under the surface layer. Terminology varies by trade and region — pavers installers often call the crushed-stone layer the 'base' and the sand above it the 'bedding layer', while driveway builders say sub-base for the bottom stone and base for the middle layer. Whatever you call it, its job is the same: spread the load so the soil underneath doesn't rut.",
  },
  {
    q: "How deep should the sub-base be for a driveway?",
    a: "4 to 6 inches of compacted sub-base for a residential driveway carrying cars and light trucks; 6 to 8 inches if it takes delivery trucks, RVs, or boat trailers regularly. Patios and walkways need 4 inches compacted, shed bases 3 to 4 inches. These are compacted depths — with crusher run you order 15 to 20% more loose material to get there.",
  },
  {
    q: "How many tons of sub-base is that per square foot?",
    a: "One square foot at 4 inches deep is 0.01235 cubic yards, which at 1.4 tons per yard (typical crushed stone) weighs about 35 pounds — roughly 0.017 tons. So a 20×40 ft driveway at 4 inches needs 9.88 cubic yards, or about 13.8 tons. Multiply your area by the tons-per-yard of your stone type (1.325 to 1.45 depending on the crushed stone) to get your number.",
  },
  {
    q: "Can I just use regular gravel instead of crusher run for a sub-base?",
    a: "You can, but it performs worse. Clean gravel (no fines) doesn't compact into a rigid layer — the stones shift under load and the surface ruts. Crusher run, road base, or dense-grade aggregate include rock dust and small chips that fill the voids and lock the layer into an almost pavement-like bed under a plate compactor. Use clean gravel only for drainage layers where water needs to pass through freely.",
  },
  {
    q: "Do I really need to compact the sub-base?",
    a: "Yes — compaction is the whole point of the layer. Uncompacted stone is just expensive gravel sitting on dirt; it settles unevenly and your surface follows. Spread stone in 2 to 3-inch lifts and run a plate compactor over each one, misting lightly with water between passes. Skipping compaction is the most common reason DIY driveways and patios develop dips within two years.",
  },
  {
    q: "Do I need landscape fabric under the sub-base?",
    a: "On clay, low-lying, or soft soil, yes — lay woven geotextile fabric (not cheap weed barrier) on the graded soil before the first stone goes down. It stops the sub-base from sinking into soft ground and mixing with the soil, which can cost you an extra inch of stone you never planned for. On firm, well-drained soil you can skip it.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Sub-Base (Crushed Stone) Do I Need?"
      description="The sub-base is the hidden layer that decides whether your driveway or patio stays flat. Depth tables, the cubic-yard formula, tons conversions by stone type, and the compaction adjustment."
      slug="how-much-sub-base-do-i-need"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
      updated="2026-10"
      toc={[
        { id: "the-short-answer", label: "The short answer" },
        { id: "what-a-sub-base-actually-does", label: "What a sub-base actually does" },
        { id: "the-formula-then-the-depths", label: "The formula, then the depths" },
        { id: "cubic-yards-to-tons-by-stone-type", label: "Cubic yards to tons, by stone type" },
        { id: "worked-examples", label: "Worked examples" },
        { id: "which-material-to-actually-order", label: "Which material to actually order" },
        { id: "the-compaction-adjustment-explained", label: "The compaction adjustment, explained" },
        { id: "common-mistakes", label: "Common mistakes" },
      ]}
      references={[
        "Site's published density variants (lib/calc.js)",
        "ASTM C33 aggregate density ranges",
        "UK sub-base terminology (hardcore / MOT Type 1) noted for naming equivalence; quantities use US crusher-run / road-base classes.",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        For a <strong>residential driveway</strong>, plan on{" "}
        <strong>4–6 inches of compacted crushed stone</strong>; for a{" "}
        <strong>patio</strong>, <strong>4 inches</strong>; for a{" "}
        <strong>shed base</strong>, <strong>3–4 inches</strong>. The formula
        is the same as every bulk-material job: <strong>length × width ×
        depth in feet, divided by 27</strong> gives cubic yards, then
        multiply by your stone&apos;s weight — <strong>1.4 tons per cubic
        yard</strong> for typical crushed stone — to get tons. A 20 × 40 ft
        driveway at 4 inches needs <strong>9.88 cubic yards ≈ 13.8
        tons</strong>. One catch: those are <em>compacted</em> depths, and
        you order <em>loose</em> material — with crusher run, add 15–20% to
        reach your finished depth.
      </p>

      <h2 id="what-a-sub-base-actually-does">What a sub-base actually does</h2>
      <p>
        Every paved or gravel surface that lasts is a stack of layers, and
        the sub-base is the load-bearing one — a bed of crushed stone laid
        directly on graded soil, under the surface you actually see and
        walk on. Its job is to <strong>spread point loads across a wider
        area</strong> so the soil underneath doesn&apos;t compress, rut, or
        pump up through the surface. Car tires, paver slabs, and shed floors
        all concentrate weight into small footprints; the sub-base turns
        those footprints into a distributed load the ground can actually
        carry.
      </p>
      <p>
        Names vary and that causes real confusion. Paver installers tend to
        call the crushed-stone layer the &ldquo;base&rdquo; and the inch of
        sand above it the &ldquo;bedding layer.&rdquo; Driveway builders
        often say &ldquo;sub-base&rdquo; for the bottom stone and
        &ldquo;base&rdquo; for the middle layer in a three-layer build. A
        supplier may call the same material crusher run, road base, dense
        grade, 21A, or ABC stone. Don&apos;t get hung up on the label — ask
        whether the material has <strong>fines</strong> (the rock dust that
        lets it compact into a rigid bed). If it does, it works as a
        sub-base; if it&apos;s clean washed stone with no dust, it&apos;s a
        drainage layer, not a structural one. (In the UK this layer is
        called hardcore or MOT Type 1, but the math — depth × area, then
        convert to tons — is identical.)
      </p>

      <h2 id="the-formula-then-the-depths">The formula, then the depths</h2>
      <p>
        Sub-base quantity is volume math with a unit conversion at the end:
      </p>
      <p>
        <strong>1.</strong> Measure length and width in feet.{" "}
        <strong>2.</strong> Pick your <em>compacted</em> depth from the
        table below and convert inches to feet (divide by 12).{" "}
        <strong>3.</strong> Multiply: length × width × depth in feet, then
        divide by 27 — that&apos;s <strong>cubic yards of compacted
        material</strong>. <strong>4.</strong> Multiply by your stone&apos;s
        tons per cubic yard for the tonnage, then <strong>add the
        compaction adjustment</strong> (15–20% for crusher run) to get the
        loose quantity you actually order.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Compacted depth</th><th>Order the loose equivalent</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Residential driveway (cars, light trucks)</td><td className="num">4–6 in</td><td className="num">4.6–7.2 in loose</td><td className="num">Go 6 in if the soil is clay or the drive sees daily use</td></tr>
          <tr><td className="num">Heavy-vehicle pad (RV, boat, deliveries)</td><td className="num">6–8 in</td><td className="num">6.9–9.6 in loose</td><td className="num">Two 3–4 in lifts, each compacted separately</td></tr>
          <tr><td className="num">Patio / paver base</td><td className="num">4 in</td><td className="num">~4.6 in loose</td><td className="num">Plus 1 in of bedding sand above; see our <a href="/guides/paver-base-sand-gravel-guide/">paver base guide</a></td></tr>
          <tr><td className="num">Shed base</td><td className="num">3–4 in</td><td className="num">3.5–4.8 in loose</td><td className="num">Extend 6–12 in beyond the shed footprint</td></tr>
          <tr><td className="num">Walkway</td><td className="num">3–4 in</td><td className="num">3.5–4.8 in loose</td><td className="num">4 in if the soil is soft or the path takes mower traffic</td></tr>
          <tr><td className="num">Gravel parking area</td><td className="num">4–6 in</td><td className="num">4.6–7.2 in loose</td><td className="num">Crown the surface ¼ in per foot for drainage</td></tr>
        </tbody>
      </table>
      <p>
        &ldquo;Order the loose equivalent&rdquo; assumes crusher run or
        road base compacted to about 17% — the midpoint of the 15–20%
        compaction loss these materials need (see our{" "}
        <a href="/guides/how-much-extra-soil-to-order/">settlement and
        ordering guide</a> for the full tables). Clean #57 stone barely
        compacts at all, so its loose and compacted volumes are nearly the
        same — but clean stone also makes a weaker sub-base, which is why
        crusher run is the default choice below.
      </p>

      <h2 id="cubic-yards-to-tons-by-stone-type">Cubic yards to tons, by stone type</h2>
      <p>
        Suppliers usually quote sub-base <strong>by the ton</strong> and
        deliver <strong>by the yard</strong>, so you need both numbers.
        Tons per cubic yard depend on the stone — these are this site&apos;s
        published bulk densities, and the calculator uses the same values,
        so the page, the tables, and the tool can never disagree:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Stone type</th><th>Lbs per cubic yard</th><th>Tons per cubic yard</th><th>Sub-base use</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Crushed stone (typical)</td><td className="num">2,800</td><td className="num">1.40</td><td className="num">The default — crusher run / road base lives here</td></tr>
          <tr><td className="num">Pea gravel</td><td className="num">2,700</td><td className="num">1.35</td><td className="num">Poor sub-base: round, no interlock — skip for structure</td></tr>
          <tr><td className="num">River rock</td><td className="num">2,900</td><td className="num">1.45</td><td className="num">Same problem as pea gravel — decorative, not structural</td></tr>
          <tr><td className="num">Crushed concrete (RCA)</td><td className="num">2,900</td><td className="num">1.45</td><td className="num">Good budget sub-base where available — compacts well</td></tr>
          <tr><td className="num">Decomposed granite</td><td className="num">2,650</td><td className="num">1.325</td><td className="num">Better as a path surface than a structural sub-base</td></tr>
        </tbody>
      </table>
      <p>
        In practice: if your supplier sells &ldquo;crusher run,&rdquo;
        &ldquo;dense grade,&rdquo; or &ldquo;road base,&rdquo; use{" "}
        <strong>1.4 tons per yard</strong>. Across every common crushed
        stone the real range is only <strong>1.325–1.45 tons/yd³</strong>,
        so an estimate built on 1.4 lands within a few percent either way.
        Run the volume through our{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a> or{" "}
        <a href="/calculators/gravel-to-tons-calculator/">gravel-to-tons
        converter</a> and pick your stone type from the density dropdown —
        the weights follow automatically.
      </p>

      <h2 id="worked-examples">Worked examples</h2>
      <p>
        <strong>Driveway, 20 × 40 ft, 4 in compacted crusher run.</strong>{" "}
        Area: 800 sq ft. Depth: 4 ÷ 12 = ⅓ ft. Volume: 800 × ⅓ = 266.7 cu
        ft = <strong>9.88 cubic yards</strong> compacted. At 1.4 tons/yd³:
        9.88 × 1.4 = <strong>13.8 tons</strong>. Add the ~17% compaction
        adjustment: 9.88 × 1.17 = 11.56 loose yards →{" "}
        <strong>order 12 yards</strong> (≈ 16.8 tons at 1.4). That&apos;s the
        full order — compacted depth, loose delivery, and tons in one pass.
      </p>
      <p>
        <strong>Patio, 12 × 16 ft, 4 in compacted sub-base.</strong>{" "}
        192 sq ft × ⅓ ft = 64 cu ft = <strong>2.37 cubic yards</strong>{" "}
        compacted (3.3 tons at 1.4). Loose with the 15% adjustment: 2.37 ×
        1.15 = 2.73 → <strong>order 3 yards</strong>. Our{" "}
        <a href="/guides/paver-base-sand-gravel-guide/">paver base
        guide</a> adds the bedding-sand inch on top of this.
      </p>
      <p>
        <strong>Shed base, 10 × 12 ft, 4 in.</strong> 120 sq ft × ⅓ ft = 40
        cu ft = <strong>1.48 cubic yards</strong> (≈ 2.1 tons). Loose: 1.48
        × 1.15 = 1.70 → <strong>order 2 yards</strong>. One delivery, one
        job — see our <a href="/guides/how-much-gravel-for-a-shed-base/">shed
        base guide</a> for the full build.
      </p>
      <p>
        <strong>Quick per-foot rule.</strong> One square foot at 4 inches
        deep is 0.0124 cubic yards — about 35 lb (0.017 tons) of crushed
        stone at 1.4 t/yd³. For a rough price check, multiply your square
        footage by 35 lb and by 1.4 at 6 inches instead.
      </p>

      <h2 id="which-material-to-actually-order">Which material to actually order</h2>
      <p>
        The name on the ticket matters less than the particle mix. What you
        want is <strong>angular crushed stone with fines</strong> — stone
        broken by a crusher, with rock dust and chips mixed in. The dust
        fills the voids between the larger pieces under the plate
        compactor, and that&apos;s what turns loose stone into a rigid,
        almost pavement-like bed. Sold regionally as crusher run, ¾-inch
        minus, dense grade, road base, 21A, or ABC — they&apos;re the same
        idea in different quarries. For a side-by-side on the decorative
        side of the family, see our{" "}
        <a href="/guides/crushed-stone-vs-pea-gravel/">crushed stone vs pea
        gravel guide</a>.
      </p>
      <p>
        <strong>Recycled concrete aggregate (RCA)</strong> is worth asking
        about: it compacts well, drains acceptably, and often costs 20–40%
        less than virgin stone. The one caution is consistency — ask whether
        it&apos;s screened to a uniform size and free of rebar and trash,
        especially for the top inch under pavers. <strong>Decomposed
        granite</strong> makes a beautiful path surface but a mediocre
        structural sub-base; it needs about 20% extra loose to compact and
        still stays softer than crusher run. And skip <strong>pea gravel
        and river rock</strong> for structure entirely — round stones roll
        instead of interlocking, which is exactly what you don&apos;t want
        under load.
      </p>

      <h2 id="the-compaction-adjustment-explained">The compaction adjustment, explained</h2>
      <p>
        This is the step that strands DIYers a yard short. A 4-inch
        <em>compacted</em> layer of crusher run needs roughly{" "}
        <strong>4.6–4.8 inches of <em>loose</em> material</strong> to get
        there — the 15–20% the fines give up as they pack into the voids.
        Clean #57 stone is the opposite: it barely compacts, so loose and
        finished volumes are nearly equal, but you&apos;ve traded away the
        interlock that makes a sub-base work. The rule: <strong>order loose
        volume, design to compacted depth</strong>, and spread the loose
        stone in <strong>2 to 3-inch lifts</strong>, compacting each lift
        with a plate compactor (mist lightly with water between passes —
        damp stone compacts tighter than dry).
      </p>
      <p>
        For driveways, see our full{" "}
        <a href="/guides/how-much-gravel-for-a-driveway/">driveway gravel
        guide</a> for the three-layer build (large base stone, #57 middle,
        crusher run top) with tons tables by driveway size. For ordering
        strategy — why the buffer beats a second delivery — our{" "}
        <a href="/guides/how-much-extra-soil-to-order/">settlement
        guide</a> covers the economics.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        <strong>Ordering compacted yards instead of loose yards.</strong>{" "}
        The 15–20% shortfall shows up exactly when the truck is leaving.{" "}
        <strong>Dumping all the stone at once and compacting the top.</strong>{" "}
        The bottom stays soft and settles for years — work in lifts.{" "}
        <strong>Using clean decorative stone as structure.</strong> Pea
        gravel and river rock belong on top of a path, not under a driveway.{" "}
        <strong>Skipping fabric on soft soil.</strong> Without a separator,
        the sub-base sinks into clay and you effectively lose an inch of
        paid-for stone. <strong>Forgetting the crown.</strong> A dead-flat
        driveway holds water; crown it about ¼ inch per foot from center
        to edge so it sheds.
      </p>

      <Faq items={faqs} heading="Sub-Base FAQ" />
    </GuideArticle>
  );
}

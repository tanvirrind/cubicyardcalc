import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Gravel Do I Need for a Driveway? (Tons Table)",
  description:
    "Gravel driveway math in cubic yards and tons: reference tables by driveway size and depth, the 3-layer build, cost per ton, and delivery tips. Free driveway gravel calculator.",
  keywords: [
    "how much gravel do i need for a driveway",
    "gravel driveway depth",
    "how many tons of gravel for a driveway",
    "driveway gravel calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-gravel-for-a-driveway/" },
  openGraph: {
    title: "How Much Gravel Do I Need for a Driveway? (Tons Table) | Cubic Yard Calculator",
    description:
      "Tons and cubic yards by driveway size and depth, the 3-layer build, and cost math. Free driveway gravel calculator.",
    url: "https://cubicyardcalculator.site/guides/how-much-gravel-for-a-driveway/",
  },
};

const faqs = [
  {
    q: "How deep should a gravel driveway be?",
    a: "4 to 6 inches for most residential driveways. A 3-inch top-up refreshes an existing drive, 4 to 6 inches rebuilds a worn one, and 8 to 12 inches of layered stone is the spec for a brand-new driveway over bare soil.",
  },
  {
    q: "How many tons of gravel do I need for a 2-car driveway?",
    a: "A 20×20 ft 2-car pad needs about 6.9 tons at 4 inches deep or 13.8 tons at 8 inches. Order gravel by the ton — a cubic yard of gravel weighs about 1.4 tons, so multiply your cubic yards by 1.4.",
  },
  {
    q: "What size gravel is best for a driveway?",
    a: "Build in layers: large #3 stone (about 2–3 inches) for the base, #57 stone (about 1 inch) in the middle, and crusher run (¾-inch minus, fines included) on top. The angular crusher run locks together and forms the drivable surface — round pea gravel never compacts and migrates.",
  },
  {
    q: "Do I need fabric under a gravel driveway?",
    a: "Yes on soft, wet, or clay-heavy soil. Geotextile fabric separates the stone from the mud and stops it sinking out of sight. On firm, well-drained ground you can skip it, but it is cheap insurance either way.",
  },
  {
    q: "How often should I top up a gravel driveway?",
    a: "Most driveways need a top-up every 2 to 4 years — typically 3 inches of crusher run over the worn areas. If you are adding stone yearly, the base is too thin or missing; rebuild with proper depth instead of feeding it forever.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Gravel Do I Need for a Driveway?"
      description="The exact formula, the tons-vs-yards table by driveway size, the 3-layer build that actually lasts, and the cost math — so you order once, not twice."
      slug="how-much-gravel-for-a-driveway"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
      updated="2026-10-12"
      toc={[
        { id: "the-short-answer", label: "The short answer" },
        { id: "tons-and-cubic-yards-by-driveway-size", label: "Tons and cubic yards by driveway size" },
        { id: "choose-the-right-depth-first", label: "Choose the right depth first" },
        { id: "build-it-in-three-layers-the-build-that-survives", label: "Build it in three layers — the build that survives" },
        { id: "geotextile-fabric-on-soft-soil", label: "Geotextile fabric on soft soil" },
        { id: "what-it-costs-typical-2026-us", label: "What it costs (typical 2026 US)" },
        { id: "order-loose-and-order-a-little-extra", label: "Order loose, and order a little extra" },
        { id: "crown-and-drainage-the-invisible-half-of-the-job", label: "Crown and drainage: the invisible half of the job" },
        { id: "common-mistakes", label: "Common mistakes" },
      ]}
      references={[
        "Material densities: published bulk-material density tables cross-checked against supplier data (see /data-sources/).",
        "ASTM C33 aggregate density ranges",
        "Pricing: published contractor cost guides and supplier listings, checked October 2026.",
        "Typical gravel driveway installation practice — three compacted layers, geotextile over soft soil, crowning and drainage.",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        Gravel is ordered by the <strong>ton</strong>, not the cubic yard.
        Figure your volume first: length × width × (depth in inches ÷ 12) ÷
        27 gives cubic yards. Then multiply by <strong>1.4</strong> — a cubic
        yard of gravel weighs about 2,800 lbs, or 1.4 tons. A 20×20 ft
        two-car pad at 4 inches deep: (20 × 20 × 0.333) / 27 ={" "}
        <strong>4.94 cubic yards</strong>, × 1.4 = <strong>6.9 tons</strong>.
        Order 7 to 8 tons with overage and you&apos;ll have a little left for
        low spots. Need a one-click version? The{" "}
        <a href="/calculators/gravel-to-tons-calculator/">gravel-to-tons calculator</a>{" "}
        does the whole conversion for you.
      </p>

      <h2 id="tons-and-cubic-yards-by-driveway-size">Tons and cubic yards by driveway size</h2>
      <p>
        Find your driveway size below and read across to your target depth.
        Each cell shows cubic yards, then tons. These figures assume a flat
        rectangle; add 10% for irregular shapes and another pass for
        compaction loss.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Driveway size</th><th>4 inches</th><th>6 inches</th><th>8 inches</th></tr>
        </thead>
        <tbody>
          <tr><td>10 × 20 ft (1-car pad)</td><td className="num">2.47 yd³ / 3.5 t</td><td className="num">3.70 yd³ / 5.2 t</td><td className="num">4.94 yd³ / 6.9 t</td></tr>
          <tr><td>20 × 20 ft (2-car pad)</td><td className="num">4.94 yd³ / 6.9 t</td><td className="num">7.41 yd³ / 10.4 t</td><td className="num">9.88 yd³ / 13.8 t</td></tr>
          <tr><td>12 × 50 ft (driveway lane)</td><td className="num">7.41 yd³ / 10.4 t</td><td className="num">11.11 yd³ / 15.6 t</td><td className="num">14.81 yd³ / 20.7 t</td></tr>
          <tr><td>12 × 100 ft (long driveway)</td><td className="num">14.81 yd³ / 20.7 t</td><td className="num">22.22 yd³ / 31.1 t</td><td className="num">29.63 yd³ / 41.5 t</td></tr>
        </tbody>
      </table>
      <p>
        Delivery reality check: most dump trucks haul 15 to 20 tons per load.
        Anything under ~15 tons arrives as one full or partial load; the
        12×100 lane at 6 inches (31.1 tons) needs two trips. Ask the quarry
        for delivered-per-ton pricing — hauling is often where the quote
        balloons.
      </p>

      <h2 id="choose-the-right-depth-first">Choose the right depth first</h2>
      <p>
        Depth is the number that decides everything else, and it depends on
        what you&apos;re doing. A <strong>3-inch top-up</strong> refreshes a
        drive whose base is still sound — spread crusher run over the worn
        areas and roll it in. A <strong>4 to 6-inch</strong> layer rebuilds a
        driveway that has thinned, rutted, or grown soft. A <strong>new
        driveway over bare soil</strong> wants 8 to 12 inches of stone,
        built in compacted lifts (see the 3-layer method below), because a
        single thin layer on soft ground simply sinks and disappears. When
        in doubt, the middle of each range is the safer bet — stone is
        cheap, and doing it twice is not.
      </p>

      <h2 id="build-it-in-three-layers-the-build-that-survives">Build it in three layers — the build that survives</h2>
      <p>
        The driveways that last decades are not one thick pour of gravel.
        They are three purpose-built layers, each compacted before the next
        goes down:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Layer</th><th>Stone</th><th>Depth</th><th>Job</th></tr>
        </thead>
        <tbody>
          <tr><td>Base</td><td>#3 stone (about 2–3 in)</td><td className="num">4–6 in</td><td>Bridges soft soil, carries the load</td></tr>
          <tr><td>Middle</td><td>#57 stone (about 1 in)</td><td className="num">2–4 in</td><td>Transition layer, locks the base together</td></tr>
          <tr><td>Top</td><td>Crusher run (¾ in minus)</td><td className="num">2–4 in</td><td>Drivable surface — the fines bind it into a firm crust</td></tr>
        </tbody>
      </table>
      <p>
        The top layer is the one that matters most. <strong>Crusher
        run</strong> — sometimes sold as &ldquo;dense grade&rdquo; or
        &ldquo;¾-inch minus&rdquo; — is crushed stone with the rock dust
        still in it, and that dust is the whole trick: it compacts into a
        dense, almost pavement-like surface. Use angular, crushed stone
        everywhere, because angular edges interlock while round edges roll.
        That is why <strong>pea gravel is a poor driveway
        choice</strong> — it looks lovely, then migrates to the lawn every
        time a tire turns on it.
      </p>
      <p>
        The base layer is where the quantity math matters most: for depth
        tables, the cubic-yard formula, tons conversions by stone type, and
        the compaction adjustment, see our{" "}
        <a href="/guides/how-much-sub-base-do-i-need/">sub-base quantity
        guide</a>.
      </p>

      <h2 id="geotextile-fabric-on-soft-soil">Geotextile fabric on soft soil</h2>
      <p>
        If your ground is clay, low-lying, or squelches after rain, lay{" "}
        <strong>woven geotextile fabric</strong> on the graded soil before
        the first stone goes down. It is a separator, not a weed barrier: it
        stops the base layer from being pushed down into the mud and the mud
        from pumping up into the stone. Without it, the bottom 2 to 3
        inches of an expensive stone base can simply vanish into the earth
        in a season. On firm, well-drained ground you can skip it — but a
        roll of fabric costs far less than a second base layer, so many
        builders lay it regardless.
      </p>

      <h2 id="what-it-costs-typical-2026-us">What it costs (typical 2026 US)</h2>
      <p>
        Crusher-run gravel typically runs <strong>$30 to $55 per
        ton</strong> delivered (typical 2026 US), with rural quarries near
        the low end and urban delivery near the high end. The math is
        simple: tons × per-ton price. That 12×50 ft lane at 6 inches needs
        15.6 tons — at $40/ton, about <strong>$625 delivered</strong>. Add
        the rental of a plate compactor ($50–$80/day) and a roll of
        geotextile fabric ($50–$120 depending on size) if you&apos;re doing
        the full build. A fresh 3-inch top-up on the same lane costs roughly
        half the material — which is exactly why a solid base is the
        cheapest money you will ever spend on a driveway.
      </p>

      <h2 id="order-loose-and-order-a-little-extra">Order loose, and order a little extra</h2>
      <p>
        Buy driveway stone <strong>loose by the ton from a quarry or
        landscape supplier</strong>, not in big-box bags — bagged gravel
        costs several times more per ton and only makes sense for
        patching a pothole. Add <strong>10% overage</strong> to the table
        figures: compaction eats volume, edges spill, and the first
        delivery never quite covers the low spots you find while
        grading. A partial second load costs more in hauling than the
        extra ton would have on the first truck. Also confirm access
        before ordering: a loaded tri-axle needs about 12 feet of width
        and 14 feet of overhead clearance, and soft lawns in spring
        will rut under it — have the driver dump on the street or a
        firm pad if needed.
      </p>

      <h2 id="crown-and-drainage-the-invisible-half-of-the-job">Crown and drainage: the invisible half of the job</h2>
      <p>
        A flat driveway is a pond. Grade the surface with a slight{" "}
        <strong>crown</strong> — the center 1 to 2 inches higher than the
        edges — so rain sheds sideways instead of pooling and carving
        ruts. On slopes, cut shallow ditches or add a culvert where water
        crosses, and never let roof downspouts discharge onto the drive.
        Eighty percent of failed gravel driveways are drainage failures
        wearing a stone disguise.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        <strong>One layer, any depth.</strong> A single thick layer of one
        stone size never compacts properly — it shifts, ruts, and washes.
        Build the three layers. <strong>No edging.</strong> Without a
        steel, timber, or stone edge, gravel walks into the lawn a few
        feet every year; edging is cheap insurance. <strong>Too thin on a
        new drive.</strong> Three inches over bare clay is a stone-flavored
        mud patch, not a driveway. <strong>Ordering before
        grading.</strong> Excavate, crown, and compact the soil first, or
        your tonnage math is fiction. <strong>Skipping the fabric on wet
        soil.</strong> See above — the ground will eat your base.
      </p>

      <Faq items={faqs} heading="Gravel Driveway FAQ" />
    </GuideArticle>
  );
}

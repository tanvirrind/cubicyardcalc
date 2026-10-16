import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Gravel Under a Concrete Slab? (Depth, Yards & Tons)",
  description:
    "Gravel under a concrete slab: depth by slab use (4 vs 6 inches), yards-and-tons tables for standard footprints, which stone to order, and compaction in lifts.",
  keywords: [
    "how much gravel under a concrete slab",
    "gravel base depth for concrete slab",
    "subbase gravel for shed slab",
    "how thick gravel under concrete",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-gravel-under-a-concrete-slab/" },
  openGraph: {
    title: "How Much Gravel Under a Concrete Slab? | Cubic Yard Calculator",
    description:
      "Depth, yards, and tons for the gravel base under any concrete slab — worked example, footprint tables, stone selection, and compaction.",
    url: "https://cubicyardcalculator.site/guides/how-much-gravel-under-a-concrete-slab/",
  },
};

const faqs = [
  {
    q: "How thick should gravel be under a concrete slab?",
    a: "4 inches for patios, walkways, and shed pads; 6 inches for driveways, parking pads, and garages that carry vehicles. The gravel goes under the concrete, not in it — the slab thickness itself (usually 4 inches for residential) sits on top of the compacted base. Anything structural or commercial follows engineered plans.",
  },
  {
    q: "How much gravel do I need for a 20x20 concrete slab?",
    a: "At 4 inches deep: 20 × 20 × (1/3) ÷ 27 = 4.94 cubic yards, so order 5.5 yards (about 7.7 tons with 10% overage). At 6 inches deep: 7.41 yards, so order about 8.25 yards (~11.5 tons). See the footprint tables below for other sizes.",
  },
  {
    q: "What kind of gravel goes under a concrete slab?",
    a: "#57 stone (clean, angular, 1/2 to 1 inch) or crusher run (angular stone with dust that packs hard). Both drain and compact well. Do not use pea gravel — its rounded shape shifts under load and never locks into a stable base, which lets the slab settle unevenly.",
  },
  {
    q: "Do I need gravel under a concrete slab on clay soil?",
    a: "Yes — especially on clay. The gravel base breaks capillary action so groundwater cannot wick up into the slab, and it gives freeze-thaw expansion somewhere harmless to go instead of heaving the concrete. On clay, use the full 6 inches, lay woven geotextile fabric between soil and stone, and make sure water drains away from the slab edge.",
  },
  {
    q: "Can I pour concrete directly on dirt without gravel?",
    a: "You can, but you inherit every problem gravel prevents: the slab wicks moisture from the soil, freeze-thaw heaves it, and soft spots in the dirt settle and crack the concrete. The gravel base is the cheapest insurance in the whole project — typically under 10% of the job cost.",
  },
  {
    q: "Should the gravel under a slab be compacted?",
    a: "Yes, in 3–4 inch lifts with a plate compactor. Dumping the full 6 inches at once and rolling only the top leaves the bottom loose, and it will settle later — taking the slab with it. Compact each lift until the compactor stops leaving marks, then add the next.",
  },
  {
    q: "Do I need a vapor barrier over the gravel under a slab?",
    a: "For any interior slab (garage, basement, workshop): yes. Lay 10-mil polyethylene sheeting over the compacted gravel before the pour, lapped and taped at seams. It stops ground moisture from migrating through the concrete into the building. For exterior slabs like patios, a vapor barrier is unnecessary and can trap water.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Gravel Under a Concrete Slab? (Depth, Yards & Tons)"
      description="The gravel base is the cheapest insurance in a concrete project. Depth by slab use, yards-and-tons tables for standard footprints, a worked example, and which stone to order."
      slug="how-much-gravel-under-a-concrete-slab"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        Put <strong>4 inches of compacted gravel under patios, walkways, and
        shed pads</strong>, and <strong>6 inches under driveways, parking pads,
        and garages</strong> that carry vehicles. The math is one formula:{" "}
        <strong>length × width × depth (in feet) ÷ 27 = cubic yards</strong>,
        then <strong>multiply yards by 1.4 for tons</strong>. A 20×20 slab at 4
        inches needs about <strong>5 yards (7 tons)</strong>; at 6 inches it
        needs about <strong>7.5 yards (10.5 tons)</strong>. Order{" "}
        <strong>#57 stone or crusher run</strong> — never pea gravel — and
        compact it in lifts.
      </p>

      <h2>Depth by slab use</h2>
      <p>
        Depth is decided by load, not by preference. The gravel sits{" "}
        <em>under</em> the concrete — the slab itself (typically 4 inches for
        residential work) pours on top of the finished base:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Slab use</th><th>Gravel depth</th><th>Why</th></tr>
        </thead>
        <tbody>
          <tr><td>Patio, walkway</td><td className="num">4&Prime;</td><td>Foot traffic only; drainage and frost protection are the jobs</td></tr>
          <tr><td>Shed pad, small outbuilding</td><td className="num">4&Prime;–6&Prime;</td><td>4&Prime; for light sheds; 6&Prime; for heavy equipment or riding mowers stored inside</td></tr>
          <tr><td>Driveway / parking pad</td><td className="num">6&Prime;</td><td>Vehicle loads; resists rutting and pumping under tires</td></tr>
          <tr><td>Garage floor</td><td className="num">6&Prime; + engineered note</td><td>Vehicles plus walls bearing on the edge — confirm with local code; many jurisdictions want 6&Prime; minimum</td></tr>
          <tr><td>Structural / commercial</td><td className="num">Per plans</td><td>Engineer specifies depth, stone type, and compaction testing — do not DIY the spec</td></tr>
        </tbody>
      </table>
      <p>
        Clay soil pushes everything one step deeper in practice: if your
        subgrade is clay, use the 6-inch column even for a shed pad, and lay{" "}
        <strong>woven geotextile fabric</strong> between the soil and the
        stone so the gravel does not sink into the mud over the seasons.
      </p>

      <h2>The math: one worked example</h2>
      <p>
        Convert depth to feet first — <strong>4 inches = ⅓ foot, 6 inches =
        ½ foot</strong> — then it is a single multiplication:
      </p>
      <p>
        <strong>20 × 20 slab at 4 inches:</strong> 20 × 20 × (1/3) ÷ 27 ={" "}
        <strong>4.94 cubic yards</strong>, so order <strong>5 yards</strong>{" "}
        (about <strong>7 tons</strong> at 1.4 tons per yard). Add 10% overage
        for compaction and spillage and the practical order is{" "}
        <strong>5.5 yards</strong>.
        <br />
        <strong>Same slab at 6 inches:</strong> 20 × 20 × 0.5 ÷ 27 ={" "}
        <strong>7.41 cubic yards</strong>, so order <strong>7.5 yards</strong>{" "}
        (about <strong>10.5 tons</strong>); with overage,{" "}
        <strong>8.25 yards</strong>.
      </p>
      <p>
        Every entry in the tables below is built from that same formula. For
        an odd footprint, our{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a>{" "}
        runs it in one pass — and when you are ready to size the concrete
        itself, the{" "}
        <a href="/calculators/concrete-calculator/">concrete calculator</a>{" "}
        handles the pour.
      </p>

      <h2>Yards and tons by footprint: 4-inch base</h2>
      <p>
        Tons use gravel&apos;s 2,800 lbs/yd³ (×1.4). The &ldquo;order&rdquo;
        column adds 10% overage, rounded to what suppliers sell:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Footprint (ft)</th><th>Sq ft</th><th>Yards</th><th>Tons</th><th>Order</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">10 × 10</td><td className="num">100</td><td className="num">1.23</td><td className="num">1.7</td><td className="num">1.5 yd</td></tr>
          <tr><td className="num">12 × 16</td><td className="num">192</td><td className="num">2.37</td><td className="num">3.3</td><td className="num">2.75 yd</td></tr>
          <tr><td className="num">16 × 20</td><td className="num">320</td><td className="num">3.95</td><td className="num">5.5</td><td className="num">4.5 yd</td></tr>
          <tr><td className="num">20 × 20</td><td className="num">400</td><td className="num">4.94</td><td className="num">6.9</td><td className="num">5.5 yd</td></tr>
          <tr><td className="num">24 × 24</td><td className="num">576</td><td className="num">7.11</td><td className="num">10.0</td><td className="num">8 yd</td></tr>
          <tr><td className="num">24 × 30</td><td className="num">720</td><td className="num">8.89</td><td className="num">12.4</td><td className="num">10 yd</td></tr>
        </tbody>
      </table>

      <h2>Yards and tons by footprint: 6-inch base</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Footprint (ft)</th><th>Sq ft</th><th>Yards</th><th>Tons</th><th>Order</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">10 × 10</td><td className="num">100</td><td className="num">1.85</td><td className="num">2.6</td><td className="num">2 yd</td></tr>
          <tr><td className="num">12 × 16</td><td className="num">192</td><td className="num">3.56</td><td className="num">5.0</td><td className="num">4 yd</td></tr>
          <tr><td className="num">16 × 20</td><td className="num">320</td><td className="num">5.93</td><td className="num">8.3</td><td className="num">6.5 yd</td></tr>
          <tr><td className="num">20 × 20</td><td className="num">400</td><td className="num">7.41</td><td className="num">10.4</td><td className="num">8.25 yd</td></tr>
          <tr><td className="num">24 × 24</td><td className="num">576</td><td className="num">10.67</td><td className="num">14.9</td><td className="num">12 yd</td></tr>
          <tr><td className="num">24 × 30</td><td className="num">720</td><td className="num">13.33</td><td className="num">18.7</td><td className="num">15 yd</td></tr>
        </tbody>
      </table>
      <p>
        Priced per ton at the quarry? Our{" "}
        <a href="/calculators/gravel-to-tons-calculator/">gravel-to-tons calculator</a>{" "}
        converts either direction so you can compare a per-yard quote against
        a per-ton one.
      </p>

      <h2>Which gravel to order — and which to refuse</h2>
      <p>
        Two products are correct for a slab sub-base. <strong>#57 stone</strong>{" "}
        — clean, angular crushed rock about ½ to 1 inch — drains freely and
        locks together under compaction; it is the default under most
        residential slabs. <strong>Crusher run</strong> (also sold as road
        base or dense-grade aggregate) is the same angular stone plus crusher
        dust, which packs into an even harder, tighter layer; choose it where
        the subgrade is soft or the slab carries vehicles. The product to
        refuse is <strong>pea gravel</strong>: its rounded stones shift under
        load and never interlock, so the base migrates and the slab settles
        unevenly. Sand alone is wrong for the same reason — it pumps and
        washes out from under the slab edge.
      </p>
      <p>
        Building the shed first and the slab later? Our{" "}
        <a href="/guides/how-much-gravel-for-a-shed-base/">shed-base gravel guide</a>{" "}
        covers the pad-only version of this job, where the gravel is the
        finished surface rather than a sub-base.
      </p>

      <h2>Vapor and moisture barrier note</h2>
      <p>
        For any <strong>interior slab</strong> — garage, basement, workshop —
        lay <strong>10-mil polyethylene sheeting</strong> over the compacted
        gravel before the pour, with seams lapped 6 inches and taped. Ground
        moisture wicks up through concrete by capillary action, and the
        poly breaks that path; skip it and you get damp floors, musty smells,
        and flooring that fails to bond. For <strong>exterior slabs</strong>{" "}
        like patios and walkways, do the opposite: no vapor barrier. Outdoors
        it traps water under the slab instead of excluding it — drainage
        through the gravel base is the moisture strategy there.
      </p>

      <h2>Compaction in lifts — the step that decides everything</h2>
      <p>
        Gravel only becomes a base once it is compacted, and compaction only
        reaches a few inches deep per pass. Place the stone in{" "}
        <strong>3–4 inch lifts</strong>: spread a lift, run a plate compactor
        over it until it stops leaving marks, then spread the next. Dumping
        the full 6 inches at once and rolling the top compacts nothing below
        the surface — the bottom stays loose, settles over the first wet
        season, and the slab above cracks along the settlement line. Rent the
        plate compactor for the day; it is the cheapest tool on the job and
        the one most skipped. Water each lift lightly before compacting —
        damp stone packs tighter than dry.
      </p>

      <h2>What the gravel base costs</h2>
      <p>
        Typical U.S. ranges for the stone itself, before the concrete:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Cost line</th><th>#57 stone / crusher run</th></tr>
        </thead>
        <tbody>
          <tr><td>Per cubic yard (quarry gate)</td><td className="num">$35–$65</td></tr>
          <tr><td>Delivery, single load within ~20 mi</td><td className="num">$75–$150</td></tr>
          <tr><td>20 × 20 slab, 4&Prime; base (~5.5 yd delivered)</td><td className="num">$270–$510</td></tr>
          <tr><td>24 × 30 slab, 6&Prime; base (~15 yd delivered)</td><td className="num">$600–$1,125</td></tr>
        </tbody>
      </table>
      <p>
        That is usually under 10% of the total slab project — concrete,
        forming, and labor dominate. It is also the part of the job you
        cannot redo after the pour, which is exactly why skimping it is the
        most expensive saving in concrete work. Wondering what a cubic yard
        of anything actually weighs? Our{" "}
        <a href="/guides/how-much-does-a-cubic-yard-weigh/">cubic-yard weight guide</a>{" "}
        covers every common material on one chart.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Pea gravel as sub-base.</strong> Rounded stone migrates —
        angular #57 or crusher run only. <strong>One deep lift.</strong>{" "}
        Compact in 3–4 inch passes or the bottom never densifies.{" "}
        <strong>Skipping fabric on clay.</strong> The stone sinks into the mud
        and the &ldquo;base&rdquo; becomes a rumor.{" "}
        <strong>Vapor barrier outdoors.</strong> It traps water under
        exterior slabs; drainage is the strategy there.{" "}
        <strong>Exact-yard ordering.</strong> Compaction eats 10–15% of loose
        volume; the second delivery fee always exceeds the extra half yard.{" "}
        <strong>Gravel but no drainage plan.</strong> The base moves water
        down and out — make sure &ldquo;out&rdquo; exists by grading soil
        away from the slab edge.
      </p>

      <Faq items={faqs} heading="Gravel Under a Concrete Slab FAQ" />
    </GuideArticle>
  );
}

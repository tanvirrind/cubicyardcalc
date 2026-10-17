import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Area Does a Cubic Yard Cover? Coverage Chart by Depth",
  description:
    "The cubic yard coverage rule: 1 cubic yard = 324 ÷ depth in inches square feet. Full coverage table at 1/2/3/4/6/12 in plus per-material project tables for mulch, gravel, topsoil, and concrete.",
  keywords: [
    "how much area does a cubic yard cover",
    "cubic yard coverage chart",
    "how many square feet does a cubic yard cover",
    "1 yard of mulch covers how much",
    "cubic yard coverage by depth",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-area-does-a-cubic-yard-cover/" },
  openGraph: {
    title: "How Much Area Does a Cubic Yard Cover? | Cubic Yard Calculator",
    description:
      "The 324 ÷ depth rule, a full coverage table by depth, and project-ready tables for mulch, gravel, topsoil, and concrete — the planner's coverage reference.",
    url: "https://cubicyardcalculator.site/guides/how-much-area-does-a-cubic-yard-cover/",
  },
};

const faqs = [
  {
    q: "How much area does one cubic yard cover?",
    a: "It depends on depth: square feet covered = 324 ÷ depth in inches. At 1 inch deep, a cubic yard covers 324 sq ft; at 2 inches, 162 sq ft; at 3 inches, 108 sq ft; at 4 inches, 81 sq ft; at 6 inches, 54 sq ft; and at 12 inches, 27 sq ft.",
  },
  {
    q: "How much area does a cubic yard of mulch cover?",
    a: "A cubic yard of mulch covers 162 sq ft at a 2-inch depth and 108 sq ft at a 3-inch depth. In bags: one 2 ft³ bag covers 12 sq ft at 2 in and 8 sq ft at 3 in. A 100 sq ft bed at 3 in needs about 1 yard (13 of the 2 ft³ bags).",
  },
  {
    q: "How much area does a cubic yard of concrete cover?",
    a: "A cubic yard of concrete covers 81 sq ft at a 4-inch slab depth (324 ÷ 4). A 10×10 ft pad at 4 in is 100 ÷ 81 = 1.235 yards — 56 eighty-pound bags net, 62 with 10% overage.",
  },
  {
    q: "How do I convert square feet to cubic yards?",
    a: "Cubic yards = (square feet × depth in inches) ÷ 324. Equivalently, compute cubic feet first (sq ft × depth in feet) and divide by 27. Always add about 10% overage for settling, spillage, and uneven subgrade.",
  },
  {
    q: "Does compacting change the coverage?",
    a: "Yes — for granular materials like gravel and crushed stone, compaction shrinks the delivered volume by roughly 10–15%, so coverage drops by the same proportion. Our gravel calculator applies a compaction factor; if you buy bulk gravel, size the order for the compacted depth you want and let the calculator add the extra.",
  },
  {
    q: "How many bags of mulch are in a cubic yard?",
    a: "About 13.5 two-cubic-foot bags (27 ÷ 2). Three-cubic-foot bags take 9 per yard. Bulk wins on price once you need more than about 10–12 bags.",
  },
  {
    q: "How much does a cubic yard cover at 6 inches deep?",
    a: "54 square feet (324 ÷ 6). At a foot deep it is 27 sq ft — one cubic yard is 27 cubic feet, so at 12 inches of depth it covers exactly 27 sq ft. That 12-inch column is the sanity anchor for the whole table.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Area Does a Cubic Yard Cover? Coverage Chart by Depth"
      description="The one rule, the full chart, and per-material project tables for mulch, gravel, topsoil, and concrete — the planner's coverage reference."
      slug="how-much-area-does-a-cubic-yard-cover"
      calculatorHref="/calculators/cubic-yard-calculator/"
      calculatorLabel="Try the cubic yard calculator"
      updated="2026-10"
      toc={[
        { id: "the-rule", label: "The one rule: 324 ÷ depth" },
        { id: "master-table", label: "Master coverage table" },
        { id: "mulch", label: "Mulch coverage projects" },
        { id: "gravel", label: "Gravel driveway coverage" },
        { id: "topsoil", label: "Topsoil and garden coverage" },
        { id: "concrete", label: "Concrete slab coverage" },
        { id: "bags", label: "Bags-per-area notes" },
        { id: "supplier-yard", label: "What a \"yard\" really means" },
        { id: "mistakes", label: "Common mistakes" },
      ]}
      references={[
        "This site's material density library (/data-sources/) — 28 bulk densities behind the weight figures in this guide.",
        "Quikrete bag-yield figures as used in this site's bags-per-cubic-yard guide (0.60 cu ft per 80-lb bag).",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <p style={{ background: "#f0f7ff", border: "1px solid #cfe3fa", borderRadius: 8, padding: "14px 16px" }}>
        Want the quick version? Our{" "}
        <a href="/cubic-yard-coverage/">cubic yard coverage calculator</a>{" "}
        does this same math interactively — depth, area, and bags in one
        screen. This guide is the planner&apos;s reference: the rule, the
        full chart, and per-material project tables you can read before you
        order.
      </p>

      <h2 id="the-rule">The one rule: 324 ÷ depth</h2>
      <p>
        One cubic yard is 27 cubic feet, and a cubic foot is 12 inches of
        depth over one square foot. Multiply: 27 ft³ × 12 in/ft = 324
        square-foot-inches per cubic yard. So the area a yard covers at any
        depth is simply:
      </p>
      <p style={{ textAlign: "center", fontSize: "1.15em" }}>
        <strong>Square feet covered = 324 ÷ depth in inches</strong>
      </p>
      <p>
        Depth of 2 inches? 324 ÷ 2 = <strong>162 sq ft</strong>. Depth of 4
        inches? 324 ÷ 4 = <strong>81 sq ft</strong>. And at 12 inches the
        math self-checks: 324 ÷ 12 = 27 sq ft, because a yard is 27 cubic
        feet and a foot of depth over 27 sq ft is exactly 27 ft³. If your
        number ever contradicts that anchor, you did the arithmetic wrong —
        check it against the 12-inch column.
      </p>
      <p>
        Going the other direction, the volume you need is the mirror image:{" "}
        <strong>cubic yards = (square feet × depth in inches) ÷ 324</strong>.
        A 300 sq ft area at 4 in needs 300 × 4 ÷ 324 = 3.70 yards. Add ~10%
        overage and order <strong>4 yards</strong>. That is the whole engine
        behind every table below.
      </p>

      <h2 id="master-table">Master coverage table</h2>
      <p>
        Bookmark this. Every row is 324 divided by the depth, rounded to the
        nearest square foot:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Depth (inches)</th><th>Area covered by 1 yd³</th><th>Typical use</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">1</td><td className="num"><strong>324 sq ft</strong></td><td>Topdressing, thin mulch refresh</td></tr>
          <tr><td className="num">2</td><td className="num"><strong>162 sq ft</strong></td><td>Mulch beds, mulch around trees</td></tr>
          <tr><td className="num">3</td><td className="num"><strong>108 sq ft</strong></td><td>Mulch beds (standard), playground mulch</td></tr>
          <tr><td className="num">4</td><td className="num"><strong>81 sq ft</strong></td><td>Concrete slabs, gravel driveways</td></tr>
          <tr><td className="num">6</td><td className="num"><strong>54 sq ft</strong></td><td>Topsoil lawn grading, garden beds</td></tr>
          <tr><td className="num">12</td><td className="num"><strong>27 sq ft</strong></td><td>Raised beds, deep fill (the anchor column)</td></tr>
        </tbody>
      </table>
      <p>
        One important caveat before the material tables: this chart gives{" "}
        <strong>placed, finished coverage</strong>. Bulk materials settle
        and compact — crushed stone can lose 10–15% of delivered volume to
        compaction, mulch settles ~10%, and topsoil settles under its own
        weight over weeks. Size your <em>order</em> with overage (10% is the
        site default), not the finished coverage. The distinction between
        delivered volume and finished depth is where most DIY shortages
        come from.
      </p>

      <h2 id="mulch">Mulch: the yard covers 162 sq ft at 2 in, 108 at 3 in</h2>
      <p>
        Mulch is the most common &ldquo;how many yards do I need?&rdquo;
        question, and the answer sits in the first two rows of the chart.
        Fresh bark or hardwood mulch at 2–3 inches is the standard bed
        depth — deeper smothers plant crowns and shallower doesn&apos;t
        suppress weeds. Bark mulch weighs about 800 lbs per cubic yard in
        our density library, so these yards are light and easy to spread.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Bed size</th><th>At 2 in depth</th><th>At 3 in depth</th></tr>
        </thead>
        <tbody>
          <tr><td>4 × 25 ft (100 sq ft)</td><td className="num">0.62 yd³ (9 × 2 ft³ bags)</td><td className="num">0.93 yd³ (13 × 2 ft³ bags)</td></tr>
          <tr><td>10 × 20 ft (200 sq ft)</td><td className="num">1.23 yd³ (17 × 2 ft³ bags)</td><td className="num">1.85 yd³ (25 × 2 ft³ bags)</td></tr>
          <tr><td>20 × 20 ft (400 sq ft)</td><td className="num">2.47 yd³ (34 × 2 ft³ bags)</td><td className="num">3.70 yd³ (50 × 2 ft³ bags)</td></tr>
          <tr><td>20 × 40 ft (800 sq ft)</td><td className="num">4.94 yd³ (67 × 2 ft³ bags)</td><td className="num">7.41 yd³ (100 × 2 ft³ bags)</td></tr>
        </tbody>
      </table>
      <p>
        Bag math: a 2 ft³ bag covers 2 ÷ (depth/12) sq ft — so{" "}
        <strong>12 sq ft per bag at 2 in</strong> and{" "}
        <strong>8 sq ft per bag at 3 in</strong>. The crossover point is
        around 10–12 bags: beyond that, bulk mulch delivered by the yard is
        usually cheaper per cubic foot and arrives with far less plastic to
        deal with. Run the exact numbers in our{" "}
        <a href="/calculators/mulch-calculator/">mulch calculator</a>, which
        also prices bags vs bulk.
      </p>

      <h2 id="gravel">Gravel: 81 sq ft per yard at 4 in</h2>
      <p>
        Four inches of compacted gravel is the standard residential
        driveway and parking-pad depth, and at 4 in a cubic yard covers{" "}
        <strong>81 sq ft</strong> — the number to remember. Gravel is heavy
        (crushed stone ≈ 2,800 lbs/yd³, i.e. 1.4 tons per yard), so the
        tonnage of your order matters for delivery trucks and dump-spot
        planning.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Yards (4 in)</th><th>Weight</th><th>Order with 10%</th></tr>
        </thead>
        <tbody>
          <tr><td>Single-car drive 10 × 20 ft (200 sq ft)</td><td className="num">2.47 yd³</td><td className="num">3.46 tons</td><td className="num">2.7 yd³</td></tr>
          <tr><td>Two-car drive 20 × 40 ft (800 sq ft)</td><td className="num">9.88 yd³</td><td className="num">13.83 tons</td><td className="num">10.9 yd³</td></tr>
          <tr><td>Drive 12 × 30 ft (360 sq ft)</td><td className="num">4.44 yd³</td><td className="num">6.22 tons</td><td className="num">4.9 yd³</td></tr>
          <tr><td>Shed base 10 × 12 ft (120 sq ft)</td><td className="num">1.48 yd³</td><td className="num">2.07 tons</td><td className="num">1.6 yd³</td></tr>
        </tbody>
      </table>
      <p>
        Remember the compaction caveat: these are <em>compacted</em>{" "}
        volumes. A vibratory roller squeezes roughly 10–15% of air out of
        fresh stone, so ordering exactly the finished yardage leaves the
        surface thin. Our{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a>{" "}
        adds compaction and waste automatically — use it rather than
        hand-dividing by 81. For full driveway planning (base layers, cost
        per ton), see our{" "}
        <a href="/guides/how-much-gravel-for-a-driveway/">gravel driveway
        guide</a>.
      </p>

      <h2 id="topsoil">Topsoil: 54 sq ft per yard at 6 in</h2>
      <p>
        Six inches is the working depth for new lawns and garden grading —
        enough for grass roots and shallow perennials to establish. At 6
        in, a cubic yard covers <strong>54 sq ft</strong>. Screened topsoil
        runs about 2,400 lbs/yd³ (1.2 tons) in our density library.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Yards (6 in)</th><th>Weight</th><th>Order with 10%</th></tr>
        </thead>
        <tbody>
          <tr><td>Lawn patch 10 × 10 ft (100 sq ft)</td><td className="num">1.85 yd³</td><td className="num">2.22 tons</td><td className="num">2.0 yd³</td></tr>
          <tr><td>Bed grading 10 × 20 ft (200 sq ft)</td><td className="num">3.70 yd³</td><td className="num">4.44 tons</td><td className="num">4.1 yd³</td></tr>
          <tr><td>Yard regrade 20 × 30 ft (600 sq ft)</td><td className="num">11.11 yd³</td><td className="num">13.33 tons</td><td className="num">12.2 yd³</td></tr>
        </tbody>
      </table>
      <p>
        Two cautions specific to topsoil. First, it <strong>settles</strong>{" "}
        — fresh topsoil can drop 10–20% over the first few weeks as it
        consolidates, so grade slightly high and let it settle before
        laying sod (our{" "}
        <a href="/guides/how-much-topsoil-for-sod/">topsoil-for-sod
        guide</a> covers the timing). Second, do not confuse topsoil with
        compost or garden soil when sizing a bed — see{" "}
        <a href="/guides/topsoil-vs-compost-vs-garden-soil/">topsoil vs
        compost vs garden soil</a> before you order. For raised-bed math
        specifically, there is a dedicated guide below.
      </p>

      <h2 id="concrete">Concrete: 81 sq ft per yard at 4 in</h2>
      <p>
        Concrete shares the 4-inch row with gravel, but the numbers that
        matter here are bags and ready-mix: a yard of concrete weighs 4,050
        lbs, so it is never a DIY-with-bags decision at slab scale unless
        the scale is small. At 4 in a yard covers <strong>81 sq ft</strong>.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Slab</th><th>Yards (4 in)</th><th>80-lb bags (net)</th><th>Order (10% over)</th></tr>
        </thead>
        <tbody>
          <tr><td>8 × 10 ft (80 sq ft)</td><td className="num">0.99 yd³</td><td className="num">45</td><td className="num">50 bags / 1.1 yd³</td></tr>
          <tr><td>10 × 10 ft (100 sq ft)</td><td className="num">1.23 yd³</td><td className="num">56</td><td className="num">62 bags / 1.4 yd³</td></tr>
          <tr><td>12 × 20 ft (240 sq ft)</td><td className="num">2.96 yd³</td><td className="num">134</td><td className="num">147 bags / 3.3 yd³</td></tr>
          <tr><td>20 × 40 ft (800 sq ft)</td><td className="num">9.88 yd³</td><td className="num">445</td><td className="num">490 bags / 10.9 yd³</td></tr>
        </tbody>
      </table>
      <p>
        The bag economics flip fast: at ~$5 per 80-lb bag, the 10×10 pad
        costs about $310 in bags vs roughly $200 for ready-mix delivery —
        but suppliers charge short-load fees under ~4–5 yards, so the bag
        route stays sensible up to about 1–1.5 yards. Our{" "}
        <a href="/calculators/concrete-calculator/">concrete
        calculator</a> and{" "}
        <a href="/guides/how-many-bags-of-concrete-per-cubic-yard/">bags-per-yard
        guide</a> run the full comparison.
      </p>

      <h2 id="bags">Bags-per-area notes</h2>
      <p>
        Suppliers sell mulch, gravel, and soil by the cubic foot in bags
        too. The conversion is the same engine:{" "}
        <strong>bags = ceil(total ft³ ÷ bag ft³)</strong>, where total ft³
        = sq ft × depth in feet.
      </p>
      <ul>
        <li><strong>Mulch, 2 ft³ bags:</strong> 13.5 bags per yard (27 ÷ 2). 3 ft³ bags: 9 per yard.</li>
        <li><strong>Concrete, 80-lb bags (0.60 ft³ yield):</strong> 45 per yard (27 ÷ 0.60). 60-lb bags (0.45 ft³): 60 per yard. 40-lb bags (0.30 ft³): 90 per yard.</li>
        <li><strong>Bagged topsoil, 0.75 ft³ bags:</strong> 36 bags per yard — the breakpoint for bulk is usually around 30–40 bags.</li>
        <li><strong>Always round up</strong> — a partially filled bag is not a product, and a one-bag shortage is a second trip.</li>
      </ul>
      <p>
        If you are already thinking in bags, start from area instead:{" "}
        <strong>bags = (sq ft × depth in) ÷ (324 × bag ft³ ÷ ... )</strong> —
        or just divide the sq-ft coverage number in the master table by the
        per-bag coverage. Example: mulch bed 200 sq ft at 3 in needs 200 ÷
        108 = 1.85 yards; in 2 ft³ bags that is 1.85 × 13.5 = 25 bags
        (matches the table above).
      </p>

      <h2 id="supplier-yard">Loose, heaped, and compacted: what a &ldquo;yard&rdquo; really means</h2>
      <p>
        Not every &ldquo;yard&rdquo; is the same yard. Suppliers measure
        bulk material three different ways, and the differences explain
        most coverage surprises:
      </p>
      <ul>
        <li><strong>Loose yard (struck level).</strong> The honest yard: a full bucket leveled flat, 27 ft³. Reputable bulk yards sell this way. Your coverage math above assumes this.</li>
        <li><strong>Heaped yard.</strong> The bucket heaped above the rim — up to 10–15% more material. Some suppliers heap generously, which is a bonus, not a baseline; do not count on it.</li>
        <li><strong>Compacted/placed yard.</strong> What the material becomes after rolling, watering, or settling — 10–15% less volume than the loose yard for stone, up to 20% for topsoil. This is why the order table above adds 10% before you buy.</li>
      </ul>
      <p>
        When a supplier&apos;s price looks 15% cheaper than everyone
        else&apos;s, the usual explanation is a short bucket, not a
        better deal. Ask whether the yard is struck level. For bagged
        material the equivalent question is the <em>yield</em>: an 80-lb
        concrete bag yields 0.60 ft³, so 45 bags make a true yard — and a
        store-brand bag that yields 0.55 ft³ needs 50. The label always
        wins over the rule of thumb.
      </p>

      <h2 id="mistakes">Common mistakes</h2>
      <p>
        <strong>Dividing by the wrong constant.</strong> 324 assumes depth
        in <em>inches</em>. If your depth is in feet, the constant is 27 —
        mixing them up by a factor of 12 is the most expensive arithmetic
        error in landscaping. <strong>Forgetting compaction and
        settle.</strong> Finished coverage is not delivered volume; add the
        10% the calculators default to.{" "}
        <strong>Measuring depth from the wrong surface.</strong> Four
        inches of mulch <em>over</em> existing soil is not the same as four
        inches <em>of new material</em> — measure from the subgrade you are
        filling to, not from the grass. <strong>Treating &ldquo;about a
        yard&rdquo; as 1.0.</strong> 0.93 yards is not 1.0 when it is mulch
        at $45/yard — fine — but it is also not 1.0 when it is concrete in
        bags, where it is 42 bags. Round the <em>final unit</em>, not the
        yards. <strong>Ignoring the irregular-shape penalty.</strong> Real
        beds are not rectangles; measure the true square footage (our{" "}
        <a href="/guides/how-to-measure-irregular-areas/">irregular-area
        guide</a> shows how) and add extra waste for curves — curves eat
        material.
      </p>

      <p>
        Ready to order? Enter your dimensions in the{" "}
        <a href="/calculators/cubic-yard-calculator/">cubic yard
        calculator</a> for yards, tons, and bag counts in one step — or get
        the instant answer on the{" "}
        <a href="/cubic-yard-coverage/">coverage calculator page</a>.
      </p>

      <Faq items={faqs} heading="Cubic Yard Coverage FAQ" />
    </GuideArticle>
  );
}

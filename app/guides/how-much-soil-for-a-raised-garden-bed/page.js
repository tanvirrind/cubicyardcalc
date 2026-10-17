import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Soil for a Raised Garden Bed? Bed-Size Table & Mix Ratios",
  description:
    "How much soil does a raised bed need? Bed-size tables for 4×4, 4×8, and 6×12 beds at 8–24 in depths (cubic feet, cubic yards, bag counts), soil-mix ratios, and the bulk-vs-bag breakpoint.",
  keywords: [
    "how much soil for a raised garden bed",
    "raised bed soil calculator",
    "how many bags of soil for a 4x8 raised bed",
    "raised garden bed soil mix",
    "how much dirt for a raised bed",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-soil-for-a-raised-garden-bed/" },
  openGraph: {
    title: "How Much Soil for a Raised Garden Bed? | Cubic Yard Calculator",
    description:
      "Bed-size tables in cubic feet, cubic yards, and bag counts, soil-mix ratios, Hügelkultur deep-bed fill, and when bulk beats bags.",
    url: "https://cubicyardcalculator.site/guides/how-much-soil-for-a-raised-garden-bed/",
  },
};

const faqs = [
  {
    q: "How much soil do I need for a 4×8 raised bed?",
    a: "A 4×8 bed at 12 inches deep needs 4 × 8 × 1 = 32 cubic feet = 1.19 cubic yards. In 1.5 ft³ raised-bed mix bags that is 32 ÷ 1.5 = 21.3 → 22 bags. At 8 in it is 21.33 ft³ (0.79 yd³, 15 bags); at 18 in it is 48 ft³ (1.78 yd³, 32 bags).",
  },
  {
    q: "How many bags of soil does it take to fill a raised bed?",
    a: "Bags = ceil(cubic feet ÷ bag cubic feet). A 4×8×12-in bed (32 ft³) takes 22 bags of 1.5 ft³ raised-bed mix, or 16 of the 2 ft³ bags. Bags are convenient under ~10–15 bags; above that, bulk delivery is usually cheaper.",
  },
  {
    q: "What is the best soil mix for a raised garden bed?",
    a: "A widely used home-gardener mix is roughly 60% topsoil, 30% compost, and 10% aeration (perlite, coarse vermiculite, or rice hulls) — common guidance, not a standard. It is different from Mel's Mix (1/3 peat, 1/3 vermiculite, 1/3 compost, no topsoil). For a 4×8×12-in bed (32 ft³): ~19.2 ft³ topsoil, ~9.6 ft³ compost, ~3.2 ft³ aeration.",
  },
  {
    q: "How deep should a raised garden bed be?",
    a: "12 inches is the practical minimum for most vegetables — it fits salad greens, herbs, peppers, and tomatoes. Root crops like carrots want 18+ inches. Beds shallower than 8 in behave more like containers: they dry out fast and limit root space.",
  },
  {
    q: "Can I put logs and branches in the bottom of a raised bed?",
    a: "Yes — it is called Hügelkultur, and it is a legitimate way to fill deep beds cheaply. Fill the bottom third to half with logs, branches, and wood chips, top with soil, and expect the bed to settle 6–12 inches over the first year as the wood decomposes. Use only untreated wood, and keep the top 8–12 inches as real growing mix.",
  },
  {
    q: "Is bulk soil or bagged soil cheaper for a raised bed?",
    a: "Bulk wins above roughly 1 cubic yard (a 4×8×12-in bed is 1.19 yd³ — right at the breakpoint). A yard of bulk topsoil typically costs less than the 22 bags that would fill the same bed, and bulk has no plastic to haul away. Below ~10–15 bags, bags win on convenience.",
  },
  {
    q: "Will the soil settle after I fill the bed?",
    a: "Yes — expect 10–20% settling over the first season as the mix consolidates and decomposes. Fill beds nearly to the rim, water the mix in to pre-settle it, and top off before planting. Deeper fills with wood (Hügelkultur) settle more.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Soil for a Raised Garden Bed? Bed-Size Table & Mix Ratios"
      description="Bed-size tables in cubic feet, cubic yards, and bag counts; the 60/30/10 mix ratio; Hügelkultur deep-bed fill; and the bulk-vs-bag breakpoint."
      slug="how-much-soil-for-a-raised-garden-bed"
      calculatorHref="/calculators/topsoil-calculator/"
      calculatorLabel="Try the topsoil calculator"
      updated="2026-10"
      toc={[
        { id: "the-formula", label: "The bed-volume formula" },
        { id: "bed-tables", label: "Bed-size tables" },
        { id: "bag-counts", label: "Bag counts and the bulk breakpoint" },
        { id: "mix-ratio", label: "Soil-mix ratios" },
        { id: "hugelkultur", label: "Hügelkultur for deep beds" },
        { id: "depths", label: "How deep should beds be?" },
        { id: "where-to-buy", label: "Where to buy: bags vs bulk" },
        { id: "filling-order", label: "The filling order" },
        { id: "mistakes", label: "Common mistakes" },
      ]}
      references={[
        "This site's material density library (/data-sources/) — topsoil at ~2,400 lbs per cubic yard, behind the weight figures in this guide.",
        "Square Foot Gardening (Mel Bartholomew) — cited only to distinguish Mel's Mix from the topsoil-based mix in this guide.",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <p style={{ background: "#f0f7ff", border: "1px solid #cfe3fa", borderRadius: 8, padding: "14px 16px" }}>
        What this guide is <em>not</em>: our{" "}
        <a href="/guides/how-much-topsoil-for-sod/">topsoil-for-sod
        guide</a> covers lawn grading and laying sod over fresh topsoil,
        and{" "}
        <a href="/guides/topsoil-vs-compost-vs-garden-soil/">topsoil vs
        compost vs garden soil</a> compares amendments for existing ground.
        This page is <strong>bed math and mixes only</strong> — volumes by
        bed size, bag counts, what goes <em>in</em> a raised bed, and when
        bulk soil beats bags.
      </p>

      <h2 id="the-formula">The bed-volume formula</h2>
      <p>
        A raised bed is a rectangular box, so the math is the simplest in
        this whole series:
      </p>
      <ul>
        <li><strong>Cubic feet</strong> = length × width × (depth in inches ÷ 12)</li>
        <li><strong>Cubic yards</strong> = cubic feet ÷ 27</li>
        <li><strong>Bags</strong> = round up(cubic feet ÷ bag cubic feet)</li>
      </ul>
      <p>
        The standard example, worked out: a <strong>4×8 ft bed, 12 inches
        deep</strong> → 4 × 8 × 1 ft = <strong>32 ft³</strong>; 32 ÷ 27 ={" "}
        <strong>1.19 yd³</strong>. In 1.5 ft³ raised-bed mix bags: 32 ÷ 1.5
        = 21.33 → <strong>22 bags</strong> (always round up — a bed that
        is one bag short is a bed you drive back for).
      </p>

      <h2 id="bed-tables">Bed-size tables</h2>
      <p>
        The three most common bed footprints, at the four standard depths.
        Yards are the bulk-order unit; bags assume 1.5 ft³ raised-bed mix
        bags:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>4 × 4 ft bed</th><th>Cubic feet</th><th>Cubic yards</th><th>1.5 ft³ bags</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">8 in deep</td><td className="num">10.67</td><td className="num">0.40</td><td className="num">8</td></tr>
          <tr><td className="num">12 in deep</td><td className="num">16.00</td><td className="num">0.59</td><td className="num">11</td></tr>
          <tr><td className="num">18 in deep</td><td className="num">24.00</td><td className="num">0.89</td><td className="num">16</td></tr>
          <tr><td className="num">24 in deep</td><td className="num">32.00</td><td className="num">1.19</td><td className="num">22</td></tr>
        </tbody>
      </table>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>4 × 8 ft bed</th><th>Cubic feet</th><th>Cubic yards</th><th>1.5 ft³ bags</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">8 in deep</td><td className="num">21.33</td><td className="num">0.79</td><td className="num">15</td></tr>
          <tr><td className="num">12 in deep</td><td className="num"><strong>32.00</strong></td><td className="num"><strong>1.19</strong></td><td className="num"><strong>22</strong></td></tr>
          <tr><td className="num">18 in deep</td><td className="num">48.00</td><td className="num">1.78</td><td className="num">32</td></tr>
          <tr><td className="num">24 in deep</td><td className="num">64.00</td><td className="num">2.37</td><td className="num">43</td></tr>
        </tbody>
      </table>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>6 × 12 ft bed</th><th>Cubic feet</th><th>Cubic yards</th><th>1.5 ft³ bags</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">8 in deep</td><td className="num">48.00</td><td className="num">1.78</td><td className="num">32</td></tr>
          <tr><td className="num">12 in deep</td><td className="num">72.00</td><td className="num">2.67</td><td className="num">48</td></tr>
          <tr><td className="num">18 in deep</td><td className="num">108.00</td><td className="num">4.00</td><td className="num">72</td></tr>
          <tr><td className="num">24 in deep</td><td className="num">144.00</td><td className="num">5.33</td><td className="num">96</td></tr>
        </tbody>
      </table>
      <p>
        A practical note on the 4-ft width: it is not arbitrary. Four feet
        is the widest a bed should be if you can reach it from both sides —
        a 6-ft bed like the third table needs access paths on both long
        sides, and nobody enjoys leaning two extra feet into compost every
        morning.
      </p>

      <h2 id="bag-counts">Bag counts and the bulk breakpoint</h2>
      <p>
        The tables use 1.5 ft³ raised-bed mix bags, the most common size.
        If your store stocks 2 ft³ bags instead, divide the cubic-feet
        column by 2 and round up (the 4×8×12-in bed takes 16 of those).
      </p>
      <p>
        The economics flip at about <strong>1 cubic yard</strong>: a yard
        of bulk topsoil typically costs less than the ~22 bags that fill
        the same volume, and bulk arrives with zero plastic to haul to the
        curb. Below ~10–15 bags, bags win on convenience — no delivery
        minimum, no shoveling off a driveway pile. The 4×8×12-in bed at{" "}
        <strong>1.19 yd³</strong> sits right on the breakpoint, which is
        why you see both strategies recommended: one bed → bags; two or
        more beds → call the landscape yard. Our{" "}
        <a href="/calculators/topsoil-calculator/">topsoil calculator</a>{" "}
        converts either way and flags the weight: 1.19 yd³ of topsoil at
        2,400 lbs/yd³ is <strong>~2,856 lbs</strong> — plan delivery,
        because that is not a trunk-load.
      </p>

      <h2 id="mix-ratio">Soil-mix ratios</h2>
      <p>
        Knowing the volume is half the job; knowing what goes <em>in</em>{" "}
        the volume is the other half. The widely used home-gardener mix
        is:
      </p>
      <p style={{ textAlign: "center", fontSize: "1.1em" }}>
        <strong>~60% topsoil / ~30% compost / ~10% aeration</strong>
      </p>
      <p>
        Topsoil provides the mineral base and structure; compost feeds the
        soil biology and holds moisture; aeration (perlite, coarse
        vermiculite, or rice hulls) keeps the mix from compacting into a
        brick. Call this what it is: <strong>common guidance, not a
        standard</strong> — there is no governing body for raised-bed
        recipes, and experienced growers tweak freely.
      </p>
      <p>
        Worked for the 4×8×12-in bed (32 ft³): <strong>~19.2 ft³
        topsoil</strong> (0.71 yd³), <strong>~9.6 ft³ compost</strong> (0.36
        yd³), <strong>~3.2 ft³ aeration</strong> (0.12 yd³). In bags: that
        is roughly 13 × 1.5 ft³ topsoil bags, 7 × 1.5 ft³ compost bags, and
        3 × 1.5 ft³ perlite bags — 23 bags, slightly more than the
        all-raised-bed-mix 22 because bagged topsoil and compost come in
        smaller standard bags.
      </p>
      <p>
        <strong>Not Mel&apos;s Mix.</strong> The famous Square Foot
        Gardening recipe — 1/3 peat moss (or coco coir), 1/3 coarse
        vermiculite, 1/3 compost — is a soilless mix: it contains{" "}
        <em>no topsoil at all</em>. It drains beautifully and is expensive
        to scale past one small bed. Say the choice plainly: the 60/30/10
        topsoil mix is the cheap bulk route; Mel&apos;s Mix is the premium
        small-bed route. Do not blend the two halfway and expect either
        one&apos;s results.
      </p>

      <h2 id="hugelkultur">Hügelkultur for deep beds</h2>
      <p>
        An 18–24 in bed eats shocking amounts of soil — 4 yd³ for a single
        6×12×18-in bed, and premium mix at bag prices is painful.{" "}
        <strong>Hügelkultur</strong> (German for &ldquo;mound
        culture&rdquo;) is the standard workaround: fill the bottom
        third to half of a deep bed with <strong>logs, branches, and wood
        chips</strong>, then top with 8–12 inches of real growing mix.
      </p>
      <ul>
        <li><strong>Use only untreated wood.</strong> Pressure-treated lumber, painted wood, and plywood off-gas chemicals you do not want near food.</li>
        <li><strong>Expect settling.</strong> The wood layer decomposes and the bed sinks 6–12 inches over the first year — fill proud, water it in, and top off before planting.</li>
        <li><strong>The top layer still needs to be mix.</strong> Roots live in the top 8–12 inches; wood is fill, not soil. A 24-in bed is ~10 in of wood and ~14 in of mix, not 24 in of wood.</li>
        <li><strong>Nitrogen tie-up is real but temporary.</strong> Decomposing wood borrows nitrogen from surrounding soil for the first season — the compost fraction of your top mix buffers it.</li>
      </ul>

      <h2 id="depths">How deep should beds be?</h2>
      <p>
        Depth decides what you can grow and what the bed costs, so pick it
        before you run the tables:
      </p>
      <ul>
        <li><strong>8 in</strong> — herbs, lettuce, radishes, microgreens. Shallowest worth building; dries out fast.</li>
        <li><strong>12 in</strong> — the sweet spot: salad greens, peppers, tomatoes, beans, most flowers. Fits almost everything with shallow-to-medium roots.</li>
        <li><strong>18 in</strong> — carrots, parsnips, potatoes, and anywhere you want extra moisture reserve. Consider Hügelkultur fill.</li>
        <li><strong>24 in</strong> — accessibility beds at wheelchair height, or deep-rooted perennials. Definitely Hügelkultur the bottom half.</li>
      </ul>

      <h2 id="where-to-buy">Where to buy: bags vs bulk vs the pickup truck</h2>
      <p>
        There are three ways to get soil to a raised bed, and the right
        one depends on how far past the ~1-yard breakpoint you are:
      </p>
      <ul>
        <li><strong>Home-center bags (under ~15 bags).</strong> 1.5 ft³ raised-bed mix bags are the path of least resistance for a single 4×8 bed. The premium is convenience, and at this scale it is worth it — no delivery fee, no pile on the driveway.</li>
        <li><strong>Landscape-yard bulk (1–5 yards).</strong> Order topsoil and compost separately and mix on-site or in the bed — this is the cheapest way to build the 60/30/10 mix, and most yards will deliver 1-yard minimums. Ask for <em>screened</em> topsoil; unscreened is cheaper and full of clods.</li>
        <li><strong>Super-sacks / tote bags (5+ yards).</strong> One-cubic-yard tote bags lifted off a flatbed — the middle ground between hauling 96 individual bags and taking a full dump-truck load. Worth asking about at the landscape yard.</li>
      </ul>
      <p>
        Watch the delivery math: a &ldquo;$30 delivery fee&rdquo; on 1.19
        yards of $35/yard topsoil is a 70% surcharge on the material. If
        you are near the breakpoint, buying bags for the first bed and
        going bulk when you add beds two and three is often the rational
        move. And whatever you buy, buy it <em>before</em> the final
        frost — spring prices and stock both get worse in April.
      </p>

      <h2 id="filling-order">The filling order: how to layer the bed</h2>
      <p>
        Volume in hand, the order of operations matters — mix everything
        at once and the heavy topsoil sinks while the perlite floats:
      </p>
      <ol>
        <li><strong>Cardboard base (optional).</strong> A layer of plain cardboard on bare ground smothers grass and weeds; it rots away within a season. Skip it on concrete or patios — drainage matters there.</li>
        <li><strong>Wood fill (Hügelkultur, deep beds).</strong> Logs and branches first, packed tight, gaps stuffed with wood chips.</li>
        <li><strong>Coarse fill.</strong> A rough inch or two of wood chips or straw over the wood to keep mix from sifting down.</li>
        <li><strong>The mix, in thirds.</strong> Add the topsoil, compost, and aeration in alternating shovelfuls or three thin layers, then turn the whole bed with a fork. Mixing <em>in the bed</em> beats mixing in a wheelbarrow when the volume exceeds ~1 yard.</li>
        <li><strong>Water it in.</strong> Soak the bed thoroughly and let it drain overnight — this pre-settles 5–10% of the volume. Top off to the rim before planting.</li>
      </ol>

      <h2 id="mistakes">Common mistakes</h2>
      <p>
        <strong>Filling the whole bed with bagged raised-bed mix at 24
        in.</strong> That is 96 bags for a 6×12 — Hügelkultur the bottom
        and save real money. <strong>Using pure compost.</strong> Compost
        alone shrinks dramatically and holds <em>too much</em> water; it
        is 30% of the mix, not 100%. <strong>Forgetting the settle
        tax.</strong> Fresh mix drops 10–20% in the first season; fill to
        the rim and top off. <strong>Building wider than you can
        reach.</strong> 4 ft max from one side, or walkable access on both
        sides. <strong>Mixing up units.</strong> The formula needs depth in
        inches ÷ 12; a 12-in bed is 1 ft, but a 10-in bed is not.{" "}
        <strong>Skipping the weight math.</strong> A yard of wet topsoil
        approaches 3,000 lbs — one pickup load at a time, and mind your
        truck&apos;s payload rating.
      </p>

      <p>
        Size your exact beds — dimensions, depth, yards, bags, and weight —
        in the <a href="/calculators/topsoil-calculator/">topsoil
        calculator</a>. Planning the lawn around the beds? See{" "}
        <a href="/guides/how-much-topsoil-for-sod/">how much topsoil for
        sod</a>.
      </p>

      <Faq items={faqs} heading="Raised Garden Bed Soil FAQ" />
    </GuideArticle>
  );
}

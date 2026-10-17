import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Gravel Do I Need for a Walkway? (2\" and 4\" Depth Charts)",
  description:
    "Gravel for a 3-ft walkway by length and depth: cubic yards, tons, and bag counts for 20–70 ft paths, plus pea gravel vs crushed stone vs decomposed granite.",
  keywords: [
    "how much gravel for a walkway",
    "how much pea gravel for a path",
    "gravel path depth",
    "how much gravel for a garden path",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-gravel-for-a-walkway/" },
  openGraph: {
    title: "How Much Gravel Do I Need for a Walkway? | Cubic Yard Calculator",
    description:
      "Project-size tables in yards, tons, and bags — plus which gravel surface to pick and edging and fabric tips.",
    url: "https://cubicyardcalculator.site/guides/how-much-gravel-for-a-walkway/",
  },
};

const faqs = [
  {
    q: "How deep should gravel be on a walkway?",
    a: "4 inches for a proper walkway — it resists displacement under foot traffic and hides the base layer. 2 inches is the absolute minimum and only suits light-use garden paths; anything thinner shows the ground through and migrates quickly.",
  },
  {
    q: "How much pea gravel do I need for a 20 ft path?",
    a: "A 3-foot-wide, 20-foot path at 4 inches deep needs about 0.74 cubic yards — order 1 yard, roughly 1 ton or 40 half-cubic-foot bags. At 2 inches deep, it's about 0.37 yards — order a half yard.",
  },
  {
    q: "How many bags of pea gravel for a walkway?",
    a: "A standard 0.5-cubic-foot bag covers about 3 square feet at 2 inches deep. For a 3×20 ft path at 4 inches, that's 40 bags. Bulk delivery is far cheaper for any path over about 30 feet.",
  },
  {
    q: "Should I put landscape fabric under a gravel walkway?",
    a: "Yes — it separates the gravel from the soil so the stone doesn't sink and disappear into mud over time. Use a woven geotextile (stronger than cheap weed barrier) under the path, and add rigid edging on both sides to keep the gravel contained.",
  },
  {
    q: "Pea gravel or crushed stone for a walkway?",
    a: "Pea gravel is softer underfoot and looks natural; crushed stone locks together better and stays put on slopes or high-traffic paths. For a flat, casual garden path, pea gravel wins on comfort. For a main walkway to the front door, crushed stone or decomposed granite holds up better.",
  },
  {
    q: "How do I calculate gravel for a curved walkway?",
    a: "Measure the length along the centerline of the curve and multiply by the average width, then by depth in feet, divided by 27 for cubic yards. Our gravel calculator handles irregular areas if you'd rather not do the math by hand.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Gravel Do I Need for a Walkway?"
      description="The quantity playbook for gravel paths: project-size tables at 2 and 4 inches deep, in cubic yards, tons, and bags — plus which gravel surface to choose."
      slug="how-much-gravel-for-a-walkway"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
      updated="2026-10"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        A <strong>3-foot-wide walkway at 4 inches deep</strong> — the standard
        for a real path — needs about <strong>0.74 cubic yards of gravel per
        20 feet of length</strong>: order 1 yard, roughly 1 ton, or 40
        half-cubic-foot bags. The formula is{" "}
        <strong>(length × width × depth in feet) / 27</strong>. Find your exact
        path in the tables below.
      </p>

      <h2>Depth: 4 inches is the standard</h2>
      <p>
        <strong>4 inches</strong> is the depth for a walkway you&apos;ll
        actually walk on daily: it resists kicking and displacement, hides
        the fabric or soil beneath, and settles into a firm surface.{" "}
        <strong>2 inches</strong> is the minimum for a light-use garden path
        — go thinner and the ground shows through within a season. On a
        slope, favor 4 inches of angular stone (it locks in place); rounded
        pea gravel on a slope migrates downhill no matter the depth. Note
        that walkway depth here means the <strong>surface gravel layer</strong>{" "}
        — if you&apos;re building a load-bearing path, a compacted crushed
        stone base goes under it and gets its own calculation.
      </p>

      <h2>Project-size table: 2-inch depth</h2>
      <p>
        Light-use garden paths. Yards first (how bulk is sold), tons for
        weight-priced loads (gravel ≈ 2,800 lb/yd&sup3;, so multiply yards by
        1.4), and 0.5-cu-ft bags for small jobs — 54 bags per yard:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Path (3 ft wide)</th><th>Cubic yards</th><th>Tons</th><th>0.5 cu ft bags</th><th>Order</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">20 ft</td><td className="num">0.37</td><td className="num">0.52</td><td className="num">20</td><td className="num">0.5 yd</td></tr>
          <tr><td className="num">35 ft</td><td className="num">0.65</td><td className="num">0.91</td><td className="num">35</td><td className="num">1 yd</td></tr>
          <tr><td className="num">50 ft</td><td className="num">0.93</td><td className="num">1.30</td><td className="num">50</td><td className="num">1 yd</td></tr>
          <tr><td className="num">70 ft</td><td className="num">1.30</td><td className="num">1.81</td><td className="num">70</td><td className="num">1.5 yd</td></tr>
        </tbody>
      </table>

      <h2>Project-size table: 4-inch depth</h2>
      <p>
        The recommended depth for real walkways. Same columns — yards, tons,
        bags, and what to actually order:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Path (3 ft wide)</th><th>Cubic yards</th><th>Tons</th><th>0.5 cu ft bags</th><th>Order</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">20 ft</td><td className="num">0.74</td><td className="num">1.04</td><td className="num">40</td><td className="num">1 yd</td></tr>
          <tr><td className="num">35 ft</td><td className="num">1.30</td><td className="num">1.81</td><td className="num">70</td><td className="num">1.5 yd</td></tr>
          <tr><td className="num">50 ft</td><td className="num">1.85</td><td className="num">2.59</td><td className="num">100</td><td className="num">2 yd</td></tr>
          <tr><td className="num">70 ft</td><td className="num">2.59</td><td className="num">3.63</td><td className="num">140</td><td className="num">3 yd</td></tr>
        </tbody>
      </table>
      <p>
        Sanity check on the math: 3 × 20 ft at 4 inches = 60 × (4/12) = 20
        cubic feet, divided by 27 = <strong>0.74 cubic yards</strong>, and
        0.74 × 1.4 = <strong>1.04 tons</strong>. For a path width other than 3
        feet — or a curved path measured along its centerline — our{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a>{" "}
        runs the same formula on your dimensions.
      </p>

      <h2>Choosing the surface: pea gravel vs crushed stone vs decomposed granite</h2>
      <p>
        This guide is the <strong>quantity playbook</strong>; the material
        decision is its own topic, which we compare head-to-head in our{" "}
        <a href="/guides/decomposed-granite-vs-gravel/">decomposed granite vs gravel guide</a>.
        The short version for walkways:
      </p>
      <p>
        <strong>Pea gravel</strong> — rounded, smooth underfoot, natural
        look. Best for flat, casual garden paths. Downsides: migrates under
        feet (edging is non-negotiable), and it&apos;s miserable on slopes.
        <br />
        <strong>Crushed stone</strong> (e.g. ⅜&Prime; or ¾&Prime; angular) —
        locks together into a firm surface that stays put. Best for main
        walkways, slopes, and high-traffic routes. Less comfortable
        barefoot.
        <br />
        <strong>Decomposed granite</strong> — compacts into a nearly solid,
        natural-looking surface. Best for a firm, accessible path that still
        looks soft. Needs proper compaction (and sometimes stabilizer) or it
        turns to dust and mud.
      </p>
      <p>
        If you&apos;re choosing between stone types, our{" "}
        <a href="/guides/gravel-size-chart/">gravel size chart</a> breaks
        down what the numbers like &ldquo;#57&rdquo; and &ldquo;⅜-inch&rdquo;
        actually mean for a path.
      </p>

      <h2>Edging and landscape fabric</h2>
      <p>
        Gravel without edging is a future raking chore. Install{" "}
        <strong>rigid edging</strong> (steel, aluminum, or stone) on both
        sides before the gravel goes down — it keeps the path&apos;s shape
        and the stone off your lawn. Under the gravel, lay{" "}
        <strong>woven geotextile fabric</strong>: it stops the stone from
        sinking into the soil and disappearing over a few seasons, which is
        the main reason thin paths seem to &ldquo;need more gravel every
        year.&rdquo; Cheap thin weed barrier tears under foot traffic; use
        fabric rated for ground stabilization. We cover fabric selection in
        our{" "}
        <a href="/guides/landscape-fabric-under-rock/">landscape fabric under rock guide</a>.
      </p>

      <h2>When the path needs a base layer</h2>
      <p>
        The tables above cover the <strong>surface gravel layer</strong> —
        enough for garden paths on firm, well-drained soil. But a main
        walkway to your front door, a path on soft or clay soil, or anything
        that will see a wheelbarrow or mower deserves a <strong>compacted
        crushed-stone base</strong> under the surface: typically 3–4 inches
        of ¾-inch crusher run or #57 stone, compacted in lifts, with the
        2–4 inches of decorative gravel on top. That doubles your total
        stone — a 50-foot path at 4 inches of base plus 3 inches of surface
        needs about 3.2 yards of base plus 1.4 yards of surface. The base
        stone is the unglamorous part that keeps the pretty gravel from
        sinking into mud after the first rainy season.
      </p>

      <h2>Curved and irregular paths</h2>
      <p>
        For a curved path, measure the <strong>length along the
        centerline</strong> of the curve (a garden hose laid along the route
        works well) and use the <strong>average width</strong>. The math is
        identical: a curved path averaging 3 feet wide and 40 feet long at 4
        inches deep needs (40 × 3 × 4/12) / 27 = <strong>1.48 cubic
        yards</strong> — order 1.5 to 2. For a freeform patio-style area,
        break it into rectangles, compute each, and add them up. Irregular
        edges waste a little more at the margins, so lean toward the high
        side of the overage.
      </p>

      <h2>Maintenance: the annual top-up</h2>
      <p>
        Even a well-built gravel path loses stone: feet kick it aside, rain
        washes fines away, and a little settles into the base each year.
        Budget a <strong>light top-up every 1–2 years</strong> — roughly
        10–20% of the original quantity, or about a half yard for a 50-foot
        path. Keeping a small leftover pile from the original delivery (tarped,
        out of the way) means the top-up stone matches in color and size.
        Rake the path level each spring, pull any weeds that sneak through
        the fabric, and check the edging — most &ldquo;failing&rdquo; gravel
        paths are really just edging that shifted and let the stone escape.
      </p>

      <h2>Bulk vs bags</h2>
      <p>
        The crossover point is roughly <strong>30 feet of path</strong>. A
        0.5-cu-ft bag at ~$5 means a 70-foot path at 4 inches (140 bags)
        costs ~$700 in bags versus roughly $90–130 for 3 bulk yards plus a
        delivery fee. Bags win for short paths and spots a truck can&apos;t
        reach; bulk wins for everything longer. Either way, order the
        &ldquo;order&rdquo; column from the tables above — a 10% overage is
        cheaper than a second trip.
      </p>

      <h2>Weeds in a gravel path</h2>
      <p>
        Fabric stops weeds from below, but wind-blown seeds land <strong>on
        top</strong> of the gravel and sprout in the dust that settles
        between stones — no path is maintenance-free. A 4-inch layer
        suppresses far more than 2 inches because seeds struggle to root
        through it. For the stragglers, a quick pass with a hoe or a
        targeted spray beats pulling by hand; avoid broad weed killers that
        drift onto lawn and beds. Decomposed granite paths get fewer weeds
        than loose gravel (the compacted surface gives seeds less to grab),
        which is one more reason it&apos;s the pick for low-maintenance
        walkways.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Going too thin.</strong> Two inches on a daily-use walkway
        migrates and shows the ground — use 4. <strong>Skipping edging.</strong>{" "}
        Unedged gravel spreads into the lawn within a season.{" "}
        <strong>No fabric.</strong> Stone sinks into soil and the path eats
        gravel every year. <strong>Rounded gravel on a slope.</strong> Pea
        gravel migrates downhill; use angular stone.{" "}
        <strong>Ordering exact yards.</strong> Spillage and uneven subgrade
        eat 10%; round up to the order column.
      </p>

      <Faq items={faqs} heading="Walkway Gravel FAQ" />
    </GuideArticle>
  );
}

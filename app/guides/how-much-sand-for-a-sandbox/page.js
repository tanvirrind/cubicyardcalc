import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Sand Do I Need for a Sandbox? (Bag Chart)",
  description:
    "Sandbox sand bag chart: square and round sandboxes at 4, 6, and 8 inches deep, cubic yards to 50-lb bags, bulk vs bags cost breakpoint, and play sand buying tips.",
  keywords: [
    "how much sand for a sandbox",
    "how many bags of sand for a sandbox",
    "sandbox sand calculator",
    "how deep should sandbox sand be",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-sand-for-a-sandbox/" },
  openGraph: {
    title: "How Much Sand Do I Need for a Sandbox? (Bag Chart) | Cubic Yard Calculator",
    description:
      "Bag counts for square and round sandboxes at every common depth, the 54-bags-per-yard math, and bulk vs bags pricing.",
    url: "https://cubicyardcalculator.site/guides/how-much-sand-for-a-sandbox/",
  },
};

const faqs = [
  {
    q: "How many bags of sand do I need for a 6×6 sandbox?",
    a: "A 6×6 ft sandbox needs 24 fifty-lb bags at 4 inches deep, 36 bags at 6 inches, or 48 bags at 8 inches. Six inches is the sweet spot for most sandboxes — deep enough to dig in, shallow enough to keep sand inside.",
  },
  {
    q: "How many 50-lb bags of sand are in a cubic yard?",
    a: "54. A 50-lb bag of play sand holds about 0.5 cubic feet, and a cubic yard holds 27 cubic feet (27 ÷ 0.5 = 54). Flip it around: one cubic yard of sand weighs about 2,700 lbs, or 1.35 tons.",
  },
  {
    q: "What kind of sand is safe for a sandbox?",
    a: "Buy sand labeled play sand — it is washed, screened, and low-dust. Avoid coarse paver sand and dusty masonry sand; both are rougher and dustier than what belongs in a kid's sandbox.",
  },
  {
    q: "How deep should sandbox sand be?",
    a: "Six inches is the sweet spot for most sandboxes: deep enough for real digging, shallow enough that the frame still contains the sand. Four inches works for toddlers, and 8 inches or more suits older kids who dig tunnels and trenches.",
  },
  {
    q: "Should I put landscape fabric under a sandbox?",
    a: "Yes — lay landscape fabric (not plastic) on the bottom before the sand goes in. It blocks weeds and keeps soil from mixing into the sand while still letting rainwater drain through. Plastic traps water and turns the sandbox into a swamp.",
  },
  {
    q: "How much does it cost to fill a sandbox with sand?",
    a: "Fifty-lb bags of play sand typically run $4 to $6 each at big-box stores (typical 2026 US), so a 6×6 sandbox at 6 inches costs roughly $145 to $215 in bags. A bulk yard of washed sand from a landscape supplier runs about $25 to $45 plus $50 to $100 delivery — cheaper per yard once you need 20 or more bags.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Sand Do I Need for a Sandbox?"
      description="Bag-count tables for square and round sandboxes at every common depth, the 54-bags-per-yard conversion, when bulk beats bags, and how to buy play sand that's actually clean."
      slug="how-much-sand-for-a-sandbox"
      calculatorHref="/calculators/sand-calculator/"
      calculatorLabel="Try the sand calculator"
      updated="2026-10-13"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        Sandbox math starts in cubic feet: length × width × (depth in
        inches ÷ 12). Divide by 27 for cubic yards. Then the magic number
        for bags: a 50-lb bag of play sand holds about{" "}
        <strong>0.5 cubic feet</strong>, so one cubic yard (27 cubic feet)
        takes <strong>54 bags</strong>. A 6×6 ft sandbox at the
        recommended 6-inch depth: (6 × 6 × 0.5) / 27 ={" "}
        <strong>0.67 cubic yards</strong>, × 54 ={" "}
        <strong>36 fifty-lb bags</strong>. Round up to the nearest bag and
        add 10% — sand settles and kids relocate an astonishing amount of
        it to the surrounding yard.
      </p>

      <h2>Square sandbox bag table</h2>
      <p>
        Bag counts for the three most common square sizes at 4, 6, and 8
        inches of sand. Each cell shows cubic yards, then the number of
        50-lb bags (rounded up, before overage).
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Sandbox size</th><th>4 inches deep</th><th>6 inches deep</th><th>8 inches deep</th></tr>
        </thead>
        <tbody>
          <tr><td>4 × 4 ft (toddler box)</td><td className="num">0.20 yd³ / 11 bags</td><td className="num">0.30 yd³ / 16 bags</td><td className="num">0.40 yd³ / 22 bags</td></tr>
          <tr><td>6 × 6 ft (standard)</td><td className="num">0.44 yd³ / 24 bags</td><td className="num">0.67 yd³ / 36 bags</td><td className="num">0.89 yd³ / 48 bags</td></tr>
          <tr><td>8 × 8 ft (big diggers)</td><td className="num">0.79 yd³ / 43 bags</td><td className="num">1.19 yd³ / 64 bags</td><td className="num">1.58 yd³ / 86 bags</td></tr>
        </tbody>
      </table>

      <h2>Round sandbox bag table</h2>
      <p>
        For round or octagonal boxes, use the diameter. Same layout: cubic
        yards, then 50-lb bags, rounded up.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Sandbox diameter</th><th>4 inches deep</th><th>6 inches deep</th><th>8 inches deep</th></tr>
        </thead>
        <tbody>
          <tr><td>5 ft</td><td className="num">0.24 yd³ / 14 bags</td><td className="num">0.36 yd³ / 20 bags</td><td className="num">0.48 yd³ / 27 bags</td></tr>
          <tr><td>6 ft</td><td className="num">0.35 yd³ / 19 bags</td><td className="num">0.52 yd³ / 29 bags</td><td className="num">0.70 yd³ / 38 bags</td></tr>
          <tr><td>8 ft</td><td className="num">0.62 yd³ / 34 bags</td><td className="num">0.93 yd³ / 51 bags</td><td className="num">1.24 yd³ / 67 bags</td></tr>
        </tbody>
      </table>
      <p>
        Odd-shaped box? The formula never changes: measure the footprint
        area in square feet, multiply by depth in feet (inches ÷ 12),
        divide by 27 for cubic yards, then multiply by 54 for bags. For
        anything irregular, the <a href="/calculators/sand-calculator/">sand calculator</a>{" "}
        does the area math for you.
      </p>

      <h2>Pick the right depth first</h2>
      <p>
        <strong>4 inches</strong> is the minimum for a toddler box — enough
        to scoop, and shallow enough that little legs climb in and out
        easily. <strong>6 inches</strong> is the sweet spot for most
        sandboxes: real digging depth without the frame losing control of
        the sand. <strong>8 inches or more</strong> suits older kids who
        dig tunnels and pour moats — but every extra inch costs bags
        fast, as the 8×8 row shows. One note: frame boards should stand at
        least 2 inches above the finished sand level, or the first
        enthusiastic digging session exports half the sandbox to the
        lawn.
      </p>

      <h2>Bags vs bulk: the cost breakpoint</h2>
      <p>
        Bagged play sand (50-lb bags, typically $4 to $6 each in 2026)
        wins for small jobs because it is clean, labeled, and easy to
        haul. But the price per yard is brutal once you scale up: 36 bags
        for a standard 6×6 box costs roughly{" "}
        <strong>$145 to $215</strong>. A bulk yard of washed sand from a
        landscape supplier runs about <strong>$25 to $45</strong>, plus
        $50 to $100 for delivery — so the total bulk cost is often
        <strong>$75 to $145</strong>, undercutting bags even before the
        delivery split. The breakpoint: once your table lookup crosses{" "}
        <strong>about 20 bags (roughly a third to half a yard)</strong>,
        price a bulk yard from a local supplier. One caveat — sand
        actually labeled &ldquo;play sand&rdquo; is rarely sold in bulk,
        so confirm the bulk product is washed and screened, not dusty
        masonry sand.
      </p>

      <h2>What to buy: play sand, washed and screened</h2>
      <p>
        Sandbox sand should be labeled <strong>play sand</strong> — washed,
        screened, and low in dust. Skip coarse paver sand (too rough) and
        dusty masonry or all-purpose sand (too gritty, too much airborne
        dust). If you want the full rundown of every sand type and what
        each is for, see our{" "}
        <a href="/guides/types-of-sand/">types of sand guide</a>. Whatever
        you buy, give each bag a shake: clumping is fine (moisture), but
        visible debris, shells, or a chemical smell means the bag goes
        back.
      </p>

      <h2>Prep the box before the sand</h2>
      <p>
        Lay <strong>landscape fabric</strong> — not plastic sheeting —
        across the bottom of the frame before the sand goes in. The fabric
        blocks weeds and keeps soil from migrating up into the sand while
        letting rainwater drain through; plastic traps water and the box
        becomes a swamp. A <strong>cover</strong> (tarp, lid, or fitted
        cover) is the other essential: it keeps neighborhood cats out and
        keeps rain from compacting the sand into concrete. Plan to rake
        the sand annually and top up an inch or two each spring — kids
        remove more sand than any formula accounts for.
      </p>

      <h2>Fill, level, and settle</h2>
      <p>
        Cut the bags open at the box and pour — do not haul loose sand
        across the yard in buckets if you can avoid it. Spread with a
        garden rake to the target depth, then <strong>mist lightly with
        a hose</strong> and rake again: a little moisture settles the
        sand and knocks down the fine dust from fresh bags. Expect the
        level to drop an inch or so in the first week as the sand
        compacts; that is exactly what the 10% overage covers. Check
        depth with a ruler in a few spots before you call it done —
        kids find the shallow corners instantly and migrate sand away
        from them. And keep two or three bags in the garage: the first
        big rainstorm washes out low spots, and a quick top-up beats a
        store run.
      </p>

      <h2>When to refresh the sand</h2>
      <p>
        Plan on topping up <strong>1 to 2 inches every spring</strong> —
        play sand compacts, washes, and walks away on shoes and pails.
        Once a year, rake the whole box, pull out any debris or toys,
        and add fresh bags to restore the depth from the tables above.
        If the sand has turned gray, compacted hard, or smells musty,
        it is time for a full change-out: shovel the old sand into
        wheelbarrows (it makes excellent fill or paver-base material)
        and refill per the chart. A sandbox cover between play sessions
        roughly doubles the interval between refreshes.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Ordering exact bag counts.</strong> Sand settles and kids
        export it — add 10% and keep a spare bag or two.{" "}
        <strong>Plastic under the sand.</strong> See above: swamp.{" "}
        <strong>Paver sand in a kids&apos; box.</strong> Coarse and dusty;
        play sand exists for a reason. <strong>Too-deep frames.</strong>{" "}
        Twelve inches of sand is a wheelbarrow bill, not a sandbox.{" "}
        <strong>No cover.</strong> An uncovered sandbox is a litter box
        with better marketing.
      </p>

      <Faq items={faqs} heading="Sandbox Sand FAQ" />
    </GuideArticle>
  );
}

import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Gravel Do I Need for a Retaining Wall? (Base + Backfill Guide)",
  description:
    "Gravel for a retaining wall: 4-6 inch compacted base plus 12 inch drainage backfill. Worked wall examples, yards-to-tons chart, and why #57 stone wins.",
  keywords: [
    "how much gravel for a retaining wall",
    "retaining wall backfill gravel",
    "how much gravel behind a retaining wall",
    "retaining wall base gravel depth",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-gravel-for-a-retaining-wall/" },
  openGraph: {
    title: "How Much Gravel Do I Need for a Retaining Wall? | Cubic Yard Calculator",
    description:
      "Base plus backfill: the two gravel zones, worked examples by wall size, yards-to-tons, and the #57 stone call.",
    url: "https://cubicyardcalculator.site/guides/how-much-gravel-for-a-retaining-wall/",
  },
};

const faqs = [
  {
    q: "How much gravel do I need behind a retaining wall?",
    a: "A minimum 12-inch-wide zone of clean angular gravel (like #57 stone) running the full height of the wall. For a 30-foot wall that is 3 feet tall, that's 90 cubic feet — about 3.3 cubic yards — before the base and overage.",
  },
  {
    q: "How deep should the gravel base be under a retaining wall?",
    a: "4 to 6 inches of compacted gravel, in a trench about 12 inches wider than the wall block. Walls over 3 feet tall take the full 6 inches (or more per engineering), while short garden walls under 2 feet can use 4 inches.",
  },
  {
    q: "What is the best gravel for a retaining wall?",
    a: "Clean, angular #57 stone (roughly 1/2 to 1 inch) for both the base and the drainage backfill. The angular pieces lock together for a stable base and leave voids for water to drain. Avoid rounded pea gravel — it shifts and compacts tighter.",
  },
  {
    q: "How much gravel for a 30 ft retaining wall that is 3 ft tall?",
    a: "About 4.4 cubic yards total: 1.1 yards for the 6-inch base plus 3.3 yards for the 12-inch backfill zone. Order 5 cubic yards (roughly 7 tons) to cover compaction and spillage.",
  },
  {
    q: "Do I need to compact gravel behind a retaining wall?",
    a: "No — compact the base gravel under the wall in thin lifts, but leave the drainage backfill loose. Compacted backfill reduces the voids that let water drain and adds compaction pressure against the wall.",
  },
  {
    q: "How do I convert cubic yards of gravel to tons?",
    a: "Multiply yards by 1.4. Gravel weighs about 2,800 pounds per cubic yard, so 5 yards is about 7 tons. See our yards-to-tons table below for common order sizes.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Gravel Do I Need for a Retaining Wall?"
      description="A retaining wall needs gravel in two places — the compacted base and the drainage backfill. This guide covers both zones, with worked examples and ordering math."
      slug="how-much-gravel-for-a-retaining-wall"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
      updated="2026-10"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        Gravel for a retaining wall goes in <strong>two zones</strong>: a{" "}
        <strong>4–6 inch compacted base</strong> under the first course of
        block, and a <strong>12-inch-wide drainage backfill zone</strong>{" "}
        behind the wall running its full height. For the classic project — a{" "}
        <strong>30-foot wall, 3 feet tall</strong> — that&apos;s about{" "}
        <strong>1.1 cubic yards for the base</strong> plus{" "}
        <strong>3.3 cubic yards for the backfill</strong>, or 4.4 yards total.
        Order <strong>5 cubic yards</strong> (about 7 tons) to cover
        compaction and spillage, and order <strong>clean #57 stone</strong>{" "}
        for both zones.
      </p>

      <h2>Zone 1: the compacted base</h2>
      <p>
        The base trench sits under the wall and a little beyond it: dig it{" "}
        <strong>about 12 inches wider than the wall block</strong> — roughly
        2 feet wide for standard retaining-wall block — and fill it with{" "}
        <strong>6 inches of compacted gravel</strong> for walls up to 3 feet
        tall. Short garden walls under 2 feet can get by with 4 inches;
        anything over 3 feet (or anything holding back serious soil or a
        surcharge like a driveway) should follow engineered plans, which
        typically call for 6 inches or more.
      </p>
      <p>
        Compact the base in <strong>2–3 inch lifts</strong> with a plate
        compactor or hand tamper — dumping 6 inches in one shot leaves soft
        spots that settle later and telegraph through the wall. The base
        should end up level across the whole run; the first course of block
        sits on this, and every course above inherits its mistakes.
      </p>

      <h2>Zone 2: the drainage backfill</h2>
      <p>
        Behind the wall, place a <strong>minimum 12-inch-wide zone of clean
        angular gravel</strong> from the base all the way up to within a few
        inches of the top (cap it with soil or sod). This zone is what keeps
        water from building up behind the wall — hydrostatic pressure is the
        number one killer of retaining walls, and this gravel column gives
        water a fast path down to the drain pipe. Unlike the base,{" "}
        <strong>do not compact the backfill</strong>: compaction closes the
        voids that water needs to move through and pushes extra pressure
        against the wall.
      </p>
      <p>
        Lay a <strong>perforated drain pipe</strong> (4-inch, holes down) on
        the base gravel at the back of the wall, embedded in the stone, and
        run it to daylight or a dry well. The pipe doesn&apos;t change your
        gravel math much — its volume is negligible next to the backfill —
        but it&apos;s what carries water away once the gravel collects it.
        Our{" "}
        <a href="/guides/how-much-gravel-for-a-french-drain/">French drain gravel guide</a>{" "}
        covers pipe sizing and slope if you want the full treatment.
      </p>

      <h2>The math: two simple formulas</h2>
      <p>
        Compute each zone separately, then add them. Per linear foot of wall:
      </p>
      <p>
        <strong>Base:</strong> 2 ft wide × 0.5 ft deep × length ={" "}
        <strong>1 cubic foot per linear foot</strong>
        <br />
        <strong>Backfill:</strong> 1 ft wide × wall height in ft × length ={" "}
        <strong>wall height in cubic feet per linear foot</strong>
        <br />
        Divide each by 27 for cubic yards.
      </p>
      <p>
        The 30×3-foot example: base = 30 × 1 = 30 cu ft ={" "}
        <strong>1.11 cubic yards</strong>; backfill = 30 × 3 = 90 cu ft ={" "}
        <strong>3.33 cubic yards</strong>. Total:{" "}
        <strong>4.44 cubic yards</strong>.
      </p>

      <h2>Worked examples by wall size</h2>
      <p>
        Base figures assume a 2-foot-wide, 6-inch-deep trench; backfill
        assumes the 12-inch minimum zone. The &ldquo;order&rdquo; column adds
        10% overage for compaction loss in the base plus normal spillage,
        rounded to what suppliers sell:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Wall (L×H)</th><th>Base (yd&sup3;)</th><th>Backfill (yd&sup3;)</th><th>Total (yd&sup3;)</th><th>Order</th><th>Tons</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">20 ft × 2 ft</td><td className="num">0.74</td><td className="num">1.48</td><td className="num">2.22</td><td className="num">2.5 yd</td><td className="num">3.5</td></tr>
          <tr><td className="num">20 ft × 3 ft</td><td className="num">0.74</td><td className="num">2.22</td><td className="num">2.96</td><td className="num">3.5 yd</td><td className="num">4.9</td></tr>
          <tr><td className="num">30 ft × 3 ft</td><td className="num">1.11</td><td className="num">3.33</td><td className="num">4.44</td><td className="num">5 yd</td><td className="num">7.0</td></tr>
          <tr><td className="num">30 ft × 4 ft</td><td className="num">1.11</td><td className="num">4.44</td><td className="num">5.56</td><td className="num">6.5 yd</td><td className="num">9.1</td></tr>
          <tr><td className="num">50 ft × 3 ft</td><td className="num">1.85</td><td className="num">5.56</td><td className="num">7.41</td><td className="num">8.5 yd</td><td className="num">11.9</td></tr>
          <tr><td className="num">50 ft × 4 ft</td><td className="num">1.85</td><td className="num">7.41</td><td className="num">9.26</td><td className="num">10.5 yd</td><td className="num">14.7</td></tr>
        </tbody>
      </table>
      <p>
        For a wall size not listed, our{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a>{" "}
        handles the base and backfill zones in one pass.
      </p>

      <h2>Why the 10–15% overage matters</h2>
      <p>
        Compaction is the silent quantity-eater. Six inches of loose gravel
        tamps down to roughly five inches — the particles settle into a
        denser matrix — so the base zone needs <strong>10–15% more material
        than the compacted volume</strong> you want. Spillage, an uneven
        trench bottom, and stone that disappears into soft soil eat the rest.
        Ordering exact calculated yards almost always ends with a second
        delivery fee that costs more than the extra half yard would have.
      </p>

      <h2>Order #57 angular stone</h2>
      <p>
        One product does both jobs: <strong>clean #57 stone</strong> —
        angular crushed rock about ½ to 1 inch, washed free of dust. The
        angular faces lock together under compaction for a stable base, and
        the same angularity leaves big voids in the backfill for water to
        move through. The mistake to avoid is <strong>rounded pea
        gravel</strong>: it shifts under load, packs tighter over time, and
        sheds fines that clog the drainage zone. (We compare the two in
        detail in our{" "}
        <a href="/guides/crushed-stone-vs-pea-gravel/">crushed stone vs pea gravel guide</a>.)
        &ldquo;Crusher run&rdquo; or road base is wrong for the backfill too —
        the fines that make it pack beautifully for a driveway are exactly
        what seals off drainage. For the full sizing rundown, see our{" "}
        <a href="/guides/gravel-size-chart/">gravel size chart</a>.
      </p>

      <h2>Yards to tons for ordering</h2>
      <p>
        Bulk stone is often priced per ton. Gravel weighs about 2,800 pounds
        per cubic yard, so <strong>multiply yards by 1.4</strong>:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Cubic yards</th><th>Tons to pay for</th><th>Pounds</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">0.5 yd</td><td className="num">0.7</td><td className="num">1,400</td></tr>
          <tr><td className="num">1 yd</td><td className="num">1.4</td><td className="num">2,800</td></tr>
          <tr><td className="num">2 yd</td><td className="num">2.8</td><td className="num">5,600</td></tr>
          <tr><td className="num">3 yd</td><td className="num">4.2</td><td className="num">8,400</td></tr>
          <tr><td className="num">5 yd</td><td className="num">7.0</td><td className="num">14,000</td></tr>
          <tr><td className="num">10 yd</td><td className="num">14.0</td><td className="num">28,000</td></tr>
        </tbody>
      </table>

      <h2>What about walls over 4 feet?</h2>
      <p>
        Everything above assumes a wall up to about 4 feet tall — the range
        most DIY and residential projects stay in. Taller walls change the
        engineering: many jurisdictions <strong>require a licensed
        engineer&apos;s design and a permit</strong> above 4 feet (measured
        from the bottom of the base, not the visible face), and the design
        typically adds <strong>geogrid</strong> — layers of synthetic mesh
        extending back into the soil — plus a wider drainage zone, sometimes
        18–24 inches instead of 12. The quantity math scales the same way
        (wider zone × taller wall), but don&apos;t self-engineer this: a
        failed 5-foot wall is a property-damage event, not a landscaping
        oops. Stepped or terraced designs — two short walls instead of one
        tall one — often dodge the engineering requirement entirely and are
        friendlier to build.
      </p>

      <h2>Fabric, caps, and finishing touches</h2>
      <p>
        Place <strong>non-woven geotextile fabric</strong> between the
        backfill gravel and the soil behind it — it keeps silt from migrating
        into the voids and clogging the drainage column over the years. Some
        builders also wrap the drain pipe in a fabric sock. Cap the top of
        the backfill with a few inches of soil or sod so the stone
        isn&apos;t visible from above, and make sure the finished grade
        slopes away from the top of the wall so surface water doesn&apos;t
        pour straight into your fresh drainage zone. Finish with{" "}
        <strong>cap blocks</strong> glued with masonry adhesive — they shed
        water off the wall face and keep the top course from shifting.
      </p>

      <h2>Delivery and placement tips</h2>
      <p>
        Bulk stone arrives in a dump truck or dump trailer — know your access
        before you order. A full-size dump truck needs roughly 10–12 feet of
        width and solid ground; for backyard walls with tight access, ask
        about a <strong>dump trailer or stone slinger</strong>, which can
        place stone over fences and landscaping. Have the driver dump the
        stone <strong>as close to the wall line as possible</strong>: gravel
        is heavy (2,800 lb per yard), and every wheelbarrow trip you avoid is
        a back saved. A 5-yard load is 7 tons — if your driveway is new
        concrete or pavers, lay plywood down where the truck will drive and
        dump. For multi-day projects, tarp the pile: wet stone weighs more
        and muddy stone contaminates the drainage zone.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Rounded stone.</strong> Pea gravel migrates and packs —
        angular #57 is the standard. <strong>Compacting the backfill.</strong>{" "}
        That zone must stay loose to drain. <strong>Skimping the base.</strong>{" "}
        Four inches under a 3-foot wall settles unevenly; use the full six.{" "}
        <strong>No drain pipe.</strong> Gravel collects the water; the pipe
        removes it — a drainage column with no outlet is just a buried
        reservoir. <strong>Ordering exact yards.</strong> Compaction and
        spillage eat 10–15%; the second delivery fee always exceeds the cost
        of a little extra stone.
      </p>

      <Faq items={faqs} heading="Retaining Wall Gravel FAQ" />
    </GuideArticle>
  );
}

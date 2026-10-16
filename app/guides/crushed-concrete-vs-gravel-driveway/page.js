import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Crushed Concrete vs Gravel Driveway: Cost, Tonnage & 15-Year Maintenance",
  description:
    "Crushed concrete vs gravel for a driveway: head-to-head cost, compaction, drainage, and durability, yards-and-tons tables for both materials, and a 15-year maintenance model.",
  keywords: [
    "crushed concrete vs gravel driveway",
    "recycled concrete aggregate vs gravel",
    "crushed concrete driveway pros cons",
    "RCA for driveway",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/crushed-concrete-vs-gravel-driveway/" },
  openGraph: {
    title: "Crushed Concrete vs Gravel Driveway | Cubic Yard Calculator",
    description:
      "Which driveway base wins — recycled concrete aggregate or virgin gravel? Costs, tonnage tables for both, and the 15-year maintenance math.",
    url: "https://cubicyardcalculator.site/guides/crushed-concrete-vs-gravel-driveway/",
  },
};

const faqs = [
  {
    q: "Is crushed concrete good for a driveway?",
    a: "Yes, for the base and driving surface of a budget driveway. Crushed concrete (recycled concrete aggregate, RCA) compacts into a hard, tight surface that sheds water and resists rutting — it performs like crushed limestone once compacted. Its weak spots are cosmetic: the gray, dusty finish and a bit more dust in dry weather. Use ¾-inch-minus RCA in 4-inch lifts and compact it, just like crushed stone.",
  },
  {
    q: "Is crushed concrete cheaper than gravel?",
    a: "Almost always, per ton. Recycled concrete aggregate typically runs $10–$25 per ton at the quarry gate versus $25–$60 per ton for virgin crushed gravel, because the feedstock is demolition waste the crusher is paid to take. The savings shrink on delivered cost if the RCA crusher is far away and a gravel quarry is local — delivery distance dominates price on bulk loads.",
  },
  {
    q: "How many tons of crushed concrete do I need for a driveway?",
    a: "Multiply cubic yards by about 1.45–1.5. RCA is slightly denser than gravel (roughly 2,900–3,000 lbs per cubic yard versus gravel's 2,800), so a 2-car driveway at 4 inches — about 12 cubic yards — needs roughly 17–18 tons of RCA versus about 17 tons of gravel. Loose RCA varies more than quarried gravel, so order by yards and use the tons figure as an estimate.",
  },
  {
    q: "Does crushed concrete drain as well as gravel?",
    a: "Nearly — with one caveat. Clean ¾-inch-minus RCA drains well because the angular pieces leave voids, but RCA carries more crusher dust than washed gravel, and that dust can migrate and partially seal the surface over time. Over a well-draining subgrade it is fine; over clay, keep the 4-inch perforated-pipe edge drain and crown you would use with gravel anyway.",
  },
  {
    q: "Will a crushed concrete driveway last as long as gravel?",
    a: "The base lasts comparably — 15 to 25 years is realistic for either with maintenance — but the surface needs attention sooner. RCA's finer dust fraction washes and blows off faster than virgin crushed stone, so expect a top-up load a year or two earlier than you would with gravel. The 15-year maintenance model below quantifies the difference.",
  },
  {
    q: "Can I mix crushed concrete with gravel?",
    a: "Yes, and it is a common cost strategy: RCA for the lower base lifts (where its compaction is an asset) and virgin crushed stone for the top 2 inches (where its cleaner, brighter finish looks better). Just keep the materials as separate lifts — blending them in the pile dilutes the advantages of both.",
  },
  {
    q: "What if crushed concrete is not available near me?",
    a: "Substitute crushed limestone or crusher run — they compact almost identically to RCA and cost about the same as other virgin gravels. Do not substitute round river rock or pea gravel: neither locks together, so the driveway ruts under the first heavy vehicle. Our gravel size chart covers which products compact and which do not.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Crushed Concrete vs Gravel Driveway: Cost, Tonnage & 15-Year Maintenance"
      description="Recycled concrete aggregate vs virgin gravel, head to head: installed cost, compaction, drainage, durability, availability, and a 15-year maintenance model — with yards-and-tons tables for both materials."
      slug="crushed-concrete-vs-gravel-driveway"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        For a driveway, <strong>crushed concrete (recycled concrete aggregate, RCA)</strong>{" "}
        and <strong>virgin crushed gravel</strong> are functionally close: both
        are angular, both compact into a hard driving surface, and both need
        about the same volume — roughly <strong>6 yards for a 1-car driveway,
        12 yards for a 2-car, and 20 yards for an RV pad or turnaround</strong>{" "}
        at 4 inches deep. The real differences are <strong>price</strong> (RCA
        typically runs half the per-ton cost of virgin gravel),{" "}
        <strong>finish</strong> (gravel looks better and dusts less), and{" "}
        <strong>availability</strong> (RCA exists only near urban crushing
        operations). If your quarry stocks RCA and you care about budget over
        beauty, it is the rational pick. If the RCA crusher is 40 miles away
        and the gravel pit is next door, delivery eats the savings and gravel
        wins.
      </p>

      <h2>Head-to-head comparison</h2>
      <p>
        Scored for a typical residential driveway — a 2-car, 24×40-foot drive
        at 4 inches of compacted material:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Factor</th><th>Crushed concrete (RCA)</th><th>Virgin crushed gravel</th><th>Winner</th></tr>
        </thead>
        <tbody>
          <tr><td>Material cost per ton</td><td className="num">$10–$25</td><td className="num">$25–$60</td><td>RCA</td></tr>
          <tr><td>Compaction</td><td>Excellent — crusher dust acts like cement between pieces and locks hard</td><td>Excellent (crusher run) to good (washed stone)</td><td>RCA, narrowly</td></tr>
          <tr><td>Drainage</td><td>Good, but dust fraction can slowly seal the surface</td><td>Very good — less fines, more open voids</td><td>Gravel</td></tr>
          <tr><td>Durability / rut resistance</td><td>High when compacted; surface dust washes off sooner</td><td>High; surface holds its finish longer</td><td>Gravel, narrowly</td></tr>
          <tr><td>Appearance</td><td>Dusty gray, industrial look</td><td>Cleaner colors; decorative options exist</td><td>Gravel</td></tr>
          <tr><td>Availability</td><td>Only near urban demolition-crushing operations</td><td>Quarries almost everywhere</td><td>Gravel</td></tr>
          <tr><td>Environmental angle</td><td>Diverts demolition waste from landfill; no new quarrying</td><td>Virgin aggregate from quarries</td><td>RCA</td></tr>
          <tr><td>Consistency</td><td>Varies by crusher and feedstock — ask what you are getting</td><td>Graded to spec (#57, crusher run) — predictable</td><td>Gravel</td></tr>
        </tbody>
      </table>
      <p>
        Notice how close the structural scores are: compaction, rut resistance,
        and load capacity are essentially a wash once both are placed in lifts
        and rolled. You are choosing on <strong>price, looks, and
        logistics</strong> — not on whether the driveway will hold a truck.
      </p>

      <h2>What RCA actually is — and the size to order</h2>
      <p>
        Recycled concrete aggregate is demolition concrete — old sidewalks,
        foundations, parking lots — run through an industrial crusher and
        screened to size. Order <strong>¾-inch-minus RCA</strong>: stone down
        to ¾ inch plus the crusher dust, which is the fraction that makes it
        lock up like pavement under a roller. Avoid unscreened &ldquo;crusher
        waste&rdquo; with chunks bigger than 1 inch or visible rebar, wood, or
        asphalt contamination — reputable crushers magnet-separate the steel
        and screen out the trash, but the product is only as good as the
        operation. One quality check: good RCA smells like clean concrete
        dust, not like a demolition site.
      </p>

      <h2>The density difference: yards are the same, tons are not</h2>
      <p>
        Volume is volume — a 2-car driveway needs the same cubic yards
        regardless of material. But the scale tickets differ because RCA is
        slightly denser than gravel:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material</th><th>Density (lbs/yd&sup3;)</th><th>Tons per yd&sup3;</th></tr>
        </thead>
        <tbody>
          <tr><td>Crushed concrete (RCA)</td><td className="num">~2,900–3,000*</td><td className="num">~1.45–1.5*</td></tr>
          <tr><td>Crushed gravel</td><td className="num">2,800</td><td className="num">1.4</td></tr>
        </tbody>
      </table>
      <p>
        *<strong>Approximate.</strong> Loose RCA varies more than quarried
        gravel because crusher feedstock and moisture differ load to load.
        Order by cubic yards and treat the tons figure as an estimate —
        confirm the scale weight with your supplier before you pay by the ton.
        Our <a href="/calculators/gravel-to-tons-calculator/">gravel-to-tons calculator</a>{" "}
        uses gravel&apos;s 2,800 lbs/yd³ figure, so add roughly 5% when
        converting an RCA order.
      </p>

      <h2>How much to order: both materials, standard driveways</h2>
      <p>
        All figures at <strong>4 inches compacted depth</strong> with 10%
        overage built into the &ldquo;order&rdquo; column for compaction loss
        and spillage. Yards are identical for both materials; tons differ by
        the density factor above (RCA at 1.45 tons/yd³, gravel at 1.4):
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Driveway</th><th>Size (ft)</th><th>Sq ft</th><th>Yards (both)</th><th>Gravel tons</th><th>RCA tons</th><th>Order</th></tr>
        </thead>
        <tbody>
          <tr><td>1-car</td><td className="num">12 × 40</td><td className="num">480</td><td className="num">5.9</td><td className="num">8.3</td><td className="num">8.6</td><td className="num">6.5 yd</td></tr>
          <tr><td>2-car</td><td className="num">24 × 40</td><td className="num">960</td><td className="num">11.9</td><td className="num">16.7</td><td className="num">17.3</td><td className="num">13 yd</td></tr>
          <tr><td>RV pad / turnaround</td><td className="num">40 × 40</td><td className="num">1,600</td><td className="num">19.8</td><td className="num">27.7</td><td className="num">28.7</td><td className="num">22 yd</td></tr>
        </tbody>
      </table>
      <p>
        A driveway shape that is not a clean rectangle? Our{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a> takes
        any length × width × depth. For the full walkthrough of driveway
        depth, crowning, and edging, see our{" "}
        <a href="/guides/how-much-gravel-for-a-driveway/">driveway gravel guide</a>.
      </p>

      <h2>Cost comparison: material and installed</h2>
      <p>
        Typical U.S. ranges, 2026. The material spread is real but delivery
        distance is the hidden variable — a $30/ton delivered RCA load from
        10 miles away beats a $45/ton gravel load from 40 miles away, even
        before the per-ton gap:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Cost line (2-car driveway, ~12 yd)</th><th>RCA</th><th>Virgin gravel</th></tr>
        </thead>
        <tbody>
          <tr><td>Material, per ton (quarry gate)</td><td className="num">$10–$25</td><td className="num">$25–$60</td></tr>
          <tr><td>Material, 17–18 tons</td><td className="num">$175–$450</td><td className="num">$425–$1,020</td></tr>
          <tr><td>Delivery (typical, within 20 mi)</td><td className="num">$75–$150</td><td className="num">$75–$150</td></tr>
          <tr><td>DIY total (material + delivery)</td><td className="num">$250–$600</td><td className="num">$500–$1,170</td></tr>
          <tr><td>Pro-installed (spread, compact, grade)</td><td className="num">$1,200–$2,500</td><td className="num">$1,500–$3,200</td></tr>
        </tbody>
      </table>
      <p>
        The installed gap is smaller than the material gap because labor —
        grading, spreading, rolling — costs the same either way. RCA&apos;s
        real advantage shows on <strong>DIY jobs</strong>, where the material
        is most of the budget.
      </p>

      <h2>The 15-year maintenance model</h2>
      <p>
        Neither driveway is install-and-forget. This model assumes a 2-car
        driveway in a four-season climate, DIY labor valued at zero, and a
        top-up load delivered (not installed):
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Maintenance item</th><th>RCA, 15 yr</th><th>Gravel, 15 yr</th></tr>
        </thead>
        <tbody>
          <tr><td>Annual grading (box blade / landscape rake), 1–2× per year</td><td className="num">$0 DIY / ~$150–$300 pro per visit</td><td className="num">$0 DIY / ~$150–$300 pro per visit</td></tr>
          <tr><td>Top-up loads (fresh surface stone)</td><td className="num">3 loads × ~$250 = $750</td><td className="num">2 loads × ~$550 = $1,100</td></tr>
          <tr><td>Weed control (pre-emergent + spot spray)</td><td className="num">~$30/yr = $450</td><td className="num">~$30/yr = $450</td></tr>
          <tr><td>Edge repair / re-crowning</td><td className="num">~$200</td><td className="num">~$200</td></tr>
          <tr><td><strong>15-year maintenance total (DIY)</strong></td><td className="num"><strong>~$1,400</strong></td><td className="num"><strong>~$1,750</strong></td></tr>
        </tbody>
      </table>
      <p>
        RCA needs <strong>one extra top-up</strong> over 15 years because its
        dust fraction washes and blows off faster than virgin stone&apos;s —
        but each RCA top-up costs roughly half, so RCA still finishes about
        $350 ahead on maintenance. Add the upfront material savings and the
        lifetime gap for a 2-car driveway is roughly{" "}
        <strong>$700–$1,200 in RCA&apos;s favor</strong>. Gravel&apos;s
        counter-argument is aesthetic and logistical, not financial: it looks
        better and it is available everywhere.
      </p>

      <h2>Where RCA is not available</h2>
      <p>
        RCA exists where demolition happens — metro areas and their crushing
        operations. In rural areas, or anywhere the nearest crusher is 50+
        miles out, the delivery bill erases the per-ton advantage. The
        correct substitute is <strong>crushed limestone or crusher run</strong>{" "}
        (sometimes sold as &ldquo;road base&rdquo; or &ldquo;dense grade
        aggregate&rdquo;): it compacts almost identically to RCA because it
        carries the same dust fraction, costs about the same as other virgin
        gravels, and every quarry stocks it. Do <strong>not</strong>{" "}
        substitute round river rock or pea gravel — neither locks together,
        so the driveway ruts under the first heavy vehicle and migrates
        under tires. We break down which products compact and which do not in
        our <a href="/guides/gravel-size-chart/">gravel size chart</a>, and
        compare the two crushed options in{" "}
        <a href="/guides/crushed-stone-vs-pea-gravel/">crushed stone vs pea gravel</a>.
      </p>

      <h2>Installation notes that apply to both</h2>
      <p>
        The material choice matters less than the build. Excavate to firm
        subgrade, lay <strong>woven geotextile fabric</strong> over clay or
        soft soil so the stone does not sink into the mud, place the aggregate
        in <strong>4-inch lifts</strong>, and compact each lift with a plate
        compactor (or a roller for large drives) before adding the next.
        Crown the surface <strong>½ inch per foot</strong> from center to
        edge so water sheets off instead of ponding, and set solid edging —
        steel, timber, or stone — so the material stays where you put it.
        Skipping compaction is the number one reason either driveway fails
        early; uncompacted RCA and uncompacted gravel both rut the same way.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Ordering by tons without checking density.</strong> Tons
        tickets differ between materials — order by yards, convert with the
        right factor. <strong>One deep lift.</strong> Dumping 8 inches and
        rolling the top compacts nothing below the surface.{" "}
        <strong>Skipping fabric on clay.</strong> The stone disappears into
        the mud within two wet seasons. <strong>No crown.</strong> A flat
        driveway holds water, and water is what kills both materials.{" "}
        <strong>Contaminated RCA.</strong> Rebar, wood, or asphalt chunks in
        the load mean a bad crusher — reject it. <strong>Comparing quarry-gate
        prices only.</strong> Delivery distance decides the real per-ton cost
        on bulk loads.
      </p>

      <Faq items={faqs} heading="Crushed Concrete vs Gravel FAQ" />
    </GuideArticle>
  );
}

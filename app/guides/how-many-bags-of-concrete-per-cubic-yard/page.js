import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Many Bags of Concrete Per Cubic Yard? (Table)",
  description:
    "Bag counts per cubic yard for 40, 50, 60, 80 and 90 lb concrete bags, plus when to switch to ready-mix. Free concrete calculator included.",
  keywords: [
    "how many bags of concrete per cubic yard",
    "80 lb bags per yard of concrete",
    "60 lb bags per cubic yard",
    "bags vs ready mix concrete",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-many-bags-of-concrete-per-cubic-yard/" },
  openGraph: {
    title: "How Many Bags of Concrete Per Cubic Yard? | Cubic Yard Calculator",
    description:
      "Bag counts for every bag size, the bags-vs-ready-mix breakpoint, and real cost math. Free concrete calculator.",
    url: "https://cubicyardcalculator.site/guides/how-many-bags-of-concrete-per-cubic-yard/",
  },
};

const faqs = [
  {
    q: "How many 80 lb bags of concrete make a cubic yard?",
    a: "About 45 bags. An 80 lb bag yields roughly 0.60 cubic feet, and 27 / 0.60 = 45 bags. Always round up — you can't pour a partial bag.",
  },
  {
    q: "How many 60 lb bags make a cubic yard?",
    a: "About 60 bags. A 60 lb bag yields roughly 0.45 cubic feet, and 27 / 0.45 = 60 bags.",
  },
  {
    q: "How many 40 lb bags make a cubic yard?",
    a: "About 90 bags. A 40 lb bag yields roughly 0.30 cubic feet, so 27 / 0.30 = 90 bags.",
  },
  {
    q: "How many bags of Quikrete make a cubic yard?",
    a: "The brand doesn't change the math — the bag yield does. For standard Quikrete or Sakrete concrete mixes, one cubic yard takes 45 bags of 80 lb (0.60 cu ft yield), 60 of 60 lb (0.45), 72 of 50 lb (0.375, e.g. Quikrete Fast-Setting), or 90 of 40 lb (0.30): bags per yard = 27 ÷ yield per bag. Always confirm against the exact product label.",
  },
  {
    q: "How many bags for a 10×10 slab?",
    a: "At 4 inches thick: 10 × 10 × 0.333 = 33.33 cubic feet = 1.23 cubic yards, × 45 = 55.56 — round up to 56 bags of 80 lb mix net, 62 with 10% overage. At 6 inches: 1.85 yards → 84 bags net, 93 with overage.",
  },
  {
    q: "When should I use bags instead of ready-mix?",
    a: "Bags win for pours under about 1 to 2 cubic yards — fence posts, small pads, repairs. Above that, ready-mix is usually cheaper per yard and far less labor.",
  },
  {
    q: "Do bag yields vary?",
    a: "Yes. The table uses manufacturer yields, but exact yield varies by mix and moisture. Check the bag label and round up, then add 10% overage for spillage and uneven forms.",
  },
  {
    q: "How many bags of concrete per fence post?",
    a: "About 2 bags of 80 lb mix for a standard post: a 10-inch-diameter hole 30 inches deep holds roughly 1.15 cubic feet of concrete after the post itself displaces its share. Grab a third bag as overage — holes are never perfectly round.",
  },
];

const bagTable = [
  { size: "40 lb", perYard: "90", yield: "0.30 cu ft" },
  { size: "50 lb", perYard: "72", yield: "0.375 cu ft" },
  { size: "60 lb", perYard: "60", yield: "0.45 cu ft" },
  { size: "80 lb", perYard: "45", yield: "0.60 cu ft" },
  { size: "90 lb", perYard: "40", yield: "0.675 cu ft" },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Many Bags of Concrete Per Cubic Yard?"
      description="The bag counts for every common bag size, how the math works, when bags beat ready-mix — and when they definitely don't."
      slug="how-many-bags-of-concrete-per-cubic-yard"
      calculatorHref="/calculators/concrete-calculator/"
      calculatorLabel="Try the concrete calculator"
      updated="2026-10"
      toc={[
        { id: "the-short-answer", label: "The short answer" },
        { id: "how-the-math-works", label: "How the math works" },
        { id: "worked-example-a-10-10-slab-at-4-inches", label: "Worked example: a 10×10 slab at 4 inches" },
        { id: "bag-counts-by-common-project", label: "Bag counts by common project" },
        { id: "bag-counts-for-the-five-most-common-slab-sizes", label: "Bag counts for the five most common slab sizes" },
        { id: "the-1-yard-breakeven-rule", label: "The ~1-yard breakeven rule" },
        { id: "bags-vs-ready-mix-the-breakpoint", label: "Bags vs ready-mix: the breakpoint" },
        { id: "the-real-cost-math", label: "The real cost math" },
        { id: "common-mistakes", label: "Common mistakes" },
      ]}
      references={[
        "Bag yields: manufacturer product data (Quikrete, Sakrete).",
        "Pricing: published contractor cost guides and supplier listings, checked October 2026.",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        One cubic yard of concrete equals 27 cubic feet. Divide 27 by the
        yield of a single bag and you get the count per yard. Here it is in
        one table, using manufacturer bag yields:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Bag size</th><th>Bags per cubic yard</th><th>Yield per bag</th></tr>
        </thead>
        <tbody>
          {bagTable.map((b) => (
            <tr key={b.size}>
              <td className="num">{b.size}</td>
              <td className="num">{b.perYard}</td>
              <td className="num">{b.yield}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        These numbers are the planning baseline — the 45/60/90 rule of
        thumb (45 bags of 80 lb, 60 of 60 lb, 90 of 40 lb) covers the mixes
        most people buy.
      </p>

      <h2 id="how-the-math-works">How the math works</h2>
      <p>
        A bag's yield is the volume of finished concrete it produces, which
        is much less than the volume of dry mix in the bag — mixing and
        compaction shrink it. Take the 27 cubic feet in a yard and divide by
        the bag's yield. For an 80 lb bag yielding 0.60 cubic feet: 27 /
        0.60 = 45 bags. The formula works for any bag size:{" "}
        <strong>bags per yard = 27 ÷ yield in cubic feet</strong>. Real yields
        vary slightly by mix design and how wet you batch, so treat these as
        verified-but-rounded figures and always round your order up.
      </p>

      <h2 id="worked-example-a-10-10-slab-at-4-inches">Worked example: a 10×10 slab at 4 inches</h2>
      <p>
        Volume first: 10 × 10 × 0.333 = 33.3 cubic feet, ÷ 27 ={" "}
        <strong>1.23 cubic yards</strong>. In 80 lb bags: 1.23 × 45 = 55.5 —
        round up to <strong>56 bags</strong>. Add 10% overage and you're at 62
        bags. That's a lot of lifting: at roughly 60 bags an hour of mixing
        work, a 10×10 slab is about the size where ready-mix starts looking
        very attractive.
      </p>

      <h2 id="bag-counts-by-common-project">Bag counts by common project</h2>
      <p>
        Most people don&apos;t buy &ldquo;a cubic yard of bags&rdquo; — they
        buy for a project. Same math, pre-computed, using 80 lb bags (yield
        0.60 cu ft per bag). The &ldquo;order&rdquo; column adds 10% overage
        and rounds up:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>80-lb bags</th><th>Order (with 10%)</th></tr>
        </thead>
        <tbody>
          <tr><td>Fence post (10&Prime; hole, 30&Prime; deep)</td><td className="num">2</td><td className="num">3</td></tr>
          <tr><td>Deck footing (12&Prime; &times; 36&Prime;)</td><td className="num">4</td><td className="num">5</td></tr>
          <tr><td>Concrete steps (3 steps, 4 ft wide)</td><td className="num">11</td><td className="num">13</td></tr>
          <tr><td>12&times;12 patio slab, 4&Prime; thick</td><td className="num">80</td><td className="num">88</td></tr>
        </tbody>
      </table>
      <p>
        A fence post is the classic small job: a 10-inch hole 30 inches deep
        needs about 2 bags of 80 lb mix after the post itself displaces its
        share — grab a third bag and you have margin for an uneven hole. A
        12&times;12 slab is where the bag route starts to hurt: 80+ bags is
        two tons of lifting, which is exactly what the{" "}
        <a href="/guides/bagged-vs-ready-mix-concrete/">
          bagged vs ready-mix guide
        </a>{" "}
        helps you decide.
      </p>

      <h2 id="bag-counts-for-the-five-most-common-slab-sizes">Bag counts for the five most common slab sizes</h2>
      <p>
        Slabs are what most people actually buy bags for, so here is the
        same math pre-computed for the five slab sizes homeowners pour
        most — an 8×8 patio, a 10×10 shed pad, a 10×12 small patio, a
        12×12 patio, and a 20×20 garage floor — at the two standard
        residential thicknesses, 4 and 6 inches.{" "}
        <strong>Convention used in both tables:</strong> cubic yards =
        length × width × (thickness in feet) ÷ 27; then{" "}
        <strong>Net bags</strong> = round up(yards × 45) for 80 lb bags
        (0.60 cu ft yield), and <strong>Order</strong> = round up(Net ×
        1.10) — a 10% waste buffer for spillage, uneven forms, and
        subgrade. Every figure below is built from the{" "}
        <a href="/calculators/concrete-calculator/">concrete calculator</a>{" "}
        site&apos;s manufacturer-yield constants.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Slab size</th><th>Cubic yards @ 4&Prime;</th><th>Net 80-lb bags</th><th>Order (+10%)</th></tr>
        </thead>
        <tbody>
          <tr><td>8&times;8</td><td className="num">0.79</td><td className="num">36</td><td className="num">40</td></tr>
          <tr><td>10&times;10</td><td className="num">1.23</td><td className="num">56</td><td className="num">62</td></tr>
          <tr><td>10&times;12</td><td className="num">1.48</td><td className="num">67</td><td className="num">74</td></tr>
          <tr><td>12&times;12</td><td className="num">1.78</td><td className="num">80</td><td className="num">88</td></tr>
          <tr><td>20&times;20</td><td className="num">4.94</td><td className="num">223</td><td className="num">246</td></tr>
        </tbody>
      </table>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Slab size</th><th>Cubic yards @ 6&Prime;</th><th>Net 80-lb bags</th><th>Order (+10%)</th></tr>
        </thead>
        <tbody>
          <tr><td>8&times;8</td><td className="num">1.19</td><td className="num">54</td><td className="num">60</td></tr>
          <tr><td>10&times;10</td><td className="num">1.85</td><td className="num">84</td><td className="num">93</td></tr>
          <tr><td>10&times;12</td><td className="num">2.22</td><td className="num">100</td><td className="num">110</td></tr>
          <tr><td>12&times;12</td><td className="num">2.67</td><td className="num">120</td><td className="num">132</td></tr>
          <tr><td>20&times;20</td><td className="num">7.41</td><td className="num">334</td><td className="num">368</td></tr>
        </tbody>
      </table>
      <p>
        Four inches is the standard for patios, walkways, and shed pads —
        anything carrying people and light furniture. Step up to 6 inches
        for driveways, garage floors, and anything with vehicle weight or
        heavy equipment. If your slab is an odd size or a different
        thickness, the{" "}
        <a href="/calculators/concrete-calculator/">concrete calculator</a>{" "}
        runs the same formula instantly. Two planning notes: most slabs sit
        on about 4 inches of compacted base — see{" "}
        <a href="/guides/how-much-gravel-under-a-concrete-slab/">
          how much gravel under a concrete slab
        </a>{" "}
        to size it — and if your site needs regrading or fill before the
        slab, the{" "}
        <a href="/calculators/dirt-calculator/">dirt calculator</a>{" "}
        estimates that volume so you&apos;re not pouring concrete into a
        low spot.
      </p>

      <h2 id="the-1-yard-breakeven-rule">The ~1-yard breakeven rule</h2>
      <p>
        The materials math alone settles this: at $6 per 80 lb bag, one
        cubic yard via bags costs 45 × $6 = <strong>$270 in materials</strong>
        — before a single hour of mixing — while ready-mix typically runs
        $125–$195 per yard delivered. On price alone, bags lose at well
        under a yard. What keeps bags winning below ~1 yard is everything
        else: ready-mix short-load fees ($50–$200) and plant minimums punish
        tiny orders, while a couple of bags and a wheelbarrow don&apos;t.
      </p>
      <p>
        At about 1 cubic yard the balance flips for good. A 10×12 slab at
        4 inches is 1.48 yards — 74 bags to order, haul, and mix, roughly
        three tons of bag weight through your arms — versus one truck in
        twenty minutes. Beyond the breakeven, every extra bag is money and
        sweat you didn&apos;t need to spend. If the project is at or past
        this size and you&apos;re thinking about hiring it out instead,{" "}
        <a href="https://calcbid.com/guides/how-to-bid-concrete-slab">
          get a pro quote
        </a>{" "}
        to see what a contractor would charge for your slab. The full
        bags-vs-delivery decision, including when the short-load fee
        flips back in bags&apos; favor, is in the{" "}
        <a href="/guides/bagged-vs-ready-mix-concrete/">
          bagged vs ready-mix guide
        </a>
        .
      </p>

      <h2 id="bags-vs-ready-mix-the-breakpoint">Bags vs ready-mix: the breakpoint</h2>
      <p>
        Bags make sense for small, irregular pours — fence posts, small pads,
        repairs — where the ready-mix minimum and short-load fee would punish
        you. But once you're past roughly 1 to 2 cubic yards, ready-mix
        delivery is usually cheaper per yard <em>and</em> you skip hours of
        mixing and hauling. A 10×20 driveway at 4 inches (2.47 yards) is 112
        bags of 80 lb mix — over 4.5 tons of bags to move, versus one truck
        in 20 minutes. Watch for short-load fees ($50–$200) on small
        ready-mix orders under about 4 yards; for tiny pours, bags still win.
      </p>

      <h2 id="the-real-cost-math">The real cost math</h2>
      <p>
        Ready-mix typically runs $125–$195 per cubic yard delivered (2026,
        region-dependent). Compare that against the bag route: bags-per-yard ×
        price per bag + your time. At $6 per 80 lb bag, 45 bags costs $270 in
        materials alone — before you count the hours of mixing. The breakeven
        usually lands well under 2 yards. Above the breakeven, every extra
        bag is money and sweat you didn't need to spend.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        <strong>Forgetting the overage.</strong> Forms leak and subgrade is
        never perfectly level — 10% extra is the industry standard.{" "}
        <strong>Using the dry-mix volume.</strong> A bag's cubic-footage on
        the shelf isn't its yield; always use the finished-concrete yield.{" "}
        <strong>Ordering bags for a big pour.</strong> Above ~2 yards, the bag
        route is the most expensive and slowest way to move concrete.{" "}
        <strong>Mixing inches and feet.</strong> Convert thickness to feet
        first — 4 inches is 0.333 feet, not 4.
      </p>

      <Faq items={faqs} heading="Bag count FAQ" />
    </GuideArticle>
  );
}

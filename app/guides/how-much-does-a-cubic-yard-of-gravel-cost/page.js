import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Does a Cubic Yard of Gravel Cost? Bulk, Bagged & Per-Ton Prices",
  description:
    "How much does a cubic yard of gravel cost in 2026? Bulk prices by type ($40–$70/yd typical), bagged gravel math (54 bags = $243/yd), per-ton equivalents at 1.40 tons/yd³, delivery fees, and cost-by-project tables.",
  keywords: [
    "how much does a cubic yard of gravel cost",
    "gravel cost per cubic yard",
    "gravel cost per ton",
    "bulk gravel price per yard",
    "bagged gravel cost per cubic yard",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-does-a-cubic-yard-of-gravel-cost/" },
  openGraph: {
    title: "How Much Does a Cubic Yard of Gravel Cost? | Cubic Yard Calculator",
    description:
      "Bulk vs bagged gravel prices for 2026: per-yard costs by type, the 54-bag math, per-ton equivalents, delivery fees, and a worked driveway example.",
    url: "https://cubicyardcalculator.site/guides/how-much-does-a-cubic-yard-of-gravel-cost/",
  },
};

const toc = [
  { id: "the-short-answer", label: "The short answer" },
  { id: "bulk-gravel-prices-by-type", label: "Bulk gravel prices by type" },
  { id: "bagged-gravel-math", label: "Bagged gravel math" },
  { id: "per-ton-equivalents", label: "Per-ton prices at site densities" },
  { id: "delivery-fees", label: "Delivery fees" },
  { id: "cost-by-project", label: "Cost by project" },
  { id: "when-gravel-is-the-wrong-buy", label: "When gravel is the wrong buy" },
  { id: "buying-tips", label: "Buying tips & common mistakes" },
];

const faqs = [
  {
    q: "How much does a cubic yard of gravel cost?",
    a: "Bulk gravel typically costs $40–$70 per cubic yard (typical US range, as of Oct 2026), depending on type and your metro. Crusher run and road base sit at the low end ($40–$55/yd); pea gravel and #57 stone land in the middle ($45–$65/yd); decorative river rock and marble chips cost more ($60–$120/yd). Delivery is usually a separate $50–$150 per trip, and bagged gravel from a home center runs about $243 per cubic yard — so bulk wins on any project over roughly a quarter yard.",
  },
  {
    q: "How many bags of gravel are in a cubic yard?",
    a: "54 bags. The standard 50-lb bag of landscape stone holds about 0.5 cubic feet (per the site's STONE_BAG_FT3 constant), and a cubic yard holds 27 cubic feet — so 27 ÷ 0.5 = 54 bags. At a typical $4.50 per bag that is $243 for one cubic yard, versus $40–$70 for the same yard bought in bulk.",
  },
  {
    q: "How much does gravel cost per ton?",
    a: "Typical US prices put bulk gravel at roughly $29–$50 per ton. The conversion follows from the site's density constant: crushed stone weighs 2,800 lbs per cubic yard, or 1.40 tons/yd³, so $40–$70 per yard ÷ 1.40 = $28.57–$50 per ton. Pea gravel is slightly lighter at 2,700 lbs/yd³ (1.35 tons), so its per-ton equivalent runs a touch higher for the same per-yard price.",
  },
  {
    q: "Is it cheaper to buy gravel in bulk or bags?",
    a: "Bulk is dramatically cheaper once you need more than about a quarter to half a cubic yard. Bagged gravel costs roughly $200–$400 per cubic-yard-equivalent at home-center prices, while bulk gravel runs $40–$70 per yard — bags carry a 3–6× premium. Bags make sense only for small touch-ups, areas a dump truck can't reach, or when you need a specific decorative stone your local yard doesn't stock in bulk.",
  },
  {
    q: "How much is gravel delivery?",
    a: "Typically $50–$150 per trip within a local haul radius (typical US range, as of Oct 2026). Many suppliers enforce a delivery minimum of 2–3 cubic yards or a minimum order fee — a $75 flat fee on a single yard effectively doubles your cost. If you have a trailer and a nearby yard, picking up yourself avoids the fee entirely.",
  },
  {
    q: "How much gravel do I need for a 10×40 driveway at 4 inches?",
    a: "4.938 cubic yards. The math: 10 × 40 × (4/12) feet = 133.33 cubic feet ÷ 27 = 4.938 yd³. At $40–$70 per yard, the material costs $198–$346; add the standard 10% overage and the order becomes 5.43 yards, or $217–$380. Run your exact dimensions through the gravel calculator to get your order quantity.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Does a Cubic Yard of Gravel Cost? Bulk, Bagged & Per-Ton Prices"
      description="Bulk gravel runs $40–$70 per cubic yard in 2026, bags run about $243 per yard-equivalent, and delivery adds $50–$150 per trip. Type-by-type prices, the 54-bag math, per-ton conversions, and worked project costs."
      slug="how-much-does-a-cubic-yard-of-gravel-cost"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Open the gravel calculator"
      updated="2026-10"
      toc={toc}
      references={[
        "HomeGuide 2026 bulk gravel cost data (typical US ranges)",
        "US supplier price listings, Oct 2026",
        "ASTM C33 aggregate density ranges",
        "Site's published density variants (lib/calc.js)",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <p>
        <em>All prices are typical US ranges, as of Oct 2026.</em>
      </p>

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        A cubic yard of <strong>bulk gravel costs $40–$70</strong> in 2026
        for common landscape and driveway stone (typical US range).
        Decorative stones — river rock, marble chips — cost more, roughly
        $60–$120 per yard. <strong>Delivery adds $50–$150 per trip</strong>,
        and a home-center <strong>bag</strong> is a completely different
        price tier: the standard 50-lb bag holds about 0.5 cubic feet, so a
        full yard takes 54 bags, which works out to about{" "}
        <strong>$243 per yard</strong> at $4.50 a bag. The rule of thumb is
        simple: if you need more than about a quarter of a cubic yard, bulk
        delivery wins.
      </p>

      <h2 id="bulk-gravel-prices-by-type">Bulk gravel prices by type</h2>
      <p>
        Not all gravel is priced alike. Crusher run and road base are
        quarry staples that need no washing; pea gravel and decorative
        stone cost more to process, screen, and transport. Here is what a
        cubic yard of material alone typically costs in 2026, before
        delivery:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Gravel type</th><th>Price per cubic yard</th><th>Best for</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Crusher run / road base (ABC)</td>
            <td className="num">$40–$55</td>
            <td>Driveway bases, compactable sub-base</td>
          </tr>
          <tr>
            <td>#57 stone (¾″ crushed)</td>
            <td className="num">$45–$65</td>
            <td>Driveways, drainage, French drains</td>
          </tr>
          <tr>
            <td>Pea gravel</td>
            <td className="num">$45–$65</td>
            <td>Walkways, patios, play areas</td>
          </tr>
          <tr>
            <td>Decomposed granite</td>
            <td className="num">$45–$70</td>
            <td>Paths, xeriscaping, patio surfaces</td>
          </tr>
          <tr>
            <td>River rock</td>
            <td className="num">$60–$120</td>
            <td>Decorative beds, ponds, borders</td>
          </tr>
          <tr>
            <td>White marble chips</td>
            <td className="num">$75–$120</td>
            <td>High-visibility decorative landscaping</td>
          </tr>
          <tr>
            <td>Crushed concrete (recycled)</td>
            <td className="num">$30–$50</td>
            <td>Budget base, environmentally friendly option</td>
          </tr>
        </tbody>
      </table>
      <p>
        Regional supply dominates these numbers. A yard in a quarry state
        (Pennsylvania, Texas, Florida) prices at the low end; a yard in a
        coastal metro that imports aggregate lands at the high end. These
        ranges aggregate published 2026 figures from HomeGuide ($15–$75/yd
        bulk) and independent cost calculators ($30–$50/yd for the stone
        alone, $40–$70/yd delivered), so treat them as the typical band —
        your local quote may sit slightly outside it.
      </p>

      <h2 id="bagged-gravel-math">Bagged gravel math: why bulk wins past ~¼ yard</h2>
      <p>
        Home centers sell landscape stone in 40–50 lb bags that hold about{" "}
        <strong>0.5 cubic feet each</strong> (the site&apos;s STONE_BAG_FT3
        constant). A cubic yard is 27 cubic feet, so:
      </p>
      <p>
        <strong>27 ÷ 0.5 = 54 bags per cubic yard.</strong> At a typical
        $4.50 per bag: <strong>54 × $4.50 = $243 per cubic yard</strong>.
      </p>
      <p>
        Compare that to $40–$70 for bulk. Bags carry a{" "}
        <strong>3–6× premium</strong> — you are paying for small packaging,
        pallet handling, and shelf space. At $5–$7 per bag (a common
        home-center price for decorative stone), the yard-equivalent climbs
        to $270–$380. Bags are the right call only when you need less than
        about a quarter to half yard, when a dump truck cannot reach the
        site, or when you need a specific stone your local yard does not
        carry in bulk.
      </p>
      <p>
        The break-even point is worth calculating for your job. Suppose you
        need half a yard: bags cost 27 × $4.50 = <strong>$122</strong>, bulk
        costs $20–$35 plus a $50–$150 delivery fee — so bags win unless you
        can pick up. At a full yard, bags cost <strong>$243</strong> while
        bulk costs $40–$70 plus delivery; bulk wins even with the priciest
        trip fee. Somewhere between half a yard and a full yard is the
        crossover for most homeowners, which is why &ldquo;a quarter yard
        of bags, anything more in bulk&rdquo; is the working rule.
      </p>

      <h2 id="per-ton-equivalents">Per-ton equivalents at site densities</h2>
      <p>
        Yards sell stone by weight — the weighbridge measures tons, not
        cubic yards — so you will often be quoted a per-ton price. The
        conversion uses this site&apos;s published densities, which follow
        ASTM C33 typical loose bulk values:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material (site variant)</th><th>lbs/yd³</th><th>Tons per yard</th><th>$40–$70/yd becomes…</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Crushed stone (typical)</td>
            <td className="num">2,800</td>
            <td className="num">1.40</td>
            <td className="num">$28.57–$50.00 → <strong>$29–$50/ton</strong></td>
          </tr>
          <tr>
            <td>Pea gravel</td>
            <td className="num">2,700</td>
            <td className="num">1.35</td>
            <td className="num">$29.63–$51.85 → <strong>$30–$52/ton</strong></td>
          </tr>
          <tr>
            <td>River rock</td>
            <td className="num">2,900</td>
            <td className="num">1.45</td>
            <td className="num">$27.59–$48.28 → <strong>$28–$48/ton</strong></td>
          </tr>
          <tr>
            <td>Decomposed granite</td>
            <td className="num">2,650</td>
            <td className="num">1.33</td>
            <td className="num">$30.08–$52.63 → <strong>$30–$53/ton</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        So when a yard quotes you $35 per ton for crushed stone, the
        math — $35 × 1.40 = $49 per yard — lands squarely inside the bulk
        range above. If a quote does not, either the stone is premium or
        the delivery fee is hiding in the price.
      </p>
      <p>
        One more quoting trap: some yards list an attractive per-ton price
        and then charge a separate &ldquo;fuel surcharge&rdquo; or
        &ldquo;environmental fee&rdquo; at checkout. Always ask for the
        out-the-door total for your exact yardage before comparing. And if
        you are ordering multiple materials — gravel for the driveway plus
        topsoil for the beds, say — get them on one ticket from one yard:
        many suppliers run one truck with a split load, which means one
        delivery fee instead of two, often saving you $50–$150 outright.
      </p>

      <h2 id="delivery-fees">Delivery fees: the $50–$150 line item</h2>
      <p>
        Material price is only half the invoice. <strong>Delivery typically
        runs $50–$150 per trip</strong> within a local haul radius (typical
        US range, as of Oct 2026), and the fee is per load, not per yard.
        That structure punishes small orders: a $75 delivery fee on 1 yard
        of $50 stone makes your effective price $125/yd, while the same fee
        spread over a 10-yard load adds just $7.50/yd.
      </p>
      <p>
        Watch for three fee structures: (1) a <strong>flat trip fee</strong>,
        most common; (2) a <strong>delivery minimum</strong> — many yards
        require 2–3 yards minimum or tack on a short-load surcharge; and
        (3) <strong>distance surcharges</strong> beyond 15–20 miles, often
        $1–$3 per yard per extra mile. If you own or can borrow a trailer
        and the yard is close, self-haul of a few yards is often the
        cheapest option — a ¾-ton pickup bed holds roughly a yard of stone,
        well under most payload limits.
      </p>

      <h2 id="cost-by-project">Cost by project: worked examples</h2>
      <p>
        Material-only costs for common projects, using the $40–$70/yd bulk
        range. Run your exact dimensions through the{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a> to
        get your order quantity — the worked math below is the same formula
        it uses (length × width × depth ÷ 27, plus 10% overage).
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Volume</th><th>Material cost</th><th>With 10% overage</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Walkway 3×30 ft @ 3 in</td>
            <td className="num">0.83 yd³</td>
            <td className="num">$33–$58</td>
            <td className="num">$37–$64</td>
          </tr>
          <tr>
            <td>Patio base 10×10 ft @ 4 in</td>
            <td className="num">1.23 yd³</td>
            <td className="num">$49–$86</td>
            <td className="num">$54–$95</td>
          </tr>
          <tr>
            <td>French drain 50 ft (1×1 ft trench)</td>
            <td className="num">1.85 yd³</td>
            <td className="num">$74–$130</td>
            <td className="num">$81–$143</td>
          </tr>
          <tr>
            <td>Driveway 10×40 ft @ 4 in</td>
            <td className="num"><strong>4.938 yd³</strong></td>
            <td className="num"><strong>$198–$346</strong></td>
            <td className="num"><strong>$217–$380</strong></td>
          </tr>
          <tr>
            <td>Driveway 12×50 ft @ 4 in</td>
            <td className="num">7.41 yd³</td>
            <td className="num">$296–$519</td>
            <td className="num">$326–$570</td>
          </tr>
        </tbody>
      </table>
      <p>
        The driveway row is worth reading twice: <strong>10 × 40 × (4/12)
        ft = 133.33 ft³ ÷ 27 = 4.938 yd³</strong>, and $40–$70/yd prices it
        at $198–$346. Add 10% overage — 5.43 yards — and the order becomes
        $217–$380 before delivery. That is the whole budget for a
        single-layer stone driveway: see our{" "}
        <a href="/guides/how-much-gravel-for-a-driveway/">gravel driveway
        guide</a> for depth choices, and compare stone types in{" "}
        <a href="/guides/crushed-stone-vs-pea-gravel/">crushed stone vs pea
        gravel</a>.
      </p>

      <h2 id="when-gravel-is-the-wrong-buy">When gravel is the wrong buy</h2>
      <p>
        Gravel is not always the cheapest way to fill a cubic yard. Three
        alternatives routinely undercut it:
      </p>
      <p>
        <strong>Crushed concrete (recycled aggregate)</strong> at
        $30–$50/yd runs 20–40% cheaper than virgin crushed stone and
        compacts just as well for driveway bases, shed pads, and parking
        areas. It looks industrial, not decorative — but under 2 inches of
        surface stone, nobody sees it. <strong>Crusher run from a quarry
        direct</strong> skips the landscape-yard markup entirely: quarries
        often sell at $25–$40/yd picked up, 20–30% under retail yard
        prices, though you will haul it yourself.{" "}
        <strong>Decomposed granite</strong> at $45–$70/yd costs about the
        same as gravel but packs into a firm, wheelchair-friendly surface
        for paths and patios where loose gravel migrates and annoys.
      </p>
      <p>
        There is also the case for not buying aggregate at all. If your
        driveway needs only a cosmetic refresh — the base is sound but the
        surface is thin and gray — a 1-inch top-up of fresh stone costs a
        fraction of a full rebuild and buys 3–5 years. A 12×40 ft driveway
        topped at 1 inch needs just 1.48 yd³: $59–$104 of stone. Conversely,
        if the base is failing (ruts, mud pumping up through the stone),
        more stone on top is throwing money into a hole — the fix is
        excavation and a compacted crusher-run base, not a thicker surface
        layer. Compare the full picture in{" "}
        <a href="/guides/crushed-concrete-vs-gravel-driveway/">crushed
        concrete vs gravel</a> and{" "}
        <a href="/guides/decomposed-granite-vs-gravel/">decomposed granite
        vs gravel</a>.
      </p>

      <h2 id="buying-tips">Buying tips &amp; common mistakes</h2>      <p>
        <strong>Get the delivered quote in writing.</strong> Per-yard
        material price means nothing until the delivery fee, minimum order,
        and sales tax are on the same quote. <strong>Match the stone to the
        job.</strong> Crusher run compacts and locks — it is the driveway
        base stone; pea gravel is rounded and shifts — it is a surface
        stone. Buying the wrong type costs twice. <strong>Do not order
        exact volume.</strong> Always add 10% overage (the gravel calculator
        does this by default) — uneven ground, spreading losses, and
        compaction eat the difference. <strong>Ask whether the price is per
        ton or per yard</strong> before comparing quotes — at 1.40
        tons/yd³, a $35/ton quote equals $49/yd, not $35.{" "}
        <strong>Time it for fall or winter</strong> if you can: aggregate
        prices often dip 10–20% off-peak when construction demand cools.{" "}
        <strong>Check for recycled crushed concrete</strong> — it runs
        $30–$50/yd, compacts well, and performs nearly identically to
        virgin stone for bases and driveways.
      </p>

      <Faq items={faqs} heading="Gravel Cost FAQ" />
    </GuideArticle>
  );
}

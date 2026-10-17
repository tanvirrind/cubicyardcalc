import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Does a Cubic Yard of Fill Dirt Cost? The Cheapest Material You'll Buy",
  description:
    "How much does a cubic yard of fill dirt cost in 2026? $10–$25/yd typical (often free locally), screened vs unscreened pricing, per-ton equivalents at 1.10 tons/yd³, delivery minimums, and the settlement buffer that decides your real order.",
  keywords: [
    "how much does a cubic yard of fill dirt cost",
    "fill dirt cost per cubic yard",
    "fill dirt price per yard",
    "screened fill dirt price",
    "cheap fill dirt near me",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-does-a-cubic-yard-of-fill-dirt-cost/" },
  openGraph: {
    title: "How Much Does a Cubic Yard of Fill Dirt Cost? | Cubic Yard Calculator",
    description:
      "Fill dirt runs $10–$25 per cubic yard in 2026 — and it's often free locally. Screened vs unscreened pricing, per-ton math, delivery minimums, and the settlement buffer.",
    url: "https://cubicyardcalculator.site/guides/how-much-does-a-cubic-yard-of-fill-dirt-cost/",
  },
};

const toc = [
  { id: "the-short-answer", label: "The short answer" },
  { id: "screened-vs-unscreened", label: "Screened vs unscreened fill dirt" },
  { id: "free-fill-dirt", label: "When fill dirt is free" },
  { id: "per-ton-equivalents", label: "Per-ton prices at site densities" },
  { id: "delivery-minimums", label: "Delivery minimums: the real cost driver" },
  { id: "settlement-buffer", label: "The settlement buffer" },
  { id: "cost-by-project", label: "Cost by project" },
  { id: "what-to-ask-the-supplier", label: "What to ask the supplier" },
  { id: "buying-tips", label: "Buying tips & common mistakes" },
];

const faqs = [
  {
    q: "How much does a cubic yard of fill dirt cost?",
    a: "Purchased fill dirt typically costs $10–$25 per cubic yard (typical US range, as of Oct 2026). Unscreened common fill runs $5–$15/yd; screened/clean fill runs $12–$25/yd; structural fill for engineered work runs $15–$30/yd. But fill dirt is the one material you can often get free: construction sites with excess excavation and municipal projects frequently give clean fill away rather than pay to haul it.",
  },
  {
    q: "Is fill dirt cheaper than topsoil?",
    a: "Much cheaper. Fill dirt runs $10–$25 per cubic yard versus $25–$60 for screened topsoil — you're not paying for screening or organic content. Use fill dirt for structural filling and grade changes (where nothing grows), then cap with 4–6 inches of screened topsoil wherever you'll plant. See our topsoil vs fill dirt guide for the full comparison.",
  },
  {
    q: "How much does fill dirt cost per ton?",
    a: "Roughly $9–$23 per ton. This site's published density for screened fill is 2,200 lbs per cubic yard — 1.10 tons/yd³ — so $10–$25 per yard ÷ 1.10 = $9.09–$22.73 per ton. Clay-heavy fill (2,500 lbs/yd³ = 1.25 tons) converts lower per ton; sandy fill (2,400 lbs/yd³ = 1.20 tons) converts about the same.",
  },
  {
    q: "Why is my fill dirt delivery so expensive relative to the material?",
    a: "Because the delivery fee is flat per trip while the material is dirt cheap — literally. A $50–$150 delivery fee on 2 yards of $15 fill doubles or triples your effective price. Small orders often carry a $100–$250 minimum total. Fill dirt is the material where combining trips, ordering with a neighbor, or self-hauling pays off most.",
  },
  {
    q: "How much extra fill dirt should I order for settlement?",
    a: "Add 10–20% on top of your calculated volume — 15% is the standard buffer for fill dirt, which settles 10–15% as it packs down. Deep fills compacted in lifts can need up to 20%. Topping off later means paying a second delivery fee that usually costs more than the extra yard would have, so order the buffer up front.",
  },
  {
    q: "Can I use fill dirt under sod or grass seed?",
    a: "As the base, yes; as the growing layer, no. Build grade with fill dirt, then cap with 4–6 inches of screened topsoil — sod roots need the first few inches to be real growing soil. Fill dirt has little organic matter and often compacts too hard for roots. See how much topsoil for sod for the cap-layer math.",
  },
  {
    q: "How much fill dirt do I need to fill a 10×10×2 ft hole?",
    a: "7.407 cubic yards before settlement: 10 × 10 × 2 = 200 cubic feet ÷ 27 = 7.407 yd³. Add the 15% settlement buffer and the order becomes 8.52 yards. At $10–$25/yd that's $85–$213 in material — plus the delivery fee, which may cost nearly as much as the dirt itself. Use the fill dirt calculator for your exact hole.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Does a Cubic Yard of Fill Dirt Cost? The Cheapest Material You'll Buy"
      description="Fill dirt runs $10–$25 per cubic yard in 2026 — and it's often free locally. Screened vs unscreened pricing, per-ton conversions at 1.10 tons/yd³, delivery minimums, the settlement buffer, and worked project costs."
      slug="how-much-does-a-cubic-yard-of-fill-dirt-cost"
      calculatorHref="/calculators/fill-dirt-calculator/"
      calculatorLabel="Open the fill dirt calculator"
      updated="2026-10"
      toc={toc}
      references={[
        "HomeGuide / Angi / HomeAdvisor 2026 fill dirt cost data (typical US ranges)",
        "US supplier price listings, Oct 2026",
        "Site's published density variants (lib/calc.js)",
        "Site's soil ordering & settlement guide (how-much-extra-soil-to-order)",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <p>
        <em>All prices are typical US ranges, as of Oct 2026.</em>
      </p>

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        A cubic yard of purchased <strong>fill dirt costs $10–$25</strong>{" "}
        in 2026 (typical US range) — the cheapest bulk material in
        landscaping. Unscreened common fill runs <strong>$5–$15/yd</strong>,
        screened clean fill <strong>$12–$25/yd</strong>, and structural
        fill <strong>$15–$30/yd</strong>. The twist: fill dirt is the one
        material that is <strong>often free</strong> — construction sites
        with excess excavation routinely give it away rather than pay
        hauling. What is never free is the truck: <strong>delivery runs
        $50–$150 per trip</strong> with minimums that can double your
        effective price on small orders.
      </p>

      <h2 id="screened-vs-unscreened">Screened vs unscreened fill dirt</h2>
      <p>
        &ldquo;Fill dirt&rdquo; covers everything excavated below the
        topsoil layer. What you pay depends on how processed it is:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Fill dirt type</th><th>Price per cubic yard</th><th>Best for</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Common / unscreened fill</td>
            <td className="num">$5–$15</td>
            <td>Basic grading, berms, low spots (may contain rocks/roots)</td>
          </tr>
          <tr>
            <td>Clean / screened fill</td>
            <td className="num">$12–$25</td>
            <td>Foundation backfill, grade work needing predictability</td>
          </tr>
          <tr>
            <td>Structural / engineered fill</td>
            <td className="num">$15–$30</td>
            <td>Under slabs, retaining walls, inspected work</td>
          </tr>
          <tr>
            <td>Subsoil fill</td>
            <td className="num">$8–$15</td>
            <td>Deep fills where nothing grows anyway</td>
          </tr>
        </tbody>
      </table>
      <p>
        These bands match published 2026 figures from independent cost
        guides (fill $8–$25; clean $12–$20; common $5–$12) and HomeAdvisor
        ($5–$30). Unscreened fill is cheaper but arrives with clay clods,
        rocks, and roots — fine for a berm, annoying for a yard you will
        grade by hand. One more rule: fill dirt is for structure, not
        growing. Anything you will plant needs a 4–6 inch screened topsoil
        cap — see <a href="/guides/topsoil-vs-fill-dirt/">topsoil vs fill
        dirt</a>.
      </p>

      <h2 id="free-fill-dirt">When fill dirt is free</h2>
      <p>
        Contractors pay to haul excess excavation away, so sites with a
        dig — new construction, pools, basements — often list clean fill as
        free if you take it. Municipal projects sometimes do the same.
        Before paying for anything, check local listings, community
        boards, and contractors in your area for free clean fill. Three
        cautions: <strong>verify it is clean</strong> (construction debris,
        concrete chunks, and contaminated urban soil are common);
        <strong>you usually arrange pickup or pay the hauling</strong> — the
        &ldquo;free&rdquo; is the material, not the truck; and{" "}
        <strong>inspect the soil type</strong> — heavy clay or rubble-laced
        fill can be more trouble than cheap fill is worth. Free fill for a
        deep base is a genuine win; free fill for a yard you will live on
        needs a hard look first.
      </p>

      <h2 id="per-ton-equivalents">Per-ton equivalents at site densities</h2>
      <p>
        Using this site&apos;s published fill-dirt densities:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material (site variant)</th><th>lbs/yd³</th><th>Tons per yard</th><th>$10–$25/yd becomes…</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Screened fill (typical)</td>
            <td className="num">2,200</td>
            <td className="num">1.10</td>
            <td className="num">$9.09–$22.73 → <strong>$9–$23/ton</strong></td>
          </tr>
          <tr>
            <td>Sandy soil</td>
            <td className="num">2,400</td>
            <td className="num">1.20</td>
            <td className="num">$8.33–$20.83 → <strong>$8–$21/ton</strong></td>
          </tr>
          <tr>
            <td>Clay soil</td>
            <td className="num">2,500</td>
            <td className="num">1.25</td>
            <td className="num">$8.00–$20.00 → <strong>$8–$20/ton</strong></td>
          </tr>
        </tbody>
      </table>

      <h2 id="delivery-minimums">Delivery minimums: the real cost driver</h2>
      <p>
        On a $15/yard material, a $75 delivery fee is a <strong>500%
        surcharge</strong>. This is where fill dirt orders actually get
        expensive:
      </p>
      <ul>
        <li><strong>Flat delivery fees</strong> of $50–$100 for local hauls (within ~20 miles), $50–$150 for standard dump-truck delivery.</li>
        <li><strong>Small-load minimums</strong> of $100–$250 total — a common policy where the yard won&apos;t roll the truck for less.</li>
        <li><strong>Distance surcharges</strong> of $2–$5 per mile beyond the local radius.</li>
        <li><strong>Short-load / minimum-order fees</strong> on orders under 5 yards at some yards.</li>
      </ul>
      <p>
        The economics flip at volume: a $100 fee spread over a 10-yard
        load adds $10/yd; spread over 2 yards it adds $50/yd. Practical
        moves: combine your fill order with topsoil or gravel from the same
        yard (one trip, one fee), order with a neighbor splitting the
        load, or self-haul small quantities — even a pickup bed at ~1 yard
        per trip beats a minimum-fee delivery on a 2-yard order.
      </p>

      <h2 id="settlement-buffer">The settlement buffer</h2>
      <p>
        Fill dirt arrives loose and packs down. Per our{" "}
        <a href="/guides/how-much-extra-soil-to-order/">soil ordering
        guide</a>, <strong>fill dirt settles 10–15%</strong>, so the
        standard planning buffer is <strong>15%</strong> — deep fills that
        get mechanically compacted in lifts can need up to 20%. The rule:
        order 15% more than your calculated volume. A second trip&apos;s
        delivery fee almost always costs more than the extra yard would
        have, so the buffer is insurance against the most expensive line
        item on the invoice. The <a href="/calculators/fill-dirt-calculator/">fill
        dirt calculator</a> applies the 10% overage by default; for deep or
        compacted fills, bump it to 15–20%.
      </p>

      <h2 id="cost-by-project">Cost by project: worked examples</h2>
      <p>
        Material-only costs at $10–$25/yd. The order column adds the 15%
        settlement buffer — the number your quote should match.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Volume</th><th>Material cost</th><th>Order (+15%)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Raised bed surround 10×10 ft @ 6 in</td>
            <td className="num">1.85 yd³</td>
            <td className="num">$19–$46</td>
            <td className="num">$21–$53</td>
          </tr>
          <tr>
            <td>Fill hole 10×10 ft @ 2 ft</td>
            <td className="num"><strong>7.407 yd³</strong></td>
            <td className="num"><strong>$74–$185</strong></td>
            <td className="num"><strong>$85–$213</strong></td>
          </tr>
          <tr>
            <td>Regrade 20×20 ft @ 3 in</td>
            <td className="num">3.70 yd³</td>
            <td className="num">$37–$93</td>
            <td className="num">$43–$106</td>
          </tr>
          <tr>
            <td>Raise grade 30×40 ft @ 6 in</td>
            <td className="num">22.22 yd³</td>
            <td className="num">$222–$556</td>
            <td className="num">$256–$639</td>
          </tr>
        </tbody>
      </table>
      <p>
        The worked case: <strong>10 × 10 × 2 ft = 200 ft³ ÷ 27 =
        7.407 yd³</strong>, at $10–$25/yd = $74–$185. With the 15% buffer
        the order is 8.52 yards — <strong>$85–$213</strong> before delivery.
        Note the last row crosses into &ldquo;10-yard truckload&rdquo;
        territory, where delivery fees dilute per-yard and bulk discounts
        often apply. See <a href="/guides/how-much-fill-dirt-to-fill-a-hole/">how
        much fill dirt to fill a hole</a> for hole-specific sizing, and{" "}
        <a href="/guides/how-much-dirt-to-regrade-a-yard/">how much dirt to
        regrade a yard</a> for grade-change planning.
      </p>
      <p>
        One final comparison that surprises homeowners: on a mid-size
        project like the 22.22-yard grade raise above, purchased fill dirt
        costs $256–$639 — less than the delivery fee alone would be on two
        small loads. This is the material where the delivery strategy IS
        the budget strategy. Price three scenarios before you commit: one
        full truckload from a quarry, a split load sharing the trip with
        topsoil or gravel, and self-haul over a weekend. For fill dirt,
        the cheapest scenario almost always wins by more than any
        per-yard haggling ever could.
      </p>
      <p>
        And one safety note that costs nothing: keep fill piles away from
        property lines and drainage paths until they are graded. A loose
        pile redirects runoff onto neighbors and can trigger exactly the
        drainage disputes that the permit rules above exist to prevent.
        Place the pile where the work is, tarp it if it will sit through
        rain, and grade it within the week.
      </p>

      <h2 id="what-to-ask-the-supplier">What to ask the supplier</h2>
      <p>
        Fill dirt varies more load-to-load than any other material on this
        site, so five questions separate a good order from a bad one:
      </p>
      <ol>
        <li><strong>&ldquo;Is it screened or unscreened?&rdquo;</strong> Unscreened common fill ($5–$15/yd) arrives with rocks, roots, and clay clods — fine for deep fills, miserable for finish grading by hand.</li>
        <li><strong>&ldquo;Where did it come from?&rdquo;</strong> Fill from a residential excavation is usually clean; fill from a commercial demolition or urban site may carry debris, concrete, or contaminants. Ask.</li>
        <li><strong>&ldquo;Is it clay, sand, or mixed?&rdquo;</strong> Sandy fill drains and compacts predictably; heavy clay fill holds water, swells, and is harder to grade. For drainage-critical work, sandy fill is worth a small premium.</li>
        <li><strong>&ldquo;What's the delivery fee and minimum?&rdquo;</strong> Get the flat trip fee, any minimum-order policy, and distance surcharges in the same quote as the per-yard price.</li>
        <li><strong>&ldquo;Can I see the pile?&rdquo;</strong> A supplier who shows the stockpile is a supplier who stands behind it. Look for trash, rebar, asphalt chunks, or a chemical smell before you commit.</li>
      </ol>
      <p>
        If you are taking free fill from a construction site, ask questions
        1–3 anyway — free rubble-laced fill costs more in disposal fees and
        re-grading than cheap clean fill ever would. And whatever the
        source, never accept fill for a structural application (under a
        slab, behind a retaining wall over 4 feet, near a foundation)
        without confirming it meets the compaction spec the project
        requires — structural fill at $15–$30/yd is the right product
        there, not free mystery dirt.
      </p>

      <h2 id="buying-tips">Buying tips &amp; common mistakes</h2>
      <p>
        <strong>Check free fill first.</strong> It is the cheapest material
        to buy and the easiest to get for free — verify it is clean before
        accepting. <strong>Get one combined quote.</strong> Material price,
        delivery fee, distance surcharge, and minimums on one number —
        compare quotes, not price lists. <strong>Order the settlement
        buffer.</strong> 15% default for fill dirt; a short second load
        costs more than the buffer would have.{" "}
        <strong>Never use fill dirt as your planting layer.</strong> Build
        with fill, cap with 4–6 inches of screened topsoil.{" "}
        <strong>Compact in lifts.</strong> Dump no more than 8–12 inches at
        a time and compact each layer, or you will settle for years instead
        of weeks. <strong>Mind the permit line.</strong> Some
        municipalities require permits or drainage review above 50 cubic
        yards or 4 feet of fill height — a short call before the truck
        arrives is cheaper than moving the pile twice.{" "}
        <strong>Split one big order, not two small ones.</strong> Two
        5-yard deliveries cost two trip fees; one 10-yard delivery costs
        one — and full-truck loads often unlock a volume discount on the
        material itself.
      </p>

      <Faq items={faqs} heading="Fill Dirt Cost FAQ" />
    </GuideArticle>
  );
}

import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Does a Cubic Yard of Sand Cost? Mason, Play & Paver Sand Prices",
  description:
    "How much does a cubic yard of sand cost in 2026? Mason/concrete sand ($25–$45/yd typical), play sand bag math (54 bags = $162–$270/yd), polymeric paver-sand premiums, per-ton equivalents at 1.35 tons/yd³, and project cost tables.",
  keywords: [
    "how much does a cubic yard of sand cost",
    "sand cost per cubic yard",
    "mason sand price per yard",
    "play sand cost per cubic yard",
    "sand cost per ton",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-does-a-cubic-yard-of-sand-cost/" },
  openGraph: {
    title: "How Much Does a Cubic Yard of Sand Cost? | Cubic Yard Calculator",
    description:
      "Mason, concrete, play, and paver sand prices for 2026: bulk costs by type, the 54-bag play-sand math, per-ton conversions, and worked project examples.",
    url: "https://cubicyardcalculator.site/guides/how-much-does-a-cubic-yard-of-sand-cost/",
  },
};

const toc = [
  { id: "the-short-answer", label: "The short answer" },
  { id: "sand-prices-by-type", label: "Bulk sand prices by type" },
  { id: "play-sand-bagged-math", label: "Play sand: the bagged math" },
  { id: "paver-sand-premium", label: "Paver sand: the premium tier" },
  { id: "per-ton-equivalents", label: "Per-ton prices at site densities" },
  { id: "cost-by-project", label: "Cost by project" },
  { id: "sand-delivery", label: "Sand delivery: what to expect" },
  { id: "buying-tips", label: "Buying tips & common mistakes" },
];

const faqs = [
  {
    q: "How much does a cubic yard of sand cost?",
    a: "Mason and concrete sand typically cost $25–$45 per cubic yard in bulk (typical US range, as of Oct 2026). Coarse fill sand is cheapest at $15–$25/yd; play sand runs $22–$38/yd in bulk but is mostly sold bagged; paver/joint sand costs a premium — polymeric bags run $20–$90 per 50-lb bag, far above bulk per-foot prices. Delivery is usually a separate $50–$150 per trip.",
  },
  {
    q: "How many bags of play sand are in a cubic yard?",
    a: "54 bags. The standard 50-lb play-sand bag holds about 0.5 cubic feet, and a cubic yard holds 27 cubic feet — 27 ÷ 0.5 = 54. At the typical retail price of $3–$5 per bag, filling a full yard with bagged play sand costs $162–$270, versus $22–$38 for the same sand bought in bulk where it's available.",
  },
  {
    q: "How much does sand cost per ton?",
    a: "Roughly $19–$33 per ton for mason/concrete sand. This site's published density is 2,700 lbs per cubic yard — 1.35 tons/yd³ — so $25–$45 per yard ÷ 1.35 = $18.52–$33.33 per ton. Note moisture matters: dry sand weighs about 2,700 lbs/yd³, but damp sand can exceed 3,200 lbs/yd³, which is why suppliers often quote by the ton.",
  },
  {
    q: "What is the cheapest sand to buy in bulk?",
    a: "Coarse fill sand, at $15–$25 per cubic yard — it's unwashed, ungraded, and meant for leveling and backfill, not for anything visible or structural. Mason sand at $25–$45/yd is the cheapest washed, graded sand suitable for concrete, mortar, and paver bedding.",
  },
  {
    q: "How much sand do I need for a sandbox?",
    a: "An 8×8 ft sandbox filled 1 foot deep needs 2.37 cubic yards: 8 × 8 × 1 = 64 cubic feet ÷ 27 = 2.37 yd³. At bulk prices that's $52–$90 in material; at bagged play-sand prices (54 bags per yard) it's 128 bags, or $384–$640 at $3–$5 per bag — which is why bags only make sense if no supplier delivers play sand in bulk near you. See our sandbox guide for depth recommendations.",
  },
  {
    q: "Is paver sand more expensive than regular sand?",
    a: "Yes, substantially. Plain mason sand swept into paver joints costs the same as bulk sand — about $4–$8 per 50-lb bag. Polymeric paver sand, which contains binders that harden to resist weeds, ants, and washout, runs $20–$90 per 50-lb bag (typical US retail). You're paying 4–8× more, but the joint lasts 3–10 years instead of needing annual top-ups.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Does a Cubic Yard of Sand Cost? Mason, Play & Paver Sand Prices"
      description="Mason/concrete sand runs $25–$45 per cubic yard in 2026, play sand is $3–$5 a bag (54 bags per yard), and polymeric paver sand is the premium tier. Type-by-type prices, the bag math, per-ton conversions, and worked examples."
      slug="how-much-does-a-cubic-yard-of-sand-cost"
      calculatorHref="/calculators/sand-calculator/"
      calculatorLabel="Open the sand calculator"
      updated="2026-10"
      toc={toc}
      references={[
        "US supplier price listings, Oct 2026",
        "ASTM C33 aggregate density ranges",
        "Site's published density variants (lib/calc.js)",
        "Published 2026 cost guides (material & retail price bands)",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <p>
        <em>All prices are typical US ranges, as of Oct 2026.</em>
      </p>

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        A cubic yard of <strong>mason or concrete sand costs $25–$45</strong>{" "}
        in bulk (typical US range). Coarse fill sand is the cheapest at{" "}
        <strong>$15–$25/yd</strong>; play sand runs <strong>$22–$38/yd</strong>{" "}
        in bulk but is usually sold bagged at <strong>$3–$5 per 50-lb
        bag</strong>; and <strong>paver/joint sand is the premium
        tier</strong> — polymeric bags run $20–$90 each.{" "}
        <strong>Delivery adds $50–$150 per trip</strong>. Sand is the one
        material where moisture directly changes the price math: dry sand
        weighs about 2,700 lbs per yard, damp sand can exceed 3,200 — which
        is why yards often quote by the ton.
      </p>
      <p>
        The moisture point deserves emphasis because it is the easiest
        place to overpay. A per-ton quote signed on a dry Tuesday and
        delivered after a rainy weekend can weigh 10–15% more for the same
        volume of sand — and you pay for every pound. When comparing a
        per-ton quote against a per-yard quote, always convert at the dry
        density (1.35 tons/yd³ for mason sand) and ask the supplier whether
        the price assumes dry or as-delivered weight. On per-yard quotes,
        rain costs you nothing extra; on per-ton quotes, it quietly does.
      </p>

      <h2 id="sand-prices-by-type">Bulk sand prices by type</h2>
      <p>
        Sand types are defined by washing, grading, and intended use — and
        processing is what you pay for:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Sand type</th><th>Price per cubic yard</th><th>Best for</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Coarse fill sand</td>
            <td className="num">$15–$25</td>
            <td>Grading, backfill, leveling under landscaping</td>
          </tr>
          <tr>
            <td>Mason sand</td>
            <td className="num">$25–$45</td>
            <td>Mortar, paver bedding, plastering</td>
          </tr>
          <tr>
            <td>Concrete sand</td>
            <td className="num">$25–$45</td>
            <td>Concrete mixes, paver base</td>
          </tr>
          <tr>
            <td>Play sand (bulk)</td>
            <td className="num">$22–$38</td>
            <td>Sandboxes, play areas (washed, screened)</td>
          </tr>
          <tr>
            <td>Beach / specialty sand</td>
            <td className="num">$32–$65</td>
            <td>Decorative landscaping, bunkers</td>
          </tr>
        </tbody>
      </table>
      <p>
        These bands reflect published 2026 ranges from Michigan supplier
        surveys (masonry $28–$45, play $22–$38, fill $15–$25), national
        cost guides (concrete sand $35–$55, masonry $40–$60), and contractor
        estimating tables. Mason and concrete sand are graded for
        structural work under ASTM C33; fill sand is not — never substitute
        fill sand into concrete or mortar, because the fines and organic
        matter weaken the mix.
      </p>
      <p>
        A note on what &ldquo;mason&rdquo; and &ldquo;concrete&rdquo; sand
        actually differ on: mason sand is fine and uniform for mortar work
        and paver bedding; concrete sand is coarser, with angular particles
        that interlock for concrete mixes and paver bases. They price
        nearly identically ($25–$45/yd) because they come from the same
        quarries and washing plants — the difference is the screen size,
        not the value. When a yard lists only &ldquo;washed sand&rdquo; at
        the top of this band, it is usually mason-grade stock sold under a
        generic name. And if your project is a paver patio, remember the
        bedding layer and the joint material are two purchases: 1 inch of
        bulk mason sand under the pavers (pennies per square foot), then
        joint sand swept on top (see the premium tier below).
      </p>

      <h2 id="play-sand-bagged-math">Play sand: the bagged math</h2>
      <p>
        Play sand is the one sand most homeowners meet as a bag, not a
        bulk pile. The standard 50-lb bag holds about{" "}
        <strong>0.5 cubic feet</strong>, so the bag math mirrors gravel:
      </p>
      <p>
        <strong>27 ÷ 0.5 = 54 bags per cubic yard.</strong> At $3–$5 per bag
        (typical retail): <strong>54 × $3–$5 = $162–$270 per cubic yard</strong>,
        versus $22–$38 for the same sand in bulk where suppliers stock it.
      </p>
      <p>
        For a typical 8×8 ft sandbox at 1 foot deep (2.37 yd³), that is 128
        bags — $384–$640 bagged versus $52–$90 bulk. Bags win on
        convenience and because many sandboxes sit where trucks cannot
        reach; they lose badly on price. See our{" "}
        <a href="/guides/how-much-sand-for-a-sandbox/">sandbox sand
        guide</a> for depth choices, and the{" "}
        <a href="/guides/types-of-sand/">types of sand</a> reference if you
        are choosing between play, mason, and all-purpose.
      </p>

      <h2 id="paver-sand-premium">Paver sand: the premium tier</h2>
      <p>
        Paver joints take two very different sands. Plain{" "}
        <strong>joint/mason sand</strong> sweeps into joints at bulk prices —
        about $4–$8 per 50-lb bag — and needs annual top-ups because weeds,
        ants, and rain displace it. <strong>Polymeric paver sand</strong>{" "}
        contains binders that harden on watering, locking joints against
        weeds and washout for 3–10 years, and it costs{" "}
        <strong>$20–$90 per 50-lb bag</strong> (typical US retail) —
        roughly 4–8× the price of plain sand.
      </p>
      <p>
        There is no bulk per-yard market for polymeric sand; it is sold
        only bagged, and priced per bag. Budget it separately from your
        bedding sand: a patio needs bulk mason sand for the 1-inch bedding
        layer (cheap) and polymeric bags for the joints (expensive). Do not
        try to price a paver job &ldquo;per cubic yard&rdquo; for the joint
        material — the bag price is the only number that exists.
      </p>

      <h2 id="per-ton-equivalents">Per-ton equivalents at site densities</h2>
      <p>
        Because yards weigh loads, converting the $/yard price to $/ton is
        the reality check on any quote. Using this site&apos;s published
        densities:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material (site variant)</th><th>lbs/yd³</th><th>Tons per yard</th><th>$25–$45/yd becomes…</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Mason / concrete sand (typical)</td>
            <td className="num">2,700</td>
            <td className="num">1.35</td>
            <td className="num">$18.52–$33.33 → <strong>$19–$33/ton</strong></td>
          </tr>
          <tr>
            <td>Coarse fill sand</td>
            <td className="num">2,800</td>
            <td className="num">1.40</td>
            <td className="num">$17.86–$32.14 → <strong>$18–$32/ton</strong></td>
          </tr>
          <tr>
            <td>Paver / joint sand</td>
            <td className="num">2,700</td>
            <td className="num">1.35</td>
            <td className="num">$18.52–$33.33 → <strong>$19–$33/ton</strong></td>
          </tr>
          <tr>
            <td>Wet sand</td>
            <td className="num">3,100</td>
            <td className="num">1.55</td>
            <td className="num">$16.13–$29.03 → <strong>$16–$29/ton</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        The wet-sand row explains why per-ton quotes favor the seller after
        rain: the same yard weighs 15% more wet. If you are quoted per ton,
        multiply by the tons-per-yard above and confirm the result lands in
        the $25–$45 band before comparing against a per-yard quote.
      </p>

      <h2 id="cost-by-project">Cost by project: worked examples</h2>
      <p>
        Material-only costs at $25–$45/yd bulk (polymeric joint sand
        excluded — budget it per bag). Run your dimensions through the{" "}
        <a href="/calculators/sand-calculator/">sand calculator</a>; the
        math below is length × width × depth ÷ 27 plus 10% overage.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Volume</th><th>Material cost</th><th>With 10% overage</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Paver bedding 10×12 ft @ 1 in</td>
            <td className="num">0.37 yd³</td>
            <td className="num">$9–$17</td>
            <td className="num">$10–$18</td>
          </tr>
          <tr>
            <td>Pool base, 24-ft round @ 2 in</td>
            <td className="num">2.79 yd³</td>
            <td className="num">$70–$126</td>
            <td className="num">$77–$138</td>
          </tr>
          <tr>
            <td>Sandbox 8×8 ft @ 1 ft (bulk play sand @ $22–38)</td>
            <td className="num">2.37 yd³</td>
            <td className="num">$52–$90</td>
            <td className="num">$57–$99</td>
          </tr>
          <tr>
            <td>Sandbox 8×8 ft @ 1 ft (bagged @ $3–5/bag)</td>
            <td className="num">128 bags</td>
            <td className="num">$384–$640</td>
            <td className="num">—</td>
          </tr>
          <tr>
            <td>Walkway leveling 3×30 ft @ 2 in</td>
            <td className="num">0.56 yd³</td>
            <td className="num">$14–$25</td>
            <td className="num">$15–$28</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notice the sandbox rows: identical volume, <strong>$57–$99 bulk vs
        $384–$640 bagged</strong>. The pool-base row assumes mason sand —
        see our <a href="/guides/how-much-sand-for-pool-base/">pool base
        sand guide</a> for why mason sand beats play sand under a liner.
      </p>

      <h2 id="sand-delivery">Sand delivery: what to expect</h2>
      <p>
        Sand is heavy, and delivery logistics decide your real price more
        than the per-yard number. A standard dump truck carries 10–14
        cubic yards of sand — at 1.35 tons per yard, a 12-yard load weighs
        over 16 tons, so the truck shows up full and charges the{" "}
        <strong>$50–$150 trip fee</strong> whether you ordered 2 yards or
        12. This makes sand the poster child for minimum-order math: many
        suppliers enforce a 2–3 yard minimum or a short-load surcharge,
        and a $75 fee on 1 yard of $35 sand makes your effective price
        $110/yd.
      </p>
      <p>
        Before the truck arrives: pick the drop spot and prep it. Sand
        piles on grass kill the grass underneath within days, so lay a tarp
        if the pile will sit. The truck needs firm, dry ground and about
        15 feet of overhead clearance — soft ground after rain is the most
        common reason a delivery gets refused or rutted into your lawn.
        Point out septic tanks, sprinkler heads, and shallow utilities
        before the truck rolls over them. And time the order with the
        weather: a rainstorm between delivery and installation turns a dry
        1.35-ton yard into a 1.55-ton yard of wet sand that is heavier to
        move and, on per-ton quotes, heavier to pay for.
      </p>

      <h2 id="buying-tips">Buying tips &amp; common mistakes</h2>
      <p>
        <strong>Match the sand to the job.</strong> Concrete and mortar
        need ASTM C33-graded mason/concrete sand; fill sand is for leveling
        only. <strong>Order bedding sand and joint sand separately</strong>{" "}
        — bulk mason sand for under the pavers, polymeric bags for between
        them. <strong>Ask about moisture pricing.</strong> If the pile is
        rain-soaked, a per-ton quote works against you; prefer per-yard.{" "}
        <strong>Do not buy bagged for projects over ~1 yard</strong> unless
        no supplier delivers that sand type in bulk near you.{" "}
        <strong>Check the delivery minimum</strong> — a $50–$150 trip fee on
        half a yard doubles your effective price, which is the one case
        where self-hauling or bags win. <strong>For sandboxes, confirm
        &ldquo;play sand&rdquo; specifically</strong> — it is washed and
        screened for contaminants; mason sand is not rated for play.{" "}
        <strong>Compare bulk sand quotes by the yard, not the
        ton,</strong> unless both quotes are per ton: a $28/ton quote at
        1.35 tons/yd³ is $37.80/yd, which sits mid-band, while the same
        $28/ton for wet 1.55-ton sand is $43.40/yd — the top of the band.
        <strong>Do not let bedding and joint sand merge on the invoice.</strong>{" "}
        A paver contractor quoting &ldquo;sand&rdquo; at $60/bag is quoting
        polymeric joint sand; bulk mason bedding sand should be priced per
        yard. Get the two materials itemized so the premium tier cannot
        hide inside the bulk line.
      </p>
      <p>
        One last check for concrete and mortar work: confirm the sand is
        washed. Unwashed pit sand contains clay and silt that weaken
        concrete and cause mortar to shrink-crack. &ldquo;Washed&rdquo;
        should be on the ticket or the product name — if it is not, ask.
        The price difference between washed and unwashed is a few dollars
        a yard; the strength difference in your slab is not.
      </p>

      <Faq items={faqs} heading="Sand Cost FAQ" />
    </GuideArticle>
  );
}

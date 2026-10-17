import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Does a Cubic Yard of Topsoil Cost? Screened, Unscreened & Bagged",
  description:
    "How much does a cubic yard of topsoil cost in 2026? Screened vs unscreened bulk prices ($25–$60/yd typical), bagged soil math (36 or 18 bags per yard), per-ton equivalents at 1.20 tons/yd³, delivery fees, and project cost tables.",
  keywords: [
    "how much does a cubic yard of topsoil cost",
    "topsoil cost per cubic yard",
    "screened topsoil price per yard",
    "unscreened topsoil price",
    "bagged topsoil cost per yard",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-does-a-cubic-yard-of-topsoil-cost/" },
  openGraph: {
    title: "How Much Does a Cubic Yard of Topsoil Cost? | Cubic Yard Calculator",
    description:
      "Screened vs unscreened topsoil prices for 2026, the bagged-soil math, per-ton conversions, delivery fees, and worked lawn and bed examples.",
    url: "https://cubicyardcalculator.site/guides/how-much-does-a-cubic-yard-of-topsoil-cost/",
  },
};

const toc = [
  { id: "the-short-answer", label: "The short answer" },
  { id: "screened-vs-unscreened", label: "Screened vs unscreened pricing" },
  { id: "bagged-topsoil-math", label: "Bagged topsoil math" },
  { id: "per-ton-equivalents", label: "Per-ton prices at site densities" },
  { id: "delivery-fees", label: "Delivery fees & minimums" },
  { id: "cost-by-project", label: "Cost by project" },
  { id: "inspecting-a-load", label: "Inspecting a load before you pay" },
  { id: "buying-tips", label: "Buying tips & common mistakes" },
];

const faqs = [
  {
    q: "How much does a cubic yard of topsoil cost?",
    a: "Screened topsoil typically costs $25–$60 per cubic yard (typical US range, as of Oct 2026), with most homeowners paying $30–$50. Unscreened topsoil runs cheaper at $15–$30/yd, and premium compost-blended garden mixes run $45–$80/yd. Delivery is usually a separate $50–$150 per trip, and bagged topsoil from a home center costs roughly $54–$108 per yard-equivalent — so bulk wins on anything over about a yard.",
  },
  {
    q: "How many bags of topsoil are in a cubic yard?",
    a: "It depends on the bag size. The common 1.5-cubic-foot bag gives 27 ÷ 1.5 = 18 bags per cubic yard; the smaller 0.75-cubic-foot bag gives 27 ÷ 0.75 = 36 bags per yard. At a typical $3 per bag, a yard of 1.5-ft³ bags costs $54 and a yard of 0.75-ft³ bags costs $108 — both well above the $25–$60 you'd pay for screened bulk topsoil.",
  },
  {
    q: "What's the difference between screened and unscreened topsoil?",
    a: "Screened topsoil has been run through a screener (usually ⅜″ to ½″ mesh) to remove rocks, roots, clay clods, and debris. It costs $25–$60/yd and is the right choice for lawns, sod, and garden beds where roots need clean soil. Unscreened topsoil at $15–$30/yd is straight from the scrape — cheaper, but full of clumps and junk, and only sensible for rough grading or filling low spots under a cap layer.",
  },
  {
    q: "How much does topsoil cost per ton?",
    a: "Roughly $21–$50 per ton. This site's published density for screened topsoil is 2,400 lbs per cubic yard, or 1.20 tons/yd³, so $25–$60 per yard ÷ 1.20 = $20.83–$50 per ton. Heavy clay topsoil (2,600 lbs/yd³) converts slightly lower per ton; enriched garden soil (2,200 lbs/yd³) converts slightly higher.",
  },
  {
    q: "How much topsoil do I need for a 20×20 area at 6 inches?",
    a: "7.407 cubic yards. The math: 20 × 20 × 0.5 feet = 200 cubic feet ÷ 27 = 7.407 yd³. At $25–$60 per yard the material costs $185–$444; add the recommended 15% settlement buffer (topsoil settles 10–20%) and the order becomes 8.52 yards, or $213–$511. Use the topsoil calculator for your exact dimensions.",
  },
  {
    q: "Can I use topsoil instead of fill dirt?",
    a: "You can, but you're overpaying. Fill dirt costs $10–$25 per yard and is made for structural filling and grade changes; screened topsoil costs $25–$60 and is made for growing things. Use fill dirt (or unscreened topsoil) for the bulk of a deep raise, then cap with 4–6 inches of screened topsoil. See our topsoil vs fill dirt guide for the full comparison.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Does a Cubic Yard of Topsoil Cost? Screened, Unscreened & Bagged"
      description="Screened topsoil runs $25–$60 per cubic yard in 2026, unscreened $15–$30, and bags cost $54–$108 per yard-equivalent. Pricing by type, the bag math, per-ton conversions, delivery fees, and worked project costs."
      slug="how-much-does-a-cubic-yard-of-topsoil-cost"
      calculatorHref="/calculators/topsoil-calculator/"
      calculatorLabel="Open the topsoil calculator"
      updated="2026-10"
      toc={toc}
      references={[
        "HomeGuide / Angi 2026 bulk topsoil cost data (typical US ranges)",
        "US supplier price listings, Oct 2026",
        "ASTM C33 / industry bulk density ranges for soils",
        "Site's published density variants (lib/calc.js)",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <p>
        <em>All prices are typical US ranges, as of Oct 2026.</em>
      </p>

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        A cubic yard of <strong>screened topsoil costs $25–$60</strong> in
        2026 (typical US range), with most homeowners paying $30–$50.
        Unscreened topsoil is cheaper at <strong>$15–$30/yd</strong>, and
        premium compost-blended garden mixes run{" "}
        <strong>$45–$80/yd</strong>. <strong>Delivery adds $50–$150 per
        trip</strong>, and bagged topsoil from a home center costs roughly{" "}
        <strong>$54–$108 per yard-equivalent</strong> — so bulk is the clear
        winner for anything over about a cubic yard. The single biggest
        pricing mistake is quoting the wrong product: &ldquo;topsoil&rdquo;
        in conversation can mean $10 fill dirt or $80 garden blend, and the
        bill differs by nearly 10×.
      </p>

      <h2 id="screened-vs-unscreened">Screened vs unscreened pricing</h2>
      <p>
        Screening — running soil through a ⅜″ to ½″ mesh to remove rocks,
        roots, clay clods, and construction debris — is what separates lawn
        soil from grading soil, and it is what you are paying for:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Topsoil type</th><th>Price per cubic yard</th><th>Best for</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Unscreened topsoil</td>
            <td className="num">$15–$30</td>
            <td>Rough grading, low spots under a cap layer</td>
          </tr>
          <tr>
            <td>Screened topsoil</td>
            <td className="num">$25–$60</td>
            <td>Lawns, sod, general landscaping</td>
          </tr>
          <tr>
            <td>Pulverized topsoil</td>
            <td className="num">$35–$60</td>
            <td>Leveling, sports fields, seed beds</td>
          </tr>
          <tr>
            <td>Screened + compost blend</td>
            <td className="num">$45–$80</td>
            <td>Vegetable gardens, premium beds</td>
          </tr>
          <tr>
            <td>Garden / raised-bed mix</td>
            <td className="num">$50–$120</td>
            <td>Containers, raised beds (amended)</td>
          </tr>
        </tbody>
      </table>
      <p>
        These bands aggregate published 2026 figures from independent cost
        calculators (screened $30–$55; unscreened $20–$40; blends $45–$70)
        and Lawn Love/Angi ($10–$50/yd bulk). Screened topsoil is the
        practical middle ground for most homeowners: unscreened soil under
        a lawn means rocks at the surface and clumps that never grade
        smooth, while premium blends are overkill for anything that is not
        a growing bed.
      </p>
      <p>
        Watch the regional spread. Published state-by-state figures show
        screened topsoil listing at $30–$50 in Texas and Ohio, $40–$60 in
        Virginia and Michigan, and $65–$100 in New Jersey and the Bay Area —
        the same product, triple the price, driven by land cost and
        competition near the yard. This is why national ranges look wide:
        always anchor your budget to two local quotes, not the midpoint of
        a US average. Also note the label trap: a yard&apos;s
        &ldquo;premium topsoil&rdquo; may just be screened topsoil, while
        another yard&apos;s &ldquo;garden mix&rdquo; may be screened soil
        cut with compost — ask what is in the blend and at what ratio
        before comparing prices.
      </p>

      <h2 id="bagged-topsoil-math">Bagged topsoil math</h2>
      <p>
        Retail topsoil bags come in two common sizes — 1.5 cubic feet and
        0.75 cubic feet. The bags-per-yard math is 27 ÷ bag size:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Bag size</th><th>Bags per yard</th><th>Cost per yard @ $2/bag</th><th>Cost per yard @ $3/bag</th><th>Cost per yard @ $5/bag</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>1.5 ft³</td>
            <td className="num">18</td>
            <td className="num">$36</td>
            <td className="num">$54</td>
            <td className="num">$90</td>
          </tr>
          <tr>
            <td>0.75 ft³</td>
            <td className="num">36</td>
            <td className="num">$72</td>
            <td className="num">$108</td>
            <td className="num">$180</td>
          </tr>
        </tbody>
      </table>
      <p>
        Home-center bags typically run $2–$5 each, which puts bagged topsoil
        at roughly <strong>$54–$108 per yard-equivalent</strong> for the
        common case. Compare that to $25–$60 for bulk screened soil and the
        pattern is the same as gravel: bags are a 1.5–3× premium. Bags win
        only for projects under about a yard — a small garden bed, a
        couple of containers — or where a dump truck cannot reach. (Bonus
        honesty check: most retail &ldquo;topsoil&rdquo; bags are closer to
        unscreened quality than to premium screened soil.)
      </p>

      <h2 id="per-ton-equivalents">Per-ton equivalents at site densities</h2>
      <p>
        If your supplier quotes by the ton, convert with this site&apos;s
        published densities (ASTM-consistent typical loose bulk values):
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material (site variant)</th><th>lbs/yd³</th><th>Tons per yard</th><th>$25–$60/yd becomes…</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Screened topsoil (typical)</td>
            <td className="num">2,400</td>
            <td className="num">1.20</td>
            <td className="num">$20.83–$50.00 → <strong>$21–$50/ton</strong></td>
          </tr>
          <tr>
            <td>Enriched garden soil</td>
            <td className="num">2,200</td>
            <td className="num">1.10</td>
            <td className="num">$22.73–$54.55 → <strong>$23–$55/ton</strong></td>
          </tr>
          <tr>
            <td>Heavy clay topsoil</td>
            <td className="num">2,600</td>
            <td className="num">1.30</td>
            <td className="num">$19.23–$46.15 → <strong>$19–$46/ton</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        Soil weight swings with moisture, so a quote per ton can drift from
        these conversions after rain. When comparing a per-ton quote to a
        per-yard quote, multiply the per-ton price by the tons-per-yard
        above and check whether the result lands in the $25–$60 band.
      </p>

      <h2 id="delivery-fees">Delivery fees &amp; minimums</h2>
      <p>
        <strong>Delivery runs $50–$150 per trip</strong> for a standard dump
        truck carrying 10–14 cubic yards (typical US range, as of Oct 2026).
        The trap for small projects is the <strong>minimum order</strong>:
        many suppliers enforce a 2–3 yard minimum or charge a $30–$75
        minimum-order fee, which can push the effective price of a single
        yard to $100+. If your project needs less than a yard, that is the
        universe telling you to buy bags instead. On the other end, bigger
        loads improve the per-yard price — a $100 delivery fee spread over
        10 yards adds just $10/yd.
      </p>
      <p>
        A practical middle path exists between bags and a full truck: many
        nurseries and landscape-supply stores run a smaller trailer or
        dump-bed service for 2–5 yard orders at $75–$200 delivered. If
        your project needs 3–4 yards, one of these small-load deliveries
        usually beats both the bag route (too expensive per yard) and the
        full-size dump truck (too much fee for the volume). Call the
        smaller outlets, not just the big aggregate yards — they compete
        hardest on residential delivery, and their quotes are often
        all-inclusive.
      </p>

      <h2 id="cost-by-project">Cost by project: worked examples</h2>
      <p>
        Material-only costs at $25–$60/yd screened. Run your exact
        dimensions through the{" "}
        <a href="/calculators/topsoil-calculator/">topsoil calculator</a> —
        the math below is length × width × depth ÷ 27, with the settlement
        buffer from our <a href="/guides/how-much-extra-soil-to-order/">soil
        ordering guide</a> added for the order column (topsoil settles
        10–20%).
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Volume</th><th>Material cost</th><th>Order (+15% buffer)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Garden bed 4×8 ft @ 6 in</td>
            <td className="num">0.59 yd³</td>
            <td className="num">$15–$35</td>
            <td className="num">$17–$41 (bags practical here)</td>
          </tr>
          <tr>
            <td>Topdressing 1,000 sq ft @ ½ in</td>
            <td className="num">1.54 yd³</td>
            <td className="num">$39–$92</td>
            <td className="num">$44–$106</td>
          </tr>
          <tr>
            <td>New lawn 20×20 ft @ 6 in</td>
            <td className="num"><strong>7.407 yd³</strong></td>
            <td className="num"><strong>$185–$444</strong></td>
            <td className="num"><strong>$213–$511</strong></td>
          </tr>
          <tr>
            <td>New lawn 1,000 sq ft @ 4 in</td>
            <td className="num">12.35 yd³</td>
            <td className="num">$309–$741</td>
            <td className="num">$355–$852</td>
          </tr>
          <tr>
            <td>New lawn 2,500 sq ft @ 4 in</td>
            <td className="num">30.86 yd³</td>
            <td className="num">$772–$1,852</td>
            <td className="num">$887–$2,129</td>
          </tr>
        </tbody>
      </table>
      <p>
        The worked case: <strong>20 × 20 × 0.5 ft = 200 ft³ ÷ 27 =
        7.407 yd³</strong>, priced at $25–$60/yd = $185–$444. Add the 15%
        buffer — 8.52 yards — and the order is $213–$511 before delivery.
        Planning sod on top of this soil? See{" "}
        <a href="/guides/how-much-topsoil-for-sod/">how much topsoil for
        sod</a> for depth guidance, and compare soil products in{" "}
        <a href="/guides/topsoil-vs-compost-vs-garden-soil/">topsoil vs
        compost vs garden soil</a>.
      </p>

      <h2 id="inspecting-a-load">Inspecting a load before you pay</h2>
      <p>
        Topsoil is the material where the bill and the product disagree
        most often, so a two-minute inspection protects you more than any
        quote comparison:
      </p>
      <ul>
        <li><strong>Color and texture.</strong> Good topsoil is dark brown, crumbly, and holds together loosely when squeezed. Gray or pale soil is subsoil; greasy or rainbow-sheened soil may be contaminated.</li>
        <li><strong>Smell.</strong> It should smell earthy, not sour, chemical, or like a construction site. A strong petroleum or solvent smell is a walk-away signal.</li>
        <li><strong>Screening.</strong> Grab a handful and look for rocks over ½ inch, roots, glass, or trash. Screened soil should be uniform; if you find debris, you were sold unscreened at screened prices.</li>
        <li><strong>Moisture.</strong> Soil delivered soaking wet weighs more and compacts harder — you pay the same for less workable soil. Dry-to-damp is ideal.</li>
        <li><strong>Weed seeds.</strong> Ask whether the pile has been sitting and whether it's weedy. Fresh, hot composted blends have fewer viable seeds than a year-old topsoil pile covered in weeds.</li>
      </ul>
      <p>
        If possible, visit the yard and see the pile before ordering. A
        reputable supplier will show you the product without hesitation —
        reluctance is information. And if you are buying premium
        compost-blended soil, ask the blend ratio (a common mix is 70%
        screened topsoil / 30% compost); a &ldquo;blend&rdquo; that is 95%
        topsoil and 5% compost is just topsoil with a premium price tag.
      </p>

      <h2 id="buying-tips">Buying tips &amp; common mistakes</h2>
      <p>
        <strong>Specify &ldquo;screened&rdquo; in writing.</strong> Yards
        sometimes sell unscreened soil as topsoil without mentioning it.{" "}
        <strong>Do not price-shop on per-yard alone</strong> — delivery
        fees and minimums decide small-order bills. <strong>Order the
        settlement buffer</strong> (10–20% for topsoil): a second trip&apos;s
        delivery fee almost always costs more than the extra soil would
        have. <strong>Use fill dirt for deep fills.</strong> Anything more
        than 6 inches of grade raise should be built up with $10–$25 fill
        dirt and capped with 4–6 inches of screened topsoil — see our{" "}
        <a href="/guides/topsoil-vs-fill-dirt/">topsoil vs fill dirt</a>{" "}
        breakdown. <strong>Ask what the soil is made of.</strong> Good
        topsoil is dark, crumbly, and smells earthy; gray, greasy, or
        construction-smelling soil is subsoil sold as topsoil.{" "}
        <strong>Spring prices run hot</strong> — ordering fall topsoil for
        a spring project can save 10–20%. <strong>Do the depth math before
        the price math.</strong> A 20×20 ft lawn at 6 inches needs 7.407
        yd³, but at 4 inches it needs only 4.938 — $62–$148 less. Sod
        needs 3–4 inches of prepared soil, seed needs 2–3: over-ordering
        depth is the most common way homeowners buy a yard they did not
        need.
      </p>
      <p>
        Finally, remember that topsoil is sold by volume but graded by eye:
        there is no bag label or spec sheet on a dump-truck load. The
        inspection habits above — color, smell, screening, moisture — are
        your quality control. Two minutes at the pile routinely saves
        more money than two hours of price shopping, because the cheapest
        quote on bad soil is the most expensive mistake on this page.
      </p>

      <Faq items={faqs} heading="Topsoil Cost FAQ" />
    </GuideArticle>
  );
}

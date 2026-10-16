import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Dirt Do I Need to Regrade or Level My Yard? (Yard Grading Guide)",
  description:
    "Yard regrading quantities: wedge math for the 6-inch-per-10-ft drainage slope, lawn-leveling quantities, fill dirt vs topsoil layering, and the 15–20% compaction add-on. Free dirt calculator.",
  keywords: [
    "how much dirt to level a yard",
    "how much topsoil to regrade yard",
    "yard grading how much soil",
    "how much dirt to regrade yard",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-dirt-to-regrade-a-yard/" },
  openGraph: {
    title: "How Much Dirt Do I Need to Regrade or Level My Yard? | Cubic Yard Calculator",
    description:
      "Wedge-volume math for drainage slopes, thin-layer lawn leveling, and the fill-then-topsoil layering order. Free dirt calculator.",
    url: "https://cubicyardcalculator.site/guides/how-much-dirt-to-regrade-a-yard/",
  },
};

const faqs = [
  {
    q: "How much dirt do I need to regrade around my house?",
    a: "Use the wedge formula: ½ × run × drop × house width, divided by 27. A 10-ft run with 6 inches of drop along a 40-ft house is 100 / 27 = 3.7 cubic yards — order 4.5 with compaction allowance.",
  },
  {
    q: "How much topsoil does it take to level a 1,000 sq ft lawn?",
    a: "At half an inch deep: (1,000 × 0.5 / 12) / 27 = 1.54 cubic yards, about 1.85 tons. At a quarter inch: 0.77 yards. Lawn leveling is done in thin passes, not one deep pour.",
  },
  {
    q: "What is the difference between this guide and filling a hole?",
    a: "This guide covers slopes and lawn leveling — wedge volumes and thin layers spread over big areas. Our fill dirt guide covers pits and voids like old pools and stump holes, where you're replacing missing volume. Different geometry, different math, different material strategy.",
  },
  {
    q: "Should I use fill dirt or topsoil to regrade?",
    a: "Both, in layers: fill dirt for the bulk of the wedge, then 4–6 inches of topsoil on top for grass. Fill dirt is cheaper and more stable; topsoil is where the lawn grows. See our topsoil vs fill dirt comparison for the full breakdown.",
  },
  {
    q: "How much does fill dirt settle when regrading?",
    a: "Loose dumped fill can settle 15–30%, so order 15–20% more than the wedge math says and compact in 6–12 inch lifts. A wedge that isn't compacted will pond water exactly where the old low spot was.",
  },
  {
    q: "When should I call a professional grader instead of DIY?",
    a: "Call one when the job needs more than about 10 yards moved, when you're correcting a slope toward the house across a big lot, when utilities or drainage easements are involved, or when you need a laser-accurate grade. A skid-steer operator does in a day what takes a weekend with wheelbarrows — and gets the drainage right.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Dirt Do I Need to Regrade or Level My Yard?"
      description="The wedge formula for drainage slopes, thin-layer lawn-leveling math, the fill-then-topsoil layering order, and the compaction add-on — plus when to call a grader."
      slug="how-much-dirt-to-regrade-a-yard"
      calculatorHref="/calculators/dirt-calculator/"
      calculatorLabel="Try the dirt calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        Regrading a slope is wedge math:{" "}
        <strong>cubic yards = (½ &times; run in ft &times; drop in ft &times; length in ft) /
        27</strong>. A 10-foot run with 6 inches of fall along a 40-foot
        house is (½ &times; 10 &times; 0.5 &times; 40) / 27 ={" "}
        <strong>3.7 cubic yards</strong> — order 4.5 with the 15–20%
        compaction allowance. Lawn leveling is different math: 1,000 sq ft
        at ½ inch deep is <strong>1.54 yards</strong>. Important: this guide
        covers <strong>slopes and leveling</strong>; if you&apos;re filling
        a pit, pool, or hole, that&apos;s void math — see our{" "}
        <a href="/guides/how-much-fill-dirt-to-fill-a-hole/">fill dirt for
        holes guide</a> instead.
      </p>

      <h2>Wedge math for the drainage slope</h2>
      <p>
        The standard foundation drainage grade is <strong>6 inches of fall
        over the first 10 feet</strong> away from the house (about a 5%
        grade). Picture the wedge: zero drop at the far edge, full 6-inch
        drop at the house — the average depth is half the drop, which is why
        the formula uses ½. Convert the 6-inch drop to 0.5 feet, multiply by
        the 10-foot run and the length of the slope (your house width), halve
        it, and divide by 27.
      </p>
      <p>
        Worked example: 10-ft run &times; 0.5-ft drop &times; 40-ft house width → ½ &times; 10
        &times; 0.5 &times; 40 = 100 cu ft / 27 = <strong>3.70 cubic yards</strong>. Add
        20% for compaction → 4.44 → <strong>order 4.5 yards</strong>. At fill
        dirt&apos;s 1.1 tons per yard, that&apos;s about 4.9 tons of material
        before the topsoil cap (more on layering below).
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>House width</th><th>Wedge volume (10-ft run, 6-in drop)</th><th>Order (+20%)</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">30 ft</td><td className="num">2.78 yd³</td><td className="num">3.5 yd³</td></tr>
          <tr><td className="num">40 ft</td><td className="num">3.70 yd³</td><td className="num">4.5 yd³</td></tr>
          <tr><td className="num">50 ft</td><td className="num">4.63 yd³</td><td className="num">5.5–6 yd³</td></tr>
          <tr><td className="num">60 ft</td><td className="num">5.56 yd³</td><td className="num">7 yd³</td></tr>
        </tbody>
      </table>
      <p>
        Check the 50-foot row: ½ &times; 10 &times; 0.5 &times; 50 = 125 cu ft / 27 = 4.63
        yards; +20% = 5.56, so order 5.5–6. For a gentler grade over a
        longer run — 15 feet with the same 6-inch drop — the wedge grows:
        ½ &times; 15 &times; 0.5 &times; 40 = 150 cu ft / 27 = <strong>5.56 yards</strong>,
        order 7 with compaction allowance. Longer runs spread the fall more
        gracefully and are easier to mow, at the cost of more material.
      </p>

      <h2>Lawn leveling: thin layers, not one pour</h2>
      <p>
        Leveling a bumpy lawn uses different math from the wedge: uniform
        depth over the whole area. The rule is <strong>¼ to ½ inch per
        pass</strong> — never bury the grass deeper than half an inch, or
        you&apos;ll smother it. Deep spots get repeated passes weeks apart,
        each one after the grass grows through. The formula is the flat one:
        (area &times; depth in ft) / 27.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Lawn size</th><th>At ¼ inch per pass</th><th>At ½ inch per pass</th><th>At 1 inch (2 passes)</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">1,000 sq ft</td><td className="num">0.77 yd³</td><td className="num">1.54 yd³</td><td className="num">3.09 yd³</td></tr>
          <tr><td className="num">2,500 sq ft</td><td className="num">1.93 yd³</td><td className="num">3.86 yd³</td><td className="num">7.72 yd³</td></tr>
          <tr><td className="num">5,000 sq ft</td><td className="num">3.86 yd³</td><td className="num">7.72 yd³</td><td className="num">15.43 yd³</td></tr>
        </tbody>
      </table>
      <p>
        Verify the 1,000 sq ft row at ½ inch: 1,000 &times; (0.5 / 12) = 41.67 cu
        ft / 27 = 1.54 yards — about 1.85 tons of topsoil at 1.2 tons per
        yard. Note the 5,000 sq ft @ ½ inch row: 7.72 yards ={" "}
        <strong>9.26 tons</strong> — that&apos;s a full dump-truck delivery,
        not a pickup-bed project. Scale creep is the surprise of lawn
        leveling: what sounds like &ldquo;a thin layer&rdquo; is a lot of
        tons on a big lawn.
      </p>

      <h2>Fill dirt below, topsoil on top</h2>
      <p>
        For any regrade that ends in grass, the layering order is fixed:{" "}
        <strong>fill dirt for the bulk, 4–6 inches of topsoil on top.</strong>{" "}
        Fill dirt is cheap, stable subsoil — it holds the grade without
        settling much. Topsoil is where seed or sod lives. Using topsoil for
        the whole wedge costs more per yard and settles more, since its
        organic content breaks down over time. Our{" "}
        <a href="/guides/topsoil-vs-fill-dirt/">topsoil vs fill dirt
        guide</a> compares the two materials in detail.
      </p>
      <p>
        Worked layering on the 40-foot example: the wedge itself is 3.7
        yards — order 4.5 yards of <strong>fill dirt</strong>. The topsoil
        cap covers the wedge&apos;s top surface: the sloped surface is about
        400 sq ft (10.01-ft slope length &times; 40 ft wide). A 4-inch cap: 400 &times;
        (4 / 12) = 133.3 cu ft / 27 = <strong>4.94 yards — order 5 yards of
        topsoil</strong>. Notice the cap is bigger than the wedge: on a
        shallow regrade, the finish layer often dominates the order. Budget
        both materials separately.
      </p>

      <h2>The 15–20% compaction add-on</h2>
      <p>
        Dirt arrives loose — up to a third of a load can be air. Dumped into
        a wedge without compaction, it settles <strong>15–30% over the first
        year</strong>, and a wedge that settles leaves a swale that ponds
        water exactly where the old low spot was. Order <strong>15–20%
        over</strong> the wedge math, then compact in <strong>6–12 inch
        lifts</strong> with a plate compactor (small jobs) or tracked
        equipment (big ones). Compacted in lifts, the grade stays put.
        Sandy fill compacts less and drains faster; clay-heavy fill holds
        grade well but needs the higher end of the overage.
      </p>

      <h2>Measure the drop before you order</h2>
      <p>
        The wedge math only works with real numbers. Stretch a string line
        tight between two stakes — one at the foundation, one 10 feet out —
        level it with a line level, and measure the gap between the string
        and the ground at the house stake: that&apos;s your current drop.
        Repeat every 10 feet along the foundation; a yard that&apos;s 6
        inches low in one spot and flat in the next needs spot wedges, not
        one average number. If the ground actually slopes <em>toward</em>{" "}
        the house anywhere, the wedge there is deeper — measure those spots
        separately.
      </p>

      <h2>When to call a grader</h2>
      <p>
        DIY regrading tops out around 5–10 yards with a wheelbarrow and a
        plate compactor rental. Call a professional with a skid steer or
        mini-excavator when: the job needs <strong>10+ yards</strong> moved;
        you&apos;re correcting a yard-wide reverse slope toward the
        foundation; utilities, septic, or drainage easements cross the work
        area; or you need laser-accurate fall over a long run. A skilled
        operator finishes in a day what takes a homeowner a weekend — and a
        wrong grade costs far more in basement water than a day of machine
        time.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Grading toward the house.</strong> The whole point is fall
        away from the foundation — verify with a level as you go.{" "}
        <strong>Skipping compaction.</strong> The #1 cause of the returning
        swale. <strong>Topsoil for the whole wedge.</strong> Expensive and
        it keeps settling. <strong>One deep leveling pass.</strong> More
        than ½ inch smothers the lawn — do thin passes.{" "}
        <strong>Treating a pit like a slope.</strong> Holes, pools, and
        sinkholes are void math with deeper compaction needs — that&apos;s
        our <a href="/guides/how-much-fill-dirt-to-fill-a-hole/">fill dirt
        guide</a>, not this one.
      </p>

      <Faq items={faqs} heading="Yard Grading FAQ" />
    </GuideArticle>
  );
}

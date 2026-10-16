import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Landscape Fabric Under Rock: When to Use It (and When It Causes Problems)",
  description:
    "Should you put landscape fabric under rock? The honest decision framework: when fabric helps, when it backfires, woven vs non-woven fabric, and proper install steps.",
  keywords: [
    "should i put landscape fabric under rock",
    "landscape fabric under gravel yes or no",
    "best landscape fabric under rock",
    "does landscape fabric prevent weeds under rock",
    "woven vs non woven landscape fabric",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/landscape-fabric-under-rock/" },
  openGraph: {
    title: "Landscape Fabric Under Rock: When to Use It (and When It Causes Problems) | Cubic Yard Calculator",
    description:
      "Yes or no? The decision framework for landscape fabric under rock, plus the weed-control myth most guides won't bust.",
    url: "https://cubicyardcalculator.site/guides/landscape-fabric-under-rock/",
  },
};

const faqs = [
  {
    q: "Should I put landscape fabric under rock?",
    a: "Yes for permanent rock beds, walkways, and French drains where no planting is planned. No for future planting zones, under organic mulch, or under poured slabs — in those spots fabric creates more problems than it solves.",
  },
  {
    q: "Landscape fabric under gravel: yes or no?",
    a: "Yes under decorative gravel in permanent beds — it separates rock from soil and keeps the gravel from sinking. No under gravel driveways that will ever be dug up, and no under organic mulch, where it blocks decomposition and traps moisture.",
  },
  {
    q: "What is the best landscape fabric under rock?",
    a: "Woven polypropylene fabric (at least 3 oz per square yard) for rock beds — it is strong enough to resist tearing and still drains. Non-woven geotextile is better for drainage applications like French drains, where filtration matters most.",
  },
  {
    q: "Does landscape fabric prevent weeds under rock?",
    a: "Temporarily, yes — but not forever. Wind-blown seeds land in dust and debris that collects ON TOP of the rock, where weeds root happily above the fabric. Expect years of relief with good fabric, not a lifetime weed-free zone.",
  },
  {
    q: "Can I use plastic sheeting instead of landscape fabric under rock?",
    a: "No. Plastic traps water and air, causing puddling and anaerobic soil that kills nearby plant roots. Permeable landscape fabric lets water and air pass while still separating rock from soil.",
  },
  {
    q: "How long does landscape fabric last under rock?",
    a: "Quality woven fabric lasts 10 to 20+ years under rock since it is shielded from UV. Cheap thin spun fabric can fail in 2 to 3 years — it tears, lets soil migrate up, and becomes impossible to remove cleanly.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Landscape Fabric Under Rock: When to Use It (and When It Causes Problems)"
      description="The honest yes-or-no framework for landscape fabric under rock: where it earns its keep, where it backfires, which fabric to buy, and how to install it so it actually works."
      slug="landscape-fabric-under-rock"
      calculatorHref="/calculators/landscape-rock-calculator/"
      calculatorLabel="Try the landscape rock calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        <strong>Yes</strong> under rock in permanent beds, walkways, and{" "}
        <a href="/guides/how-much-gravel-for-a-french-drain/">French drains</a>{" "}
        — fabric keeps soil and rock separated so the rock doesn't sink and
        mix into mud. <strong>No</strong> in future planting zones, under
        organic mulch, or anywhere it will ever need digging up. The single
        most important myth to kill first: landscape fabric does not stop
        weeds forever. It stops weeds from below, while wind-blown seeds root
        in the debris that collects <em>on top of</em> the rock — the weeds
        your neighbors blame on the fabric were never its fault.
      </p>

      <h2>When YES: use landscape fabric under rock</h2>
      <p>
        <strong>Permanent rock beds.</strong> Decorative river rock or gravel
        beds you plan to leave alone for a decade belong on fabric. Without a
        separator, fine soil migrates up and rock sinks down — within a few
        seasons your clean rock bed is half mud. This is fabric's best use
        case.
      </p>
      <p>
        <strong>Walkways and paths.</strong> Gravel paths get foot traffic that
        pushes stone into soft soil. Fabric acts as a load-distributing
        separator that keeps the surface stable and even. Pin it well on
        slopes where foot traffic plus gravity drag stone downhill.
      </p>
      <p>
        <strong>French drains and dry creek beds.</strong> Drainage fabric
        (non-woven geotextile here, not woven) wraps the gravel so silt can't
        migrate in and clog the system. A French drain without fabric is a
        French drain with an expiration date.
      </p>
      <p>
        <strong>Under-deck and utility areas.</strong> Gravel under a deck or
        behind a shed for weed suppression and mud control — nothing will be
        planted there, nothing will be dug up, and nobody sees the fabric if
        it ever shows at an edge.
      </p>
      <p>
        <strong>Weed barriers along foundations and fence lines.</strong>{" "}
        Narrow gravel strips where you want zero maintenance and zero plants
        do well on fabric with 3+ inches of rock over it.
      </p>

      <h2>When NO: skip the fabric</h2>
      <p>
        <strong>Future planting zones.</strong> The classic regret: fabric
        goes down under rock, then a new owner (or your future self) wants to
        plant there. Rock buried in fabric turns digging a planting hole into
        an archaeological excavation. If planting is plausible within 5
        years, skip fabric or use rock-free mulch beds instead.
      </p>
      <p>
        <strong>Under organic mulch.</strong> Fabric under shredded bark or
        wood mulch is a genuinely bad idea: it blocks earthworms and soil
        biology from mixing the mulch into the soil, it traps moisture
        against shallow roots, and the decomposing mulch layer on top becomes
        a weed mat anyway. Mulch belongs directly on soil.
      </p>
      <p>
        <strong>Under poured slabs and pavers.</strong> Concrete slabs, paver
        patios, and shed pads need compacted aggregate base, not fabric
        between base and soil — fabric doesn't add bearing strength and a
        slippery woven layer under a compacted base can create a weak shear
        plane. Use a proper compacted base course instead.
      </p>
      <p>
        <strong>Where you'll ever dig again.</strong> Irrigation lines,
        drainage cleanouts, future fence posts — fabric that will be cut and
        sliced in two years is just future trash. It tears in ragged strips
        that surface through the rock for years afterward.
      </p>

      <h2>The weed myth, honestly</h2>
      <p>
        Fabric stops weeds coming <em>up</em> from the soil. It does nothing
        about seeds landing <em>down</em>. Leaves, dust, and pollen decompose
        on top of the rock and form a thin soil layer — weeds root there
        happily, their roots sitting above the fabric where it can't touch
        them. This is why five-year-old fabric beds sprout weeds and people
        call the fabric a scam. It isn't a scam; it was sold as a permanent
        weed solution when it's really a soil-separator with a weed-delay
        side effect. Plan on spot-weeding or an occasional leaf-blow over the
        rock, and you'll be satisfied with what fabric actually does.
      </p>
      <p>
        The other honest truth: <strong>cheap fabric is worse than no
        fabric.</strong> Thin spun-bond material (the bargain rolls at big-box
        stores) tears in 2 to 3 years under rock. Once shredded, it can't be
        pulled out without removing all the rock — so you end up with a bed
        of rock tangled in tatters that still lets weeds through. Buy once:
        woven 3+ oz fabric for rock beds, and you won't think about it again
        for 15+ years.
      </p>

      <h2>Woven vs non-woven: buy the right one</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Type</th><th>Best for</th><th>Strength</th><th>Drainage</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Woven polypropylene (3+ oz)</td><td className="num">Rock beds, walkways, under gravel</td><td className="num">Very high — resists tearing</td><td className="num">Good, but slower than non-woven</td></tr>
          <tr><td className="num">Non-woven geotextile</td><td className="num">French drains, under drain rock</td><td className="num">Moderate</td><td className="num">Excellent — filters silt, passes water fast</td></tr>
          <tr><td className="num">Spun-bond (cheap)</td><td className="num">Short-term annual beds only</td><td className="num">Low — tears in 2–3 yrs</td><td className="num">Good while intact</td></tr>
        </tbody>
      </table>
      <p>
        Rule of thumb: <strong>woven under rock, non-woven around
        drains.</strong> Under rock you need puncture and tear resistance —
        rock is heavy and shifts. Around drains you need filtration, and
        non-woven geotextile lets water pass while holding back silt. Don't
        use plastic sheeting for either: it blocks drainage entirely and
        creates a soggy, airless layer that rots nearby roots.
      </p>

      <h2>How to install it so it actually works</h2>
      <p>
        <strong>1. Prep the soil.</strong> Clear all existing weeds and roots,
        then level and lightly compact the soil. Fabric over bumpy, rooty
        ground leaves air pockets that later become weed habitats.
      </p>
      <p>
        <strong>2. Overlap seams 6 inches.</strong> Fabric edges are where
        weeds win. Overlap every seam by at least 6 inches — 12 on slopes —
        and face the overlaps downhill so water sheds over them, not under.
      </p>
      <p>
        <strong>3. Pin it down.</strong> Use 6-inch landscape staples every
        2 to 3 feet along edges and seams, and every 12 to 18 inches on
        slopes. Unpinned fabric migrates under rock and bunches up, leaving
        bare patches.
      </p>
      <p>
        <strong>4. Cut planting holes as X's.</strong> If shrubs or plants go
        through the bed, cut X-shaped slits just big enough for the root
        ball — don't cut big circles that expose soil to the rock layer.
        Fold the flaps under the plant.
      </p>
      <p>
        <strong>5. Cover with 2 to 3+ inches of rock.</strong> Fabric must
        never see sunlight — UV destroys it within a season. Two inches is
        the bare minimum; 3 inches hides the fabric, suppresses the first
        wave of top-rooted weeds, and looks substantially better.
      </p>

      <h2>Fabric vs no-fabric at a glance</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Fabric?</th><th>Why</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Permanent rock bed</td><td className="num">Yes — woven</td><td className="num">Separates rock from soil; prevents sinking</td></tr>
          <tr><td className="num">Gravel walkway</td><td className="num">Yes — woven</td><td className="num">Stabilizes stone under foot traffic</td></tr>
          <tr><td className="num">French drain</td><td className="num">Yes — non-woven</td><td className="num">Filters silt; keeps drain from clogging</td></tr>
          <tr><td className="num">Gravel under a deck</td><td className="num">Yes — woven</td><td className="num">Zero-maintenance zone, nothing planted</td></tr>
          <tr><td className="num">Future planting area</td><td className="num">No</td><td className="num">Turns future digging into excavation</td></tr>
          <tr><td className="num">Under organic mulch</td><td className="num">No</td><td className="num">Blocks decomposition; traps moisture</td></tr>
          <tr><td className="num">Under pavers or concrete</td><td className="num">No</td><td className="num">Use compacted aggregate base instead</td></tr>
          <tr><td className="num">Playground mulch</td><td className="num">No</td><td className="num">Needs deep loose fill; barrier blocks drainage</td></tr>
        </tbody>
      </table>

      <h2>How much rock to put over the fabric</h2>
      <p>
        Fabric does nothing if the rock layer is too thin — and thin rock
        over fabric looks terrible, with the weave showing through. Use{" "}
        <strong>3 inches</strong> as the standard for decorative beds,{" "}
        <strong>4+ inches</strong> for paths that take foot traffic, and{" "}
        <strong>2 inches absolute minimum</strong> anywhere. Volume math: a
        10×12 ft bed at 3 inches needs (120 × 0.25) / 27 ={" "}
        <strong>1.11 cubic yards</strong> — order 1.25 yards with overage.
        Run your own dimensions through the{" "}
        <a href="/calculators/landscape-rock-calculator/">landscape rock
        calculator</a> before ordering; rock is heavy and delivery
        minimums make short orders expensive.
      </p>

      <h2>Geotextile under driveways: a special case</h2>
      <p>
        Woven geotextile <em>does</em> have a role under gravel driveways —
        but not as a weed barrier. Here it acts as a <strong>soil
        separator</strong> between soft subgrade and the aggregate base
        course, keeping the base from punching down into mud and the mud
        from pumping up into the base. This is a construction decision made
        during base design, not a landscaping add-on: the fabric goes under
        4–6 inches of compacted crushed stone, never directly under the
        decorative surface layer. On firm, well-drained subgrade it's
        optional; on clay or chronically wet soil it meaningfully extends
        the driveway's life.
      </p>

      <h2>Dealing with old, failed fabric</h2>
      <p>
        If you inherited shredded bargain fabric under rock, removal is
        unpleasant but straightforward: rake the rock to one side, cut the
        fabric into 2-foot strips with a utility knife, and pull each strip
        out — roots will have grown through it, so expect resistance. Don't
        try to pull whole sheets; they tear and leave more behind. Replace
        with proper woven fabric (this time) or skip fabric and accept
        deeper rock over compacted soil. The one thing not to do: lay new
        fabric over the old tatters. Two layers of failing fabric is worse
        than one.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Fabric under mulch.</strong> Covered above — mulch goes
        straight on soil. <strong>No overlap at seams.</strong> A 1-inch gap
        between fabric sheets is a weed highway. <strong>Skipping pins on
        slopes.</strong> Gravity plus rain plus foot traffic moves fabric
        under stone every time. <strong>Covering too thin.</strong> An inch
        of rock lets light through to the fabric edges and looks terrible —
        3 inches is the number. <strong>Buying the cheapest roll.</strong>{" "}
        The $25 roll that fails in year 3 costs more than the $60 roll that
        lasts 15, once you price the do-over.
      </p>

      <Faq items={faqs} heading="Landscape Fabric FAQ" />
    </GuideArticle>
  );
}

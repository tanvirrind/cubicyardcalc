import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Decomposed Granite vs Gravel for Driveways, Patios & Paths",
  description:
    "Decomposed granite vs gravel: composition, compaction, drainage, cost, and maintenance compared. Plus the DG vs crushed granite fines naming confusion, sorted.",
  keywords: [
    "decomposed granite vs gravel",
    "is decomposed granite the same as gravel",
    "decomposed granite driveway pros cons",
    "crushed granite vs decomposed granite",
    "dg vs pea gravel",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/decomposed-granite-vs-gravel/" },
  openGraph: {
    title: "Decomposed Granite vs Gravel for Driveways, Patios & Paths | Cubic Yard Calculator",
    description:
      "DG vs gravel compared on cost, stability, and maintenance — plus which 'granite' the supplier is actually quoting you.",
    url: "https://cubicyardcalculator.site/guides/decomposed-granite-vs-gravel/",
  },
};

const faqs = [
  {
    q: "Is decomposed granite the same as gravel?",
    a: "No. Decomposed granite is granite that has weathered into sand-and-fines particles that compact into a firm, trail-like surface. Gravel is quarried or river-worn rock in larger sizes that stays loose. They look related; they behave completely differently underfoot.",
  },
  {
    q: "What are the pros and cons of a decomposed granite driveway?",
    a: "Pros: natural compacted look, good drainage, lower cost than concrete or pavers. Cons: needs periodic re-grading, ruts under heavy vehicles, washes out in heavy rain without proper edging and drainage, and it tracks fine dust indoors.",
  },
  {
    q: "What is the difference between crushed granite and decomposed granite?",
    a: "Decomposed granite is naturally weathered granite fines (rounded, compactable). Crushed granite fines are mechanically crushed quarry stone (angular, often 3/8 inch minus) — they compact even harder and are arguably better for driveways, but look more 'quarry' than 'trail.'",
  },
  {
    q: "DG vs pea gravel for a patio: which is better?",
    a: "Decomposed granite, for most patios — it compacts into a stable surface that chairs sit flat on. Pea gravel stays loose and migrates underfoot and furniture. Choose pea gravel only for decorative beds or when you prefer the loose-stone look.",
  },
  {
    q: "How much decomposed granite do I need?",
    a: "Use 2 to 3 inches compacted for paths, 3 inches for patios, and 4+ inches for driveways. Volume = length × width × depth in feet ÷ 27, then add 10% since DG settles and compacts significantly — a 4 inch loose layer compacts to roughly 3 inches.",
  },
  {
    q: "Does decomposed granite need a stabilizer?",
    a: "Not required, but stabilizer (resin binder mixed in or sprayed on) cuts washout and raveling on slopes and high-traffic paths. It adds cost — roughly doubling the material price — so reserve it for problem spots rather than the whole job.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Decomposed Granite vs Gravel for Driveways, Patios & Paths"
      description="How DG and gravel actually differ — composition, stability, drainage, cost, maintenance — plus how much of each your project needs."
      slug="decomposed-granite-vs-gravel"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        Decomposed granite (DG) compacts into a firm, almost trail-like
        surface — great for paths and patios where you want stable footing.
        Gravel stays loose and drains freely — better for drainage areas,
        driveways that need to shed water, and anywhere you want easy
        future digging. The deciding question isn't which is
        "better" — it's whether you want a <strong>surface you walk
        on</strong> (DG) or <strong>stone that sits loose</strong> (gravel).
        One more thing before you order: make sure the supplier and you are
        naming the same material, because "granite" covers three genuinely
        different products.
      </p>

      <h2>Head-to-head comparison</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Factor</th><th>Decomposed granite</th><th>Gravel (pea / crushed)</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Composition</td><td className="num">Naturally weathered granite: sand-to-fines particles</td><td className="num">Quarried or river rock, 3/8″ to 1″+</td></tr>
          <tr><td className="num">Compaction / stability</td><td className="num">Compacts firm — chairs and feet stay level</td><td className="num">Stays loose — shifts underfoot and furniture</td></tr>
          <tr><td className="num">Drainage</td><td className="num">Good, but can crust and puddle on flat ground</td><td className="num">Excellent — water passes straight through</td></tr>
          <tr><td className="num">Cost (bulk, 2026)</td><td className="num">$30–$60/yd³ typical</td><td className="num">$20–$60/yd³ typical</td></tr>
          <tr><td className="num">Maintenance</td><td className="num">Re-grade and top up yearly; ruts under cars</td><td className="num">Rake back migrating stone; top up occasionally</td></tr>
          <tr><td className="num">Best use</td><td className="num">Paths, patios, garden floors</td><td className="num">Driveways, drainage, fire pits, decorative beds</td></tr>
        </tbody>
      </table>
      <p>
        Notice costs overlap — the price difference between DG and gravel is
        mostly regional, not inherent. The real cost question is maintenance:
        DG asks for an hour of re-grading each spring; gravel asks for an
        occasional rake-back of stones that wandered onto the lawn.
      </p>

      <h2>The naming confusion (read before ordering)</h2>
      <p>
        Suppliers use "granite" loosely, and the three products behave very
        differently:
      </p>
      <p>
        <strong>Decomposed granite (DG):</strong> natural granite broken down
        by weathering into rounded fines. It compacts into the firm, golden
        trail surface you see in Southwest gardens. Ask for "decomposed
        granite" specifically.
      </p>
      <p>
        <strong>Crushed granite fines:</strong> mechanically crushed quarry
        granite, usually 3/8″ minus. More angular than true DG, so it locks
        and compacts even harder — many contractors prefer it for driveways.
        But it looks more "industrial quarry" than "desert trail."
      </p>
      <p>
        <strong>Granite gravel:</strong> actual granite aggregate in gravel
        sizes (3/8″–3/4″) — gray or pink rock that behaves like any gravel:
        loose, excellent drainage, no compaction. If you wanted a firm DG
        surface and got this delivered, the patio chairs will sink.
      </p>
      <p>
        When you call a supplier, name all three and ask which one the quote
        covers. A $40/yard "granite" quote means nothing until you know which
        granite.
      </p>

      <h2>Depth and quantity guidance per use</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Use</th><th>DG depth (compacted)</th><th>Gravel depth</th><th>Example quantity</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Garden path</td><td className="num">2–3″</td><td className="num">2–3″</td><td className="num">100 ft × 3 ft @ 3″ ≈ 2.8 yd³</td></tr>
          <tr><td className="num">Patio</td><td className="num">3″</td><td className="num">2–3″ over base</td><td className="num">12 × 16 ft @ 3″ ≈ 1.8 yd³</td></tr>
          <tr><td className="num">Driveway</td><td className="num">4″+ over road base</td><td className="num">4–6″ compacted</td><td className="num">10 × 50 ft @ 4″ ≈ 6.2 yd³</td></tr>
        </tbody>
      </table>
      <p>
        Math check on the patio line: 12 × 16 = 192 sq ft; 192 × 0.25 ÷ 27 =
        1.78 yards — call it <strong>2 yards</strong> ordered. For DG, always
        order <strong>10–15% extra</strong>: a 4-inch loose layer compacts to
        roughly 3 inches, so the "compacted depth" column is what you measure
        after rolling, not what you order. Driveways of either material need
        a compacted road-base layer beneath — DG over bare soil ruts under
        the first delivery truck.
      </p>

      <h2>Stabilizer: worth it?</h2>
      <p>
        DG stabilizer is a resin binder mixed into the fines (or sprayed on
        after install) that glues particles together — dramatically cutting
        washout on slopes, in heavy rain, and under foot traffic. The catch:
        it roughly <strong>doubles material cost</strong>, and installation
        is fussier (mix evenly, wet correctly, cure undisturbed). Our take:
        use stabilizer on problem spots — sloped paths, areas under roof
        drip lines, dog runs — and let plain compacted DG handle the rest.
        Stabilized DG approaches the price of basic concrete, so price the
        comparison honestly before committing a whole driveway.
      </p>

      <h2>Where each one wins</h2>
      <p>
        <strong>Paths and patios:</strong> DG wins — stable underfoot,
        wheelchair- and stroller-friendly, and the warm color suits gardens.{" "}
        <strong>Driveways:</strong> gravel (crushed 3/4″) wins for most
        regions — it sheds water, handles weight, and re-grades easily; DG
        driveways work in dry climates but rut and wash in wet ones.{" "}
        <strong>Drainage and French drains:</strong> gravel only — DG's
        fines clog filter fabric and drainage pipe.{" "}
        <strong>Decorative beds:</strong> gravel (pea or river) — DG reads
        as a walking surface, not a bed dressing.
      </p>

      <h2>Regional availability note</h2>
      <p>
        DG is abundant and cheap in the <strong>West and Southwest — CA, AZ,
        TX, NM</strong> — where granite weathers naturally and quarries are
        close. East of the Rockies, true decomposed granite gets scarce and
        expensive; crushed granite fines or crushed stone are the practical
        substitutes (see{" "}
        <a href="/guides/crushed-stone-vs-pea-gravel/">crushed stone vs pea
        gravel</a> for that comparison). If your supplier quotes DG at double
        the gravel price, that's regional scarcity talking — don't pay the
        premium for the name when crushed fines do the job.
      </p>

      <h2>Which is easier to DIY?</h2>
      <p>
        <strong>Gravel is the easier DIY project.</strong> Dump it, spread
        it, rake it level — done in an afternoon. DG demands more craft:
        spread in 2-inch lifts, wet each lift evenly (not soaked, not dry),
        compact with a plate compactor or hand tamper, and let it cure
        before foot traffic. Edging is mandatory for DG — without it, the
        compacted surface crumbles at the edges within a season. Budget a
        compactor rental (~$60–$90/day) for any DG job over a small path,
        and plan the work for a dry stretch of weather. DG rewards patience;
        gravel forgives everything.
      </p>

      <h2>Worked cost example: a 12 × 16 ft patio</h2>
      <p>
        From the depth table: 192 sq ft at 3 inches = 1.78 yards — order{" "}
        <strong>2 yards</strong>. <strong>DG route:</strong> 2 yd × $45 =
        $90 material + $75 delivery + steel edging (~60 linear ft × $3) =
        $180 + compactor rental $70 ≈ <strong>$415 all-in</strong>.{" "}
        <strong>Pea gravel route:</strong> 2 yd × $40 = $80 + $75 delivery
        + edging $180 ≈ <strong>$335</strong> — but add a compacted crushed
        base if you want it stable, which narrows the gap. The DG patio
        costs a bit more up front and asks for an hour of re-grading each
        spring; the gravel patio costs less and asks for occasional
        rake-backs. Neither is "cheap forever" — pick your maintenance.
      </p>

      <h2>Maintenance calendar</h2>
      <p>
        <strong>DG:</strong> re-grade with a landscape rake each spring to
        fix winter ruts and low spots; top up with 0.5–1 inch of fresh DG
        annually (it wears); clear debris promptly — decomposing leaves
        stain the surface and seed weeds. <strong>Gravel:</strong> rake
        migrating stone back monthly during heavy-use seasons; top up every
        1–2 years; spray or pull weeds that root in accumulated dust. Both
        surfaces last indefinitely with this level of attention; both look
        tired within two seasons without it.
      </p>

      <h2>DG and dogs</h2>
      <p>
        DG is a popular choice for dog runs — it packs firm enough that
        paws stay clean and it drains well. Two caveats: fine DG dust can
        track indoors on paws (coarser "path fines" are better here), and
        urine odor lingers in the fines over time — plan on periodic
        rinsing and a fresh top layer yearly in high-use spots. Gravel is
        the worse dog surface: stones get kicked around, lodge between paw
        pads, and make waste cleanup miserable.
      </p>

      <h2>Can you combine DG and gravel?</h2>
      <p>
        Absolutely — and the best-looking landscapes often do. Use DG for
        the walking surfaces (paths, patio floor) and gravel for the
        planting beds and drainage zones around them. The combination gives
        you stable footing where you walk and free drainage where plants
        grow. Install steel edging between the two so the DG doesn't bleed
        into the gravel beds. One caution: keep DG away from downspout
        discharge points and low spots where water concentrates — that's
        gravel's job.
      </p>

      <h2>DG vs crushed stone for driveways</h2>
      <p>
        For driveways specifically, there's a third contender worth naming:{" "}
        <a href="/guides/crushed-stone-vs-pea-gravel/">crushed stone</a>{" "}
        (3/4″ angular with fines). In wet climates it beats DG outright —
        it locks together harder, sheds water without washing out, and
        re-grades cleanly. DG driveways are a dry-climate solution: in the
        Southwest they last years with light maintenance; in the rainy
        Southeast or freeze-thaw North they rut and wash. If you're outside
        DG country, crushed stone with fines gives you 80% of the firm,
        natural look with far better weather tolerance.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Ordering DG for a drainage project.</strong> Fines plus
        water plus filter fabric equals a clogged system.{" "}
        <strong>No edging.</strong> Both materials migrate sideways without
        steel, stone, or timber edging — DG especially on slopes.{" "}
        <strong>Forgetting the 10–15% compaction overage on DG.</strong> The
        delivered pile looks like enough; the compacted surface says
        otherwise. <strong>Assuming "granite" means one thing.</strong>{" "}
        Covered above — confirm the exact product before the truck arrives.
      </p>

      <Faq items={faqs} heading="DG vs Gravel FAQ" />
    </GuideArticle>
  );
}

import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Topsoil vs Fill Dirt: What's the Difference?",
  description:
    "Topsoil vs fill dirt: composition, organic matter, compaction, and cost compared. Learn the two-layer technique and how much topsoil to cap fill dirt with. Free topsoil calculator.",
  keywords: [
    "topsoil vs fill dirt",
    "fill dirt vs topsoil",
    "can i use topsoil as fill dirt",
    "how much topsoil over fill dirt",
    "topsoil for fill",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/topsoil-vs-fill-dirt/" },
  openGraph: {
    title: "Topsoil vs Fill Dirt: What's the Difference? | Cubic Yard Calculator",
    description:
      "The side-by-side comparison, the #1 DIY mistake, and the two-layer technique for building up grade that you can actually plant in.",
    url: "https://cubicyardcalculator.site/guides/topsoil-vs-fill-dirt/",
  },
};

const faqs = [
  {
    q: "Can I use topsoil as fill dirt?",
    a: "For small, non-structural spots where you also want to plant, yes — with a catch. Topsoil's organic matter decomposes and the material keeps settling, so it is a poor structural fill under patios, sheds, or anything you will drive on. Use compactable fill dirt under those.",
  },
  {
    q: "How much topsoil should go over fill dirt?",
    a: "Cap fill dirt with 4 to 6 inches of topsoil — 4 inches is the minimum for turf grass, 6 is better for garden beds and planting. Anything growing needs that living layer on top of the fill.",
  },
  {
    q: "Will fill dirt settle over time?",
    a: "Some, even when compacted. Plan on 5 to 10% settlement in the first year after proper compaction in lifts. Overfill slightly and let it settle before final grading, or compact in 6-inch lifts with a plate compactor or roller.",
  },
  {
    q: "Can you plant in fill dirt?",
    a: "Fill dirt alone is poor growing medium — almost no organic matter and often heavy clay content. It works as the base layer; you need 4 to 6 inches of topsoil (plus compost in beds) on top for plants to thrive.",
  },
  {
    q: "How do you tell topsoil and fill dirt apart?",
    a: "Color and texture. Topsoil is darker — brown to black — crumbly, and smells earthy because of its organic matter. Fill dirt is lighter and duller, often gray, tan, or reddish, and feels sandy or clay-heavy with little crumble.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Topsoil vs Fill Dirt: What's the Difference?"
      description="The short answer, a side-by-side comparison, the #1 DIY mistake, and the two-layer technique for building grade you can actually plant in."
      slug="topsoil-vs-fill-dirt"
      calculatorHref="/calculators/topsoil-calculator/"
      calculatorLabel="Try the topsoil calculator"
      updated="2026-10-12"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        <strong>Topsoil</strong> is the dark, living top layer of earth —
        rich in organic matter, designed for growing things. <strong>Fill
        dirt</strong> is the subsoil underneath it — mostly mineral soil,
        sand, and clay, nearly sterile, and built for one job: taking up
        space. If you are <strong>building up grade, filling holes, or
        leveling ground under something structural</strong>, you want fill
        dirt. If you are <strong>planting grass, gardens, or anything with
        roots</strong>, you want topsoil. And for big low spots that need
        both, the right move is the two-layer technique: compacted fill
        dirt on the bottom, a 4-to-6-inch cap of topsoil on top. Figure the
        fill first with the{" "}
        <a href="/calculators/fill-dirt-calculator/">fill dirt
        calculator</a>, then size the cap separately.
      </p>

      <h2>Topsoil vs fill dirt, side by side</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Factor</th><th>Topsoil</th><th>Fill dirt</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Composition</strong></td><td>Top 2–8 inches of soil; loam, sand, silt, clay, plus organic matter</td><td>Subsoil below the topsoil layer; mostly mineral soil, sand, and clay</td></tr>
          <tr><td><strong>Organic matter</strong></td><td className="num">~2–10%</td><td className="num">Under ~1%</td></tr>
          <tr><td><strong>Best uses</strong></td><td>Lawn topdressing, garden beds, sod prep, planting</td><td>Raising grade, filling holes and low spots, under patios and sheds</td></tr>
          <tr><td><strong>Where NOT to use</strong></td><td>Under anything structural — it settles as organics decompose</td><td>As a growing medium on its own — too sterile, often heavy clay</td></tr>
          <tr><td><strong>Compaction behavior</strong></td><td>Compacts poorly; stays soft and keeps settling</td><td>Compacts firmly in lifts; holds its shape for grading</td></tr>
          <tr><td><strong>Weight</strong></td><td className="num">2,400 lbs per cubic yard</td><td className="num">2,200 lbs per cubic yard</td></tr>
          <tr><td><strong>Cost per cubic yard</strong></td><td className="num">$25–60 (typical 2026 US range)</td><td className="num">$10–30 (typical 2026 US range)</td></tr>
        </tbody>
      </table>
      <p>
        The price gap is the reason the distinction matters: fill dirt is
        the cheap way to move volume, and topsoil is the expensive living
        layer you only need on the surface. Paying topsoil prices for 12
        inches of material when only the top 4 matter is how a simple
        grading project doubles its materials bill.
      </p>

      <h2>The #1 DIY mistake: topsoil as structural fill</h2>
      <p>
        This is the error that shows up a year later, when the patio corner
        drops two inches and the fence post leans. Topsoil&rsquo;s organic
        matter — the exact thing that makes it great for growing — is a
        time bomb under anything structural. That 2–10% organic content
        decomposes, the soil keeps settling long after you thought it was
        done, and no amount of tamping prevents it because the problem is
        inside the material itself. Under a shed slab, a paver patio, or
        any area you will drive on, use fill dirt compacted in lifts
        instead. Reserve topsoil for the surface where roots live. The rule
        is simple: <strong>organic matter under a structure is a
        settlement warranty you never wanted.</strong>
      </p>

      <h2>The two-layer technique</h2>
      <p>
        For any project deeper than about 6 inches that also needs a
        finished planting surface — raising a lawn that dips toward the
        house, leveling a backyard, building a berm — build it in two
        layers:
      </p>
      <p>
        <strong>Layer 1: fill dirt base.</strong> Fill to within 4–6 inches
        of final grade. Compact in 6-inch lifts (a plate compactor for
        walk-behind jobs, a roller for drive-over work), wetting lightly
        between lifts so the material locks together. Expect 5–10% more
        settlement in the first year — overfill slightly or grade a touch
        high.
      </p>
      <p>
        <strong>Layer 2: topsoil cap, 4–6 inches.</strong> Once the fill
        base is compacted, spread topsoil on top — 4 inches minimum for
        turf, 6 inches for garden beds and shrubs. Scarify (rake or
        till) the top of the fill layer before capping so the two layers
        bond instead of forming a slick boundary that sheds water. Never
        compact the topsoil cap the way you compacted the fill; you want
        it loose and plantable.
      </p>
      <p>
        Calculate each layer as its own project. The two materials have
        different densities and prices, so running the fill and the cap
        through the <a href="/calculators/fill-dirt-calculator/">fill dirt
        calculator</a> and the <a
        href="/calculators/topsoil-calculator/">topsoil calculator</a>{" "}
        separately keeps the order sheet honest.
      </p>

      <h2>The decision flowchart</h2>
      <p>
        Work through these in order and the right material picks itself:
      </p>
      <p>
        <strong>Is anything structural going on top — a patio, shed slab,
        retaining wall base, driveway edge?</strong> → Fill dirt. Topsoil
        under it will settle. No exceptions.
      </p>
      <p>
        <strong>Are you building up grade more than about 6 inches, with
        planting as the finish?</strong> → Two-layer: fill dirt to within
        4–6 inches of final grade, then cap with topsoil.
      </p>
      <p>
        <strong>Is it shallow (under 6 inches) and the finish is grass or
        planting?</strong> → Topsoil alone. The volume is small enough
        that settlement is manageable, and you need a growing surface
        anyway.
      </p>
      <p>
        <strong>Filling a hole, low spot, or sinkhole with nothing growing
        on it?</strong> → Fill dirt, compacted in lifts, graded slightly
        proud. Cheapest material for the job.
      </p>
      <p>
        <strong>Garden bed, sod prep, or topdressing?</strong> → Topsoil —
        and for beds, amend it with compost, because screened bulk topsoil
        is often leaner than the label suggests.
      </p>

      <h2>Worked example: raising a 200 sq ft area 6 inches</h2>
      <p>
        Say a 200 sq ft section of lawn dips 6 inches and you want to bring
        it to grade and plant grass on the finish. Two-layer job:
      </p>
      <p>
        <strong>Fill dirt base</strong> — 6 inches minus a 4-inch topsoil
        cap leaves about 2 inches of fill: (200 × 0.167) / 27 ={" "}
        <strong>1.24 cubic yards</strong>. In practice, for a 6-inch lift
        it is simpler to fill the full 6 inches (200 × 0.5) / 27 ={" "}
        <strong>3.7 cubic yards of fill dirt</strong>, then cap, since the
        cap replaces the top of the fill anyway — most DIYers end up
        with roughly this two-step order.
      </p>
      <p>
        <strong>Topsoil cap</strong> — 4 inches of finished planting
        surface: (200 × 0.333) / 27 = <strong>2.47 cubic yards of
        topsoil</strong>, roughly 5,930 lbs at 2,400 lbs per yard. Order 2.5
        yards plus 10% overage → about 2.75 yards. At typical 2026 prices
        that cap alone runs roughly $70–$165 — which is exactly why you
        don&rsquo;t build the whole 6 inches out of topsoil.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Topsoil under the patio.</strong> Covered above — it is
        the single most common cause of DIY settling.{" "}
        <strong>Skipping compaction on deep fill.</strong> Fill dirt
        settles 5–10% even compacted; uncompacted, much more. Tamp in
        6-inch lifts or you will be re-grading next spring.{" "}
        <strong>Topsoil cap too thin.</strong> Under 4 inches of topsoil
        and turf roots hit the dense fill layer and stall — the cap is
        the growing space, don&rsquo;t skimp it.{" "}
        <strong>Compacting the topsoil cap.</strong> Rolling the finished
        topsoil like a parking pad ruins its structure; spread it loose
        and let it be.{" "}
        <strong>Buying &ldquo;dirt&rdquo; without asking which.</strong>{" "}
        Suppliers sell topsoil and fill dirt at very different prices —
        &ldquo;dirt&rdquo; on the quote is ambiguous. Confirm which one
        before the truck arrives.{" "}
        <strong>Ignoring water.</strong> Wet material can weigh 5–15% more
        than dry — relevant when you are hauling or spreading by hand —
        and saturated fill compacts poorly. Let it drain before compacting.
      </p>

      <Faq items={faqs} heading="Topsoil vs fill dirt FAQ" />
    </GuideArticle>
  );
}

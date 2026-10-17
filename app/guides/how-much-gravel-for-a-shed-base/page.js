import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Gravel for a Shed Base? (Pad Size Chart + Depth Guide)",
  description:
    "Size your shed gravel pad right the first time: pad-size chart by shed footprint, cubic yards and tons at 4 and 6 inches, #57 stone guidance, fabric and compaction steps.",
  keywords: [
    "how much gravel for a shed base",
    "shed base gravel depth",
    "gravel pad for shed size chart",
    "#57 stone for shed foundation",
    "how thick gravel under shed",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-gravel-for-a-shed-base/" },
  openGraph: {
    title: "How Much Gravel for a Shed Base? (Pad Size Chart + Depth Guide) | Cubic Yard Calculator",
    description:
      "Pad-size chart, yard and ton quantities, the right stone, and the fabric-and-compaction build steps. Free gravel calculator.",
    url: "https://cubicyardcalculator.site/guides/how-much-gravel-for-a-shed-base/",
  },
};

const faqs = [
  {
    q: "How thick should gravel be under a shed?",
    a: "4 to 6 inches of compacted #57 stone is the standard. Use 4 inches on firm, well-drained soil in mild climates, 6 inches as the all-around default, and 6 to 8 inches in freeze-thaw regions or over soft clay. The depth is measured compacted, not loose.",
  },
  {
    q: "What size gravel is best for a shed base?",
    a: "#57 stone — angular crushed rock roughly 1/2 to 1 inch — is the go-to. The angular faces interlock and drain freely. Avoid round pea gravel: it rolls, never compacts, and shifts under the skids.",
  },
  {
    q: "How much gravel do I need for an 8×10 shed?",
    a: "The pad runs 10×12 feet (shed + 12 inches each side). At 4 inches: (10 × 12 × 0.333) / 27 = 1.48 cubic yards, about 2.07 tons. At 6 inches: 2.22 yards, about 3.11 tons. Round up to 2.5 yards with compaction overage.",
  },
  {
    q: "Do I need landscape fabric under a gravel shed pad?",
    a: "Yes. Fabric between soil and stone keeps the gravel from sinking into the subgrade and blocks weeds from coming up through the pad. It's cheap insurance on a pad you can't easily rebuild.",
  },
  {
    q: "Can I set a shed directly on gravel?",
    a: "Yes — a compacted gravel pad is one of the most common DIY shed foundations. Set the shed skids or blocks on the pad, edge the pad with pressure-treated timbers so the stone can't migrate, and check local wind-anchoring codes if you're in a high-wind area.",
  },
  {
    q: "Should I compact the gravel for a shed base?",
    a: "Yes — in 2 to 3 inch lifts with a plate compactor. Stone dumped loose and compacted once settles unevenly, and an uneven pad rocks the shed. Water each lift lightly before compacting for the tightest pack.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Gravel for a Shed Base?"
      description="Pad-size chart (shed footprint → pad footprint → yards and tons), depth rules by climate, the right stone, and the fabric-and-compaction build steps."
      slug="how-much-gravel-for-a-shed-base"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
      updated="2026-10"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        Make the pad <strong>12 inches larger than the shed on every
        side</strong> (the shed footprint plus 2 feet each way), and plan on
        <strong> 4–6 inches of compacted #57 stone</strong>. The formula is
        the usual one: (length × width × depth in feet) / 27. A 10×12 shed
        gets a 12×14 pad; at 6 inches that&apos;s (12 × 14 × 0.5) / 27 =
        <strong> 3.11 cubic yards</strong>, about <strong>4.36 tons</strong>.
        Round up and order — suppliers sell whole and half yards, and
        compaction eats roughly 10–20% of loose volume.
      </p>

      <h2>Pad-size chart: shed footprint → yards and tons</h2>
      <p>
        Pad footprint = shed dimensions plus 12 inches on each side. Tons =
        yards × 1.4 (gravel runs about 2,800 lbs per cubic yard). Add 10–20%
        over the chart numbers for compaction loss and grade irregularities.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Shed size</th><th>Pad size</th><th>4 in: yards</th><th>4 in: tons</th><th>6 in: yards</th><th>6 in: tons</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">8 × 8</td><td className="num">10 × 10</td><td className="num">1.23</td><td className="num">1.73</td><td className="num">1.85</td><td className="num">2.59</td></tr>
          <tr><td className="num">8 × 10</td><td className="num">10 × 12</td><td className="num">1.48</td><td className="num">2.07</td><td className="num">2.22</td><td className="num">3.11</td></tr>
          <tr><td className="num">8 × 12</td><td className="num">10 × 14</td><td className="num">1.73</td><td className="num">2.42</td><td className="num">2.59</td><td className="num">3.63</td></tr>
          <tr><td className="num">10 × 12</td><td className="num">12 × 14</td><td className="num">2.07</td><td className="num">2.90</td><td className="num">3.11</td><td className="num">4.36</td></tr>
          <tr><td className="num">10 × 16</td><td className="num">12 × 18</td><td className="num">2.67</td><td className="num">3.73</td><td className="num">4.00</td><td className="num">5.60</td></tr>
          <tr><td className="num">12 × 16</td><td className="num">14 × 18</td><td className="num">3.11</td><td className="num">4.36</td><td className="num">4.67</td><td className="num">6.53</td></tr>
          <tr><td className="num">12 × 20</td><td className="num">14 × 22</td><td className="num">3.80</td><td className="num">5.32</td><td className="num">5.70</td><td className="num">7.99</td></tr>
        </tbody>
      </table>
      <p>
        Sanity check on the 10×12 row at 6 inches: 12 × 14 × 6 / 324 = 3.11
        yards, and 3.11 × 1.4 = 4.36 tons. (Note: the numbers above use the
        formula pad L × pad W × depth(in) / 324 — check your calculator
        result against any row before ordering.)
      </p>

      <h2>Depth rules: 4, 6, or 8 inches?</h2>
      <p>
        Depth here means <strong>compacted depth</strong>. Use{" "}
        <strong>4 inches</strong> on firm, well-drained soil in mild
        climates. Use <strong>6 inches</strong> as the default for most
        sheds — it handles drainage, frost, and a mower-grade of imperfection
        in the subgrade. Go <strong>6–8 inches</strong> in freeze-thaw
        regions or over soft, expansive clay: deeper stone puts the pad above
        more of the freeze line&apos;s heave and spreads the shed&apos;s load
        across mushy soil. Whatever target you pick, install loose stone
        about 20–25% deeper than the finished depth, then compact down to it.
      </p>

      <h2>The right stone: why #57</h2>
      <p>
        <strong>#57 stone</strong> is angular crushed rock, roughly 1/2 to 1
        inch across. The angular faces lock together under compaction, and
        the open gaps between pieces drain water straight through instead of
        pooling under the shed — the two things a shed pad has to do. Compare
        with the alternatives: <strong>pea gravel</strong> is round and never
        compacts — it shifts under skids and walks out from under the pad
        (see our <a href="/guides/crushed-stone-vs-pea-gravel/">
        crushed stone vs pea gravel guide</a> for the full breakdown).{" "}
        <strong>Crusher run / dense grade</strong> packs harder because of its
        fines, but it holds water — fine for a driveway, less ideal where a
        wooden shed floor sits inches above. #57 is also the stone to ask for
        by name at the quarry: it&apos;s a standard gradation, so you
        won&apos;t get a surprise load of something else.
      </p>

      <h2>Build steps: fabric, edging, lifts</h2>
      <p>
        <strong>1. Mark and strip.</strong> Lay out the pad footprint and
        remove sod and topsoil down about 6 inches so the stone sits on
        stable subgrade, not spongy organics. <strong>2. Landscape
        fabric.</strong> Roll non-woven geotextile fabric over the excavation
        — it separates stone from soil so the pad can&apos;t sink, and stops
        weeds. Overlap seams 6 inches. <strong>3. Timber edging.</strong> Set
        a square frame of pressure-treated 4×4 or 6×6 timbers, level all
        around, pinned with rebar stakes. The frame is your form: it holds
        the stone in, gives you a screed reference, and keeps lawn equipment
        from shoving gravel onto the grass. <strong>4. Place stone in
        lifts.</strong> Dump 2–3 inch layers, rake level, lightly wet each
        lift, and run a plate compactor over it before the next layer goes
        down. <strong>5. Final grade.</strong> The finished pad should sit
        roughly level — a quarter-inch of fall per foot away from the shed
        keeps water moving off. Set the shed skids or blocks and re-check
        level before the walls go up.
      </p>

      <h2>Freeze-thaw note</h2>
      <p>
        In cold climates, water trapped under a pad freezes, expands, and
        heaves one corner of the shed — the classic spring &ldquo;why is my
        shed leaning&rdquo; discovery. The defenses stack: go 6–8 inches deep,
        keep the fabric layer (it stops capillary water from wicking up into
        the stone), and make sure the subgrade slopes so water leaves rather
        than sitting under the pad. If your site holds water after rain,
        extend the pad&apos;s gravel a foot past the edging as a drainage
        apron, or add a <a href="/guides/paver-base-sand-gravel-guide/">
        gravel base layer</a> the same way a paver patio uses one — different
        project, same layer logic.
      </p>

      <h2>Delivery and cost reality</h2>
      <p>
        At 1.4 tons per yard, most shed pads need a dump-truck delivery —
        the 4.36-ton load for a 10×12 shed at 6 inches is about what a
        single-axle dump carries, and the 7.99-ton load for a 12×20 pushes
        into two trips or one tri-axle. Bulk #57 typically runs $35–60 per
        ton plus a $50–150 delivery fee, so a standard 6-inch pad lands in
        the $150–400 range all-in. Suppliers often have a minimum (1–3
        yards); if your pad is small, splitting a load with a neighbor is
        the classic move. And confirm access: the truck needs to dump within
        wheelbarrow distance of the pad, or the savings evaporate into labor.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Pad exactly the shed size.</strong> Water drips off the roof
        edge and lands on bare soil, eroding the perimeter; the extra 12
        inches all around is a drip zone and working margin.{" "}
        <strong>Stone over grass, no fabric.</strong> The pad sinks into the
        lawn within a season. <strong>No edging.</strong> Gravel migrates —
        mowers fling it and foot traffic walks it outward.{" "}
        <strong>One dump, one pass.</strong> A full 6 inches compacted in a
        single lift bridges and leaves soft spots underneath.{" "}
        <strong>Pea gravel.</strong> Looks tidy on day one, shifts forever
        after. <strong>Pad below grade.</strong> If the finished pad sits
        lower than the surrounding lawn, it becomes a pond — build it a
        couple of inches proud.
      </p>

      <Faq items={faqs} heading="Shed Base FAQ" />
    </GuideArticle>
  );
}

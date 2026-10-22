import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Riprap Do I Need? (Residential Quantity Guide)",
  description:
    "Riprap quantity math for homeowner projects: tons-per-linear-foot tables on a 2:1 slope, R-4/R-6/R-8 size classes, filter fabric, and why you order by the ton.",
  keywords: [
    "how much riprap do i need",
    "riprap calculator tons",
    "how much rock for shoreline",
    "riprap size classes",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-riprap-do-i-need/" },
  openGraph: {
    title: "How Much Riprap Do I Need? | Cubic Yard Calculator",
    description:
      "Residential riprap sizing: tons-per-linear-foot tables, stone size classes, fabric requirements, and install notes for creek beds, outlets, and slopes.",
    url: "https://cubicyardcalculator.site/guides/how-much-riprap-do-i-need/",
  },
};

const faqs = [
  {
    q: "How much riprap do I need for a slope?",
    a: "On a typical 2:1 slope at 12 inches thick, plan on about 0.19 tons per linear foot per foot of bank height — so a 20-foot run of 2-foot bank needs about 7.6 tons (order 8–8.5). Scale linearly for taller banks or an 18-inch thickness, which multiplies everything by 1.5.",
  },
  {
    q: "What size riprap should I use for a residential project?",
    a: "R-4 stone (6 to 12 inches) handles most homeowner work — downspout outlets, pond edges, dry creek beds, and small slope toes. Step up to R-6 (9 to 18 inches) for steeper banks or channels with real flow. R-8 (12 to 24 inches) is beyond most DIY — the individual stones need machine placement.",
  },
  {
    q: "How thick should riprap be?",
    a: "At least twice the diameter of your largest stone — for R-4, that's a minimum of 12 inches. One stone deep looks done from above but leaves gaps water exploits, undermining the layer from below. Steeper or higher-energy water gets 18 inches.",
  },
  {
    q: "Do I need fabric under riprap?",
    a: "Yes — non-woven geotextile under every riprap installation, no exceptions. It keeps soil from washing out through the gaps between stones, which is how riprap failures actually start. Use non-woven (felted) geotextile, not woven landscape fabric, which clogs and tears under heavy stone.",
  },
  {
    q: "Can I put riprap on my shoreline myself?",
    a: "Almost certainly not without permits, and usually not without a contractor. Shoreline and lakefront armoring is regulated at the federal, state, and local level (dredge-and-fill, wetlands, shoreline-management rules), and the stone sizes, filter design, and equipment involved are commercial-scale. Everything in this guide is for dry-land homeowner projects only.",
  },
  {
    q: "How do I convert linear feet of riprap to tons?",
    a: "Multiply linear feet × bank height in feet × 0.19 for 12-inch thickness on a 2:1 slope (× 0.28 for 18-inch). The table below gives you the per-foot figures directly, and our yards-to-tons conversion guide covers the weight math behind them.",
  },
  {
    q: "What is the difference between riprap and landscape rock?",
    a: "Riprap is large, angular, interlocking stone (6 inches and up) sized to resist water — it's an engineering material. Landscape rock is smaller decorative stone for beds and mulch zones. If your project is about stopping erosion, you want riprap; if it's about looks, you want landscape rock.",
  },
  {
    q: "Can I buy riprap in bags?",
    a: "No — riprap is far too large and heavy for bags, and the individual stones are sold by the ton at quarries and landscape supply yards. Bagged rock tops out around 1–2 inch decorative stone. Delivery is by dump truck or dump trailer, same as bulk gravel.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Riprap Do I Need?"
      description="Residential riprap math: size classes, tons per linear foot on a 2:1 slope, filter fabric, and install notes for dry creek beds, outlets, pond edges, and small slopes."
      slug="how-much-riprap-do-i-need"
      calculatorHref="/calculators/landscape-rock-calculator/"
      calculatorLabel="Try the landscape rock calculator"
      updated="2026-10"
      toc={[
        { id: "the-short-answer", label: "The short answer" },
        { id: "scope-and-a-shoreline-warning", label: "Scope and a shoreline warning" },
        { id: "riprap-size-classes", label: "Riprap size classes" },
        { id: "the-math-why-tons-per-linear-foot", label: "The math: why tons per linear foot" },
        { id: "tons-per-linear-foot-2-1-slope", label: "Tons per linear foot (2:1 slope)" },
        { id: "worked-example-and-common-projects", label: "Worked example and common projects" },
        { id: "non-woven-geotextile-under-everything", label: "Non-woven geotextile under everything" },
        { id: "grading-and-install-notes", label: "Grading and install notes" },
        { id: "common-mistakes", label: "Common mistakes" },
      ]}
      references={[
        "Material densities: published bulk-material density tables cross-checked against supplier data (see /data-sources/).",
        "Site's published density variants (lib/calc.js)",
        "Riprap size classes (R-4, R-6, R-8 nominal gradations): quarry gradation listings and state DOT specification classes.",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        For homeowner-scale riprap — dry creek beds, downspout outlets, pond
        edges, and small slope toes — on a typical <strong>2:1 slope at 12
        inches thick</strong>, order <strong>about 0.19 tons per linear foot
        per foot of bank height</strong>. The signature example:{" "}
        <strong>20 linear feet of 2-foot bank</strong> = 20 × 2 × 0.19 ≈{" "}
        <strong>7.6 tons — order 8 to 8.5 tons</strong>. Riprap is sold by
        the ton, not the yard, because the stone has huge voids between
        pieces — your quarry&apos;s scale figure is always the number to
        trust.
      </p>

      <h2 id="scope-and-a-shoreline-warning">Scope and a shoreline warning</h2>
      <p>
        This guide covers <strong>dry-land homeowner projects only</strong>:
        dry creek beds, downspout outlet aprons, pond and pool edges, and
        the toes of small landscape slopes. If your project is a{" "}
        <strong>shoreline, lakefront, riverbank, or tidal edge</strong>, stop
        here: real shoreline armoring almost always requires{" "}
        <strong>permits</strong> (dredge-and-fill, wetlands, and
        shoreline-management rules apply at multiple levels of government)
        and a <strong>licensed contractor</strong> with engineered stone
        sizing, filter design, and heavy equipment. DIY shoreline work risks
        fines and a failed installation that takes the bank with it. Nothing
        below is sized for wave or current energy.
      </p>

      <h2 id="riprap-size-classes">Riprap size classes</h2>
      <p>
        Riprap is graded by weight class, but quarries sell it by approximate
        stone diameter. The three classes a homeowner will ever see:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Class</th><th>Stone size (inches)</th><th>Homeowner uses</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">R-4</td><td className="num">6 – 12</td><td>Downspout outlets, pond edges, dry creek bed banks, mild slope toes</td></tr>
          <tr><td className="num">R-6</td><td className="num">9 – 18</td><td>Steeper banks, swales with real flow, channel bends</td></tr>
          <tr><td className="num">R-8</td><td className="num">12 – 24</td><td>Heavy erosion zones — usually contractor/machine-placed, beyond most DIY</td></tr>
        </tbody>
      </table>
      <p>
        A quarry&apos;s &ldquo;R-4&rdquo; won&apos;t match another&apos;s
        exactly — these are nominal classes, not tolerances. Always ask the
        supplier for the actual gradation (the mix of sizes in the load) and
        confirm it&apos;s angular crushed stone, not rounded river rock:
        angular faces interlock and resist sliding; round stone rolls.
      </p>

      <h2 id="the-math-why-tons-per-linear-foot">The math: why tons per linear foot</h2>
      <p>
        Riprap layers sit on a slope, so you measure the <strong>slope
        surface</strong>, not the horizontal run. On the standard 2:1 slope
        (2 feet horizontal for every 1 foot of height), the slope length per
        1 foot of height is the hypotenuse: √(1² + 2²) = <strong>√5 ≈
        2.24 feet</strong>.
      </p>
      <p>
        Volume per linear foot per foot of bank height at 12-inch thickness:
        2.24 ft (slope length) × 1 ft (height) × 1 ft (thickness) ={" "}
        <strong>2.24 cubic feet</strong>. Rock weighs 4,500 pounds per cubic
        yard — that&apos;s 4,500 ÷ 27 ≈{" "}
        <strong>167 pounds per cubic foot</strong>. So 2.24 × 167 ≈{" "}
        <strong>374 pounds ≈ 0.19 tons per linear foot per foot of
        height</strong> at 12 inches thick.
      </p>
      <p>
        Two caveats before you use this: the number is{" "}
        <strong>approximate</strong> — riprap has enormous voids between
        stones, so a cubic-foot calc overstates the stone and understates the
        air. And <strong>your supplier&apos;s tonnage is the safer
        figure</strong>: quarries calibrate their loads by scale weight, and
        they&apos;ve seen what a given slope eats. Our{" "}
        <a href="/guides/cubic-yards-to-tons-conversion-guide/">cubic yards to tons conversion guide</a>{" "}
        covers the density math in full if you want the background.
      </p>

      <h2 id="tons-per-linear-foot-2-1-slope">Tons per linear foot (2:1 slope)</h2>
      <p>
        Read your bank height down the left, thickness across the top —
        multiply by your linear footage. The 18-inch column is the 12-inch
        column × 1.5, as it should be:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Bank height</th><th>12&Prime; thick — tons/ft</th><th>18&Prime; thick — tons/ft</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">1 ft</td><td className="num">0.19</td><td className="num">0.28</td></tr>
          <tr><td className="num">2 ft</td><td className="num">0.37</td><td className="num">0.56</td></tr>
          <tr><td className="num">3 ft</td><td className="num">0.56</td><td className="num">0.84</td></tr>
        </tbody>
      </table>

      <h2 id="worked-example-and-common-projects">Worked example and common projects</h2>
      <p>
        The worked example: <strong>20 linear feet of 2-foot bank at 12
        inches thick</strong> = 20 × 2 × 0.19 = <strong>7.6 tons</strong>.
        Order <strong>8 to 8.5 tons</strong> — the half-ton up covers
        breakage, irregular bank lines, and the stones that roll where you
        don&apos;t want them. Applying the same per-foot figures to typical
        homeowner projects:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project (12&Prime; thick)</th><th>Math</th><th>Calculated</th><th>Order</th></tr>
        </thead>
        <tbody>
          <tr><td>Downspout outlet apron, 6 × 4 ft at 8&Prime; deep*</td><td className="num">area × depth, −35% voids</td><td className="num">0.9 tons</td><td className="num">1 ton</td></tr>
          <tr><td>Pond edge, 25 lin ft, 1-ft bank</td><td className="num">25 × 1 × 0.19</td><td className="num">4.75 tons</td><td className="num">5.5 tons</td></tr>
          <tr><td>Dry creek bed bank, 30 lin ft, 2-ft bank</td><td className="num">30 × 2 × 0.19</td><td className="num">11.4 tons</td><td className="num">12.5 tons</td></tr>
          <tr><td>Slope toe, 40 lin ft, 3-ft bank</td><td className="num">40 × 3 × 0.19</td><td className="num">22.8 tons</td><td className="num">25 tons</td></tr>
        </tbody>
      </table>
      <p>
        *A flat downspout apron isn&apos;t a slope — use{" "}
        <strong>area × thickness</strong> instead: 6 × 4 × (8 ÷ 12) ÷ 27 =
        0.59 cubic yards of layer volume. Large angular stone sits with
        roughly 35% voids, so the solid stone you pay for is about 0.59 ×
        2.25 tons per yard (rock at 4,500 lb/yd&sup3;) × 0.65 ≈{" "}
        <strong>0.86 tons — order 1 ton</strong>. Size the apron to
        catch the discharge: 4–6 feet long and a foot wider than the
        downspout&apos;s spread on each side. For the full creek-bed layout
        this riprap pairs with, see our{" "}
        <a href="/guides/how-much-rock-for-a-dry-creek-bed/">dry creek bed rock guide</a>{" "}
        — and if you&apos;re armoring a drain outlet that ties into a buried
        line, our{" "}
        <a href="/guides/how-much-gravel-for-a-french-drain/">French drain gravel guide</a>{" "}
        covers the pipe and stone behind it.
      </p>

      <h2 id="non-woven-geotextile-under-everything">Non-woven geotextile under everything</h2>
      <p>
        Every riprap installation gets <strong>non-woven geotextile</strong>{" "}
        laid directly on the prepared soil before the first stone goes down.
        Riprap fails from the inside out: water flows through the big voids,
        picks up soil fines, and washes the bank out from under the stone —
        a failure mode called <strong>piping</strong>. The fabric is the
        filter that stops it. Use <strong>non-woven (felted)
        geotextile</strong>, not the woven stuff: non-woven passes water
        while holding soil, and it doesn&apos;t tear when heavy angular stone
        drops on it. Overlap seams by 12 inches, pin it, and run it under
        the full riprap footprint plus a foot beyond on every side. Skip
        this step and the installation can look perfect on day one and start
        settling by the second rainy season.
      </p>

      <h2 id="grading-and-install-notes">Grading and install notes</h2>
      <p>
        <strong>Grade to a 2:1 slope or flatter</strong> before any stone
        arrives — steeper than 2:1 and the stone won&apos;t stay put without
        engineering. <strong>Toe it in:</strong> dig the bottom of the slope
        down and bury the first row of stone below finished grade — an
        exposed toe is where scour starts, and buried toes don&apos;t slide.{" "}
        <strong>Key the top:</strong> finish the upper edge by burying the
        last course into the bank or a shallow trench so runoff can&apos;t
        get behind the layer.
      </p>
      <p>
        <strong>Place, don&apos;t dump.</strong> Set the largest stones at
        the toe and work upward — the toe carries the load and the big pieces
        there resist the most force. Dumping a load from the top of the bank
        segregates the sizes (big stones roll to the bottom, fines stay on
        top) and gives you exactly the wrong gradation. With R-4 you can
        hand-place; R-6 and up realistically want a skid steer or excavator
        with a thumb. Keep the thickness honest: probe the layer as you go
        — <strong>minimum twice the largest stone&apos;s diameter</strong>,
        so 12 inches for R-4 and 18 inches where the water has real energy.
      </p>
      <p>
        For a custom run, our{" "}
        <a href="/calculators/landscape-rock-calculator/">landscape rock calculator</a>{" "}
        handles the rectangular-area version of this math (aprons, pads,
        flat beds) — use the slope table above for anything on an incline.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        <strong>Rounded stone.</strong> River rock looks great and rolls
        downhill — riprap must be angular so the pieces interlock.{" "}
        <strong>No fabric.</strong> The #1 cause of slow failure: soil pipes
        out through the voids within a couple of seasons.{" "}
        <strong>One stone deep.</strong> A single-stone veneer leaves gaps
        water exploits — build to twice the largest stone&apos;s diameter.{" "}
        <strong>Dumping instead of placing.</strong> Segregates sizes and
        destroys the gradation the quarry sold you. <strong>Ordering by
        yards.</strong> Voids make yard math unreliable for riprap; order
        and pay by the ton, and round up half a ton on irregular banks.{" "}
        <strong>DIY-ing a shoreline.</strong> Permits, wave energy, and
        liability — real shoreline work is a contractor job.
      </p>

      <Faq items={faqs} heading="Riprap Quantity FAQ" />
    </GuideArticle>
  );
}

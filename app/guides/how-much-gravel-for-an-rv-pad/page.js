import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Gravel Do I Need for an RV Pad? (Tons Table)",
  description:
    "RV pad gravel chart: cubic yards and tons by rig class — travel trailer, 5th wheel, Class A — at 4, 6, and 8 inches deep, plus base vs top stone, fabric, and drainage tips.",
  keywords: [
    "how much gravel for an rv pad",
    "gravel rv parking pad depth",
    "how thick should gravel be for rv parking",
    "rv pad gravel calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-gravel-for-an-rv-pad/" },
  openGraph: {
    title: "How Much Gravel Do I Need for an RV Pad? (Tons Table) | Cubic Yard Calculator",
    description:
      "Tons and cubic yards by rig class and depth, the two-layer build, fabric, and drainage slope for a gravel RV pad that lasts.",
    url: "https://cubicyardcalculator.site/guides/how-much-gravel-for-an-rv-pad/",
  },
};

const faqs = [
  {
    q: "How thick should gravel be for RV parking?",
    a: "Six inches is the standard for a parked RV: deep enough to spread the weight and drain water. Four inches works as a refresh over an existing firm base, and 8 inches is the spec for a brand-new pad over soft or clay soil, built as a compacted base layer plus a compacting top layer.",
  },
  {
    q: "What type of gravel is best for an RV pad?",
    a: "Crusher run (¾-inch minus with fines, also sold as 21A or quarry process) for the top layer — its fines compact into a firm surface that parked tires won't sink into. Use large #3 stone (about 2 to 3 inches) for the base layer on soft ground. Never use round pea gravel; it migrates under tires.",
  },
  {
    q: "How many tons of gravel do I need for a 12×40 RV pad?",
    a: "A 12×40 ft Class A pad needs about 8.9 cubic yards at 6 inches deep, which is roughly 12.4 tons of gravel (a cubic yard of gravel weighs about 1.4 tons). Add 10% overage for compaction and grading, so plan on 13 to 14 tons delivered.",
  },
  {
    q: "Do I need landscape fabric under a gravel RV pad?",
    a: "Yes on soft, wet, or clay-heavy soil. Woven geotextile fabric separates the base stone from the mud so the stone doesn't sink out of sight. On firm, well-drained ground it is optional, but it is cheap insurance under the weight of an RV.",
  },
  {
    q: "Should a gravel RV pad slope for drainage?",
    a: "Yes — grade the pad at about a 2% slope (roughly ¼ inch per foot) away from where the rig sits, so rain runs off instead of pooling under the tires. Standing water softens the base and invites ruts.",
  },
  {
    q: "Can I park an RV on a gravel driveway instead of a pad?",
    a: "You can if the driveway was built to full depth (at least 6 inches of compacted crushed stone). A thin decorative layer of gravel over bare soil will rut under a 10,000-plus-lb rig in one wet season. If in doubt, build the pad to spec.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Gravel Do I Need for an RV Pad?"
      description="The tons-by-rig-class table at 4, 6, and 8 inches, the two-layer build that carries RV weight, fabric and drainage details, and the exact words to use at the quarry."
      slug="how-much-gravel-for-an-rv-pad"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
      updated="2026-10-13"
      toc={[
        { id: "the-short-answer", label: "The short answer" },
        { id: "tons-and-cubic-yards-by-rig-class", label: "Tons and cubic yards by rig class" },
        { id: "choose-the-right-depth-first", label: "Choose the right depth first" },
        { id: "two-layers-base-stone-vs-top-stone", label: "Two layers: base stone vs top stone" },
        { id: "landscape-fabric-on-soft-soil", label: "Landscape fabric on soft soil" },
        { id: "drainage-slope-the-invisible-half-of-the-pad", label: "Drainage slope: the invisible half of the pad" },
        { id: "what-it-costs-typical-2026-us", label: "What it costs (typical 2026 US)" },
        { id: "ordering-and-delivery-tips", label: "Ordering and delivery tips" },
        { id: "common-mistakes", label: "Common mistakes" },
      ]}
      references={[
        "Material densities: published bulk-material density tables cross-checked against supplier data (see /data-sources/).",
        "Aggregate gradations: ASTM C33 aggregate density ranges and standard stone gradations, including #57 stone.",
        "Pricing: published contractor cost guides and supplier listings, checked October 2026.",
        "All calculations use the site's published constants — see Data Sources (/data-sources/).",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        Gravel is ordered by the <strong>ton</strong>. Find your volume
        first: length × width × (depth in inches ÷ 12) ÷ 27 gives cubic
        yards, then multiply by <strong>1.4</strong> — a cubic yard of
        gravel weighs about 2,800 lbs, or 1.4 tons. A 12×40 ft Class A
        pad at the standard 6-inch depth: (12 × 40 × 0.5) / 27 ={" "}
        <strong>8.9 cubic yards</strong>, × 1.4 ={" "}
        <strong>12.4 tons</strong>. With 10% overage for compaction and
        grading, order <strong>13 to 14 tons</strong> and you will cover
        it in one delivery. Size the pad to the rig: about 12 ft wide by
        30, 35, or 40 ft long for travel trailers, 5th wheels, and Class
        A motorhomes respectively.
      </p>

      <h2 id="tons-and-cubic-yards-by-rig-class">Tons and cubic yards by rig class</h2>
      <p>
        Find your rig class below and read across to your target depth.
        Each cell shows cubic yards, then tons. Figures assume a flat
        rectangle — add 10% for compaction loss and grading, and more for
        soft soil that needs a thicker base.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Rig class (pad size)</th><th>4 inches</th><th>6 inches</th><th>8 inches</th></tr>
        </thead>
        <tbody>
          <tr><td>Travel trailer (12 × 30 ft)</td><td className="num">4.4 yd³ / 6.2 t</td><td className="num">6.7 yd³ / 9.3 t</td><td className="num">8.9 yd³ / 12.4 t</td></tr>
          <tr><td>5th wheel (12 × 35 ft)</td><td className="num">5.2 yd³ / 7.3 t</td><td className="num">7.8 yd³ / 10.9 t</td><td className="num">10.4 yd³ / 14.5 t</td></tr>
          <tr><td>Class A (12 × 40 ft)</td><td className="num">5.9 yd³ / 8.3 t</td><td className="num">8.9 yd³ / 12.4 t</td><td className="num">11.9 yd³ / 16.6 t</td></tr>
        </tbody>
      </table>
      <p>
        Delivery reality check: most dump trucks haul 15 to 20 tons per
        load, so every pad in this table arrives as a single delivery —
        even the Class A at 8 inches (16.6 tons) just barely. That makes
        per-ton delivered pricing the number to compare, and it makes
        ordering your 10% overage on the first truck the cheapest way to
        get it.
      </p>

      <h2 id="choose-the-right-depth-first">Choose the right depth first</h2>
      <p>
        <strong>4 inches</strong> works as a refresh layer over an
        existing firm base — or for occasional overnight parking on ground
        that is already solid. <strong>6 inches</strong> is the standard
        for a dedicated pad with a rig parked on it full-time: deep
        enough to spread concentrated tire loads and drain freely.{" "}
        <strong>8 inches</strong> is the spec for a brand-new pad over
        soft, clay-heavy, or wet soil — and at that depth, build it as
        two layers (below), not one thick pour. An RV concentrates
        10,000-plus lbs onto four to six small tire footprints, so depth
        is doing far more structural work here than it does on a
        walkway.
      </p>

      <h2 id="two-layers-base-stone-vs-top-stone">Two layers: base stone vs top stone</h2>
      <p>
        A pad that survives years of parked weight is two materials with
        two jobs, each compacted before the next goes down:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Layer</th><th>Stone</th><th>Depth</th><th>Job</th></tr>
        </thead>
        <tbody>
          <tr><td>Base</td><td>#3 stone (about 2–3 in, clean)</td><td className="num">4 in</td><td>Bridges soft soil, carries the load down and spreads it</td></tr>
          <tr><td>Top</td><td>Crusher run / 21A (¾ in minus)</td><td className="num">2–4 in</td><td>Binds into a firm crust parked tires won&apos;t rut</td></tr>
        </tbody>
      </table>
      <p>
        The base layer&apos;s big angular stone bridges soft spots and
        drains freely. The top layer&apos;s rock-dust fines are the whole
        trick — they compact into a dense, almost pavement-like surface
        that tires sit on instead of sinking into. If the full rundown
        of every stone size would help, see our{" "}
        <a href="/guides/gravel-size-chart/">gravel size chart</a> before
        you call the quarry. And the one stone to never use: round{" "}
        <strong>pea gravel</strong>, which rolls and migrates every time a
        tire turns on it.
      </p>

      <h2 id="landscape-fabric-on-soft-soil">Landscape fabric on soft soil</h2>
      <p>
        If your ground is clay, low-lying, or holds water after rain, lay{" "}
        <strong>woven geotextile fabric</strong> on the graded soil before
        the first stone goes down. It is a separator, not a weed barrier:
        it keeps the base layer from being pushed down into the mud and
        the mud from pumping up into the stone. Under RV weight, an
        unprotected base layer can lose 2 to 3 inches into soft earth in
        a single wet season. On firm, well-drained ground you can skip
        it — but the fabric costs far less than replacing a swallowed
        base.
      </p>

      <h2 id="drainage-slope-the-invisible-half-of-the-pad">Drainage slope: the invisible half of the pad</h2>
      <p>
        Grade the finished pad at about a <strong>2% slope</strong> —
        roughly <strong>¼ inch per foot</strong> — away from where the
        rig sits, so rain runs off instead of pooling under the tires.
        On a 12×40 pad, that is about 10 inches of fall end to end; most
        builders slope along the length and slightly across the width.
        Never let roof downspouts or uphill runoff discharge onto the pad
        — intercept it with a shallow swale first. A flat pad is a pond,
        and a pond under 12 tons of RV is a rut factory.
      </p>

      <h2 id="what-it-costs-typical-2026-us">What it costs (typical 2026 US)</h2>
      <p>
        Crusher-run gravel typically runs <strong>$30 to $55 per
        ton</strong> delivered (typical 2026 US). That 12×40 Class A pad
        at 6 inches needs 12.4 tons — at $40/ton, about{" "}
        <strong>$500 delivered</strong>. Add a plate-compactor rental
        ($50–$80/day) and a roll of geotextile fabric ($50–$120) if
        you&apos;re doing the full build. Budget one full day: excavate
        and grade in the morning, fabric and base layer by midday, top
        layer and compaction in the afternoon.
      </p>

      <h2 id="ordering-and-delivery-tips">Ordering and delivery tips</h2>
      <p>
        Buy <strong>loose by the ton from a quarry or landscape
        supplier</strong> — bagged gravel costs several times more and
        only makes sense for patching. Confirm <strong>delivered per-ton
        pricing</strong> up front, and ask whether the driver can{" "}
        <strong>tailgate-spread</strong> the load across the pad area —
        a slow-moving truck laying the stone saves hours of wheelbarrow
        work. Check access: a loaded tri-axle needs about 12 feet of
        width and 14 feet of overhead clearance, and soft lawns rut under
        it in spring — have the driver dump on the street or a firm pad
        if the yard will not take the weight. Also finalize where
        hookups, drain lines, and the entry door land <em>before</em>{" "}
        grading, so you are not trenching through a finished pad.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        <strong>Pea gravel anywhere tires go.</strong> It migrates from
        day one. <strong>One thin layer over clay.</strong> Four inches
        over bare clay is a stone-flavored mud patch under a 12,000-lb
        rig — build the full depth. <strong>No fabric on wet
        soil.</strong> The ground will eat your base layer.{" "}
        <strong>Flat grading.</strong> Standing water under tires means
        ruts; give it the 2% slope. <strong>Forgetting the
        hookups.</strong> Electric, water, and sewer runs go in before
        the stone, never after.
      </p>

      <Faq items={faqs} heading="Gravel RV Pad FAQ" />
    </GuideArticle>
  );
}

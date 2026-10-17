import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Many Cubic Yards in a Dump Truck? Capacity Chart by Truck Class",
  description:
    "How many cubic yards in a dump truck? Pickup 1–3, single-axle 5–7, tandem 10–14, tri-axle 15–18, semi end-dump 20–26 yd³ — plus the weight-limit math that decides what you actually get.",
  keywords: [
    "how many cubic yards in a dump truck",
    "dump truck capacity cubic yards",
    "how many yards of gravel fit in a dump truck",
    "tandem dump truck capacity yards",
    "how many cubic yards can a tri-axle dump truck hold",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-many-cubic-yards-in-a-dump-truck/" },
  openGraph: {
    title: "How Many Cubic Yards in a Dump Truck? | Cubic Yard Calculator",
    description:
      "Capacity chart by truck class, the payload-weight math that limits dense materials, and delivery cost ranges.",
    url: "https://cubicyardcalculator.site/guides/how-many-cubic-yards-in-a-dump-truck/",
  },
};

const faqs = [
  {
    q: "How many cubic yards does a standard dump truck hold?",
    a: "The most common residential delivery truck — a tandem-axle dump — holds 10–14 cubic yards of bed volume (typical range). But legal payload weight usually limits dense materials first: 14 yd³ of gravel at 1.40 t/yd³ weighs 19.6 tons, well over a tandem's typical ~15–16-ton payload, so you'd actually get about 11 yards.",
  },
  {
    q: "How many cubic yards fit in a pickup truck bed?",
    a: "About 1–3 cubic yards of bed volume, but weight-limited to far less with dense material: a half-ton pickup carries roughly 0.5 yd³ of gravel safely, a 3/4-ton about 1 yd³. See our pickup capacity guide for the per-rating math.",
  },
  {
    q: "How many tons can a tandem dump truck haul?",
    a: "Typically 13–16 tons of payload (typical US range), depending on the truck's tare weight, axle ratings, and state limits. With gravel at 1.40 tons/yd³, that payload buys roughly 9–11 cubic yards — volume on paper, weight in practice.",
  },
  {
    q: "Why did my dump truck deliver fewer yards than its rated capacity?",
    a: "Weight limits, not bed size. Legal payload is the constraint for anything denser than mulch or topsoil: the driver loads to the truck's legal weight and stops, which leaves a half-full bed of gravel or rock. This is normal and legal — the scale ticket, not the bed, is the honest measure.",
  },
  {
    q: "How much does a dump truck load of material cost delivered?",
    a: "Material plus delivery: a standard residential tandem load (10–13 tons) commonly lands between $350 and $1,000 delivered (typical US range, as of Oct 2026), with the delivery fee itself usually $75–$200 per load for a local run. Distance beyond the yard's free radius, minimums, and spreading services push it higher.",
  },
  {
    q: "How many wheelbarrow loads are in a dump truck of gravel?",
    a: "A wheelbarrow holds about 2–3 cubic feet (2/27 yd³), so a full 10-yard truck load is roughly 135–160 wheelbarrow trips — an honest day's work for two people. See our wheelbarrow loads guide for the full conversion.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Many Cubic Yards in a Dump Truck? Capacity Chart by Truck Class"
      description="The honest answer has two numbers: what the bed holds, and what the scales allow. Truck-class capacity chart, the payload math that limits dense loads, and typical delivery costs."
      slug="how-many-cubic-yards-in-a-dump-truck"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
      updated="2026-10"
      toc={[
        { id: "short-answer", label: "The short answer" },
        { id: "capacity-chart", label: "Capacity chart by truck class" },
        { id: "which-truck", label: "Which truck will the supplier send?" },
        { id: "weight-limits", label: "Why weight beats volume" },
        { id: "worked-example", label: "The key calculation: 14 yards of gravel" },
        { id: "delivery-cost", label: "Delivery costs" },
        { id: "common-mistakes", label: "Common mistakes" },
      ]}
      references={[
        "Published capacity ranges from equipment and aggregate-industry references (single-axle 5–8 yd³, tandem 10–16 yd³, tri-axle 14–20+ yd³, semi end-dump 20–30+ yd³ struck volume)",
        "US federal and state payload conventions: tandem legal payload typically 13–16 tons; GVWR and axle limits govern",
        "Site density constants: gravel/crushed stone 1.40 t/yd³ (2,800 lbs/yd³), mulch 0.40 t/yd³ (800 lbs/yd³)",
        "2026 bulk aggregate delivery pricing: local delivery fees $50–$200/load; delivered residential tandem loads $350–$1,000",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2 id="short-answer">The short answer</h2>
      <p>
        <strong>Bed volume:</strong> a pickup hauls 1–3 yd³, a single-axle
        dump 5–7, a tandem 10–14, a tri-axle 15–18, and a semi end-dump
        20–26 (typical US ranges). <strong>What you actually get:</strong>{" "}
        less, for anything heavy — because legal payload weight stops the
        loader long before the bed is full. A &ldquo;14-yard&rdquo; tandem
        hauling gravel delivers about <strong>11 yards</strong> in practice,
        which is the whole story of this guide. (If you&apos;re thinking
        about hauling it yourself, check{" "}
        <a href="/guides/how-many-cubic-yards-fit-in-a-pickup-truck/">how
        many cubic yards fit in a pickup truck</a> first — the math is
        unforgiving there too.)
      </p>

      <h2 id="capacity-chart">Capacity chart by truck class</h2>
      <p>
        The ranges below are <strong>struck bed volume</strong> — the bed
        filled level with the sidewalls — which is what manufacturers and
        rental counters quote. Heaped loads (piled above the rails) add
        volume, but heaped gravel on a public road is a spillage violation
        in most states, so plan on struck. Payload figures are typical US
        legal payloads after subtracting the truck&apos;s own (tare) weight.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Truck class</th><th>Bed volume (typical)</th><th>Typical payload</th><th>Typical use</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Pickup truck</td>
            <td className="num">1–3 yd³</td>
            <td className="num">0.5–1.5 tons</td>
            <td>Self-haul: bags, small mulch loads</td>
          </tr>
          <tr>
            <td>Single-axle dump</td>
            <td className="num">5–7 yd³</td>
            <td className="num">5–10 tons</td>
            <td>Residential delivery, tight driveways</td>
          </tr>
          <tr>
            <td>Tandem-axle dump</td>
            <td className="num">10–14 yd³</td>
            <td className="num">13–16 tons</td>
            <td>The standard aggregate delivery truck</td>
          </tr>
          <tr>
            <td>Tri-axle dump</td>
            <td className="num">15–18 yd³</td>
            <td className="num">18–25 tons</td>
            <td>Large residential / light commercial</td>
          </tr>
          <tr>
            <td>Semi end-dump</td>
            <td className="num">20–26 yd³</td>
            <td className="num">25+ tons</td>
            <td>Commercial, quarry-to-site hauling</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ranges vary by state, body size, and aluminum vs steel bodies
        (aluminum bodies are lighter, which buys extra payload). Published
        sources quote tandem bodies anywhere from 10 to 16 yards and
        tri-axles up to 20+ — the table uses the conservative middle of
        those ranges, which is what you should order against.
      </p>

      <h2 id="which-truck">Which truck will the supplier actually send?</h2>
      <p>
        For a homeowner order, you rarely get to choose the truck — the
        supplier matches the truck to your order size and your
        driveway&apos;s access. The patterns are consistent enough to plan
        around. <strong>Under ~2 yards:</strong> expect a single-axle or a
        flatbed with a partial load — and you&apos;ll pay the full delivery
        fee for a quarter load, which is why orders under 1–2 tons often
        lose to self-haul in a pickup or rented dump trailer.{" "}
        <strong>2–7 yards:</strong> a single-axle dump, the residential
        workhorse: maneuverable, driveway-friendly, and commonly the
        smallest truck a yard will dispatch. <strong>8+ yards:</strong> a
        tandem, which is the default aggregate delivery truck for a reason
        — it balances payload, cost per ton, and street legality.{" "}
        <strong>Tri-axles and semis</strong> show up for commercial jobs
        or large rural projects; a residential driveway rarely has the
        turning radius or the surface strength for them.
      </p>
      <p>
        Access decides more than you&apos;d think. A loaded tandem weighs
        35,000+ lbs — it will crack a thin or aging concrete driveway and
        rut a soft lawn after rain. If the truck can&apos;t reach your
        project, the driver dumps at the curb and you wheelbarrow the
        difference: at roughly <strong>14–18 wheelbarrow loads per cubic
        yard</strong>, a 10-yard curb dump is ~150 trips, so budget the
        help. Tell the yard about low wires, narrow gates, steep grades,
        and soft ground when you order — a failed delivery attempt still
        bills the trip. And ask whether they <strong>tailgate-spread</strong>:
        many yards will spread the load in a rough layer as the truck
        pulls forward (often +$50–$150), which is not fine grading but
        saves an enormous amount of shoveling on driveways and paths.
      </p>

      <h2 id="weight-limits">The key section: why weight beats volume</h2>
      <p>
        Dump truck &ldquo;capacity&rdquo; is sold as a volume, but the law
        regulates it as a <strong>weight</strong>. A loader operator watches
        the scale, not the bed rails: they fill until the truck reaches its
        legal payload, then stop. For light materials the bed fills first
        (volume-limited); for dense materials the scale wins (weight-limited).
        The cutoff is simple math:{" "}
        <strong>effective yards = payload (tons) ÷ density (t/yd³)</strong>.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material</th><th>Density (t/yd³)</th><th>Limits a tandem first?</th></tr>
        </thead>
        <tbody>
          <tr><td>Mulch</td><td className="num">0.40</td><td>Volume — bed fills at ~6 tons</td></tr>
          <tr><td>Topsoil</td><td className="num">1.20</td><td>Weight — ~12–13 yd³ max</td></tr>
          <tr><td>Gravel / crushed stone</td><td className="num">1.40</td><td>Weight — ~11 yd³ max</td></tr>
          <tr><td>Wet sand</td><td className="num">1.55</td><td>Weight — ~10 yd³ max</td></tr>
          <tr><td>Hot-mix asphalt</td><td className="num">1.96</td><td>Weight — ~8 yd³ max</td></tr>
          <tr><td>Concrete</td><td className="num">2.03</td><td>Weight — ~8 yd³ max</td></tr>
        </tbody>
      </table>
      <p>
        Notice the pattern: <strong>only mulch and dry organics ever fill
        the bed</strong>. Everything mineral is weight-limited, and the
        denser the material, the emptier the bed looks at delivery. That
        half-empty-looking truck is not short-changing you — the scale
        ticket is the receipt, and legal payload is the quantity.
      </p>

      <h2 id="worked-example">The key calculation: 14 yards of gravel in a tandem</h2>
      <p>
        Run the numbers for the textbook case — a nominal &ldquo;14-yard&rdquo;
        tandem loaded with gravel at this site&apos;s crushed-stone density
        of <strong>1.40 t/yd³</strong> (2,800 lbs/yd³):
      </p>
      <p>
        <strong>14 yd³ × 1.40 t/yd³ = 19.6 tons.</strong> A typical tandem
        carries <strong>~15–16 tons</strong> of legal payload. 19.6 &gt;
        16 — the load is illegal by nearly 4 tons before the bed is full.
        The loader therefore stops at the scale limit:{" "}
        <strong>16 ÷ 1.40 = 11.4 yd³</strong>, so you effectively receive
        about <strong>11 cubic yards</strong> — a bed that looks roughly
        80% full.
      </p>
      <p>
        Contrast with mulch at <strong>0.40 t/yd³</strong> (800 lbs/yd³):{" "}
        <strong>14 yd³ × 0.40 = 5.6 tons</strong> — barely a third of the
        truck&apos;s payload. The bed fills completely with payload to
        spare, so mulch delivery is <strong>volume-limited</strong>: you
        get all 14 yards, and the truck leaves light. This is why mulch
        suppliers price big loads casually and gravel suppliers talk in
        tons — and why a &ldquo;10-yard minimum&rdquo; means very different
        things for the two materials. Size your order with our{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a>{" "}
        or <a href="/calculators/mulch-calculator/">mulch calculator</a>,
        and if you&apos;re converting between the two units, the{" "}
        <a href="/calculators/tons-to-cubic-yards-calculator/">tons to
        cubic yards calculator</a> uses the same densities as this page.
      </p>

      <h2 id="delivery-cost">Delivery costs: what a load runs</h2>
      <p>
        Prices are typical US ranges, as of Oct 2026. Delivery is priced{" "}
        <strong>per load, not per yard</strong> — a half load costs the same
        truck time as a full one, so small orders pay a premium per yard.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Service</th><th>Typical range (Oct 2026)</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Local delivery fee (single-axle / small load)</td>
            <td className="num">$75–$150/load</td>
            <td>Often includes a free-radius (5–20 mi)</td>
          </tr>
          <tr>
            <td>Local delivery fee (tandem)</td>
            <td className="num">$75–$200/load</td>
            <td>Regional; mileage beyond radius ~$3–$10/mi</td>
          </tr>
          <tr>
            <td>Material + delivery, tandem gravel load</td>
            <td className="num">$350–$700/load</td>
            <td>~10–13 tons of common gravel</td>
          </tr>
          <tr>
            <td>Material + delivery, tandem decorative rock</td>
            <td className="num">$500–$1,000/load</td>
            <td>River rock runs $50–$100/ton alone</td>
          </tr>
          <tr>
            <td>Spreading service</td>
            <td className="num">+$50–$150/load</td>
            <td>Tailgate spreading; not fine grading</td>
          </tr>
        </tbody>
      </table>
      <p>
        The cost-per-yard math is where the wheelbarrow guide earns its
        keep: a 10-yard tandem of gravel at $600 delivered is $60/yard;
        hauling the same material yourself in a pickup at 1 yard a trip is
        ten trips of fuel, time, and loader fees. Suppliers also enforce
        minimums (often 2–10 tons) — below the minimum, self-haul in a
        pickup or trailer wins. To feel the scale contrast,{" "}
        <a href="/guides/how-many-wheelbarrow-loads-in-a-cubic-yard/">one
        cubic yard is about 14–18 wheelbarrow loads</a>; a tandem delivery
        replaces roughly 150 of them.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        <strong>Ordering the bed&apos;s rated yards of dense material.</strong>{" "}
        You&apos;ll get the payload-limited amount — about 11 yards from a
        &ldquo;14-yard&rdquo; tandem of gravel — and the shortfall is legal,
        not a rip-off. <strong>Assuming heaped = delivered.</strong> Piled
        above the rails adds volume the scale won&apos;t allow anyway.{" "}
        <strong>Forgetting the driveway.</strong> A loaded tandem weighs
        35,000+ lbs; it will crack thin concrete and rut soft lawns — have
        the driver dump at the curb or on plywood if the driveway can&apos;t
        take it. <strong>Paying a full delivery fee for a quarter
        load.</strong> Delivery is per trip; combine orders with a neighbor
        or round up to the truck&apos;s payload-limited sweet spot.{" "}
        <strong>Ignoring moisture.</strong> A yard of sand that rained on
        weighs up to 15% more — wet loads hit the weight limit with even
        fewer yards.
      </p>

      <Faq items={faqs} heading="How Many Cubic Yards in a Dump Truck? FAQ" />
    </GuideArticle>
  );
}

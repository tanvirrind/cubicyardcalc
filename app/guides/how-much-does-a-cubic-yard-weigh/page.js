import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Does a Cubic Yard Weigh? (Complete Material Weight Chart)",
  description:
    "A cubic yard of gravel weighs 2,800 lbs; mulch only 800. Full weight chart for concrete, gravel, sand, topsoil, dirt, rock and mulch — plus hauling limits and supplier billing.",
  keywords: [
    "how much does a cubic yard weigh",
    "cubic yard weight chart",
    "how much does a cubic yard of gravel weigh",
    "how much does a cubic yard of mulch weigh",
    "weight of a cubic yard of concrete",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-does-a-cubic-yard-weigh/" },
  openGraph: {
    title: "How Much Does a Cubic Yard Weigh? (Complete Material Weight Chart) | Cubic Yard Calculator",
    description:
      "The full weight chart: concrete, gravel, sand, topsoil, dirt, rock, and mulch in lbs and tons per cubic yard — plus hauling limits and billing.",
    url: "https://cubicyardcalculator.site/guides/how-much-does-a-cubic-yard-weigh/",
  },
};

const faqs = [
  {
    q: "How much does a cubic yard of gravel weigh?",
    a: "2,800 lbs, or 1.4 tons. Gravel is one of the denser common materials — a single yard exceeds the payload of most half-ton pickups, so plan on delivery or multiple trips.",
  },
  {
    q: "How much does a cubic yard of topsoil weigh?",
    a: "2,400 lbs, or 1.2 tons. Garden soil is the same weight. Moisture moves the number: topsoil after heavy rain can weigh 5–15% more than the dry figure.",
  },
  {
    q: "How much does a cubic yard of mulch weigh?",
    a: "About 800 lbs, or 0.4 tons — one of the lightest bulk materials, which is why yards of mulch are the easiest to haul yourself. Rain-soaked mulch can weigh roughly 50% more, so let a soaked pile dry before shoveling it into a truck.",
  },
  {
    q: "How many cubic yards fit in a pickup truck bed?",
    a: "A full-size pickup bed holds about 2 to 3 cubic yards by volume, but weight runs out first: most half-ton trucks can only carry about half a yard of gravel or topsoil legally and safely. Mulch is the exception — a full bed of mulch weighs roughly 1,600 lbs.",
  },
  {
    q: "Is a yard of concrete heavier than a yard of mulch?",
    a: "More than five times heavier. A cubic yard of concrete weighs 4,050 lbs (2.03 tons); a cubic yard of mulch weighs about 800 lbs (0.4 tons). Never compare materials by volume alone when planning hauling or delivery.",
  },
  {
    q: "How do I convert cubic yards to tons?",
    a: "Multiply yards by the material's tons-per-yard figure: gravel × 1.4, sand × 1.35, topsoil × 1.2, fill dirt × 1.1, mulch × 0.4, concrete × 2.025, rock × 2.25. Or run it through the tons converter — it uses the same densities as this chart.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Does a Cubic Yard Weigh?"
      description="The full material weight chart — concrete, gravel, sand, topsoil, fill dirt, rock, and mulch in pounds and tons — plus dry vs wet weight, hauling limits, and how suppliers bill."
      slug="how-much-does-a-cubic-yard-weigh"
      calculatorHref="/calculators/tons-to-cubic-yards-calculator/"
      calculatorLabel="Try the tons converter"
      updated="2026-10-17"
      toc={[
        { id: "how-much-does-a-yard-of-concrete-weigh", label: "How much does a yard of concrete weigh?" },
        { id: "the-short-answer", label: "The short answer" },
        { id: "dry-weight-vs-wet-weight", label: "Dry weight vs wet weight" },
        { id: "can-i-haul-it-myself", label: "Can I haul it myself?" },
        { id: "worked-example-ordering-3-yards-of-gravel", label: "Worked example: ordering 3 yards of gravel" },
        { id: "how-suppliers-bill-by-the-ton-vs-by-the-yard", label: "How suppliers bill: by the ton vs by the yard" },
        { id: "common-mistakes", label: "Common mistakes" },
      ]}
      references={[
        "Material densities: published bulk-material density tables cross-checked against supplier data (see /data-sources/).",
        "All calculations use the site's published constants — see Data Sources (/data-sources/).",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2 id="how-much-does-a-yard-of-concrete-weigh">How much does a yard of concrete weigh?</h2>
      <p>
        A cubic yard of concrete weighs about{" "}
        <strong>4,050 lbs — just over 2 tons</strong> (2.03 tons, to be
        exact). That makes concrete the second-heaviest common material on
        this chart, behind only landscape rock.
      </p>
      <p>
        <strong>Wet vs cured:</strong> freshly mixed concrete and cured
        concrete weigh essentially the same per yard. Wet concrete in the
        truck runs about 4,050 lbs per cubic yard; once it cures it has
        lost a little water through evaporation, but for delivery, forming,
        and support planning the number that matters is the same. Plan on
        4,050 lbs either way.
      </p>
      <p>
        Ordering bagged concrete? See{" "}
        <a href="/guides/how-many-bags-of-concrete-per-cubic-yard/">
          how many bags of concrete are in a cubic yard
        </a>{" "}
        for every bag size (forty-five 80-lb bags per yard). And if you are
        moving it by hand, check{" "}
        <a href="/guides/how-many-wheelbarrow-loads-in-a-cubic-yard/">
          how many wheelbarrow loads fit in a cubic yard
        </a>{" "}
        before you schedule the pour — weight per load adds up fast.
      </p>

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        A cubic yard can weigh anywhere from <strong>800 lbs to 4,500 lbs</strong>{" "}
        — it depends entirely on the material. A yard of mulch is one of the
        lightest things you can order; a yard of rock is one of the heaviest.
        Here is the whole chart at a glance:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material</th><th>Lbs per cubic yard</th><th>Tons per cubic yard</th></tr>
        </thead>
        <tbody>
          <tr><td>Mulch</td><td className="num">800</td><td className="num">0.4</td></tr>
          <tr><td>Fill dirt</td><td className="num">2,200</td><td className="num">1.1</td></tr>
          <tr><td>Topsoil</td><td className="num">2,400</td><td className="num">1.2</td></tr>
          <tr><td>Sand</td><td className="num">2,700</td><td className="num">1.35</td></tr>
          <tr><td>Gravel</td><td className="num">2,800</td><td className="num">1.4</td></tr>
          <tr><td>Concrete</td><td className="num">4,050</td><td className="num">2.03</td></tr>
          <tr><td>Rock</td><td className="num">4,500</td><td className="num">2.25</td></tr>
        </tbody>
      </table>
      <p>
        These are typical bulk densities for loose, dry material. Compacted
        material can weigh a little more per yard, and wet material weighs
        more still — covered below. Ton figures are pounds divided by 2,000,
        so the chart and the{" "}
        <a href="/calculators/tons-to-cubic-yards-calculator/">
          tons converter
        </a>{" "}
        can never disagree.
      </p>

      <h2 id="dry-weight-vs-wet-weight">Dry weight vs wet weight</h2>
      <p>
        The chart numbers assume reasonably dry material. Real-world material
        is rarely bone dry — rain and groundwater add weight you did not
        order, and that weight still rides on your truck and your axles.
      </p>
      <p>
        For dense materials like gravel, sand, and topsoil, expect{" "}
        <strong>wet material to weigh roughly 5–15% more</strong> than the dry
        figure. That puts a rain-soaked yard of gravel at about 3,000–3,200
        lbs instead of 2,800. Mulch swings harder: it acts like a sponge, and{" "}
        <strong>rain-soaked mulch can weigh roughly 50% more</strong> than dry
        mulch — a yard that left the supplier at 800 lbs can arrive at your
        driveway closer to 1,200. If a mulch pile has been sitting in the
        rain, give it a day or two to drain before you haul it yourself.
      </p>
      <p>
        Practical takeaway: when you are close to a weight limit — hauling it
        yourself, or paying by the ton — use the wet figure as your planning
        number. A surprise extra 10% is the difference between a legal load
        and an overloaded one.
      </p>

      <h2 id="can-i-haul-it-myself">Can I haul it myself?</h2>
      <p>
        This is the question that makes the weight chart matter. Truck beds
        are deceptively large by volume, but weight limits are small. A
        full-size pickup bed holds about 2 to 3 cubic yards by volume — yet a{" "}
        <strong>half-ton pickup typically has a payload of only 1,500–2,000
        lbs</strong>, which is less than one yard of gravel (2,800 lbs), sand
        (2,700 lbs), or topsoil (2,400 lbs). Fill the bed with gravel and you
        are roughly a ton over capacity.
      </p>
      <p>
        A <strong>¾-ton truck (payload around 3,000–4,000 lbs)</strong> can
        carry a yard of gravel or topsoil comfortably, and possibly a second
        yard if you stay under the rating. Mulch is the DIY-friendly material:
        a full 2-yard bed of mulch weighs roughly 1,600 lbs, well within a
        half-ton payload. Rock is the opposite extreme — a single yard at
        4,500 lbs exceeds most ¾-ton payloads, so plan delivery.
      </p>
      <p>
        For anything beyond a yard of dense material, rent a{" "}
        <strong>dump trailer</strong> (typical ratings run 5,000–14,000 lbs
        gross, depending on the trailer) or pay for delivery. And the hard
        rule: never exceed the truck&apos;s GVWR — the number on the
        door-jamb sticker. Overloading is hard on suspension and brakes, and
        in many states it is a ticketable offense. Check the sticker, do the
        multiplication with this chart, and let the arithmetic decide.
      </p>

      <h2 id="worked-example-ordering-3-yards-of-gravel">Worked example: ordering 3 yards of gravel</h2>
      <p>
        A small driveway apron calls for 3 cubic yards of gravel. The chart
        says gravel is 1.4 tons per yard, so 3 × 1.4 ={" "}
        <strong>4.2 tons, or 8,400 lbs</strong>. That is more than double a
        half-ton pickup&apos;s payload and over the limit of many ¾-ton
        trucks. Two trips in a ¾-ton truck gets it done; one trip in a
        half-ton does not. Or skip the arithmetic entirely: supplier delivery
        for 3 yards is usually the cheapest option once you price in fuel and
        your time. Plug the numbers into the{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a> for
        the volume, then convert with the{" "}
        <a href="/calculators/tons-to-cubic-yards-calculator/">
          tons converter
        </a>{" "}
        to get the delivery weight.
      </p>

      <h2 id="how-suppliers-bill-by-the-ton-vs-by-the-yard">How suppliers bill: by the ton vs by the yard</h2>
      <p>
        Landscaping suppliers typically sell mulch, topsoil, and decorative
        stone <strong>by the cubic yard</strong> — volume is what their loader
        bucket measures. Quarries and aggregate yards often sell gravel, sand,
        and road base <strong>by the ton</strong>, because their scales are
        more accurate than their buckets and tonnage is what trucks are
        rated for.
      </p>
      <p>
        That split is why this chart exists. If the quarry quotes $40/ton for
        gravel and you need 3 yards: 3 × 1.4 = 4.2 tons → about $168 before
        delivery. If a nursery quotes $35/yard for topsoil and the quarry
        quotes $38/ton: topsoil is 1.2 tons per yard, so the quarry&apos;s
        price is really $45.60 per yard — the nursery wins. Convert everything
        to the same unit before comparing quotes, and confirm whether the
        price is for dry or as-loaded material, since water weight bills
        against you on a ton ticket.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        <strong>Assuming any yard fits any truck.</strong> Volume fits;
        weight does not. A pickup bed that holds 2 yards of mulch will be
        dangerously overloaded with 2 yards of gravel.{" "}
        <strong>Forgetting water weight.</strong> Rain-soaked material can add
        5–15% (or ~50% for mulch) — enough to blow past a payload limit you
        thought you were under. <strong>Confusing struck vs heaped
        buckets.</strong> Loader buckets are often measured heaped, which can
        be 20–30% more than a struck (level) yard — the &ldquo;one yard&rdquo;
        you paid for might be 1.25. <strong>Mixing up units on
        quotes.</strong> $40/ton and $40/yard are different numbers for every
        material except one; convert before comparing.
      </p>

      <Faq items={faqs} heading="Material weight FAQ" />
    </GuideArticle>
  );
}

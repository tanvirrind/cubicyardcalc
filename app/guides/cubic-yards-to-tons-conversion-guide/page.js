import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Cubic Yards to Tons: Conversion Guide by Material",
  description:
    "Convert cubic yards to tons (and tons to yards) with the right density for each material. Density table, both formulas, and worked examples.",
  keywords: [
    "cubic yards to tons",
    "tons to cubic yards calculator",
    "how many cubic yards in a ton",
    "bulk material density chart",
    "how many tons in a cubic yard",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/cubic-yards-to-tons-conversion-guide/" },
  openGraph: {
    title: "Cubic Yards to Tons: Conversion Guide by Material | Cubic Yard Calculator",
    description:
      "Density tables, both formulas, and how suppliers actually bill bulk materials. Free two-way converter.",
    url: "https://cubicyardcalculator.site/guides/cubic-yards-to-tons-conversion-guide/",
  },
};

const faqs = [
  {
    q: "How do you convert cubic yards to tons?",
    a: "Multiply cubic yards by the material's tons-per-yard density: tons = yards × density. For gravel at 1.4 tons/yard, 5 yards = 7 tons.",
  },
  {
    q: "How do you convert tons to cubic yards?",
    a: "Divide tons by the tons-per-yard density: yards = tons ÷ density. For gravel, 5 tons = 5 ÷ 1.4 = 3.57 yards.",
  },
  {
    q: "Why does a ton of mulch cover so much more than a ton of gravel?",
    a: "Density. Mulch weighs about 0.4 tons per yard, gravel about 1.4 — so a ton of mulch is 2.5 cubic yards while a ton of gravel is 0.71 yards. Same weight, very different volume.",
  },
  {
    q: "Is a short ton 2,000 lbs?",
    a: "Yes. Bulk material math in the US uses the short ton of 2,000 lbs.",
  },
  {
    q: "Does wet material change the conversion?",
    a: "Yes. Water adds weight without adding much volume, so wet sand, soil, or mulch gives fewer cubic yards per ton than dry material. Assume the heavy end after rain.",
  },
];

const densityTable = [
  { material: "Concrete", lbs: "4,050", tonsPerYard: "2.03", yardsPerTon: "0.49" },
  { material: "Gravel", lbs: "2,800", tonsPerYard: "1.40", yardsPerTon: "0.71" },
  { material: "Fill dirt", lbs: "2,200", tonsPerYard: "1.10", yardsPerTon: "0.91" },
  { material: "Topsoil", lbs: "2,400", tonsPerYard: "1.20", yardsPerTon: "0.83" },
  { material: "Mulch", lbs: "800", tonsPerYard: "0.40", yardsPerTon: "2.50" },
  { material: "Sand", lbs: "2,700", tonsPerYard: "1.35", yardsPerTon: "0.74" },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Cubic Yards to Tons: Conversion Guide by Material"
      description="A ton is weight, a yard is volume — the material decides the bridge between them. Here's the density table, both formulas, and how suppliers actually bill."
      slug="cubic-yards-to-tons-conversion-guide"
      calculatorHref="/calculators/tons-to-cubic-yards-calculator/"
      calculatorLabel="Try the tons converter"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        One ton of gravel is about <strong>0.71 cubic yards</strong>. One ton
        of mulch is about <strong>2.50 cubic yards</strong>. There is no
        universal conversion — density decides everything. The formulas:{" "}
        <strong>cubic yards = tons ÷ tons-per-yard</strong>, and{" "}
        <strong>tons = cubic yards × tons-per-yard</strong>. Keep the density
        table below bookmarked.
      </p>

      <h2>Why tons and yards are different things</h2>
      <p>
        A ton measures weight; a cubic yard measures volume. A yard of mulch
        is light and fluffy, a yard of concrete is a two-ton block — the
        &ldquo;yard&rdquo; is the same size, but the weight is wildly
        different. That&apos;s why a material selector is required for a
        useful conversion, and why guessing with one density for everything
        is the #1 mistake: a ton of mulch is 2.5 yards while a ton of rock
        is under half a yard.
      </p>

      <h2>The density table</h2>
      <p>
        Typical dry bulk densities — the same numbers that power the
        converter on this site. Actual material varies with moisture,
        compaction, and rock type, so use supplier figures for final orders.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material</th><th>Lbs per cubic yard</th><th>Tons per yard</th><th>Yards per ton</th></tr>
        </thead>
        <tbody>
          {densityTable.map((r) => (
            <tr key={r.material}>
              <td>{r.material}</td>
              <td className="num">{r.lbs}</td>
              <td className="num">{r.tonsPerYard}</td>
              <td className="num">{r.yardsPerTon}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Both formulas, with examples</h2>
      <p>
        <strong>Tons → yards:</strong> yards = tons ÷ density. Three tons of
        gravel at 1.4 tons/yard: 3 ÷ 1.4 = <strong>2.14 cubic yards</strong>.{" "}
        <strong>Yards → tons:</strong> tons = yards × density. Five cubic
        yards of sand at 1.3 tons/yard: 5 × 1.3 = <strong>6.5 tons</strong>.
        Equivalent form with pounds: yards = tons × 2,000 ÷ lbs-per-yard.
      </p>
      <p>
        More quick hits: 2 tons of sand → 1.54 yards. 5 tons of gravel → 3.57
        yards. 1 ton of topsoil → 0.91 yards. 3 tons of mulch → 6.0 yards. 10
        tons of fill dirt → 8.0 yards. Notice how light mulch gives far more
        volume per ton than heavy rock — this is why suppliers price gravel
        by the ton but quote mulch by the yard.
      </p>

      <h2>How suppliers actually bill</h2>
      <p>
        Stone yards usually quote gravel, rock, and sand <strong>by the
        ton</strong> because truck scales make weight easy to verify.
        Landscape suppliers usually quote mulch and soil <strong>by the cubic
        yard</strong> because these products are loaded by bucket volume.
        Concrete is ordered by cubic yard because the form volume determines
        the order. When a quote arrives in the unit you don&apos;t plan in,
        convert first — then compare.
      </p>

      <h2>Truck limits: weight vs volume</h2>
      <p>
        A truck rated for 10 tons carries about 7 yards of gravel but 20
        yards of mulch — volume and weight limits hit at different points.
        Gravel weight often hits the legal limit before the bed is full;
        mulch fills the bed before weight becomes an issue. Before hauling
        yourself, check your payload rating against the material weight:
        a &ldquo;small&rdquo; 3-yard gravel order is 4.2 tons.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Using one density for everything.</strong> The material
        setting is the whole calculation.{" "}
        <strong>Forgetting moisture.</strong> Wet sand and soil weigh
        noticeably more, which shrinks the volume you get per ton.{" "}
        <strong>Ignoring truck weight limits.</strong> Volume fits, weight
        doesn&apos;t — check both.{" "}
        <strong>Mixing short tons and metric tons.</strong> Bulk work in the
        US uses 2,000-lb short tons; metric tonnes are 2,205 lbs.
      </p>

      <Faq items={faqs} heading="Conversion FAQ" />
    </GuideArticle>
  );
}

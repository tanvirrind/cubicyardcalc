import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Many Wheelbarrow Loads in a Cubic Yard?",
  description:
    "A 6 cu ft wheelbarrow takes 4.5 struck loads per cubic yard. Loads-per-yard table by barrow size, struck vs heaped capacity, and the weight-per-load safety numbers.",
  keywords: [
    "how many wheelbarrow loads in a cubic yard",
    "wheelbarrow cubic feet",
    "how many wheelbarrows in a yard of concrete",
    "how many wheelbarrow loads in a yard of mulch",
    "wheelbarrow capacity cubic feet",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-many-wheelbarrow-loads-in-a-cubic-yard/" },
  openGraph: {
    title: "How Many Wheelbarrow Loads in a Cubic Yard? | Cubic Yard Calculator",
    description:
      "Loads per cubic yard by wheelbarrow size, struck vs heaped capacity explained, and weight-per-load safety numbers for gravel, mulch, and topsoil.",
    url: "https://cubicyardcalculator.site/guides/how-many-wheelbarrow-loads-in-a-cubic-yard/",
  },
};

const faqs = [
  {
    q: "How many cubic feet in a wheelbarrow?",
    a: "Common sizes are 3, 4, 6, 8, and 10 cubic feet struck capacity — the 6 cu ft contractor wheelbarrow is the standard. A cubic yard is 27 cu ft, so a 6 cu ft barrow holds 4.5 struck loads per yard.",
  },
  {
    q: "How many wheelbarrows in a yard of concrete?",
    a: "The same as any other material: 27 divided by your wheelbarrow's struck capacity in cubic feet. A 6 cu ft barrow needs 4.5 loads per yard of concrete. The material doesn't change the trip count — only the weight, and concrete is heavy enough that you'll carry partial loads.",
  },
  {
    q: "Is a 6 cubic foot wheelbarrow big?",
    a: "It's the standard contractor size and a good all-rounder: big enough for mulch and yard work, small enough to maneuver through a gate. For dense material like gravel or concrete, it's too big to fill to the brim safely — you'll run partial loads.",
  },
  {
    q: "How heavy is a wheelbarrow full of gravel?",
    a: "A struck 6 cu ft load of gravel weighs about 620 lbs — far beyond safe lifting. Work with quarter-to-half loads of dense material (150–300 lbs per load) or switch to a two-wheel contractor barrow and shorter hauls.",
  },
  {
    q: "How many wheelbarrow loads in a yard of mulch?",
    a: "Same math: 4.5 struck loads with a 6 cu ft wheelbarrow, or 9 loads with a small 3 cu ft garden barrow. Mulch is light enough to heap the barrow, so in practice you'll do fewer trips than the struck figure suggests.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Many Wheelbarrow Loads in a Cubic Yard?"
      description="The loads-per-yard table by wheelbarrow size, struck vs heaped capacity, the weight-per-load safety numbers nobody tells you, and how to plan the trip count for your project."
      slug="how-many-wheelbarrow-loads-in-a-cubic-yard"
      calculatorHref="/calculators/cubic-yard-calculator/"
      calculatorLabel="Try the cubic yard calculator"
      updated="2026-10-12"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        A cubic yard is <strong>27 cubic feet</strong> — divide 27 by your
        wheelbarrow&apos;s struck capacity in cubic feet. The standard 6 cu ft
        contractor wheelbarrow needs <strong>4.5 loads per cubic yard</strong>.
        That is struck (level) loads; heaping changes the practical count, and
        the material&apos;s weight changes what you can safely lift — both
        covered below.
      </p>

      <h2>Loads per cubic yard by wheelbarrow size</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Wheelbarrow size (struck)</th><th>Loads per cubic yard</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">3 cu ft</td><td className="num">9</td></tr>
          <tr><td className="num">4 cu ft</td><td className="num">6.75</td></tr>
          <tr><td className="num">6 cu ft</td><td className="num">4.5</td></tr>
          <tr><td className="num">8 cu ft</td><td className="num">3.4</td></tr>
          <tr><td className="num">10 cu ft</td><td className="num">2.7</td></tr>
        </tbody>
      </table>
      <p>
        Check your wheelbarrow&apos;s size on the manufacturer&apos;s stamp —
        most are marked in cubic feet or liters (6 cu ft ≈ 170 liters). If
        yours is unmarked, a mid-size garden barrow is usually 4–5 cu ft and a
        contractor steel barrow is usually 6. First figure your yardage with
        the <a href="/calculators/cubic-yard-calculator/">cubic yard
        calculator</a>, then multiply by the loads-per-yard figure for your
        barrow. Two yards of mulch with a 6 cu ft barrow: 2 × 4.5 ={" "}
        <strong>9 trips</strong>.
      </p>

      <h2>Struck vs heaped: the capacity that actually matters</h2>
      <p>
        Wheelbarrow ratings are <strong>struck capacity</strong> — filled level
        with the rim. A <strong>heaped load</strong>, mounded above the rim,
        holds roughly <strong>30–50% more</strong>. That sounds like free
        productivity, and for light material it is: you can heap a barrow full
        of mulch and walk it across the yard without trouble.
      </p>
      <p>
        For dense material, the heaped figure is a trap. The 6 cu ft barrow
        does not get stronger when you heap it — the load does. A heaped load
        of wet gravel can push past 800 lbs, which you cannot lift to
        tipping height and cannot safely steer down a slope. With gravel,
        sand, or concrete, plan on <strong>struck or partial loads</strong>
        and use the struck column in the table. The weight-per-load numbers in
        the next section show exactly why.
      </p>

      <h2>Weight per load: the safety numbers</h2>
      <p>
        Weight per cubic foot comes straight from the material densities:{" "}
        gravel 103.7 lbs, sand 100 lbs, topsoil 88.9 lbs, fill dirt 81.5 lbs,
        mulch 29.6 lbs, concrete 150 lbs. Multiply by your barrow&apos;s
        capacity to see what a struck load actually weighs:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material</th><th>Struck 6 cu ft load</th><th>Struck 3 cu ft load</th><th>Verdict</th></tr>
        </thead>
        <tbody>
          <tr><td>Gravel</td><td className="num">622 lbs</td><td className="num">311 lbs</td><td>Half loads or less</td></tr>
          <tr><td>Concrete</td><td className="num">900 lbs</td><td className="num">450 lbs</td><td>Partial loads only</td></tr>
          <tr><td>Sand</td><td className="num">600 lbs</td><td className="num">300 lbs</td><td>Half loads or less</td></tr>
          <tr><td>Topsoil</td><td className="num">533 lbs</td><td className="num">267 lbs</td><td>Half loads</td></tr>
          <tr><td>Fill dirt</td><td className="num">489 lbs</td><td className="num">245 lbs</td><td>Half loads</td></tr>
          <tr><td>Mulch</td><td className="num">178 lbs</td><td className="num">89 lbs</td><td>Fine, heap it</td></tr>
        </tbody>
      </table>
      <p>
        The pattern is clear: <strong>a struck 6 cu ft load of gravel (≈ 622
        lbs) exceeds safe lifting for anyone</strong>, while the same volume
        of mulch (≈ 178 lbs) is an easy haul. As a rule of thumb, keep loads
        under about 200–300 lbs per trip for dense material — that means
        quarter-to-half loads in a 6 cu ft barrow. It feels slower, but more
        trips at a sustainable weight beat one trip that throws out your back.
        Keep the barrow low, lift with your legs, and never try to muscle a
        full load of gravel up a plank into a truck bed.
      </p>

      <h2>Practical guidance: barrows, trips, and shovelfuls</h2>
      <p>
        For moving dense material any distance, a{" "}
        <strong>two-wheel contractor barrow</strong> is worth the upgrade —
        the extra wheel carries the load instead of your arms, and the wider
        stance is far more stable on uneven ground. Single-wheel barrows are
        fine for mulch and light garden work.
      </p>
      <p>
        Plan the trip count before the pile arrives. Example: a 3-yard mulch
        delivery and a 6 cu ft barrow — 3 × 4.5 ={" "}
        <strong>13.5 trips, call it 14</strong>. Since mulch heaps easily,
        you&apos;ll likely do it in 10–11. A 2-yard topsoil delivery with the
        same barrow: 2 × 4.5 = 9 struck loads, but at 533 lbs struck you will
        run half loads — budget <strong>16–18 trips</strong>. Build in rest:
        steady half-loads beat a sprint-and-collapse, and a shovel partner
        doubles throughput.
      </p>
      <p>
        Bonus math: a struck 6 cu ft barrow load takes roughly{" "}
        <strong>25–35 shovelfuls</strong> to fill, depending on your shovel and
        the material. Multiply that by your trip count for a realistic sense
        of the job — 14 trips of mulch is roughly 400 shovelfuls. That number
        is also a good argument for having the pile dumped as close to the
        work site as the truck can safely reach.
      </p>

      <Faq items={faqs} heading="Wheelbarrow FAQ" />
    </GuideArticle>
  );
}

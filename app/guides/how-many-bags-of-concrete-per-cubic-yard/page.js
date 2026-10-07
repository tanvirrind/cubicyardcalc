import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Many Bags of Concrete Per Cubic Yard? (Table)",
  description:
    "Bag counts per cubic yard for 40, 50, 60, 80 and 90 lb concrete bags, plus when to switch to ready-mix. Free concrete calculator included.",
  keywords: [
    "how many bags of concrete per cubic yard",
    "80 lb bags per yard of concrete",
    "60 lb bags per cubic yard",
    "bags vs ready mix concrete",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-many-bags-of-concrete-per-cubic-yard/" },
  openGraph: {
    title: "How Many Bags of Concrete Per Cubic Yard? | Cubic Yard Calculator",
    description:
      "Bag counts for every bag size, the bags-vs-ready-mix breakpoint, and real cost math. Free concrete calculator.",
    url: "https://cubicyardcalculator.site/guides/how-many-bags-of-concrete-per-cubic-yard/",
  },
};

const faqs = [
  {
    q: "How many 80 lb bags of concrete make a cubic yard?",
    a: "About 45 bags. An 80 lb bag yields roughly 0.60 cubic feet, and 27 / 0.60 = 45 bags. Always round up — you can't pour a partial bag.",
  },
  {
    q: "How many 60 lb bags make a cubic yard?",
    a: "About 60 bags. A 60 lb bag yields roughly 0.45 cubic feet, and 27 / 0.45 = 60 bags.",
  },
  {
    q: "How many 40 lb bags make a cubic yard?",
    a: "About 90 bags. A 40 lb bag yields roughly 0.30 cubic feet, so 27 / 0.30 = 90 bags.",
  },
  {
    q: "When should I use bags instead of ready-mix?",
    a: "Bags win for pours under about 1 to 2 cubic yards — fence posts, small pads, repairs. Above that, ready-mix is usually cheaper per yard and far less labor.",
  },
  {
    q: "Do bag yields vary?",
    a: "Yes. The table uses manufacturer yields, but exact yield varies by mix and moisture. Check the bag label and round up, then add 10% overage for spillage and uneven forms.",
  },
];

const bagTable = [
  { size: "40 lb", perYard: "90", yield: "0.30 cu ft" },
  { size: "50 lb", perYard: "72", yield: "0.375 cu ft" },
  { size: "60 lb", perYard: "60", yield: "0.45 cu ft" },
  { size: "80 lb", perYard: "45", yield: "0.60 cu ft" },
  { size: "90 lb", perYard: "40", yield: "0.675 cu ft" },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Many Bags of Concrete Per Cubic Yard?"
      description="The bag counts for every common bag size, how the math works, when bags beat ready-mix — and when they definitely don't."
      slug="how-many-bags-of-concrete-per-cubic-yard"
      calculatorHref="/calculators/concrete-calculator/"
      calculatorLabel="Try the concrete calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        One cubic yard of concrete equals 27 cubic feet. Divide 27 by the
        yield of a single bag and you get the count per yard. Here it is in
        one table, using manufacturer bag yields:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Bag size</th><th>Bags per cubic yard</th><th>Yield per bag</th></tr>
        </thead>
        <tbody>
          {bagTable.map((b) => (
            <tr key={b.size}>
              <td className="num">{b.size}</td>
              <td className="num">{b.perYard}</td>
              <td className="num">{b.yield}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        These numbers are the planning baseline — the 45/60/90 rule of
        thumb (45 bags of 80 lb, 60 of 60 lb, 90 of 40 lb) covers the mixes
        most people buy.
      </p>

      <h2>How the math works</h2>
      <p>
        A bag's yield is the volume of finished concrete it produces, which
        is much less than the volume of dry mix in the bag — mixing and
        compaction shrink it. Take the 27 cubic feet in a yard and divide by
        the bag's yield. For an 80 lb bag yielding 0.60 cubic feet: 27 /
        0.60 = 45 bags. The formula works for any bag size:{" "}
        <strong>bags per yard = 27 ÷ yield in cubic feet</strong>. Real yields
        vary slightly by mix design and how wet you batch, so treat these as
        verified-but-rounded figures and always round your order up.
      </p>

      <h2>Worked example: a 10×10 slab at 4 inches</h2>
      <p>
        Volume first: 10 × 10 × 0.333 = 33.3 cubic feet, ÷ 27 ={" "}
        <strong>1.23 cubic yards</strong>. In 80 lb bags: 1.23 × 45 = 55.5 —
        round up to <strong>56 bags</strong>. Add 10% overage and you're at 62
        bags. That's a lot of lifting: at roughly 60 bags an hour of mixing
        work, a 10×10 slab is about the size where ready-mix starts looking
        very attractive.
      </p>

      <h2>Bags vs ready-mix: the breakpoint</h2>
      <p>
        Bags make sense for small, irregular pours — fence posts, small pads,
        repairs — where the ready-mix minimum and short-load fee would punish
        you. But once you're past roughly 1 to 2 cubic yards, ready-mix
        delivery is usually cheaper per yard <em>and</em> you skip hours of
        mixing and hauling. A 10×20 driveway at 4 inches (2.47 yards) is 112
        bags of 80 lb mix — over 4.5 tons of bags to move, versus one truck
        in 20 minutes. Watch for short-load fees ($50–$200) on small
        ready-mix orders under about 4 yards; for tiny pours, bags still win.
      </p>

      <h2>The real cost math</h2>
      <p>
        Ready-mix typically runs $125–$195 per cubic yard delivered (2026,
        region-dependent). Compare that against the bag route: bags-per-yard ×
        price per bag + your time. At $6 per 80 lb bag, 45 bags costs $270 in
        materials alone — before you count the hours of mixing. The breakeven
        usually lands well under 2 yards. Above the breakeven, every extra
        bag is money and sweat you didn't need to spend.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Forgetting the overage.</strong> Forms leak and subgrade is
        never perfectly level — 10% extra is the industry standard.{" "}
        <strong>Using the dry-mix volume.</strong> A bag's cubic-footage on
        the shelf isn't its yield; always use the finished-concrete yield.{" "}
        <strong>Ordering bags for a big pour.</strong> Above ~2 yards, the bag
        route is the most expensive and slowest way to move concrete.{" "}
        <strong>Mixing inches and feet.</strong> Convert thickness to feet
        first — 4 inches is 0.333 feet, not 4.
      </p>

      <Faq items={faqs} heading="Bag count FAQ" />
    </GuideArticle>
  );
}

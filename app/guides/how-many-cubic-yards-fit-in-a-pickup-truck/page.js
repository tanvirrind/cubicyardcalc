import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Many Cubic Yards Fit in a Pickup Truck? (Plus Trailers & Dump Trucks)",
  description:
    "Pickup bed capacity by bed size (5', 6.5', 8') in cubic yards, plus the weight limit that matters more, trailer and dump truck capacity charts.",
  keywords: [
    "how many cubic yards in a pickup truck",
    "how many cubic yards does a dump truck hold",
    "pickup truck bed capacity cubic yards",
    "how many yards of dirt in a trailer",
    "cubic yards per dump truck load",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-many-cubic-yards-fit-in-a-pickup-truck/" },
  openGraph: {
    title: "How Many Cubic Yards Fit in a Pickup Truck? | Cubic Yard Calculator",
    description:
      "Bed-size capacity charts, the weight-vs-volume rule nobody explains, and trailer + dump truck tables.",
    url: "https://cubicyardcalculator.site/guides/how-many-cubic-yards-fit-in-a-pickup-truck/",
  },
};

const faqs = [
  {
    q: "How many cubic yards fit in a standard pickup truck bed?",
    a: "About 2 cubic yards level full in a 6.5-foot bed, or roughly 3 when heaped. But a half-ton's 1,500–2,200 lb payload usually limits dense materials like gravel or dirt to well under 1 yard by weight.",
  },
  {
    q: "How many cubic yards does a dump truck hold?",
    a: "A single-axle dump truck carries 5–8 cubic yards, a tandem 10–16, a tri-axle 14–20, and a tractor-trailer end dump 20–30 or more. Weight limits, not bed volume, set the ceiling for heavy material.",
  },
  {
    q: "How many cubic yards of gravel can a pickup truck carry?",
    a: "Only about 0.6 cubic yards of gravel in an 1,800-lb-payload half-ton — 2 cubic yards of gravel weighs about 5,600 lb, roughly three times what most half-tons can legally carry.",
  },
  {
    q: "Can a half-ton pickup haul 2 yards of dirt?",
    a: "No. Two yards of fill dirt weigh about 4,400 lb, far past a half-ton's payload. Stick to about 0.75–0.8 cubic yards of dirt or topsoil per trip.",
  },
  {
    q: "How many cubic yards does a dump trailer hold?",
    a: "A 6×12 dump trailer holds roughly 4–6 cubic yards by volume, but its 7,000–10,000 lb GVWR usually caps gravel or concrete at 3–4 yards. Check the trailer's payload rating, not just the bed size.",
  },
  {
    q: "How much does a cubic yard of mulch weigh for hauling?",
    a: "About 800 lb per yard — so mulch is the one material where volume, not weight, limits your pickup. A full 6.5' bed of mulch (~2 yards, ~1,600 lb) is typically within payload.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Many Cubic Yards Fit in a Pickup Truck?"
      description="Bed-size capacity charts, the weight-vs-volume rule nobody explains, trailer and dump truck tables, and when to just get a delivery."
      slug="how-many-cubic-yards-fit-in-a-pickup-truck"
      calculatorHref="/calculators/gravel-to-tons-calculator/"
      calculatorLabel="Try the tons-to-cubic-yards converter"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        A standard <strong>6.5-foot pickup bed holds about 2 cubic yards</strong>{" "}
        level full, or roughly 3 yards heaped. A 5-foot short bed holds about
        1.5 yards level; an 8-foot long bed holds about 2.5. That&apos;s the
        volume answer — and it&apos;s the less important one. For everything
        except mulch, <strong>your payload rating runs out long before the
        bed does</strong>. Two yards of gravel weigh about 5,600 lb, which is
        roughly three times what a typical half-ton pickup (1,500–2,200 lb
        payload) can carry.
      </p>

      <h2>Pickup bed capacity by bed size</h2>
      <p>
        Capacity depends on interior length, width, and wall height. These are
        realistic working figures measured level full at the bed rails, plus
        a heaped figure for material piled above the rails (only practical
        with a tarp or side boards):
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Bed length</th><th>Typical beds</th><th>Level full</th><th>Heaped</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">5 ft (short)</td><td>Most crew-cab midsize &amp; short beds</td><td className="num">~1.5 yd³</td><td className="num">~2.25 yd³</td></tr>
          <tr><td className="num">6.5 ft (standard)</td><td>Most full-size crew cabs</td><td className="num">~2 yd³</td><td className="num">~3 yd³</td></tr>
          <tr><td className="num">8 ft (long)</td><td>Regular cab &amp; some crew-cab HD trucks</td><td className="num">~2.5 yd³</td><td className="num">~3.75 yd³</td></tr>
        </tbody>
      </table>
      <p>
        Heaped loads only work for light, bulky material like mulch — and
        legally they need to be tarped. Dense material heaped above the rails
        will already have blown past your payload.
      </p>

      <h2>The real limit: weight, not volume</h2>
      <p>
        Here&apos;s the insight most capacity charts skip: <strong>one cubic
        yard of dense material weighs far more than the volume suggests</strong>.
        Two yards of gravel (about 5,600 lb) fit in a 6.5-foot bed with room to
        spare, but they exceed a half-ton&apos;s payload roughly three times
        over. Overloaded trucks sag, lose braking performance, and can get
        ticketed — check the payload number on your door jamb sticker, not
        the tow rating. For the full per-yard weights of every common
        material, see our{" "}
        <a href="/guides/how-much-does-a-cubic-yard-weigh/">cubic yard weight chart</a>.
      </p>
      <p>
        Here&apos;s what the weight limit actually means per trip, assuming an
        1,800 lb payload — the heart of the half-ton range:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material</th><th>Weight of 2 cubic yards</th><th>How much fits an 1,800 lb payload</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Mulch</td><td className="num">1,600 lb</td><td className="num">~2.25 yd³ (volume limits first)</td></tr>
          <tr><td className="num">Topsoil</td><td className="num">4,800 lb</td><td className="num">~0.75 yd³</td></tr>
          <tr><td className="num">Fill dirt</td><td className="num">4,400 lb</td><td className="num">~0.8 yd³</td></tr>
          <tr><td className="num">Sand</td><td className="num">5,400 lb</td><td className="num">~0.67 yd³</td></tr>
          <tr><td className="num">Gravel</td><td className="num">5,600 lb</td><td className="num">~0.64 yd³</td></tr>
          <tr><td className="num">Concrete (bagged/wet)</td><td className="num">8,100 lb</td><td className="num">~0.44 yd³</td></tr>
          <tr><td className="num">Landscape rock</td><td className="num">9,000 lb</td><td className="num">~0.4 yd³</td></tr>
        </tbody>
      </table>
      <p>
        Notice mulch is the only material where the bed fills before the
        weight limit hits — which is why landscapers haul mulch by the
        truckload but order everything else delivered. Three-quarter-ton and
        one-ton trucks change the math (payloads of 3,000–4,000+ lb), so a
        2500-series truck can carry roughly double the gravel per trip of a
        half-ton.
      </p>

      <h2>Utility and dump trailer capacity</h2>
      <p>
        Trailers add volume, but the same weight rule applies — a
        trailer&apos;s <strong>GVWR</strong> (gross vehicle weight rating) caps
        the load, and that rating includes the trailer&apos;s own weight:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Trailer</th><th>Bed × wall height</th><th>Level capacity</th><th>Realistic by weight</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">5&times;8 utility</td><td className="num">~2 ft sides</td><td className="num">~3 yd³</td><td className="num">~0.7 yd³ gravel (typical 2,000 lb rating)</td></tr>
          <tr><td className="num">6&times;12 utility</td><td className="num">~2 ft sides</td><td className="num">~5 yd³</td><td className="num">~1–1.25 yd³ gravel (typical 2,500–3,500 lb rating)</td></tr>
          <tr><td className="num">5&times;10 dump</td><td className="num">~2 ft walls</td><td className="num">~3.7 yd³</td><td className="num">~2–3 yd³ dense material</td></tr>
          <tr><td className="num">6&times;12 dump</td><td className="num">2–3 ft walls</td><td className="num">4–6 yd³</td><td className="num">~3–4 yd³ gravel (7,000–10,000 lb GVWR)</td></tr>
        </tbody>
      </table>
      <p>
        Small utility trailers are deceptively limited: a 5&times;8 looks
        spacious at 3 yards of volume, but at ~2,000 lb payload it&apos;s
        really a three-quarter-yard-of-gravel trailer. Dump trailers earn
        their keep on unloading — a hydraulic lift dumps the pile in minutes
        versus shoveling for an hour.
      </p>

      <h2>Dump truck capacity by axle configuration</h2>
      <p>
        When you order bulk delivery, the truck that shows up matters for
        both how much arrives per load and whether it can reach your site:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Configuration</th><th>Typical capacity</th><th>Best for</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Single-axle</td><td className="num">5–8 yd³</td><td className="num">Small jobs, tight driveways</td></tr>
          <tr><td className="num">Tandem-axle</td><td className="num">10–16 yd³</td><td className="num">Standard residential deliveries</td></tr>
          <tr><td className="num">Tri-axle</td><td className="num">14–20 yd³</td><td className="num">Large jobs; the typical &ldquo;truckload&rdquo; price</td></tr>
          <tr><td className="num">End-dump / transfer trailer</td><td className="num">20–30+ yd³</td><td className="num">Commercial sites, road work</td></tr>
        </tbody>
      </table>
      <p>
        When a supplier quotes you a &ldquo;truckload&rdquo; price, ask how
        many yards that actually is — it usually means a tri-axle at 18–20
        yards, but some yards mean a tandem at 12. Never compare truckload
        prices without the yard count.
      </p>

      <h2>Ordering a delivery instead of hauling</h2>
      <p>
        Do the trip math honestly. Hauling gravel yourself at 0.6 yards per
        trip means five trips for 3 yards — plus load time, fuel, and wear.
        Delivery fees typically run <strong>$50–150</strong>, and many yards
        waive the fee over a volume threshold. Before you call, know:{" "}
        <strong>minimum loads</strong> (most suppliers sell 1 yard minimum
        for delivery, some require 2–3), whether the price is{" "}
        <strong>dump or tailgate-spread</strong> (spreading adds labor cost),
        and <strong>site access</strong> — gate width, overhead wires, soft
        ground after rain, and whether the truck can even reach your
        driveway. A tri-axle won&apos;t fit down a narrow suburban street,
        which is exactly when a smaller tandem or your own pickup earns its
        keep.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Counting volume only.</strong> The bed fits 2 yards; the
        suspension doesn&apos;t. <strong>Forgetting the trailer&apos;s own
        weight.</strong> A 2,900 lb GVWR trailer that weighs 900 lb empty
        carries 2,000 lb of material. <strong>Heaping dense material.</strong>{" "}
        An un-tarped heaped load of gravel is both illegal in most states and
        a payload disaster. <strong>Ordering exact yards.</strong> Add
        5–10% overage — a quarter-yard shortfall means a whole second
        delivery fee.
      </p>

      <Faq items={faqs} heading="Truck Capacity FAQ" />
    </GuideArticle>
  );
}

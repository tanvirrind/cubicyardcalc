export const metadata = {
  title: "About Cubic Yard Calculator",
  description:
    "Learn about Cubic Yard Calculator, a free tool for estimating concrete, gravel, mulch, dirt, sand and other bulk material quantities.",
  keywords: ["about cubic yard calculator"],
  alternates: { canonical: "https://cubicyardcalculator.site/about/" },
  openGraph: {
    title: "About Cubic Yard Calculator | Cubic Yard Calculator",
    description:
      "A free tool for estimating concrete, gravel, mulch, dirt, sand and other bulk material quantities.",
    url: "https://cubicyardcalculator.site/about/",
  },
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">About this tool</div>
        <h1 className="h2">About Cubic Yard Calculator</h1>
        <p className="sub">
          Built to make everyday material estimates faster, clearer, and
          easier to check before ordering.
        </p>
        <div style={{ maxWidth: 720, fontSize: 17, lineHeight: 1.75 }}>
          <h2>Why this site exists</h2>
          <p>
            Cubic yards are used everywhere in concrete, landscaping, grading,
            drainage, and outdoor construction, but the math can be easy to
            second-guess. A simple project often starts with measurements in
            feet and inches, while suppliers quote by cubic yard, ton,
            truckload, or bag. This site brings those pieces together in one
            practical calculator.
          </p>
          <p>
            The goal is to help homeowners, landscapers, contractors, and DIY
            planners estimate how much material they may need before calling a
            supplier. The tools calculate cubic yards, cubic feet, estimated
            weight, estimated tons, and a 10 percent overage recommendation.
            Specialized pages add useful details, such as concrete bag
            counts, mulch bag counts, and square-foot and ton conversions.
          </p>
          <p>
            All calculations are based on standard volume formulas and typical
            material weights. These numbers are useful for planning,
            budgeting, and comparing options. They are not a substitute for
            supplier guidance, local code requirements, engineering advice, or
            an on-site review. Material density changes with moisture,
            compaction, aggregate type, screening, and supplier mix. Delivery
            minimums, truck weight limits, and short-load fees can also affect
            the final order.
          </p>
          <p>
            Before purchasing material, confirm your project measurements,
            supplier density, and order quantity with the company delivering
            or loading the product. For structural concrete, drainage systems,
            retaining work, or any job where failure could cause damage or
            injury, consult a qualified professional. This website is intended
            to be a clear estimating aid, not a final construction
            specification.
          </p>
          <h2>How the calculators work</h2>
          <p>
            Every volume estimate starts from the same formula: length ×
            width × depth, converted to feet, divided by 27 to get cubic
            yards. Weight and tonnage use typical material densities — for
            example, about 4,050 lbs per cubic yard for concrete, 2,800 for
            gravel, 2,700 for sand, 2,200 for fill dirt, 2,400 for topsoil,
            and 800 for mulch. Concrete bag counts use manufacturer yields
            (about 0.60 cubic feet per 80 lb bag). All math runs in your
            browser; nothing you enter is sent to a server.
          </p>
          <h2>Corrections and updates</h2>
          <p>
            Material weights, bag yields, and prices change, and manufacturers
            revise their data. If you spot a number that looks wrong for your
            region or product, use the contact page to report it with the
            material, product name, and your source — corrections are reviewed
            and applied promptly.
          </p>
        </div>
      </div>
    </section>
  );
}

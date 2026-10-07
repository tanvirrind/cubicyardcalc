import Link from "next/link";

export const metadata = {
  title: "Free Cubic Yard Calculators — Concrete, Mulch & More",
  description:
    "Free bulk-material calculators: cubic yard, concrete, gravel, mulch, sand, dirt, topsoil, rock, bag converters, square feet and tons converters.",
  keywords: [
    "cubic yard calculators",
    "concrete calculator",
    "mulch calculator",
    "gravel calculator",
    "sand calculator",
    "dirt calculator",
    "topsoil calculator",
    "landscape rock calculator",
    "concrete bag calculator",
    "tons to cubic yards calculator",
    "square feet to cubic yards calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/" },
  openGraph: {
    title: "Free Cubic Yard Calculators — Concrete, Mulch & More | Cubic Yard Calculator",
    description:
      "Sixteen free bulk-material calculators: concrete, gravel, mulch, sand, dirt, topsoil, rock, bag converters and more.",
    url: "https://cubicyardcalculator.site/calculators/",
  },
};

const calcs = [
  { name: "Cubic yard calculator", note: "The all-purpose volume tool", href: "/calculators/cubic-yard-calculator/" },
  { name: "Concrete calculator", note: "Yards, weight, bags & cost", href: "/calculators/concrete-calculator/" },
  { name: "Mulch calculator", note: "Yards & bag counts", href: "/calculators/mulch-calculator/" },
  { name: "Gravel calculator", note: "Yards & tons", href: "/calculators/gravel-calculator/" },
  { name: "Sand calculator", note: "Yards & tons", href: "/calculators/sand-calculator/" },
  { name: "Dirt calculator", note: "Topsoil & fill dirt, yards & tons", href: "/calculators/dirt-calculator/" },
  { name: "Topsoil calculator", note: "Gardens & raised beds", href: "/calculators/topsoil-calculator/" },
  { name: "Fill dirt calculator", note: "Grading & backfill", href: "/calculators/fill-dirt-calculator/" },
  { name: "Landscape rock calculator", note: "Rock & stone, yards & tons", href: "/calculators/landscape-rock-calculator/" },
  { name: "Concrete bag calculator", note: "Yards ↔ bags, two-way", href: "/calculators/concrete-bag-calculator/" },
  { name: "Mulch bag calculator", note: "Yards ↔ bags, two-way", href: "/calculators/mulch-bag-calculator/" },
  { name: "Gravel → tons", note: "Two-way weight converter", href: "/calculators/gravel-to-tons-calculator/" },
  { name: "Sq ft → cubic yards", note: "Area + depth converter", href: "/calculators/square-feet-to-cubic-yards-calculator/" },
  { name: "Cu ft → cubic yards", note: "Two-way volume converter", href: "/calculators/cubic-feet-to-cubic-yards-calculator/" },
  { name: "Square yard calculator", note: "Sq ft → sq yd area tool", href: "/calculators/square-yard-calculator/" },
  { name: "Tons → cubic yards", note: "Two-way weight converter", href: "/calculators/tons-to-cubic-yards-calculator/" },
];

export default function CalculatorsHub() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Free calculators</div>
        <h1 className="h2">Every bulk-material calculator in one place</h1>
        <p className="sub">
          Punch in your project, get cubic yards, weight in tons, bag counts,
          and a 10% overage suggestion. Every tool is free and runs entirely
          in your browser.
        </p>
        <div className="grid3">
          {calcs.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="card trade"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div>
                <div className="t-name">{c.name}</div>
                <div className="t-note">{c.note}</div>
              </div>
            </Link>
          ))}
        </div>
        <p style={{ color: "var(--muted)", marginTop: 26, maxWidth: 640 }}>
          Not sure which you need? The{" "}
          <Link href="/guides/">guides</Link> explain bags vs bulk, density
          tables, and the mistakes that cost people money.
        </p>
      </div>
    </section>
  );
}

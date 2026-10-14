import Link from "next/link";
import { guides } from "../../lib/guides";

export const metadata = {
  title: "Bulk Material Guides — Projects, Comparisons & Costs",
  description:
    "30 practical guides: project quantity charts for retaining walls, walkways, RV pads, sandboxes, dry creek beds and more, material comparisons, a gravel size chart, measuring techniques, and installation costs. Free, with worked examples.",
  keywords: [
    "bulk material guides",
    "how much gravel for a retaining wall",
    "types of sand for landscaping",
    "how much gravel for a walkway",
    "gravel size chart",
    "how much sand for a sandbox",
    "how much gravel for an RV pad",
    "how to measure irregular area for mulch",
    "how much dirt to level a yard",
    "how much rock for a dry creek bed",
    "topsoil vs compost vs garden soil",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/" },
  openGraph: {
    title: "Bulk Material Guides — Projects, Comparisons & Costs | Cubic Yard Calculator",
    description:
      "Project quantity charts, material comparisons, a gravel size chart, measuring techniques, and installation cost guides — 30 practical guides with worked examples.",
    url: "https://cubicyardcalculator.site/guides/",
  },
};

export default function GuidesHub() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Guides</div>
        <h1 className="h2">Order with confidence, not guesses</h1>
        <p className="sub">
          The math behind the calculators: bag counts, bulk-vs-bags math, and
          the density tables suppliers use. Short, practical, no fluff.
        </p>
        <div className="grid3">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>{g.title}</h3>
              <p>{g.note}</p>
            </Link>
          ))}
        </div>
        <p style={{ color: "var(--muted)", marginTop: 26, maxWidth: 640 }}>
          Want the tool instead?{" "}
          <Link href="/calculators/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Browse all 16 calculators
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

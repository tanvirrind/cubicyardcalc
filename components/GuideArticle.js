import Link from "next/link";
import JsonLd from "./JsonLd";

const SITE_URL = "https://cubicyardcalculator.site";

// Shared shell for /guides articles: breadcrumb, headline, Article schema,
// and a CTA box pointing at the relevant calculator.
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
/** "2026-10-12" or "2026-10" -> "October 2026" (month-year granularity only). */
function monthYear(v) {
  const m = /^(\d{4})-(\d{2})/.exec(v || "");
  if (!m) return null;
  const mi = parseInt(m[2], 10);
  if (mi < 1 || mi > 12) return null;
  return `${MONTHS[mi - 1]} ${m[1]}`;
}

export default function GuideArticle({
  title,
  description,
  slug,
  updated,
  calculatorHref,
  calculatorLabel,
  children,
}) {
  const url = `${SITE_URL}/guides/${slug}/`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    inLanguage: "en-US",
    datePublished: "2026-10-06",
    dateModified: updated || "2026-10-06",
    author: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
  };

  return (
    <article className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <nav style={{ fontSize: 13, color: "var(--muted)", marginBottom: 18 }}>
          <Link href="/" style={{ color: "inherit" }}>Home</Link>
          {"  →  "}
          <Link href="/guides/" style={{ color: "inherit" }}>Guides</Link>
        </nav>
        <div className="kicker">Material guide</div>
        <h1 className="h2" style={{ maxWidth: 720 }}>{title}</h1>
        <p className="sub" style={{ maxWidth: 680 }}>{description}</p>
        {monthYear(updated) && (
          <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 10, marginBottom: 0 }}>
            By the Cubic Yard Calculator team · Last updated {monthYear(updated)}
          </p>
        )}
        <div className="guide-body" style={{ maxWidth: 720, lineHeight: 1.75, fontSize: 17 }}>
          {children}
        </div>
        <div className="card" style={{ marginTop: 44, maxWidth: 720, padding: "28px 30px" }}>
          <h3 style={{ marginTop: 0 }}>Run your own numbers</h3>
          <p style={{ color: "var(--ink-soft)" }}>
            Reading is good. Math is better. Punch your project into the free
            calculator and order with confidence.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            <Link href={calculatorHref} className="btn btn-primary">
              {calculatorLabel}
            </Link>
            <Link href="/calculators/" className="btn btn-ghost">
              All calculators
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

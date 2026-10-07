import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <strong style={{ color: "var(--ink)" }}>Cubic Yard Calculator</strong>
          <div>Measure twice, order once.</div>
        </div>
        <div className="footer-links">
          <Link href="/calculators/" style={{ color: "inherit" }}>Calculators</Link>
          <Link href="/guides/" style={{ color: "inherit" }}>Guides</Link>
          <Link href="/about" style={{ color: "inherit" }}>About</Link>
          <Link href="/contact" style={{ color: "inherit" }}>Contact</Link>
          <Link href="/privacy-policy" style={{ color: "inherit" }}>Privacy</Link>
        </div>
        <div>© {new Date().getFullYear()} Cubic Yard Calculator. All rights reserved.</div>
      </div>
    </footer>
  );
}

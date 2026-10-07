"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/calculators/", label: "Calculators" },
  { href: "/guides/", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">CY</span>
          Cubic Yard Calculator
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/calculators/cubic-yard-calculator/" className="btn btn-primary btn-sm">
            Calculate yards
          </Link>
        </div>
        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`nav-menu${open ? " open" : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link
          href="/calculators/cubic-yard-calculator/"
          className="btn btn-primary"
          style={{ marginTop: 12, textAlign: "center" }}
          onClick={() => setOpen(false)}
        >
          Calculate yards
        </Link>
      </div>
    </nav>
  );
}

import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "./Navbar";

const ELSEWHERE = [
  { href: "https://github.com/pritampanda15", title: "GitHub" },
  { href: "https://www.linkedin.com/in/pritam-kumar-panda/", title: "LinkedIn" },
  {
    href: "https://scholar.google.com/citations?user=H2ggrzQAAAAJ&hl=en",
    title: "Google Scholar",
  },
  { href: "https://profiles.stanford.edu/pritam-panda", title: "Stanford" },
  { href: "https://www.youtube.com/@Omixium_ai", title: "YouTube" },
];

const Footer = () => (
  <footer className="mt-auto border-t border-line">
    <div className="grid grid-cols-3 gap-16 px-12 py-20 lg:grid-cols-1 lg:gap-12 lg:px-8 lg:py-14 sm:px-6">
      <div>
        <p className="font-serif text-3xl italic leading-tight text-ink sm:text-2xl">
          Where atoms move,
          <br />
          life evolves.
        </p>
        <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted">
          Computational biophysics, AI-driven drug discovery, and the unglamorous
          engineering that makes both reproducible.
        </p>
      </div>

      <div>
        <p className="label-muted mb-6">Index</p>
        <ul className="flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-mono text-xs uppercase tracking-wide2 text-dim transition-colors hover:text-accent"
              >
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="label-muted mb-6">Elsewhere</p>
        <ul className="flex flex-col gap-3">
          {ELSEWHERE.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wide2 text-dim transition-colors hover:text-accent"
              >
                {l.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex items-center gap-2">
          <span className="status-dot" />
          <span className="label-muted">Sunnyvale, CA</span>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between border-t border-line px-12 py-6 lg:px-8 sm:flex-col sm:gap-3 sm:px-6">
      <span className="label-muted">
        © {new Date().getFullYear()} Pritam Kumar Panda
      </span>
      <a
        href="mailto:pritam@stanford.edu"
        className="font-mono text-[11px] uppercase tracking-label text-muted transition-colors hover:text-accent"
      >
        pritam@stanford.edu
      </a>
    </div>
  </footer>
);

export default Footer;

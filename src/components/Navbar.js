import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ScholarIcon,
  GithubIcon,
  LinkedInIcon,
  BlueskyIcon,
  TwitterIcon,
} from "./SocialIcons";

export const NAV_LINKS = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/projects", title: "Projects" },
  { href: "/articles", title: "Publications" },
  { href: "/youtube", title: "YouTube" },
  { href: "/blogs", title: "Blogs" },
];

const SOCIALS = [
  { href: "https://github.com/pritampanda15", label: "GitHub", Icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/pritam-kumar-panda/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://scholar.google.com/citations?user=H2ggrzQAAAAJ&hl=en",
    label: "Google Scholar",
    Icon: ScholarIcon,
  },
  { href: "https://twitter.com/pritamkpanda", label: "X", Icon: TwitterIcon },
  {
    href: "https://bsky.app/profile/pritampkp15.bsky.social",
    label: "Bluesky",
    Icon: BlueskyIcon,
  },
];

const NavLink = ({ href, title, onClick }) => {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-mono text-xs uppercase tracking-wide2 transition-colors duration-300 hover:text-accent ${
        active ? "text-accent" : "text-ink"
      }`}
    >
      {title}
    </Link>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Close the drawer on navigation and lock scroll while it's open.
  useEffect(() => setOpen(false), [router.asPath]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-12 py-5 lg:px-8 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm uppercase tracking-wide2 text-ink transition-colors hover:text-accent"
          aria-label="Home"
        >
          PKP<span className="text-accent">.</span>
        </Link>

        <nav className="flex items-center gap-8 lg:hidden">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </nav>

        <div className="flex items-center gap-5 lg:hidden">
          {SOCIALS.map(({ href, label, Icon }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.92 }}
              className="h-[18px] w-[18px] text-muted transition-colors hover:text-accent"
            >
              <Icon />
            </motion.a>
          ))}
          <Link
            href="mailto:pritam@stanford.edu"
            className="border border-accent bg-accent px-5 py-2 font-mono text-[11px] uppercase tracking-wide2 text-bg transition-colors duration-300 hover:bg-transparent hover:text-accent"
          >
            Get in touch
          </Link>
        </div>

        {/* Hamburger — visible at ≤1023px */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="hidden flex-col justify-center gap-[5px] lg:flex"
        >
          <span
            className={`block h-px w-6 bg-ink transition-all duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-all duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="hidden border-t border-line bg-bg px-8 py-10 sm:px-6 lg:block"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((l) => (
                <NavLink key={l.href} {...l} onClick={() => setOpen(false)} />
              ))}
            </nav>
            <div className="mt-10 flex items-center gap-6 border-t border-line pt-8">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-5 w-5 text-muted transition-colors hover:text-accent"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

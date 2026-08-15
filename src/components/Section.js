import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowIcon } from "./SocialIcons";

/** Small mono eyebrow. */
export const Label = ({ children, muted = false, className = "" }) => (
  <p className={`${muted ? "label-muted" : "label"} ${className}`}>{children}</p>
);

/**
 * Page header used by every inner page: eyebrow, big mono title with an
 * optional serif-italic accent word, and a lede.
 */
export const PageHero = ({ label, title, accent, lede }) => (
  <header className="relative overflow-hidden border-b border-line px-12 pb-20 pt-40 lg:px-8 lg:pt-32 sm:px-6">
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-grid"
      style={{
        backgroundSize: "60px 60px",
        maskImage:
          "radial-gradient(ellipse at 20% 50%, black 0%, transparent 70%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at 20% 50%, black 0%, transparent 70%)",
      }}
    />
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Label className="mb-8">{label}</Label>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-5xl font-mono text-[clamp(36px,6vw,84px)] font-light leading-[1.02] tracking-[-0.03em]"
      >
        {title}{" "}
        {accent && (
          <em className="font-serif italic text-accent">{accent}</em>
        )}
      </motion.h1>
      {lede && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-dim sm:text-base"
        >
          {lede}
        </motion.p>
      )}
    </div>
  </header>
);

/** Section heading with a hairline rule and an optional right-hand count. */
export const SectionHead = ({ label, title, count, className = "" }) => (
  <div
    className={`flex items-end justify-between border-b border-line pb-8 ${className}`}
  >
    <div>
      <Label className="mb-5">{label}</Label>
      <h2 className="font-serif text-[clamp(28px,3.4vw,48px)] italic leading-tight text-ink">
        {title}
      </h2>
    </div>
    {count != null && (
      <span className="label-muted shrink-0 pb-2">
        [{String(count).padStart(2, "0")}]
      </span>
    )}
  </div>
);

/** Two-digit index used on cards. */
export const Index = ({ n }) => (
  <span className="font-mono text-[11px] tracking-label text-muted">
    {String(n).padStart(2, "0")}
  </span>
);

/** Text link with an arrow that extends on hover. */
export const ArrowLink = ({ href, children, external = false }) => {
  const props = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };
  const Cmp = external ? "a" : Link;

  return (
    <Cmp
      {...props}
      className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide2 text-accent transition-all duration-300 hover:gap-4"
    >
      {children}
      <span className="h-3 w-3">
        <ArrowIcon />
      </span>
    </Cmp>
  );
};

/** Scroll-reveal wrapper. */
export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

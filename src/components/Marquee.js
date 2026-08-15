import React from "react";

const ITEMS = [
  "AI-driven drug discovery",
  "Molecular dynamics",
  "Free-energy perturbation",
  "AlphaFold3 · Boltz2",
  "Multi-omics",
  "Nextflow · Snakemake",
  "GPU / HPC",
  "Agentic scientific tooling",
  "Protein design",
  "Variant calling",
];

/** Infinite mono ticker between sections. Track is duplicated for the loop. */
const Marquee = () => (
  <div className="overflow-hidden border-y border-line py-5">
    <div className="flex w-max animate-marquee">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex" aria-hidden={copy === 1}>
          {ITEMS.map((item) => (
            <span
              key={item}
              className="whitespace-nowrap px-8 font-mono text-xs uppercase tracking-wide2 text-muted"
            >
              <span className="mr-8 text-accent">●</span>
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;

import React from "react";
import { SectionHead, Reveal } from "./Section";

const GROUPS = [
  {
    name: "Structure & simulation",
    items: [
      "AlphaFold2/3",
      "Boltz2",
      "RFdiffusion",
      "GROMACS",
      "OpenMM",
      "AutoDock-GPU",
      "Vina",
      "Glide",
      "Schrödinger",
      "FEP",
      "Metadynamics",
      "RDKit",
      "ChimeraX",
    ],
  },
  {
    name: "Genomics & omics",
    items: [
      "WES / WGS",
      "RNA-seq",
      "scRNA-seq",
      "ATAC-seq",
      "GATK",
      "BWA-MEM",
      "STAR",
      "VEP / ANNOVAR",
      "Multi-omics",
      "Immunoinformatics",
    ],
  },
  {
    name: "ML & agents",
    items: [
      "PyTorch",
      "JAX",
      "scikit-learn",
      "Hugging Face",
      "Claude Code",
      "ReAct agents",
      "Tool-calling",
      "Evals",
      "Dataset curation",
    ],
  },
  {
    name: "Infrastructure",
    items: [
      "Nextflow",
      "Snakemake",
      "Docker",
      "Singularity",
      "HPC / SLURM",
      "AWS",
      "CUDA",
      "CI/CD",
      "Next.js",
      "REST APIs",
      "R / Shiny",
      "Python",
    ],
  },
  {
    name: "Physics",
    items: [
      "DFT",
      "VASP",
      "SIESTA / TranSIESTA",
      "Electronic transport",
      "2D materials",
      "Quantum chemistry",
    ],
  },
];

const Skills = () => (
  <section className="px-12 pb-32 lg:px-8 lg:pb-20 sm:px-6">
    <SectionHead
      label="Toolkit"
      title="What I actually use."
      count={GROUPS.reduce((n, g) => n + g.items.length, 0)}
    />
    <div className="border-t border-line">
      {GROUPS.map((g, i) => (
        <Reveal key={g.name} delay={i * 0.05}>
          <div className="grid grid-cols-12 gap-8 border-b border-line py-10 lg:grid-cols-1 lg:gap-4">
            <p className="label col-span-3 lg:col-span-1">{g.name}</p>
            <ul className="col-span-9 flex flex-wrap gap-2 lg:col-span-1">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide2 text-dim transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;

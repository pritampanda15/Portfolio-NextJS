import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Marquee from "@/components/Marquee";
import { PageHero, SectionHead, Index, Reveal } from "@/components/Section";
import { GithubIcon, ArrowIcon } from "@/components/SocialIcons";

import proj1 from "../../public/images/projects/gridbox.png";
import proj2 from "../../public/images/projects/Structufy.png";
import proj3 from "../../public/images/projects/step.png";
import proj4 from "../../public/images/projects/gromacs.png";
import proj5 from "../../public/images/projects/siesta.png";
import proj6 from "../../public/images/projects/ngs.jpg";

const FramerImage = motion(Image);

/** Research artefacts with no screenshot — presented as text-first cards. */
const RESEARCH = [
  {
    title: "BioClaw",
    year: "2026",
    type: "Agentic tooling",
    summary:
      "Claude-powered ReAct agent exposing 17 bioinformatics tools through a CLI, REST API, and Next.js interface.",
    github: "https://github.com/pritampanda15",
  },
  {
    title: "Virtual-Cell IC50 Model",
    year: "2026",
    type: "Machine learning",
    summary:
      "Trained on 8.8M protein–ligand complexes (SAIR) to predict IC50 across CCLE and Human Protein Atlas cell lines.",
    github: "https://github.com/pritampanda15",
  },
  {
    title: "Automated FEP Pipeline",
    year: "2026",
    type: "Free energy",
    summary:
      "One-command FEP + MD + metadynamics workflow for protein–ligand binding free-energy prediction.",
    github: "https://github.com/pritampanda15",
  },
  {
    title: "nf-core/moleculardocking",
    year: "2026",
    type: "Pipelines",
    summary:
      "Production-grade Nextflow pipelines for virtual screening and molecular dynamics, built for reproducible HPC execution.",
    github: "https://github.com/pritampanda15",
  },
  {
    title: "PandaDock",
    year: "2025",
    type: "Docking",
    summary:
      "SE(3)-equivariant graph neural network docking platform reaching R > 0.8 against experimental binding affinities.",
    github: "https://github.com/pritampanda15/PandaDock",
  },
  {
    title: "PandaMap",
    year: "2025",
    type: "Visualization",
    summary:
      "Interactive protein–ligand visualization integrating 2D ligand representations with 3D docking output.",
    github: "https://github.com/pritampanda15",
  },
];

/** Deployed web tools, each with a screenshot. */
const TOOLS = [
  {
    type: "Drug design",
    title: "Grid-Box-Generator",
    summary:
      "Generate or define a grid box for AutoDock Vina and AutoDock4 — blind or targeted docking — from a Flask web app, with no MGLTools dependency.",
    img: proj1,
    link: "https://grid-box-generator-bcb8da462cd0.herokuapp.com",
    github: "https://github.com/pritampanda15/Grid-Box-Generator",
    featured: true,
  },
  {
    type: "Molecular dynamics",
    title: "Gromacs-Command-Finder",
    summary:
      "Search GROMACS-specific commands across topology, trajectory analysis, PME, and more.",
    img: proj4,
    link: "https://gromacs-command-finder-a9630d013893.herokuapp.com/",
    github: "https://github.com/pritampanda15/Gromacs-Command-Finder",
    featured: true,
  },
  {
    type: "Drug design",
    title: "Structify",
    summary: "Chemical structure format converter.",
    img: proj2,
    link: "https://structify-chemical-converter-f735c2cc4ea3.herokuapp.com",
    github:
      "https://github.com/pritampanda15/Structify-Chemical-Structure-Converter",
  },
  {
    type: "Molecular dynamics",
    title: "GROMACS-StepWizard",
    summary: "Guided, step-by-step GROMACS simulation setup.",
    img: proj3,
    link: "https://gromacs-stepwizard-7e3791398062.herokuapp.com",
    github: "https://github.com/pritampanda15/GROMACS-StepWizard",
  },
  {
    type: "Quantum physics",
    title: "Siesta",
    summary: "DFT relaxation and transport input templates.",
    img: proj5,
    link: "https://github.com/pritampanda15/Siesta/blob/master/relax.fdf",
    github: "https://github.com/pritampanda15/Siesta",
  },
  {
    type: "NGS",
    title: "WES Pipeline",
    summary: "Whole-exome sequencing variant-calling workflow.",
    img: proj6,
    link: "https://github.com/pritampanda15/NGS-Workflows/tree/main/WholeExomeSequencing-Pipeline-main",
    github: "https://github.com/pritampanda15/NGS-Workflows/tree/main",
  },
];

const FeaturedTool = ({ p }) => (
  <Reveal>
    <article className="wipe surface surface-hover group grid grid-cols-2 lg:grid-cols-1">
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="overflow-hidden border-r border-line lg:border-b lg:border-r-0"
      >
        <FramerImage
          src={p.img}
          alt={p.title}
          className="h-full w-full object-cover object-top opacity-90 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </a>
      <div className="flex flex-col justify-center p-12 lg:p-8">
        <p className="label">{p.type}</p>
        <a href={p.link} target="_blank" rel="noopener noreferrer">
          <h3 className="mt-6 font-mono text-3xl font-light tracking-tight text-ink transition-colors group-hover:text-accent lg:text-2xl">
            {p.title}
          </h3>
        </a>
        <p className="mt-5 text-sm font-light leading-relaxed text-muted">
          {p.summary}
        </p>
        <div className="mt-10 flex items-center gap-8">
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide2 text-accent transition-all hover:gap-4"
          >
            Visit
            <span className="h-3 w-3">
              <ArrowIcon />
            </span>
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.title} on GitHub`}
            className="h-5 w-5 text-muted transition-colors hover:text-accent"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </article>
  </Reveal>
);

const Tool = ({ p, i }) => (
  <Reveal delay={(i % 2) * 0.06}>
    <article className="wipe surface surface-hover group flex h-full flex-col">
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="overflow-hidden border-b border-line"
      >
        <FramerImage
          src={p.img}
          alt={p.title}
          className="h-56 w-full object-cover object-top opacity-90 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </a>
      <div className="flex flex-1 flex-col p-8">
        <p className="label">{p.type}</p>
        <a href={p.link} target="_blank" rel="noopener noreferrer">
          <h3 className="mt-4 font-mono text-xl font-light text-ink transition-colors group-hover:text-accent">
            {p.title}
          </h3>
        </a>
        <p className="mt-3 text-sm font-light leading-relaxed text-muted">
          {p.summary}
        </p>
        <div className="mt-auto flex items-center justify-between pt-8">
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-label text-accent hover:underline"
          >
            Visit →
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.title} on GitHub`}
            className="h-4 w-4 text-muted transition-colors hover:text-accent"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </article>
  </Reveal>
);

export default function Projects() {
  const featured = TOOLS.filter((t) => t.featured);
  const rest = TOOLS.filter((t) => !t.featured);

  return (
    <>
      <Head>
        <title>Projects — Pritam Kumar Panda</title>
        <meta
          name="description"
          content="Open-source bioinformatics and computational chemistry projects: docking platforms, FEP pipelines, Nextflow workflows, and agentic scientific tooling."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full">
        <PageHero
          label="Projects"
          title="Progress with"
          accent="passion."
          lede="Open-source tools for docking, dynamics, free-energy prediction, and reproducible pipelines — most of them built because the alternative didn't exist yet."
        />

        {/* RESEARCH SOFTWARE */}
        <section className="px-12 py-32 lg:px-8 lg:py-20 sm:px-6">
          <SectionHead
            label="Research software"
            title="Where the science lives."
            count={RESEARCH.length}
          />
          <div className="grid grid-cols-3 border-l border-line lg:grid-cols-2 sm:grid-cols-1">
            {RESEARCH.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 0.06}>
                <a
                  href={r.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wipe surface-hover group flex h-full flex-col border-b border-r border-line p-10 transition-colors lg:p-8"
                >
                  <div className="flex items-center justify-between">
                    <Index n={i + 1} />
                    <span className="label-muted">{r.year}</span>
                  </div>
                  <p className="label mt-8">{r.type}</p>
                  <h3 className="mt-3 font-mono text-2xl font-light text-ink transition-colors group-hover:text-accent">
                    {r.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                    {r.summary}
                  </p>
                  <span className="mt-auto pt-8 font-mono text-[11px] uppercase tracking-label text-muted transition-colors group-hover:text-accent">
                    Source →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WEB TOOLS */}
        <section className="px-12 pb-32 lg:px-8 lg:pb-20 sm:px-6">
          <SectionHead
            label="Web tools"
            title="Things you can click."
            count={TOOLS.length}
          />
          <div className="flex flex-col gap-8">
            {featured.map((p) => (
              <FeaturedTool key={p.title} p={p} />
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-1">
            {rest.map((p, i) => (
              <Tool key={p.title} p={p} i={i} />
            ))}
          </div>
        </section>

        <Marquee />
      </main>
    </>
  );
}

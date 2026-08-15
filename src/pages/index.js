import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import HeroCanvas from "@/components/HeroCanvas";
import Marquee from "@/components/Marquee";
import OptionalImage from "@/components/OptionalImage";
import { Label, SectionHead, Index, ArrowLink, Reveal } from "@/components/Section";

/** Staggered entrance shared by the hero elements. */
const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const STATS = [
  { n: "49", label: "h-index" },
  { n: "6,300+", label: "citations" },
  { n: "89", label: "Q1 publications" },
  { n: "1", label: "US patent" },
];

const FOCUS = [
  {
    title: "AI-driven drug discovery",
    text: "Screening billions of compounds against AlphaFold-derived receptor ensembles, with active-learning triage and ADMET/QSAR profiling to cut wet-lab burden.",
    tags: ["AlphaFold3", "Boltz2", "AutoDock-GPU", "RDKit"],
  },
  {
    title: "Atomistic simulation",
    text: "GPU-accelerated molecular dynamics and alchemical free-energy workflows that turn docking scores into binding affinities you can act on.",
    tags: ["GROMACS", "OpenMM", "FEP", "Metadynamics"],
  },
  {
    title: "Reproducible infrastructure",
    text: "Production Nextflow and Snakemake pipelines across HPC and cloud — multi-omics, variant calling, and virtual screening that run the same way twice.",
    tags: ["Nextflow", "SLURM", "Docker", "AWS"],
  },
  {
    title: "Agentic scientific tooling",
    text: "ReAct agents that drive real bioinformatics tools, with evals and failure-case curation instead of demo-grade prompt chains.",
    tags: ["Claude Code", "Tool-calling", "REST", "Next.js"],
  },
];

const News = ({ item, i }) => (
  <Reveal delay={(i % 3) * 0.05}>
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="wipe surface surface-hover group flex h-full flex-col"
    >
      {item.img && (
        <OptionalImage
          src={item.img}
          alt={item.title}
          wrapperClassName="overflow-hidden border-b border-line"
          className="h-44 w-full object-cover object-top opacity-90 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
        />
      )}
      <div className="flex flex-1 flex-col p-8">
      <div className="flex items-center justify-between">
        <Index n={i + 1} />
        <span className="label-muted">{item.time}</span>
      </div>
      <p className="label mt-8">{item.type}</p>
      <h3 className="mt-4 text-xl font-normal leading-snug text-ink transition-colors group-hover:text-accent">
        {item.title}
      </h3>
      <span className="mt-auto pt-8 font-mono text-[11px] uppercase tracking-label text-muted transition-colors group-hover:text-accent">
        Read →
      </span>
      </div>
    </a>
  </Reveal>
);

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then(setNews)
      .catch(() => setNews([]));
  }, []);

  return (
    <>
      <Head>
        <title>Pritam Kumar Panda — Computational Biophysics & Drug Discovery</title>
        <meta
          name="description"
          content="Dr. Pritam Kumar Panda — postdoctoral scholar at Stanford working on AI-driven drug discovery, molecular dynamics, protein design, and reproducible multi-omics infrastructure."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full">
        {/* HERO */}
        <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-12 pb-24 pt-40 lg:px-8 sm:px-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid"
            style={{
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse at 30% 50%, black 0%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 30% 50%, black 0%, transparent 70%)",
            }}
          />

          <div className="relative grid grid-cols-2 items-center gap-16 lg:grid-cols-1 lg:gap-12">
            <div>
              <motion.p {...rise(0.1)} className="label mb-8">
                Computational biophysics · Stanford Medicine
              </motion.p>
              <motion.h1
                {...rise(0.2)}
                className="mb-10 font-mono text-[clamp(44px,7.5vw,110px)] font-light leading-[0.98] tracking-[-0.04em]"
              >
                PRITAM
                <br />
                <em className="font-serif italic text-accent">Panda</em>
              </motion.h1>
              <motion.p
                {...rise(0.32)}
                className="max-w-xl text-lg font-light leading-relaxed text-dim sm:text-base"
              >
                I build the computational machinery behind new medicines — from
                quantum-scale physics to billion-compound screens to the
                pipelines that keep it all reproducible. Where atoms move, life
                evolves.
              </motion.p>
              <motion.div
                {...rise(0.44)}
                className="mt-12 flex flex-wrap items-center gap-4"
              >
                <a href="/CV.pdf" download className="btn">
                  Résumé
                </a>
                <a
                  href="https://profiles.stanford.edu/pritam-panda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Stanford profile
                </a>
                <Link href="/projects" className="btn-ghost">
                  Projects
                </Link>
              </motion.div>
            </div>

            {/* Canvas */}
            <motion.div
              {...rise(0.3)}
              className="relative h-[460px] w-full lg:h-[320px] sm:h-[260px]"
            >
              <HeroCanvas />
            </motion.div>
          </div>

          <div className="relative mt-20 flex items-end justify-between lg:mt-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-muted animate-pulseLine" />
              <span className="label-muted">Scroll</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="status-dot" />
              <span className="label-muted">Open to collaboration</span>
            </div>
          </div>
        </section>

        <Marquee />

        {/* PROFILE + STATS */}
        <section className="grid grid-cols-2 gap-24 px-12 py-32 lg:grid-cols-1 lg:gap-12 lg:px-8 lg:py-20 sm:px-6">
          <Reveal>
            <Label className="mb-8">The short version</Label>
            <h2 className="font-serif text-[clamp(30px,3.6vw,52px)] italic leading-tight">
              Quantum physics taught me rigour. Biology gave me a reason to use
              it.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-base font-light leading-loose text-dim">
              <p>
                I am a postdoctoral scholar in Anesthesiology, Perioperative &
                Pain Medicine at Stanford University School of Medicine, where I
                design battlefield-viable anesthetics using AI-driven protein
                design and high-throughput virtual screening.
              </p>
              <p>
                Before Stanford I built multi-omics infrastructure at the German
                Cancer Research Center, modelled antibody clones at Karolinska,
                and completed a PhD in physics at Uppsala bridging DFT-level
                material simulation with atomistic biology.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-4 gap-6 sm:grid-cols-2">
              {STATS.map((s) => (
                <div key={s.label} className="border-t border-line pt-6">
                  <p className="font-mono text-3xl font-light text-accent">
                    {s.n}
                  </p>
                  <p className="label-muted mt-2">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <ArrowLink href="/about">Full background</ArrowLink>
            </div>
          </Reveal>
        </section>

        {/* FOCUS AREAS */}
        <section className="px-12 pb-32 lg:px-8 lg:pb-20 sm:px-6">
          <SectionHead
            label="What I work on"
            title="Four things, done properly."
            count={FOCUS.length}
          />
          <div className="grid grid-cols-4 border-l border-line lg:grid-cols-2 sm:grid-cols-1">
            {FOCUS.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <article className="wipe surface-hover group h-full border-b border-r border-line p-10 transition-colors lg:p-8">
                  <Index n={i + 1} />
                  <h3 className="mt-8 text-xl font-normal leading-snug text-ink transition-colors group-hover:text-accent">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                    {f.text}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <li
                        key={t}
                        className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-wide2 text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* NEWS */}
        <section className="px-12 pb-32 lg:px-8 lg:pb-20 sm:px-6">
          <SectionHead
            label="Latest"
            title="Recent work & notes."
            count={news.length}
          />
          {news.length > 0 ? (
            <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
              {news.map((item, i) => (
                <News key={item.link} item={item} i={i} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center font-mono text-xs uppercase tracking-label text-muted">
              Loading…
            </p>
          )}
        </section>

        {/* CTA */}
        <section className="border-t border-line px-12 py-32 text-center lg:px-8 lg:py-20 sm:px-6">
          <Reveal>
            <h2 className="mx-auto max-w-4xl font-mono text-[clamp(30px,4.4vw,64px)] font-light leading-tight tracking-[-0.03em]">
              Got a molecule, a dataset, or a pipeline that{" "}
              <em className="font-serif italic text-accent">won&apos;t behave?</em>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-dim">
              I take on collaborations across drug discovery, structural biology,
              and reproducible research infrastructure.
            </p>
            <div className="mt-12">
              <a href="mailto:pritam@stanford.edu" className="btn">
                pritam@stanford.edu
              </a>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}

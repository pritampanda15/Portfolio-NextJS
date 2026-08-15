import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import speaking from "../../public/images/profile/pritam-speaking.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import Marquee from "@/components/Marquee";
import { PageHero, Label, Reveal, ArrowLink } from "@/components/Section";

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 3000 });
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [motionValue, value, inView]);

  useEffect(
    () =>
      spring.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [spring, value]
  );

  return <span ref={ref}>0</span>;
}

const COUNTERS = [
  { value: 100, suffix: "+", label: "Publications" },
  { value: 49, suffix: "", label: "h-index" },
  { value: 50, suffix: "+", label: "Projects shipped" },
  { value: 7, suffix: "+", label: "Years of research" },
];

const RECOGNITION = [
  "Elected Member, Sigma Xi",
  "Nextflow Ambassador",
  "First Prize — Best Basic Science Abstract, Stanford (2026)",
  "US patent WO2023217787",
  "100+ peer reviews across 30+ journals",
  "Invited speaker, 5+ international summits",
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — Pritam Kumar Panda</title>
        <meta
          name="description"
          content="The academic and research background of Dr. Pritam Kumar Panda — computational biophysics, drug discovery, and reproducible bioinformatics infrastructure."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full">
        <PageHero
          label="About"
          title="Passion fuels"
          accent="purpose."
          lede="Bioinformatician and computational physicist working at the point where quantum-scale simulation, structural biology, and machine learning meet drug discovery."
        />

        {/* BIO + PORTRAIT */}
        <section className="grid grid-cols-12 gap-16 px-12 py-32 lg:grid-cols-1 lg:gap-12 lg:px-8 lg:py-20 sm:px-6">
          <Reveal className="col-span-7 lg:col-span-1">
            <Label className="mb-8">Biography</Label>
            <div className="space-y-6 text-base font-light leading-loose text-dim">
              <p>
                I&apos;m <strong className="font-normal text-ink">Pritam</strong>{" "}
                — a bioinformatician and researcher specializing in drug design,
                molecular modelling, AI-driven protein design, NGS, multi-omics,
                and workflow management. Originally from Odisha, India, now based
                in the Bay Area.
              </p>
              <p>
                I hold a PhD in Physics from Uppsala University, specializing in
                Atomic, Molecular and Condensed Matter Physics, where my research
                bridged quantum and biological phenomena — culminating in
                GENOME2QUNOME, a framework for interfacing molecules with
                nanomaterials.
              </p>
              <p>
                Today I&apos;m a Postdoctoral Scholar in the Department of
                Anesthesiology, Perioperative and Pain Medicine at{" "}
                <strong className="font-normal text-ink">
                  Stanford University School of Medicine
                </strong>
                , designing novel anesthetics suited to battlefield conditions.
                The work combines AI-driven protein design with high-throughput
                virtual screening to compress the discovery timeline.
              </p>
              <p>
                Whether the input is a genomic dataset, a protein structure, or a
                pipeline nobody can reproduce, the commitment is the same:
                analytical precision and data you can trust.
              </p>
            </div>
            <div className="mt-10">
              <ArrowLink href="/CV.pdf" external>
                Download résumé
              </ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-5 lg:col-span-1">
            <figure className="border border-line p-3">
              <Image
                src={speaking}
                alt="Pritam Kumar Panda presenting at the Stanford Anesthesiology awards symposium"
                className="h-auto w-full grayscale transition-all duration-700 hover:grayscale-0"
                sizes="(max-width: 1023px) 100vw, 40vw"
                priority
              />
              <figcaption className="label-muted mt-3 px-1">
                Stanford Anesthesiology research symposium, June 2026
              </figcaption>
            </figure>
            <div className="mt-6 flex items-center gap-2">
              <span className="status-dot" />
              <span className="label-muted">Sunnyvale, California</span>
            </div>
          </Reveal>
        </section>

        {/* AWARD */}
        <section className="grid grid-cols-12 gap-16 border-t border-line px-12 pb-32 pt-24 lg:grid-cols-1 lg:gap-6 lg:px-8 lg:pb-20 sm:px-6">
          <Reveal className="col-span-4 lg:col-span-1">
            <Label className="mb-6">Recent honour</Label>
            <h2 className="font-serif text-[clamp(26px,2.8vw,40px)] italic leading-tight">
              First prize, Best Basic Science Abstract.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-7 col-start-6 lg:col-span-1 lg:col-start-1">
            <p className="max-w-2xl text-base font-light leading-relaxed text-dim">
              Awarded a Research Award for Best Basic Science Abstract by the
              Department of Anesthesiology, Perioperative and Pain Medicine at
              Stanford University School of Medicine, for the poster presentation
              on AI-driven anesthetic design — June 1, 2026.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <span className="status-dot" />
              <span className="label-muted">
                Stanford University School of Medicine
              </span>
            </div>
          </Reveal>
        </section>

        {/* COUNTERS */}
        <section className="grid grid-cols-4 border-y border-line lg:grid-cols-2">
          {COUNTERS.map((c) => (
            <div
              key={c.label}
              className="border-r border-line px-12 py-14 last:border-r-0 lg:px-8 lg:py-10 sm:px-6"
            >
              <p className="font-mono text-5xl font-light text-accent sm:text-4xl">
                <AnimatedNumber value={c.value} />
                {c.suffix}
              </p>
              <p className="label-muted mt-4">{c.label}</p>
            </div>
          ))}
        </section>

        <div className="py-32 lg:py-20">
          <Skills />
          <Experience />
          <Education />

          {/* RECOGNITION */}
          <section className="px-12 lg:px-8 sm:px-6">
            <Reveal>
              <Label className="mb-8">Recognition</Label>
              <ul className="grid grid-cols-3 gap-px border border-line bg-line lg:grid-cols-2 sm:grid-cols-1">
                {RECOGNITION.map((r) => (
                  <li
                    key={r}
                    className="bg-bg px-8 py-10 text-sm font-light leading-relaxed text-dim transition-colors hover:bg-elevated hover:text-accent"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        </div>

        <Marquee />
      </main>
    </>
  );
}

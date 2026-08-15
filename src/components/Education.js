import React from "react";
import { SectionHead, Index, Reveal } from "./Section";

const DEGREES = [
  {
    type: "PhD, Physics",
    focus: "Atomic, Molecular & Condensed Matter Physics",
    time: "2018 — 2023",
    place: "Uppsala University, Sweden",
    thesis: "GENOME2QUNOME: Interfacing Molecules with Nanomaterials",
    link: "http://uu.diva-portal.org/smash/get/diva2:1736122/FULLTEXT01.pdf",
  },
  {
    type: "M.Tech, Bioinformatics",
    focus: "Systems genetics & neuroimaging biomarkers",
    time: "2014 — 2016",
    place: "D.Y. Patil University, Navi Mumbai, India",
    thesis:
      "Systems Genetics and Magnetic Resonance Spectroscopy Measurable Biomarkers in Neurodegenerative Diseases",
    link: "https://drive.google.com/file/d/1wnSvo_kik5OELPsv2ymHKcpBeiFyAfpF/view",
  },
  {
    type: "M.Sc, Bioinformatics",
    focus: "Structural bioinformatics",
    time: "2012 — 2014",
    place: "Utkal University, Bhubaneswar, India",
    thesis:
      "Mutational Analysis and Structural Study of Optineurin (OPTN) in Glaucoma: An In Silico Approach",
    link: "https://www.researchgate.net/publication/274896591_Mutational_Analysis_and_Structural_study_of_Optineurin_OPTN_in_GlaucomaAn_Insilco_approach",
  },
  {
    type: "B.Sc, Bioinformatics",
    focus: "Molecular modelling, drug design, biophysics",
    time: "2009 — 2012",
    place: "Utkal University, Bhubaneswar, India",
  },
];

const Education = () => (
  <section className="px-12 pb-32 lg:px-8 lg:pb-20 sm:px-6">
    <SectionHead
      label="Education"
      title="Physics, then biology."
      count={DEGREES.length}
    />
    <div className="grid grid-cols-2 border-l border-line lg:grid-cols-1">
      {DEGREES.map((d, i) => (
        <Reveal key={d.type} delay={(i % 2) * 0.06}>
          <article className="wipe surface-hover group h-full border-b border-r border-line p-10 transition-colors lg:p-8">
            <div className="flex items-center justify-between">
              <Index n={i + 1} />
              <span className="label-muted">{d.time}</span>
            </div>
            <h3 className="mt-8 text-xl font-normal text-ink transition-colors group-hover:text-accent">
              {d.type}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-wide2 text-accent">
              {d.place}
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted">
              {d.focus}
            </p>
            {d.thesis && (
              <div className="mt-8 border-t border-line pt-6">
                <p className="label-muted mb-2">Thesis</p>
                <a
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light leading-relaxed text-dim underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {d.thesis}
                </a>
              </div>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Education;

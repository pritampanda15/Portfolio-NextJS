import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Marquee from "@/components/Marquee";
import { PageHero, SectionHead, Reveal, Label } from "@/components/Section";
import { GithubIcon, ArrowIcon } from "@/components/SocialIcons";

import proj1 from "../../public/images/youtube/nvidia.png";
import proj2 from "../../public/images/youtube/autodock.png";
import proj3 from "../../public/images/youtube/MDsimulation2.png";
import proj4 from "../../public/images/youtube/playlist1.png";
import proj5 from "../../public/images/youtube/playlist2.png";
import proj6 from "../../public/images/youtube/playlist3.png";
import proj7 from "../../public/images/youtube/playlist4.png";
import proj8 from "../../public/images/youtube/playlist5.png";
import proj9 from "../../public/images/youtube/playlist6.png";

const FramerImage = motion(Image);

const TUTORIALS = [
  {
    type: "Drug discovery",
    title: "Nvidia Generative AI for Docking & Virtual Screening",
    summary:
      "NVIDIA BioNeMo microservices enable a new generative screening paradigm. DiffDock is a diffusion generative model for blind molecular docking.",
    img: proj1,
    link: "https://youtu.be/x__K01Ei_3s?si=xU_7PAX_pzpiAEPg",
    github: "https://github.com/gcorso/DiffDock",
  },
  {
    type: "Drug discovery",
    title: "Molecular Docking for Beginners — full AutoDock tutorial",
    summary:
      "An introduction to docking using the AutoDock suite, from preparation through to scoring.",
    img: proj2,
    link: "https://youtu.be/b2XmnCNwI_4?si=aXA_sbOGEpkpoA9o",
    github: "https://github.com/pritampanda15/Drug-Designing",
  },
  {
    type: "Molecular dynamics",
    title: "MD Simulation of Protein–Ligand systems using GROMACS",
    summary:
      "Focused on the issues specific to handling the ligand, assuming familiarity with basic GROMACS operations and topology contents.",
    img: proj3,
    link: "https://youtu.be/VJOmX9ik9RA?si=9kpoTNco2jR3xfNz",
    github: "https://github.com/pritampanda15/Molecular-Dynamics",
  },
];

/**
 * Most recent uploads, newest first. Thumbnails come straight from YouTube's
 * image CDN, so adding a video here needs only its ID — no asset to commit.
 */
const LATEST = [
  {
    id: "QtHLpzLey7A",
    title: "Nanoparticle Docking using AutoDock4 — Gold Nanoparticle case study",
    type: "Docking",
    length: "11:26",
    views: "1.3K",
  },
  {
    id: "xHNDuLBEnKk",
    title:
      "Protein Preparation for GROMACS — forcefield setup, ligand extraction, no more errors",
    type: "Molecular dynamics",
    length: "10:34",
    views: "1.7K",
  },
  {
    id: "jkmVjmuqLWk",
    title: "Design Ligands Easily — R-Group Designer & 2D/3D QSAR library",
    type: "Drug design",
    length: "6:35",
    views: "963",
  },
  {
    id: "6P5JZINJ4pg",
    title: "Spatial Transcriptomics Explained",
    type: "Omics",
    length: "25:41",
    views: "1.2K",
  },
  {
    id: "Guphxo3kG-c",
    title: "Building an End-to-End ML Pipeline for RNA-seq Data",
    type: "Machine learning",
    length: "28:22",
    views: "1.8K",
  },
  {
    id: "3NazyWlR1Eo",
    title: "Ligand-Based Pharmacophore Modeling using RDKit",
    type: "CADD",
    length: "18:18",
    views: "1.9K",
  },
  {
    id: "l5UDkMN3Lho",
    title: "Predicting ADMET Properties with RDKit",
    type: "CADD",
    length: "17:34",
    views: "1.3K",
  },
  {
    id: "0o6_TTWeABo",
    title: "Zinc Metalloprotein Docking using AutoDock4Zn",
    type: "Docking",
    length: "23:24",
    views: "2.4K",
  },
  {
    id: "BC8r-xb9BpA",
    title:
      "Machine Learning on QSAR Data — XGBoost, LightGBM, CatBoost, TabNet & more",
    type: "Machine learning",
    length: "48:24",
    views: "1.6K",
  },
  {
    id: "kuCNSERCIfc",
    title: "Single-Cell RNA-Seq in 30 Minutes with Scanpy, UV & Polars",
    type: "Single cell",
    length: "23:02",
    views: "1K",
  },
  {
    id: "RMJTOsNO2rE",
    title: "Protein–Protein Docking in Minutes — ClusPro 2.0 & PandaProt",
    type: "Docking",
    length: "19:23",
    views: "3.2K",
  },
  {
    id: "ud56Z9-WBkI",
    title: "HOMO-LUMO Analysis — the quantum chemistry trick big pharma uses",
    type: "Quantum chemistry",
    length: "19:53",
    views: "818",
  },
];

const PLAYLISTS = [
  {
    type: "Drug design",
    title: "Molecular Docking",
    img: proj4,
    link: "https://www.youtube.com/watch?v=0o6_TTWeABo&list=PLLqKUt0cCFZ6qO-pIaZDsAkEqn9myVKng",
    github: "https://github.com/pritampanda15/Drug-Designing",
  },
  {
    type: "Molecular dynamics",
    title: "MD Simulation",
    img: proj5,
    link: "https://www.youtube.com/watch?v=xHNDuLBEnKk&list=PLLqKUt0cCFZ4u4SdJ27HKpSn1XxeNYC9I",
    github: "https://github.com/pritampanda15/Molecular-Dynamics",
  },
  {
    type: "NGS",
    title: "Multiomics",
    img: proj6,
    link: "https://www.youtube.com/watch?v=6P5JZINJ4pg&list=PLLqKUt0cCFZ7pMfqmcTvcc7EMlaVvHIvO",
    github: "https://github.com/pritampanda15/NGS-Workflows",
  },
  {
    type: "Machine learning",
    title: "Machine Learning",
    img: proj7,
    link: "https://www.youtube.com/watch?v=Guphxo3kG-c&list=PLLqKUt0cCFZ5ZLw7Jb7XAR8sPz86We-hO",
    github: "https://github.com/pritampanda15/Omixium_YouTube_Channel",
  },
  {
    type: "Proteomics",
    title: "R Packages",
    img: proj8,
    link: "https://www.youtube.com/watch?v=coXAwhlgcDA&list=PLLqKUt0cCFZ6N22ccmW4T__ZBCPFyVHRr",
    github: "https://github.com/pritampanda15/Proteomics",
  },
  {
    type: "Quantum physics",
    title: "DFT",
    img: proj9,
    link: "https://www.youtube.com/watch?v=tJpa8PRcs0Q&list=PLLqKUt0cCFZ5ulEYjms3vrVaafJ_dXHZ8",
    github: "https://github.com/pritampanda15/Siesta",
  },
];

/** Play affordance drawn over the thumbnail. */
const PlayBadge = () => (
  <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-accent/50 bg-bg/70 backdrop-blur-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
    <span className="ml-1 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-accent transition-colors group-hover:border-l-bg" />
  </span>
);

export default function YouTube() {
  return (
    <>
      <Head>
        <title>YouTube — Pritam Kumar Panda</title>
        <meta
          name="description"
          content="Step-by-step bioinformatics tutorials: molecular docking, MD simulation, multi-omics, machine learning, and DFT."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full">
        <PageHero
          label="YouTube"
          title="Imagination trumps"
          accent="knowledge."
          lede="Step-by-step tutorials on the tools and workflows I use daily — docking, dynamics, multi-omics, and quantum chemistry. Built for beginners and specialists alike."
        />

        <section className="flex items-center justify-between border-b border-line px-12 py-12 lg:flex-col lg:items-start lg:gap-8 lg:px-8 sm:px-6">
          <div>
            <Label className="mb-4">@Omixium_ai</Label>
            <p className="max-w-2xl text-base font-light leading-relaxed text-dim">
              Fuel your curiosity and master the craft of data science in
              biology. New tutorials on tools, techniques, and full workflows.
            </p>
            <div className="mt-8 flex items-center gap-10">
              <div>
                <p className="font-mono text-2xl font-light text-accent">
                  2.95K
                </p>
                <p className="label-muted mt-1">Subscribers</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-light text-accent">81</p>
                <p className="label-muted mt-1">Videos</p>
              </div>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@Omixium_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn shrink-0"
          >
            Subscribe
          </a>
        </section>

        {/* LATEST UPLOADS */}
        <section className="px-12 pt-32 lg:px-8 lg:pt-20 sm:px-6">
          <SectionHead
            label="Latest uploads"
            title="Fresh off the channel."
            count={LATEST.length}
          />
          <div className="grid grid-cols-4 gap-8 lg:grid-cols-2 sm:grid-cols-1">
            {LATEST.map((v, i) => (
              <Reveal key={v.id} delay={(i % 4) * 0.05}>
                <a
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wipe surface surface-hover group flex h-full flex-col"
                >
                  <div className="relative overflow-hidden border-b border-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.title}
                      loading="lazy"
                      className="h-40 w-full object-cover opacity-90 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <PlayBadge />
                    <span className="absolute bottom-2 right-2 bg-bg/85 px-2 py-0.5 font-mono text-[10px] text-dim">
                      {v.length}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <p className="label">{v.type}</p>
                      <span className="label-muted">{v.views} views</span>
                    </div>
                    <h3 className="mt-4 text-base font-normal leading-snug text-ink transition-colors group-hover:text-accent">
                      {v.title}
                    </h3>
                    <span className="mt-auto pt-6 font-mono text-[11px] uppercase tracking-label text-muted transition-colors group-hover:text-accent">
                      Watch →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FEATURED TUTORIALS */}
        <section className="px-12 pb-32 pt-32 lg:px-8 lg:pb-20 lg:pt-20 sm:px-6">
          <SectionHead
            label="Tutorials"
            title="Start here."
            count={TUTORIALS.length}
          />
          <div className="flex flex-col gap-8">
            {TUTORIALS.map((v) => (
              <Reveal key={v.link}>
                <article className="wipe surface surface-hover group grid grid-cols-2 lg:grid-cols-1">
                  <a
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden border-r border-line lg:border-b lg:border-r-0"
                  >
                    <FramerImage
                      src={v.img}
                      alt={v.title}
                      className="h-full w-full object-cover object-top opacity-90 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      sizes="(max-width: 1023px) 100vw, 50vw"
                    />
                    <PlayBadge />
                  </a>
                  <div className="flex flex-col justify-center p-12 lg:p-8">
                    <p className="label">{v.type}</p>
                    <a href={v.link} target="_blank" rel="noopener noreferrer">
                      <h3 className="mt-6 font-mono text-2xl font-light leading-snug tracking-tight text-ink transition-colors group-hover:text-accent lg:text-xl">
                        {v.title}
                      </h3>
                    </a>
                    <p className="mt-5 text-sm font-light leading-relaxed text-muted">
                      {v.summary}
                    </p>
                    <div className="mt-10 flex items-center gap-8">
                      <a
                        href={v.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide2 text-accent transition-all hover:gap-4"
                      >
                        Watch
                        <span className="h-3 w-3">
                          <ArrowIcon />
                        </span>
                      </a>
                      <a
                        href={v.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${v.title} code`}
                        className="h-5 w-5 text-muted transition-colors hover:text-accent"
                      >
                        <GithubIcon />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PLAYLISTS */}
        <section className="px-12 pb-32 lg:px-8 lg:pb-20 sm:px-6">
          <SectionHead
            label="Playlists"
            title="Go deeper."
            count={PLAYLISTS.length}
          />
          <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
            {PLAYLISTS.map((v, i) => (
              <Reveal key={v.link} delay={(i % 3) * 0.06}>
                <article className="wipe surface surface-hover group flex h-full flex-col">
                  <a
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden border-b border-line"
                  >
                    <FramerImage
                      src={v.img}
                      alt={v.title}
                      className="h-48 w-full object-cover object-top opacity-90 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.4 }}
                      sizes="(max-width: 1023px) 100vw, 33vw"
                    />
                    <PlayBadge />
                  </a>
                  <div className="flex flex-1 flex-col p-8">
                    <p className="label">{v.type}</p>
                    <a href={v.link} target="_blank" rel="noopener noreferrer">
                      <h3 className="mt-4 font-mono text-xl font-light text-ink transition-colors group-hover:text-accent">
                        {v.title}
                      </h3>
                    </a>
                    <div className="mt-auto flex items-center justify-between pt-8">
                      <span className="font-mono text-[11px] uppercase tracking-label text-muted transition-colors group-hover:text-accent">
                        Playlist →
                      </span>
                      <a
                        href={v.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${v.title} code`}
                        className="h-4 w-4 text-muted transition-colors hover:text-accent"
                      >
                        <GithubIcon />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Marquee />
      </main>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Marquee from "@/components/Marquee";
import { PageHero, SectionHead, Reveal } from "@/components/Section";

import blog1 from "../../public/images/blogs/ambassador.png";
import blog2 from "../../public/images/blogs/blog.png";
import blog3 from "../../public/images/blogs/skin.jpeg";
import blog4 from "../../public/images/blogs/global.png";
import blog5 from "../../public/images/blogs/otv.png";
import blog6 from "../../public/images/blogs/bioinfoskills.png";
import blog7 from "../../public/images/blogs/googlescholar.png";

const FramerImage = motion(Image);

const WRITING = [
  {
    img: blog6,
    title: "Bioinformatics skills required in 2024",
    source: "Medium",
    summary:
      "I stumbled on a job description listing what a company actually wanted. Here's the list — and why I think it generalises to any bioinformatician looking for work.",
    link: "https://medium.com/@pritampkp15/bioinformatics-skills-required-in-2024-170cc08e37e7",
  },
  {
    img: blog2,
    title: "My Journey with Nextflow: From Exploration to Automation",
    source: "Nextflow Blog",
    summary:
      "Nextflow changed how I approach bioinformatics workflows. It has become essential for handling massive genomic datasets while keeping runs repeatable and scalable.",
    link: "https://seqera.io/blog/journey-from-exploration-to-automation/",
  },
  {
    img: blog3,
    title: "How Do Chemical Peels Disrupt or Enhance the Skin Microbiome?",
    source: "Sequential — The Skin Microbiome Testing Co.",
    summary:
      "Chemical peels exfoliate the top layers of skin to drive cell turnover. Recent research has begun to explore what that does to the skin microbiome.",
    link: "https://www.sequential.bio/post/how-do-chemical-peels-disrupt-or-enhance-the-skin-microbiome",
  },
  {
    img: blog7,
    title: "My h-index just hit the big 40",
    source: "Google Scholar",
    summary:
      "A shoutout to my collaborators, curious readers, and everyone who thought the work was worth citing. Here's to more ideas and more collaboration.",
    link: "https://scholar.google.com/citations?user=H2ggrzQAAAAJ&hl=en",
  },
];

const PRESS = [
  {
    img: blog4,
    title:
      "The defiant dreamer: a bioinformatics expert's journey from Odisha to Europe",
    source: "Global Indian",
    summary:
      "Born in Odisha, Pritam overcame a difficult childhood after losing his father early and being raised by his mother, a school teacher. Defying financial constraints and advice to avoid science, he pursued bioinformatics.",
    link: "https://www.globalindian.com/story/global-indian-exclusive/the-defiant-dreamer-the-bioinformatics-experts-journey-from-odisha-to-europe/",
  },
  {
    img: blog5,
    title: "Khola Katha — in conversation with Dr Pritam Panda",
    source: "OTV Odisha",
    summary:
      "A chat show that probes its guests on the facts and rumours about themselves, bringing the truth forward for the audience.",
    link: "https://www.youtube.com/watch?v=PDBdjyWd-8s&t=519s",
  },
  {
    img: blog1,
    title: "Nextflow Ambassador",
    source: "Seqera",
    summary:
      "Promoting the adoption of Nextflow for scalable, reproducible analysis pipelines, and collaborating with the community on best practice in workflow management.",
    link: "https://www.nextflow.io/our_ambassadors.html",
  },
];

const Card = ({ p, i }) => (
  <Reveal delay={(i % 2) * 0.06}>
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="wipe surface surface-hover group flex h-full flex-col"
    >
      <div className="overflow-hidden border-b border-line">
        <FramerImage
          src={p.img}
          alt={p.title}
          className="h-56 w-full object-cover object-top opacity-90 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p className="label">{p.source}</p>
        <h3 className="mt-4 text-xl font-normal leading-snug text-ink transition-colors group-hover:text-accent">
          {p.title}
        </h3>
        <p className="mt-4 text-sm font-light leading-relaxed text-muted">
          {p.summary}
        </p>
        <span className="mt-auto pt-8 font-mono text-[11px] uppercase tracking-label text-muted transition-colors group-hover:text-accent">
          Read →
        </span>
      </div>
    </a>
  </Reveal>
);

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Writing & Press — Pritam Kumar Panda</title>
        <meta
          name="description"
          content="Essays, blog posts, and press coverage — bioinformatics careers, Nextflow, the skin microbiome, and the road from Odisha to Stanford."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full">
        <PageHero
          label="Writing & press"
          title="Words can change"
          accent="the world."
          lede="Essays on the craft of computational biology, plus the occasional interview about how a kid from Odisha ended up simulating anesthetics at Stanford."
        />

        <section className="px-12 py-32 lg:px-8 lg:py-20 sm:px-6">
          <SectionHead
            label="Writing"
            title="Things I wrote down."
            count={WRITING.length}
          />
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
            {WRITING.map((p, i) => (
              <Card key={p.link} p={p} i={i} />
            ))}
          </div>
        </section>

        <section className="px-12 pb-32 lg:px-8 lg:pb-20 sm:px-6">
          <SectionHead
            label="Press"
            title="Things others wrote."
            count={PRESS.length}
          />
          <div className="grid grid-cols-3 gap-8 lg:grid-cols-1">
            {PRESS.map((p, i) => (
              <Card key={p.link} p={p} i={i} />
            ))}
          </div>
        </section>

        <Marquee />
      </main>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Marquee from "@/components/Marquee";
import { PageHero, SectionHead, Index, Reveal, Label } from "@/components/Section";

import blog1 from "../../public/images/articles/science.png";
import blog2 from "../../public/images/articles/nature.png";

const FramerImage = motion(Image);

const METRICS = [
  { n: "49", label: "h-index" },
  { n: "6,300+", label: "citations" },
  { n: "89", label: "Q1 publications" },
  { n: "30+", label: "journals reviewed for" },
];

const FEATURED = [
  {
    img: blog1,
    title:
      "Structure-based drug designing and immunoinformatics approach for SARS-CoV-2",
    journal: "Science Advances (AAAS)",
    summary:
      "After virtually screening 640 existing drug compounds, PC786 was shown to potently target several SARS-CoV-2 receptors, making it a candidate to fight COVID-19.",
    link: "https://www.science.org/doi/full/10.1126/sciadv.abb8097",
  },
  {
    img: blog2,
    title:
      "Clinical evolution, genetic landscape and trajectories of clonal hematopoiesis in SAMD9/SAMD9L syndromes",
    journal: "Nature Medicine",
    summary:
      "Genetic rescue — a 'natural gene therapy' — suggests a possible new approach to pediatric MDS. Single-cell DNA analysis identified a battle of clones in patients whose cells may self-correct.",
    link: "https://www.nature.com/articles/s41591-021-01511-6",
  },
];

const ARTICLES = [
  {
    title:
      "A novel professional-use synergistic peel technology to reduce visible hyperpigmentation on face",
    journal: "Experimental Dermatology (Wiley)",
    link: "https://onlinelibrary.wiley.com/doi/full/10.1111/exd.15069",
  },
  {
    title:
      "Degradation of Alzheimer's Amyloid-β by a Catalytically Inactive Insulin-Degrading Enzyme",
    journal: "Journal of Molecular Biology",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0022283621001947?via%3Dihub",
  },
  {
    title:
      "Azacitidine is effective for targeting leukemia-initiating cells in juvenile myelomonocytic leukemia",
    journal: "Leukemia (Nature)",
    link: "https://www.nature.com/articles/s41375-018-0343-2",
  },
  {
    title:
      "Investigation of the Factors That Dictate the Preferred Orientation of Lexitropsins in the Minor Groove of DNA",
    journal: "Journal of Medicinal Chemistry",
    link: "https://pubs.acs.org/doi/10.1021/acs.jmedchem.9b01534",
  },
  {
    title:
      "Nanocarrier vaccine therapeutics for global infectious and chronic diseases",
    journal: "Materials Today",
    link: "https://www.sciencedirect.com/science/article/pii/S1369702123001128?via%3Dihub",
  },
  {
    title:
      "Putative targeting by BX795 causes decrease in protein kinase C protein levels and inhibition of HSV1 infection",
    journal: "Antiviral Research",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0166354222002236?via%3Dihub",
  },
  {
    title:
      "Antibodies Against Phosphorylcholine Among 60-Year-Olds: Clinical Role and Simulated Interactions",
    journal: "Frontiers in Cardiovascular Medicine",
    link: "https://www.frontiersin.org/journals/cardiovascular-medicine/articles/10.3389/fcvm.2022.809007/full",
  },
  {
    title:
      "Nanocarrier cancer therapeutics with functional stimuli-responsive mechanisms",
    journal: "Journal of Nanobiotechnology",
    link: "https://jnanobiotechnology.biomedcentral.com/articles/10.1186/s12951-022-01364-2",
  },
  {
    title:
      "Dynamical modeling of miR-34a, miR-449a, and miR-16 reveals numerous DDR signaling pathways regulating senescence, autophagy, and apoptosis in HeLa cells",
    journal: "Scientific Reports",
    link: "https://www.nature.com/articles/s41598-022-08900-y",
  },
  {
    title:
      "Plasmodium falciparum HSP40 protein eCiJp traffics to the erythrocyte cytoskeleton and interacts with the human HSP70 chaperone HSPA1",
    journal: "FEBS Letters",
    link: "https://febs.onlinelibrary.wiley.com/doi/10.1002/1873-3468.14255",
  },
  {
    title:
      "Molecular nanoinformatics approach assessing the biocompatibility of biogenic silver nanoparticles with channelized intrinsic steatosis and apoptosis",
    journal: "Green Chemistry",
    link: "https://pubs.rsc.org/en/content/articlelanding/2022/gc/d1gc04103g",
  },
  {
    title:
      "Effects of Atorvastatin on T-Cell Activation and Apoptosis in Systemic Lupus Erythematosus",
    journal: "ACR Open Rheumatology",
    link: "https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr2.11305",
  },
  {
    title:
      "The mechanism behind flaring/triggering of autoimmunity disorders associated with COVID-19",
    journal: "Autoimmunity Reviews",
    link: "https://www.sciencedirect.com/science/article/pii/S1568997221001841?via%3Dihub",
  },
];

export default function Publications() {
  return (
    <>
      <Head>
        <title>Publications — Pritam Kumar Panda</title>
        <meta
          name="description"
          content="Peer-reviewed publications by Dr. Pritam Kumar Panda across Science Advances, Nature Medicine, Leukemia, and more."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full">
        <PageHero
          label="Publications"
          title="The written"
          accent="record."
          lede="Peer-reviewed work spanning structure-based drug design, clinical genomics, immunoinformatics, and nanomaterials."
        />

        {/* METRICS */}
        <section className="grid grid-cols-4 border-b border-line lg:grid-cols-2">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="border-r border-line px-12 py-14 last:border-r-0 lg:px-8 lg:py-10 sm:px-6"
            >
              <p className="font-mono text-4xl font-light text-accent sm:text-3xl">
                {m.n}
              </p>
              <p className="label-muted mt-4">{m.label}</p>
            </div>
          ))}
        </section>

        <section className="px-12 py-32 lg:px-8 lg:py-20 sm:px-6">
          <Reveal className="mb-16 flex items-end justify-between lg:flex-col lg:items-start lg:gap-6">
            <div>
              <Label className="mb-5">Full index</Label>
              <h2 className="max-w-2xl font-serif text-[clamp(26px,3.2vw,44px)] italic leading-tight">
                The complete list lives on Google Scholar.
              </h2>
            </div>
            <a
              href="https://scholar.google.com/citations?user=H2ggrzQAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn shrink-0"
            >
              Google Scholar
            </a>
          </Reveal>

          {/* FEATURED */}
          <SectionHead
            label="Selected"
            title="Two that mattered most."
            count={FEATURED.length}
            className="mb-0"
          />
          <div className="grid grid-cols-2 gap-8 pt-12 lg:grid-cols-1">
            {FEATURED.map((a) => (
              <Reveal key={a.link}>
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wipe surface surface-hover group flex h-full flex-col"
                >
                  <div className="overflow-hidden border-b border-line">
                    <FramerImage
                      src={a.img}
                      alt={a.title}
                      className="h-64 w-full object-cover object-top opacity-90 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      sizes="(max-width: 1023px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-10 lg:p-8">
                    <p className="label">{a.journal}</p>
                    <h3 className="mt-4 text-xl font-normal leading-snug text-ink transition-colors group-hover:text-accent">
                      {a.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                      {a.summary}
                    </p>
                    <span className="mt-auto pt-8 font-mono text-[11px] uppercase tracking-label text-muted transition-colors group-hover:text-accent">
                      Read paper →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ALL ARTICLES */}
        <section className="px-12 pb-32 lg:px-8 lg:pb-20 sm:px-6">
          <SectionHead
            label="Also published in"
            title="Selected further reading."
            count={ARTICLES.length}
          />
          <ul className="border-t border-line">
            {ARTICLES.map((a, i) => (
              <li key={a.link}>
                <Reveal>
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wipe surface-hover group grid grid-cols-12 items-baseline gap-8 border-b border-line px-2 py-8 transition-colors lg:grid-cols-1 lg:gap-2"
                  >
                    <div className="col-span-1">
                      <Index n={i + 1} />
                    </div>
                    <h3 className="col-span-8 text-base font-light leading-relaxed text-dim transition-colors group-hover:text-accent lg:col-span-1">
                      {a.title}
                    </h3>
                    <p className="label-muted col-span-3 lg:col-span-1">
                      {a.journal}
                    </p>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <Marquee />
      </main>
    </>
  );
}

import React from "react";
import { SectionHead, Index, Reveal } from "./Section";

const ROLES = [
  {
    position: "Postdoctoral Scholar",
    company: "Stanford University",
    companyLink: "https://profiles.stanford.edu/pritam-panda",
    time: "Jan 2025 — Present",
    address: "California, USA",
    work: "Advanced a DoD/DARPA anesthesia program to Phase II clinical trials by architecting an AI-driven drug discovery platform that screened 2.5B small molecules and generated 100,000+ AlphaFold-based receptor conformations. Cut experimental candidate testing 60% with GPU-accelerated simulation coupled to active-learning docking triage and ADMET/QSAR profiling.",
  },
  {
    position: "Scientific Advisor",
    company: "Revilico, Inc.",
    companyLink: "https://revilico.bio",
    time: "2025 — Present",
    address: "Remote",
    work: "Architected Revilico's core computational drug-discovery platform — GPU-accelerated, production-grade simulation infrastructure uniting docking, FEP, GROMACS, ADMET/QSAR, NVIDIA Parabricks, multi-omics, and quantum-chemistry workflows into a single operating system for drug discovery, built from the ground up with Claude-based agentic tooling.",
  },
  {
    position: "Bioinformatician",
    company: "German Cancer Research Center (DKFZ)",
    companyLink: "https://www.dkfz.de/en/index.html",
    time: "Jul 2023 — Dec 2024",
    address: "Heidelberg, Germany",
    work: "Resolved ~20 client-facing technical issues daily and improved pipeline reliability by designing reproducible multi-omics workflows across HPC for WES/WGS/RNA-seq/scRNA-seq/ATAC-seq, automating NGS analysis with the DKFZ One Touch Pipeline database.",
  },
  {
    position: "Bioinformatics Engineer · UI/UX",
    company: "Helmholtz-Institute for Translational Oncology Mainz (HI-TRON)",
    companyLink:
      "https://hi-tron.dkfz.de/research-support/platforms/data-architecture-platform.html",
    time: "Jul 2023 — Dec 2024",
    address: "Mainz, Germany",
    work: "Implemented the HI-TRON data portal backend and frontend, improving data accessibility through MOLGENIS, Vue.js and FAIR practices, and gathered requirements from biologists, trial designers, and clinicians.",
  },
  {
    position: "Bioinformatics Consultant",
    company: "Colgate-Palmolive",
    companyLink: "https://www.colgatepalmolive.com/en-us/who-we-are",
    time: "Nov 2021 — Jun 2023",
    address: "Piscataway, NJ, USA",
    work: "Developed a combinatorial synergy-based drug design pipeline targeting photoaging and hyperpigmentation, leading to a peer-reviewed publication. Focused on Computer-Aided Drug Design (CADD) methodology.",
  },
  {
    position: "Founder & CEO",
    company: "Nerdalytics",
    companyLink: "https://www.nerdalytics.org/home",
    time: "Dec 2021 — Jul 2023",
    address: "Uppsala, Sweden",
    work: "Founded a bioinformatics consultancy for the pharmaceutical industry, owning strategy, policy, and financial planning. Led budgeting, coordination, and delivery of confidential pharma projects from scope definition through to deliverables.",
  },
  {
    position: "Hackathon Organizer",
    company: "LongHack",
    companyLink: "https://www.linkedin.com/company/72112157/",
    time: "Jun 2021 — Sep 2022",
    address: "Helsinki, Finland",
    work: "Organized two international longevity hackathons, mentoring participants and building connections across the scientific and entrepreneurial communities.",
  },
  {
    position: "Clinical Consultant",
    company: "Breath of Health",
    companyLink: "https://bohpharma.com/Breath-Based-screening.php",
    time: "Nov 2021 — Dec 2022",
    address: "Cambridge, MA, USA",
    work: "Built machine learning models and NGS pipelines for automated analysis of exhaled breath samples, supporting clinical and bioinformatics analysis that contributed to successful funding acquisition.",
  },
  {
    position: "Bioinformatics Consultant",
    company: "Inflanova AB",
    companyLink: "https://inflanova.com/",
    time: "Aug 2021 — Mar 2023",
    address: "Stockholm, Sweden",
    work: "Applied multi-omics and bioinformatics approaches to vaccine design and therapeutic intervention. Filed patent WO2023217787 for a clinical vaccine candidate targeting antiviral therapy.",
  },
  {
    position: "Affiliated Researcher",
    company: "Karolinska Institute",
    companyLink:
      "https://ki.se/en/research/research-areas-centres-and-networks/research-groups/johan-frostegards-research-group#tab-projects",
    time: "Mar 2021 — Mar 2023",
    address: "Stockholm, Sweden",
    work: "Produced 2 peer-reviewed publications and 1 US patent by developing predictive clinical ML models for patient stratification from genomic and antibody-profiling data. Engineered immunoinformatics pipelines processing 2TB+ multimodal clinical datasets, enabling 3 ongoing clinical trials.",
  },
  {
    position: "Doctoral Researcher",
    company: "Uppsala University",
    companyLink:
      "https://uu.diva-portal.org/smash/record.jsf?pid=diva2%3A1736122&dswid=2537",
    time: "Nov 2018 — Mar 2023",
    address: "Uppsala, Sweden",
    work: "Originated GENOME2QUNOME, the first quantum-to-biological modelling framework, bridging DFT-based 2D-material simulation with atomistic modelling for nanopore sensing and bio-inspired materials. Informed material selection for industry partner Hitachi ABB through ab initio electronic and thermal-transport studies.",
  },
  {
    position: "NGS Data Analyst",
    company: "University Medical Center, University of Freiburg",
    companyLink:
      "https://uni-freiburg.de/en/university/university-medical-center/",
    time: "Sep 2017 — Oct 2018",
    address: "Freiburg im Breisgau, Germany",
    work: "Cut manual runtime 70% and improved alignment speed 2.5× by engineering high-throughput WES/WGS variant-calling pipelines processing 200+ clinical samples/month with HPC parallelization. Co-authored a Nature Medicine publication on clonal hematopoiesis trajectories with the European MDS Working Group.",
  },
  {
    position: "Creator",
    company: "Bioinformatics Copilot",
    companyLink: "https://www.youtube.com/@BioinfoCopilot",
    time: "Jan 2017 — Present",
    address: "California, USA",
    work: "In-depth tutorials on bioinformatics tools, techniques, and software for beginners through to advanced users.",
  },
];

const Experience = () => (
  <section className="px-12 pb-32 lg:px-8 lg:pb-20 sm:px-6">
    <SectionHead
      label="Experience"
      title="Where the work happened."
      count={ROLES.length}
    />
    <ul className="border-t border-line">
      {ROLES.map((r, i) => (
        <li key={r.company + r.time}>
          <Reveal>
            <article className="wipe surface-hover group grid grid-cols-12 gap-8 border-b border-line px-2 py-10 transition-colors lg:grid-cols-1 lg:gap-3">
              <div className="col-span-1">
                <Index n={i + 1} />
              </div>
              <div className="col-span-4 lg:col-span-1">
                <h3 className="text-lg font-normal leading-snug text-ink transition-colors group-hover:text-accent">
                  {r.position}
                </h3>
                <a
                  href={r.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-mono text-xs uppercase tracking-wide2 text-accent hover:underline"
                >
                  {r.company}
                </a>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <p className="label-muted">{r.time}</p>
                <p className="label-muted mt-1">{r.address}</p>
              </div>
              <p className="col-span-5 text-sm font-light leading-relaxed text-muted lg:col-span-1">
                {r.work}
              </p>
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;

import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/blogs/ambassador.png";
import blog2 from "../../public/images/blogs/blog.png";
import blog3 from "../../public/images/blogs/skin.jpeg";
import blog4 from "../../public/images/blogs/global.png";
import blog5 from "../../public/images/blogs/otv.png";
import blog6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import blog7 from "../../public/images/articles/What is Redux with easy explanation.png";
import blog8 from "../../public/images/articles/What is higher order component in React.jpg";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
    return (
      <>
        <Head>
          <title>Pritam's Portfolio | Blogs Page</title>
          <meta name="description" content="Stay uptodate with my latest blog posts" />
        </Head>
        <TransitionEffect />
        <main
          className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
        >
<Layout className="pt-16">
  <AnimatedText
    text="Words Can Change the World!"
    className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
  />

  {/* First set of articles */}
  <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
    <FeaturedArticle
      img={blog1}
      title="Nextflow Ambassador"
      time="Seqera"
      summary="I actively promote the adoption of Nextflow for scalable and reproducible data analysis pipelines. I collaborate with the community to share best practices and drive innovation in workflow management."
      link="https://www.nextflow.io/our_ambassadors.html"
    />
    <FeaturedArticle
      img={blog2}
      title="My Journey with Nextflow: From Exploration to Automation"
      time="Nextflow Blog"
      summary="I approach bioinformatics workflows in a whole different way now that I’ve used Nextflow. It has evolved into a vital tool in my toolbox, capable of handling massive genomic datasets ensuring repeatability and scalability. "
      link="https://seqera.io/blog/journey-from-exploration-to-automation/"
    />
  </ul>

  {/* Large custom spacing between the first and second set */}
  <div className="h-32 md:h-20"></div> {/* Add custom vertical spacing */}

  {/* Second set of articles */}
  <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
    <FeaturedArticle
      img={blog3}
      title="How Do Chemical Peels Disrupt or Enhance the Skin Microbiome?"
      time="Sequential - The Skin Microbiome Testing Co™"
      summary="Chemical peels are dermatological procedures that involve applying a chemical solution to the skin, thereby exfoliating the top layers to allow cell turnover and enhance skin texture and tone. The process involves using different types of acids or chemical agents that can vary in strength, leading to varying depths of peel, from superficial to deep. The procedure needs to be carried out more than once to get beneficial results, and recent research has begun to explore their impact on the skin microbiome."
      link="https://www.sequential.bio/post/how-do-chemical-peels-disrupt-or-enhance-the-skin-microbiome"
    />
    <FeaturedArticle
      img={blog4}
      title="The defiant dreamer: The bioinformatics expert’s journey from Odisha to Europe"
      time="GLOBAL INDIAN EXCLUSIVE: INDIANS IN EUROPE"
      summary="Pritam, born in Odisha, India, overcame a tough childhood after losing his father early and being raised by his single mother, a low-earning school teacher. 
      Defying financial constraints and advice to avoid science, he pursued bioinformatics, marking a turning point in his life. 
      Now a computational scientist and entrepreneur at Stanford, Pritam uses his expertise to transform data into actionable insights while embracing his passion for technology and gadgets"
      link="https://www.globalindian.com/story/global-indian-exclusive/the-defiant-dreamer-the-bioinformatics-experts-journey-from-odisha-to-europe/"
    />
    <FeaturedArticle
      img={blog5}
      title="Khola Katha | In conversation with bioinformatics scientist Dr Pritam Panda"
      time="OTV Odisha"
      summary="A unique chat show that probes our celebrities to face the facts and rumours 
      about themselves and bring forth the truth for the audience. 
      This show aims to clarify the stands of the celebs and see their reactions to the questions, 
      gossip and rumours. 
      This show seems to be edgy due to the controversial nature it holds and as 
      it makes sure to push the envelope with the kind of topics it tends to discuss with your favorite celebs."
      link="https://www.youtube.com/watch?v=PDBdjyWd-8s&t=519s"
    />
  </ul>
</Layout>

        </main>
      </>
    );
  }
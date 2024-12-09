import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
//import lightBulb from "../../public/images/svgs/atom.svg";
import profilePic from "../../public/images/profile/profilepic.png";
import TransitionEffect from "@/components/TransitionEffect";
import { useState, useEffect } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch("/api/news");
      const data = await response.json();
      setNews(data);
    }
    fetchNews();
  }, []);


  return (
    <>
      <Head>
        <title>Portfolio Built with Nextjs</title>
        <meta
          name="description"
          content="Explore CodeBucks's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Pritam"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Atom Odyssey: Redefining Life's Blueprint, One Atom at a Time"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                As a skilled bioinformatician, I bring expertise in AI-driven protein design, drug discovery, and multiomics to uncover the secrets of life's blueprint. At Atom Odyssey, I combine computational biology, data science, and cutting-edge web technologies to redefine how we explore and innovate in the life sciences. Join me in this journey to revolutionize biology, one atom at a time.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/CV.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
            mr-4
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="https://profiles.stanford.edu/pritam-panda"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base mr-4
             `}
                >
                  Stanford <LinkArrow className="ml-2 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="https://www.youtube.com/@BioinfoCopilot"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base 
             `}
                >
                  YouTube <LinkArrow className="ml-3 !w-6 md:!w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* News Section */}
<section className="mt-16 w-full">
  <h2 className="text-4xl font-bold mb-8 text-center">Latest News</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {news.length > 0 ? (
      news.map((item, index) => (
        <article
          key={index}
          className="relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl 
          border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4"
        >
          <div
            className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
            dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
          />
          <div className="flex w-full flex-col items-start justify-between">
            <h3 className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
              {item.type || "News"}
            </h3>
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
              {item.title}
            </h2>
            <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
              {item.excerpt}
            </p>
            <div className="flex w-full items-center justify-between">
              <Link
                href={item.link}
                target="_blank"
                className="rounded text-lg font-medium underline md:text-base"
              >
                Read More
              </Link>
            </div>
          </div>
        </article>
      ))
    ) : (
      <p className="text-center text-gray-500">No news available.</p>
    )}
  </div>
</section>

        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            //className="relative h-auto w-full"
            //src={lightBulb}
            //alt="Pritam"
          />
        </div>
      </article>
    </>
  );
}

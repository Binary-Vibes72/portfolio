"use client";

import React, { useEffect, useState } from 'react';
import { BackgroundGradientAnimation } from '@/components/main-bg';
import { Heading } from '@/components/heading';
import { MyNavbar } from '@/components/navbar';
import { Background } from '@/components/about';
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/project-card";
import { imgAtteribute } from '@/api/interfaces/img';
import { getData } from '@/api/github';
import { fetchData as fetchUnsplashData } from '@/api/unsplash';
import { Globe } from '@/components/globe';
import { Footer } from '@/components/footer';
import { useInView } from 'react-intersection-observer';
import { LayoutGrid } from "@/components/layout-grid";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { AnimatedTooltip } from "@/components/skills";

import Image from 'next/image';
import Link from "next/link";

import '@/styles/main-bg.css'
import '@/app/globals.css'
import '@/styles/navbar.css'
import '@/styles/about.css'
import '@/styles/project.css'

export default function Home() {
  // Hero Section

  const navItems = [
    {
      name: "Home",
      link: "#Home",
      icon: <IconHome className="h-8 w-8 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#About",
      icon: <IconUser className="h-8 w-8 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Work",
      link: "#Projects",
      icon: (
        <IconMessage className="h-8 w-8 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Skills",
      link: "#Skills",
      icon: (
        <IconMessage className="h-8 w-8 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  const words = ["Hello!", "Hey!", "Welcome!", "Ave!"];

  // Project section
  const [names, setRepoNames] = useState<string[]>([]);
  const [description, setRepoDescription] = useState<string[]>([]);
  const [html_url, set_html_url] = useState<string[]>([]);
  const [data, setData] = useState<imgAtteribute[]>([]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const { names, description, html_url } = await getData();
        setRepoNames(names);
        setRepoDescription(description);
        set_html_url(html_url);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGitHubData();
  }, []);

  useEffect(() => {
    const fetchUnsplashDataFromApi = async () => {
      try {
        const result = await fetchUnsplashData();
        setData(result);
      } catch (error) {
        console.error('Error fetching Unsplash data:', error);
      }
    };
    fetchUnsplashDataFromApi();
  }, []);

  const framework = [
    {
      id: 1,
      name: "Node.js",
      image: "/images/framework/nodejs.png"
    },
    {
      id: 2,
      name: "React.js",
      image: "/images/framework/reactjs.png"
    },
    {
      id: 3,
      name: "Next.js",
      image: "/images/framework/nextjs.png"
    },
    {
      id: 4,
      name: "Flask",
      image: "/images/framework/flask.png"
    },
    {
      id: 5,
      name: "OpenCV",
      image: "/images/framework/opencv.png"
    },
    {
      id: 6,
      name: "Pandas",
      image: "/images/framework/pandas.png"
    },
    {
      id: 7,
      name: "Kotlin",
      image: "/images/framework/kotlin.png"
    },
    {
      id: 8,
      name: "Tailwind",
      image: "/images/framework/tailwind.png"
    },
  ];

  const prolang_core = [
    {
      id: 1,
      name: "C",
      image: "/images/pro-lang-core/c.png"
    },
    {
      id: 2,
      name: "C++",
      image: "/images/pro-lang-core/cpp.png"
    },
    {
      id: 3,
      name: "Python",
      image: "/images/pro-lang-core/python.png"
    },
    {
      id: 4,
      name: "Java",
      image: "/images/pro-lang-core/java.png"
    },
    {
      id: 5,
      name: "Javascript",
      image: "/images/pro-lang-core/javascript.png"
    },
    {
      id: 6,
      name: "Typescript",
      image: "/images/pro-lang-core/typescript.png"
    },
    {
      id: 7,
      name: "C",
      image: "/images/pro-lang-web/html.png"
    },
    {
      id: 8,
      name: "C++",
      image: "/images/pro-lang-web/css.png"
    },
    {
      id: 9,
      name: "sass",
      image: "/images/pro-lang-web/sass.png"
    },
  ];

  const database = [
    {
      id: 1,
      name: "MongoDB",
      image: "/images/database/mongodb.png"
    },
    {
      id: 2,
      name: "SQlite",
      image: "/images/database/sqlite.png"
    },
    {
      id: 3,
      name: "GraphQL",
      image: "/images/database/graphql.png"
    },
    {
      id: 4,
      name: "PostgreSQL",
      image: "/images/database/postgresql.png"
    },
    {
      id: 5,
      name: "Drizzle ORM",
      image: "/images/database/drizzle.png"
    },
  ];

  const automation = [
    {
      id: 1,
      name: "Git Version Control",
      image: "/images/automation-version-control/git.png"
    },
    {
      id: 2,
      name: "Github",
      image: "/images/automation-version-control/github.png"
    },
    {
      id: 3,
      name: "Selenium",
      image: "/images/automation-version-control/selenium.png"
    },
  ];

  const machine = [
    {
      id: 1,
      name: "Pytorch",
      image: "/images/machine-learning/pytorch.png"
    },
    {
      id: 2,
      name: "Tenserflow",
      image: "/images/machine-learning/tenserflow.png"
    },
  ];

  const tools = [
    {
      id: 1,
      name: "Blender",
      image: "/images/tools/blender.png"
    },
    {
      id: 2,
      name: "Figma",
      image: "/images/tools/figma.png"
    },
    {
      id: 3,
      name: "Postman",
      image: "/images/tools/postman.png"
    },
    {
      id: 4,
      name: "Adobe Illustrator",
      image: "/images/tools/adobe-illustrator.png"
    },
    {
      id: 5,
      name: "Adobe Photoshop",
      image: "/images/tools/adobe-photoshop.png"
    },
  ];


  // Skills Section
  const SkeletonOne = () => {
    return (
      <div>
        <p className='font-outfit text-text-primary text-xl mt-2'>framework</p>
        <div className="techStack flex flex-row px-5 w-full flex-wrap justify-center">
          <AnimatedTooltip items={framework} />
        </div>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className='font-outfit text-text-primary text-xl mt-2'>languages</p>
        <div className="techStack flex flex-row px-5 w-full flex-wrap justify-center">
          <AnimatedTooltip items={prolang_core} />
        </div>
      </div>
    );
  };

  const SkeletonThree = () => {
    return (
      <div>
        <p className='font-outfit text-text-primary text-xl mt-2'>database</p>
        <div className="techStack flex flex-row p-5 flex-wrap justify-center">
          <AnimatedTooltip items={database} />
        </div>
      </div>
    );
  };

  const SkeletonFour = () => {
    return (
      <div>
        <p className='font-outfit text-text-primary text-xl mt-2'>automation</p>
        <div className="techStack flex flex-row p-5 flex-wrap justify-center">
          <AnimatedTooltip items={automation} />
        </div>
      </div>
    );
  };

  const SkeletonFive = () => {
    return (
      <div>
        <p className='font-outfit text-text-primary text-xl mt-2'>machine learning </p>
        <div className="techStack flex flex-row p-5 flex-wrap justify-center">
          <AnimatedTooltip items={machine} />
        </div>
      </div>
    );
  };

  const SkeletonSix = () => {
    return (
      <div>
        <p className='font-outfit text-text-primary text-xl mt-2'>tools</p>
        <div className="techStack flex flex-row p-5 flex-wrap justify-center">
          <AnimatedTooltip items={tools} />
        </div>
      </div>
    );
  };


  const cards = [
    {
      id: 1,
      name: "frameworks",
      content: <SkeletonOne />,
      className: "col-span-1",
      thumbnail:
        "images/framework/framework.png",
    },
    {
      id: 2,
      name: "core programming languages",
      content: <SkeletonTwo />,
      className: "col-span-1 ",
      thumbnail:
        "images/framework/framework.png",
    },
    {
      id: 3,
      name: "database",
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "images/framework/framework.png",
    },
    {
      id: 4,
      name: "automation",
      content: <SkeletonFour />,
      className: "col-span-1",
      thumbnail:
        "images/framework/framework.png",
    },
    {
      id: 5,
      name: "machine",
      content: <SkeletonFive />,
      className: "col-span-1",
      thumbnail:
        "images/framework/framework.png",
    },
    {
      id: 6,
      name: "tools",
      content: <SkeletonSix />,
      className: "col-span-1",
      thumbnail:
        "images/framework/framework.png",
    },
  ];


  return (
    <>
      <link rel="icon" href="/favicon.ico" />

      {/* Meta tags for SEO */}
      <meta name="description" content="Vaibhav Sonawane - Full Stack Developer Portfolio" />
      <meta name="keywords" content="Vaibhav Sonawane, Vaibhav72, Full Stack Developer, Web Developer, Portfolio, JavaScript, React, Node.js" />
      <meta name="author" content="Vaibhav Sonawane" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="Vaibhav Sonawane - Full Stack Developer Portfolio" />
      <meta property="og:description" content="Discover the projects and skills of Vaibhav Sonawane, a proficient Full Stack Developer with a passion for creating impactful web applications." />
      <meta property="og:image" content="./favicon.ico" />
      <meta property="og:url" content="https://portfolio-vaibhav72.vercel.app/" />
      <meta property="og:type" content="website" />


      {/* Hero Section */}
      <MyNavbar navItems={navItems} />
      <BackgroundGradientAnimation>
        <div id='Home' className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">

            <div className="h-[40rem] flex justify-center items-center px-4 text-center flex-col custom-heading">
              <Heading className="font-outfit mx-auto font-bold text-neutral-600 dark:text-neutral-400 text-Primary custom-heading-width max-md:hidden overflow-hidden " words={words} />
              <p className='text-[5.5rem] font-outfit mx-auto font-bold text-neutral-600 dark:text-neutral-400 text-Primary sm:hidden'>Hello !</p>
              <div className="flex flex-col" >
                <p className="font-outfit font-light custom-sub-font text-center text-Background">
                  I am <span className="text-Primary font-bold">Vaibhav Sonawane</span>,<br />
                  a future full stack developer <br />
                  and programmer
                </p>
                <p className="custom-scroll text-2xl"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1OTQxYTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3VzZSI+PHJlY3QgeD0iNSIgeT0iMiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjIwIiByeD0iNyIvPjxwYXRoIGQ9Ik0xMiA2djQiLz48L3N2Zz4=" alt="scroll-btn" /></p>
              </div>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>

      {/* About us Section */}
      <div id='About' className="h-[40rem] w-full bg-Background relative flex flex-col items-center justify-end antialiased mobile-about">
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: inView ? 0 : 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent from-neutral-200 to-neutral-600  text-center font-outfit font-bold text-text-primary custom-about-font">
            Who I am?
          </h1>
          <div className="flex mx-auto align-items-center custom-about-main">
            <Image
              src="/images/portrait.png"
              alt="Example Image"
              width={300}
              height={100}
            />
            <p className="text-text-secondary text-right text-xl relative z-10 font-source-sans custom-about">
              an aspiring <span className='text-Primary'>Full Stack Developer</span> passionate about creating innovative and
              efficient web solutions. With a strong foundation in both front-end and
              back-end technologies, I strive to build seamless and user-friendly digital
              experiences. enhancing my knowledge and working on diverse projects that
              challenge and grow my expertise
            </p>
          </div>
        </motion.div>
        <Background />
      </div >

      {/* Project Section */}
      <div id='Projects' className="flex flex-col items-center justify-center h-screen md:h-auto bg-Primary relative w-full" >
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            y: inView ? 0 : 100,
          }}
          transition={{
            duration: 1,
          }}>
          <div className="about-animation max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] flex-col custom-project-subheading">

            <h2 className="z-50 text-center text-lg md:text-5xl font-outfit font-bold text-text-primary custom-project-font">
              This is what I do !
            </h2>
            <p className="z-50 text-center text-text-secondary text-xl mt-10 relative font-source-sans">
              The best way to represent the your experience as a new born developer is by
              developing projects. This section showcases projects I have worked on and
              currently working on.
            </p>


            <div className="absolute flex justify-center w-full h-full opacity-30 max-md:hidden">
              <Globe />
            </div>
          </div>

          <>
            {names.length > 0 && description.length > 0 && data.length > 0 && html_url.length > 0 && (
              <div className="flex flex-row flex-wrap justify-evenly">

                <div className='card-1 w-96 custom-height'>
                  <CardContainer className="inter-var">
                    <CardBody className="bg-Background relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] custom-height rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold font-outfit text-text-primary dark:text-white"
                      >
                        {names[0]}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-text-secondary font-source-sans text-sm max-w-sm mt-2 dark:text-neutral-300 h-36"
                      >
                        {description[0]}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <img
                          src={data[0].urls.full}
                          height="1000"
                          width="1000"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-6">
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href={html_url[0]}
                          target="__blank"
                          className="px-4 py-2 rounded-xl text-xs font-outfit text-text-primary hover:text-text-secondary"
                        >
                          git repo →
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </div>

                <div className='card-2 w-96 custom-height'>
                  <CardContainer className="inter-var">
                    <CardBody className="bg-Background relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] custom-height rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold font-outfit text-text-primary dark:text-white"
                      >
                        {names[1]}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-text-secondary font-source-sans text-sm max-w-sm mt-2 dark:text-neutral-300 h-36"
                      >
                        {description[1]}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <img
                          src={data[1].urls.full}
                          height="1000"
                          width="1000"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-6">
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href={html_url[1]}
                          target="__blank"
                          className="px-4 py-2 rounded-xl text-xs font-outfit text-text-primary hover:text-text-secondary"
                        >
                          git repo →
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </div>

                <div className='card-3 w-96 custom-height'>
                  <CardContainer className="inter-var">
                    <CardBody className="bg-Background relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] custom-height rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold font-outfit text-text-primary dark:text-white"
                      >
                        {names[4]}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-text-secondary font-source-sans text-sm max-w-sm mt-2 dark:text-neutral-300 h-36"
                      >
                        {description[4]}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <img
                          src={data[4].urls.full}
                          height="1000"
                          width="1000"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-6">
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href={html_url[4]}
                          target="__blank"
                          className="px-4 py-2 rounded-xl text-xs font-outfit text-text-primary hover:text-text-secondary"
                        >
                          git repo →
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href="https://omdeep.is-great.net/"
                          target="__blank"
                          className="px-4 py-2 rounded-xl text-xs font-outfit text-text-primary hover:text-text-secondary"
                        >
                          visit now
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </div>

              </div>
            )}
          </>
        </motion.div>


        <Link href="/projects" className='flex flex-row font-outfit text-text-primary text-xl font-bold my-5'>more projects &#160; →</Link>
        
      </div >

      {/* Skills Section */}
      < div id='Skills' className="w-full bg-text-primary h-full" >
        <h1 className="relative p-5 text-lg md:text-5xl bg-clip-text text-center font-outfit font-bold text-Primary custom-skill-font">
          My tech-stack !
        </h1>
        <div className="h-screen max-md:h-[150vh] py-10 w-full">
          <LayoutGrid cards={cards} />
        </div>
      </div >

      <Footer />
    </>
  );
}


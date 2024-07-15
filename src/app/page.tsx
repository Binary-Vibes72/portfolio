"use client";

import React, { useEffect, useState } from 'react';
import { BackgroundGradientAnimation } from '@/components/main-bg';
import { Heading } from '@/components/heading';
import MyNavbar from '@/components/navbar';
import { Background } from '@/components/about';
import Image from 'next/image';
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/project-card";
import Link from "next/link";
import { imgAtteribute } from '@/api/interfaces/img';
import { getData } from '@/api/github';
import { fetchData as fetchUnsplashData } from '@/api/unsplash';
import { Globe } from '@/components/globe';
import { Framework } from '@/components/skills-listing';
import { Skills } from '@/components/skills';
import { Footer } from '@/components/footer';

import '@/styles/main-bg.css'
import '@/app/globals.css'
import '@/styles/navbar.css'
import '@/styles/about.css'
import '@/styles/project.css'
import '@/styles/skills.css'

export default function Home() {
  // Hero Section
  const words = ["Hello!", "Hey!", "Welcome!", "Ave!"];

  // Project section
  const [names, setRepoNames] = useState<string[]>([]);
  const [description, setRepoDescription] = useState<string[]>([]);
  const [html_url, set_html_url] = useState<string[]>([]);
  const [data, setData] = useState<imgAtteribute[]>([]);

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

  // Skills Section
  const tabs = [
    {
      title: "Framework",
      value: "Framework",
      content: (
        <div className="w-full xh-auto overflow-hidden absolute rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-Background to-Secondary-background">
          <Framework />
        </div>
      ),
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <MyNavbar />
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
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
      <div className="h-[40rem] w-full bg-Background relative flex flex-col items-center justify-end antialiased mobile-about">
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
        <Background/>
      </div>

      {/* Project Section */}
      <div className="flex flex-col items-center justify-center h-auto md:h-auto bg-Primary relative w-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] flex-col custom-project-subheading">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="z-10"
          >
            <h2 className="text-center text-lg md:text-5xl font-outfit font-bold text-text-primary custom-project-font">
              This is what I do !
            </h2>
            <p className="text-center text-text-secondary text-xl mt-10 relative font-source-sans">
              The best way to represent the your experience as a new born developer is by
              developing projects. This section showcases projects I have worked on and
              currently working on.
            </p>
          </motion.div>

          <div className="absolute flex justify-center w-full h-full opacity-40 max-md:hidden">
            <Globe className='' />
          </div>
        </div>

        <div className="">
          {names.length > 0 && description.length > 0 && data.length > 0 && html_url.length > 0 && (
            <>
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
                      <div className="flex justify-between items-center mt-12">
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
                      <div className="flex justify-between items-center mt-12">
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
                      <div className="flex justify-between items-center mt-12">
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
            </>
          )}
        </div>

        <Link href="/projects" className='flex flex-row font-outfit text-text-primary text-xl font-bold my-5'>more projects
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXJpZ2h0Ij48cGF0aCBkPSJNMTggOEwyMiAxMkwxOCAxNiIvPjxwYXRoIGQ9Ik0yIDEySDIyIi8+PC9zdmc+"
            className="ml-3"
            alt="github repo"
          />
        </Link>

      </div>

      {/* Skills Section */}
      <div className="w-full bg-text-primary custom-skills-height">
        <h1 className="relative p-5 z-10 text-lg md:text-5xl bg-clip-text text-center font-outfit font-bold text-Primary custom-skill-font">
          My tech-stack !
        </h1>

        <div className="font-outfit font-bold text-lg h-auto w-11/12 [perspective:1000px] relative flex flex-col mx-auto items-center justify-center  transition duration-500">
          <Skills tabs={tabs} />
        </div>
      </div>

      {/* Contact Section */}
      <Footer/>
    </>
  );
}

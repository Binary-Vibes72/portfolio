"use client";

import React, { useEffect, useState } from 'react';
import { BackgroundGradientAnimation } from '@/components/main-bg';
import { Heading } from '@/components/heading';
import MyNavbar from '@/components/navbar';
import { Background } from '@/components/about';
import Image from 'next/image';
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CardBody, CardContainer, CardItem } from "@/components/project-card";
import Link from "next/link";
import { getData } from '@/api/github';
import { imgAtteribute } from '@/api/interfaces/img';
import { fetchData as fetchUnsplashData } from '@/api/unsplash';


import '@/styles/main-bg.css'
import '@/app/globals.css'
import '@/styles/navbar.css'
import '@/styles/about.css'
import '@/styles/project.css'

const World = dynamic(() => import("../components/globe").then((m) => m.World), {
  ssr: false,
});

export default function Home() {
  // Hero Section
  const words = ["Hello!", "Hey!", "Welcome!", "Ave!"];

  // Project section
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b8213", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

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


  return (
    <>
      {/* Hero Section */}
      <MyNavbar />
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">

            <div className="h-[40rem] flex justify-center items-center px-4 text-center flex-col custom-heading">
              <Heading className="font-outfit mx-auto font-bold text-neutral-600 dark:text-neutral-400 text-Primary custom-heading-width" words={words} />
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
        <Background />
      </div>

      {/* Project Section */}
      <div className="flex flex-col items-center justify-center h-auto md:h-auto bg-Primary relative w-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4 flex-col custom-project-subheading">
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
              This is what I do!
            </h2>
            <p className="text-center text-text-secondary text-xl mt-10 relative font-source-sans">
              The best way to represent the your experience as a new born developer is by
              developing projects. This section showcases projects I have worked on and
              currently working on.
            </p>
          </motion.div>
          <div className="absolute w-full h-full opacity-70 -ml-5 max-md:hidden">
            <World data={sampleArcs} globeConfig={globeConfig} />;
          </div>
        </div>


        <div className="w-full flex justify-center -mt-36">
          <div className="flex flex-row justify-content-evenly custom-mobile w-full max-md:w-11/12">

            <div className="card-1">
              <CardContainer className="inter-var w-11/12">
                {names.length > 0 && description.length > 0 && data.length > 0 && html_url.length > 0 && (
                  <CardBody className="bg-Background relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-2xl font-bold text-text-primary font-outfit"
                    >
                      {names[1]}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-m max-w-sm mt-2 text-text-secondary font-source-sans"
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
                    <div className="flex justify-between items-center mt-20 mb-2">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-text-primary text-xs font-bold"
                      >
                        <a
                          href={html_url[1]}
                          className="btn flex align-items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXJpZ2h0Ij48cGF0aCBkPSJNMTggOEwyMiAxMkwxOCAxNiIvPjxwYXRoIGQ9Ik0yIDEySDIyIi8+PC9zdmc+"
                            className="ml-3"
                            alt="github repo"
                          />
                        </a>
                      </CardItem>
                    </div>
                  </CardBody>
                )}
              </CardContainer>
            </div>

            <div className="card-2">
              <CardContainer className="inter-var w-11/12">
                {names.length > 0 && description.length > 0 && data.length > 0 && html_url.length > 0 && (
                  <CardBody className="bg-Background relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-2xl font-bold text-text-primary font-outfit"
                    >
                      {names[0]}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-m max-w-sm mt-2 text-text-secondary font-source-sans"
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
                    <div className="flex justify-between items-center mt-20 mb-2">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-text-primary text-xs font-bold"
                      >
                        <a
                          href={html_url[0]}
                          className="btn flex align-items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXJpZ2h0Ij48cGF0aCBkPSJNMTggOEwyMiAxMkwxOCAxNiIvPjxwYXRoIGQ9Ik0yIDEySDIyIi8+PC9zdmc+"
                            className="ml-3"
                            alt="github repo"
                          />
                        </a>
                      </CardItem>
                    </div>
                  </CardBody>
                )}
              </CardContainer>
            </div>


            <div className="card-3">
              <CardContainer className="inter-var w-11/12">
                {names.length > 0 && description.length > 0 && data.length > 0 && html_url.length > 0 && (
                  <CardBody className="bg-Background relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-2xl font-bold text-text-primary font-outfit"
                    >
                      {names[5]}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-m max-w-sm mt-2 text-text-secondary font-source-sans"
                    >
                      {description[5]}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        src={data[5].urls.full}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20 mb-2">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-text-primary text-xs font-bold"
                      >
                        <a
                          href={html_url[5]}
                          className="btn flex align-items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXJpZ2h0Ij48cGF0aCBkPSJNMTggOEwyMiAxMkwxOCAxNiIvPjxwYXRoIGQ9Ik0yIDEySDIyIi8+PC9zdmc+"
                            className="ml-3"
                            alt="github repo"
                          />
                        </a>
                      </CardItem>
                    </div>
                  </CardBody>
                )}
              </CardContainer>
            </div>

          </div>
        </div>
          <Link href="/projects" className='flex flex-row align-middle font-outfit text-text-primary text-xl font-bold'>more projects
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXJpZ2h0Ij48cGF0aCBkPSJNMTggOEwyMiAxMkwxOCAxNiIvPjxwYXRoIGQ9Ik0yIDEySDIyIi8+PC9zdmc+"
            className="ml-3"
            alt="github repo"
          />
          </Link>
      </div>
    </>
  );
}

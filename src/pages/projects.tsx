"use client";

import React, { useEffect, useState } from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/project-card";
import Link from "next/link";
import { imgAtteribute } from '@/api/interfaces/img';
import { getData } from '@/api/github';
import { fetchData as fetchUnsplashData } from '@/api/unsplash';

import '@/styles/main-bg.css'
import "@/app/globals.css";
import "@/styles/project.css"

const Portfolio: React.FC = () => {
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
            <div className='flex flex-col items-center justify-center h-auto md:h-auto bg-Primary relative w-full'>
                <div className="d-flex flex-nowrap">
                    {names.length > 0 && description.length > 0 && data.length > 0 && html_url.length > 0 && (
                        <>
                            <div className="flex flex-row flex-wrap justify-evenly">

                                <div className='card-1 mx-2'>
                                    <CardContainer className="inter-var w-96">
                                        <CardBody className="bg-Background relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                            <CardItem
                                                translateZ="50"
                                                className="text-xl font-bold text-text-primary dark:text-white"
                                            >
                                                {names[0]}
                                            </CardItem>
                                            <CardItem
                                                as="p"
                                                translateZ="60"
                                                className="text-text-secondary text-sm max-w-sm mt-2 dark:text-neutral-300"
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
                                            <div className="flex justify-between items-center mt-20">
                                                <CardItem
                                                    translateZ={20}
                                                    as={Link}
                                                    href={html_url[0]}
                                                    target="__blank"
                                                    className="px-4 py-2 rounded-xl text-xs font-normal text-text-primary"
                                                >
                                                    Try now →
                                                </CardItem>
                                            </div>
                                        </CardBody>
                                    </CardContainer>
                                </div>


                                <div className='card-2 mx-2'>
                                    <CardContainer className="inter-var w-96">
                                        <CardBody className="bg-Background relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                            <CardItem
                                                translateZ="50"
                                                className="text-xl font-bold text-text-primary dark:text-white"
                                            >
                                                {names[1]}
                                            </CardItem>
                                            <CardItem
                                                as="p"
                                                translateZ="60"
                                                className="text-text-secondary text-sm max-w-sm mt-2 dark:text-neutral-300"
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
                                            <div className="flex justify-between items-center mt-20">
                                                <CardItem
                                                    translateZ={20}
                                                    as={Link}
                                                    href={html_url[1]}
                                                    target="__blank"
                                                    className="px-4 py-2 rounded-xl text-xs font-normal text-text-primary"
                                                >
                                                    Try now →
                                                </CardItem>
                                            </div>
                                        </CardBody>
                                    </CardContainer>
                                </div>


                                <div className='card-3 mx-2'>
                                    <CardContainer className="inter-var w-96">
                                        <CardBody className="bg-Background relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                            <CardItem
                                                translateZ="50"
                                                className="text-xl font-bold text-text-primary dark:text-white"
                                            >
                                                {names[4]}
                                            </CardItem>
                                            <CardItem
                                                as="p"
                                                translateZ="60"
                                                className="text-text-secondary text-sm max-w-sm mt-2 dark:text-neutral-300"
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
                                            <div className="flex justify-between items-center mt-20">
                                                <CardItem
                                                    translateZ={20}
                                                    as={Link}
                                                    href={html_url[4]}
                                                    target="__blank"
                                                    className="px-4 py-2 rounded-xl text-xs font-normal text-text-primary"
                                                >
                                                    Try now →
                                                </CardItem>
                                                <CardItem
                                                    translateZ={20}
                                                    as={Link}
                                                    href="https://omdeep.is-great.net/"
                                                    target="__blank"
                                                    className="px-4 py-2 rounded-xl text-xs font-normal text-text-primary"
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
            </div>
        </>
    );
};

export default Portfolio;

"use client";

import React, { useEffect, useState } from 'react';
import { getData } from '@/api/github';
import { imgAtteribute } from '@/api/interfaces/img';
import { fetchData as fetchUnsplashData } from '@/api/unsplash';

import "@/app/globals.css";

const Portfolio: React.FC = () => {
    const [names, setRepoNames] = useState<string[]>([]);
    const [description, setRepoDescription] = useState<string[]>([]);
    const [data, setData] = useState<imgAtteribute[]>([]);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const { names, description } = await getData();
                setRepoNames(names);
                setRepoDescription(description);
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
        <div>
            <h1>My GitHub Repositories</h1>
            <ul>
                {names.length > 0 && description.length > 0 && data.length > 0 && (
                    <>
                    <li>
                        <h1>{names[0]}</h1>
                        <h3>{description[0]}</h3>
                        <img src={data[0].urls.full} alt="" />
                    </li>
                    <li>
                        <h1>{names[1]}</h1>
                        <h3>{description[1]}</h3>
                        <img src={data[1].urls.full} alt="" />
                    </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Portfolio;

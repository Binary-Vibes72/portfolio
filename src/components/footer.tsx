"use client";

import React from "react";
import "@/app/globals.css"

export const Footer = () => {
    return (
        <>
            <div className="relative w-full h-[15rem] bg-Background flex justify-center">
                <div className="w-4/6 flex flex-row justify-between items-center">
                    <div className="w-1/2 px-5">
                        <div className="flex flex-row items-center p-2">
                            <img
                                src={'images/footer/dev.png'}
                                height="100"
                                width="100"
                                className="h-8 w-8"
                                alt="thumbnail"
                            />
                            <a href="#" className="px-5 text-text-primary text-md font-outfit hover:text-text-secondary">Dev Community</a>
                        </div>
                        <div className="flex flex-row items-center p-2">
                            <img
                                src={'images/footer/github.png'}
                                height="100"
                                width="100"
                                className="h-8 w-8"
                                alt="thumbnail"
                            />
                            <a href="#" className="px-5 text-text-primary text-md font-outfit hover:text-text-secondary">Github</a>
                        </div>
                        <div className="flex flex-row items-center p-2">
                            <img
                                src={'images/footer/linkedin.png'}
                                height="100"
                                width="100"
                                className="h-8 w-8"
                                alt="thumbnail"
                            />
                            <a href="#" className="px-5 text-text-primary text-md font-outfit hover:text-text-secondary">linkedin</a>
                        </div>
                        <div className="flex flex-row items-center p-2">
                            <img
                                src={'images/footer/stack.png'}
                                height="100"
                                width="100"
                                className="h-8 w-8"
                                alt="thumbnail"
                            />
                            <a href="#" className="px-5 text-text-primary text-md font-outfit hover:text-text-secondary">Stack</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mr-5 text-text-primary font-outfit ">
                        <a href="" className="p-2 hover:text-text-secondary">home</a>
                        <a href="" className="p-2 hover:text-text-secondary">about</a>
                        <a href="" className="p-2 hover:text-text-secondary">work</a>
                    </div>
                </div>
            </div>
            <div className="h-10 flex items-center justify-center bg-Primary font-outfit font-xl text-text-primary ">
                <a href="mailto:work.vaibhav1308@gmail.com" className="hover:text-text-secondary">work.vaibhav1308@gmail.com |</a> © 2024 | BinaryVibes,Nashik, Maharastra - 422010, India | <a href="https://portfolio-vaibhav72.vercel.app" className="hover:text-text-secondary">portfolio-vaibhav72.vercel.app</a>
            </div>
        </>
    );
};


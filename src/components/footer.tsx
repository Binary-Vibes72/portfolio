"use client";

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/globals.css"

export const Footer = () => {
    return (
        <>
            <div className="relative w-full h-auto bg-Background flex justify-center">
                <div className="flex-col w-4/6 flex justify-center items-center md:flex-row md:justify-around">
                    <div className="w-auto p-5">
                        <div className="flex flex-row items-center justify-start p-2">
                            <img
                                src={'images/footer/dev.png'}
                                height="100"
                                width="100"
                                className="h-8 w-8"
                                alt="thumbnail"
                            />
                            <a target="#" href="https://dev.to/vaibhav7219" className="pl-5 text-text-primary text-md font-outfit hover:text-text-secondary">Dev Community</a>
                        </div>
                        <div className="flex flex-row items-center p-2 justify-start ">
                            <img
                                src={'images/footer/github.png'}
                                height="100"
                                width="100"
                                className="h-8 w-8"
                                alt="thumbnail"
                            />
                            <a target="#" href="https://github.com/Binary-Vibes72" className="pl-5 text-text-primary text-md font-outfit hover:text-text-secondary">Github</a>
                        </div>
                        <div className="flex flex-row items-center p-2 justify-start ">
                            <img
                                src={'images/footer/linkedin.png'}
                                height="100"
                                width="100"
                                className="h-8 w-8"
                                alt="thumbnail"
                            />
                            <a target="#" href="https://www.linkedin.com/in/vaibhav-sonawane-0216631a5/" className="pl-5 text-text-primary text-md font-outfit hover:text-text-secondary">linkedin</a>
                        </div>
                        <div className="flex flex-row items-center p-2 justify-start ">
                            <img
                                src={'images/footer/stack.png'}
                                height="100"
                                width="100"
                                className="h-8 w-8"
                                alt="thumbnail"
                            />
                            <a target="#" href="https://stackoverflow.com/users/25369425/binary-vibes" className="pl-5 text-text-primary text-md font-outfit hover:text-text-secondary">StackOverflow</a>
                        </div>
                    </div>
                    <hr className="border w-full border-Primary md:hidden"/>
                    <div className="flex flex-col justify-center  text-text-primary font-outfit max-md:pb-5 ">
                        <a href="#Home" className="p-2 hover:text-text-secondary">home</a>
                        <a href="#About" className="p-2 hover:text-text-secondary">about</a>
                        <a href="#Projects" className="p-2 hover:text-text-secondary">work</a>
                    </div>
                </div>
            </div>
            <div className="h-auto p-3 flex items-center justify-center bg-Primary font-outfit font-xl text-text-primary flex-wrap">
                <a href="mailto:work.vaibhav1308@gmail.com" className="hover:text-text-secondary">work.vaibhav1308@gmail.com |</a> © 2024 | BinaryVibes,Nashik, Maharastra - 422010, India | <a href="https://portfolio-vaibhav72.vercel.app" className="hover:text-text-secondary">portfolio-vaibhav72.vercel.app</a>
            </div>
        </>
    );
};


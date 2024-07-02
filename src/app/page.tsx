import React from 'react';

import { BackgroundGradientAnimation } from '@/components/main-bg';
import { Heading } from '@/components/heading';
import MyNavbar from '@/components/navbar';

import '@/styles/main-bg.css'
import '@/app/globals.css'
import '@/styles/navbar.css'

export default function Home() {
  const words = ["Hello!", "Hey!", "Welcome!", "Ave!"];

  return (
    <>
      <MyNavbar />
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">

            <div className="h-[40rem] flex justify-center items-center px-4 text-center flex-col custom-heading">
              <Heading className="font-outfit mx-auto font-bold text-neutral-600 dark:text-neutral-400 text-Primary custom-heading-width" words={words} />
              <div className="flex flex-col" >
                <p className="font-outfit font-light custom-sub-font text-center">
                  I am <span className="text-Primary">Vaibhav Sonawane</span>,<br />
                  a future full stack developer <br />
                  and programmer
                </p>
                <p className="custom-scroll text-2xl"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1OTQxYTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3VzZSI+PHJlY3QgeD0iNSIgeT0iMiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjIwIiByeD0iNyIvPjxwYXRoIGQ9Ik0xMiA2djQiLz48L3N2Zz4=" alt="scroll-btn" /></p>
              </div>
            </div>

          </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}

"use client"
import { TypeAnimation } from 'react-type-animation';
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 my-10">
        <div className="col-span-5 ">
          <div className="place-self-center lg:width-[800px] md:width-[300px]">
            <Image
              src="/images/web-logo-header.png"
              alt="basu logo"
              width={700}
              height={700}
              className="lg:-translate-x-40 -translate-x-20"
            />
          </div>
        </div>

        <div className=" col-span-7 place-self-center body-font lg:text-center text-left">
          <h1 className="text-white mb-4 text-4xl md:text-7xl font-light ">
            <TypeAnimation
              sequence={[
                '<INFO />',
                2000, 
                '<Surattinon />',
                2000
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#b3b3b3]">
            Hello, my name is Bas!! This is my first Portfolio with NEXTJS
          </p>
          <p>
            So how can I make this nextjs look good?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 sm:flex-wrap-reverse container py-8 bg-white mb-8">
        <div className="col-span-7 place-self-center body-font lg:text-center text-left">
          <div className = 'mx-auto'>
            <button className = 'w-[200px] h-[60px] bg-black p-2 text-white hover:shadow-[0_20px_50px_rgba(100,_100,_100,_0.7)] hover:shadow-[0px_10px_1px_rgba(121,_121,_121,_1),_0_10px_20px_rgba(158,_158,_158,_1)] hover:-translate-y-3 duration-300'>
                <h1 className = 'text-lg font-bold'>
                  Download CV
                </h1>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          <div className="lg:width-[200px] md:width-[100px] py-8 ">
            <Image
              src="/images/profile-img.jpeg"
              alt="basu logo"
              width={200}
              height={200}
              className = 'rounded-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

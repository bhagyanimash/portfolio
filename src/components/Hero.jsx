import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/bnfull.png";

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="pl-16 flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin lg:mt-16 lg:text-7xl">
              Bhagya Nimash
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
              Full Stack App Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-ligh tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="w-80 lg:w-96 rounded-2xl"
              src={profilePic}
              alt="Bhagya Nimash"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

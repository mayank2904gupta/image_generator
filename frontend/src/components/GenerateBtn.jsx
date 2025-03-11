import React from "react";
import { assets } from "../assets/assets";

const GenerateBtn = () => {
  return (
    <div className="flex flex-col items-center pb-16">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium md:py-16 py-6 mt-4">See the magic. Try now</h1>
      <button className="flex  text-white bg-black rounded-full px-12 py-3 hover:scale-105 transition-all duration-500 cursor-pointer gap-2 w-auto items-center">
        Generate Images <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </div>
  );
};

export default GenerateBtn;

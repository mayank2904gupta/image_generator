import React from "react";
import { stepsData } from "../assets/assets";
import StepCard from "../cards/StepCard";

const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h1 className="text-3xl">How it works</h1>
      <p className="text-sm text-stone-500 mt-2 ">
        Transform Words Into Stunning Images
      </p>
      <div className="my-10 space-y-4 w-full max-w-3xl ">
      {stepsData.map((step,index) => (
        <StepCard key={index} step={step}/>
      ))}
      </div>
    </div>
  );
};

export default Steps;

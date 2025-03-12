import React from "react";
import { stepsData } from "../assets/assets";
import StepCard from "../cards/StepCard";
import { motion } from "motion/react";

const Steps = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center mt-32"
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
      <h1 className="text-3xl">How it works</h1>
      <p className="text-sm text-stone-500 mt-2 ">
        Transform Words Into Stunning Images
      </p>
      <div className="my-10 space-y-4 w-full max-w-3xl ">
      {stepsData.map((step,index) => (
        <StepCard key={index} step={step}/>
      ))}
      </div>
    </motion.div>
  );
};

export default Steps;

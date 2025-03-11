import React from "react";
import { plans } from "../assets/assets";
import PlanCard from "../cards/PlanCard";

const BuyCredits = () => {
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 rounded-full py-2 px-10 mb-6">OUR PLANS</button>
      <h1 className="text-center text-3xl font-medium ">Choose the plan</h1>
      <div className="flex flex-wrap gap-6 justify-center text-left mt-6 sm:mt-10">
        {plans.map((plan, index) => (
          <PlanCard plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default BuyCredits;

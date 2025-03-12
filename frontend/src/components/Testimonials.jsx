import React from "react";
import { testimonialsData } from "../assets/assets";
import TestimonialCard from "../cards/TestimonialCard";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center mt-32"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl font-medium">Customer Testimonials</h1>
      <p className="text-sm text-stone-500 mt-2">What Our Users Are Saying</p>
      <div className="flex flex-col md:flex-row gap-6 p-16 items-center">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;

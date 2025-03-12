import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const onSubmitHandler = async (e) => {};

  return (
    <motion.form
      onSubmit={onSubmitHandler}
      className="flex flex-col justify-center items-center min-h-[90vh]"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="relative">
          <img
            src={image}
            alt=""
            width={300}
            className="rounded max-w-sm mt-20 "
          />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500  ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
        </div>
        <p className={!loading ? "hidden" : "text-sm"}>Loading.....</p>
      </div>

      {!isImageLoaded ? (
        <div className="flex items-center w-full max-w-xl rounded-full text-white bg-neutral-500 text-sm p-0.5 mt-10">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 placeholder-color"
          />
          <button
            type="submit"
            className="cursor-pointer bg-zinc-900 rounded-full py-3 px-10 sm:px-16"
          >
            Generate
          </button>
        </div>
      ) : (
        <div className="flex gap-2 items-center justify-center text-sm mt-9">
          <p
            className="bg-transparent text-black rounded-full px-8 py-3 cursor-pointer border border-zinc-900"
            onClick={() => {
              setIsImageLoaded(false);
            }}
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 rounded-full text-white cursor-pointer px-10 py-3 "
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;

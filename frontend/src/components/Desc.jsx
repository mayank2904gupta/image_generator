import React from "react";
import { assets } from "../assets/assets";

const Desc = () => {
  return (
    <div className="flex flex-col items-center justify-center my-32">
      <h1 className="text-3xl">Create AI Images</h1>
      <p className="text-sm text-stone-500 mt-2">
        Turn your imagination into visuals
      </p>
      <div className="flex flex-col items-center gap-10 md:gap-14 md:flex-row mt-10">
        <img width={40} src={assets.sample_img_1} alt="" className="h-full w-80 xl:w-96 rounded-lg"/>
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium max-w-lg mb-4">Introducing the Al-Powered Text to Image Generator</h1>
          <p className="text-sm text-stone-500 my-3">
            Easily bring your ideas to life with our free Al image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images withjust a few clicks.
            Imagine it, describe it, and watch it come to life instantly.
          </p>

          <p className="text-sm text-stone-500">
            Simply type in a text prompt, and our cutting-edge Al will generate
            high- quality images in seconds. From product visuals to character
            designs and portraits, even concepts that don't yet exist can be
            visualized effortlessly. Powered by advanced Al technology, the
            creative possibilities are limitless!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Desc;

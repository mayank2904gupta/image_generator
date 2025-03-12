import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (!user) {
      setShowLogin(true);
    } else navigate("/result");
  };
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="inline-flex rounded-full border border-gray-500 px-6 py-1.5 gap-2 text-sm text-stone-500 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <div className="max-w-[400px] text-4xl sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.5 }}
        >
          Turn text to <span className="text-blue-500">image</span>, in seconds.
        </motion.h1>
      </div>
      <motion.div
        className="mx-auto text-center max-w-[500px] mt-5 text-stone-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p>
          Unleash your creativity with AI. Turn your imagination into visual art
          in seconds — just type, and watch the magic happen.
        </p>
      </motion.div>
      <motion.button
        onClick={onClickHandler}
        initial={{ scale:0.5,opacity: 0 }}
        animate={{ scale:1,opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.85 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { duration: 1, delay: 0.8 },
          scale: {duration:0.5,delay:1}
        }}
        className="flex mt-8 text-white bg-black rounded-full px-12 py-3  cursor-pointer gap-2 w-auto items-center"
      >
        Generate Images <img src={assets.star_group} alt="" className="h-6" />
      </motion.button>
      <motion.div
        className="flex flex-wrap gap-3 mt-16 items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <motion.img 
              whileHover={{scale:1.05,duration:0.1}}
              src={index % 2 == 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt=""
              key={index}
              width={70}
              className="rounded  max-sm:w-10 cursor-pointer"
            />
          ))}
      </motion.div>
      <div className="mx-auto text-center max-w-[220px] text-sm text-neutral-600 mt-3">
        <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.2,duration:0.8}}
        >Generated images from imagify</motion.p>
      </div>
    </motion.div>
  );
};

export default Header;

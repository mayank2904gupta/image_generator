import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (!user) {
      setShowLogin(true);
    } else navigate("/result");
  };

  return (
    <motion.div
      className="flex flex-col items-center pb-16"
      initial={{ scale:0.5,opacity: 0 }}
        animate={{ scale:1,opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.85 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { duration: 1, delay: 0.8 },
          scale: {duration:0.5,delay:1}
        }}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium md:py-16 py-6 mt-4">
        See the magic. Try now
      </h1>
      <motion.button
        onClick={onClickHandler}
        className="flex  text-white bg-black rounded-full px-12 py-3 cursor-pointer gap-2 w-auto items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.85 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { duration: 1, delay: 0.8 },
        }}
      >
        Generate Images <img src={assets.star_group} alt="" className="h-6" />
      </motion.button>
    </motion.div>
  );
};

export default GenerateBtn;

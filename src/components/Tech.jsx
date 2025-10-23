import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className='text-secondary text-[17px] uppercase tracking-wider'>My Technical Skills</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Technologies.
        </h2>
      </motion.div>
      
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='flex flex-col items-center' key={technology.name}>
            <div className='w-28 h-28'>
              <BallCanvas icon={technology.icon} />
            </div>
            <p className='text-white text-center mt-2 font-medium text-[14px]'>
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ExperienceComponent = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className='text-secondary text-[17px] uppercase tracking-wider'>What I have done so far</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col items-center'>
        <p className='text-white text-[18px] text-center max-w-3xl'>
          Computer Science Student focused on Full-Stack Development with experience in building
          mobile and web applications using modern technologies.
        </p>
      </div>
    </>
  );
};

const Experience = SectionWrapper(ExperienceComponent, "experience");
export default Experience;


import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className='text-secondary text-[17px] uppercase tracking-wider'>Introduction</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
      >
        I'm a passionate full-stack developer with expertise in Java, Python Flask, React, and
        Android development. I've built comprehensive applications including a Twitter clone mobile
        app, salon booking platform, and travel booking system. I specialize in creating scalable
        backend APIs with MongoDB and MySQL, developing responsive frontends, and solving complex
        programming challenges. Currently pursuing computer science with a focus on artificial
        intelligence and modern web technologies.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");

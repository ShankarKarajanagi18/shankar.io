import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";
import {
  About,
  Contact,
  Education,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* FIXED FULL-PAGE STARS BACKGROUND */}
        <StarsCanvas />

        <Navbar />

        {/* HOME SECTION */}
        <section id="home" className='relative w-full h-screen mx-auto'>
          <div className='max-w-7xl mx-auto flex flex-col items-center justify-center h-full px-6 relative z-10'>

            {/* Default Profile Photo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='mb-8'
            >
              <img
                src="https://ui-avatars.com/api/?name=Shankar+Karajanagi&size=200&background=915EFF&color=fff&bold=true&rounded=true"
                alt="Profile"
                className='w-48 h-48 rounded-full border-4 border-[#915EFF] object-cover shadow-2xl shadow-[#915EFF]/50'
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='font-black text-white text-center lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]'
            >
              Hi, I'm <span className='text-[#915EFF]'>Shankar Karajanagi</span>
            </motion.h1>

            {/* Title/Role */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-[#dfd9ff] font-medium text-center lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4'
            >
              Full Stack Developer
            </motion.p>

            {/* Short Bio */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='text-secondary text-center max-w-3xl mt-6 text-[18px]'
            >
              Building Amazing Web & Mobile Applications with React, Node.js, Java, Python Flask, and Android Studio
            </motion.p>

            {/* All Three Buttons with Same Outline Style */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className='flex gap-4 mt-8 flex-wrap justify-center'
            >
              <a
                href='#contact'
                className='border-2 border-[#EF4444] py-3 px-8 rounded-xl outline-none text-white font-bold hover:bg-[#EF4444] transition-all'
              >
                Contact Me
              </a>
              <a
                href='#work'
                className='border-2 border-[#915EFF] py-3 px-8 rounded-xl outline-none text-white font-bold hover:bg-[#915EFF] transition-all'
              >
                View Projects
              </a>
              <a
                href='https://github.com/ShankarKarajanagi18'
                target='_blank'
                rel='noopener noreferrer'
                className='border-2 border-[#4AABFF] py-3 px-8 rounded-xl outline-none text-white font-bold hover:bg-[#4AABFF] transition-all'
              >
                GitHub Profile
              </a>
            </motion.div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <About />

        {/* SKILLS SECTION */}
        <Tech />

        {/* EDUCATION & CERTIFICATIONS SECTION */}
        <Education />

        {/* PROJECTS SECTION */}
        <Works />

        {/* RESUME SECTION */}
        <section id="resume" className="relative z-0 bg-transparent py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className='text-secondary text-[17px] uppercase tracking-wider text-center'>
                Download My CV
              </p>
              <h2 className="text-white font-black text-center md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10">
                Resume
              </h2>

              <div className="flex flex-col items-center gap-6">
                <p className="text-secondary text-center max-w-2xl text-[17px]">
                  Download my resume to learn more about my experience, skills, and education.
                  Feel free to reach out if you have any questions!
                </p>

                <div className="flex gap-4 flex-wrap justify-center">
                  <a
                    href="/updatedresume.pdf"
                    download
                    className="bg-[#8B5CF6] py-4 px-10 rounded-xl text-white font-bold text-lg hover:bg-[#7c3aed] transition-all shadow-lg flex items-center gap-2"
                  >
                    <span className="text-2xl">📄</span>
                    Download Resume
                  </a>

                  <a
                    href="https://linkedin.com/in/shankar-karajanagi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[#8B5CF6] py-4 px-10 rounded-xl text-white font-bold text-lg hover:bg-[#8B5CF6] transition-all flex items-center gap-2"
                  >
                    <span className="text-2xl">💼</span>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;

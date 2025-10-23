import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const EducationCard = ({ degree, university, duration, cgpa, coursework, achievements, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className='w-full bg-tertiary p-8 rounded-2xl border-l-4 border-[#10B981]'
    >
      <div className='flex items-start gap-4'>
        <div className='text-4xl'>{icon}</div>
        <div className='flex-1'>
          <h3 className='text-white font-bold text-[24px]'>{degree}</h3>
          <p className='text-secondary text-[16px] font-semibold mt-1'>{university}</p>
          <p className='text-[#10B981] text-[14px] mt-2'>{duration}</p>
          
          {cgpa && (
            <p className='text-[#F59E0B] text-[16px] font-bold mt-2'>{cgpa}</p>
          )}
          
          {coursework && (
            <div className='mt-4'>
              <p className='text-white font-semibold mb-2'>Relevant Coursework:</p>
              <p className='text-secondary text-[14px]'>{coursework}</p>
            </div>
          )}
          
          {achievements && (
            <div className='mt-4'>
              <p className='text-white font-semibold mb-2'>Achievements:</p>
              <p className='text-secondary text-[14px]'>{achievements}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CertificationCard = ({ title, organization, year, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.3, 0.75)}
      className='bg-black-200 p-5 rounded-lg border-l-4 border-[#8B5CF6] hover:border-[#EC4899] transition-all'
    >
      <div className='flex items-center gap-3'>
        <span className='text-2xl'>{icon}</span>
        <div>
          <h4 className='text-white font-bold text-[16px]'>{title}</h4>
          <p className='text-secondary text-[13px]'>{organization}</p>
          {year && <p className='text-[#8B5CF6] text-[12px] mt-1'>{year}</p>}
        </div>
      </div>
    </motion.div>
  );
};

const AchievementCard = ({ title, description, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5, 0.75)}
      className='bg-tertiary p-5 rounded-lg border-l-4 border-[#F59E0B] hover:border-[#EF4444] transition-all'
    >
      <div className='flex items-start gap-3'>
        <span className='text-3xl'>{icon}</span>
        <div>
          <h4 className='text-white font-bold text-[16px]'>{title}</h4>
          <p className='text-secondary text-[14px] mt-1'>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className='text-secondary text-[17px] uppercase tracking-wider'>My Academic Background</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Education & Certifications
        </h2>
      </motion.div>

      <div className='mt-20 max-w-7xl mx-auto'>
        
        {/* Education Section */}
        <div className='mb-16'>
          <h3 className='text-white text-[28px] font-bold mb-6 flex items-center gap-2'>
            🎓 Education
          </h3>
          <EducationCard
            icon="🏛️"
            degree="Bachelor of Science in Computer Science"
            university="C M R University - Bangalore, India"
            duration="Expected Graduation: July 2026 (4 years)"
            cgpa="Current CGPA: 8.9+"
            coursework="Data Structures & Algorithms, Object-Oriented Programming, Database Management, Web Development, Operating Systems, Software Engineering"
          />
        </div>

        {/* Certifications Section */}
        <div className='mb-16'>
          <h3 className='text-white text-[28px] font-bold mb-6 flex items-center gap-2'>
            ⚡ Certifications
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <CertificationCard
              icon="🗄️"
              title="Database Management"
              organization="NPTEL"
            />
            <CertificationCard
              icon="⚙️"
              title="Software Engineering"
              organization="Infosys Springboard"
            />
            <CertificationCard
              icon="📊"
              title="SQL Certification"
              organization="HackerRank"
            />
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className='text-white text-[28px] font-bold mb-6 flex items-center gap-2'>
            🏆 Achievements
          </h3>
          <div className='grid grid-cols-1 gap-5'>
            <AchievementCard
              icon="👥"
              title="Member of Tech Club"
              description="Active member contributing to various technical events and workshops"
            />
            <AchievementCard
              icon="🎨"
              title="Adobe Hackathon Participant"
              description="Participated in Adobe Hackathon, showcasing creative problem-solving skills"
            />
            <AchievementCard
              icon="🚀"
              title="Bharatiya Antariksh Hackathon 2025"
              description="Participated in the prestigious space technology hackathon organized in collaboration with ISRO"
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");

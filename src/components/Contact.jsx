import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xnngeqdp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10">
      {/* CONTACT ME Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          CONTACT ME
        </h2>
        <p className='text-secondary text-center max-w-3xl mx-auto mt-6 text-[18px]'>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. Feel free to reach out!
        </p>
      </motion.div>

      {/* Email Button */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mb-8"
      >
        <a
          href="mailto:shankarkarajanagi18@gmail.com"
          className="border-2 border-white py-3 px-8 rounded-xl text-white font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2"
        >
          <span className="text-xl">✉️</span>
          Email Me
        </a>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center gap-6 mb-20"
      >
        {/* GitHub */}
        <a
          href="https://github.com/ShankarKarajanagi18"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#2D3748] hover:bg-[#4A5568] transition-all flex items-center justify-center"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/shankar-karajanagi"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#2D3748] hover:bg-[#4A5568] transition-all flex items-center justify-center"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>

        {/* Twitter/X */}
        <a
          href="https://twitter.com/your-twitter-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#2D3748] hover:bg-[#4A5568] transition-all flex items-center justify-center"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </motion.div>

      {/* Contact Form */}
      <div className='flex justify-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl max-w-2xl w-full'
        >
          <p className='text-secondary text-[17px] uppercase tracking-wider'>Get in touch</p>
          <h3 className='text-white font-black md:text-[40px] sm:text-[30px] xs:text-[30px] text-[25px] mt-2'>
            Send Message
          </h3>

          {/* Success Message */}
          {success && (
            <div className='mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg'>
              <p className='text-green-400 text-center font-semibold'>
                ✅ Thank you! Your message has been sent successfully!
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className='mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg'>
              <p className='text-red-400 text-center font-semibold'>
                ❌ Oops! Something went wrong. Please try again.
              </p>
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 flex flex-col gap-6'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What do you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>

            <button
              type='submit'
              disabled={loading}
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-all disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

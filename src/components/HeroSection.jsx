import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="bg-indigo-900 text-white py-20 px-6 text-center">
    <motion.h1
      className="text-4xl md:text-5xl font-bold mb-4"
      initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and position off-screen (y-axis)
      animate={{ opacity: 1, y: 0 }} // Fade in and slide to the original position
      transition={{ duration: 0.8, delay: 0.3 }} // Duration and delay for smooth transition
    >
      Sell Your Software Licenses with Ease
    </motion.h1>
    <motion.p
      className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and position below
      animate={{ opacity: 1, y: 0 }} // Fade in and slide to the original position
      transition={{ duration: 0.8, delay: 0.5 }} // Duration and delay for smooth transition
    >
      Get quick valuations and fast payments for unused or surplus software licenses.
    </motion.p>
    <motion.button
      className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }} // Fade in with delay
    >
      Get a Quote
    </motion.button>
  </section>
);

export default HeroSection;

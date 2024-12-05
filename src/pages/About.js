import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <div className="container mx-auto py-20">
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold mb-8 text-gray-800"
    >
      About Us
    </motion.h2>
    <p className="text-lg text-gray-600">
      Your Digital Marketing Agency specializes in creating stunning websites for small businesses.
    </p>
  </div>
);

export default About;

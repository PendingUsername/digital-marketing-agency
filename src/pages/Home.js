import React from 'react';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'Their team created a website that brought in 300% more leads!',
    photo: '/assets/jane.jpg',
  },
  {
    name: 'John Smith',
    feedback: 'Fast, professional, and delivered exactly what I wanted!',
    photo: '/assets/john.jpg',
  },
];

const Home = () => (
  <div>
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          What Our Clients Say
        </motion.h2>
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  </div>
);

export default Home;

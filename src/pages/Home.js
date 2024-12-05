import React from 'react';
import HeroSection from '../components/HeroSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

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

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a digital marketing agency dedicated to helping small businesses thrive online.
            From website design to social media management and SEO, our mission is to empower
            businesses with a strong digital presence that drives results.
          </p>
          <img
            src="/assets/about-us.jpg"
            alt="About us"
            className="mt-8 rounded-lg shadow-lg mx-auto w-full max-w-3xl"
          />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What We Do</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We offer a range of digital marketing services designed to help you succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-primary mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Website Design</h3>
              <p className="text-gray-600">
                Modern, responsive websites tailored to your business needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-primary mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
              <p className="text-gray-600">
                Boost your search engine rankings and drive organic traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-primary mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Social Media Management</h3>
              <p className="text-gray-600">
                Engage your audience and grow your online presence on social platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">
                Our experts have years of experience in the digital marketing industry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">
                We’ve helped businesses grow their online presence and revenue.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Custom Strategies</h3>
              <p className="text-gray-600">
                We craft strategies tailored specifically to your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-16">
        <TestimonialsCarousel testimonials={testimonials} />
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-6">
            Let’s work together to create a powerful digital presence for your business.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

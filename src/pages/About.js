import React from 'react';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            We are a team of passionate digital marketers, designers, and strategists dedicated
            to empowering small businesses and professionals with stunning websites and impactful
            online marketing strategies.
          </p>
          <img
            src="/assets/about-header.jpg"
            alt="About Header"
            className="mt-8 rounded-lg shadow-lg mx-auto w-full max-w-3xl"
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At our agency, we aim to bridge the gap between small businesses and their
              online success. Our mission is to provide affordable, high-quality digital
              marketing solutions that drive measurable results and help businesses grow.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/assets/mission.jpg"
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Joshua Cook', role: 'Creative Director', image: '/assets/team1.jpg' },
              { name: 'Michael Smith', role: 'SEO Specialist', image: '/assets/team2.jpg' },
              { name: 'Sarah Brown', role: 'Social Media Manager', image: '/assets/team3.jpg' },
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Customer First', description: 'Our clients are our priority, always.' },
              { title: 'Innovation', description: 'We use cutting-edge solutions to deliver results.' },
              { title: 'Integrity', description: 'We operate with honesty and transparency.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-lg mb-6">
            We’re here to help you achieve your digital marketing goals. Let’s work together to
            create something amazing!
          </p>
          <a
            href="/contact"
            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

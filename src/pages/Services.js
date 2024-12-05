import React, { useState } from 'react';

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Website Design',
      description: 'Modern, responsive designs tailored to your needs.',
      icon: '💻',
      details:
        'We specialize in creating visually stunning websites that offer seamless user experiences. Whether you need an e-commerce platform, a business website, or a personal blog, we deliver websites that stand out.',
    },
    {
      id: 2,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic.',
      icon: '📈',
      details:
        'Our SEO services ensure your website ranks at the top of search results. From keyword research to technical optimization, we help your audience find you online.',
    },
    {
      id: 3,
      title: 'Social Media Management',
      description: 'Engage and grow your audience on social platforms.',
      icon: '📱',
      details:
        'We manage your social media presence, create engaging content, and drive meaningful interactions that grow your audience and brand recognition.',
    },
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-lg max-w-3xl mx-auto">
            We offer a wide range of digital marketing services designed to help your business
            succeed online. Explore our offerings below to see how we can help you achieve your
            goals.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white p-6 rounded-lg shadow-lg transition ${
                  expandedCard === service.id ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => toggleCard(service.id)}
                >
                  <div className="text-4xl text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                {expandedCard === service.id && (
                  <div className="mt-4 border-t pt-4 text-gray-700">
                    <p>{service.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 'Plan', description: 'We start with a strategy session to define goals.' },
              { step: 'Design', description: 'Crafting stunning visuals and layouts.' },
              { step: 'Execute', description: 'Developing and implementing strategies.' },
              { step: 'Deliver', description: 'Ensuring everything exceeds expectations.' },
            ].map((process, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{process.step}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-lg mb-6">
            Ready to grow your business? Contact us today to get started!
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

export default Services;

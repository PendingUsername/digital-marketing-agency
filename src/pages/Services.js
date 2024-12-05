import React, { useState } from 'react';

const Services = () => {
  const [expandedCards, setExpandedCards] = useState([]); // Array of expanded card IDs

  const services = [
    {
      id: 1,
      title: 'Website Design',
      description: 'Modern, responsive designs tailored to your needs.',
      icon: '💻',
      details:
        'Our website design services focus on creating beautiful, functional, and user-friendly websites that look great on any device. We specialize in responsive design, ensuring your site adapts seamlessly to different screen sizes. Whether you need a portfolio, e-commerce, or business site, we’ve got you covered!',
    },
    {
      id: 2,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic.',
      icon: '📈',
      details:
        'With our SEO services, your website will rank higher on search engines, making it easier for potential customers to find you. From keyword research to on-page optimization and backlink strategies, we implement industry best practices to boost your visibility online.',
    },
    {
      id: 3,
      title: 'Social Media Management',
      description: 'Engage and grow your audience on social platforms.',
      icon: '📱',
      details:
        'We help you create and maintain a strong presence on social media platforms like Facebook, Instagram, Twitter, and LinkedIn. Our services include content creation, posting schedules, analytics, and audience engagement to maximize your brand’s impact.',
    },
  ];

  const toggleCard = (id) => {
    if (expandedCards.includes(id)) {
      // If the card is already expanded, remove it from the array to collapse it
      setExpandedCards(expandedCards.filter((cardId) => cardId !== id));
    } else {
      // Otherwise, add it to the array to expand it
      setExpandedCards([...expandedCards, id]);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${
                expandedCards.includes(service.id) ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Card Click Area */}
              <div
                className="cursor-pointer"
                onClick={() => toggleCard(service.id)}
              >
                <div className="text-4xl text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>

              {/* Expanded Content */}
              {expandedCards.includes(service.id) && (
                <div className="mt-4 border-t pt-4 text-gray-700">
                  <p>{service.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

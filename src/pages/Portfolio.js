import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Restaurant Website',
      category: 'Website Design',
      image: '/assets/restaurant.jpg',
      description: 'A responsive and visually appealing website for a local restaurant.',
      details:
        'This project involved creating a custom website that included an online menu, booking system, and mobile responsiveness. The client saw a 30% increase in reservations after launch.',
    },
    {
      id: 2,
      title: 'Lawyer Landing Page',
      category: 'SEO Optimization',
      image: '/assets/lawyer.jpg',
      description: 'A professional and SEO-optimized landing page for a law firm.',
      details:
        'We optimized the landing page for local search results, increasing organic traffic by 200%. The design focused on conversions, leading to a significant uptick in inquiries.',
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      category: 'Website Design',
      image: '/assets/ecommerce.jpg',
      description: 'An online store for a small business selling handcrafted goods.',
      details:
        'This project included a fully functional e-commerce website with payment integration, inventory management, and shipping features. The client doubled their sales within the first month.',
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Social Media',
      image: '/assets/social-media.jpg',
      description: 'A targeted social media campaign for a fitness brand.',
      details:
        'We managed a 3-month social media campaign that included content creation, scheduling, and analytics tracking. Engagement rates increased by 50%, and followers grew by 15%.',
    },
  ];

  const categories = ['All', 'Website Design', 'SEO Optimization', 'Social Media'];

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6">Our Portfolio</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Explore some of our best work, from stunning websites to impactful digital campaigns.
          </p>
        </div>
      </section>

      {/* Filterable Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 mx-2 rounded-full ${
                  activeFilter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => openProject(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
            <button
              onClick={closeProject}
              className="text-gray-600 hover:text-gray-800 absolute top-4 right-4"
            >
              ✖
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-600">{selectedProject.details}</p>
          </div>
        </div>
      )}

      {/* Call-to-Action */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-6">
            Let’s bring your ideas to life. Contact us to get started on your project today!
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

export default Portfolio;

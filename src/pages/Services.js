const Services = () => {
  const services = [
    {
      title: 'Website Design',
      description: 'Modern, responsive designs tailored to your needs.',
      icon: '💻',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic.',
      icon: '📈',
    },
    {
      title: 'Social Media Management',
      description: 'Engage and grow your audience on social platforms.',
      icon: '📱',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

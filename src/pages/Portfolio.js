const portfolioItems = [
    {
      title: 'Restaurant Website',
      image: '/assets/restaurant.jpg',
    },
    {
      title: 'Lawyer Landing Page',
      image: '/assets/lawyer.jpg',
    },
    {
      title: 'E-commerce Platform',
      image: '/assets/ecommerce.jpg',
    },
  ];
  
  const Portfolio = () => {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">Our Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  
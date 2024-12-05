const HeroSection = () => {
    return (
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-500 text-white py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">
            Transform Your Business Online
          </h1>
          <p className="text-xl mb-8">
            Discover the power of digital marketing to boost your online presence.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/services"
              className="bg-white text-primary px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="bg-accent text-dark px-6 py-3 rounded-lg text-lg font-medium hover:bg-secondary hover:text-white transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  
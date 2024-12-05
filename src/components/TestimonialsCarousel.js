import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsCarousel = ({ testimonials }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">What Our Clients Say</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx} className="p-8 bg-gray-50 rounded-lg shadow-md">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="italic text-gray-700 mb-4">"{testimonial.feedback}"</p>
              <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

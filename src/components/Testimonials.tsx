
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Weekday.works has completely transformed how our team organizes and executes projects. The seamless integration between the calendar, tasks, and documents has increased our productivity by at least 30%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      company: "Design Studio",
      content: "As a creative team, we need tools that don't get in the way of our process. Weekday.works provides just the right amount of structure while being flexible enough for our creative workflows.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Freelance Consultant",
      company: "Self-employed",
      content: "Managing multiple clients and projects became so much easier with Weekday.works. I can track my time, organize my tasks, and communicate with clients all in one place.",
      rating: 4
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by professionals worldwide</h2>
          <p className="text-lg text-gray-600">
            See what our users have to say about how Weekday.works has improved their productivity.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl font-medium mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:ml-0 p-2 rounded-full bg-white shadow-md border border-gray-200 focus:outline-none"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 md:mr-0 p-2 rounded-full bg-white shadow-md border border-gray-200 focus:outline-none"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentIndex ? "bg-secondary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

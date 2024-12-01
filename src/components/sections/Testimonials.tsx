
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie Dupont',
    company: 'TechStart SAS',
    content: 'Key-Solution Tech a transformé notre vision en réalité. Leur expertise technique et leur professionnalisme sont remarquables.',
    rating: 5,
  },
  {
    name: 'Pierre Laurent',
    company: 'InnovCorp',
    content: 'Une équipe exceptionnelle qui a su comprendre nos besoins et livrer une solution parfaitement adaptée.',
    rating: 5,
  },
  {
    name: 'Sophie Martin',
    company: 'Digital Solutions',
    content: 'La qualité de leur travail et leur réactivité ont dépassé nos attentes. Un partenaire de confiance.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Témoignages Clients
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
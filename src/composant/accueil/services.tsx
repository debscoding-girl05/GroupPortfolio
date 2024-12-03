import { Globe, Smartphone, Code } from "lucide-react";
import { motion } from "framer-motion"; // Import motion for animations

const services = [
  {
    icon: Globe,
    title: "Développement Web",
    description:
      "Sites web responsifs, applications web progressives et plateformes e-commerce sur mesure.",
    features: ["Frontend moderne", "Backend robuste", "Optimisation SEO"],
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description:
      "Applications natives et cross-platform pour iOS et Android avec une expérience utilisateur exceptionnelle.",
    features: ["iOS & Android", "Design intuitif", "Performance optimale"],
  },
  {
    icon: Code,
    title: "Consultation Technique",
    description:
      "Expertise technique, audit de code et conseils stratégiques pour vos projets digitaux.",
    features: ["Architecture", "Sécurité", "Scalabilité"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-r from-gray-50 to-purple-50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Nos Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Initial state for scroll animation
              whileInView={{ opacity: 1, y: 0 }} // Animate to final state when in view
              transition={{ delay: 0.2 * index, duration: 0.8 }} // Delay based on index for staggered effect
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100"
            >
              <div className="flex justify-center mb-6">
                <service.icon className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6 text-center">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600 text-lg"
                  >
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

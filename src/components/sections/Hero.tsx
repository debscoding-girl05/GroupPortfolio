import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-16 pb-10 bg-gradient-to-br from-blue-300 via-white to-purple-100 overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute top-[-150px] left-[-100px] w-[300px] h-[300px] bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-purple-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Solutions
              </span>{" "}
              Technologiques
              <br />
              <span className="text-blue-600">Innovantes</span> pour votre
              Entreprise
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8">
              Nous transformons vos idées en solutions digitales performantes
              pour propulser votre entreprise vers l'avenir.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactez Nous
              <ArrowRight className="ml-3" size={20} />
            </motion.a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 relative w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl w-full h-auto max-w-lg mx-auto lg:mx-0 transition-transform duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

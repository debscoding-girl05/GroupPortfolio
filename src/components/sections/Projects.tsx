import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLink,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Slider from "react-slick";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plateforme de commerce électronique complète avec gestion des stocks et paiements sécurisés.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/example/repo",
    liveLink: "https://example.com",
  },
  {
    title: "Application Mobile de Livraison",
    description:
      "Application de livraison en temps réel avec suivi GPS et notifications push.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    github: "https://github.com/example/repo",
    liveLink: "https://example.com",
  },
  {
    title: "Système de Gestion RH",
    description:
      "Solution complète de gestion des ressources humaines avec tableaux de bord analytiques.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
    github: "https://github.com/example/repo",
    liveLink: "https://example.com",
  },
  {
    title: "Web Application",
    description:
      "Une application web moderne avec une interface utilisateur intuitive et des fonctionnalités avancées.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    technologies: ["Angular", "Node.js", "Express"],
    github: "https://github.com/example/repo",
    liveLink: "https://example.com",
  },
  {
    title: "E-learning Platform",
    description:
      "Plateforme d'apprentissage en ligne avec gestion des cours et des évaluations.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/example/repo",
    liveLink: "https://example.com",
  },
];

// Scroll-trigger animation
const scrollAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Projects = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
          Nos Projets
        </h2>

        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scrollAnimation}
              className="px-2 sm:px-4"
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] sm:h-[300px] md:h-[350px] object-cover transition-all duration-500 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-center">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 text-center mb-2 sm:mb-4 px-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-lg sm:text-2xl hover:text-gray-400 transition-colors" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink className="text-lg sm:text-2xl hover:text-gray-400 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-2 sm:pl-4 z-20">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="text-base sm:text-xl text-white bg-blue-500 p-2 sm:p-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-2 sm:pr-4 z-20">
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="text-base sm:text-xl text-white bg-blue-500 p-2 sm:p-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

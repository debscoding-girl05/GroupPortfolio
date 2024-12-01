import { Users, Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  { name: "Sarah Martin", role: "CEO & Lead Developer" },
  { name: "Thomas Dubois", role: "CTO & Architecture" },
  { name: "Marie Chen", role: "Full-Stack Developer" },
  { name: "Lucas Silva", role: "Mobile Developer" },
  { name: "Emma Bernard", role: "UI/UX Designer" },
  { name: "David Cohen", role: "Backend Developer" },
  { name: "Julie Nguyen", role: "Project Manager" },
];

const About = () => {
  // Slider settings
   const sliderSettings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true, // Enable autoplay
     autoplaySpeed: 2000, // Time between slide changes (in milliseconds)
     pauseOnHover: true, // Pause autoplay when hovering over the slider
     centerMode: true, // Adds a focused central slide for a more modern look
     focusOnSelect: true,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
         },
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 1,
         },
       },
     ],
   };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-tl from-blue-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          À Propos de Nous
        </motion.h2>

        {/* Icons Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="text-center p-6 group hover:scale-105 transition-transform duration-500 ease-in-out">
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-4 transition-transform group-hover:scale-125" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Notre Équipe
            </h3>
            <p className="text-gray-700">
              Une équipe de <strong>7 experts passionnés</strong>, maîtrisant
              les dernières technologies, dédiée à votre succès.
            </p>
          </div>
          <div className="text-center p-6 group hover:scale-105 transition-transform duration-500 ease-in-out">
            <Target className="w-16 h-16 text-blue-600 mx-auto mb-4 transition-transform group-hover:scale-125" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Notre Mission
            </h3>
            <p className="text-gray-700">
              Offrir des solutions digitales <strong>innovantes</strong> pour
              transformer vos idées en réalité.
            </p>
          </div>
          <div className="text-center p-6 group hover:scale-105 transition-transform duration-500 ease-in-out">
            <Lightbulb className="w-16 h-16 text-blue-600 mx-auto mb-4 transition-transform group-hover:scale-125" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Notre Vision
            </h3>
            <p className="text-gray-700">
              Être le <strong>partenaire technologique incontournable</strong>{" "}
              pour les entreprises innovantes.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-xl">
          <motion.h3
            className="text-3xl font-semibold text-center mb-8 text-gray-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Rencontrez Notre Équipe
          </motion.h3>

          {/* Slider */}
          <Slider {...sliderSettings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4 flex justify-center">
                <div className="p-6 bg-white rounded-lg shadow-lg text-center w-72 ">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-blue-600 font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default About;

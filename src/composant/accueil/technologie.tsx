import { motion } from "framer-motion"; // Import framer-motion
import { DiCss3, DiDatabase, DiHtml5, DiJava, DiPython } from "react-icons/di";
import { FaJsSquare, FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { SiFlutter, SiPhp } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const technologies = [
  { id: 1, icon: RiReactjsLine, color: "text-cyan-400" },
  { id: 2, icon: TbBrandReactNative, color: "text-blue-500" },
  { id: 3, icon: FaNodeJs, color: "text-green-500" },
  { id: 4, icon: FaJsSquare, color: "text-yellow-500" },
  { id: 5, icon: IoLogoFirebase, color: "text-orange-500" },
  { id: 6, icon: SiPhp, color: "text-purple-600" },
  { id: 7, icon: DiDatabase, color: "text-red-500" },
  { id: 8, icon: DiCss3, color: "text-blue-400" },
  { id: 9, icon: DiHtml5, color: "text-orange-400" },
  { id: 10, icon: SiFlutter, color: "text-sky-500" },
  { id: 11, icon: DiJava, color: "text-indigo-500" },
  { id: 12, icon: DiPython, color: "text-blue-300" },
];

// Scroll-trigger animation
const scrollAnimation = {
  hidden: { opacity: 0, y: 50 }, // Initial state
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Smooth slide-in
};

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Nos Technologies
        </h2>
        <div className="flex justify-center flex-wrap gap-6">
          {technologies.map(({ id, icon: Icon, color }) => (
            <motion.div
              key={id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
              variants={scrollAnimation}
              className={`bg-white p-6 rounded-full shadow-lg flex justify-center items-center floating-${id}`}
              style={{
                width: "90px", // Fixed width for the circle
                height: "90px", // Fixed height for the circle
              }}
            >
              <Icon className={`text-4xl ${color}`} />
            </motion.div>
          ))}
        </div>
      </div>
      {/* CSS for floating animations */}
      <style>{`
        ${technologies
          .map(
            ({ id }) => `
        @keyframes float-${id} {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .floating-${id} {
          animation: float-${id} 3s ease-in-out infinite;
          animation-delay: ${id * 0.2}s;
        }
      `
          )
          .join("\n")}
      `}</style>
    </section>
  );
};

export default Technologies;

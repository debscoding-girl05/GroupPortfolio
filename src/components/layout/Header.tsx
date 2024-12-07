import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DiGithub } from "react-icons/di";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Accueil", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

 
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-2 bg-transparent">
      <nav className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 bg-gray-500 backdrop-blur-md rounded-full shadow-xl">
          {/* Logo and Brand Name */}
          <motion.div
            className="flex items-center space-x-3 pl-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="src\images\logo.png" 
              alt="Logo"
              className="h-10 w-10 object-contain rounded-full bg-gradient-to-r from-white to-gray-500"
            />
            <span className="text-xl font-bold text-white tracking-wider">
              Key-Solution Tech
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center justify-center mr-5">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors group relative"
                onClick={(e) => handleScroll(e, item.href)}
                variants={itemVariants}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-gray-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}

            {/* GitHub CTA Button */}
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-2 py-2 mr-2 text-sm font-medium rounded-full text-white flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-gray-500"
              
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <DiGithub size={25} />
              <span>Visitez GitHub</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden absolute right-4">
            <button
              className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute left-[2.5%] top-full left-0 w-[95%] mt-2 bg-gray-500 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 py-6 px-6">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-lg font-medium"
                    onClick={(e) => handleScroll(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-3 text-center text-white rounded-full flex items-center justify-center space-x-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DiGithub size={25} />
                  <span>Visitez GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

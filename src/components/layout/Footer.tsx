import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" relative  text-white py-12 bg-[url('./src/assets/img/svg.png')] bg-cover h-[700px] relative w-[100%]">
      <div className=" absolute left-0 right-0 bottom-[16px] container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            
            <div className='flex gap-[5px] '>
              <img src="../src/assets/img/logo.png" alt="Logo" className="w-[50px] sm: mt-[-10px]" />
              <h3 className="text-gray-700 font-bold mb-4">Key-Solution Tech</h3>
            </div>
            <p className="text-gray-700 sm:text-white">
              Solutions technologiques innovantes pour propulser votre entreprise vers l'avenir.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-700 font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white hover:text-white transition-colors">Développement Web</a></li>
              <li><a href="#services" className="text-white hover:text-white transition-colors">Applications Mobiles</a></li>
              <li><a href="#services" className="text-white hover:text-white transition-colors">Consultation Technique</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-700 font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white hover:text-white transition-colors">À propos</a></li>
              <li><a href="#projects" className="text-white hover:text-white transition-colors">Projets</a></li>
              <li><a href="#contact" className="text-white hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-700 font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white mt-8 pt-8 text-center text-gray-700">
          <p>&copy; {new Date().getFullYear()} Key-Solution Tech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
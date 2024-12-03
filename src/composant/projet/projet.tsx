
import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLink,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Galery = () => {
  // Définir le tableau d'images avec leur description
  const images = [
    {
      src: './src/assets/ressources/bamboos.jpg',
      description: 'Bamboo forest',
      github: 'jjsjsjhsjhsjhshjs'
    },
    {
      src: './src/assets/ressources/castle.jpg',
      description: 'Castle view',
      github: '',
      livelink: ''
    },
    {
      src: './src/assets/ressources/fuji.jpg',
      description: 'Mount Fuji',
      github: '',
      livelink: ''
    },
    {
      src: './src/assets/ressources/lights.jpg',
      description: 'City lights',
      github: '',
      livelink: ''
    },
    {
      src: './src/assets/ressources/porte.jpg',
      description: 'Wooden door',
      github: '',
      livelink: ''
    },
    {
      src: './src/assets/ressources/store.jpg',
      description: 'Storefront',
      github: '',
      livelink: ''
    },
    {
      src: './src/assets/ressources/bamboos.jpg',
      description: 'Bamboo forest',
      github: '',
      livelink: ''
    },
    {
      src: './src/assets/ressources/castle.jpg',
      description: 'Castle view',
      github: '',
      livelink: ''
    },
    {
      src: './src/assets/ressources/fuji.jpg',
      description: 'Mount Fuji',
      github: '',
      livelink: ''
    },
    {
      src: './src/assets/ressources/lights.jpg',
      description: 'City lights',
      github: '',
      livelink: ''
    },
    {
      src: './src/assets/ressources/porte.jpg',
      description: 'Wooden door',
      github: '',
      livelink: ''
    },
    {
      src: './src/assets/ressources/store.jpg',
      description: 'Storefront',
      github: '',
      livelink: ''
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div id="projet" className="  absolute top-[190px] right-0 left-0 pl-[20px] pr-[20px] sm:pl-[40px] sm:pr-[40px]"
    initial={{ opacity: 0, y: 50 }} // Initial state for scroll animation
    whileInView={{ opacity: 1, y: 0 }} // Animate to final state when in view
    transition={{ delay: 0.2 , duration: 0.8 }}>

      <motion.div id="projetlimit" className='bg-white shadow-2xl p-[15px] flex flex-col max-w-[1100px] mx-auto  flex flex-wrap gap-[2vmin] px-[14px]'
      variants={itemAnimation}>
        <div className='flex justify-center pt-[10px] pb-[10px]'>
          <h2 className='titreprojet'>Projets réaliser</h2>
        </div>
        <div className="max-w-[1100px] mx-auto  flex flex-wrap gap-[2vmin] px-[14px]">

          {images.map((image, index) => (
            <div
              key={index}
              className="list-none flex-grow h-[250px] overflow-hidden relative"
            >
              <img
                src={image.src}
                alt={image.description}
                className={`w-full h-full object-cover transition-all duration-500 ${selectedImage === image.src ? 'opacity-50' : ''}`}
                onClick={() => handleImageClick(image.src)}
              />
              {selectedImage === image.src && (
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col gap-10 justify-center items-center">
                  <p className="text-xl font-semibold">{image.description}</p>
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href={image.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-lg sm:text-2xl hover:text-black text-gray-400 transition-colors" />
                    </a>
                    <a
                      href={image.livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink className="text-lg hover:text-bleu sm:text-2xl text-gray-400 transition-colors" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Galery;

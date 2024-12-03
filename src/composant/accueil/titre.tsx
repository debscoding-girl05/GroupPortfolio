import React from 'react';
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

function TitreAccueil() {
  return (
    <>
      <div className="divtitre">
        {/* Animation pour le titre */}
        <motion.h1
          className="titre"
          initial={{ opacity: 0, y: -50 }} // Départ invisible et déplacé vers le haut
          animate={{ opacity: 1, y: 0 }} // Finition visible et à sa position normale
          transition={{ duration: 2.5 }} // Durée de l'animation
        >
          Key-solution <br /> Tech
        </motion.h1>

        {/* Animation pour la description */}
        <motion.p
          className="describetitre"
          initial={{ opacity: 0, x: -100 }} // Départ invisible et décalé à gauche
          animate={{ opacity: 1, x: 0 }} // Finition visible et à sa position normale
          transition={{ duration: 2.5, delay: 0.5 }} // Animation avec un délai
        >

          Solutions Technologiques
          Innovantes pour votre Entreprise
          Nous transformons vos idées en solutions digitales performantes pour propulser votre entreprise vers l'avenir.
        </motion.p>

        {/* Animation simple pour le bouton */}
        <motion.button
          className="btntitre bg-gradient-to-r from-blue-500 to-gray-500 flex"
          whileHover={{ scale: 1.1 }} // Agrandit légèrement au survol
          whileTap={{ scale: 0.9 }} // Rétrécit légèrement au clic
          transition={{ type: "spring", stiffness: 300 }}
        >
          Contactez Nous
          <ArrowRight className="ml-3" size={20} />
        </motion.button>
      </div>
    </>
  );
}

export default TitreAccueil;

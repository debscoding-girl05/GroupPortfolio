import React, { useState } from 'react';
import { DiGithub } from "react-icons/di";

// Définir les types des props
interface NavbarProps {
  onAfficherserv: () => void; // Déclare que onAfficherserv est une fonction sans argument qui ne retourne rien
  onAfficheracc: () => void;
  onAffichecontact: () => void;
  onAfficheproj: () => void;
}
function Navbar({onAfficherserv, onAfficheracc, onAfficheproj, onAffichecontact, }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Fermer le menu
  };

  return (
    <div  id="accueil" className="flex w-full p-5 justify-between z-[1000] items-center bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="../src/assets/img/logo.png" alt="Logo" className="w-24" />
      </div>

      {/* Menu burger (visible uniquement sur les petits écrans) */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menu principal */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        }   sm:flex sm:gap-5 p-5 sm:p-5 sm:rounded-lg sm:bg-white  mt-[50px] sm:shadow-lg absolute sm:static top-16 left-0 w-full sm:w-auto bg-white shadow-md z-20`}
      >
        <li className="p-3 sm:p-0">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition" onClick={(e) => {
          e.preventDefault();
          onAfficheracc();
          closeMenu()
        }}>
            Accueil
          </a>
        </li>
        <li className="p-3 sm:p-0">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition"  onClick={(e) => {
          e.preventDefault();
          onAfficherserv();
          closeMenu()
        }}>
            Services
          </a>
        </li>
        <li className="p-3 sm:p-0">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition" onClick={(e) => {
          e.preventDefault();
          onAfficheproj();
          closeMenu()
        }}>
            Projets
          </a>
        </li>
        <li className="p-3 sm:p-0">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition"
          onClick={(e) => {
            e.preventDefault();
            onAffichecontact();
            closeMenu()
          }}>
            Contact
          </a>
        </li>

        {/* Bouton "Get Start" */}
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-gray-500 w-full sm:w-30 py-2 p-10 rounded-full shadow-md text-white">
        <DiGithub size={25} />
        <span>Visitez GitHub</span>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;

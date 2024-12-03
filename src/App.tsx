import { useState, useEffect } from 'react'

import './assets/css/style.css'
import Navbar from './composant/layout/navbar';
import Reseaux from './composant/layout/footer';
import Accueil from './Accueil';
import Contact from './composant/contact';
import Projets from './composant/projet/projet';
function App() {
  const [count, setCount] = useState(0)

  const [afficherservices, Setafficherservices] = useState(false)
  const [afficheraccueil, Setafficheraccueil] = useState(true)
  const [affichercontact, Setaffichercontact] = useState(false)
  const [afficherprojet, Setafficherprojet] = useState(false)

  const handleScroll = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  function setAccueil() {
    Setaffichercontact(false)
    Setafficherprojet(false)
    handleScroll('#accueil')
    Setafficheraccueil(true)
  }

  function setServices() {
    handleScroll('#services')
  }

  function setContact() {
    Setafficherprojet(false)
    handleScroll('#contact')
    Setaffichercontact(true)
    
  }

  function SetProjet() {
    Setaffichercontact(false)
    handleScroll('#projet')
    Setafficherprojet(true)
  }
  

 // Fermer les fenêtres de contact et de projet si on clique en dehors
 useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    const contactLimit = document.getElementById('contactlimit');
    const projetLimit = document.getElementById('projetlimit');

    if (
      affichercontact &&
      contactLimit &&
      !contactLimit.contains(event.target as Node)
    ) {
      Setaffichercontact(false);
    }

    if (
      afficherprojet &&
      projetLimit &&
      !projetLimit.contains(event.target as Node)
    ) {
      Setafficherprojet(false);
    }
  }

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [affichercontact, afficherprojet]);


  return (
    <>
      <div className="containeraccueil overflow-x-hidden relative">
        <Navbar onAfficherserv={setServices} onAfficheracc={setAccueil} onAffichecontact={setContact}  onAfficheproj={SetProjet}  />
        {afficheraccueil && <Accueil />}
        <div className="containerreseaux">
        {affichercontact && <Contact />}
        {afficherprojet &&<Projets/>}
         <Reseaux onAfficherservs={setServices} onAfficheraccs={setAccueil} onAffichecontacts={setContact}  onAfficheprojs={SetProjet}/>
        </div>
      </div>
    </>
  )
}

export default App

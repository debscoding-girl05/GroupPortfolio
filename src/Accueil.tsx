import Titre from './composant/accueil/titre'
import Technologies from './composant/accueil/technologie'
import Apropos from './composant/accueil/apropos'
import Service from './composant/accueil/services'


function Accueil (){
    return(
        <>
        <div className="containblock">
          <div className="blockaccueil1">
            <Titre />
          </div>
          <div className="blockaccueil2">
            <img src="./src/assets/img/8459338.jpg" alt="" className="imgillustration" />
          </div>
        </div>
        <Apropos/>
        <Service/>
      
        <Technologies/>
        </>
    )
}

export default Accueil;
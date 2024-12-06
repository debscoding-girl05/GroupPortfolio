import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface NavbarProps {
    onAfficherservs: () => void; // Déclare que onAfficherserv est une fonction sans argument qui ne retourne rien
    onAfficheraccs: () => void;
    onAffichecontacts: () => void;
    onAfficheprojs: () => void;
}
function Reseaux({onAfficherservs, onAfficheraccs, onAfficheprojs, onAffichecontacts, }: NavbarProps) {

    return (
        <>
            <div className='bg-gray-50 bg-[url("./src/assets/img/svg.png")] bg-cover h-[700px] relative w-[100%]'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-bleu-500 pl-10 pr-10 pt-20 pb-20 absolute bottom-10">
                    <div className='flex flex-col sm:pl-20 gap-4 sm:items-start'>
                        <div className="flex gap-4  items-center sm:items-start justify-center sm:justify-start">
                            <img src="../src/assets/img/logo.png" alt="Logo" className="w-11 sm:mt-[15px]" />
                            <h4 className='mb-5  font-bold mt-4 keyfoot'>Key-solution tech</h4>
                        </div>

                        <p className='sm:text-white hover:text-white transition-colors text-center sm:text-left textfoot '>
                        Nous offrons des solutions innovantes en informatique et technologie pour accompagner la transformation numérique des entreprises.                        </p>
                    </div>
                    <div className='p-4 flex flex-col justify-center items-center sm:items-start sm:pl-20'>
                        <h4 className='mb-5 text-lg font-bold mb-4 mt-4'>Service</h4>
                        <div className='flex flex-col gap-2 items-center sm:items-start '>
                            <p className='cursor-pointer textfoot text-black sm:text-white hover:text-white transition-colors'
                            onClick={(e) => {
                                e.preventDefault();
                                onAfficherservs();
                            }}>Developpement web</p>
                            <p className='cursor-pointer textfoot text-black sm:text-white hover:text-white transition-colors'
                            onClick={(e) => {
                                e.preventDefault();
                                onAfficherservs();
                            }}>Application mobile</p>
                            <p className='cursor-pointer textfoot text-black sm:text-white hover:text-white transition-colors'
                            onClick={(e) => {
                                e.preventDefault();
                                onAfficherservs();
                            }}>Consutation technique</p>
                        </div>
                    </div>
                    <div className='flex flex-col sm:pr-20 gap-2 justify-center items-center sm:items-start sm:pl-20'>
                        <h4 className='mb-5 text-lg font-bold mb-4 mt-4'>Sections</h4>
                        <p className='cursor-pointer textfoot text-white hover:text-white transition-colors' onClick={(e) => {
                            e.preventDefault();
                            onAfficheraccs();
                        }}>Accueil</p>
                        <p className='cursor-pointer textfoot text-white hover:text-white transition-colors' onClick={(e) => {
                            e.preventDefault();
                            onAfficherservs();
                        }}>Services</p>
                        <p className='cursor-pointer textfoot text-white hover:text-white transition-colors' onClick={(e) => {
                            e.preventDefault();
                            onAfficheprojs();
                           
                        }}>Projet</p>
                         <p className='cursor-pointer textfoot text-white hover:text-white transition-colors' onClick={(e) => {
                            e.preventDefault();
                            onAffichecontacts();
                           
                        }}>Contact</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center sm:items-start sm:pl-20'>
                        <h4 className='mb-5 text-lg font-bold mb-4 mt-4'>Reseaux</h4>
                        <div className='flex gap-2'>
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
                <div className='absolute bottom-0 left-0 right-0'>
                    <div className="flex w-full justify-center">
                        <hr className='w-[40%]' />
                    </div>
                    <div className='p-5'>
                        <p className='textfoot flex justify-center text-black'>&copy; {new Date().getFullYear()} Key-Solution Tech. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reseaux;

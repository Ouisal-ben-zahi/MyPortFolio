import React from 'react'
import { motion } from "motion/react"
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className='my-20 text-center text-4xl'>À propos  
         <span className='text-neutral-500'> de Moi </span>
        </h2>
        <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className ="rounded-2xl" src="./dev.jpg" width={500} height={500} alt="About" />
                </div>
            </motion.div>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
             className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>Je suis une développeuse Full Stack dévouée et polyvalente, passionnée par la création d'applications web performantes et intuitives. J’ai travaillé avec diverses technologies telles que React, Laravel, MySQL, Tailwind CSS et MongoDB.

Mon parcours a débuté par une grande curiosité pour le fonctionnement des systèmes numériques, et s’est transformé en une véritable carrière axée sur l’apprentissage continu et l’adaptation aux nouveaux défis.

J’évolue avec enthousiasme dans des environnements collaboratifs et je prends plaisir à résoudre des problèmes complexes afin de proposer des solutions robustes et de qualité.

En dehors du développement, j’aime explorer les nouvelles technologies, rester active et m’investir dans des projets open source.</p>
                    </div>
            <a
              href="./Ben_zahi-Ouissal.pdf"
              download
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 
              px-6 py-3 text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:py-5 lg:text-lg">
              <FaDownload className="text-lg md:text-xl lg:text-2xl" />
              Télécharger le CV
            </a>
            </motion.div>
            
        </div>
       
    </div>
  )
}

export default About

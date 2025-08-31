import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
        initial={{opacity: 0, x:200}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
        className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id="About">
            <h1 className='text-2xl sm:text-4xl font-bold mb-6'>A Propos de <span className='underline underline-offset-4 decoration-1 under font-light'>M&K Consulting SARL</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Fondée en avril 2015 à Bukavu, en République Démocratique du Congo (RDC), <b>M&K Consulting SARL</b> est une société spécialisée dans le conseil, la conception et la réalisation de projets de construction. Forte de son expertise locale et régionale, l’entreprise s’engage à offrir des solutions innovantes et durables, adaptées aux besoins d’une clientèle variée, allant du secteur privé aux institutions publiques.

            </p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.worker} className='w-full sm:w-1/2 rounded-xl max-w-lg' alt="" />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>Années d'expérience</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>15+</p>
                            <p>Projets achévés</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>20+</p>
                            <p>Etudes réalisées</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>5+</p>
                            <p>Projets en cours</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg'>
                        Avec plus de 10 ans d’expérience, <b>M&K Consulting SARL</b> s’est imposée comme un partenaire de confiance dans le domaine du conseil, de la conception et de la construction. Depuis sa création, l’entreprise a réalisé avec succès plus de 15 projets de construction et conduit plus de 20 études techniques, tout en pilotant actuellement plusieurs projets en cours. Cette expertise éprouvée, alliée à une vision innovante et à une rigueur professionnelle, permet à <b>M&K Consulting SARL</b> d’accompagner efficacement une clientèle diversifiée, allant des acteurs privés aux institutions publiques, en RDC et dans la région.
                    </p>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded-md'>En savoir plus</button>
                </div>
            </div>
        </motion.div>
    )
}

export default About
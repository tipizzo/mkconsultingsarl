import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-100 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img className='w-[180px] h-[110px] rounded-lg mb-2' src={assets.mklogoimg} alt="" />
                    <p className='text-gray-500 max-w-80 text-[14px]'>contact@mkconsultingsarl.com</p>
                    <p className='text-gray-500 max-w-80 text-[14px]'>+(243) 820 165 314 / +(243) 994 467 300</p>
                    <p className='text-gray-500 max-w-80 text-[14px]'>Av. P.E Lumumba 79 Bukavu. Sud-Kivu DRC.</p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-gray-500 text-lg font-bold mb-4'>Entreprise</h3>
                    <ul className='flex flex-col gap-2 text-gray-500'>
                        <a href='#Header' className='hover:text-gray-400'>Accueil</a>
                        <a href='#About' className='hover:text-gray-400'>A Propos de nous</a>
                        <a href='#Projects' className='hover:text-gray-400'>Projets</a>
                        <a href='#' className='hover:text-gray-400'>Politique de confidentialité</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-gray-500 text-lg font-bold mb-4'>Abonnez-vous à notre newsletter</h3>
                    <p className='text-gray-500 mb-4 max-w-80'>
                        Abonnez-vous et découvrez nos dernières réalisations et innovations
                    </p>
                    <div className='flex gap-2'>
                        <input className='p-2 rounded bg-white border border-gray-300 focus:outline-none w-full md:w-auto' type="email" placeholder='janedo@email.com' />
                        <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-200 py-4 mt-10 text-center text-gray-500'>
             <p className='text-gray-900'>© {currentYear} M&K CONSULTING SARL. Tous droits réservés.</p>
            </div>
        </div>
    )
}

export default Footer
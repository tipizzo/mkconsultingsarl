import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-100 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img className='w-[200px] h-[150px] rounded-lg' src={assets.mklogoimg} alt="" />
                <p className='text-gray-400 mt-4'>Avec chaque projet, nous nous engageons à créer des espaces qui inspirent et durent. Parlons de vos idées et concrétisons-les ensemble.</p>
            </div>
            <div>
                <h3 className='text-gray-500 text-lg font-bold mb-4'>Société</h3>
                <ul>
                    <a href='#Header' className='hover:text-gray-400'>Accueil</a>
                    <a href='#About' className='hover:text-gray-400'>A Propos de nous</a>
                    <a href='#Projects' className='hover:text-gray-400'>Projets</a>
                    <a href='#' className='hover:text-gray-400'>Politique de confidentialité</a>
                </ul>
            </div>
            <div></div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer
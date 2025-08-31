import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        if(showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }

    }, [showMobileMenu])


  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-4 md:px-8 lg:px-16 bg-transparent'>
            <img src={assets.logo} alt="" style={{width: "200px", height: "130px"}} />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href='#Header' className='cursor-pointer hover:text-gray-400'>Accueil</a>
                <a href='#About' className='cursor-pointer hover:text-gray-400'>A Propos de nous</a>
                <a href='#Projects' className='cursor-pointer hover:text-gray-400'>Projets</a>
                <a href='#Testimonials' className='cursor-pointer hover:text-gray-400'>Temoignages</a>
            </ul>
            <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' />
        </div>

        {/* ---------- Mobile Menu ----------- */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} pt-12 right-0 top-0 bottom-0 overflow-hidden bg-white transition-all'`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={() => setShowMobileMenu(false)} href='#Header' className='px-4 py-2 rounded-full inline-block'>Accueil</a>
                <a onClick={() => setShowMobileMenu(false)} href='#About' className='px-4 py-2 rounded-full inline-block'>A Propos de nous</a>
                <a onClick={() => setShowMobileMenu(false)} href='#Projects' className='px-4 py-2 rounded-full inline-block'>Projets</a>
                <a onClick={() => setShowMobileMenu(false)} href='#Testimonials' className='px-4 py-2 rounded-full inline-block'>Temoignages</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
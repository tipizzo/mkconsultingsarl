import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className="relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
            style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/workers.png')"
            }}
            id="Header">
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Innovation et savoir-faire au service de vos constructions.</h2>
                <div className='flex flex-col items-center gap-5 md:flex-row md:justify-center mt-16'>
                    <a href='#Projects' className='border border-white border-2 w-[160px] px-5 md:px-8 py-3 rounded-md'>Nos Projets</a>
                    <a href='#Contact' className='bg-blue-500 w-[160px] px-5 md:px-8 py-3 rounded-md'>Nos Contacts</a>
                </div>
            </motion.div>
        </div>
    )
}

export default Header
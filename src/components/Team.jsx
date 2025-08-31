import React from 'react'
import { testimonialsData } from '../assets/assets'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Team = () => {
  return (
    <motion.div
    initial={{opacity: 0, x:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Team'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Notre<span className='underline underline-offset-4 decoration-1 under font-light'> Equipe</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Une équipe d’experts passionnés, alliant savoir-faire et créativité, dédiée à concrétiser vos projets de construction avec excellence et précision.</p>

        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonial, index) => (
                <div key={index} className='max-w-[340px] border border-gray-200 shadow-xl rounded px-8 py-12 text-center'>
                    <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                    <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                    <p className='text-gray-500 mb-2 text-sm'>{testimonial.title}</p>
                    <a className='flex justify-center mb-2 cursor-pointer' href={testimonial.linkdin}><img src={assets.linkedin} className='w-5 h-5 rounded' /></a>
                    <p className='text-gray-600'>{testimonial.text}</p>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Team
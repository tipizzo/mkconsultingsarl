import React, { use, useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(1);
    const [category, setCategory] = useState("Projets en cours");
    const [selectedProject, setSelectedProject] = useState(null)


    // Filter projects by category

    const filteredProjects = projectsData.filter((project) => project.category === category)

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length)
            } else {
                setCardsToShow(1)
            };
        };

        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return () => window.addEventListener('resize', updateCardsToShow);

    }, [filteredProjects])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length)
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1)
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projets <span className='underline underline-offset-4 decoration-1 under font-light'>Réalisés</span></h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>De la vision à la réalité, explorez notre portefeuille de projets.</p>

            <div className='flex justify-center mb-8'>
                {["Projets en cours", "Projets réalisés", "Etudes réalisées"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setCategory(cat)
                            setCurrentIndex(0)
                        }}
                        className={`px-3 py-3 text-sm md:text-md font-medium cursor-pointer w-full sm:w-auto ${category === cat
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Slider buttons */}
            <div className='flex justify-end items-center mb-8'>
                <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt='Previous' />
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt='Next' />
                </button>
            </div>

            {/* Project Slider COntainer */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-599 ease-in-out cursor-pointer'
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}% )` }}
                >
                    {filteredProjects.map((project, index) => (
                        <div
                            className='relative flex-shrink-0 w-full sm:w-1/4'
                            key={index}
                            onClick={() => setSelectedProject(project)}
                        >
                            <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                    <p className='text-gray-500 text-sm'>
                                        {project.price} <span className='px-1'> | </span> {project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Project details modal */}


            {selectedProject && (
                <AnimatePresence>
                    <motion.div
                    className='fixed inset-0 bg-black/70 flex justify-center items-center z-50'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{ opacity: 0 }}
                    >
                        <motion.div 
                        className='bg-gray-100 rounded-lg shadow-lg max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 relative'
                        initial={{ opacity: 0, scale: 0.9, y:50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ duration: 0.3 }}
                        > 
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className='absolute top-3 right-3 text-gray-600 hover:text-black text- cursor-pointer'
                            >
                                &times;
                            </button>
                            <h2 className='text-2xl font-bold mb-2'>{selectedProject.title}</h2>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className='w-full h-60 object-cover rounded-md mb-4'
                            />
                            <p>{selectedProject.price} | {selectedProject.location}</p>
                            <p>{selectedProject.description1}</p>
                            <img src={selectedProject.image2} className='w-full h-60 object-cover rounded0md mb-4' />
                            <p>{selectedProject.description2}</p>
                            <img src={selectedProject.image3} className='w-full h-60 object-cover rounded0md mb-4' />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            )}
        </motion.div>
    )
}

export default Projects
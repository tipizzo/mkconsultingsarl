import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Team from './components/Team'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Team />
      <Contact />
    </div>
  )
}

export default App
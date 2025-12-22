import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills';

function App() {

  useEffect(() => {
    document.documentElement.classList.add('dark');
    const loadParticles = async () => {
      await import('@tsparticles/preset-snow');
    };
    loadParticles();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App

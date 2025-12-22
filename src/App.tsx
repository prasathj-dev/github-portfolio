import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills';
import PageLoader from './components/sections/PageLoader'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    const loadParticles = async () => {
      await import('@tsparticles/preset-snow');
    };
    loadParticles();
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const AppContent = () => {
    return (
      <>
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
      </>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {loading ? <PageLoader /> : <AppContent />}
    </div>
  )
}

export default App

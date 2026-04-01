import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App

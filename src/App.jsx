import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Experince from './sections/Experince'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Experince />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App

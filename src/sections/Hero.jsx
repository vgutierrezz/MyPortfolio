import { Mail, FileDown, Linkedin, Github } from "lucide-react"

function Hero() {
  return (
    <section id="inicio" className="section">
      <h1>Valentina Gutierrez</h1>
      <h3 className="hero-position" >Software Developer Full Stack</h3>
      <div className="hero-socials" aria-label="Redes sociales">
        <a
          href="https://www.linkedin.com/in/valentina-gutierrez-a6b060207/"
          className="hero-socials__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/vgutierrezz?tab=repositories"
          className="hero-socials__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
      </div>
      <p className="lede">
        Desarrolladora Full Stack con 3 años de experiencia en CONAE. 
        Trabajando en integración de APIs, optimización de
        aplicaciones y gestión de datos. Motivada por el aprendizaje continuo y orientada a
        resultados, con enfoque en soluciones eficientes y trabajo con equipos multidiciplinarios.

      </p>


      <div className="contact-links">
        <a
          href="mailto:gutierrezvalentina14@gmail.com"
          className="contact-button contact-button--primary"
          aria-label="Escribeme por correo"
        >
          <Mail size={18} /> Contactame
        </a>
        <a
          href="/ValentinaGuti%C3%A9rrezCV.pdf"
          className="contact-button contact-button--ghost"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Descargar CV"
          download
        >
          <FileDown size={18} /> Descargar CV
        </a>
      </div>
    </section>
  )
}

export default Hero

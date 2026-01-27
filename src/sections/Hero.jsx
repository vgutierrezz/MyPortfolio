import { Linkedin, Github } from 'lucide-react'

function Hero() {
	return (
		<section id="inicio" className="section">
			<h1>Valentina Gutiérrez</h1>
            <h3>Software Developer Full Stack</h3>
			<p className="lede">
                Especializada en frontend moderno (React,
                Angular) y backend robusto (APIs REST, Spring Framework). Pasionada por optimizar
                performance, automatizar flujos y mentorizar equipos técnicos.
                </p>
                <div className="contact-links">
        <a href="https://www.linkedin.com/in/valentina-gutierrez-a6b060207/" className="contact-button contact-button--linkedin">
          <Linkedin size={20} /> LinkedIn
        </a>
        <a href="https://github.com/vgutierrezz?tab=repositories" target="_blank" rel="noopener noreferrer" className="contact-button contact-button--secondary">
          <Github size={20} /> GitHub
        </a>
      </div>
        </section>
    )
}

export default Hero

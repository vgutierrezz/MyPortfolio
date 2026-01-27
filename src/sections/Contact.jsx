import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react'

function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'gutierrezvalentina14@gmail.com',
      href: 'mailto:gutierrezvalentina14@gmail.com',
      color: 'contact-method--email'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Conecta conmigo',
      href: 'https://www.linkedin.com/in/valentina-gutierrez-a6b060207/',
      color: 'contact-method--linkedin'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Ver mis proyectos',
      href: 'https://github.com/vgutierrezz',
      color: 'contact-method--github'
    }
  ]

	return (
		<section id="contacto" className="section">
			<h2>CONTACTO</h2>
      <p>¿Crees que podemos trabajar juntos? Contáctame y coordinemos una llamada.</p>
      <div className="contact-methods">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          return (
            <a key={index} href={method.href} target={method.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className={`contact-method ${method.color}`}>
              <div className="contact-method__icon">
                <Icon size={28} />
              </div>
              <div className="contact-method__content">
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
export default Contact

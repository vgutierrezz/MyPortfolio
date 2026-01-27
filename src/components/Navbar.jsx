import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
	{ label: 'Inicio', href: '#inicio' },
	{ label: 'Habilidades', href: '#habilidades' },
	{ label: 'Experiencia', href: '#experiencia' },
	{ label: 'Proyectos', href: '#proyectos' },
	{ label: 'Contacto', href: '#contacto' },
]

function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="navbar">
			<div className="navbar__inner">
				<a className="navbar__brand" href="#inicio" aria-label="Ir al inicio" onClick={() => setIsOpen(false)}>
					Portfolio
				</a>

				<button
					type="button"
					className="navbar__toggle"
					onClick={() => setIsOpen((prev) => !prev)}
					aria-expanded={isOpen}
					aria-controls="primary-navigation"
					aria-label="Abrir o cerrar menú"
				>
					{isOpen ? <X size={20} /> : <Menu size={20} />}
				</button>

				<div id="primary-navigation" className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`} role="list">
					{links.map((link) => (
						<a
							key={link.href}
							className="navbar__link"
							href={link.href}
							role="listitem"
							onClick={() => setIsOpen(false)}
						>
							{link.label}
						</a>
					))}
				</div>
			</div>
		</nav>
	)
}

export default Navbar

const links = [
	{ label: 'Inicio', href: '#inicio' },
	{ label: 'Habilidades', href: '#habilidades' },
	{ label: 'Experiencia', href: '#experiencia' },
	{ label: 'Proyectos', href: '#proyectos' },
	{ label: 'Contacto', href: '#contacto' },
]

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar__inner">
				<a className="navbar__brand" href="#inicio" aria-label="Ir al inicio">
					Portfolio
				</a>

				<div className="navbar__links" role="list">
					{links.map((link) => (
						<a key={link.href} className="navbar__link" href={link.href} role="listitem">
							{link.label}
						</a>
					))}
				</div>
			</div>
		</nav>
	)
}

export default Navbar

function Experience() {
  const experiences = [
    {
      title: 'Backend Developer Java Ssr',
      company: 'BYMA - Bolsas y Mercados Argentinos S.A',
      period: 'Marzo 2026 - Actualidad',
      highlights: [
        'Vertical de Custodia'
      ]
    },
    {
      title: 'Software Developer Full Stack Ssr',
      company: 'VENG para CONAE',
      period: 'Octubre 2022 - Febrero 2026',
      highlights: [
        'Liderazgo del ciclo completo de flujos automatizados de imágenes y datos',
        'Optimización de bases de datos PostgreSQL para garantizar integridad y disponibilidad',
        'Modernización y documentación técnica de aplicaciones legadas'
      ]
    },
    {
      title: 'Frontend Developer Angular',
      company: 'Freelancer',
      period: 'Abril 2025 - Octubre 2025',
      highlights: [
        'Diseño e implementación de interfaces dinámicas con Angular y TypeScript',
        'Cumplimiento de entregas semanales bajo metodologías ágiles',
        'Optimización de UX mediante componentes reutilizables'
      ]
    },
    {
      title: 'Mentora de Proyecto',
      company: 'GCBA',
      period: 'Julio 2021 - Febrero 2022',
      highlights: [
        'Liderazgo de mentorías técnicas en programación web para 240 estudiantes',
        'Dirección de equipos en ejecución de proyectos tecnológicos',
        'Fomento de colaboración profesional y las buenas prácticas de desarrollo'
      ]
    }
  ]

  return (
    <section id="experiencia" className="section">
      <h2>TRAYECTORIA PROFESIONAL</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-date">{exp.period}</div>
            <div className="experience-content">
              <div>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
	)
}

export default Experience

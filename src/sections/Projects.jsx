import { ExternalLink } from 'lucide-react'

function Projects() {
  const courses = [
    {
      title: 'Ingeniería en Informática',
      institution: 'Universidad de Buenos Aires',
      period: 'Abril 2018 - Actualidad',
      technologies: ['Fundamentos de programación','Algoritmos y estructuras de datos','Paradigmas de programación','Organización del computador','Pensamiento computacional','Ingeniería de software I','Introducción al desarrollo de software','Análisis matemático A','Análisis matemático II A','Álgebra A','Física','Química'
],
      certificateUrl: '#'
    },
    {
      title: 'Back End Developer',
      institution: 'Digital House',
      period: 'Octubre 2025 - Actualidad',
      technologies: ['Testing Automatizado', 'Gestión de Productos Digitales', 'Power BI', 'Microservicios con Spring Cloud', 'Bases de datos escalables y NoSQL', 'Data Analytics', 'Seguridad en Microservicios mediante IAM', 'Fundamentos de GO', 'Infraestructura Avanzada', 'Gestión de Productos Digitales', 'Problem Solving & Project Management'],
      certificateUrl: '#'
    },
    {
      title: 'Professional Developer',
      institution: 'Digital House',
      period: 'Julio 2024 - Junio 2025',
      technologies: ['Introducción al Mundo IT', 'Diseño Web: HTML y CSS', 'Learning Agility', 'Metodologías Agile & Scrum', 'JavaScript para DOM', 'Desing Thinking', 'bases de Datos en MySQL', 'Diseño UX/UI', 'React.js', 'POO en Java', 'Infraestructura con AWS', 'JAVA con Spring Boot', 'Cloud Computing', 'Herramientas del Trabajo Colaborativo', 'Comunicación Efectiva en Equipos de Trabajo'],
      certificateUrl: 'https://drive.google.com/file/d/16EDmb-rAWQh2xBvQMKe86MZoJ0IKp4A8/view?usp=sharing'
    },
    {
      title: 'Insignias de Google Cloud en IA',
      institution: 'Google Cloud',
      period: '2025',
      technologies: ['Introduction to Responsible AI','Introduction to LLM', 'Introduction to Vertex AI Studio', 'Introduction to Responsible AI'],
      certificateUrl: 'https://www.skills.google/public_profiles/7c4296f8-f2bc-430b-980e-1a70d11327da'
    },
      {
          title: 'Finanzas Básicas',
          institution: 'BYMA Educa',
          period: 'Marzo 2026',
          technologies: ['Estrategias de ahorro e inversión', 'Dinámica de las tasas de interés y su impacto en el valor del dinero', 'Marco normativo de impuestos aplicados a las inversiones'],
          certificateUrl: 'https://www.bymaeduca.com.ar/certificates/4ovpz37kv6'
      }
  ]

  return (
    <section id="proyectos" className="section">
      <h2>EDUCACIÓN</h2>
      <div className="projects-list">
        {courses.map((course, index) => (
          <div key={index} className="project-item course-item">
            <div className="course-header">
              <div>
                <h3>{course.title}</h3>
                <p className="course-institution">{course.institution} • {course.period}</p>
              </div>
              {course.certificateUrl && course.certificateUrl !== '#' ? (
                <a href={course.certificateUrl} target="_blank" rel="noopener noreferrer" className="certificate-link">
                  <ExternalLink size={18} />
                </a>
              ) : (
                <span className="certificate-pending">En curso</span>
              )}
            </div>
            <ul className="course-technologies">
              {course.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
	)
}

export default Projects

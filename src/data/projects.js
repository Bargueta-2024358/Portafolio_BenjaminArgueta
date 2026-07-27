const base = import.meta.env.BASE_URL

export const projects = [
  {
    title: 'Brasa 33',
    description:
      'Sistema de gestión de restaurante con autenticación, menús, pedidos, pagos, reservaciones, inventario y reportes.',
    learned:
      'Arquitectura de microservicios, autenticación JWT, APIs REST y despliegue en producción.',
    tags: ['React', 'Node.js', '.NET', 'PostgreSQL'],
    liveUrl: 'https://brasa-33.vercel.app',
    repoUrl: '',
    image: `${base}assets/img/projects/brasa-33.png`,
  },
  {
    title: 'Banco La 33',
    description:
      'Banca académica con cuentas, depósitos, retiros, transferencias, notificaciones, reportes y panel administrativo por roles.',
    learned:
      'Manejo de roles con JWT, comunicación entre servicios y consistencia de datos en transacciones.',
    tags: ['React', 'Node.js', '.NET', 'MongoDB'],
    liveUrl: 'https://sistema-bancario-la-33.vercel.app/client',
    repoUrl: '',
    image: `${base}assets/img/projects/banco-la-33.png`,
  },
  {
    title: 'Shoot AI',
    description:
      'Plataforma de moda con escaneo 3D, asistente de poses con inteligencia artificial y mapeo de prendas en tiempo real.',
    learned:
      'Integración de IA en flujos de producto, procesamiento en tiempo real y diseño de experiencia interactiva.',
    tags: ['React', 'IA', '3D'],
    liveUrl: 'https://shoot-ai.netlify.app',
    repoUrl: '',
    image: `${base}assets/img/projects/shoot-ai.png`,
  },
]

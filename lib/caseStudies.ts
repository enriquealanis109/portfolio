export interface BiStr { en: string; es: string }

export interface CaseStudyData {
  badge: { text: BiStr; color: 'green' | 'yellow' | 'blue' }
  topBarLabel: BiStr
  title: string
  tagline: BiStr
  meta: { label: BiStr; value: string }[]
  sections: CaseStudySection[]
  stack: string[]
  projectUrl: string
  projectUrlLabel: BiStr
}

export interface CaseStudySection {
  label: BiStr
  content: SectionContent
}

export type SectionContent =
  | { type: 'metrics'; items: { value: string; label: BiStr }[] }
  | { type: 'text'; paragraphs: BiStr[]; quote?: BiStr; afterQuote?: BiStr[] }
  | { type: 'cards'; cols: 2 | 3; intro?: BiStr; items: { title: BiStr; body: BiStr; tags?: string[]; badge?: BiStr; result?: BiStr }[] }
  | { type: 'before-after'; before: BiStr[]; after: BiStr[] }
  | { type: 'roles'; intro: BiStr; roles: { name: BiStr; items: BiStr[] }[] }
  | { type: 'table'; headers: BiStr[]; rows: { cells: BiStr[]; highlight?: number }[] }

// ─── Panteras ────────────────────────────────────────────────────────────────

export const panterasData: CaseStudyData = {
  badge: { text: { en: 'Live in production · 15 active users', es: 'En producción · 15 usuarios activos' }, color: 'green' },
  topBarLabel: { en: 'Case Study', es: 'Caso de Estudio' },
  title: 'Panteras Saltillo',
  tagline: {
    en: 'Sports management platform for a football academy — from paper to digital system',
    es: 'Plataforma de gestión deportiva para academia de fútbol — del papel al sistema digital',
  },
  meta: [
    { label: { en: 'Client', es: 'Cliente' }, value: 'Academia de Fútbol Panteras Saltillo' },
    { label: { en: 'Location', es: 'Ubicación' }, value: 'Saltillo, Coahuila, México' },
    { label: { en: 'Users', es: 'Usuarios' }, value: '15 active (7 coaches + 8 coordinators)' },
    { label: { en: 'Players', es: 'Jugadores' }, value: '151 registered' },
  ],
  sections: [
    {
      label: { en: 'Results in numbers', es: 'Resultados en números' },
      content: {
        type: 'metrics',
        items: [
          { value: '151', label: { en: 'Players with complete digital records', es: 'Jugadores con expediente digital completo' } },
          { value: '−83%', label: { en: 'Less time on weekly attendance per coach', es: 'Menos tiempo en pase de lista semanal' } },
          { value: '−67%', label: { en: 'Less time per player evaluation', es: 'Menos tiempo por evaluación de jugador' } },
          { value: '8–10', label: { en: 'Tournaments/year with zero paperwork friction', es: 'Torneos/año sin fricción de papelería' } },
        ],
      },
    },
    {
      label: { en: 'Context', es: 'Contexto' },
      content: {
        type: 'text',
        paragraphs: [
          {
            en: 'Panteras Saltillo is a football academy with 9 categories and 151 registered players. Daily operations involve attendance tracking, player evaluations, tournament registrations, document management, and parent communication. All of this was done by hand — on paper, via WhatsApp, with no system or structure.',
            es: 'Panteras Saltillo es una academia de fútbol con 9 categorías y 151 jugadores registrados. Su operación diaria involucra pase de lista, evaluaciones, registro en torneos, gestión de documentos y comunicación con padres. Todo esto se hacía a mano — en papel, por WhatsApp, sin sistema ni orden.',
          },
        ],
      },
    },
    {
      label: { en: 'The problems', es: 'Los problemas' },
      content: {
        type: 'cards',
        cols: 3,
        items: [
          {
            title: { en: 'Tournament paperwork', es: 'Papelería para torneos' },
            body: {
              en: 'Each category participates in 8–10 tournaments per year. Coordinators had to request the same documents from parents before every tournament — causing delays, frustration, and players missing tournaments due to missing paperwork.',
              es: 'Cada categoría participa en 8–10 torneos al año. Los coordinadores pedían los mismos documentos a los papás antes de cada torneo — causando retrasos, fricciones y jugadores sin poder participar por falta de papelería.',
            },
          },
          {
            title: { en: 'Weekly attendance', es: 'Pase de lista' },
            body: {
              en: 'Recording attendance took each coach over 30 minutes per week on paper. There were no weekly or monthly reports because generating them manually was too much work.',
              es: 'Registrar la asistencia le tomaba a cada entrenador más de 30 minutos a la semana en papel. No había reportes semanales ni mensuales porque hacerlos manualmente era demasiado trabajo.',
            },
          },
          {
            title: { en: 'Player evaluations', es: 'Evaluaciones de jugadores' },
            body: {
              en: 'Evaluating each player and sharing results with parents took around 15 minutes per player. With multiple categories and dozens of players, this burden was often skipped entirely.',
              es: 'Evaluar a cada jugador y compartir resultados con los papás le tomaba al entrenador unos 15 minutos por niño. Con múltiples categorías, esta carga se dejaba de hacer.',
            },
          },
        ],
      },
    },
    {
      label: { en: 'What was built', es: 'Lo que se construyó' },
      content: {
        type: 'roles',
        intro: {
          en: 'A web platform with three distinct roles: Admin, Coach, and Coordinator. Each user logs in with their own account and sees only what they need.',
          es: 'Una plataforma web con tres roles distintos: Admin, Entrenador y Coordinador. Cada usuario entra con su cuenta y ve solo lo que necesita para hacer su trabajo.',
        },
        roles: [
          {
            name: { en: 'Admin', es: 'Admin' },
            items: [
              { en: 'Academy metrics & analytics', es: 'Métricas y analytics de la academia' },
              { en: 'User and access management', es: 'Gestión de usuarios y accesos' },
              { en: 'Full system control', es: 'Control total del sistema' },
              { en: 'Publishes general announcements', es: 'Publica avisos generales' },
            ],
          },
          {
            name: { en: 'Coach', es: 'Entrenador' },
            items: [
              { en: 'Digital attendance tracking', es: 'Pase de lista digital' },
              { en: 'Generate PDF reports in 1 click', es: 'Genera reportes PDF con 1 clic' },
              { en: 'Record player evaluations', es: 'Registra evaluaciones por jugador' },
              { en: 'View category history', es: 'Ve historial de su categoría' },
            ],
          },
          {
            name: { en: 'Coordinator', es: 'Coordinador' },
            items: [
              { en: 'Upload player documents', es: 'Sube documentos de cada jugador' },
              { en: 'Print complete records anytime', es: 'Imprime expedientes completos cuando sea' },
              { en: 'Access files 24/7', es: 'Accede a archivos en cualquier momento' },
              { en: 'Manage assigned category', es: 'Gestiona su categoría asignada' },
            ],
          },
        ],
      },
    },
    {
      label: { en: 'The key innovation: digital player records', es: 'La innovación clave: expediente digital' },
      content: {
        type: 'text',
        paragraphs: [
          {
            en: "Each player has their own digital record. The coordinator uploads documents once — photo, birth certificate, school certificate, and passport. From that point, when there's a tournament, the coordinator can print all complete records in one click, any time, as many times as needed.",
            es: 'Cada jugador tiene su propio expediente digital. El coordinador sube los documentos una sola vez — foto, acta de nacimiento, constancia de estudios y pasaporte. A partir de ese momento, cuando hay torneo, puede imprimir todos los expedientes con un solo clic, a cualquier hora, las veces que necesite.',
          },
        ],
        quote: {
          en: '"No more asking parents for documents before every tournament. Upload once, print whenever. No calls, no WhatsApps, no delays."',
          es: '"Ya no hay que pedirle a los papás los documentos cada torneo. Se suben una vez y están ahí para siempre. Cuando hay torneo, se imprime y listo — sin llamadas, sin WhatsApps, sin retrasos."',
        },
        afterQuote: [
          {
            en: 'This solves a problem that repeated 8–10 times per year across 9 categories — generating constant friction with parents and real risk of players missing tournaments.',
            es: 'Esto resuelve un problema que se repetía 8–10 veces al año en las 9 categorías — generando fricción constante con los papás y riesgo real de que jugadores no pudieran participar en torneos.',
          },
        ],
      },
    },
    {
      label: { en: 'Impact by process', es: 'Impacto por proceso' },
      content: {
        type: 'table',
        headers: [
          { en: 'Process', es: 'Proceso' },
          { en: 'Before', es: 'Antes' },
          { en: 'After', es: 'Después' },
          { en: 'Result', es: 'Resultado' },
        ],
        rows: [
          { cells: [{ en: 'Attendance (per coach / week)', es: 'Pase de lista (por entrenador / semana)' }, { en: '30+ min on paper', es: 'Más de 30 min en papel' }, { en: '<5 min from phone or computer', es: 'Menos de 5 min desde celular' }, { en: '−83%', es: '−83%' }], highlight: 3 },
          { cells: [{ en: 'Player evaluation + parent report', es: 'Evaluación de jugador + reporte' }, { en: '15 min per player', es: '15 min por niño' }, { en: '<5 min per player', es: 'Menos de 5 min por niño' }, { en: '−67%', es: '−67%' }], highlight: 3 },
          { cells: [{ en: 'Weekly/monthly reports', es: 'Reportes semanales y mensuales' }, { en: "Didn't exist — too much work", es: 'No existían — demasiado trabajo' }, { en: 'Generated as PDF in 1 click', es: 'Se generan en PDF con 1 clic' }, { en: 'New automated process', es: 'Proceso nuevo automatizado' }], highlight: 3 },
          { cells: [{ en: 'Tournament paperwork (8–10/yr)', es: 'Papelería para torneos (8–10/año)' }, { en: 'Ask parents each time, physical chaos', es: 'Pedir a los papás cada vez, caos físico' }, { en: 'Upload once, print anytime', es: 'Se sube una vez, se imprime cuando sea' }, { en: 'Eliminated entirely', es: 'Proceso eliminado' }], highlight: 3 },
          { cells: [{ en: 'New enrollment appointments', es: 'Citas de nuevo ingreso' }, { en: 'Manually via calls or WhatsApp', es: 'Coordinadas manualmente por llamada o WhatsApp' }, { en: 'AI chatbot auto-schedules via Google Calendar', es: 'Chatbot con IA agenda vía Google Calendar' }, { en: '100% automated', es: '100% automatizado' }], highlight: 3 },
          { cells: [{ en: 'Total time saved (7 coaches / week)', es: 'Tiempo total ahorrado (7 entrenadores / semana)' }, { en: '210+ minutes per week', es: 'Más de 210 minutos por semana' }, { en: '35 minutes per week', es: '35 minutos por semana' }, { en: '−175 min/week', es: '−175 min/semana' }], highlight: 3 },
        ],
      },
    },
  ],
  stack: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'Claude AI', 'Google Calendar API', 'Supabase Storage', 'PWA'],
  projectUrl: 'https://panteras-saltillo.vercel.app',
  projectUrlLabel: { en: 'View live project →', es: 'Ver proyecto en vivo →' },
}

// ─── Stage 11 ─────────────────────────────────────────────────────────────────

export const stage11Data: CaseStudyData = {
  badge: { text: { en: 'Live in production', es: 'En producción' }, color: 'green' },
  topBarLabel: { en: 'Case Study', es: 'Caso de Estudio' },
  title: 'Stage 11 Danceground',
  tagline: {
    en: 'Complete web platform for a dance academy — professional digital presence with full admin control',
    es: 'Plataforma web completa para academia de baile — presencia digital profesional con control total',
  },
  meta: [
    { label: { en: 'Client', es: 'Cliente' }, value: 'Stage 11 Danceground' },
    { label: { en: 'Location', es: 'Ubicación' }, value: 'Saltillo, Coahuila, México' },
    { label: { en: 'Type', es: 'Tipo' }, value: 'Public landing + Admin panel' },
    { label: { en: 'Site', es: 'Sitio' }, value: 'stage11danceground.com' },
  ],
  sections: [
    {
      label: { en: 'Impact in numbers', es: 'Impacto en números' },
      content: {
        type: 'metrics',
        items: [
          { value: '5', label: { en: 'Dance categories managed from the admin panel', es: 'Categorías de baile gestionadas desde el panel' } },
          { value: '100%', label: { en: 'Transition from informal WhatsApp to professional platform', es: 'Transición de WhatsApp informal a plataforma profesional' } },
          { value: '1', label: { en: 'Centralized panel to control the entire academy', es: 'Panel centralizado para gestionar toda la academia' } },
        ],
      },
    },
    {
      label: { en: 'The problem', es: 'El problema' },
      content: {
        type: 'text',
        paragraphs: [
          {
            en: 'Stage 11 Danceground had no professional digital presence. All communication with students and parents happened via WhatsApp and social media — informally, with no structure or control. There was no centralized place where interested families could learn about the academy, its categories, schedules, events, or pricing.',
            es: 'Stage 11 Danceground no tenía presencia digital profesional. Toda la comunicación con alumnos y padres se hacía por WhatsApp y redes sociales de forma informal, sin estructura ni control. No había un lugar centralizado donde los interesados pudieran conocer la academia, sus categorías, horarios, eventos o precios.',
          },
          {
            en: 'The director managed all information manually, creating disorganization and an unprofessional image compared to competing academies in the city.',
            es: 'La directora manejaba toda la información manualmente, lo que generaba desorganización y una imagen poco profesional frente a otras academias de la ciudad.',
          },
        ],
      },
    },
    {
      label: { en: 'Before vs. After', es: 'Antes vs. Después' },
      content: {
        type: 'before-after',
        before: [
          { en: 'Information shared via WhatsApp with no structure', es: 'Información compartida por WhatsApp sin formato' },
          { en: 'No website or professional digital presence', es: 'Sin página web ni presencia digital profesional' },
          { en: 'Events posted informally on social media', es: 'Eventos y avisos comunicados informalmente en redes sociales' },
          { en: 'No centralized content control', es: 'Sin control centralizado de contenido' },
          { en: 'Unprofessional image vs. competing academies', es: 'Imagen poco profesional frente a la competencia' },
        ],
        after: [
          { en: 'Professional site at stage11danceground.com', es: 'Sitio web profesional en stage11danceground.com' },
          { en: 'Admin panel with full content control', es: 'Panel admin con control total del contenido' },
          { en: 'Events, gallery, announcements updatable without code', es: 'Eventos, galería y avisos actualizables sin código' },
          { en: 'Direct WhatsApp contact for detailed inquiries', es: 'Contacto directo con la directora vía WhatsApp' },
          { en: "Premium image that matches the academy's level", es: 'Imagen premium acorde al nivel de la academia' },
        ],
      },
    },
    {
      label: { en: 'What was built', es: 'Lo que se construyó' },
      content: {
        type: 'cards',
        cols: 2,
        items: [
          { title: { en: 'Public landing page', es: 'Landing pública' }, body: { en: 'Presents the academy, its 5 dance categories, teachers, gallery, pricing, and testimonials.', es: 'Presenta la academia, sus 5 categorías, maestros, galería, precios y testimonios.' } },
          { title: { en: 'Admin panel', es: 'Panel de administración' }, body: { en: 'The director can edit any section of the site without any technical knowledge.', es: 'La directora edita cualquier sección del sitio sin conocimientos técnicos.' } },
          { title: { en: 'Event management', es: 'Gestión de eventos' }, body: { en: 'Create and publish events with date, description, and image directly from the panel.', es: 'Crea y publica eventos con fecha, descripción e imagen desde el panel.' } },
          { title: { en: 'Dynamic gallery', es: 'Galería dinámica' }, body: { en: 'Upload and organize photos from classes and performances directly from the admin.', es: 'Sube y organiza fotos de clases y presentaciones directamente desde el admin.' } },
          { title: { en: 'Announcements system', es: 'Sistema de avisos' }, body: { en: 'Publish communications visible on the site for students and parents.', es: 'Publica comunicados visibles en el sitio para alumnos y padres de familia.' } },
          { title: { en: 'WhatsApp contact', es: 'Contacto por WhatsApp' }, body: { en: "Direct access to the director's WhatsApp — exactly as she requested.", es: 'Acceso directo al WhatsApp de la directora para información detallada — tal como ella lo solicitó.' } },
        ],
      },
    },
  ],
  stack: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'Supabase Storage'],
  projectUrl: 'https://stage11danceground.com',
  projectUrlLabel: { en: 'View live project →', es: 'Ver proyecto en vivo →' },
}

// ─── EduTrack ───────────────────────────────────────────────────────────────────

export const edutrackData: CaseStudyData = {
  badge: { text: { en: 'Live pilot in production', es: 'Piloto en producción' }, color: 'green' },
  topBarLabel: { en: 'Case Study', es: 'Caso de Estudio' },
  title: 'EduTrack',
  tagline: {
    en: 'Multi-tenant attendance & grading platform for teachers — built to scale to a whole school from a single pilot',
    es: 'Plataforma multi-tenant de asistencia y calificaciones para maestros — construida para escalar a toda una escuela desde un solo piloto',
  },
  meta: [
    { label: { en: 'Pilot client', es: 'Cliente piloto' }, value: 'Colegio Maestras de la Fuente (CMF), Saltillo' },
    { label: { en: 'Users', es: 'Usuarios' }, value: 'Teacher (Physical Education), 3 school levels' },
    { label: { en: 'Type', es: 'Tipo' }, value: 'Multi-tenant SaaS, PWA' },
    { label: { en: 'Site', es: 'Sitio' }, value: 'escuela-app-eta.vercel.app' },
  ],
  sections: [
    {
      label: { en: 'At a glance', es: 'De un vistazo' },
      content: {
        type: 'metrics',
        items: [
          { value: '3', label: { en: 'School levels, each with its own weighted grading rubric', es: 'Niveles escolares, cada uno con su propia rúbrica ponderada' } },
          { value: '0', label: { en: 'Code changes needed to onboard the next teacher — just a new account', es: 'Cambios de código para dar de alta al siguiente maestro — solo una cuenta nueva' } },
          { value: '1', label: { en: 'Database policy per table enforcing teacher-level data isolation', es: 'Política de base de datos por tabla que aísla los datos por maestro' } },
        ],
      },
    },
    {
      label: { en: 'The request — and the bigger opportunity', es: 'La solicitud — y la oportunidad detrás' },
      content: {
        type: 'text',
        paragraphs: [
          {
            en: 'A Physical Education teacher at a school in Saltillo asked for a simple way to take attendance, capture grades, and generate reports — he was doing all of it by hand across Preschool, Elementary, and Middle School groups, each graded under a different rubric.',
            es: 'Un maestro de Educación Física en una escuela de Saltillo pidió una forma simple de pasar lista, capturar calificaciones y generar reportes — lo hacía todo a mano en grupos de Preescolar, Primaria y Secundaria, cada uno con una rúbrica distinta.',
          },
          {
            en: "A one-off app for a single teacher would have solved his problem and nothing else. Instead, this was built as a multi-tenant platform from the first line of code — every teacher's data isolated at the database level — so the same product could onboard the rest of the school's teachers later with zero re-architecture, just new accounts.",
            es: 'Una app hecha a la medida para un solo maestro habría resuelto su problema y nada más. En cambio, se construyó como una plataforma multi-tenant desde la primera línea de código — los datos de cada maestro aislados a nivel de base de datos — para poder dar de alta al resto de los maestros de la escuela después sin rediseñar nada, solo con cuentas nuevas.',
          },
        ],
      },
    },
    {
      label: { en: 'The problems', es: 'Los problemas' },
      content: {
        type: 'cards',
        cols: 3,
        items: [
          {
            title: { en: 'Rubrics differ by level and subject', es: 'Rúbricas distintas por nivel y materia' },
            body: {
              en: 'Elementary and Middle School weigh attendance at 50% plus three manual criteria. Preschool uses a simpler attendance + participation split. A second subject means a third rubric entirely. A single hardcoded formula could never cover this.',
              es: 'Primaria y Secundaria pesan la asistencia al 50% más tres criterios manuales. Preescolar usa asistencia + participación. Una segunda materia significa una tercera rúbrica completa. Una fórmula fija nunca iba a cubrir esto.',
            },
          },
          {
            title: { en: 'Attendance drives the grade automatically', es: 'La asistencia calcula la calificación sola' },
            body: {
              en: "Attendance is worth half the grade, computed live from daily records — but a justified absence shouldn't count against it, while an unjustified one should, and the student still owes the missed practical activity.",
              es: 'La asistencia vale la mitad de la calificación, calculada en vivo desde el registro diario — pero una falta justificada no debe afectarla, mientras que una injustificada sí, y el alumno debe reponer la actividad.',
            },
          },
          {
            title: { en: 'Used from the field, not a desk', es: 'Se usa desde la cancha, no desde un escritorio' },
            body: {
              en: 'Grades and attendance are captured on a phone, mid-class, on the spot — not from a computer at the end of the day. Any screen that assumes a desktop layout is unusable here.',
              es: 'Las calificaciones y la asistencia se capturan desde el celular, a media clase, en el momento — no desde una computadora al final del día. Cualquier pantalla pensada para escritorio es inutilizable aquí.',
            },
          },
        ],
      },
    },
    {
      label: { en: 'What was built', es: 'Lo que se construyó' },
      content: {
        type: 'cards',
        cols: 2,
        items: [
          {
            title: { en: 'Rubric editor per level & subject', es: 'Editor de rúbrica por nivel y materia' },
            body: { en: 'The teacher adds his own grading criteria and weights per group. Attendance is always automatic and absorbs whatever percentage is left over — it can never be edited or removed by mistake.', es: 'El maestro agrega sus propios criterios y ponderaciones por grupo. La asistencia siempre es automática y absorbe el porcentaje restante — nunca se puede editar ni borrar por error.' },
          },
          {
            title: { en: 'Attendance with justified absences', es: 'Asistencia con faltas justificadas' },
            body: { en: 'Justified absences skip the attendance penalty but flag the activity as owed; unjustified ones count against the grade automatically.', es: 'Las faltas justificadas no penalizan la asistencia pero marcan la actividad como pendiente de reponer; las injustificadas sí afectan la calificación automáticamente.' },
          },
          {
            title: { en: 'One-click PDF report cards', es: 'Boletas en PDF con un clic' },
            body: { en: 'Grades captured as 0–100 per criterion (the way the teacher already thinks in percentages) convert automatically to the school\'s official 6–10 scale on the printed report.', es: 'Las calificaciones se capturan en 0–100 por criterio (como el maestro ya piensa en porcentajes) y se convierten automáticamente a la escala oficial 6–10 en el reporte impreso.' },
          },
          {
            title: { en: 'Installable PWA', es: 'PWA instalable' },
            body: { en: 'Added to the home screen like a native app, with a service worker that never caches grade or attendance data — always live, never stale.', es: 'Se agrega a la pantalla de inicio como app nativa, con un service worker que nunca cachea datos de calificaciones o asistencia — siempre en vivo.' },
          },
        ],
      },
    },
    {
      label: { en: 'The key decision: multi-tenant from day one', es: 'La decisión clave: multi-tenant desde el día 1' },
      content: {
        type: 'text',
        paragraphs: [
          {
            en: "Every table — groups, students, attendance, grades — carries the owning teacher's id, enforced by a Postgres Row Level Security policy, not application code. A teacher's queries can only ever return their own data, even if a future bug in the frontend tried to ask for someone else's.",
            es: 'Cada tabla — grupos, alumnos, asistencia, calificaciones — lleva el id del maestro dueño, reforzado por una política de Row Level Security de Postgres, no por código de la aplicación. Las consultas de un maestro solo pueden devolver sus propios datos, incluso si un bug futuro en el frontend pidiera datos de alguien más.',
          },
        ],
        quote: {
          en: '"The pilot teacher costs almost nothing — he\'s the reference case. The real product is teacher #2 onboarding with a new login and zero new code."',
          es: '"El maestro piloto casi no cuesta nada — es el caso de referencia. El producto real es el maestro #2 dándose de alta con un login nuevo y cero código nuevo."',
        },
      },
    },
    {
      label: { en: 'Shaped by real classroom use', es: 'Moldeado por uso real en el salón' },
      content: {
        type: 'before-after',
        before: [
          { en: 'Designed for 0–10 capture per criterion — teacher naturally typed 90/80/70 instead, breaking the database constraint', es: 'Diseñado para capturar 0–10 por criterio — el maestro naturalmente tecleaba 90/80/70, rompiendo la restricción de la base de datos' },
          { en: 'Edit/delete buttons hidden behind hover — invisible and untappable on a phone', es: 'Botones de editar/eliminar ocultos tras hover — invisibles e imposibles de tocar en celular' },
          { en: 'Wide grading table unreadable on a vertical phone screen', es: 'Tabla de calificaciones ancha, ilegible en celular vertical' },
          { en: 'Conduct reports reduced the final grade in a way the teacher felt was too harsh', es: 'Los reportes de conducta bajaban la calificación de una forma que el maestro sintió excesiva' },
        ],
        after: [
          { en: '0–100 capture per criterion, converted to the official 6–10 scale only at report time', es: 'Captura 0–100 por criterio, convertido a la escala oficial 6–10 solo al generar el reporte' },
          { en: 'Actions always visible with a larger tap target — no hover-dependent UI anywhere', es: 'Acciones siempre visibles con área de toque más grande — sin UI dependiente de hover' },
          { en: 'Card layout per student on mobile, full table preserved on desktop', es: 'Layout de tarjetas por alumno en celular, tabla completa en escritorio' },
          { en: 'Conduct stays as a printable record with signature space, decoupled from the grade calculation', es: 'La conducta queda como registro imprimible con espacio de firma, separado del cálculo de la calificación' },
        ],
      },
    },
  ],
  stack: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Row Level Security', 'Tailwind CSS', 'PWA', 'jsPDF'],
  projectUrl: 'https://escuela-app-eta.vercel.app',
  projectUrlLabel: { en: 'View live project →', es: 'Ver proyecto en vivo →' },
}

// ─── Tornea ───────────────────────────────────────────────────────────────────

export const torneaData: CaseStudyData = {
  badge: { text: { en: 'In active development', es: 'En desarrollo activo' }, color: 'yellow' },
  topBarLabel: { en: 'Case Study', es: 'Caso de Estudio' },
  title: 'Tornea',
  tagline: {
    en: 'SaaS platform for organizing sports tournaments — built from scratch as my own product',
    es: 'SaaS para organizar torneos deportivos — construido desde cero como producto propio',
  },
  meta: [
    { label: { en: 'Type', es: 'Tipo' }, value: 'Own SaaS product' },
    { label: { en: 'Market', es: 'Mercado' }, value: 'Local sports leagues, México' },
    { label: { en: 'Status', es: 'Estado' }, value: 'MVP in development' },
  ],
  sections: [
    {
      label: { en: 'Product overview', es: 'Visión del producto' },
      content: {
        type: 'metrics',
        items: [
          { value: '3', label: { en: 'Roles: organizer, coach, and referee', es: 'Roles: organizador, entrenador y árbitro' } },
          { value: '100%', label: { en: 'Own product — designed, funded, and built by me', es: 'Producto propio — diseñado, financiado y construido por mí' } },
          { value: 'MX', label: { en: 'Target market: local sports leagues across México', es: 'Mercado objetivo: ligas deportivas locales en México' } },
        ],
      },
    },
    {
      label: { en: 'The opportunity', es: 'La oportunidad' },
      content: {
        type: 'text',
        paragraphs: [
          {
            en: 'México has thousands of local sports leagues — football, basketball, volleyball — that run entirely without software. Organizers manage everything manually: fixtures on paper, standings on WhatsApp, rosters by message. There is no affordable, Spanish-language product built for this market. Tornea is being built to fill that gap.',
            es: 'México tiene miles de ligas deportivas locales — fútbol, basquetbol, voleibol — que operan completamente sin software. Los organizadores manejan todo a mano: fixture en papel, tabla de posiciones por WhatsApp, rosters por mensaje. No existe un producto accesible, en español, construido para este mercado. Tornea está siendo construido para llenar ese espacio.',
          },
        ],
      },
    },
    {
      label: { en: 'Problems being solved', es: 'Problemas que resuelve' },
      content: {
        type: 'cards',
        cols: 3,
        items: [
          {
            title: { en: 'Tournaments managed over WhatsApp', es: 'Torneos gestionados por WhatsApp' },
            body: { en: 'Leagues organize everything through WhatsApp groups — fixtures, results, complaints, standings. No centralized system, constant confusion and disputes.', es: 'Las ligas organizan todo por WhatsApp — fixture, resultados, quejas, tabla de posiciones. Sin sistema centralizado, confusión constante y disputas.' },
          },
          {
            title: { en: 'Manual standings and statistics', es: 'Tablas y estadísticas manuales' },
            body: { en: 'Standings calculated manually and posted as images on social media. Any error means recalculating everything. No automatic tracking of goals or cards.', es: 'Tablas calculadas manualmente y publicadas como imágenes en redes. Cualquier error implica recalcular todo. Sin seguimiento automático de goles ni tarjetas.' },
          },
          {
            title: { en: 'No formal roster management', es: 'Sin gestión de roster' },
            body: { en: 'Teams submit rosters on paper or by message without verification. Player eligibility is not validated and there is no document history for disputes.', es: 'Los equipos mandan rosters en papel o por mensaje sin verificación. La elegibilidad no se valida y no hay historial de documentos para disputas.' },
          },
        ],
      },
    },
    {
      label: { en: 'Multi-role system', es: 'Sistema multi-rol' },
      content: {
        type: 'roles',
        intro: {
          en: 'Three distinct roles, each with their own dashboard and permissions. Every user sees only what they need to do their job.',
          es: 'Tres roles distintos, cada uno con su propio panel y permisos. Cada usuario ve solo lo que necesita para hacer su trabajo.',
        },
        roles: [
          {
            name: { en: 'Organizer', es: 'Organizador' },
            items: [
              { en: 'Creates and configures the tournament', es: 'Crea y configura el torneo' },
              { en: 'Manages participating teams', es: 'Gestiona los equipos participantes' },
              { en: 'Schedules matches and assigns venues', es: 'Programa partidos y asigna canchas' },
              { en: 'Publishes standings automatically', es: 'Publica tablas de posiciones automáticamente' },
              { en: 'Resolves incidents and disputes', es: 'Resuelve incidencias y disputas' },
            ],
          },
          {
            name: { en: 'Coach', es: 'Entrenador' },
            items: [
              { en: 'Registers team and players', es: 'Registra el equipo y jugadores' },
              { en: 'Uploads player documents', es: 'Sube documentos de los jugadores' },
              { en: 'Submits match lineup', es: 'Envía la alineación para cada partido' },
              { en: 'Views team statistics', es: 'Ve estadísticas del equipo' },
              { en: 'Tracks standings in real time', es: 'Consulta la tabla en tiempo real' },
            ],
          },
          {
            name: { en: 'Referee', es: 'Árbitro' },
            items: [
              { en: 'Records match results', es: 'Registra el resultado del partido' },
              { en: 'Logs goals and cards per player', es: 'Registra goles y tarjetas por jugador' },
              { en: 'Signs off on match report digitally', es: 'Firma el acta del partido digitalmente' },
              { en: 'Access to assigned match history', es: 'Acceso a historial de partidos asignados' },
            ],
          },
        ],
      },
    },
    {
      label: { en: 'Core features', es: 'Funcionalidades principales' },
      content: {
        type: 'cards',
        cols: 2,
        items: [
          { title: { en: 'Tournament creation', es: 'Creación de torneos' }, body: { en: 'Organizer configures format, categories, dates, venues, and rules from a single panel.', es: 'El organizador configura formato, categorías, fechas, canchas y reglas desde un solo panel.' } },
          { title: { en: 'Team & roster management', es: 'Gestión de equipos y roster' }, body: { en: 'Coaches register their team and upload player documents. Eligibility is validated automatically.', es: 'Los entrenadores registran su equipo y suben documentos. La elegibilidad se valida automáticamente.' } },
          { title: { en: 'Automated standings', es: 'Tabla de posiciones automática' }, body: { en: 'Points, goal difference, and statistics update automatically after each result is submitted.', es: 'Puntos, diferencia de goles y estadísticas se actualizan automáticamente al registrar cada resultado.' } },
          { title: { en: 'Match scheduling', es: 'Programación de partidos' }, body: { en: 'Organizer sets the fixture and assigns referees. Coaches see their schedule in real time.', es: 'El organizador define el fixture y asigna árbitros. Los entrenadores ven su agenda en tiempo real.' } },
          { title: { en: 'Match reports', es: 'Actas de partido' }, body: { en: 'Referees log goals and cards per player. Report is signed off digitally.', es: 'Los árbitros registran goles y tarjetas por jugador. El acta se firma digitalmente.' } },
          { title: { en: 'Player statistics', es: 'Estadísticas de jugadores' }, body: { en: 'Top scorers, disciplinary records, and appearances tracked automatically throughout the tournament.', es: 'Goleo, amonestaciones y participaciones se rastrean automáticamente durante todo el torneo.' } },
        ],
      },
    },
  ],
  stack: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
  projectUrl: 'https://tornea-app.vercel.app',
  projectUrlLabel: { en: 'View project →', es: 'Ver proyecto →' },
}

// ─── Flowra ───────────────────────────────────────────────────────────────────

export const flowraData: CaseStudyData = {
  badge: { text: { en: 'Digital Agency', es: 'Agencia Digital' }, color: 'blue' },
  topBarLabel: { en: 'Agency Profile', es: 'Perfil de Agencia' },
  title: 'Flowra',
  tagline: {
    en: 'Digital agency focused on web products, automations, and AI integrations for businesses in México',
    es: 'Agencia digital enfocada en productos web, automatizaciones e integraciones de IA para negocios en México',
  },
  meta: [
    { label: { en: 'Founded', es: 'Fundada en' }, value: '2026' },
    { label: { en: 'Location', es: 'Ubicación' }, value: 'Saltillo, Coahuila, México' },
    { label: { en: 'Site', es: 'Sitio' }, value: 'flowra.digital' },
  ],
  sections: [
    {
      label: { en: 'At a glance', es: 'De un vistazo' },
      content: {
        type: 'metrics',
        items: [
          { value: '2+', label: { en: 'Paid client projects live in production', es: 'Proyectos de clientes entregados y en producción' } },
          { value: '3', label: { en: 'Core services: web platforms, automations, AI', es: 'Servicios: plataformas web, automatizaciones e IA' } },
          { value: 'MX', label: { en: 'Focus: businesses in Saltillo and México', es: 'Enfoque: negocios en Saltillo y México' } },
        ],
      },
    },
    {
      label: { en: 'What we build', es: 'Lo que construimos' },
      content: {
        type: 'cards',
        cols: 3,
        items: [
          {
            title: { en: 'Web platforms', es: 'Plataformas web' },
            body: { en: 'Full-stack products built with Next.js, TypeScript, and Supabase. From landing pages to complete platforms with admin panels, auth, and database.', es: 'Productos completos construidos con Next.js, TypeScript y Supabase. Desde landing pages hasta plataformas con panel admin, autenticación y base de datos.' },
            tags: ['Next.js', 'Supabase', 'TypeScript'],
          },
          {
            title: { en: 'Workflow automation', es: 'Automatización de flujos' },
            body: { en: 'Business process automation with n8n. Connect CRMs, forms, emails, Google Sheets, WhatsApp, and more — no manual repetitive work.', es: 'Automatización de procesos con n8n. Conecta CRMs, formularios, correos, Google Sheets, WhatsApp y más — sin trabajo repetitivo manual.' },
            tags: ['n8n', 'Webhooks', 'API integrations'],
          },
          {
            title: { en: 'AI integrations', es: 'Integraciones con IA' },
            body: { en: 'Custom AI features using the Claude API. Chatbots, document analysis, auto-scheduling, and intelligent assistants embedded into existing products.', es: 'Funcionalidades con IA personalizadas usando la API de Claude. Chatbots, análisis de documentos, agendado automático y asistentes inteligentes integrados en productos existentes.' },
            tags: ['Claude API', 'Anthropic', 'Chatbots'],
          },
        ],
      },
    },
    {
      label: { en: 'Projects delivered', es: 'Proyectos entregados' },
      content: {
        type: 'cards',
        cols: 2,
        items: [
          {
            title: { en: 'Panteras Saltillo', es: 'Panteras Saltillo' },
            body: { en: 'Multi-role platform for a football academy with 151 players. Attendance tracking, PDF reports, digital player records, and AI-powered scheduling via Google Calendar.', es: 'Plataforma multi-rol para academia de fútbol con 151 jugadores. Pase de lista, reportes PDF, expedientes digitales y agendado automático con IA vía Google Calendar.' },
            badge: { en: 'Live', es: 'Activo' },
            result: { en: '−83% attendance time · −67% evaluation time · enrollment fully automated', es: '−83% tiempo pase de lista · −67% tiempo evaluación · ingreso 100% automatizado' },
            tags: ['Next.js 14', 'Supabase', 'Claude AI'],
          },
          {
            title: { en: 'Stage 11 Danceground', es: 'Stage 11 Danceground' },
            body: { en: 'Professional website and full admin panel for a dance academy. The director manages all content — events, gallery, announcements — without any technical knowledge.', es: 'Sitio web profesional y panel admin completo para academia de baile. La directora gestiona todo el contenido — eventos, galería, avisos — sin conocimientos técnicos.' },
            badge: { en: 'Live', es: 'Activo' },
            result: { en: '100% transition from WhatsApp to professional platform', es: '100% transición de WhatsApp a plataforma profesional' },
            tags: ['Next.js 14', 'Supabase'],
          },
        ],
      },
    },
    {
      label: { en: 'How we work', es: 'Cómo trabajamos' },
      content: {
        type: 'cards',
        cols: 3,
        items: [
          {
            title: { en: 'Built by an engineer, not an agency', es: 'Construido por un ingeniero, no una agencia' },
            body: { en: 'Every project is designed and coded by a systems engineer — no outsourcing, no templates. Clean code, real architecture, decisions that scale.', es: 'Cada proyecto lo diseña y codifica un ingeniero en sistemas — sin outsourcing, sin plantillas. Código limpio, arquitectura real y decisiones que escalan.' },
          },
          {
            title: { en: 'Focus on real problems', es: 'Enfoque en problemas reales' },
            body: { en: "We don't sell websites. We solve operational problems. Before writing a line of code, we understand what's slowing the business down.", es: 'No vendemos sitios web. Resolvemos problemas operativos. Antes de escribir una línea de código, entendemos qué está frenando al negocio.' },
          },
          {
            title: { en: 'Full ownership to the client', es: 'Propiedad total al cliente' },
            body: { en: 'Every client receives full access to their repo, database, and hosting. No vendor lock-in, no monthly fees for code we wrote.', es: 'Cada cliente recibe acceso completo a su repositorio, base de datos y hosting. Sin dependencia del proveedor, sin mensualidades por código que nosotros escribimos.' },
          },
        ],
      },
    },
  ],
  stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel', 'n8n', 'Claude AI', 'Anthropic API'],
  projectUrl: 'https://www.flowra.digital',
  projectUrlLabel: { en: 'Visit flowra.digital →', es: 'Visitar flowra.digital →' },
}

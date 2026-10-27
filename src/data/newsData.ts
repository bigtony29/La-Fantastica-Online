import { Article, CategoryInfo } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'cartagena',
    label: 'Cartagena',
    color: '#008e9b',
    bgBadge: 'bg-[#008e9b]',
    textBadge: 'text-white',
    description: 'Noticias locales, turismo, patrimonio histórico y actualidad en la Ciudad Heroica.'
  },
  {
    id: 'bolivar',
    label: 'Bolívar',
    color: '#2563eb',
    bgBadge: 'bg-blue-600',
    textBadge: 'text-white',
    description: 'Acontecimientos en todo el departamento de Bolívar, municipios y obras regionales.'
  },
  {
    id: 'colombia',
    label: 'Colombia',
    color: '#d97706',
    bgBadge: 'bg-amber-600',
    textBadge: 'text-white',
    description: 'El panorama nacional, decisiones del gobierno y hechos destacados en todo el país.'
  },
  {
    id: 'politica',
    label: 'Política',
    color: '#dc2626',
    bgBadge: 'bg-rose-600',
    textBadge: 'text-white',
    description: 'Congreso, asamblea departamental, alcaldía, elecciones y debate público.'
  },
  {
    id: 'seguranca',
    label: 'Seguridad',
    color: '#475569',
    bgBadge: 'bg-slate-700',
    textBadge: 'text-white',
    description: 'Operaciones de la fuerza pública, policía metropolitana y orden ciudadano.'
  },
  {
    id: 'esportes',
    label: 'Deportes',
    color: '#059669',
    bgBadge: 'bg-emerald-600',
    textBadge: 'text-white',
    description: 'Fútbol colombiano, Real Cartagena, béisbol, boxeo y atletas de la región caribe.'
  },
  {
    id: 'entretenimento',
    label: 'Entretenimiento',
    color: '#9333ea',
    bgBadge: 'bg-purple-600',
    textBadge: 'text-white',
    description: 'Cultura, festivales de cine, música champeta, gastronomía caribeña y agenda artística.'
  },
  {
    id: 'mundo',
    label: 'Mundo',
    color: '#0284c7',
    bgBadge: 'bg-sky-600',
    textBadge: 'text-white',
    description: 'Relaciones internacionales, América Latina, economía global y tecnología.'
  }
];

export const INITIAL_ARTICLES: Article[] = [
  // --- HERO PRINCIPAL (Izquierda, Gran Formato) ---
  {
    id: 'cartagena-revitalizacion-puerto-historico',
    title: 'Cartagena lidera histórico plan de modernización portuaria y protección de murallas en el Caribe',
    subtitle: 'Consorcio público-privado invierte US$ 120 millones para duplicar capacidad logística sostenible y salvaguardar el patrimonio histórico de la humanidad.',
    summary: 'La bahía de Cartagena inicia una nueva era articulando eficiencia marítima de clase mundial con la preservación estricta de sus baluartes coloniales del siglo XVII.',
    content: [
      'La ciudad de Cartagena de Indias dio inicio formal esta semana a las obras del ambicioso proyecto de dragado ecológico y modernización de las terminales marítimas de Contecar y Manga, una inversión estratégica orientada a potenciar la competitividad logística y el turismo de cruceros hacia 2027.',
      'El plan incluye un riguroso protocolo técnico avalado por el Ministerio de Cultura de Colombia y comités consultivos de la UNESCO, garantizando que el flujo de grandes embarcaciones no comprometa las estructuras centenarias de los baluartes de San Ignacio y Santo Domingo.',
      'Según voceros de la Autoridad Portuaria Regional, el desarrollo generará más de 3.400 empleos directos en las tres localidades de la ciudad, además de financiar la recuperación ambiental de los manglares en la Ciénaga de la Virgen.',
      'Gremios cívicos y guías turísticos del Centro Histórico celebraron la iniciativa, que incluye un nuevo muelle eléctrico para embarcaciones que conectarán las Islas del Rosario con el muelle de La Bodeguita con cero emisiones de carbono.'
    ],
    quote: {
      text: 'Cartagena le demuestra al continente que es posible consolidarse como potencia logística sin ceder ni un milímetro de nuestra memoria histórica y cultural.',
      author: 'Carlos Mendoza, Director de Desarrollo Portuario y Marítimo'
    },
    keyTakeaways: [
      'Inversión confirmada de US$ 120 millones con ejecución a 3 años.',
      'Monitoreo acústico y estructural 24/7 en las murallas coloniales.',
      'Creación de 3.400 nuevos empleos formales en la región.',
      'Terminal marítima 100% eléctrica para transporte turístico insular.'
    ],
    category: 'cartagena',
    categoryLabel: 'Cartagena',
    badgeBg: 'bg-[#008e9b]',
    badgeText: 'text-white',
    author: {
      name: 'Valeria Restrepo',
      role: 'Editora de Economía y Región',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    date: '25 de Octubre de 2026',
    formattedTime: '08:45',
    imageUrl: '/src/assets/images/cartagena_hero_walls_1792957330211.jpg',
    imageCaption: 'Vista panorámica de las murallas coloniales y la bahía de Cartagena de Indias al atardecer.',
    readTime: '5 min',
    views: 16420,
    isBreaking: true,
    isHeroMain: true,
    tags: ['Cartagena', 'Economía', 'Puertos', 'Turismo', 'UNESCO'],
    comments: [
      {
        id: 'c1',
        authorName: 'Gabriel Miranda',
        date: 'Hoy a las 09:15',
        content: 'Una excelente noticia para Cartagena. La bahía requería esta inversión con responsabilidad ecológica.',
        likes: 14
      },
      {
        id: 'c2',
        authorName: 'María Claudia Torres',
        date: 'Hoy a las 10:02',
        content: 'Es clave que las obras viales en Manga también ayuden a descongestionar la Avenida Pedro de Heredia.',
        likes: 7
      }
    ]
  },

  // --- HERO SECUNDARIO (4 Noticias Cuadrícula 2x2) ---
  {
    id: 'bolivar-canal-dique-infraestructura',
    title: 'Macroproyecto del Canal del Dique avanza con compuertas ecológicas para 18 municipios',
    subtitle: 'Comunidades ribereñas participan activamente en el control hídrico que mitigará inundaciones en Bolívar.',
    summary: 'La restauración de esclusas y compuertas regulará el ingreso de agua dulce a la Bahía de Cartagena y recuperará humedales en el norte del departamento.',
    content: [
      'La Gobernación de Bolívar y la Agencia Nacional de Infraestructura supervisaron los trabajos en las esclusas de Calamar, punto clave de la megaobra del Canal del Dique.',
      'El sistema evitará la sedimentación descontrolada en los corales del Parque Nacional Natural Corales del Rosario y garantizará agua potable segura para más de 1,5 millones de habitantes.'
    ],
    category: 'bolivar',
    categoryLabel: 'Bolívar',
    badgeBg: 'bg-blue-600',
    badgeText: 'text-white',
    author: {
      name: 'Andrés Felipe Gómez',
      role: 'Corresponsal en Bolívar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    date: '25 de Octubre de 2026',
    formattedTime: '07:30',
    imageUrl: '/src/assets/images/bolivar_canal_dique_1792957331309.jpg',
    imageCaption: 'Obras de infraestructura hídrica y control ambiental en el Canal del Dique, norte de Bolívar.',
    readTime: '4 min',
    views: 10830,
    isHeroSecondary: true,
    tags: ['Bolívar', 'Canal del Dique', 'Medio Ambiente', 'Obras'],
    comments: [
      {
        id: 'c3',
        authorName: 'Lucía Berrío',
        date: 'Hoy a las 08:10',
        content: 'Por fin vemos avances reales en esta obra tan anhelada por los pueblos ribereños.',
        likes: 9
      }
    ]
  },
  {
    id: 'politica-congreso-reforma-regional',
    title: 'Congreso aprueba paquete de incentivos tributarios para energías solares y eólicas en el Caribe',
    subtitle: 'Departamentos costeros contarán con exenciones arancelarias para proyectos de generación limpia.',
    summary: 'Con amplia mayoría en Senado y Cámara, fue sancionada la ley de transición energética que impulsa parques renovables en Bolívar y La Guajira.',
    content: [
      'En sesión plenaria realizada anoche, el Congreso de la República aprobó el nuevo marco de estímulos para la energía solar comunitaria.',
      'La norma reduce costos de importación para paneles y acumuladores, beneficiando directamente a zonas rurales no interconectadas del Caribe colombiano.'
    ],
    category: 'politica',
    categoryLabel: 'Política',
    badgeBg: 'bg-rose-600',
    badgeText: 'text-white',
    author: {
      name: 'Camila Ospina',
      role: 'Analista de Política Nacional',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
    },
    date: '25 de Octubre de 2026',
    formattedTime: '06:50',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Instalación de paneles solares fotovoltaicos en el norte del país.',
    readTime: '3 min',
    views: 8940,
    isHeroSecondary: true,
    tags: ['Política', 'Congreso', 'Energía Solar', 'Leyes'],
    comments: []
  },
  {
    id: 'seguranca-vigilancia-baia-cartagena',
    title: 'Guardacostas y Policía Metropolitana despliegan moderno escudo de seguridad naval en la bahía',
    subtitle: 'Drones de visión térmica y patrulleras rápidas garantizan vigilancia 24 horas en rutas turísticas.',
    summary: 'El dispositivo conjunto fortalece la seguridad para más de 12.000 pasajeros diarios que navegan entre Cartagena y las islas.',
    content: [
      'La Fuerza Naval del Caribe presentó el nuevo puesto de mando unificado marítimo dotado con tecnología de detección satelital.',
      'El comandante de la estación confirmó que los tiempos de respuesta ante emergencias náuticas disminuyeron a menos de 8 minutos en todo el litoral.'
    ],
    category: 'seguranca',
    categoryLabel: 'Seguridad',
    badgeBg: 'bg-slate-700',
    badgeText: 'text-white',
    author: {
      name: 'Rodrigo Paternina',
      role: 'Reportero de Orden Público',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    date: '25 de Octubre de 2026',
    formattedTime: '06:15',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Patrullaje marítimo de control y rescate en Bocachica y Tierrabomba.',
    readTime: '3 min',
    views: 12100,
    isHeroSecondary: true,
    tags: ['Seguridad', 'Guardacostas', 'Bahía', 'Cartagena'],
    comments: []
  },
  {
    id: 'entretenimento-ficci-cartagena-cinema',
    title: 'Festival Internacional de Cine de Cartagena (FICCI) anuncia proyecciones gratuitas al aire libre',
    subtitle: 'La 64ª edición celebra el cine caribeño con más de 140 películas en plazas públicas y claustros.',
    summary: 'El certamen cinematográfico más antiguo del continente regresa con funciones abiertas bajo las estrellas en plazas del Centro Histórico.',
    content: [
      'La organización del Festival Internacional de Cine de Cartagena de Indias (FICCI) presentó su afiche y programación central.',
      'La Plaza de la Proclamación y la Plaza de la Aduana serán escenarios de muestras nocturnas abiertas a residentes y turistas.'
    ],
    category: 'entretenimento',
    categoryLabel: 'Entretenimiento',
    badgeBg: 'bg-purple-600',
    badgeText: 'text-white',
    author: {
      name: 'Sofía Montenegro',
      role: 'Crítica Cultural y de Cine',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
    },
    date: '25 de Octubre de 2026',
    formattedTime: '05:40',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Proyección nocturna al aire libre durante el festival de cine.',
    readTime: '4 min',
    views: 8410,
    isHeroSecondary: true,
    tags: ['Entretenimiento', 'Cine', 'Cultura', 'FICCI'],
    comments: []
  },

  // --- FRANJA DE NOTICIAS RECIENTES (4 elementos horizontales) ---
  {
    id: 'recent-exposicao-ouro-zenu',
    title: 'Museo del Oro Zenú de Cartagena inaugura sala dedicada a la orfebrería e ingeniería prehispánica',
    subtitle: 'Piezas precolombinas únicas evidencian los legendarios canales hidráulicos de la región momposina.',
    summary: 'La muestra exhibe más de 300 piezas de orfebrería y maquetas del sistema de control de aguas que asombró a los cronistas.',
    content: [
      'El Museo del Oro Zenú abre sus salas renovadas en el Parque de Bolívar con climatización especializada de última generación.',
      'El ingreso es totalmente gratuito de martes a domingo para todo el público.'
    ],
    category: 'entretenimento',
    categoryLabel: 'Cultura',
    badgeBg: 'bg-purple-600',
    badgeText: 'text-white',
    author: { name: 'Alonso Díaz', role: 'Investigador Cultural', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80' },
    date: '25 de Octubre de 2026',
    formattedTime: '04:30',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    imageCaption: 'Orfebrería en filigrana y piezas precolombinas.',
    readTime: '3 min',
    views: 4890,
    isRecentStrip: true,
    tags: ['Cultura', 'Historia', 'Arqueología', 'Zenú'],
    comments: []
  },
  {
    id: 'recent-colombia-cafe-exportacoes',
    title: 'Cafés especiales de los Montes de María conquistan galardón internacional en Europa',
    subtitle: 'Productores campesinos de San Jacinto logran taza de oro en concurso de calidad en Ámsterdam.',
    summary: 'La cooperativa de caficultores de Bolívar celebra calificaciones superiores a 88 puntos en la escala SCA.',
    content: [
      'El grano cultivado en las faldas de los Montes de María fue reconocido por sus notas aromáticas a panela, jazmín y frutas cítricas.',
      'El premio abre canales de exportación directa a cafeterías especializadas en Francia, Holanda y Alemania.'
    ],
    category: 'colombia',
    categoryLabel: 'Agroindustria',
    badgeBg: 'bg-amber-600',
    badgeText: 'text-white',
    author: { name: 'Mariana Duarte', role: 'Periodista Agraria', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80' },
    date: '25 de Octubre de 2026',
    formattedTime: '04:10',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
    imageCaption: 'Granos de café arábica seleccionados a mano.',
    readTime: '3 min',
    views: 6320,
    isRecentStrip: true,
    tags: ['Café', 'Exportación', 'Montes de María', 'Bolívar'],
    comments: []
  },
  {
    id: 'recent-seguranca-bairros-iluminacao',
    title: 'Plan Cartagena Iluminada instala 12.000 luminarias LED inteligentes en barrios populares',
    subtitle: 'Comunidades de las localidades 2 y 3 registran reducción de delitos nocturnos.',
    summary: 'Alcaldía culmina segunda fase de modernización del alumbrado público con telegestión y cámaras conectadas.',
    content: [
      'La cobertura abarca barrios como Olaya Herrera, El Pozón, Nelson Mandela y San José de los Campanos.',
      'Los residentes cuentan ahora con parques, andenes y paraderos con luz blanca de alta eficiencia.'
    ],
    category: 'seguranca',
    categoryLabel: 'Seguridad',
    badgeBg: 'bg-slate-700',
    badgeText: 'text-white',
    author: { name: 'Rodrigo Paternina', role: 'Reportero Ciudadano', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
    date: '25 de Octubre de 2026',
    formattedTime: '03:45',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80',
    imageCaption: 'Calles con nuevo alumbrado público LED.',
    readTime: '2 min',
    views: 5740,
    isRecentStrip: true,
    tags: ['Alumbrado', 'Seguridad', 'Cartagena'],
    comments: []
  },
  {
    id: 'recent-gastronomia-mercado-bazurto',
    title: 'Mercado de Bazurto lanza ruta gastronómica con chefs tradicionales de la cocina cartagenera',
    subtitle: 'Arroz de mariscos, sancocho de pescado y jugos exóticos cautivan a comensales internacionales.',
    summary: 'La iniciativa empodera a las matronas cocineras y posiciona el corazón popular de la ciudad como epicentro gastronómico.',
    content: [
      'En alianza con escuelas de culinaria, se certificaron los primeros 45 puestos tradicionales del mercado con estándares higiénicos de primera calidad.',
      'Los recorridos guiados combinan música champeta criolla con degustación de dulces típicos y pescados frescos del día.'
    ],
    category: 'cartagena',
    categoryLabel: 'Gastronomía',
    badgeBg: 'bg-[#008e9b]',
    badgeText: 'text-white',
    author: { name: 'Daniela Salcedo', role: 'Periodista de Gastronomía', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
    date: '25 de Octubre de 2026',
    formattedTime: '03:15',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    imageCaption: 'Plato tradicional de mariscos y patacones en Cartagena.',
    readTime: '3 min',
    views: 7150,
    isRecentStrip: true,
    tags: ['Gastronomía', 'Bazurto', 'Cultura', 'Cartagena'],
    comments: []
  },

  // --- SECCIÓN DE DEPORTES (Fiel a la referencia: 1 grande izquierda + 4 apiladas derecha) ---
  {
    id: 'esportes-real-cartagena-vitoria-lideranca',
    title: 'Real Cartagena golea en el Jaime Morón y se afianza como líder solitario rumbo a Primera División',
    subtitle: 'Con brillante exhibición colectiva y el aliento de 18.000 aficionados, el equipo auriverde se impuso 3-0.',
    summary: 'El Jaime Morón León vivió una fiesta memorable. Real Cartagena dominó de principio a fin con fútbol dinámico, vertical y contundente.',
    content: [
      'El Real Cartagena dio un paso gigante en sus aspiraciones de regresar a la máxima categoría del fútbol profesional colombiano. Ante más de 18.000 almas que colmaron las tribunas del estadio Jaime Morón León, el conjunto heroico superó a su rival con un contundente 3 a 0.',
      'Desde el pitazo inicial, el planteamiento táctico asfixió la salida visitante. A los 14 minutos, una combinación por banda derecha culminó en un cabezazo letal que abrió el marcador.',
      'En el segundo tiempo, dos contragolpes de manual sentenciaron el triunfo para delirio de la fanaticada bolivarense.',
      'Con este resultado, el onceno cartagenero llega a 34 puntos y comanda en solitario los cuadrangulares semifinales.'
    ],
    quote: {
      text: 'Este equipo tiene carácter, jerarquía y la ilusión intacta de devolverle a Bolívar el lugar que merece en la primera división.',
      author: 'Alberto Suárez, Director Técnico del Real Cartagena'
    },
    category: 'esportes',
    categoryLabel: 'Fútbol',
    badgeBg: 'bg-emerald-600',
    badgeText: 'text-white',
    author: {
      name: 'Jorge Eliécer Torres',
      role: 'Cronista Deportivo',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    date: '25 de Octubre de 2026',
    formattedTime: '02:00',
    imageUrl: '/src/assets/images/real_cartagena_soccer_1792957331983.jpg',
    imageCaption: 'Festejo de los jugadores del Real Cartagena tras anotar el gol de la victoria en el Jaime Morón.',
    readTime: '4 min',
    views: 21450,
    isPopular: true,
    tags: ['Real Cartagena', 'Fútbol', 'Torneo BetPlay', 'Deportes'],
    comments: [
      {
        id: 'c4',
        authorName: 'Mauricio Arnedo',
        date: 'Ayer',
        content: '¡Qué fiesta en el Jaime Morón! Jugando así este año volvemos a la A sin duda alguna.',
        likes: 31
      }
    ]
  },
  {
    id: 'esportes-beisebol-tigres-cartagena',
    title: 'Tigres de Cartagena confirman lanzadores de Grandes Ligas para la temporada invernal',
    subtitle: 'Peloteros dominicanos y venezolanos se integran a la novena heroica en el Once de Noviembre.',
    summary: 'La franquicia más ganadora del béisbol colombiano alista sus mejores piezas para conquistar la corona nacional.',
    content: [
      'Los Tigres de Cartagena hicieron oficial la firma de dos lanzadores abridores y un cerrador con experiencia en ligas mayores.',
      'Los entrenamientos oficiales comenzarán este lunes bajo la dirección del cuerpo técnico.'
    ],
    category: 'esportes',
    categoryLabel: 'Béisbol',
    badgeBg: 'bg-emerald-600',
    badgeText: 'text-white',
    author: { name: 'Luis Fernando Meza', role: 'Periodista de Béisbol', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
    date: '25 de Octubre de 2026',
    formattedTime: '01:30',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80',
    imageCaption: 'Acción de juego en el estadio de béisbol.',
    readTime: '3 min',
    views: 8120,
    tags: ['Béisbol', 'Tigres', 'Cartagena'],
    comments: []
  },
  {
    id: 'esportes-ciclismo-patinagem-bolivar',
    title: 'Patinadoras de Bolívar arrasan con 8 medallas de oro en el Campeonato Nacional de Velocidad',
    subtitle: 'La delegación departamental ratifica su hegemonía en el patinódromo de San Fernando.',
    summary: 'Con marcas récord en los 500 metros velocidad, las velocistas bolivarenses aseguran su lugar en la Selección Colombia.',
    content: [
      'El patinaje de carreras de Bolívar volvió a demostrar por qué es potencia indiscutible.',
      'Las deportistas se alistan ahora para representar al país en el próximo Mundial de Italia.'
    ],
    category: 'esportes',
    categoryLabel: 'Patinaje',
    badgeBg: 'bg-emerald-600',
    badgeText: 'text-white',
    author: { name: 'Luis Fernando Meza', role: 'Periodista Deportivo', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
    date: '25 de Octubre de 2026',
    formattedTime: '01:00',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=600&q=80',
    imageCaption: 'Competencia en la pista del patinódromo.',
    readTime: '2 min',
    views: 6150,
    tags: ['Patinaje', 'Deportes', 'Bolívar'],
    comments: []
  },
  {
    id: 'esportes-boxe-campeonato-mundial',
    title: 'Pugilista oriundo de Palenque disputará título mundial súper mediano en Las Vegas',
    subtitle: 'Digno heredero de la tradición de Kid Pambelé buscará el cinturón ecuménico el próximo mes.',
    summary: 'Con un invicto de 22 combates (19 nocauts), el noqueador representará a Colombia en la meca del boxeo.',
    content: [
      'San Basilio de Palenque prepara pantallas gigantes en la plaza central para apoyar al gladiador en la pelea de su vida.',
      'El pesaje y la concentración final en Nevada se cumplirán a partir de la próxima semana.'
    ],
    category: 'esportes',
    categoryLabel: 'Boxeo',
    badgeBg: 'bg-emerald-600',
    badgeText: 'text-white',
    author: { name: 'Jorge Eliécer Torres', role: 'Cronista Deportivo', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
    date: '24 de Octubre de 2026',
    formattedTime: '23:15',
    imageUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80',
    imageCaption: 'Entrenamiento de boxeo profesional en el ring.',
    readTime: '3 min',
    views: 9820,
    tags: ['Boxeo', 'Palenque', 'Mundial', 'Deportes'],
    comments: []
  },
  {
    id: 'esportes-corrida-maratona-10k-caribe',
    title: 'Abren inscripciones para la Carrera 10K Nocturna de las Murallas de Cartagena',
    subtitle: 'La prueba atlética reunirá a más de 6.000 corredores por los monumentos iluminados.',
    summary: 'El circuito recorrerá el Castillo de San Felipe, Getsemaní y la Avenida Santander frente al mar Caribe.',
    content: [
      'La carrera atlética más esperada del calendario deportivo caribeño ya tiene habilitadas sus inscripciones oficiales.',
      'Habrá medallas conmemorativas y chips de cronometraje electrónico de alta precisión.'
    ],
    category: 'esportes',
    categoryLabel: 'Atletismo',
    badgeBg: 'bg-emerald-600',
    badgeText: 'text-white',
    author: { name: 'Jorge Eliécer Torres', role: 'Cronista Deportivo', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
    date: '24 de Octubre de 2026',
    formattedTime: '21:00',
    imageUrl: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=600&q=80',
    imageCaption: 'Atletas en competencia nocturna sobre el asfalto costero.',
    readTime: '2 min',
    views: 5200,
    tags: ['Atletismo', '10K', 'Murallas', 'Cartagena'],
    comments: []
  },

  // --- SECCIÓN REGIONAL CARTAGENA & BOLÍVAR (2 tarjetas destacadas lado a lado) ---
  {
    id: 'cartagena-roteiro-arquitetura-colonial-getsemani',
    title: 'Getsemaní consolida ruta turística comunitaria de arte urbano y memoria histórica',
    subtitle: 'Vecinos lideran conservación de casonas tradicionales y fomentan el turismo responsable.',
    summary: 'Los callejones coloridos de Getsemaní, cuna de los artesanos de la independencia de 1811, brillan con galerías abiertas y cafés culturales.',
    content: [
      'Recorrer la Calle de la Sierpe, el Callejón Angosto y la Plaza de la Trinidad en Getsemaní es vivir de cerca la memoria del barrio obrero más ilustre de Cartagena.',
      'El plan de ordenamiento local protege a las familias ancestrales e impulsa un turismo consciente que respeta la identidad barrial.',
      'Nuevos murales al aire libre rinden tributo a Pedro Romero y a la herencia afrocaribeña.'
    ],
    category: 'cartagena',
    categoryLabel: 'Turismo Cultural',
    badgeBg: 'bg-[#008e9b]',
    badgeText: 'text-white',
    author: { name: 'Daniela Salcedo', role: 'Periodista de Turismo', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
    date: '24 de Octubre de 2026',
    formattedTime: '19:40',
    imageUrl: '/src/assets/images/getsemani_cartagena_street_1792957331916.jpg',
    imageCaption: 'Coloridas calles coloniales de Getsemaní con murales y balcones floridos en Cartagena.',
    readTime: '4 min',
    views: 13900,
    tags: ['Getsemaní', 'Cultura', 'Cartagena', 'Turismo'],
    comments: []
  },
  {
    id: 'bolivar-mompos-patrimonio-fluvial-turismo',
    title: 'Santa Cruz de Mompox estrena moderna flota de lanchas eléctricas en el Río Magdalena',
    subtitle: 'La ciudad patrimonio de la humanidad impulsa la navegación fluvial ecológica y silenciosa.',
    summary: 'El transporte limpio por el brazo de Mompox reduce emisiones y protege la fauna de garzas e iguanas.',
    content: [
      'Mompox, la mítica joya de Bolívar inmortalizada por sus templos barrocos y talleres de orfebres, dio un paso histórico hacia el transporte verde.',
      'Las nuevas embarcaciones conectan los puertos fluviales ofreciendo paneles solares en el techo y audiodescripción histórica para viajeros.'
    ],
    category: 'bolivar',
    categoryLabel: 'Patrimonio',
    badgeBg: 'bg-blue-600',
    badgeText: 'text-white',
    author: { name: 'Andrés Felipe Gómez', role: 'Corresponsal en Bolívar', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
    date: '24 de Octubre de 2026',
    formattedTime: '18:10',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Atardecer sobre las aguas del Río Magdalena en Mompox, Bolívar.',
    readTime: '4 min',
    views: 11450,
    tags: ['Mompox', 'Río Magdalena', 'Patrimonio', 'Bolívar'],
    comments: []
  },

  // --- MUNDO & POLÍTICA ---
  {
    id: 'mundo-cupula-clima-biodiversidade',
    title: 'Cumbre Global del Clima aprueba fondo millonario para restaurar arrecifes de coral en el Caribe',
    subtitle: 'Colombia y naciones caribeñas sellan alianza internacional para proteger barreras coralinas al 2030.',
    summary: 'Más de 60 delegaciones firmaron el acuerdo para salvaguardar la biodiversidad marina y frenar el blanqueamiento de corales.',
    content: [
      'La asamblea climática en Ginebra concluyó con el compromiso vinculante de destinar US$ 5.000 millones a santuarios oceánicos.',
      'El archipiélago de San Bernardo y las Islas del Rosario recibirán dotación tecnológica para semilleros submarinos de corales cuerno de ciervo.'
    ],
    category: 'mundo',
    categoryLabel: 'Mundo',
    badgeBg: 'bg-sky-600',
    badgeText: 'text-white',
    author: { name: 'Elena Casals', role: 'Corresponsal Internacional', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80' },
    date: '24 de Octubre de 2026',
    formattedTime: '16:00',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Arrecife de coral y fauna marina en aguas protegidas del Caribe.',
    readTime: '4 min',
    views: 9400,
    tags: ['Mundo', 'Clima', 'Océanos', 'Sostenibilidad'],
    comments: []
  },
  {
    id: 'politica-eleicoes-regionais-propostas-bolivar',
    title: 'Asamblea Departamental de Bolívar abre audiencias públicas para el presupuesto participativo 2027',
    subtitle: 'Alcaldes y líderes comunitarios de 46 municipios priorizan vías terciarias, salud y agua potable.',
    summary: 'La ciudadanía puede enviar sus propuestas en línea y seguir las deliberaciones legislativas por canales abiertos.',
    content: [
      'La duma departamental inició el ciclo de sesiones itinerantes que recorrerá el norte, centro y sur de Bolívar.',
      'La meta es garantizar proyectos de acueductos veredales en corregimientos que sufren desabastecimiento en temporadas secas.'
    ],
    category: 'politica',
    categoryLabel: 'Asamblea',
    badgeBg: 'bg-rose-600',
    badgeText: 'text-white',
    author: { name: 'Camila Ospina', role: 'Analista Política', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80' },
    date: '24 de Octubre de 2026',
    formattedTime: '14:20',
    imageUrl: 'https://images.unsplash.com/photo-1523292562811-8fa7962a471f?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Sesión plenaria de deliberación presupuestal y proyectos de ordenanza.',
    readTime: '3 min',
    views: 7120,
    tags: ['Política', 'Bolívar', 'Presupuesto', 'Comunidad'],
    comments: []
  }
];

export const MOCK_WEATHER = {
  city: 'Cartagena de Indias',
  temp: 29,
  condition: 'Soleado',
  humidity: 78,
  windSpeed: 18,
  icon: 'Sun'
};

export const BREAKING_NEWS_LIST = [
  {
    id: 'cartagena-revitalizacion-puerto-historico',
    category: 'Cartagena',
    title: 'Puerto de Cartagena firma convenio de US$ 120M para expansión sostenible y cuidado de murallas'
  },
  {
    id: 'esportes-real-cartagena-vitoria-lideranca',
    category: 'Deportes',
    title: 'Real Cartagena golea 3-0 en el Jaime Morón y se afianza como líder solitario'
  },
  {
    id: 'bolivar-canal-dique-infraestrutura',
    category: 'Bolívar',
    title: 'Obras del Canal del Dique entran en fase decisiva de compuertas y esclusas ecológicas'
  },
  {
    id: 'politica-congreso-reforma-regional',
    category: 'Política',
    title: 'Congreso aprueba paquete de incentivos a energías limpias en la Costa Caribe'
  }
];

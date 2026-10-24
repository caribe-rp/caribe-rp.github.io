'use strict';
window.NORMATIVA={
  "version": "23 oct 2026",
  "categories": [
    {
      "id": "convivencia",
      "title": "Convivencia",
      "description": "Respeto y límites entre jugadores.",
      "icon": "heart"
    },
    {
      "id": "rol",
      "title": "Conceptos de rol",
      "description": "Las bases para una buena escena.",
      "icon": "chat"
    },
    {
      "id": "personaje",
      "title": "Tu personaje",
      "description": "Primeros pasos, heridas y continuidad.",
      "icon": "user"
    },
    {
      "id": "delitos",
      "title": "Delitos y robos",
      "description": "Robos, límites, rehenes y persecuciones.",
      "icon": "lock"
    },
    {
      "id": "drogas",
      "title": "Drogas y laboratorios",
      "description": "Producción, ventas y riesgos.",
      "icon": "flask"
    },
    {
      "id": "organizaciones",
      "title": "Organizaciones",
      "description": "Bandas, conflictos y blanqueo.",
      "icon": "users"
    },
    {
      "id": "instituciones",
      "title": "Instituciones",
      "description": "Tus derechos, el código penal, Carabineros, PDI y SAMU.",
      "icon": "shield"
    },
    {
      "id": "civil",
      "title": "Vida civil y negocios",
      "description": "Locales, trabajos y economía.",
      "icon": "store"
    },
    {
      "id": "vehiculos",
      "title": "Vehículos y ciudad",
      "description": "Talleres, garajes y zonas seguras.",
      "icon": "car"
    },
    {
      "id": "ayuda",
      "title": "Ayuda y administración",
      "description": "Reportes, revisión y cambios.",
      "icon": "help"
    }
  ],
  "sources": {
    "f10": [
      "Ayuda del juego · F10",
      "server-data/resources/[wrp]/wrp-infomenu/config.lua",
      "Config.Help, Config.FAQ y Config.Updates"
    ],
    "discord": [
      "Reglas y orientación de Discord",
      "tools/caribe-bot/src/mensajes.js",
      "REGLAS, REGLAS_ROL y cómo entrar"
    ],
    "carga": [
      "Configuración de recursos del servidor",
      "server-data/resources.cfg",
      "ensure; no comprueba ejecución en vivo"
    ],
    "reparto": [
      "Configuración común de robos",
      "server-data/resources/[robos]/wrp-robos/reparto.lua",
      "REGLAS, Participar y Repartir"
    ],
    "robos": [
      "Ficha de lista de robos",
      "docs/memoria/wananosrp_robos_lista.md",
      "F5 y F10, lista común"
    ],
    "drogas": [
      "Configuración de laboratorios",
      "server-data/resources/[sistemas]/wrp-drogas/config.lua",
      "Labs, Cadenas, Calor, Allanamiento y Traspaso"
    ],
    "drogasNota": [
      "Ficha vigente de drogas",
      "docs/memoria/wananosrp_drogas.md",
      "Rediseño F8.6 y F8.7; historial anterior superado"
    ],
    "muerte": [
      "Configuración de reaparición",
      "server-data/resources/[wrp]/wrp-muerte/config.lua",
      "Tiempo, Cobro, MantenerE"
    ],
    "muerteNota": [
      "Ficha de heridas",
      "docs/memoria/wananosrp_muerte.md",
      "Dos fases y persistencia; cobro histórico superado"
    ],
    "locales": [
      "Ficha de locales",
      "docs/memoria/wananosrp_locales_v2_plan.md",
      "Oficina, caja, empleados y servicio"
    ],
    "taller": [
      "Ficha de talleres",
      "docs/memoria/wananosrp_taller.md",
      "Órdenes, piezas, facturas y mantenimiento"
    ],
    "pesca": [
      "Ficha de pesca",
      "docs/memoria/wananosrp_pesca.md",
      "Muelle, bote y lonja"
    ],
    "mineria": [
      "Ficha de minería",
      "docs/memoria/wananosrp_mineria.md",
      "Trabajo base de minería"
    ],
    "granja": [
      "Ficha de granja",
      "docs/memoria/wananosrp_granja.md",
      "Actividad agrícola"
    ],
    "propiedades": [
      "Ficha de propiedades",
      "docs/memoria/wananosrp_propiedades.md",
      "Acceso y permisos de propiedades"
    ],
    "policia": [
      "Ficha de Carabineros",
      "docs/memoria/wananosrp_carabineros_v2.md",
      "Servicio, tablet y procedimientos"
    ],
    "busqueda": [
      "Ficha de búsqueda",
      "docs/memoria/wananosrp_busqueda.md",
      "Estrellas y despacho"
    ],
    "lavado": [
      "Configuración de blanqueo",
      "server-data/resources/[telefono]/wrp-laundering/config.lua",
      "Encuentros, comisión y trabajos bloqueados"
    ],
    "tablero": [
      "Relevo del proyecto · 23 oct 2026",
      "Registro interno",
      "Normativa, F35.2 y entrega Discord"
    ],
    "aprobacion": [
      "Edición normativa Caribe RP · 23 oct 2026",
      "Registro interno",
      "Nueve orientaciones aceptadas en el chat y aplicación solicitada a la página"
    ],
    "ampliacion": [
      "Normativa de convivencia y juego limpio",
      "Registro interno",
      "Ampliación y limpieza aprobadas por el dueño: «si haz y mete todo lo que propones»"
    ],
    "parametros": [
      "Continuidad, límites de escenas y convivencia · 23 oct 2026",
      "Registro interno",
      "Parámetros aprobados en el chat, con retención de rehenes de máximo 1 hora"
    ],
    "mysticosConceptos": [
      "Mysticos RP · conceptos de rol (referencia adaptada)",
      "https://mysticos-rp-1.gitbook.io/normativa-oficial-mysticos-rp/general/conceptos-de-rol",
      "Entorno, choques, reconocimiento y administración; revisado 23 oct 2026"
    ],
    "mysticosRadio": [
      "Mysticos RP · radio y animaciones (referencia adaptada)",
      "https://mysticos-rp-1.gitbook.io/normativa-oficial-mysticos-rp/general/uso-de-radio-y-animaciones",
      "Uso narrativo y abuso mecánico; revisado 23 oct 2026"
    ],
    "mysticosStream": [
      "Mysticos RP · transmisiones (referencia adaptada)",
      "https://mysticos-rp-1.gitbook.io/normativa-oficial-mysticos-rp/normativa-streamer/normas-para-streamers",
      "Convivencia y reportes; revisado 23 oct 2026"
    ],
    "onx": [
      "ONX · reglamento oficial (referencia adaptada)",
      "https://onx.gg/rules",
      "Calidad de escenas y provocaciones; revisado 23 oct 2026"
    ],
    "newday": [
      "New Day RP · reglamento oficial (referencia adaptada)",
      "https://newdayrp.com/threads/new-day-rp-rules-and-guidelines.24/",
      "Personajes, evasión mediante guardado y saqueo; revisado 23 oct 2026"
    ],
    "ampliacionOct23": [
      "Edición de convivencia Caribe RP · 23 oct 2026",
      "Registro interno",
      "Usuario encargó completar vacíos con referencias internacionales; reglas originales adaptadas, sin importar cifras ajenas"
    ],
    "penalCfg": [
      "Código penal de la tablet",
      "server-data/resources/[trabajos]/[carabineros]/wrp-carabineros/config.lua",
      "CodigoPenal, CarcelTope, RebajaMaxima, ServicioTope, Tablet"
    ],
    "tabletLua": [
      "Cálculo del parte",
      "server-data/resources/[trabajos]/[carabineros]/wrp-carabineros/server/tablet.lua",
      "Rebaja, tope y servicio comunitario"
    ],
    "carcelCfg": [
      "Configuración de la cárcel",
      "server-data/resources/[trabajos]/[carabineros]/wrp-carcel/config.lua",
      "Tareas y fianza"
    ],
    "cajafuerteCfg": [
      "Robo de tiendas con caja fuerte",
      "server-data/resources/[robos]/wrp-cajafuerte/config.lua",
      "13 tiendas, mínimo y trabajos que cuentan"
    ],
    "megavisionCfg": [
      "Robo a Megavisión",
      "server-data/resources/[robos]/wrp-robotiendas/config.lua",
      "PoliceNumberRequired; cuenta solo police"
    ],
    "pdiCfg": [
      "Recurso PDI",
      "server-data/resources/[trabajos]/[pdi]/wrp-pdi/config.lua",
      "Job fbi, menú heredado de esx_policejob"
    ],
    "samuCfg": [
      "Clínica y heridas",
      "server-data/resources/[trabajos]/[clinica]/wrp-clinica/config.lua",
      "Atención y recompensa de reanimación"
    ],
    "aprobacion5": [
      "Aprobación de robos, código penal y reglamentos · 23 oct 2026",
      "tools/normativa-caribe/PROPUESTA-PENAL-INSTITUCIONES.md",
      "Cinco puntos aprobados por el dueño en el chat"
    ],
    "newdayReglas": [
      "New Day RP · reglas oficiales (EE.UU., referencia adaptada)",
      "https://newdayrp.com/threads/new-day-rp-rules-and-guidelines.24/",
      "New Life Rule, force perma, corrupción con aprobación previa; revisado 23 oct 2026"
    ],
    "paragonSops": [
      "Paragon RP · SOP policiales (EE.UU., referencia adaptada)",
      "https://paragonroleplay.gg/police-sops",
      "La regla en una frase, fuerza, fuga sin inmunidad, órdenes; revisado 23 oct 2026"
    ],
    "mysticosDelictual": [
      "Mysticos RP · normativa delictual y facciones legales (referencia adaptada)",
      "https://mysticos-rp-1.gitbook.io/normativa-oficial-mysticos-rp",
      "Robos, negociación, investigaciones y corrupción; revisado 23 oct 2026"
    ]
  },
  "articles": [
    {
      "id": "respeto",
      "category": "convivencia",
      "status": "norma",
      "title": "Respeto y convivencia",
      "summary": "Cuida a las personas con las que compartes la ciudad.",
      "paragraphs": [
        "Trata bien a todos, dentro y fuera del rol. No se toleran insultos, discriminación ni acoso."
      ],
      "sources": [
        "f10",
        "discord"
      ],
      "good": "Resuelves una diferencia con calma y pides ayuda si hace falta.",
      "bad": "Hostigas a alguien por un desacuerdo dentro del juego.",
      "tags": [
        "acoso",
        "insultos",
        "discriminacion"
      ]
    },
    {
      "id": "ic-ooc",
      "category": "rol",
      "status": "norma",
      "title": "Mantente en personaje",
      "summary": "Distingue lo que vive tu personaje de lo que sabes como jugador.",
      "paragraphs": [
        "Mantente en personaje. Lo que pasa fuera del juego no se usa dentro del rol (metagaming)."
      ],
      "sources": [
        "f10",
        "discord"
      ],
      "good": "Actúas con la información que tu personaje consiguió en la escena.",
      "bad": "Buscas a alguien con información que te pasaron por fuera del juego.",
      "tags": [
        "IC",
        "OOC",
        "personaje"
      ]
    },
    {
      "id": "metagaming",
      "category": "rol",
      "status": "norma",
      "title": "Metagaming · información externa",
      "summary": "Lo que ves en un stream no lo sabe automáticamente tu personaje.",
      "paragraphs": [
        "Usar en el rol algo que supiste fuera de él: stream, Discord, llamada con amigos."
      ],
      "sources": [
        "discord"
      ],
      "good": "Descubres una ubicación hablando dentro del rol.",
      "bad": "Un amigo te da una ubicación por Discord y vas a buscar a quien está escondido.",
      "tags": [
        "MG",
        "stream",
        "discord",
        "llamada"
      ],
      "related": [
        "separacion-personajes",
        "intervencion-terceros"
      ]
    },
    {
      "id": "powergaming",
      "category": "rol",
      "status": "norma",
      "title": "Powergaming · deja responder",
      "summary": "Las acciones necesitan una respuesta posible y coherente.",
      "paragraphs": [
        "Forzar al otro sin darle opción («te amarro y te llevo», sin que pueda responder) o hacer cosas imposibles en la vida real."
      ],
      "sources": [
        "discord"
      ],
      "good": "Describes un intento y permites que la otra persona responda.",
      "bad": "Decides las acciones del otro personaje sin dejarle responder.",
      "tags": [
        "PG",
        "forzar",
        "imposible"
      ]
    },
    {
      "id": "valorar-vida",
      "category": "rol",
      "status": "norma",
      "title": "Valora la vida de tu personaje",
      "summary": "El peligro influye en cómo actúas.",
      "paragraphs": [
        "Si te apuntan y estás en desventaja, obedeces. Tu personaje tiene miedo de morir."
      ],
      "sources": [
        "discord"
      ],
      "good": "Cooperas cuando te apuntan y estás en desventaja.",
      "bad": "Ignoras el arma y actúas como si fueras invulnerable.",
      "tags": [
        "NVVP",
        "miedo",
        "me apuntan",
        "arma"
      ]
    },
    {
      "id": "rdm",
      "category": "rol",
      "status": "norma",
      "title": "RDM · matar sin motivo",
      "summary": "Una agresión letal necesita una situación de rol que la justifique.",
      "paragraphs": [
        "No mates a alguien sin una situación de rol previa que lo justifique. Un insulto al pasar no es motivo. La excepción es el PvP entre participantes dentro de una zona roja marcada, con los límites descritos en Zonas rojas."
      ],
      "sources": [
        "discord",
        "aprobacion"
      ],
      "good": "Mantienes una discusión sin convertir un insulto al pasar en una muerte.",
      "bad": "Matas a un desconocido porque te insultó al pasar.",
      "tags": [
        "DM",
        "me mataron",
        "matar",
        "disparar"
      ]
    },
    {
      "id": "vdm",
      "category": "rol",
      "status": "norma",
      "title": "VDM · el vehículo como arma",
      "summary": "El auto también está sujeto a las reglas de rol.",
      "paragraphs": [
        "Usar el auto como arma sin rol previo."
      ],
      "sources": [
        "discord"
      ],
      "good": "Conduces respetando la escena y evitas atropellar por diversión.",
      "bad": "Atropellas a alguien a propósito sin rol previo.",
      "tags": [
        "me atropellaron",
        "atropello",
        "vehiculo",
        "auto"
      ]
    },
    {
      "id": "combat-log",
      "category": "personaje",
      "status": "norma",
      "title": "Combat log · abandonar una escena",
      "summary": "Salir del juego no sirve para evitar las consecuencias.",
      "paragraphs": [
        "Salirte del juego en medio de un rol (persecución, robo, detención) para evitar las consecuencias. Queda registrado."
      ],
      "sources": [
        "discord"
      ],
      "good": "Permaneces conectado y continúas la detención.",
      "bad": "Cierras el juego durante una persecución para evitar que te detengan.",
      "tags": [
        "me desconecte",
        "desconexion",
        "crash",
        "alt f4",
        "me cai"
      ]
    },
    {
      "id": "romper-rol",
      "category": "rol",
      "status": "norma",
      "title": "Un problema se reporta después",
      "summary": "Mantén el personaje y usa soporte para el conflicto.",
      "paragraphs": [
        "Hablar fuera de personaje dentro del juego rompe el rol. Los problemas se resuelven por soporte después de la escena.",
        "Ante violencia gráfica o tortura narrativa puedes detener la escena y pedir soporte, conforme a Privacidad y convivencia, sin represalias OOC."
      ],
      "sources": [
        "discord",
        "parametros"
      ],
      "good": "Terminas la escena y explicas el problema por ticket.",
      "bad": "Interrumpes la escena para discutir sanciones fuera de personaje.",
      "tags": [
        "antirol",
        "ticket",
        "romper rol"
      ],
      "related": [
        "privacidad"
      ]
    },
    {
      "id": "zona-segura",
      "category": "vehiculos",
      "status": "norma",
      "title": "Zonas seguras",
      "summary": "Hospitales y comisarías tienen protección normativa.",
      "paragraphs": [
        "No se cometen delitos en hospitales, comisarías ni zonas seguras.",
        "Entrar durante una escena no cancela sus consecuencias ni reinicia tu participación. La protección tampoco permite a otros continuar delitos dentro de la zona.",
        "Si alguien usa la protección para eludir una escena, conserva los antecedentes y pide resolución de staff. No inventes una excepción para continuar la agresión dentro."
      ],
      "sources": [
        "f10",
        "discord",
        "parametros"
      ],
      "good": "Respetas la protección del hospital.",
      "bad": "Inicias un robo dentro de una comisaría.",
      "tags": [
        "hospital",
        "comisaria",
        "robar zona segura"
      ],
      "related": [
        "intervencion-terceros"
      ]
    },
    {
      "id": "zona-roja",
      "category": "delitos",
      "status": "norma",
      "title": "Zonas rojas · alcance del PvP",
      "summary": "La excepción de PvP se limita al área marcada y mantiene las demás reglas.",
      "paragraphs": [
        "Dentro de un área roja marcada se permite PvP sin interacción previa, únicamente entre participantes que estén dentro de esa área.",
        "La excepción no permite disparar desde fuera hacia la zona ni desde la zona hacia fuera. Siguen vigentes respeto, prohibición de exploits y metagaming, y prohibición de atropellos arbitrarios.",
        "Fuera del área vuelve la regla general. Si el único motivo de la agresión era encontrarse en la zona roja, debes detenerla al salir.",
        "Una persecución fundada en un rol previo independiente de la zona roja puede continuar bajo las reglas generales, sin disparar cruzando el límite rojo. Entrar en una zona segura no autoriza a cometer delitos dentro de ella."
      ],
      "sources": [
        "f10",
        "discord",
        "aprobacion",
        "parametros"
      ],
      "good": "Ambos participantes permanecen dentro del área roja y respetan las demás reglas.",
      "bad": "Disparas a una persona fuera del área aprovechando que tú estás dentro."
    },
    {
      "id": "primeros-pasos",
      "category": "personaje",
      "status": "guia",
      "title": "Empieza en Caribe",
      "summary": "Requisitos, personaje y ayuda del juego.",
      "paragraphs": [
        "Discord pide GTA V original para PC, FiveM, micrófono y Discord abierto y vinculado, además de verificación con el rol Ciudadano.",
        "Busca Caribe RP en FiveM, crea tu personaje en el Registro Civil y abre F10.",
        "La ayuda dirige a Don Luis en el Centro de Empleos para conseguir trabajo. Consulta Trabajos Públicos para orientarte."
      ],
      "sources": [
        "discord",
        "f10"
      ],
      "tags": [
        "entrar",
        "nuevo",
        "registro civil",
        "whitelist"
      ],
      "related": [
        "glosario",
        "reportes"
      ]
    },
    {
      "id": "heridas",
      "category": "personaje",
      "status": "guia",
      "title": "Heridas y reaparición",
      "summary": "Consulta la mecánica de reaparición y las reglas de continuidad.",
      "paragraphs": [
        "La primera fase de derribado dura 10 minutos. Después puedes mantener E durante 3 segundos para reaparecer en la clínica.",
        "Reaparecer cuesta $50.000 CLP (primero del banco, luego en efectivo).",
        "Desconectarte no borra tus heridas. Usa /auxilio para pedir ayuda.",
        "Reaparecer es un PK: terminas tu participación en la escena. Ver Derribo, PK y CK."
      ],
      "sources": [
        "muerte",
        "muerteNota",
        "aprobacion"
      ],
      "tags": [
        "muerto",
        "revivir",
        "respawn",
        "auxilio",
        "herido"
      ],
      "related": [
        "pk-ck",
        "samu"
      ]
    },
    {
      "id": "caida-accidental",
      "category": "personaje",
      "status": "norma",
      "title": "Si se te cae el juego",
      "summary": "Avisa por soporte y coordina la continuación de la escena.",
      "paragraphs": [
        "Si una falla del juego o de conexión interrumpe tu escena, avisa por soporte, reconecta cuando sea posible y coordina la continuación con quienes participaban o con staff.",
        "Una desconexión no se sanciona automáticamente como combat log. Se revisan las circunstancias y la evidencia; abandonar para evitar consecuencias sigue prohibido.",
        "Esta edición no establece un plazo fijo de reconexión. Explica lo ocurrido y aporta los antecedentes que tengas, sin fabricar pruebas."
      ],
      "sources": [
        "f10",
        "discord",
        "aprobacion"
      ],
      "tags": [
        "me desconecte",
        "se me cayo",
        "crash",
        "fallo conexion"
      ],
      "good": "Avisas que se cayó el juego y coordinas retomar la detención cuando puedes reconectar.",
      "bad": "Aprovechas la caída para evitar la detención y no retomar la escena."
    },
    {
      "id": "rehenes",
      "category": "delitos",
      "status": "norma",
      "title": "Rehenes y negociación",
      "summary": "Máximo 2 rehenes por escena y 1 hora de retención desde cada captura.",
      "paragraphs": [
        "La captura de un rehén debe ocurrir en el rol y permitir respuesta. No se permiten rehenes pactados para fabricar ventajas en un robo o negociación.",
        "Se permite un máximo de 2 rehenes por escena. La retención de cada rehén dura como máximo 1 hora desde su captura. No se puede superar ese máximo, ni mediante acuerdo OOC.",
        "Al liberar a un rehén, déjalo en un lugar accesible y no fabriques una nueva captura inmediata para reiniciar el tiempo de retención.",
        "No captures a personal de SAMU en servicio mientras atiende una emergencia ni uses la atención como señuelo. Su actividad civil fuera de servicio sigue las reglas generales.",
        "Las exigencias deben ser realizables y permitir negociación, respetando valorar la vida y sin forzar las acciones de otra persona. Se pueden negociar condiciones de salida y seguridad del rehén; ninguna exigencia se acepta automáticamente.",
        "No exijas CK, sanciones OOC, objetos de administración ni cambios de cuenta como condición de canje."
      ],
      "sources": [
        "f10",
        "discord",
        "aprobacion",
        "parametros"
      ],
      "good": "Realizas una captura con posibilidad de respuesta, negocias y liberas al rehén en un lugar accesible antes de cumplir una hora.",
      "bad": "Retienes a alguien más de una hora o lo liberas y recapturas inmediatamente para reiniciar el plazo.",
      "tags": [
        "rehen",
        "secuestro",
        "retencion",
        "1 hora",
        "60 minutos",
        "SAMU"
      ],
      "related": [
        "limites-robos",
        "carabineros"
      ]
    },
    {
      "id": "drogas-inicio",
      "category": "drogas",
      "status": "guia",
      "title": "Drogas · cómo orientarte",
      "summary": "Consulta la guía del juego para pasos e insumos actuales.",
      "paragraphs": [
        "F10 describe cosecha en campos de zonas rojas y el radial Z → Drogas.",
        "Marihuana se procesa y empaca desde el radial. Cocaína, metanfetamina, heroína y LSD usan laboratorios con dueño.",
        "El cuaderno químico y Z → Drogas → Guía muestran pasos y materiales. Esta web no publica ubicaciones privadas ni estados en vivo."
      ],
      "sources": [
        "f10",
        "drogas",
        "drogasNota"
      ],
      "tags": [
        "marihuana",
        "cocaina",
        "meta",
        "heroina",
        "LSD",
        "cannabis",
        "droga"
      ]
    },
    {
      "id": "laboratorios",
      "category": "drogas",
      "status": "guia",
      "title": "Laboratorios con dueño",
      "summary": "Producción, acceso y lotes tienen su propio flujo.",
      "paragraphs": [
        "El sistema contempla un laboratorio por tipo para persona o banda y compra con dinero negro.",
        "Algunos pasos corren solos una vez cargados. Los pasos marcados con riesgo pueden perder el lote al fallar.",
        "Consulta recetas, materiales y tiempos en el cuaderno químico o la guía del juego."
      ],
      "sources": [
        "drogas",
        "drogasNota",
        "f10"
      ],
      "tags": [
        "lab",
        "cuaderno",
        "receta",
        "producir",
        "lote"
      ]
    },
    {
      "id": "calor-laboratorio",
      "category": "drogas",
      "status": "guia",
      "title": "Calor, humo y vigilancia",
      "summary": "Producir puede dejar señales y generar respuesta policial.",
      "paragraphs": [
        "La configuración incluye calor que aumenta con producción de riesgo y fallos y disminuye con el tiempo.",
        "Humo y denuncias vecinales son parte de ese riesgo. La guía y la puerta permiten revisar el calor.",
        "El filtro y la cámara de vigía ayudan a gestionar el riesgo del laboratorio. Su uso no elimina las reglas de rol."
      ],
      "sources": [
        "drogas",
        "drogasNota"
      ],
      "tags": [
        "humo",
        "filtro",
        "camara",
        "calor",
        "denuncia"
      ]
    },
    {
      "id": "traspaso-laboratorio",
      "category": "drogas",
      "status": "guia",
      "title": "Traspasos de laboratorio",
      "summary": "Venta, acceso de banda y mudanzas.",
      "paragraphs": [
        "El traspaso se realiza a un jugador cercano mediante contrato. También se gestionan el acceso de banda y la mudanza.",
        "Orden, precinto, calor y tiempo desde compra pueden bloquear operaciones. Revisa los avisos antes de negociar.",
        "La mecánica de traspaso no establece por sí sola qué estafas están permitidas ni qué compensación corresponde. Consulta soporte antes de una operación dudosa."
      ],
      "sources": [
        "drogas",
        "drogasNota"
      ],
      "tags": [
        "vender laboratorio",
        "mudanza",
        "contrato",
        "dueno"
      ]
    },
    {
      "id": "venta-droga",
      "category": "drogas",
      "status": "guia",
      "title": "Venta e insumos",
      "summary": "Ventas callejeras y contacto mayorista.",
      "paragraphs": [
        "F10 describe ofertas a peatones con posibilidad de rechazo y aviso policial, y venta sin empacar al mayorista.",
        "La guía orienta sobre tiendas, camión de químicos y proveedor itinerante.",
        "No se publican ganancias garantizadas, precios ni posiciones activas. Revisa Zonas rojas para los límites de la excepción de PvP."
      ],
      "sources": [
        "f10",
        "drogas"
      ],
      "tags": [
        "peaton",
        "mayorista",
        "bolsitas",
        "quimicos",
        "proveedor",
        "vender"
      ]
    },
    {
      "id": "bandas",
      "category": "organizaciones",
      "status": "guia",
      "title": "Organizaciones y pertenencia",
      "summary": "La ayuda remite a Discord para solicitudes.",
      "paragraphs": [
        "F10 indica que las organizaciones se solicitan por Discord y que cada personaje pertenece a su propia organización.",
        "Las funciones configuradas de bandas y laboratorios no constituyen por sí solas un reglamento de conflictos."
      ],
      "sources": [
        "f10",
        "carga"
      ],
      "tags": [
        "banda",
        "pandilla",
        "mafia",
        "organizacion"
      ]
    },
    {
      "id": "blanqueo",
      "category": "organizaciones",
      "status": "guia",
      "title": "Blanqueo y encuentros",
      "summary": "La aplicación organiza encuentros con miembros habilitados.",
      "paragraphs": [
        "La configuración contempla solicitud, aceptación, encuentro cercano y comisión de banda.",
        "La comisión predeterminada no equivale a una tarifa universal: contempla ajustes del jefe.",
        "Hay trabajos bloqueados para contactar o atender pedidos. La herramienta no reemplaza reglas de abuso de facción."
      ],
      "sources": [
        "lavado",
        "carga"
      ],
      "tags": [
        "lavar",
        "dinero negro",
        "desconocido",
        "comision"
      ]
    },
    {
      "id": "conflictos-bandas",
      "category": "organizaciones",
      "status": "norma",
      "title": "Conflictos entre organizaciones",
      "summary": "La rivalidad necesita motivo IC y una escalada reconocible.",
      "paragraphs": [
        "Un conflicto debe tener un motivo dentro del rol y una escalada reconocible. Pertenecer a una organización rival no autoriza matar automáticamente.",
        "En conflictos entre organizaciones se permite un máximo de 4 participantes por bando, incluidos aliados y apoyos. No se permiten reemplazos para eludir el cupo. Los límites específicos de cada robo se cumplen además de esta regla.",
        "Los conflictos continuados deben registrar con staff su motivo IC y participantes. No se permiten guerras ilimitadas ni un CK automático por conflicto entre bandas.",
        "El conflicto se cierra por acuerdo de sus responsables o resolución de staff tras revisar los antecedentes. Una vez cerrado, no se reinicia basándose únicamente en el mismo hecho ya resuelto."
      ],
      "sources": [
        "f10",
        "discord",
        "aprobacion",
        "parametros"
      ],
      "good": "Desarrollas el conflicto a partir de hechos IC sin convertir cada encuentro en un ataque automático.",
      "bad": "Matas a un personaje solo por pertenecer a una banda rival."
    },
    {
      "id": "derechos-ciudadano",
      "category": "instituciones",
      "status": "norma",
      "title": "Si te controla la policía",
      "summary": "Tienes derecho a saber por qué, a responder y a reclamar; la policía necesita hechos para cargarte algo.",
      "blocks": [
        {
          "t": "list",
          "items": [
            "Te deben decir el **motivo** del control o detención y, al final, los **cargos** y el resultado, cuando la seguridad lo permita.",
            "Un cargo exige **hechos IC**. Pertenecer a una banda, un nombre sobre la cabeza o algo sabido fuera del rol no prueba nada.",
            "Puedes dar tu versión, guardar silencio y pedir el **indicativo** del funcionario.",
            "Solo se incauta lo ilícito, peligroso o ligado al hecho. Dinero, teléfono y efectos personales sin relación se quedan contigo.",
            "Nadie te obliga a retirar dinero del banco, transferir ni entregar claves.",
            "No hay jueces ni abogados jugadores: eso no permite retenerte indefinidamente."
          ]
        },
        {
          "t": "h",
          "text": "Cómo reclamar"
        },
        {
          "t": "table",
          "caption": "A quién recurrir",
          "head": [
            "Qué pasó",
            "Dónde va",
            "Quién lo revisa"
          ],
          "rows": [
            [
              "Un parte que crees injusto (IC)",
              "Reclamo dentro del rol, con número de parte y hechos",
              "Un oficial Teniente o superior que no participó. Puede anular el parte."
            ],
            [
              "El reclamo es contra el mando que debería revisarlo",
              "Reclamo a otro oficial; si no hay, reporte a staff",
              "Otro oficial sin conflicto o staff"
            ],
            [
              "Abuso del jugador (MG, PG, acoso, uso del cargo para molestar)",
              "Reporte OOC por /report o Discord",
              "Staff, con las pautas de [[sanciones|Sanciones]]"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Anular un parte borra la multa impaga y libera la cárcel de ese parte. Las multas ya pagadas no se devuelven solas. Nadie puede castigarte por reclamar de buena fe."
        }
      ],
      "good": "Pides el indicativo, aceptas el control y después reclamas el parte con un Teniente.",
      "bad": "Insultas al carabinero porque crees que el control es injusto.",
      "sources": [
        "penalCfg",
        "aprobacion5",
        "paragonSops"
      ],
      "tags": [
        "derechos",
        "detencion",
        "reclamo",
        "control",
        "anular parte",
        "abuso policial"
      ],
      "related": [
        "codigo-penal",
        "carabineros",
        "consecuencias-ic-ooc"
      ],
      "paragraphs": []
    },
    {
      "id": "codigo-penal",
      "category": "instituciones",
      "status": "norma",
      "title": "Código penal",
      "summary": "Los 28 cargos que usa la tablet de Carabineros, con su multa y sus minutos de cárcel.",
      "blocks": [
        {
          "t": "p",
          "text": "Montos en CLP. La cárcel se cumple en **minutos reales conectado** (la tablet lo muestra como meses: 1 mes = 1 minuto). Ninguna pena es un CK."
        },
        {
          "t": "penal"
        },
        {
          "t": "p",
          "text": "Cómo se combinan y cuándo aplica cada uno: [[criterios-cargos|Criterios para cargar]]. Cómo se calcula el total: [[calculo-penas|Multa, cárcel y fianza]]."
        }
      ],
      "good": "El parte trae un cargo por cada conducta distinta, con los hechos que la prueban.",
      "bad": "Cargan Robo a tienda y Robo mayor por el mismo robo.",
      "sources": [
        "penalCfg",
        "aprobacion5"
      ],
      "tags": [
        "multa",
        "carcel",
        "cargos",
        "parte",
        "penas",
        "codigo"
      ],
      "related": [
        "criterios-cargos",
        "calculo-penas",
        "derechos-ciudadano"
      ],
      "paragraphs": []
    },
    {
      "id": "criterios-cargos",
      "category": "instituciones",
      "status": "norma",
      "title": "Criterios para cargar",
      "summary": "Un cargo por conducta acreditada; sin duplicar el mismo hecho ni inventar cargos que no existen.",
      "blocks": [
        {
          "t": "h",
          "text": "Reglas de combinación"
        },
        {
          "t": "list",
          "items": [
            "La tablet suma **cada cargo una sola vez por parte**. Con dos víctimas o dos rehenes se carga una vez y el relato describe a ambos.",
            "Un robo lleva **un solo** cargo de robo: el de su modalidad.",
            "Un mismo ataque lleva un cargo de daño: Lesiones, Agresión a un carabinero u Homicidio. No se suman entre sí.",
            "Se pueden combinar conductas distintas: por ejemplo, robo + porte de arma + resistencia.",
            "**Máximo 3 cargos por parte.** Si hay más, se eligen los 3 más graves y el resto se anota en el relato. La tablet no deja marcar un cuarto.",
            "No se fracciona una escena en varios partes para saltarse el tope de 30 minutos ni el máximo de 3 cargos.",
            "Un hecho nuevo y posterior lleva su propio parte."
          ]
        },
        {
          "t": "h",
          "text": "Casos sin cargo propio"
        },
        {
          "t": "table",
          "caption": "Qué hacer cuando no hay un cargo exacto",
          "head": [
            "Situación",
            "Cómo se resuelve"
          ],
          "rows": [
            [
              "Robo iniciado pero sin botín",
              "Se carga el robo: el catálogo no distingue tentativa. La rebaja (hasta 25 %) puede reflejar que no hubo botín."
            ],
            [
              "Derribo con arma, la víctima reaparece o es reanimada",
              "Homicidio, si hubo medio letal e intención acreditada. La reaparición (PK) es una regla de juego, no prueba que nadie murió."
            ],
            [
              "Golpes o derribo sin medio letal",
              "Lesiones."
            ],
            [
              "Ataque a PDI o SAMU",
              "Lesiones u Homicidio. Los cargos \"de carabinero\" solo cubren a Carabineros."
            ],
            [
              "Corrupción, soborno u obstrucción",
              "No hay cargo IC. Se documenta y la corrupción sin permiso se reporta a staff."
            ],
            [
              "Positivo de pólvora o drogas",
              "Es un antecedente, no prueba por sí solo un robo o una venta."
            ]
          ]
        },
        {
          "t": "note",
          "kind": "ojo",
          "title": "Nada fuera del catálogo",
          "text": "No se inventan cargos, montos ni recargos. Lo que no está en la tabla se describe en el relato o se reporta."
        }
      ],
      "good": "Por un robo a Starken con arma y fuga, el parte lleva Robo mayor, Porte ilegal y Fuga de un control.",
      "bad": "Cargan Secuestro dos veces porque había dos rehenes.",
      "sources": [
        "penalCfg",
        "tabletLua",
        "aprobacion5",
        "newdayReglas"
      ],
      "tags": [
        "tentativa",
        "concurso",
        "duplicado",
        "homicidio",
        "lesiones",
        "cargos"
      ],
      "related": [
        "codigo-penal",
        "calculo-penas",
        "pk-ck"
      ],
      "paragraphs": []
    },
    {
      "id": "calculo-penas",
      "category": "instituciones",
      "status": "norma",
      "title": "Multa, cárcel y fianza",
      "summary": "Cómo la tablet calcula el total, cuándo hay rebaja, servicio comunitario o fianza.",
      "blocks": [
        {
          "t": "steps",
          "items": [
            "**Suma** la multa y los minutos de cada cargo marcado (una vez cada uno, **máximo 3 cargos**).",
            "**Rebaja opcional** de 0 a 25 %, con motivo escrito (por ejemplo, cooperó). Nunca a cambio de dinero o amistad.",
            "**Tope**: la cárcel queda en máximo **30 minutos**. La idea es que cumplas un rato y vuelvas a rolear. La multa no tiene tope.",
            "**Servicio comunitario**: si la pena queda entre 1 y 15 minutos, el funcionario puede cambiar la cárcel por tareas (1 por minuto, mínimo 3). La multa se mantiene."
          ]
        },
        {
          "t": "table",
          "caption": "Ejemplos reales con la fórmula de la tablet",
          "head": [
            "Cargos",
            "Rebaja",
            "Resultado"
          ],
          "rows": [
            [
              "Robo a tienda + Porte ilegal",
              "—",
              "$200.000 y 14 min"
            ],
            [
              "Robo a tienda + Porte ilegal",
              "20 %",
              "$160.000 y 11 min"
            ],
            [
              "Homicidio de un carabinero + Secuestro",
              "—",
              "$550.000 y 30 min (tope; suma 40)"
            ],
            [
              "Manejar bajo alcohol",
              "— + servicio",
              "$60.000 y 4 tareas"
            ]
          ]
        },
        {
          "t": "h",
          "text": "En la cárcel"
        },
        {
          "t": "list",
          "items": [
            "El tiempo corre solo mientras estás conectado.",
            "Las tareas del penal descuentan 30 segundos cada una, hasta la mitad de la condena.",
            "Fianza: $25.000 por minuto restante (sirve para toda condena de hasta 30 minutos). Se paga en el penal, nunca en efectivo al funcionario.",
            "Las multas se pagan en el banco. Una multa impaga no es motivo de CK."
          ]
        },
        {
          "t": "note",
          "kind": "ojo",
          "title": "Multa rápida",
          "text": "La multa rápida (sin parte) es solo para infracciones sin cárcel: mal estacionado, velocidad, sin licencia y desórdenes. Lo demás va por parte, para que tenga relato, rebaja y revisión. No se cobra la misma infracción por multa rápida y por parte."
        }
      ],
      "good": "Rebajas un 20 % porque la persona cooperó y escribes ese motivo en el parte.",
      "bad": "Cobras una multa rápida por robo y además haces el parte por el mismo robo.",
      "sources": [
        "tabletLua",
        "penalCfg",
        "carcelCfg",
        "aprobacion5"
      ],
      "tags": [
        "rebaja",
        "tope",
        "fianza",
        "servicio comunitario",
        "tareas",
        "multa rapida"
      ],
      "related": [
        "codigo-penal",
        "criterios-cargos"
      ],
      "paragraphs": []
    },
    {
      "id": "carabineros",
      "category": "instituciones",
      "status": "norma",
      "title": "Reglamento de Carabineros",
      "summary": "Proteger la vida y hacer cumplir el código con fundamento, fuerza proporcional y registro de lo que haces.",
      "blocks": [
        {
          "t": "h",
          "text": "1. Servicio"
        },
        {
          "t": "list",
          "items": [
            "Entra en turno, usa uniforme y equipo autorizados e informa tu indicativo. Si un ciudadano lo pide para reclamar, se lo das.",
            "De franco no usas radio, vehículos, armas ni accesos institucionales para asuntos personales.",
            "Rangos y especialidades (GOPE, OS-7, SIAT, Aeropolicial…) se asignan; no se autodeclaran."
          ]
        },
        {
          "t": "h",
          "text": "2. Control y detención"
        },
        {
          "t": "steps",
          "items": [
            "Ten un motivo concreto y dilo.",
            "Esposa solo por seguridad o custodia; da instrucciones claras y tiempo para cumplir.",
            "Si hay heridos, pide SAMU antes de seguir.",
            "Identifica, reúne evidencia y arma el parte.",
            "Explica los cargos y resuelve: traslado, multa o libertad. No alargues la custodia como castigo."
          ]
        },
        {
          "t": "h",
          "text": "3. Uso de la fuerza"
        },
        {
          "t": "list",
          "items": [
            "Usa la fuerza mínima necesaria para la amenaza actual y bájala cuando cese.",
            "**Arma letal solo ante peligro inmediato de muerte o lesión grave.**",
            "Huir, discutir o negarse a una multa no justifica disparar.",
            "Prohibido: disparos de advertencia, rematar, castigar y disparar solo para detener un vehículo que huye."
          ]
        },
        {
          "t": "h",
          "text": "4. Persecuciones"
        },
        {
          "t": "list",
          "items": [
            "Comunica ubicación, dirección, vehículo y riesgo. Una unidad dirige y otra apoya.",
            "PIT y clavos solo con necesidad y condiciones seguras, con autorización del mando de la escena cuando sea posible.",
            "Nunca PIT a motos o bicicletas, en puentes, alturas o multitudes.",
            "Si el riesgo supera al delito, suelta la persecución: la orden de captura sigue después."
          ]
        },
        {
          "t": "h",
          "text": "5. Robos y rehenes"
        },
        {
          "t": "list",
          "items": [
            "Designa mando y negociador, monta perímetro y deja a SAMU esperando en lugar seguro.",
            "La vida del rehén va primero. Escucha exigencias posibles; no ofrezcas inmunidad, CK ni sanciones OOC.",
            "Entrar por la fuerza exige justificar la amenaza, no solo que terminó una barra de progreso."
          ]
        },
        {
          "t": "h",
          "text": "6. Registros y allanamientos"
        },
        {
          "t": "p",
          "text": "Registra solo con hechos, consentimiento o urgencia, y solo lo relacionado. Los allanamientos siguen [[allanamiento|su propio procedimiento]]. No abras celulares ni pidas claves."
        },
        {
          "t": "h",
          "text": "7. Evidencia y partes"
        },
        {
          "t": "list",
          "items": [
            "Anota qué se encontró, dónde, quién lo tomó y a quién se entregó.",
            "La bodycam en vivo no graba: una prueba es un registro real aportado.",
            "Aplica el [[codigo-penal|código penal]] y sus [[criterios-cargos|criterios]]. Anular un parte: Teniente (grado 8) o superior que no participó."
          ]
        },
        {
          "t": "h",
          "text": "8. Integridad"
        },
        {
          "t": "p",
          "text": "Prohibido quedarse con decomisos, vender equipo, consultar datos por curiosidad o favorecer bandas. Ver [[corrupcion|Corrupción]]. En escenas con PDI se acuerda un solo mando y un solo parte."
        }
      ],
      "good": "Un sospechoso huye a pie; lo persigues, comunicas su dirección y no disparas.",
      "bad": "Le disparas a las ruedas a un auto que huye por exceso de velocidad.",
      "sources": [
        "policia",
        "penalCfg",
        "aprobacion5",
        "paragonSops",
        "mysticosDelictual"
      ],
      "tags": [
        "carabineros",
        "police",
        "fuerza",
        "persecucion",
        "PIT",
        "detencion",
        "reglamento"
      ],
      "related": [
        "pdi",
        "samu",
        "derechos-ciudadano",
        "allanamiento"
      ],
      "paragraphs": []
    },
    {
      "id": "pdi",
      "category": "instituciones",
      "status": "norma",
      "title": "Reglamento de la PDI",
      "summary": "Investiga con hechos y entrega el caso a Carabineros para el parte; sus herramientas actuales son más limitadas.",
      "blocks": [
        {
          "t": "note",
          "kind": "mecanica",
          "title": "Lo que la PDI tiene hoy",
          "text": "Servicio, vestuario, armería, esposas, registro, traslado, consulta de identidad y vehículos. **No usa la tablet de Carabineros** (partes, cárcel, órdenes) ni puede pedir allanamientos de laboratorios. La modernización de la PDI (F11.9) y el laboratorio forense (Labocar) están pendientes."
        },
        {
          "t": "h",
          "text": "Reglas"
        },
        {
          "t": "list",
          "items": [
            "Rigen para la PDI las mismas reglas de Carabineros sobre fuerza, persecuciones, registros, evidencia y corrupción.",
            "Al intervenir, acredita que eres funcionario. Ser de civil no exime de identificarte.",
            "Arma un expediente: denuncia, hechos comprobados, personas, vehículos, pruebas y responsable. Distingue lo comprobado de la hipótesis.",
            "Obtén información solo dentro del rol: nada de streams, Discord ajeno ni herramientas de admin.",
            "Para cobrar o encarcelar, **entrega a la persona y el caso a Carabineros**, que aplica el parte. No uses el menú \"Multa\" del trabajo PDI: su lista no es el código penal.",
            "Operaciones encubiertas largas o infiltraciones requieren plan de jefatura y aprobación previa de staff.",
            "No anuncies peritajes o análisis automáticos que el juego no tiene."
          ]
        }
      ],
      "good": "Reúnes declaraciones y pruebas de una venta de drogas y coordinas con Carabineros la detención y el parte.",
      "bad": "Le cobras a alguien una multa del menú del trabajo PDI por un robo.",
      "sources": [
        "pdiCfg",
        "carga",
        "aprobacion5",
        "mysticosDelictual"
      ],
      "tags": [
        "pdi",
        "fbi",
        "investigacion",
        "detective",
        "encubierto",
        "labocar"
      ],
      "related": [
        "carabineros",
        "codigo-penal",
        "allanamiento"
      ],
      "paragraphs": []
    },
    {
      "id": "samu",
      "category": "instituciones",
      "status": "norma",
      "title": "Reglamento del SAMU",
      "summary": "Atiende por gravedad y seguridad, nunca por bando; la escena tiene que ser segura.",
      "blocks": [
        {
          "t": "list",
          "items": [
            "**Neutral:** atiende según la gravedad, no por si es policía, delincuente, amigo o puede pagar.",
            "**Escena segura:** si hay tiroteo o persecución, espera en un lugar seguro y entra cuando quien controla la escena lo permita. Si cambia el riesgo, retírate.",
            "La ambulancia no se usa como cobertura, bloqueo ni vehículo de fuga.",
            "Atiende con /me y /do sin imponer diagnósticos ni desenlaces. No reanimes en cadena para devolver gente a un tiroteo.",
            "La policía mantiene la custodia del detenido; tú decides la atención. Atender no libera al detenido, y detener no impide la atención urgente.",
            "Comparte con la policía solo lo necesario. No vendas información de pacientes.",
            "No cobres propinas ni vendas equipo. La recompensa del juego por reanimar no es una tarifa al paciente.",
            "No portas armas como parte de tu trabajo. En servicio, atendiendo una emergencia, no puedes ser tomado de rehén."
          ]
        },
        {
          "t": "note",
          "kind": "ojo",
          "title": "Muerte y memoria",
          "text": "Atender sin que el paciente reaparezca no borra su memoria. Ver [[pk-ck|Derribo, PK y CK]]."
        }
      ],
      "good": "Llegas a un tiroteo, esperas a que Carabineros asegure la zona y atiendes primero al más grave.",
      "bad": "Reanimas a tu amigo en medio del tiroteo para que siga disparando.",
      "sources": [
        "samuCfg",
        "muerteNota",
        "aprobacion5",
        "newdayReglas"
      ],
      "tags": [
        "samu",
        "ems",
        "ambulancia",
        "medico",
        "paciente",
        "clinica"
      ],
      "related": [
        "pk-ck",
        "heridas",
        "carabineros"
      ],
      "paragraphs": []
    },
    {
      "id": "allanamiento",
      "category": "instituciones",
      "status": "norma",
      "title": "Allanamientos",
      "summary": "Entrar a la fuerza a una propiedad exige una orden aprobada por otro oficial, salvo una urgencia real.",
      "blocks": [
        {
          "t": "note",
          "kind": "mecanica",
          "title": "Qué permite hoy el juego",
          "text": "Solo los **laboratorios de droga** tienen allanamiento: lo pide un carabinero en la puerta, con al menos **3 Carabineros en turno**, indicios suficientes y un dueño conectado. Lo aprueba un **Teniente (grado 8) o superior** en la tablet → Órdenes. Vale 30 minutos; luego ariete, incautación y precinto por 24 horas. Casas y locales no tienen entrada forzada."
        },
        {
          "t": "h",
          "text": "Allanamiento planificado"
        },
        {
          "t": "steps",
          "items": [
            "Reúne al menos dos antecedentes IC distintos (denuncias, vigilancia, testigos, evidencia).",
            "Pide la orden en el juego indicando lugar y qué buscas.",
            "La aprueba **un Teniente o superior distinto de quien investiga**. Si tú tienes ese rango y el juego te la aprueba directo, igual consigue el visto bueno de otro oficial por radio y anótalo.",
            "Si no hay otro oficial disponible, **no se hace**.",
            "Entra solo a ese lugar, busca solo lo relacionado y registra lo incautado."
          ]
        },
        {
          "t": "h",
          "text": "Urgencia"
        },
        {
          "t": "p",
          "text": "Se puede entrar sin orden solo por **peligro inmediato para una vida** o **persecución continua** hasta ese lugar, y siempre que el juego permita la entrada. Después se informa la urgencia al mando."
        },
        {
          "t": "dont",
          "items": [
            "Usar comandos de admin para abrir propiedades.",
            "Entrar por algo que sabes fuera del rol.",
            "Usar un test positivo como permiso para registrarlo todo."
          ]
        },
        {
          "t": "p",
          "text": "Revisión: el oficial que aprobó revisa cómo se ejecutó. Un abuso se reclama como en [[derechos-ciudadano|Si te controla la policía]]. Staff no actúa como juez IC."
        }
      ],
      "good": "Investigaste un laboratorio con denuncias y vigilancia; otro Teniente aprueba la orden y entran solo ahí.",
      "bad": "Eres Teniente, investigas el caso y te apruebas tu propia orden sin consultar a nadie.",
      "sources": [
        "drogas",
        "drogasNota",
        "aprobacion5",
        "mysticosDelictual",
        "paragonSops"
      ],
      "tags": [
        "orden",
        "ariete",
        "precinto",
        "incautar",
        "allanamiento",
        "laboratorio",
        "teniente"
      ],
      "related": [
        "laboratorios",
        "carabineros",
        "pdi"
      ],
      "paragraphs": []
    },
    {
      "id": "corrupcion",
      "category": "instituciones",
      "status": "norma",
      "title": "Corrupción institucional",
      "summary": "Un funcionario corrupto es una historia que staff autoriza antes; sin permiso, es una falta del jugador.",
      "blocks": [
        {
          "t": "p",
          "text": "Corrupción es usar el cargo (Carabineros, PDI o SAMU) para obtener un beneficio indebido o favorecer a alguien."
        },
        {
          "t": "list",
          "items": [
            "Requiere **autorización previa y específica de staff**: quién, qué historia, límites y cómo termina. El rango no da permiso automático.",
            "Sin autorización, se trata como falta OOC del jugador, no como un cargo IC.",
            "Ni con autorización se permite: duplicar dinero u objetos, sacar equipo con admin, filtrar datos reales de jugadores ni saltarse los límites de robos."
          ]
        }
      ],
      "good": "Pides permiso a staff para una historia de un carabinero que cobra coimas y acuerdan cómo termina.",
      "bad": "Vendes armas de la armería a tu banda sin que nadie lo haya autorizado.",
      "sources": [
        "aprobacion5",
        "newdayReglas",
        "paragonSops",
        "mysticosDelictual"
      ],
      "tags": [
        "corrupcion",
        "soborno",
        "coima",
        "policia corrupto"
      ],
      "related": [
        "carabineros",
        "consecuencias-ic-ooc"
      ],
      "paragraphs": []
    },
    {
      "id": "locales",
      "category": "civil",
      "status": "guia",
      "title": "Locales, dueños y empleados",
      "summary": "Caja, permisos y servicio.",
      "paragraphs": [
        "Consulta Discord para adquirir un local. La oficina del negocio reúne las herramientas de empleados, caja y servicio.",
        "El estado público distingue local abierto y personal en servicio. Un dueño conectado no significa que esté atendiendo.",
        "Los permisos dependen de cada negocio. Esta maqueta no muestra dueños ni locales abiertos como información en vivo."
      ],
      "sources": [
        "locales",
        "f10"
      ],
      "tags": [
        "negocio",
        "restaurante",
        "dueno",
        "empleado",
        "abierto",
        "caja"
      ]
    },
    {
      "id": "turnos",
      "category": "civil",
      "status": "guia",
      "title": "Turnos y carrera en el taller",
      "summary": "Información de trabajo y seguimiento del equipo.",
      "paragraphs": [
        "Revisa tu servicio y las herramientas de trabajo desde el panel correspondiente del negocio. Rangos y permisos dependen de cada local.",
        "En el taller, la tablet organiza la carrera y el seguimiento del equipo. Consulta las funciones disponibles según tu rango.",
        "Los acuerdos laborales y reclamos siguen las reglas de negocios y trabajo."
      ],
      "sources": [
        "locales",
        "tablero"
      ],
      "tags": [
        "turno",
        "sueldo",
        "ascenso",
        "hoja de vida",
        "AFK"
      ]
    },
    {
      "id": "normas-negocios",
      "category": "civil",
      "status": "norma",
      "title": "Reglas de negocios y trabajo",
      "summary": "La caja y los acuerdos laborales deben tener respaldo.",
      "paragraphs": [
        "Mantén separados los fondos del negocio y el dinero personal. Los retiros, traspasos y acuerdos laborales deben tener respaldo.",
        "Un despido dentro del rol es distinto de un abuso fuera de personaje. Los reclamos deben aportar antecedentes para revisar qué ocurrió.",
        "La revisión por inactividad puede iniciarse tras 14 días consecutivos sin actividad del negocio. Se debe avisar al dueño y darle 7 días para responder.",
        "La recuperación no es automática: antes de decidir deben revisarse las ausencias justificadas, los movimientos del negocio y la respuesta del dueño."
      ],
      "sources": [
        "locales",
        "f10",
        "aprobacion",
        "parametros"
      ],
      "good": "Guardas respaldo de un retiro autorizado y del acuerdo laboral.",
      "bad": "Retiras caja para uso personal sin respaldo y lo justificas solo porque el panel lo permite."
    },
    {
      "id": "trabajos",
      "category": "civil",
      "status": "guia",
      "title": "Trabajos públicos",
      "summary": "Empieza por el Centro de Empleos.",
      "paragraphs": [
        "Habla con Don Luis en el Centro de Empleos y consulta F10 → Trabajos Públicos para elegir entre las actividades disponibles.",
        "Las guías de pesca, minería y granja te ayudan a orientarte. Los requisitos concretos y las opciones disponibles se consultan dentro del juego.",
        "No se garantizan ingresos por hora: dependen de la actividad y sus condiciones."
      ],
      "sources": [
        "f10",
        "carga",
        "pesca",
        "mineria",
        "granja"
      ],
      "tags": [
        "empleo",
        "don luis",
        "XP",
        "rango",
        "dinero"
      ]
    },
    {
      "id": "pesca",
      "category": "civil",
      "status": "guia",
      "title": "Pesca en Paleto",
      "summary": "Bote, pesca y venta en lonja.",
      "paragraphs": [
        "Empieza en el muelle de Paleto: el capitán ofrece equipo y bote, y la lonja permite vender lo obtenido como pescador.",
        "Zonas y minijuego forman parte de la actividad. Revisa las indicaciones del juego para los requisitos actuales."
      ],
      "sources": [
        "pesca"
      ],
      "tags": [
        "pescador",
        "fisherman",
        "bote",
        "lonja",
        "pez"
      ]
    },
    {
      "id": "mineria",
      "category": "civil",
      "status": "guia",
      "title": "Minería en la cantera",
      "summary": "Capataz, vetas y trituradora.",
      "paragraphs": [
        "El trabajo base se desarrolla en la cantera: picas roca, la trituras y vendes minerales al capataz.",
        "Consulta las instrucciones del trabajo para las herramientas y actividades que tengas disponibles. No se prometen ingresos fijos."
      ],
      "sources": [
        "mineria"
      ],
      "tags": [
        "minero",
        "mina",
        "pico",
        "mineral",
        "geoda"
      ]
    },
    {
      "id": "granja",
      "category": "civil",
      "status": "guia",
      "title": "El fundo de Grapeseed",
      "summary": "Cómo consultar el trabajo agrícola y sus instrucciones.",
      "paragraphs": [
        "Consulta F10 → Trabajos Públicos y el Centro de Empleos para revisar las actividades disponibles.",
        "Si eliges el trabajo agrícola, sigue las instrucciones del punto de trabajo y de cada interacción. Esta guía no garantiza disponibilidad, ganancias ni requisitos que no aparezcan en el juego."
      ],
      "sources": [
        "granja",
        "carga"
      ],
      "tags": [
        "granjero",
        "tractor",
        "cosechar",
        "sembrar",
        "cultivo"
      ]
    },
    {
      "id": "banco-compras",
      "category": "civil",
      "status": "guia",
      "title": "Dinero y compras",
      "summary": "Consulta los importes del juego y sus comprobantes.",
      "paragraphs": [
        "La carga incluye banco, tiendas y caja de locales. Las facturas de taller permiten banco o efectivo según el flujo.",
        "No se fija una economía nueva. Precios de prueba y propuestas antiguas no se convierten en tarifas oficiales."
      ],
      "sources": [
        "carga",
        "taller"
      ],
      "tags": [
        "banco",
        "efectivo",
        "CLP",
        "factura",
        "compra"
      ]
    },
    {
      "id": "propiedades",
      "category": "civil",
      "status": "guia",
      "title": "Casas y propiedades",
      "summary": "Acceso, permisos y disponibilidad de propiedades.",
      "paragraphs": [
        "La interacción de acceso se realiza con E y depende de los permisos de dueño, llaves o banda según el tipo de propiedad.",
        "Consulta disponibilidad, precios y condiciones dentro del juego. La web no muestra propietarios ni propiedades libres en tiempo real."
      ],
      "sources": [
        "propiedades",
        "carga"
      ],
      "tags": [
        "casa",
        "vivienda",
        "arriendo",
        "propiedad"
      ]
    },
    {
      "id": "taller",
      "category": "vehiculos",
      "status": "guia",
      "title": "Talleres y órdenes de trabajo",
      "summary": "Pedidos, instalación y facturación.",
      "paragraphs": [
        "Elige las modificaciones en el elevador y coordina la orden con el mecánico, que trabaja desde su tablet.",
        "Mantenimiento, piezas y mejoras tienen su propio flujo. Una orden instalada requiere gestión del mecánico para completarla.",
        "El cliente recibe factura y puede pagar con banco o efectivo según el flujo. No se usan precios históricos de prueba como tarifas actuales."
      ],
      "sources": [
        "taller"
      ],
      "tags": [
        "mecanico",
        "tuning",
        "tablet",
        "mantenimiento",
        "facturas",
        "reparar"
      ]
    },
    {
      "id": "llaves-garajes",
      "category": "vehiculos",
      "status": "guia",
      "title": "Llaves, garajes y bencina",
      "summary": "Revisa la ayuda y los avisos del vehículo.",
      "paragraphs": [
        "F10 describe L para abrir o cerrar y H para hacer puente cuando no tienes llaves.",
        "La carga incluye llaves, garajes, depósito y bencineras. Sus mecánicas siguen sujetas a reglas de rol y zonas seguras.",
        "Poder intentar un puente no convierte cualquier robo de vehículo en una acción permitida por la normativa."
      ],
      "sources": [
        "f10",
        "carga"
      ],
      "tags": [
        "auto",
        "coche",
        "deposito",
        "bencina",
        "puente",
        "llaves",
        "garaje"
      ]
    },
    {
      "id": "reportes",
      "category": "ayuda",
      "status": "guia",
      "title": "Cómo pedir ayuda o reportar",
      "summary": "Qué incluir para que el staff pueda revisar lo ocurrido.",
      "paragraphs": [
        "Usa /report o la opción Reportar del inventario para pedir ayuda dentro del juego. Para dudas, bugs y apelaciones también tienes soporte en Discord.",
        "Explica qué ocurrió, cuándo, dónde y quiénes participaron, con los identificadores que conozcas. Distingue lo que viste de lo que supones.",
        "Aporta el contexto completo de capturas o grabaciones que tengas, sin alterar pruebas ni difundir datos personales. No se garantiza un resultado o tiempo de atención.",
        "Un conflicto IC se desarrolla dentro del rol. Una infracción OOC se reporta al staff. Un bug describe un fallo del sistema: explica los pasos y qué esperabas que ocurriera.",
        "Si la escena sigue en curso, continúa el rol y reporta después, salvo la posibilidad de detener una escena de violencia gráfica o tortura narrativa y pedir soporte sin represalias OOC. Para apelar, identifica la resolución y explica qué antecedente pides revisar; el plazo general es de 7 días desde la notificación, con excepción justificada si no tuviste posibilidad de acceso."
      ],
      "sources": [
        "f10",
        "discord",
        "ampliacion",
        "parametros"
      ],
      "tags": [
        "staff",
        "admin",
        "reporte",
        "soporte",
        "ayuda",
        "denuncia",
        "evidencia",
        "clip",
        "video",
        "apelacion",
        "bug"
      ]
    },
    {
      "id": "sanciones",
      "category": "ayuda",
      "status": "norma",
      "title": "Sanciones y apelaciones",
      "summary": "Las resoluciones requieren motivo, evidencia y registro.",
      "paragraphs": [
        "Cada resolución debe registrar motivo, evidencia, gravedad, perjuicio y reiteración. Estas pautas requieren revisión del caso; no constituyen sanciones automáticas.",
        "Una primera infracción leve sin perjuicio relevante se aborda con orientación y advertencia registrada.",
        "El metagaming, powergaming o abandono intencional de una escena con perjuicio acreditado se sanciona con 1 día de suspensión; con reiteración acreditada, 3 días; con abuso grave o continuado, 7 días y revisión de continuidad. Una caída de conexión no se sanciona automáticamente como abandono intencional.",
        "Aprovechar duplicaciones o fallos de economía conlleva 7 días de suspensión y retirada de los beneficios acreditados mediante procedimiento autorizado. La reiteración o el daño masivo se revisan individualmente.",
        "Las trampas deliberadas o la difusión de datos personales conllevan suspensión indefinida, sujeta a revisión y apelación. No se sanciona por mera sospecha sin antecedentes.",
        "Puedes apelar por soporte durante los 7 días siguientes a la notificación, identificando la resolución y los antecedentes que pides revisar. Se admite una excepción justificada si no tuviste posibilidad de acceso. Cuando sea posible, revisa una persona distinta de quien resolvió inicialmente; no se garantiza un plazo de respuesta.",
        "Las sanciones OOC son distintas de multas o penas IC y siguen procedimientos separados."
      ],
      "sources": [
        "f10",
        "discord",
        "aprobacion",
        "parametros"
      ],
      "good": "Pides revisión por soporte y aportas antecedentes de la resolución.",
      "bad": "Sustituyes la revisión de un reporte por una multa al personaje."
    },
    {
      "id": "privacidad",
      "category": "convivencia",
      "status": "norma",
      "title": "Privacidad y convivencia",
      "summary": "No difundas datos personales ni hostigues a otras personas.",
      "paragraphs": [
        "Se prohíbe difundir datos personales y hostigar a otros jugadores. El respeto sigue siendo obligatorio dentro y fuera del rol.",
        "Entrega las capturas o grabaciones de un reporte en privado al staff, con su contexto completo. El acceso debe limitarse a quienes revisan el caso.",
        "La evidencia debe eliminarse a los 30 días del cierre del caso, salvo que continúe una revisión activa.",
        "Se prohíben la violencia sexual, el contenido sexual con menores y el hostigamiento discriminatorio.",
        "Ante violencia gráfica o tortura narrativa, puedes detener la escena y pedir soporte sin represalias OOC. La opción predeterminada son escenas sin descripción gráfica."
      ],
      "sources": [
        "f10",
        "discord",
        "aprobacion",
        "parametros"
      ],
      "good": "Entregas antecedentes del reporte por el canal de soporte correspondiente.",
      "bad": "Publicas datos personales de otro jugador para presionarlo por un conflicto de rol."
    },
    {
      "id": "atajos",
      "category": "ayuda",
      "status": "guia",
      "title": "Teclas y comandos útiles",
      "summary": "Los accesos principales están en F10.",
      "paragraphs": [
        "F2: inventario. F5: menú personal. F10: ayuda. ESC: menú de pausa.",
        "Y: radio si tienes el ítem. /radio 50: conexión a esa frecuencia. /postal 8023: ejemplo de ruta a una postal, no ubicación de actividad.",
        "Las asignaciones pueden cambiar por configuración personal. Revisa los ajustes de FiveM."
      ],
      "sources": [
        "f10"
      ],
      "tags": [
        "comando",
        "tecla",
        "inventario",
        "radio",
        "postal",
        "F2",
        "F5",
        "F10"
      ]
    },
    {
      "id": "trampas-y-exploits",
      "category": "convivencia",
      "status": "norma",
      "title": "Trampas, exploits y duplicaciones",
      "summary": "Juega sin ventajas externas y reporta los fallos sin aprovecharlos.",
      "paragraphs": [
        "No uses trampas, herramientas o modificaciones para obtener ventajas injustas sobre otros jugadores o alterar el funcionamiento del servidor.",
        "No aproveches bugs para duplicar dinero o ítems, saltarte restricciones, evitar consecuencias u obtener ventajas. No repitas el fallo ni enseñes a otros a explotarlo.",
        "Si encuentras una duplicación o recibes un beneficio por un fallo, detén la acción y repórtalo por soporte. Explica los pasos que recuerdas y qué recibiste; no distribuyas ni gastes lo obtenido mientras se revisa.",
        "No hace falta reproducir el fallo repetidamente para probarlo. Entrega los antecedentes en privado y sigue las indicaciones del staff."
      ],
      "good": "Dejas de usar una interacción que duplicó un objeto y avisas al staff.",
      "bad": "Repites una compra con bug para llenar el inventario y repartes los objetos.",
      "tags": [
        "bug",
        "duplicar",
        "dupe",
        "cheat",
        "hack",
        "exploits",
        "trampas"
      ],
      "sources": [
        "ampliacion"
      ]
    },
    {
      "id": "separacion-personajes",
      "category": "personaje",
      "status": "norma",
      "title": "Separación entre personajes",
      "summary": "Cada personaje tiene su propia información, bienes e historia.",
      "paragraphs": [
        "No transfieras dinero, bienes o información entre tus propios personajes para beneficiarte o eludir límites. Tampoco uses a otro jugador como intermediario para hacerlo.",
        "Tu segundo personaje no conoce automáticamente las relaciones, investigaciones, ubicaciones ni conflictos del primero. Consigue la información dentro de su propia historia.",
        "No uses otro personaje para volver a una escena de la que saliste, vengarte o ayudar a tu personaje anterior. Esta regla también respeta metagaming y continuidad de escenas."
      ],
      "good": "Tu segundo personaje conoce a una organización mediante su propia historia.",
      "bad": "Pasas dinero a un amigo para que se lo entregue a tu otro personaje.",
      "tags": [
        "multichar",
        "segundo personaje",
        "transferir",
        "herencia",
        "intermediario"
      ],
      "sources": [
        "ampliacion"
      ]
    },
    {
      "id": "intervencion-terceros",
      "category": "delitos",
      "status": "norma",
      "title": "Terceros, refuerzos y zonas seguras",
      "summary": "Ayudar en una escena te convierte en participante.",
      "paragraphs": [
        "Para intervenir en una escena ajena necesitas un motivo y conocimiento obtenidos dentro del rol. No te sumes porque alguien te avisó por Discord, una transmisión o una llamada externa.",
        "Quien actúa como refuerzo, conductor, vigía o apoyo exterior forma parte del grupo. No se permite entrar y salir o reemplazar participantes para eludir los cupos que correspondan.",
        "Una zona segura no puede usarse para evitar las consecuencias de una escena en curso. Su protección tampoco autoriza a otros a cometer delitos dentro: si hay un conflicto, conserva los antecedentes y recurre al staff sin inventar una excepción.",
        "En zonas rojas se mantienen los límites territoriales descritos en su artículo. Esta regla no autoriza disparos desde dentro hacia fuera ni desde fuera hacia dentro."
      ],
      "good": "Te identificas como parte del grupo cuando prestas apoyo como conductor.",
      "bad": "Entras al hospital para eludir una escena y luego vuelves a intervenir como si hubiera terminado.",
      "tags": [
        "terceros",
        "refuerzo",
        "refuerzos",
        "apoyo",
        "hospital",
        "escena",
        "zona segura"
      ],
      "sources": [
        "ampliacion"
      ]
    },
    {
      "id": "glosario",
      "category": "ayuda",
      "status": "guia",
      "title": "Glosario de rol",
      "summary": "Los conceptos de la normativa, explicados en pocas palabras.",
      "paragraphs": [
        "Consulta un concepto y abre su regla completa para conocer el alcance y sus ejemplos.",
        "IC: Lo que tu personaje vive y conoce dentro del mundo de rol.",
        "OOC: Lo que corresponde al jugador fuera del personaje.",
        "Metagaming (MG): Usar dentro del rol información obtenida fuera de él.",
        "Powergaming (PG): Forzar respuestas ajenas o realizar acciones imposibles sin respetar las posibilidades del rol.",
        "RDM: Matar sin una situación de rol que lo justifique, salvo la excepción delimitada de zonas rojas.",
        "VDM: Usar el vehículo como arma sin una justificación de rol.",
        "Valorar la vida: Actuar con miedo y coherencia frente a un peligro real para tu personaje.",
        "Combat log: Abandonar una escena para evitar sus consecuencias. Una caída involuntaria tiene su propio protocolo.",
        "PK: Reaparecer en la clínica: tu personaje sobrevive, pero olvida la escena desde la agresión.",
        "CK: Muerte permanente del personaje. Requiere tu consentimiento y aprobación de staff.",
        "Exploit: Aprovechamiento de un fallo para obtener una ventaja indebida.",
        "Zona segura: Área protegida por la normativa, como hospitales y comisarías. No elimina consecuencias de escenas anteriores.",
        "Zona roja: Área marcada con excepción territorial de PvP. Mantiene las demás reglas.",
        "IC y OOC en reportes: Una consecuencia para el personaje y una sanción de cuenta tienen procedimientos distintos.",
        "Derribado: Fase de heridas en la que todavía te pueden atender. No es muerte.",
        "Parte: Registro policial con cargos, multa y cárcel que se aplica desde la tablet.",
        "En servicio: Funcionario en turno (Carabineros) o con /duty activo (PDI). Es quien cuenta para los mínimos de robos.",
        "Allanamiento planificado: Entrada forzada con orden aprobada por un oficial distinto de quien investiga."
      ],
      "sources": [
        "discord",
        "aprobacion",
        "ampliacion",
        "parametros"
      ],
      "tags": [
        "glosario",
        "diccionario",
        "conceptos",
        "IC",
        "OOC",
        "PK",
        "CK"
      ],
      "related": [
        "ic-ooc",
        "metagaming",
        "powergaming",
        "rdm",
        "vdm",
        "valorar-vida",
        "combat-log",
        "pk-ck",
        "trampas-y-exploits",
        "zona-segura",
        "zona-roja",
        "reportes"
      ]
    },
    {
      "id": "rol-entorno",
      "category": "rol",
      "title": "Entorno y coherencia",
      "summary": "La ciudad existe más allá de los jugadores.",
      "paragraphs": [
        "Interpreta peatones, tránsito, lugares y límites físicos. Tu personaje no tiene poderes imposibles."
      ],
      "good": "Te detienes ante un acceso bloqueado.",
      "bad": "Cruzas una pared porque la animación lo permite.",
      "tags": [
        "RDE",
        "entorno"
      ],
      "sources": [
        "mysticosConceptos",
        "ampliacionOct23"
      ],
      "status": "norma"
    },
    {
      "id": "choques-heridas",
      "category": "vehiculos",
      "title": "Choques y consecuencias",
      "summary": "Un impacto necesita una reacción coherente.",
      "paragraphs": [
        "Interpreta el golpe según su gravedad. Que el vehículo siga funcionando no borra las consecuencias."
      ],
      "good": "Paras y evalúas lesiones tras un impacto fuerte.",
      "bad": "Sigues acelerando tras una colisión grave, sin reacción.",
      "tags": [
        "choque",
        "NRC"
      ],
      "sources": [
        "mysticosConceptos",
        "ampliacionOct23"
      ],
      "related": [
        "heridas",
        "valorar-vida"
      ],
      "status": "norma"
    },
    {
      "id": "reconocimiento-personajes",
      "category": "personaje",
      "title": "Reconocer a otro personaje",
      "summary": "Identifica con antecedentes obtenidos dentro del rol.",
      "paragraphs": [
        "Ropa, acento o animaciones por sí solos no prueban identidad. Respeta el ocultamiento y fundamenta el reconocimiento con antecedentes IC."
      ],
      "good": "Relacionas una conversación previa con otros antecedentes coherentes.",
      "bad": "Reconoces a alguien por su nombre de usuario.",
      "tags": [
        "reconocimiento",
        "máscara"
      ],
      "sources": [
        "mysticosConceptos",
        "ampliacionOct23"
      ],
      "related": [
        "metagaming"
      ],
      "status": "norma"
    },
    {
      "id": "uso-admin",
      "category": "ayuda",
      "title": "Uso imparcial de administración",
      "summary": "Las herramientas de staff sirven para administrar.",
      "paragraphs": [
        "No uses teletransporte, curación, objetos ni información administrativa para favorecer a tu personaje o grupo. Las pruebas se separan de escenas normales y no generan beneficios personales."
      ],
      "good": "Revisas un fallo sin aprovechar el resultado.",
      "bad": "Te curas con comandos para ganar una pelea.",
      "tags": [
        "admin",
        "AA"
      ],
      "sources": [
        "mysticosConceptos",
        "ampliacionOct23"
      ],
      "related": [
        "reportes",
        "trampas-y-exploits"
      ],
      "status": "norma"
    },
    {
      "id": "consecuencias-ic-ooc",
      "category": "ayuda",
      "status": "norma",
      "title": "Personaje o jugador: dos tipos de consecuencia",
      "summary": "Una multa castiga a tu personaje; una sanción de staff, al jugador. Nunca se usan una por otra.",
      "blocks": [
        {
          "t": "table",
          "caption": "Diferencias",
          "head": [
            "",
            "Consecuencia IC",
            "Sanción OOC"
          ],
          "rows": [
            [
              "Ejemplos",
              "Multa, cárcel, decomiso, orden de captura",
              "Advertencia, suspensión, retiro de beneficios"
            ],
            [
              "Quién la aplica",
              "Carabineros con la tablet",
              "Staff"
            ],
            [
              "Por qué",
              "Un delito del personaje",
              "Romper la normativa (MG, PG, exploits…)"
            ],
            [
              "Cómo se revisa",
              "Reclamo IC a un oficial",
              "Apelación por soporte en 7 días"
            ]
          ]
        },
        {
          "t": "list",
          "items": [
            "La policía no castiga faltas OOC con partes, y staff no cobra multas IC.",
            "Un mismo hecho puede tener ambas: un carabinero que abusa de su cargo recibe reclamo IC y reporte OOC por separado.",
            "Ninguna negociación IC puede ofrecer o exigir sanciones OOC."
          ]
        }
      ],
      "good": "Reportas a staff un metagaming y, aparte, reclamas IC el parte que recibiste.",
      "bad": "Un carabinero te multa porque fuiste tóxico en Discord.",
      "sources": [
        "parametros",
        "aprobacion5"
      ],
      "tags": [
        "ic",
        "ooc",
        "sancion",
        "multa",
        "staff"
      ],
      "related": [
        "sanciones",
        "derechos-ciudadano",
        "reportes"
      ],
      "paragraphs": []
    },
    {
      "id": "nombre-personaje",
      "category": "personaje",
      "title": "Nombre e historia del personaje",
      "summary": "Crea una identidad creíble para la ciudad.",
      "paragraphs": [
        "Usa un nombre coherente, sin insultos ni bromas que rompan el contexto. Mantén una historia que justifique cómo actúas."
      ],
      "good": "Construyes una identidad y motivaciones propias.",
      "bad": "Eliges un nombre ofensivo para provocar.",
      "tags": [
        "nombre",
        "identidad"
      ],
      "sources": [
        "newday",
        "ampliacionOct23"
      ],
      "status": "norma"
    },
    {
      "id": "pk-ck",
      "category": "personaje",
      "status": "norma",
      "title": "Derribo, PK y CK",
      "summary": "Quedar derribado, reaparecer y morir para siempre son cosas distintas, con consecuencias distintas.",
      "blocks": [
        {
          "t": "table",
          "caption": "Los estados de tu personaje",
          "head": [
            "Estado",
            "Qué es",
            "Memoria",
            "¿Vuelves a la escena?"
          ],
          "rows": [
            [
              "Derribado",
              "Fase 1 del sistema de heridas (10 min). Te pueden atender.",
              "Recuerdas todo.",
              "Solo si te atienden; sigues herido."
            ],
            [
              "Atendido",
              "SAMU o un médico te estabiliza sin reaparecer.",
              "Recuerdas todo, con secuelas coherentes.",
              "Sí, sin actuar como si nada hubiera pasado."
            ],
            [
              "PK (reapareces)",
              "Mantienes E y reapareces en la clínica. Tu personaje sobrevive.",
              "Olvidas desde el inicio de la agresión hasta reaparecer.",
              "No. Tu participación terminó."
            ],
            [
              "CK",
              "Muerte permanente: el personaje deja de existir.",
              "—",
              "No. Requiere tu consentimiento y aprobación de staff."
            ]
          ]
        },
        {
          "t": "h",
          "text": "Reglas"
        },
        {
          "t": "list",
          "items": [
            "Tras un PK no vuelves por venganza ni usas lo que olvidaste. Conservas tu historia anterior.",
            "En Caribe la única muerte de la historia es el CK. Nadie puede declarar muerto a tu personaje sin él.",
            "Ningún CK es automático: ni por banda, deuda, multas impagas ni condena.",
            "Rematar o herir sin parar para forzar un CK está prohibido.",
            "Lesiones duraderas o tortura narrativa requieren acuerdo OOC previo; sin acuerdo, solo derribas."
          ]
        },
        {
          "t": "note",
          "kind": "ojo",
          "title": "PK no borra el delito",
          "text": "Que la víctima reaparezca no anula el cargo de quien la atacó. Ver Homicidio en el [[criterios-cargos|criterio de cargos]]."
        }
      ],
      "good": "Reapareces en la clínica, no recuerdas quién te disparó y sigues con tu día.",
      "bad": "Reapareces y vuelves al mismo lugar para vengarte.",
      "sources": [
        "muerte",
        "muerteNota",
        "parametros",
        "newdayReglas"
      ],
      "tags": [
        "pk",
        "ck",
        "muerte",
        "derribado",
        "reaparecer",
        "memoria",
        "new life"
      ],
      "related": [
        "heridas",
        "samu",
        "criterios-cargos"
      ],
      "paragraphs": []
    },
    {
      "id": "guardado-evasion",
      "category": "delitos",
      "title": "Guardar para evadir una escena",
      "summary": "Un menú no borra una persecución.",
      "paragraphs": [
        "Durante una escena activa no guardes vehículos, dinero u objetos para impedir sus consecuencias. Tampoco uses entradas a interiores o instancias como escape técnico para volverte inaccesible."
      ],
      "good": "Mantienes accesibles los elementos implicados hasta resolver la escena.",
      "bad": "Guardas el auto perseguido para hacerlo desaparecer.",
      "tags": [
        "combat storing",
        "guardado",
        "garaje",
        "instancia"
      ],
      "sources": [
        "newday",
        "ampliacionOct23"
      ],
      "related": [
        "combat-log",
        "intervencion-terceros"
      ],
      "status": "norma"
    },
    {
      "id": "saqueo-personas",
      "category": "delitos",
      "title": "Saqueo a otros personajes",
      "summary": "El robo debe tener sentido en la historia.",
      "paragraphs": [
        "No vacíes inventarios solo para perjudicar. Conserva comida, agua y objetos personales sin relación con el motivo del robo. No fuerces retiros bancarios, facturas ni recuperación de bienes guardados para aumentar el botín."
      ],
      "good": "Tomas bienes presentes relacionados con el motivo del asalto.",
      "bad": "Obligas a retirar toda la plata del banco.",
      "tags": [
        "saqueo",
        "pocket wiping"
      ],
      "sources": [
        "newday",
        "ampliacionOct23"
      ],
      "related": [
        "rdm",
        "valorar-vida"
      ],
      "status": "norma"
    },
    {
      "id": "historia-antes-mecanica",
      "category": "rol",
      "title": "La historia antes que la ventaja",
      "summary": "Deja espacio para que otros participen.",
      "paragraphs": [
        "Las mecánicas acompañan la escena: no las uses para cerrar toda respuesta ajena o convertir cada encuentro en una carrera por ganar. Desarrolla motivos, diálogo y consecuencias. Tener permiso técnico para hacer algo no justifica hacerlo dentro del rol."
      ],
      "good": "Das espacio a una negociación antes de escalar un conflicto.",
      "bad": "Usas una interacción para anular cualquier respuesta del otro.",
      "tags": [
        "calidad",
        "escena",
        "gunplay"
      ],
      "sources": [
        "onx",
        "ampliacionOct23"
      ],
      "related": [
        "powergaming",
        "rdm"
      ],
      "status": "norma"
    },
    {
      "id": "provocacion-policial",
      "category": "delitos",
      "title": "Provocaciones a la policía",
      "summary": "Los conflictos necesitan un motivo de personaje.",
      "paragraphs": [
        "No atraigas repetidamente a Carabineros o PDI solo para forzar persecuciones o tiroteos sin desarrollo narrativo. Una provocación debe aportar una escena coherente y permitir respuestas distintas al enfrentamiento."
      ],
      "good": "Desarrollas un conflicto con antecedentes y consecuencias.",
      "bad": "Repites provocaciones sin motivo hasta conseguir un tiroteo.",
      "tags": [
        "cop baiting",
        "policía"
      ],
      "sources": [
        "onx",
        "ampliacionOct23"
      ],
      "related": [
        "historia-antes-mecanica",
        "carabineros"
      ],
      "status": "norma"
    },
    {
      "id": "limites-robos",
      "category": "delitos",
      "status": "norma",
      "title": "Participantes y policías por robo",
      "summary": "Cada robo tiene un máximo de delincuentes y un mínimo de funcionarios en servicio; el máximo cuenta a todo el grupo.",
      "blocks": [
        {
          "t": "robos"
        },
        {
          "t": "h",
          "text": "Quién cuenta como delincuente"
        },
        {
          "t": "list",
          "items": [
            "Todos los que ayudan: quienes entran, el **conductor**, los **vigías**, el negociador del grupo y cualquier **apoyo exterior**.",
            "Cuentan aunque no retiren botín. El cupo de botín del juego es otra cosa y no autoriza apoyos extra.",
            "No se reemplaza a un herido, detenido o desconectado para seguir con el cupo completo."
          ]
        },
        {
          "t": "h",
          "text": "Quién cuenta como funcionario"
        },
        {
          "t": "list",
          "items": [
            "Seis robos cuentan **Carabineros en turno** y **PDI en servicio** juntos.",
            "**Megavisión cuenta solo Carabineros en turno.** 3 Carabineros y 1 PDI no alcanzan.",
            "Personas de franco, SAMU o staff no cuentan. El mínimo es para poder empezar: no limita cuántos funcionarios pueden responder."
          ]
        },
        {
          "t": "dont",
          "items": [
            "Pedir a alguien que entre o salga de servicio, o que se desconecte, para habilitar o bloquear un robo.",
            "Usar permisos de admin para empezar un robo que el juego bloquea.",
            "Volver a iniciar el mismo robo para repetir el botín si algo falla: repórtalo."
          ]
        },
        {
          "t": "note",
          "kind": "mecanica",
          "title": "El juego lo comprueba al iniciar",
          "text": "La lista de robos (F5/F10) muestra el mínimo de cada uno. Si la escena ya empezó, que un funcionario se desconecte no la cancela."
        }
      ],
      "good": "Su grupo es de 2 para una caja fuerte: uno abre y el otro maneja. Nadie más los espera afuera.",
      "bad": "Para Megavisión cuentan a 3 Carabineros y 1 PDI como si fueran 4.",
      "sources": [
        "reparto",
        "cajafuerteCfg",
        "megavisionCfg",
        "aprobacion5",
        "parametros",
        "mysticosDelictual"
      ],
      "tags": [
        "limite",
        "cupos",
        "cuantos",
        "cooldown",
        "participantes",
        "policias",
        "megavision",
        "tiendas"
      ],
      "related": [
        "robos-tiendas",
        "robos-comercios",
        "rehenes"
      ],
      "paragraphs": []
    },
    {
      "id": "robos-tiendas",
      "category": "delitos",
      "status": "guia",
      "title": "Tiendas con caja fuerte",
      "summary": "Las 13 tiendas de la ciudad se roban por su caja fuerte: máximo 2 delincuentes y mínimo 2 funcionarios en servicio.",
      "blocks": [
        {
          "t": "p",
          "text": "Se abre con **ganzúa y descifrador**, y suena una alarma al abrir. Antes de ir, revisa en F5/F10 si la tienda está disponible o enfriando."
        },
        {
          "t": "tiendas"
        },
        {
          "t": "note",
          "kind": "ojo",
          "title": "Una tienda abierta no es zona libre",
          "text": "Que la caja esté disponible no permite robar dentro de una zona segura ni sumar un tercer cómplice afuera."
        },
        {
          "t": "p",
          "text": "Cargo si te detienen: [[codigo-penal|Robo a tienda]], $100.000 y 8 minutos. Después de un robo esperas 15 minutos para robar otra caja fuerte."
        }
      ],
      "sources": [
        "cajafuerteCfg",
        "f10",
        "robos",
        "aprobacion5"
      ],
      "tags": [
        "24/7",
        "tienda",
        "ganzua",
        "descifrador",
        "ltd",
        "licoreria",
        "yellow jack",
        "caja fuerte",
        "Paleto Bay",
        "Sandy Shores",
        "Little Seoul",
        "Sandy Shores",
        "Great Ocean Hwy",
        "El Rancho Blvd",
        "San Andreas Ave",
        "Grove Street",
        "Mirror Park",
        "Zancudo",
        "Grand Senora",
        "Strawberry",
        "Vinewood Hills"
      ],
      "related": [
        "limites-robos",
        "lista-robos"
      ],
      "paragraphs": []
    },
    {
      "id": "robos-comercios",
      "category": "delitos",
      "status": "guia",
      "title": "Robos mayores",
      "summary": "Megavisión, joyería, PC Factory, Starken, Ammu-Nation y químicos: cada uno con su mecánica y su cargo.",
      "blocks": [
        {
          "t": "table",
          "caption": "Cómo es cada robo mayor",
          "head": [
            "Robo",
            "Qué haces",
            "Cargo si te detienen"
          ],
          "rows": [
            [
              "Megavisión",
              "Asalto al canal con cuenta regresiva. Solo cuenta Carabineros para el mínimo.",
              "Robo a Megavisión · $175.000 · 12 min"
            ],
            [
              "Joyería",
              "Amenazar al vendedor y vaciar vitrinas.",
              "Robo a joyería · $200.000 · 15 min"
            ],
            [
              "PC Factory",
              "Ganzúa, hackeo de laptop y estantes.",
              "Robo mayor · $175.000 · 12 min"
            ],
            [
              "Starken",
              "Ganzúa, alarma y paquetes aleatorios.",
              "Robo mayor · $175.000 · 12 min"
            ],
            [
              "Ammu-Nation",
              "Vitrinas de armas, munición y chalecos.",
              "Robo mayor · $175.000 · 12 min"
            ],
            [
              "Camión de químicos",
              "Interceptar el cargamento de ácidos.",
              "Robo al camión de químicos · $175.000 · 12 min"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Los límites de personas están en [[limites-robos|Participantes y policías por robo]]. No se publican ganancias: el botín varía y no está garantizado."
        }
      ],
      "sources": [
        "f10",
        "robos",
        "reparto",
        "penalCfg",
        "aprobacion5"
      ],
      "tags": [
        "pcfactory",
        "bodega",
        "armas",
        "paquetes",
        "electronica",
        "megavision",
        "joyeria",
        "quimicos"
      ],
      "related": [
        "limites-robos",
        "codigo-penal"
      ],
      "paragraphs": []
    },
    {
      "id": "lista-robos",
      "category": "delitos",
      "status": "guia",
      "title": "Consulta un robo antes de empezar",
      "summary": "F5 y F10 muestran qué robos están disponibles, en curso o enfriando.",
      "blocks": [
        {
          "t": "p",
          "text": "La lista marca la ubicación y si se cumple el mínimo de funcionarios. Incluye tiendas con caja fuerte, joyería, Ammu-Nation, PC Factory, Starken, químicos y Megavisión."
        },
        {
          "t": "p",
          "text": "Que el juego deje empezar no reemplaza las reglas: el máximo de delincuentes lo cumples tú."
        },
        {
          "t": "p",
          "text": "Compara los siete robos en la [[tabla-robos|tabla de robos]]."
        }
      ],
      "sources": [
        "robos",
        "carga"
      ],
      "tags": [
        "robo",
        "policias",
        "GPS",
        "enfriamiento",
        "f5"
      ],
      "related": [
        "limites-robos"
      ],
      "paragraphs": []
    },
    {
      "id": "busqueda",
      "category": "delitos",
      "status": "guia",
      "title": "Persecuciones y búsqueda",
      "summary": "Escapar te da tiempo, no impunidad.",
      "blocks": [
        {
          "t": "p",
          "text": "Los robos pueden marcarte como buscado (estrellas) y avisan a Carabineros y PDI."
        },
        {
          "t": "p",
          "text": "Si escapas, Carabineros puede emitir una **orden de captura** desde la tablet (Sargento 2° o superior; vence a los 7 días). Te pueden detener en un control posterior por los hechos acreditados."
        },
        {
          "t": "p",
          "text": "Desconectarse o guardar el vehículo para escapar está prohibido: ver [[combat-log|Combat log]] y [[guardado-evasion|Guardar para evadir]]."
        }
      ],
      "sources": [
        "busqueda",
        "penalCfg",
        "paragonSops"
      ],
      "tags": [
        "estrellas",
        "persecucion",
        "escapar",
        "policia",
        "orden de captura"
      ],
      "related": [
        "carabineros",
        "codigo-penal"
      ],
      "paragraphs": []
    },
    {
      "id": "radio-animaciones",
      "category": "rol",
      "title": "Radio y animaciones",
      "summary": "Comunicar no da una ventaja física.",
      "paragraphs": [
        "Usa la radio y las animaciones de forma coherente con la escena. No emplees una postura o animación para evitar daño, ocultar acciones imposibles o sacar ventajas mecánicas."
      ],
      "good": "Coordinas por radio respetando la situación de tu personaje.",
      "bad": "Abusas de la animación de radio para evitar disparos.",
      "tags": [
        "radio",
        "animaciones"
      ],
      "sources": [
        "mysticosRadio",
        "ampliacionOct23"
      ],
      "related": [
        "trampas-y-exploits",
        "heridas"
      ],
      "status": "norma"
    },
    {
      "id": "transmisiones",
      "category": "convivencia",
      "title": "Directos y convivencia",
      "summary": "Transmitir no cambia las reglas del rol.",
      "paragraphs": [
        "Mantén separadas la transmisión y la información de tu personaje. No uses el chat para obtener ventajas ni dirijas a tu audiencia a hostigar a otro jugador. Tramita reportes por soporte con contexto y evidencia, sin exponer datos privados. Ser creador de contenido no da ventajas en una revisión."
      ],
      "good": "Guardas evidencia y reportas por el canal correspondiente.",
      "bad": "Mandas al chat a perseguir o insultar a otro jugador.",
      "tags": [
        "streamer",
        "directo",
        "audiencia"
      ],
      "sources": [
        "mysticosStream",
        "ampliacionOct23"
      ],
      "related": [
        "metagaming",
        "reportes",
        "privacidad"
      ],
      "status": "norma"
    }
  ],
  "glossary": [
    {
      "term": "IC",
      "definition": "Lo que tu personaje vive y conoce dentro del mundo de rol.",
      "article": "ic-ooc"
    },
    {
      "term": "OOC",
      "definition": "Lo que corresponde al jugador fuera del personaje.",
      "article": "ic-ooc"
    },
    {
      "term": "Metagaming (MG)",
      "definition": "Usar dentro del rol información obtenida fuera de él.",
      "article": "metagaming"
    },
    {
      "term": "Powergaming (PG)",
      "definition": "Forzar respuestas ajenas o realizar acciones imposibles sin respetar las posibilidades del rol.",
      "article": "powergaming"
    },
    {
      "term": "RDM",
      "definition": "Matar sin una situación de rol que lo justifique, salvo la excepción delimitada de zonas rojas.",
      "article": "rdm"
    },
    {
      "term": "VDM",
      "definition": "Usar el vehículo como arma sin una justificación de rol.",
      "article": "vdm"
    },
    {
      "term": "Valorar la vida",
      "definition": "Actuar con miedo y coherencia frente a un peligro real para tu personaje.",
      "article": "valorar-vida"
    },
    {
      "term": "Combat log",
      "definition": "Abandonar una escena para evitar sus consecuencias. Una caída involuntaria tiene su propio protocolo.",
      "article": "combat-log"
    },
    {
      "term": "PK",
      "definition": "Reaparecer en la clínica: tu personaje sobrevive, pero olvida la escena desde la agresión.",
      "article": "pk-ck"
    },
    {
      "term": "CK",
      "definition": "Muerte permanente del personaje. Requiere tu consentimiento y aprobación de staff.",
      "article": "pk-ck"
    },
    {
      "term": "Exploit",
      "definition": "Aprovechamiento de un fallo para obtener una ventaja indebida.",
      "article": "trampas-y-exploits"
    },
    {
      "term": "Zona segura",
      "definition": "Área protegida por la normativa, como hospitales y comisarías. No elimina consecuencias de escenas anteriores.",
      "article": "zona-segura"
    },
    {
      "term": "Zona roja",
      "definition": "Área marcada con excepción territorial de PvP. Mantiene las demás reglas.",
      "article": "zona-roja"
    },
    {
      "term": "IC y OOC en reportes",
      "definition": "Una consecuencia para el personaje y una sanción de cuenta tienen procedimientos distintos.",
      "article": "reportes"
    },
    {
      "term": "Derribado",
      "definition": "Fase de heridas en la que todavía te pueden atender. No es muerte.",
      "article": "pk-ck"
    },
    {
      "term": "Parte",
      "definition": "Registro policial con cargos, multa y cárcel que se aplica desde la tablet.",
      "article": "codigo-penal"
    },
    {
      "term": "En servicio",
      "definition": "Funcionario en turno (Carabineros) o con /duty activo (PDI). Es quien cuenta para los mínimos de robos.",
      "article": "limites-robos"
    },
    {
      "term": "Allanamiento planificado",
      "definition": "Entrada forzada con orden aprobada por un oficial distinto de quien investiga.",
      "article": "allanamiento"
    }
  ],
  "history": [
    {
      "date": "23 oct 2026",
      "title": "Código penal, instituciones y robos completos",
      "text": "Publicados los 28 cargos con su cálculo, los reglamentos de Carabineros, PDI y SAMU, allanamientos, corrupción y tus derechos ante un control. Tiendas con caja fuerte (13 locales) y Megavisión entran a la tabla de robos. Derribo, PK y CK quedan diferenciados."
    },
    {
      "date": "23 oct 2026",
      "title": "Tiempos más cortos",
      "text": "Cárcel con tope de 30 minutos y penas reducidas a un tercio; máximo 3 cargos por parte. Enfriamiento personal de robos entre 15 y 30 minutos, joyería, PC Factory y Starken reabren a los 40 minutos y el camión de químicos aparece cada 60–75 minutos."
    },
    {
      "date": "23 oct 2026",
      "title": "Lectura, práctica y escenas más claras",
      "text": "Tamaño de lectura ajustable, tabla comparativa y práctica con situaciones. Nuevos temas de entorno, personajes, convivencia y continuidad de escenas."
    },
    {
      "date": "23 oct 2026",
      "title": "Límites de escenas y continuidad",
      "text": "Precisados los recuerdos tras reaparecer, los límites territoriales, los participantes en robos y conflictos, la revisión de negocios y las sanciones y apelaciones. Rehenes: máximo 2 por escena y 1 hora de retención desde la captura."
    },
    {
      "date": "23 oct 2026",
      "title": "Normativa y guías reorganizadas",
      "text": "Lectura separada por reglas y guías. Añadidos juego limpio, separación entre personajes, intervención de terceros, orientación de reportes y glosario."
    },
    {
      "date": "23 oct 2026",
      "title": "Continuidad y convivencia",
      "text": "Actualizadas zonas rojas, continuidad del personaje, rehenes, participantes, negocios, organizaciones, instituciones y apelaciones."
    }
  ],
  "robos": [
    {
      "id": "cajafuerte",
      "name": "Tiendas (caja fuerte)",
      "detail": "13 locales: 24/7, LTD, licorerías, La Tienda y Yellow Jack",
      "max": 2,
      "police": 2,
      "cuenta": "Carabineros + PDI",
      "pdi": true,
      "enfriamiento": 15,
      "cargo": "robo_tienda"
    },
    {
      "id": "ammu",
      "name": "Ammu-Nation",
      "detail": "Vitrinas de armas, munición y chalecos",
      "max": 2,
      "police": 2,
      "cuenta": "Carabineros + PDI",
      "pdi": true,
      "enfriamiento": 15,
      "cargo": "robo_mayor"
    },
    {
      "id": "quimicos",
      "name": "Camión de químicos",
      "detail": "Ácidos para laboratorios; aparece cada 60–75 min",
      "max": 3,
      "police": 3,
      "cuenta": "Carabineros + PDI",
      "pdi": true,
      "enfriamiento": 20,
      "cargo": "robo_quimicos"
    },
    {
      "id": "joyeria",
      "name": "Joyería",
      "detail": "Vangelico: vendedor y vitrinas",
      "max": 4,
      "police": 4,
      "cuenta": "Carabineros + PDI",
      "pdi": true,
      "enfriamiento": 30,
      "cargo": "robo_joyeria"
    },
    {
      "id": "pcfactory",
      "name": "PC Factory",
      "detail": "Puerta, hackeo y estantes de electrónica",
      "max": 4,
      "police": 4,
      "cuenta": "Carabineros + PDI",
      "pdi": true,
      "enfriamiento": 30,
      "cargo": "robo_mayor"
    },
    {
      "id": "starken",
      "name": "Starken",
      "detail": "Bodega con paquetes",
      "max": 4,
      "police": 4,
      "cuenta": "Carabineros + PDI",
      "pdi": true,
      "enfriamiento": 30,
      "cargo": "robo_mayor"
    },
    {
      "id": "megavision",
      "name": "Megavisión",
      "detail": "Canal de televisión",
      "max": 4,
      "police": 4,
      "cuenta": "Solo Carabineros",
      "pdi": false,
      "enfriamiento": 30,
      "cargo": "robo_megavision"
    }
  ],
  "tiendas": [
    [
      "24/7",
      "Paleto Bay"
    ],
    [
      "24/7",
      "Sandy Shores"
    ],
    [
      "24/7",
      "Little Seoul"
    ],
    [
      "Yellow Jack",
      "Sandy Shores"
    ],
    [
      "Rob's Liquor",
      "Great Ocean Hwy"
    ],
    [
      "Rob's Liquor",
      "El Rancho Blvd"
    ],
    [
      "Rob's Liquor",
      "San Andreas Ave"
    ],
    [
      "LTD Gasoline",
      "Grove Street"
    ],
    [
      "LTD Gasoline",
      "Mirror Park"
    ],
    [
      "La Tienda",
      "Zancudo"
    ],
    [
      "La Tienda",
      "Grand Senora"
    ],
    [
      "La Tienda",
      "Strawberry"
    ],
    [
      "La Tienda",
      "Vinewood Hills"
    ]
  ],
  "penal": [
    {
      "categoria": "Tránsito",
      "cargos": [
        [
          "mal_estacionado",
          "Mal estacionado",
          10000,
          0,
          "Vehículo que obstruye o está en un lugar prohibido identificable."
        ],
        [
          "velocidad",
          "Exceso de velocidad",
          20000,
          0,
          "Medición con radar u observación concreta frente a un límite señalado."
        ],
        [
          "sin_licencia",
          "Conducir sin licencia",
          30000,
          0,
          "Conducir sin la licencia que corresponde, comprobada en el registro."
        ],
        [
          "temeraria",
          "Conducción temeraria",
          45000,
          2,
          "Maniobra que crea un peligro concreto. Un roce por desincronización no basta."
        ],
        [
          "alcohol",
          "Manejar bajo alcohol o drogas",
          60000,
          4,
          "Conducir con alcotest o test positivo, más observaciones anotadas."
        ],
        [
          "fuga_control",
          "Darse a la fuga de un control",
          75000,
          5,
          "Evadir un control comunicado con claridad (luces, sirena, orden verbal)."
        ]
      ]
    },
    {
      "categoria": "Orden público",
      "cargos": [
        [
          "desorden",
          "Desórdenes o ruidos molestos",
          15000,
          0,
          "Perturbación concreta y documentada. Estar presente no es desorden."
        ],
        [
          "identificarse",
          "Negarse a identificarse",
          20000,
          2,
          "Negarse a un control fundado tras una petición clara y una oportunidad real de responder."
        ],
        [
          "amenazas_func",
          "Insultos o amenazas a un funcionario",
          35000,
          3,
          "Amenaza o insulto IC dirigido a un funcionario. Reclamar o guardar silencio no lo es."
        ],
        [
          "resistencia",
          "Resistirse a la detención",
          50000,
          5,
          "Oposición física activa a una detención fundada. Pedir explicaciones no es resistencia."
        ]
      ]
    },
    {
      "categoria": "Armas",
      "cargos": [
        [
          "porte_ilegal",
          "Portar arma sin licencia",
          100000,
          6,
          "Arma que requiere licencia sin licencia vigente."
        ],
        [
          "disparos",
          "Disparar en la vía pública",
          90000,
          5,
          "Disparo injustificado acreditado. Se valora la defensa de la vida."
        ],
        [
          "arma_robada",
          "Arma con serie borrada o robada",
          125000,
          8,
          "Serie alterada o evidencia de origen ilícito, no solo la falta de registro."
        ]
      ]
    },
    {
      "categoria": "Drogas",
      "cargos": [
        [
          "droga_menor",
          "Consumo o porte menor",
          25000,
          2,
          "Consumo o porte sin evidencia de venta."
        ],
        [
          "microtrafico",
          "Venta de drogas (microtráfico)",
          100000,
          8,
          "Venta observada o evidencia concreta de distribución individual."
        ],
        [
          "trafico",
          "Tráfico (gran cantidad o laboratorio)",
          200000,
          15,
          "Producción en laboratorio o distribución organizada acreditada. Estar cerca de un laboratorio no basta."
        ]
      ]
    },
    {
      "categoria": "Propiedad",
      "cargos": [
        [
          "robo_vehiculo",
          "Robo de vehículo",
          80000,
          6,
          "Sustracción de un vehículo ajeno sin permiso del dueño."
        ],
        [
          "robo_tienda",
          "Robo a tienda (24/7, caja fuerte)",
          100000,
          8,
          "Robo de cualquiera de las 13 tiendas con caja fuerte."
        ],
        [
          "robo_mayor",
          "Robo a Ammu-Nation, Starken o PC Factory",
          175000,
          12,
          "Solo esas tres modalidades."
        ],
        [
          "robo_megavision",
          "Robo a Megavisión",
          175000,
          12,
          "Participación en el robo al canal, incluidos apoyos."
        ],
        [
          "robo_quimicos",
          "Robo al camión de químicos",
          175000,
          12,
          "Participación en el robo del cargamento. Tener un químico no prueba el robo."
        ],
        [
          "robo_joyeria",
          "Robo a joyería",
          200000,
          15,
          "Participación en el robo a la joyería."
        ],
        [
          "patente_falsa",
          "Patente falsa",
          60000,
          3,
          "Uso consciente de una patente que no corresponde al vehículo."
        ]
      ]
    },
    {
      "categoria": "Personas",
      "cargos": [
        [
          "lesiones",
          "Lesiones",
          100000,
          6,
          "Daño corporal sin medio letal o sin intención acreditada de matar."
        ],
        [
          "agresion_func",
          "Agresión a un carabinero",
          150000,
          10,
          "Ataque a un carabinero en servicio. Para PDI o SAMU se usa Lesiones."
        ],
        [
          "secuestro",
          "Secuestro",
          200000,
          15,
          "Privar de libertad a alguien (incluye rehenes). Una custodia policial fundada no es secuestro."
        ],
        [
          "homicidio",
          "Homicidio",
          300000,
          20,
          "Derribar a alguien con medio letal e intención acreditada, sea reanimado o reaparezca."
        ],
        [
          "homicidio_func",
          "Homicidio de un carabinero",
          350000,
          25,
          "Lo mismo, contra un carabinero en servicio. No se acumula con Homicidio."
        ]
      ]
    }
  ],
  "aliases": {
    "carabineros-pdi": "carabineros",
    "salud": "samu"
  }
};

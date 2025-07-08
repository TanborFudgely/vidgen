const configuracionApp = {
  tonoPorDefecto: "Inspirador",
  idiomaPorDefecto: "Español neutro",
  estilosVisuales: ["Realista", "Anime", "Pixar", "Disney", "Abstracto", "CGI"],
  narraciones: [
    "Voz en off + texto estático",
    "Solo música de fondo",
    "Narrador con acento",
    "Sin audio"
  ],
  idiomas: ["Español neutro", "Inglés americano", "Inglés británico", "Portugués", "Francés"],
  duraciones: ["1 minuto", "3 minutos", "5 minutos", "10 minutos"],
  tonosNarrativos: ["Divulgativo", "Técnico", "Poético", "Inspirador", "Educativo"],
  modelosIA: [
    { nombre: "Claude 3.5 Sonnet", id: "claude-3-5-sonnet" },
    { nombre: "Gemini Pro 1.5", id: "gemini-pro-1.5" },
    { nombre: "GPT-4o", id: "gpt-4o" }
  ]
};

function obtenerOpcionesIA() {
  return configuracionApp.modelosIA.map(m => m.nombre);
}

function obtenerEstilos() {
  return configuracionApp.estilosVisuales;
}

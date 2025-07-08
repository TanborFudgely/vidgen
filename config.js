const configuracionNarrativa = {
  tonoPorDefecto: "Inspirador",
  idiomaPorDefecto: "Español neutro",
  estilosDisponibles: ["Realista", "Anime", "Pixar", "Disney", "Abstracto", "CGI"],
  narracionesDisponibles: [
    "Voz en off + texto estático",
    "Solo música de fondo",
    "Narrador con acento",
    "Sin audio"
  ],
  duraciones: ["1 minuto", "3 minutos", "5 minutos", "10 minutos"],
  tiposDeGuion: ["Divulgativo", "Técnico", "Poético", "Inspirador", "Educativo"]
};

function obtenerEstilosDisponibles() {
  return configuracionNarrativa.estilosDisponibles;
}

function obtenerNarracionPorDefecto() {
  return configuracionNarrativa.narracionesDisponibles[0];
}

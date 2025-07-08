function generarEscenas(tema, estilo, duracion) {
  const minutos = parseInt(duracion.split(" ")[0]);
  const totalEscenas = minutos * 2;

  let escenas = [];

  for (let i = 1; i <= totalEscenas; i++) {
    escenas.push({
      escena: i,
      descripcion: `Escena ${i}: Visual ${estilo} explorando "${tema}" con transición suave.`,
      duracion: `${(60 / totalEscenas).toFixed(0)} segundos`,
      elementos: ["Texto en pantalla", "Música de fondo", "Narración"]
    });
  }

  return escenas;
}

function mostrarEscenas() {
  const tema = document.getElementById('tema').value;
  const estilo = document.getElementById('estilo').value;
  const duracion = document.getElementById('duracion').value;
  const escenasGeneradas = generarEscenas(tema, estilo, duracion);

  let html = "<h3>🎬 Estructura de Escenas</h3><ul>";
  escenasGeneradas.forEach(e => {
    html += `<li><strong>${e.escena}</strong> (${e.duracion}): ${e.descripcion}</li>`;
  });
  html += "</ul>";

  document.getElementById('editorGuion').innerHTML = html;
}

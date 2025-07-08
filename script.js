function generarResumen() {
  const tema = document.getElementById('tema').value;
  const estilo = document.getElementById('estilo').value;
  const narracion = document.getElementById('narracion').value;
  const idioma = document.getElementById('idioma').value;
  const duracion = document.getElementById('duracion').value;
  const tono = document.getElementById('tono').value;
  const archivos = document.getElementById('archivoReferencia').files;

  let resumen = `🎬 PROYECTO DE VIDEO IA\n\n`;
  resumen += `🧠 Tema: ${tema}\n`;
  resumen += `🎨 Estilo visual: ${estilo}\n`;
  resumen += `🎙️ Narración: ${narracion}\n`;
  resumen += `🌐 Idioma: ${idioma}\n`;
  resumen += `⏱️ Duración estimada: ${duracion}\n`;
  resumen += `🧠 Tono narrativo: ${tono}\n`;

  if (archivos.length > 0) {
    resumen += `📁 Archivos adjuntos: ${archivos.length} archivo(s)\n`;
    for (let i = 0; i < archivos.length; i++) {
      resumen += `   - ${archivos[i].name}\n`;
    }
    resumen += `ℹ️ Tus archivos serán considerados como fuente complementaria.`;
  } else {
    resumen += `📁 No se adjuntaron archivos de referencia.`;
  }

  document.getElementById('resultado').innerText = resumen;
}


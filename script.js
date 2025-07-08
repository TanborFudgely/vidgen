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

function generarGuion() {
  const tema = document.getElementById('tema').value;
  const estilo = document.getElementById('estilo').value;
  const narracion = document.getElementById('narracion').value;
  const idioma = document.getElementById('idioma').value;
  const duracion = document.getElementById('duracion').value;
  const tono = document.getElementById('tono').value;
  const archivos = document.getElementById('archivoReferencia').files;

  let guion = `📝 GUIÓN NARRATIVO AUTOMÁTICO\n\n`;
  guion += `🎬 Título: ${tema}\n`;
  guion += `🎨 Estilo visual: ${estilo} | 🧠 Tono: ${tono}\n`;
  guion += `🎙️ Narración: ${narracion} | 🌐 Idioma: ${idioma}\n`;
  guion += `⏱️ Duración estimada: ${duracion}\n\n`;

  guion += `🔹 Apertura:\n`;
  guion += `Introducción al universo de "${tema}" con estilo ${estilo.toLowerCase()} y tono ${tono.toLowerCase()}.\n\n`;

  guion += `🔹 Desarrollo:\n`;
  guion += `Escenas narradas con ritmo ${duracion}, acompañadas por ${narracion.toLowerCase()} en ${idioma}.\n\n`;

  guion += `🔹 Archivos de referencia:\n`;
  if (archivos.length > 0) {
    guion += `Usando ${archivos.length} documento(s) como fuente adicional:\n`;
    for (let i = 0; i < archivos.length; i++) {
      guion += `   - ${archivos[i].name}\n`;
    }
    guion += `Serán interpretados junto con fuentes generales. Si hay contradicción, se prioriza tu contenido.\n\n`;
  } else {
    guion += `No se adjuntaron documentos. Se usarán fuentes generales y los parámetros seleccionados.\n\n`;
  }

  guion += `🔹 Cierre:\n`;
  guion += `Conclusión visualmente impactante que resume el mensaje principal y deja una reflexión sobre "${tema}".\n\n`;

  guion += `✅ Puedes revisar este guion antes de aprobarlo para generación automática del video.`;

  document.getElementById('guionNarrativo').innerText = guion;
}

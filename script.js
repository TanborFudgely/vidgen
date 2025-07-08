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
  guion += `Una introducción envolvente sitúa al espectador dentro del universo de "${tema}", con visuales ${estilo.toLowerCase()} y tono ${tono.toLowerCase()}.\n\n`;

  guion += `🔹 Desarrollo:\n`;
  guion += `Secuencia de escenas que exploran el tema en profundidad, utilizando elementos narrativos adaptados al estilo "${estilo}" con ${narracion.toLowerCase()} en ${idioma}.\n\n`;

  guion += `🔹 Archivos de referencia:\n`;
  if (archivos.length > 0) {
    guion += `Se utilizarán como fuentes complementarias ${archivos.length} documento(s):\n`;
    for (let i = 0; i < archivos.length; i++) {
      guion += `   - ${archivos[i].name}\n`;
    }
    guion += `Serán consultados junto con fuentes adicionales. Si hay contradicción, se priorizará tu contenido.\n\n`;
  } else {
    guion += `No se adjuntaron archivos personalizados. El guion se basará en fuentes generales y tus parámetros.\n\n`;
  }

  guion += `🔹 Cierre:\n`;
  guion += `Una conclusión visualmente impactante que resume el mensaje principal del video y deja al espectador reflexionando sobre "${tema}".\n\n`;

  guion += `✅ Puedes revisar este guion antes de aprobarlo para la generación automática del video.`;

  document.getElementById('guionNarrativo').innerText = guion;
}

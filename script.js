function generarResumen() {
  const tema = document.getElementById('tema').value;
  const estilo = document.getElementById('estilo').value;
  const narracion = document.getElementById('narracion').value;
  const idioma = document.getElementById('idioma').value;
  const duracion = document.getElementById('duracion').value;
  const tono = document.getElementById('tono').value;
  const archivos = document.getElementById('archivoReferencia').files;

  if (!tema.trim()) {
    alert("Por favor, completa el tema del video antes de continuar.");
    return;
  }

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
  } else {
    resumen += `📁 No se adjuntaron archivos de referencia.`;
  }

  document.getElementById('resultado').innerText = resumen;
}

function exportarGuion() {
  const contenido = document.getElementById('guionNarrativo').innerText;
  if (!contenido.trim()) {
    alert("Primero debes generar el guion antes de exportarlo.");
    return;
  }

  const blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(blob);
  enlace.download = "guion-narrativo.txt";
  enlace.click();
}

function editarGuion() {
  const guionTexto = document.getElementById('guionNarrativo').innerText;
  if (!guionTexto.includes("GUIÓN")) {
    alert("Primero debes seleccionar un guion antes de editar.");
    return;
  }

  const partes = guionTexto.split(/\n\n|🔹 /).filter(p => p.trim());
  let editorHTML = `<h3>✏️ Edición por bloques</h3>`;
  partes.forEach((bloque, index) => {
    editorHTML += `
      <div class="section">
        <label>Bloque ${index + 1}</label>
        <textarea id="bloque_${index}" rows="5">${bloque}</textarea>
      </div>
    `;
  });

  editorHTML += `<button onclick="guardarEdicion()">💾 Guardar cambios</button>`;
  document.getElementById('editorGuion').innerHTML = editorHTML;
}

function guardarEdicion() {
  const bloques = document.querySelectorAll('[id^="bloque_"]');
  let nuevoGuion = '📝 GUIÓN NARRATIVO PERSONALIZADO\n\n';
  bloques.forEach(b => {
    nuevoGuion += b.value.trim() + '\n\n';
  });

  document.getElementById('guionNarrativo').innerText = nuevoGuion;
  document.getElementById('editorGuion').innerHTML = '✅ Cambios guardados.';
}

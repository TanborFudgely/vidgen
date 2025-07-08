function editarGuion() {
  const guionTexto = document.getElementById('guionNarrativo').innerText;
  if (!guionTexto.includes('📝 GUIÓN NARRATIVO AUTOMÁTICO')) {
    alert('Genera primero el guion narrativo antes de editar.');
    return;
  }

  const secciones = ['🔹 Apertura:', '🔹 Desarrollo:', '🔹 Archivos de referencia:', '🔹 Cierre:'];
  let bloques = {};
  secciones.forEach((seccion, i) => {
    const inicio = guionTexto.indexOf(seccion);
    const fin = i < secciones.length - 1
      ? guionTexto.indexOf(secciones[i + 1])
      : guionTexto.length;
    bloques[seccion] = guionTexto.slice(inicio, fin).trim();
  });

  let editorHTML = `<h3>✏️ Edición por bloques</h3>`;
  Object.keys(bloques).forEach((key, index) => {
    editorHTML += `
      <div class="section">
        <label>${key}</label>
        <textarea id="bloque_${index}" rows="5">${bloques[key]}</textarea>
      </div>
    `;
  });

  editorHTML += `
    <button onclick="guardarEdicion()">💾 Guardar cambios</button>
  `;

  document.getElementById('editorGuion').innerHTML = editorHTML;
}

function guardarEdicion() {
  const bloques = document.querySelectorAll('[id^="bloque_"]');
  let nuevoGuion = '📝 GUIÓN NARRATIVO AUTOMÁTICO\n\n';

  bloques.forEach(b => {
    nuevoGuion += b.value + '\n\n';
  });

  document.getElementById('guionNarrativo').innerText = nuevoGuion;
  document.getElementById('editorGuion').innerHTML = '✅ Cambios guardados.';
}

function editarGuionDesdeTexto(textoIA) {
  if (!textoIA || !textoIA.includes("GUIÓN")) {
    alert("El texto no parece ser un guion válido.");
    return;
  }

  const partes = textoIA.split(/\n\n|🔹 /).filter(p => p.trim());
  let editorHTML = `<h3>✏️ Edición por bloques desde IA seleccionada</h3>`;
  partes.forEach((bloque, index) => {
    editorHTML += `
      <div class="section">
        <label>Bloque ${index + 1}</label>
        <textarea id="bloqueIA_${index}" rows="5">${bloque}</textarea>
      </div>
    `;
  });

  editorHTML += `<button onclick="guardarGuionSeleccionado()">💾 Guardar este guion como principal</button>`;
  document.getElementById('editorGuion').innerHTML = editorHTML;
}

function guardarGuionSeleccionado() {
  const bloques = document.querySelectorAll('[id^="bloqueIA_"]');
  let nuevoGuion = '📝 GUIÓN NARRATIVO PERSONALIZADO\n\n';
  bloques.forEach(b => {
    nuevoGuion += b.value.trim() + '\n\n';
  });

  document.getElementById('guionNarrativo').innerText = nuevoGuion;
  document.getElementById('editorGuion').innerHTML = '✅ Guion seleccionado y editado guardado.';
}

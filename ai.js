async function generarGuionesMultiples() {
  const tema = document.getElementById('tema').value;
  const estilo = document.getElementById('estilo').value;
  const narracion = document.getElementById('narracion').value;
  const idioma = document.getElementById('idioma').value;
  const duracion = document.getElementById('duracion').value;
  const tono = document.getElementById('tono').value;
  const seleccionadas = document.querySelectorAll('#selectorIA input:checked');

  if (seleccionadas.length === 0) {
    alert("Selecciona al menos una IA para generar el guion.");
    return;
  }

  const prompt = `Eres un generador narrativo profesional. Redacta un guion para un video titulado "${tema}" con estilo visual ${estilo}, narración "${narracion}", idioma "${idioma}", tono ${tono}, y duración ${duracion}. Divide en bloques: Apertura, Desarrollo y Cierre.`;

  seleccionadas.forEach(async checkbox => {
    const modelo = checkbox.value;
    const idSalida = modelo.includes("claude") ? "guionClaude"
                    : modelo.includes("gemini") ? "guionGemini"
                    : modelo.includes("gpt") ? "guionGPT"
                    : "guionExtra";

    document.getElementById(idSalida).innerText = `⏳ Generando con ${modelo}...`;

    try {
      const respuesta = await puter.ai.chat(prompt, { model: modelo });
      const guionFinal = `📝 GUIÓN IA (${modelo})\n\n${respuesta.trim()}`;

      // Mostrar en el contenedor respectivo
      document.getElementById(idSalida).innerHTML =
        `<pre>${guionFinal}</pre>
         <button onclick="usarEsteGuion(\`${escapeHTML(guionFinal)}\`)">📝 Usar y editar este guion</button>`;
    } catch (error) {
      document.getElementById(idSalida).innerText = `❌ Error al generar con ${modelo}`;
    }
  });
}

function usarEsteGuion(textoGuion) {
  document.getElementById('guionNarrativo').innerText = textoGuion;
  editarGuionDesdeTexto(textoGuion);
}

function escapeHTML(text) {
  return text.replace(/`/g, "\\`").replace(/\\/g, "\\\\").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const URL_DE_RENDER = "https://hostal-milagro.onrender.com";

const boton = document.getElementById('botonCargar');
const textoEstado = document.getElementById('estado');
const contenedorDatos = document.getElementById('datos');

boton.addEventListener('click', async () => {
    textoEstado.innerText = "⏳ Sincronizando con Hostal del Milagro...";
    textoEstado.style.color = "#e67e22"; // Color naranja mientras carga
    
    try {
        const respuesta = await fetch(URL_DE_RENDER);
        const data = await respuesta.json();
        
        // Mostrar los datos con estilo
        textoEstado.innerHTML = '<span class="success-badge">✅ ¡Conexión exitosa!</span>';
        contenedorDatos.style.display = 'block';
        contenedorDatos.innerText = JSON.stringify(data, null, 2);
        
    } catch (error) {
        textoEstado.innerText = "❌ Error de conexión. Revisa Render.";
        textoEstado.style.color = "red";
    }
});

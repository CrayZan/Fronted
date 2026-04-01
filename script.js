// Asegúrate de que esta URL es la de tu servicio en Render
const URL_DE_RENDER = "https://hostal-milagro.onrender.com/datos"; 

const boton = document.getElementById('botonCargar');
const textoEstado = document.getElementById('estado');
const contenedorDatos = document.getElementById('datos');

boton.addEventListener('click', async () => {
    // 1. Cambiar estado visual al hacer clic
    textoEstado.innerText = "⏳ Conectando con el servidor de Hostal Milagro...";
    textoEstado.style.color = "#e67e22";
    contenedorDatos.style.display = 'none';

    try {
        // 2. Realizar la petición al Backend
        const respuesta = await fetch(URL_DE_RENDER);
        
        if (!respuesta.ok) {
            throw new Error("Error en la respuesta");
        }

        const data = await respuesta.json();
        
        // 3. Éxito: Mostrar el mensaje verde con el JSON
        textoEstado.innerHTML = '<span style="color: #27ae60; font-weight: bold;">✅ ¡Conexión exitosa con el Hostal!</span>';
        contenedorDatos.style.display = 'block';
        contenedorDatos.innerText = JSON.stringify(data, null, 2);
        
    } catch (error) {
        // 4. Error: Mostrar mensaje de fallo
        console.error("Error de conexión:", error);
        textoEstado.innerText = "❌ Error de conexión. Revisa si Render está activo.";
        textoEstado.style.color = "#c0392b";
    }
});

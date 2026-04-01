// Configuración de la conexión con Render
const URL_DE_RENDER = "https://hostal-milagro.onrender.com/datos";

// Seleccionamos los elementos de la página
const boton = document.getElementById('botonCargar');
const textoEstado = document.getElementById('estado');
const contenedorDatos = document.getElementById('datos');

// Función que se activa al hacer clic en el botón
if (boton) {
    boton.addEventListener('click', async () => {
        textoEstado.innerText = "⏳ Conectando con el servidor de Hostal Milagro...";
        textoEstado.style.color = "blue";

        try {
            // Intentamos pedirle datos a tu backend en Render
            const respuesta = await fetch(URL_DE_RENDER);
            
            if (!respuesta.ok) {
                throw new Error("El servidor respondió con un error");
            }

            const info = await respuesta.json();
            
            // Si todo sale bien, mostramos los datos en pantalla
            contenedorDatos.innerHTML = `<pre style="background:#e8f5e9; padding:10px; border-radius:5px;">${JSON.stringify(info, null, 2)}</pre>`;
            textoEstado.innerText = "✅ ¡Conexión exitosa con el Hostal!";
            textoEstado.style.color = "green";

        } catch (error) {
            // Si algo falla (por ejemplo, el backend está dormido)
            console.error("Error de conexión:", error);
            textoEstado.innerText = "❌ Error: No se pudo obtener respuesta de Render. Revisa si el backend está activo.";
            textoEstado.style.color = "red";
        }
    });
}

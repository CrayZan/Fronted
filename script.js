const URL_DE_RENDER = "https://hostal-milagro.onrender.com/datos";

const boton = document.getElementById('botonCargar');
const textoEstado = document.getElementById('estado');
const contenedorDatos = document.getElementById('datos');
const puntoEstado = document.querySelector('.status-dot');

if (boton) {
    boton.addEventListener('click', async () => {
        // Estética de carga
        textoEstado.innerText = "Conectando...";
        puntoEstado.style.background = "#eab308"; // Amarillo (espera)
        
        try {
            const respuesta = await fetch(URL_DE_RENDER);
            
            if (!respuesta.ok) throw new Error("Error en servidor");

            const info = await respuesta.json();
            
            // Éxito
            puntoEstado.style.background = "#22c55e"; // Verde (conectado)
            textoEstado.innerText = "Conexión Exitosa";
            
            // Mostrar datos bonitos
            contenedorDatos.innerHTML = `
                <div style="color: #f8fafc; margin-bottom: 10px;">> Respuesta recibida:</div>
                <pre>${JSON.stringify(info, null, 2)}</pre>
            `;

        } catch (error) {
            // Error
            puntoEstado.style.background = "#ef4444"; // Rojo (error)
            textoEstado.innerText = "Error de Conexión";
            contenedorDatos.innerHTML = `<p style="color: #fca5a5;">❌ No se pudo obtener respuesta de Render. Asegúrate de que el backend esté 'Live'.</p>`;
            console.error(error);
        }
    });
}

// Dirección del servidor del Hostal en Render
const API_URL = "https://hostal-milagro.onrender.com";

const form = document.getElementById('reservaForm');
const feedback = document.getElementById('feedback');
const terminal = document.getElementById('console');
const btnCheck = document.getElementById('btnCheck');
const serverBadge = document.querySelector('.status-dot');

// Función espejo para escribir registros en el Monitor de Kimi
const logToKimiConsole = (msg, type = 'log') => {
    const p = document.createElement('p');
    p.style.marginBottom = '2px';
    
    // Formato de hora estilo log profesional
    const time = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    if (type === 'error') {
        p.innerHTML = `<span style="color: #ef4444;">> [ERROR ${time}]</span> ${msg}`;
    } else if (type === 'success') {
        p.innerHTML = `<span style="color: #22c55e;">> [SUCCESS ${time}]</span> ${msg}`;
    } else {
        p.innerHTML = `> [${time}] ${msg}`;
    }
    
    terminal.prepend(p); // Los mensajes nuevos aparecen arriba
};

// --- LÓGICA DE ENVÍO DE RESERVA ---
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Detiene la recarga de la página
        
        // Capturar datos del formulario
        const dataReserva = {
            nombre: document.getElementById('nombre').value,
            fecha: document.getElementById('fecha').value,
            habitacion: document.getElementById('habitacion').value
        };

        feedback.innerText = "⏳ Procesando reserva...";
        feedback.style.color = "#0066ff"; // Azul Kimi
        logToKimiConsole(`Iniciando petición POST a Render...`);

        try {
            // Enviar petición POST al backend
            const respuesta = await fetch(`${API_URL}/reservar`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataReserva)
            });

            if (!respuesta.ok) throw new Error("Servidor no respondió correctamente.");

            const resultado = await respuesta.json();
            
            // Éxito
            feedback.innerText = "✅ Reserva confirmada. ¡Te esperamos!";
            feedback.style.color = "#10b981"; // Verde éxito
            logToKimiConsole(`Servidor respondió: ${resultado.mensaje}`, 'success');
            
            form.reset(); // Limpia los campos

        } catch (error) {
            // Fallo
            feedback.innerText = "❌ Falló la conexión. ¿Backend Live?";
            feedback.style.color = "#ef4444"; // Rojo error
            logToKimiConsole(`Error al procesar reserva. Revisa logs de Render.`, 'error');
            console.error(error);
        }
    });
}

// --- LÓGICA DEL BOTÓN REFRESCAR (CONSULTA GET) ---
if (btnCheck) {
    btnCheck.addEventListener('click', async () => {
        logToKimiConsole("Sincronizando estado con Render...");
        
        try {
            const respuesta = await fetch(`${API_URL}/datos`);
            if (!respuesta.ok) throw new Error();
            
            const data = await respuesta.json();
            
            logToKimiConsole(`Estado: ${data.estado || 'Online'}`);
            logToKimiConsole(`Servidor dice: "${data.mensaje}"`);

        } catch (err) {
            logToKimiConsole("ERROR: No se pudo conectar con el Backend.", 'error');
        }
    });
}

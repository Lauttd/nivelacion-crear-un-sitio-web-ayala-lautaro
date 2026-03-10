const caja = document.getElementById('miCajaTexto');
const boton = document.getElementById('btnCambiarColor');
const cuerpo = document.body;

let contadorClicks = 0;

// 1️⃣ Evento de la tecla Enter
caja.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        alert(caja.value);
    }
});

// 2️⃣ Evento de cambio de colores (Ciclo de 3 estados)
boton.addEventListener('click', () => {
    contadorClicks = (contadorClicks + 1) % 3;

    if (contadorClicks === 0) {
        cuerpo.className = ""; // Fondo blanco, texto negro
    } else if (contadorClicks === 1) {
        cuerpo.className = "tema-oscuro"; // Fondo negro, texto blanco
    } else {
        cuerpo.className = "tema-celeste"; // Fondo celeste, texto rojo
    }
});
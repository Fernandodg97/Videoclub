"use strict";
// Función para validar el email
function esEmailValido(email) {
    // Expresión regular que verifica que el email tenga un formato correcto (con '@' y '.')
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); // Devuelve true si el email es válido, false si no lo es
}
// Capturar el campo de entrada del email en el formulario
const emailInput = document.getElementById("email");
// Crear un elemento para mostrar mensajes de error
const mensajeError = document.createElement("p");
mensajeError.style.color = "red"; // Estilo del mensaje en rojo
// Insertar el mensaje de error después del campo de email
emailInput.insertAdjacentElement("afterend", mensajeError);
// Evento que se activa cuando el usuario escribe en el campo de email
emailInput.addEventListener("input", () => {
    // Obtener el valor del email sin espacios
    const email = emailInput.value.trim();
    if (esEmailValido(email)) {
        // Si es válido, no mostrar mensaje de error
        mensajeError.textContent = "";
    }
    else {
        // Si no es válido, mostrar error
        mensajeError.textContent = "Si us plau, ingressi un email vàlid.";
    }
});
// Función para validar la contraseña
function esContrasenaValida(contrasena) {
    // Expresión regular que verifica que la contraseña tenga al menos:
    // - Una letra minúscula
    // - Una letra mayúscula
    // - Un número
    // - 8 o más caracteres
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    // Devuelve true si la contraseña es válida, false si no lo es
    return regex.test(contrasena);
}
// Capturar el campo de entrada de la contraseña en el formulario
const contrasenaInput = document.getElementById("contrasena");
// Crear un elemento para mostrar mensajes de error de la contraseña
const mensajeErrorContrasena = document.createElement("p");
// Estilo del mensaje en rojo
mensajeErrorContrasena.style.color = "red";
// Insertar el mensaje de error después del campo de contraseña
contrasenaInput.insertAdjacentElement("afterend", mensajeErrorContrasena);
// Evento que se activa cuando el usuario escribe en el campo de contraseña
contrasenaInput.addEventListener("input", () => {
    // Obtener el valor de la contraseña sin espacios
    const contrasena = contrasenaInput.value.trim();
    if (esContrasenaValida(contrasena)) {
        // Si es válida, no mostrar mensaje de error
        mensajeErrorContrasena.textContent = "";
    }
    else {
        // Mensaje de error si no cumple los requisitos
        mensajeErrorContrasena.textContent =
            "La contrasenya ha de tenir almenys 8 caràcters, una majúscula, una minúscula i un número.";
    }
});
// Capturar el formulario en la página
const formulario = document.getElementById("mainForm");
// Añade la funcion submitGET al pulsar submit
window.addEventListener("submit", submitGET);
// Crear un elemento para mostrar el mensaje de error general (email y contraseña no válidos)
const mensajeErrorGeneral = document.createElement("p");
// Estilo del mensaje en rojo
mensajeErrorGeneral.style.color = "red";
// Espaciado
mensajeErrorGeneral.style.marginTop = "10px";
// Insertar el mensaje de error general después del formulario
formulario.insertAdjacentElement("afterend", mensajeErrorGeneral);
// Función que impide el envío del formulario si los datos no son válidos
function submitGET(e) {
    // Obtener los valores actuales del email y la contraseña
    const email = emailInput.value.trim();
    const contrasena = contrasenaInput.value.trim();
    // Si el email o la contraseña no son válidos, impedir el envío del formulario
    if (!esEmailValido(email) || !esContrasenaValida(contrasena)) {
        // Evita que el formulario se envíe
        e.preventDefault();
        // Mostrar el mensaje de error general
        mensajeErrorGeneral.textContent = "Por favor, introduce un email y una contraseña válidos.";
    }
    else {
        // Si es válido, limpiar el mensaje de error
        mensajeErrorGeneral.textContent = "";
    }
}
//# sourceMappingURL=formulari.js.map
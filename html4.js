// script.js

// Función para manejar el botón del formulario
function enviarFormulario() {
    var nombre = document.querySelector('input[type="text"]').value;
    var amas = document.querySelector('input[type="range"]').value;

    alert('¡Gracias por enviar el formulario mi amor!\nNombre: ' + nombre + '\n¿Qué tanto me amas?: ' + amas + '%');
}

// Asociar la función al evento click del botón
document.querySelector('input[type="button"]').addEventListener('click', enviarFormulario);

// Obtén una referencia al botón y a la imagen oculta

var botonSorpresa = document.getElementById("botonSorpresa");
var imagenSorpresa = document.getElementById("imagenSorpresa");

// Agrega un evento click al botón
botonSorpresa.addEventListener("click", function() {
    // Muestra la imagen oculta
    alert('Te amo muchisimo, nunca dudes de eso CABRON');
    imagenSorpresa.style.display = "block";
});

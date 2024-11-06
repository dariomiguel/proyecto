document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactoForm");
    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");
    const comentario = document.getElementById("comentario");
    const charCount = document.getElementById("charCount");
    const popup = document.getElementById("popup");
    const aceptarBtn = document.getElementById("aceptar");

    // Expresión regular para validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Expresión regular para validar el teléfono
    const telefonoRegex = /^\d{4}-\d{4}$/;

    // Contador de caracteres del comentario
    comentario.addEventListener("input", function () {
        const maxChars = 1000;
        const remaining = maxChars - comentario.value.length;
        charCount.textContent = `Caracteres restantes: ${remaining}`;
    });

    // Validación personalizada al enviar el formulario
    form.addEventListener("submit", function (event) {
        let valid = true;

        if (nombre.value.trim() === "") {
            alert("El nombre no puede estar vacío.");
            valid = false;
        }
        if (!emailRegex.test(email.value)) {
            alert("Por favor, ingresa un correo válido.");
            valid = false;
        }
        if (telefono.value && !telefonoRegex.test(telefono.value)) {
            alert("El teléfono debe tener el formato correcto: 1234-5678.");
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            popup.style.display = "block";
        }
    });

    aceptarBtn.addEventListener("click", function () {
        window.location.href = "../pages/mensaje_enviado.html";
    });
});


const usuarioEnSesion = JSON.parse(localStorage.getItem('usuarioLogueado'));

function mostrarContadorDinamico(){
    let contadorCarrito = document.querySelector(".contadorCarrito");
    let contador = parseInt(sessionStorage.getItem(`contador_${usuarioEnSesion.correo}`)) || 0;
    contadorCarrito.innerHTML=`${contador}`;
}

mostrarContadorDinamico();
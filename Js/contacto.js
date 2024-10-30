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

    // Expresión regular para validar el teléfono (opcional con guión)
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

        // Validar nombre y apellido (que no estén vacíos)
        if (nombre.value.trim() === "") {
            alert("El nombre no puede estar vacío.");
            valid = false;
        }

        // Validar email con la expresión regular
        if (!emailRegex.test(email.value)) {
            alert("Por favor, ingresa un correo válido.");
            valid = false;
        }

        // Validar teléfono solo si el usuario lo ingresó
        if (telefono.value && !telefonoRegex.test(telefono.value)) {
            alert("El teléfono debe tener el formato correcto: 1234-5678.");
            valid = false;
        }

        // Si alguna validación falla, se previene el envío
        if (!valid) {
            event.preventDefault();
        } else {
            // Mostrar popup y evitar el comportamiento por defecto del formulario
            event.preventDefault();
            popup.style.display = "block";
        }
    });

    // Botón "Aceptar" en el popup que redirige a la página principal
    aceptarBtn.addEventListener("click", function () {
        window.location.href = "index.html"; // Cambia esto a la página de inicio correspondiente
    });
});

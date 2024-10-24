const botonAgregarPersona = document.getElementById("boton__agregarPersona");
botonAgregarPersona.addEventListener("click", agregarTexto);

let inputNombre = document.getElementById("nombre");
let inputApellido = document.getElementById("apellido");
let inputDni = document.getElementById("dni");

function agregarTexto() {
    let contenedor = document.getElementById("contenedorPersonasAgregadas__Id");
    let parrafo = document.createElement("div");
    parrafo.classList.add("formularioDeInscricion__info-container");

    let valorDeNombre = inputNombre.value;
    let valorDeApellido = inputApellido.value;
    let valorDeDni = inputDni.value;

    // Validar si algún campo está vacío
    if (
        !(valorDeNombre === "" || valorDeApellido === "" || valorDeDni === "")
    ) {
        parrafo.innerHTML = `
            <p>${valorDeApellido}, ${valorDeNombre} - DNI:${valorDeDni}</p>
            <input type="checkbox" name="alumnoAInscribir" value="${valorDeDni}" id="${valorDeDni}">

        `;

        contenedor.appendChild(parrafo);

        inputNombre.value = "";
        inputApellido.value = "";
        inputDni.value = "";
    }
}

const botonConfirmarInscriptos = document.getElementById("boton__confirmar");
botonConfirmarInscriptos.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(
        'input[name="alumnoAInscribir"]:checked'
    );
    const valoresSeleccionados = [];

    checkboxes.forEach((checkbox) => {
        valoresSeleccionados.push(checkbox.value);
    });
});

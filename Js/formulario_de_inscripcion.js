const botonAgregarPersona = document.getElementById("boton__agregarPersona");
const usuarioLogueadoFormulario = JSON.parse(localStorage.getItem("usuarioLogueado"));
const cursosAInscribirse = JSON.parse(localStorage.getItem(`CursosEmpresas_${usuarioLogueadoFormulario.correo}`));
console.log(cursosAInscribirse);
let alumnosInscriptos = [];
let inputNombre = document.getElementById("nombre");
let inputApellido = document.getElementById("apellido");
let inputDni = document.getElementById("dni");
let valorCurso1 = document.getElementById("importe");
botonAgregarPersona.addEventListener("click", agregarPersonas);
function actualizarTitulo(){
    const tituloInscripcion = document.getElementById('JS-tituloInscripcion');
    tituloInscripcion.textContent = `Inscripción a ${cursosAInscribirse.nombre}`;
}


inputDni.addEventListener('input', (event) =>{
    let dni = event.target.value.replace(/[^0-9]/g, '')
    inputDni.value = dni;
});

inputNombre.addEventListener('input', (event) =>{
    let nombre = event.target.value.replace(/[^A-Za-z]/g, '');
    inputNombre.value = nombre;
});

inputApellido.addEventListener('input', (event) =>{
    let apellido = event.target.value.replace(/[^A-Za-z\s]/g, '');
    inputApellido.value = apellido;
});

function agregarPersonas() {

    const alumnoInscripto = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        dni: inputDni.value
    }
    let valorDeNombre = inputNombre.value;
    let valorDeApellido = inputApellido.value;
    let valorDeDni = inputDni.value;

    // Validar si algún campo está vacío
    if (
        !(valorDeNombre === "" || valorDeApellido === "" || valorDeDni === "")
    ) {
        alumnosInscriptos.push(alumnoInscripto);
        localStorage.setItem(`alumnosInscriptos_${usuarioLogueadoFormulario.correo}`, JSON.stringify(alumnosInscriptos));
        mostrarPersonas();
    }
    inputNombre.value = '';
    inputApellido.value = '';
    inputDni.value = '';
}

function mostrarPersonas() {
    let contenedor = document.getElementById("contenedorPersonasAgregadas__Id");
    contenedor.innerHTML = "";

    alumnosInscriptos.forEach((item) => {
        let parrafo = document.createElement("div");
        parrafo.classList.add("formularioDeInscricion__info-container");

        parrafo.innerHTML = `
            <label for="${item.dni}">${item.nombre}, ${item.apellido} - DNI: ${item.dni}</label>
            <button type="button" class="eliminarInscripto" onclick="eliminarInscripto('${item.dni}')">Eliminar</button>
        `;
        
        contenedor.appendChild(parrafo);
        updateTotal();
    });
}

function eliminarInscripto(dniAux) {
    // Encontrar al alumno con el dniAux
    const alumnoAEliminar = alumnosInscriptos.find((item) => item.dni === dniAux);
    console.log(alumnoAEliminar);

    // Si se encontró el alumno, lo eliminamos
    if (alumnoAEliminar) {
        alumnosInscriptos = alumnosInscriptos.filter((item) => item.dni !== dniAux);
    }

    // Guardar el array actualizado en localStorage
    localStorage.setItem(`alumnosInscriptos_${usuarioLogueadoFormulario.correo}`, JSON.stringify(alumnosInscriptos));

    // Volver a mostrar la lista de personas después de la eliminación
    updateTotal();
    mostrarPersonas();
}

// Función para actualizar el total
function updateTotal() {
    const total = document.getElementById('valorTotal');
    let precioTotal = parseFloat(cursosAInscribirse.precio)*alumnosInscriptos.length;
    total.textContent = alumnosInscriptos.length === 0 ? '$0.00 ARS' : `$${precioTotal} ARS`;
    console.log(alumnosInscriptos.length);
    localStorage.setItem(`precioTotal_${usuarioLogueadoFormulario.correo}`, JSON.stringify(precioTotal));
}



actualizarTitulo();
updateTotal();







// const botonConfirmarInscriptos = document.getElementById("boton__confirmar");
// let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

// botonConfirmarInscriptos.addEventListener("click", function () {
//     const checkboxes = document.querySelectorAll('input[name="alumnoAInscribir"]:checked');
//     const valoresSeleccionados =
//         JSON.parse(localStorage.getItem(`personasInscriptasPor${usuarioLogueado.nombre}`)) || [];

//     checkboxes.forEach((checkbox) => {
//         let persona = {
//             dni: checkbox.value,
//             curso: checkbox.getAttribute("data-curso"),
//         };
//         valoresSeleccionados.push(persona);
//     });
//     total += 20 * valoresSeleccionados.length;
//     localStorage.setItem("totalCursos", JSON.stringify(total));
//     localStorage.setItem(
//         `personasInscriptasPor${usuarioLogueado.nombre}`,
//         JSON.stringify(valoresSeleccionados)
//     );
// });

// function validarCurso(curso) {
//     let encontrado = false;
//     cursosDisponibles.forEach((aux) => {
//         if (aux.toLowerCase() == curso.toLowerCase()) {
//             encontrado = true;
//         }
//     });

//     return encontrado;
// }

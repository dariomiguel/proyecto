const cursosDisponibles = ["javascript","c","illustrator","Mysql","SQL","Photoshop","Python","Vuejs","Scala","Express"];

const botonAgregarPersona = document.getElementById("boton__agregarPersona");
botonAgregarPersona.addEventListener("click", agregarTexto);

let inputNombre = document.getElementById("nombre");
let inputApellido = document.getElementById("apellido");
let inputDni = document.getElementById("dni");
let inputCurso = document.getElementById("curso");

function agregarTexto() {
    let contenedor = document.getElementById("contenedorPersonasAgregadas__Id");
    let parrafo = document.createElement("div");
    parrafo.classList.add("formularioDeInscricion__info-container");

    let valorDeNombre = inputNombre.value;
    let valorDeApellido = inputApellido.value;
    let valorDeDni = inputDni.value;
    let valorCurso = inputCurso.value;


    if (!validarCurso(valorCurso)) {
        alert("curso invalido");
        return;
    }

    // Validar si algún campo está vacío
    if (!(valorDeNombre === "" || valorDeApellido === "" || valorDeDni === "" || valorCurso === "")) {
        
        parrafo.innerHTML = `
            <label for="${valorDeDni}">${valorDeApellido}, ${valorDeNombre} - DNI:${valorDeDni} , Curso:${valorCurso}</label>
            <input type="checkbox" name="alumnoAInscribir" value="${valorDeDni}" id="${valorDeDni}" data-curso="${valorCurso}" required>
            <button type="button" class="eliminarInscripto" onclick="eliminarInscripto('${valorDeDni}')">Eliminar</button>
        `;

        contenedor.appendChild(parrafo);

        inputNombre.value = "";
        inputApellido.value = "";
        inputDni.value = "";
        inputCurso.value="";
    }
}

function eliminarInscripto(dniAux){
    let inscripto = document.querySelectorAll(".formularioDeInscricion__info-container")
    inscripto.forEach(inscripcion =>{
        let dniInput = inscripcion.querySelector("input[type='checkbox']");
        if(dniInput && dniInput.value == dniAux){
            inscripcion.remove();
        }
    })
}


const botonConfirmarInscriptos = document.getElementById("boton__confirmar");
let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
let total = 0;


botonConfirmarInscriptos.addEventListener("click", function () {

    const checkboxes = document.querySelectorAll('input[name="alumnoAInscribir"]:checked');
    const valoresSeleccionados = JSON.parse(localStorage.getItem(`personasInscriptasPor${usuarioLogueado.nombre}`)) || [];

    checkboxes.forEach((checkbox) => {
        let persona = {
            dni:checkbox.value,
            curso:checkbox.getAttribute("data-curso"),
        };
        valoresSeleccionados.push(persona);
    });
    total+=20 * valoresSeleccionados.length;
    localStorage.setItem("totalCursos",JSON.stringify(total));
    localStorage.setItem(`personasInscriptasPor${usuarioLogueado.nombre}`,JSON.stringify(valoresSeleccionados));
    
});




function validarCurso(curso){
    let encontrado = false;
    cursosDisponibles.forEach(aux=>{
        if(aux.toLowerCase() == curso.toLowerCase()){
            encontrado = true;
        }
    })

    return encontrado;
}
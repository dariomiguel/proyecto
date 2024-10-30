const sesion = localStorage.getItem("estadoDeSesion");
const buscador = document.querySelector(".headerTop .buscador");
const carrito = document.querySelector(".headerTop .carrito");
const ocultoEnSesionCerrada = document.getElementsByClassName("ocultoEnSesionCerrada");
const visibleEnSesionCerrada = document.getElementsByClassName("visibleEnSesionCerrada");
const cerrarSesionDesdeBarra = document.getElementById("cerrarSesionDesdeBarra");
const cerrarSesion = document.getElementById("cerrarSesion");
const indiceUsuario = localStorage.getItem("idUsuario");
const lista = JSON.parse(localStorage.getItem("BDUsuarios"));

const contenedorBienvenida = document.querySelector(".barraHeader__Usuario--contenedorBienvenida");

if (sesion === null) {
    if (carrito !== null) carrito.style.display = "none";

    // Ocultar cada elemento con la clase "ocultoSesionDesactivada"
    for (let i = 0; i < ocultoEnSesionCerrada.length; i++) {
        ocultoEnSesionCerrada[i].style.display = "none";
    }
} else {
    console.log("Estado de sesión: " + sesion);

    if (lista !== null) {
        const nombreUsuario = lista[indiceUsuario].nombre;
        console.log("lista: " + lista[indiceUsuario].nombre);
        console.log("indiceUsuario: " + indiceUsuario);
        console.log("nombre: " + nombreUsuario);
        const nombreEnSpan = document.createElement("span");
        nombreEnSpan.textContent = nombreUsuario;
        contenedorBienvenida.appendChild(nombreEnSpan);
    }

    // Ocultar cada elemento con la clase "visibleEnSesionCerrada"
    for (let i = 0; i < visibleEnSesionCerrada.length; i++) {
        visibleEnSesionCerrada[i].style.display = "none";
    }
}

if (cerrarSesion !== null && cerrarSesionDesdeBarra !== null) {
    cerrarSesion.addEventListener("click", cerrarSesionActual);
    cerrarSesionDesdeBarra.addEventListener("click", cerrarSesionActual);
}

function cerrarSesionActual() {
    localStorage.removeItem("estadoDeSesion");
}

const sesion = localStorage.getItem("estadoDeSesion");
const buscador = document.querySelector(".headerTop .buscador");
const carrito = document.querySelector(".headerTop .carrito");
const ocultoEnSesionCerrada = document.getElementsByClassName(
    "ocultoEnSesionCerrada"
);
const visibleEnSesionCerrada = document.getElementsByClassName(
    "visibleEnSesionCerrada"
);
const cerrarSesionDesdeBarra = document.getElementById(
    "cerrarSesionDesdeBarra"
);
const cerrarSesion = document.getElementById("cerrarSesion");

if (sesion == null || sesion == "cerrada") {
    console.log("Sesión cerrada");

    if (carrito !== null) carrito.style.display = "none";

    // Ocultar cada elemento con la clase "ocultoSesionDesactivada"
    for (let i = 0; i < ocultoEnSesionCerrada.length; i++) {
        ocultoEnSesionCerrada[i].style.display = "none";
    }
} else {
    console.log("Estado de sesión: " + sesion);

    // Ocultar cada elemento con la clase "ocultoSesionDesactivada"
    for (let i = 0; i < visibleEnSesionCerrada.length; i++) {
        visibleEnSesionCerrada[i].style.display = "none";
    }
}

if (cerrarSesion !== null && cerrarSesionDesdeBarra !== null) {
    cerrarSesion.addEventListener("click", cerrarSesionActual());
    cerrarSesionDesdeBarra.addEventListener("click", cerrarSesionActual());
}

function cerrarSesionActual() {
    console.log("Sesion cerrada");

    localStorage.removeItem("estadoDeSesion");
}

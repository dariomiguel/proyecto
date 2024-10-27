const sesion = localStorage.getItem("estadoDeSesion");
const buscador = document.querySelector(".headerTop .buscador");
const carrito = document.querySelector(".headerTop .carrito");
const ocultoEnSesionActiva = document.getElementsByClassName(
    "ocultoEnSesionActiva"
);
const visibleEnSesionActiva = document.getElementsByClassName(
    "visibleEnSesionActiva"
);

if (sesion == null || sesion == "cerrada") {
    console.log("Sesión cerrada");

    carrito.style.display = "none";

    // Ocultar cada elemento con la clase "ocultoSesionDesactivada"
    for (let i = 0; i < ocultoEnSesionActiva.length; i++) {
        ocultoEnSesionActiva[i].style.display = "none";
    }
} else {
    console.log("Estado de sesión: " + sesion);

    // Ocultar cada elemento con la clase "ocultoSesionDesactivada"
    for (let i = 0; i < visibleEnSesionActiva.length; i++) {
        visibleEnSesionActiva[i].style.display = "none";
    }
}

//  .headerTop .buscador,
// .headerTop .carrito,
// .nav_list {
//     display: none;
// }

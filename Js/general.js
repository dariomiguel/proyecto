const nombre = localStorage.getItem("nombre");
const buscador = document.querySelector(".headerTop .buscador");
const carrito = document.querySelector(".headerTop .carrito");

if (nombre == null) {
    console.log("No hay nombre registrado");

    buscador.style.display = "none";
    carrito.style.display = "none";
} else {
    console.log("EL nombre es: " + nombre);
}

//  .headerTop .buscador,
// .headerTop .carrito,
// .nav_list {
//     display: none;
// }

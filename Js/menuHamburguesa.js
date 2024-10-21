/* MOSTRAR Y OCULTAR MENU DESPLEGABLE */
const botonAbrirMenu = document.querySelector(".abrirMenu");
const botonCerrarMenu = document.querySelector(".cerrarMenu");
const body = document.body;

botonAbrirMenu.addEventListener("click",mostrarMenu);
botonCerrarMenu.addEventListener("click",ocultarMenu);


function mostrarMenu(){
    let menu = document.querySelector(".nav_list-vertical");
    menu.style.display = "block";
    body.style.overflow ="hidden";
}

function ocultarMenu(){
    let menu = document.querySelector(".nav_list-vertical");
    menu.style.display = "none";
    body.style.overflow ="";
}

/* MOSTRAR Y OCULTAR MENU DESPLEGABLE */
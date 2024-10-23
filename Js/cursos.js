const botonesFiltro = document.querySelectorAll(".contenedor-filtros button");
const itemsFiltrables = document.querySelectorAll(".slider .cursos-info-container");

console.log(botonesFiltro, itemsFiltrables);

const filtrarItems = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    itemsFiltrables.forEach(item =>{
        item.classList.add("hide");
        if(item.dataset.name === e.target.dataset.name || e.target.dataset.name === "all-courses"){
            item.classList.remove("hide");
        }
    })
}

botonesFiltro.forEach(button => button.addEventListener("click", filtrarItems));
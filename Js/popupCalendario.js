const cursos = [
    {
        nombre: "JavaScript",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
    {
        nombre: "C",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
    {
        nombre: "Illustrator",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
    {
        nombre: "Mysql",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
    {
        nombre: "SQL",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
    {
        nombre: "Photoshop",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
    {
        nombre: "Python",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
    {
        nombre: "Vuejs",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
    {
        nombre: "Scala",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
    {
        nombre: "Express",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
    {
        nombre: "CSS",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
    {
        nombre: "HTML",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
    {
        nombre: "Java",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",
    },
];

let titulosCurso = document.querySelectorAll(".cursoCalendario");

titulosCurso.forEach((titulo) => {
    titulo.addEventListener("click", () => mostrarPopup(titulo));
});

function mostrarPopup(aux) {
    let popup = document.createElement("dialog");
    let nombreCurso = aux.getAttribute("data-curso");

    const ocultoEnSesionCerrada = document.getElementsByClassName("ocultoEnSesionCerrada");

    cursos.forEach((curso) => {
        if (curso.nombre == nombreCurso) {
            popup.innerHTML = `
            <h2>Nuevo curso de ${curso.nombre}</h2>
            <p>${curso.resumen}<p>
            <a href=${curso.link}>Ver Detalle</a>
            <button class="agregarAlCarrito ocultoEnSesionCerrada">Agregar al carrito</button>
            <button class="botonCerrar">Cerrar</button>`;

            document.body.appendChild(popup);
            popup.showModal();
            body.style.overflow = "hidden";

            if (sesion === null) {
                // Ocultar cada elemento con la clase "ocultoSesionDesactivada"
                for (let i = 0; i < ocultoEnSesionCerrada.length; i++) {
                    ocultoEnSesionCerrada[i].style.display = "none";
                }
            }
        }
    });

    let botonCerrar = popup.querySelector(".botonCerrar");
    botonCerrar.addEventListener("click", () => {
        if (popup.open) {
            popup.close();
            document.body.removeChild(popup);
            body.style.overflow = "";
        }
    });
}

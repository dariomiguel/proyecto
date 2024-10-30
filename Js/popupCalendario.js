const cursos = [
    {
        nombre: "JavaScript",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "../pages/cursos/javscript.html",id:1
    },
    {
        nombre: "C",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "../pages/cursos/cSharp.html",id:2
    },
    {
        nombre: "Illustrator",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "../pages/cursos/illustrator.html",id:3
    },
    {
        nombre: "Mysql",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "../pages/cursos/mysql.html",id:4
    },
    {
        nombre: "SQL",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "../pages/cursos/sql.html",id:5
    },
    {
        nombre: "Photoshop",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "../pages/cursos/photoshop.html",id:6
    },
    {
        nombre: "Python",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "../pages/cursos/python.html",id:7
    },
    {
        nombre: "Vuejs",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "../pages/cursos/vuejs.html",id:8
    },
    {
        nombre: "Scala",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "../pages/cursos/cSharp.html",id:9
    },
    {
        nombre: "Express",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "../pages/cursos/cSharp.html",id:10
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
            <button class="agregarAlCarrito ocultoEnSesionCerrada" onclick="agregarAlCarrito(${curso.id})">Agregar al carrito</button>
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


let carritoDeCompras = JSON.parse(localStorage.getItem('carrito')) || [];
    function agregarAlCarrito(id) {
        const agregadoAlCarrito = document.getElementById('JS-agregadoAlCarrito');
        console.log(carritoDeCompras);
        const curso = cursos.find(c => c.id === id);
            if (curso) {
            const existe = carritoDeCompras.find(item => item.id === curso.id);
            if(!existe){
            carritoDeCompras.push(curso);
            }
        agregadoAlCarrito.classList.add('visible');
            setTimeout(() =>{
                agregadoAlCarrito.classList.remove('visible');
            }, 2000);
        localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
        console.log(JSON.parse(localStorage.getItem('carrito')));
    }
}
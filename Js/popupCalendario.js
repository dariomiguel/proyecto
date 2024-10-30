const cursos = [
    {
        nombre: "JavaScript",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",id:1,img: "../../img/cardImages/javaScript-logo.png",duracion:"60hs",precio:"1500"
    },
    {
        nombre: "C",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",id:2,img: "../../img/cardImages/cSharp-logo.png",duracion:"120hs",precio:"3000"
    },
    {
        nombre: "Illustrator",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",id:3,img: "../../img/cardImages/illustrator-logo.png",duracion:"40hs",precio:"1200"
    },
    {
        nombre: "Mysql",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",id:4,img: "../../img/cardImages/mysql-logo.png",duracion:"80hs",precio:"2300"
    },
    {
        nombre: "SQL",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",id:5,img: "../../img/cardImages/sql-logo.png",duracion:"80hs",precio:"2000"
    },
    {
        nombre: "Photoshop",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",id:6,img: "../../img/cardImages/photoshop-logo.png",duracion:"50hs",precio:"1500"
    },
    {
        nombre: "Python",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",id:7,img: "../../img/cardImages/Python_logo_icon.png",duracion:"60hs",precio:"1800"
    },
    {
        nombre: "Vuejs",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",id:8,img: "../../img/cardImages/vueJs-logo.png",duracion:"70hs",precio:"1600"
    },
    {
        nombre: "Scala",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",id:9,img: "../../img/cardImages/Scala-logo.png",duracion:"60hs",precio:"1900"
    },
    {
        nombre: "Express",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#",id:10,img: "../../img/cardImages/adobe-express.png"
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
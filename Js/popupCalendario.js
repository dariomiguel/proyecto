const cursos = [
    {
        nombre: "JavaScript",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#js-descripcion__contenido",id:1,img: "../../img/cardImages/javaScript-logo.png",duracion:"60hs",precio:"1500"
    },
    {
        nombre: "C",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#js-descripcion__contenido",id:2,img: "../../img/cardImages/cSharp-logo.png",duracion:"120hs",precio:"3000"
    },
    {
        nombre: "Illustrator",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#js-descripcion__contenido",id:3,img: "../../img/cardImages/illustrator-logo.png",duracion:"40hs",precio:"1200"
    },
    {
        nombre: "Mysql",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#js-descripcion__contenido",id:4,img: "../../img/cardImages/mysql-logo.png",duracion:"80hs",precio:"2300"
    },
    {
        nombre: "SQL",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#js-descripcion__contenido",id:5,img: "../../img/cardImages/sql-logo.png",duracion:"80hs",precio:"2000"
    },
    {
        nombre: "Photoshop",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#js-descripcion__contenido",id:6,img: "../../img/cardImages/photoshop-logo.png",duracion:"50hs",precio:"1500"
    },
    {
        nombre: "Python",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#js-descripcion__contenido",id:7,img: "../../img/cardImages/Python_logo_icon.png",duracion:"60hs",precio:"1800"
    },
    {
        nombre: "Vuejs",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#js-descripcion__contenido",id:8,img: "../../img/cardImages/vueJs-logo.png",duracion:"70hs",precio:"1600"
    },
    {
        nombre: "Scala",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#js-descripcion__contenido",id:9,img: "../../img/cardImages/Scala-logo.png",duracion:"60hs",precio:"1900"
    },
    {
        nombre: "Express",
        resumen:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem quam voluptate. Iure eos enim nisi dolores velit facilis veniam quia, repellat aperiam voluptates qui! Illum placeat quibusdam similique excepturi?",
        link: "#js-descripcion__contenido",id:10,img: "../../img/cardImages/adobe-express.png",duracion:"50hs",precio:"1300"
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
            <a href=${curso.link} onclick="mostrarDetalles(${curso.id})">Ver Detalle</a>
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


let carritoDeCompras;
const usuarioEnSesion = JSON.parse(localStorage.getItem('usuarioLogueado'));
const estaLogueado = localStorage.getItem("estadoDeSesion");
if(estaLogueado){
carritoDeCompras = JSON.parse(localStorage.getItem(`carrito_${usuarioEnSesion.correo}`)) || [];
}
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
        localStorage.setItem(`carrito_${usuarioEnSesion.correo}`, JSON.stringify(carritoDeCompras));
        console.log(JSON.parse(localStorage.getItem(`carrito_${usuarioEnSesion.correo}`)));
    }
}

function mostrarDetalles(id) {
    const cursos = JSON.parse(localStorage.getItem("cursos"));
    const cursoSeleccionado = cursos.find((curso) => curso.id === id);
    cursoSeleccionado.innerHTML = "";

    if (cursoSeleccionado) {
        // Almacenar cada propiedad individual en sessionStorage
        sessionStorage.setItem("cursoId", cursoSeleccionado.id);
        sessionStorage.setItem("cursoNombre", cursoSeleccionado.nombre);
        sessionStorage.setItem("cursoImagen", cursoSeleccionado.img);
        sessionStorage.setItem("cursoPrecio", cursoSeleccionado.precio);
        sessionStorage.setItem("cursoDuracion", cursoSeleccionado.duracion);
        sessionStorage.setItem("cursoDescripcion", cursoSeleccionado.descripcion);
        sessionStorage.setItem("cursoRequisitos", cursoSeleccionado.requisitos);
    }

    const imagenCurso = document.getElementById("js-imagen-curso");
    const tituloCurso = document.getElementById("js-titulo-curso");
    const valorCurso = document.getElementById("js-valor-curso");
    const duracionCurso = document.getElementById("js-duracion-curso");
    const descripcionCurso = document.getElementById("js-descripcion-curso");
    const requisitosCurso = document.getElementById("js-requisitos-curso");

    if (
        imagenCurso != null &&
        tituloCurso != null &&
        valorCurso != null &&
        duracionCurso != null &&
        descripcionCurso != null &&
        requisitosCurso != null
    ) {
        imagenCurso.src = cursoSeleccionado.img;
        tituloCurso.innerHTML = cursoSeleccionado.nombre;
        valorCurso.innerHTML = cursoSeleccionado.precio;
        duracionCurso.innerHTML = cursoSeleccionado.duracion;
        descripcionCurso.innerHTML = cursoSeleccionado.descripcion;
        requisitosCurso.innerHTML = cursoSeleccionado.requisitos;
    } else if (localStorage.getItem("estadoDeSesion") == null) {
        window.location.href = "../pages/login.html";
    } else {
        window.location.href = "../pages/cursos.html";
    }
}
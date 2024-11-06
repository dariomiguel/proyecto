const datosDeLosCursosDestacados = [
    {
        id: 1,
        nombre: "Iniciando en JavaScript",
        duracion: "60hs",
        precio: "1500",
        img: "../img/cardImages/JavaScript-logo.png",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
        requisitos: "Ninguno",
        dataname: "item-programacion",
    },
    {
        id: 2,
        nombre: "Iniciando en C#",
        duracion: "120hs",
        precio: "3000",
        img: "../img/cardImages/cSharp-logo.png",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
        requisitos: "Ninguno",
        dataname: "item-programacion",
    },
    {
        id: 3,
        nombre: "Iniciando en Python",
        duracion: "60hs",
        precio: "1800",
        img: "../img/cardImages/Python_logo_icon.png",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
        requisitos: "Ninguno",
        dataname: "item-programacion",
    },
    {
        id: 4,
        nombre: "Iniciando en MySQL",
        duracion: "80hs",
        precio: "2300",
        img: "../img/cardImages/mysql-logo.png",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
        requisitos: "Ninguno",
        dataname: "item-data",
    },
];

localStorage.setItem("cursos", JSON.stringify(datosDeLosCursosDestacados));

function mostrarCursosDestacados() {
    const datosDeLosCursos = JSON.parse(localStorage.getItem("cursos"));
    const cursosContainer = document.getElementById("slider");
    cursosContainer.innerHTML = "";
    datosDeLosCursos.forEach((item) => {
        const ContenedorDeCurso = document.createElement("div");
        ContenedorDeCurso.classList.add("cursos-info-container");
        ContenedorDeCurso.dataset.name = item.dataname;
        ContenedorDeCurso.innerHTML = `<div class="contenedor-imagen__curso">
            <img src="${item.img}" alt="${item.nombre}" />
        </div>
        <div class="cursos-info__detalles">
            <p class="cursos-info__horas">${item.duracion}</p>
            <div class="cursos-info__contenedor__titulo-detalles">
                <p class="cursos-info__titulo">
                    ${item.nombre}
                </p>
                <a href="#" onclick="verDetallesYRedirigir(${item.id})">Ver Detalles</a>
            </div>
        </div>
        <div class="precio-cursos">
        <button class="boton-inscripcion" id="JS-botonCompra" onclick="agregarAlCarrito(${item.id})">Comprar</button>
        <p class="precio">$<span id="precioJavascript">${item.precio}</span></p>
        </div>
    </div>`;

        cursosContainer.appendChild(ContenedorDeCurso);
    });
}
mostrarCursosDestacados();

function verDetallesYRedirigir(id) {
    localStorage.setItem("cursoSeleccionado", id);
    window.location.href = "pages/cursos.html";
}

function mostrarDetalles() {
    const id = localStorage.getItem("cursoSeleccionado");
    if (id) {
        const cursos = JSON.parse(localStorage.getItem("cursos"));
        const cursoSeleccionado = cursos.find((curso) => curso.id === parseInt(id));

        if (cursoSeleccionado) {
            document.getElementById("js-imagen-curso").src = cursoSeleccionado.img;
            document.getElementById("js-titulo-curso").innerHTML = cursoSeleccionado.nombre;
            document.getElementById("js-valor-curso").innerHTML = cursoSeleccionado.precio;
            document.getElementById("js-duracion-curso").innerHTML = cursoSeleccionado.duracion;
            document.getElementById("js-descripcion-curso").innerHTML =
                cursoSeleccionado.descripcion;
            document.getElementById("js-requisitos-curso").innerHTML = cursoSeleccionado.requisitos;

            localStorage.removeItem("cursoSeleccionado");
        }
    }
}



const datosDeLosCursos = [
        {
            id: 1,
            nombre: "Iniciando en JavaScript",
            duracion: "60hs",
            precio: "1500",
            img: "../../img/cardImages/javaScript-logo.png",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
            requisitos: "Ninguno",
            dataname: "item-programacion",
        },
        {
            id: 2,
            nombre: "Iniciando en C#",
            duracion: "120hs",
            precio: "3000",
            img: "../../img/cardImages/cSharp-logo.png",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
            requisitos: "Ninguno",
            dataname: "item-programacion",
        },
        {
            id: 3,
            nombre: "Iniciando en Illustrator",
            duracion: "40hs",
            precio: "1200",
            img: "../../img/cardImages/illustrator-logo.png",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
            requisitos: "Ninguno",
            dataname: "item-disenio",
        },
        {
            id: 4,
            nombre: "Iniciando en MySQL",
            duracion: "80hs",
            precio: "2300",
            img: "../../img/cardImages/mysql-logo.png",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
            requisitos: "Ninguno",
            dataname: "item-data",
        },
        {
            id: 5,
            nombre: "Iniciando en SQL",
            duracion: "80hs",
            precio: "2000",
            img: "../../img/cardImages/sql-logo.png",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
            requisitos: "Ninguno",
            dataname: "item-data",
        },
        {
            id: 6,
            nombre: "Iniciando en Photoshop",
            duracion: "50hs",
            precio: "1500",
            img: "../../img/cardImages/photoshop-logo.png",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
            requisitos: "Ninguno",
            dataname: "item-disenio",
        },
        {
            id: 7,
            nombre: "Iniciando en Python",
            duracion: "60hs",
            precio: "1800",
            img: "../../img/cardImages/Python_logo_icon.png",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
            requisitos: "Ninguno",
            dataname: "item-programacion",
        },
        {
            id: 8,
            nombre: "Iniciando en VueJS",
            duracion: "70hs",
            precio: "1600",
            img: "../../img/cardImages/vueJs-logo.png",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
            requisitos: "Ninguno",
            dataname: "item-programacion",
        },
        {
            id: 9,
            nombre: "Iniciando en Scala",
            duracion: "60hs",
            precio: "1900",
            img: "../../img/cardImages/Scala-logo.png",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
            requisitos: "Ninguno",
            dataname: "item-data"
        },
        {
            id: 10,
            nombre: "Iniciando en Express",
            duracion: "50hs",
            precio: "1300",
            img: "../../img/cardImages/adobe-express.png",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate vitae, dolor provident minima consequuntur a inventore necessitatibus temporibus voluptatem",
            requisitos: "Ninguno",
            dataname: "item-disenio",
        }
    ];


localStorage.setItem("cursos", JSON.stringify(datosDeLosCursos));


function mostrarCursos(){
    const datosDeLosCursos = JSON.parse(localStorage.getItem("cursos"));
    const cursosContainer = document.getElementById('slider');
    cursosContainer.innerHTML = '';
    datosDeLosCursos.forEach((item) => {
        const ContenedorDeCurso = document.createElement('div');
        ContenedorDeCurso.classList.add("cursos-info-container");
        ContenedorDeCurso.dataset.name = item.dataname;
        ContenedorDeCurso.innerHTML =  `<div class="contenedor-imagen__curso">
            <img src="${item.img}" alt="${item.nombre}" />
        </div>
        <div class="cursos-info__detalles">
            <p class="cursos-info__horas">${item.duracion}</p>
            <div class="cursos-info__contenedor__titulo-detalles">
                <p class="cursos-info__titulo">
                    ${item.nombre}
                </p>
                <a href="#js-descripcion__contenido" onclick="mostrarDetalles(${item.id})">Ver Detalles</a>
            </div>
        </div>
        <div class="precio-cursos">
        <button class="boton-inscripcion" id="JS-botonCompra" onclick="agregarAlCarrito(${item.id})">Comprar</button>
        <p class="precio">$<span id="precioJavascript">${item.precio}</span></p>
        </div>
    </div>`

    cursosContainer.appendChild(ContenedorDeCurso);
    });
}
mostrarCursos();

const botonesFiltro = document.querySelectorAll(".contenedor-filtros button");
const itemsFiltrables = document.querySelectorAll(".slider .cursos-info-container");



const botonCompra = document.getElementById('JS-botonCompra');
let carritoDeCompras = JSON.parse(localStorage.getItem('carrito')) || [];
function agregarAlCarrito(id) {
    const agregadoAlCarrito = document.getElementById('JS-agregadoAlCarrito');
    console.log(carritoDeCompras);
    const curso = datosDeLosCursos.find(c => c.id === id);
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

function mostrarDetalles(id){
    const cursos = JSON.parse(localStorage.getItem("cursos"));
    const cursoSeleccionado = cursos.find(curso => curso.id === id);
    cursoSeleccionado.innerHTML = '';

    document.getElementById("js-imagen-curso").scr = cursoSeleccionado.img;
    document.getElementById("js-titulo-curso").innerHTML = cursoSeleccionado.nombre;
    document.getElementById("js-valor-curso").innerHTML = cursoSeleccionado.precio;
    document.getElementById("js-duracion-curso").innerHTML = cursoSeleccionado.duracion;
    document.getElementById("js-descripcion-curso").innerHTML = cursoSeleccionado.descripcion;
    document.getElementById("js-requisitos-curso").innerHTML = cursoSeleccionado.requisitos;
}

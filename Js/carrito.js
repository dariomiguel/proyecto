const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
const cursos = JSON.parse(localStorage.getItem("cursos"));
const estadoDeSesion = localStorage.getItem("estadoDeSesion");
let indice = localStorage.getItem("idUsuario");
const compraHecha = document.getElementById("JS-compraRealizada");
let alumnosInscriptos = [];
let montoTotalEmpresas = [];
let cursosAInscribirse = 0;
if (estadoDeSesion) {
    cursosAlmacenados = JSON.parse(localStorage.getItem(`carrito_${usuarioLogueado.correo}`)) || [];
    alumnosInscriptos = JSON.parse(localStorage.getItem(`alumnosInscriptos_${usuarioLogueado.correo}`)) || [];
    montoTotalEmpresas = JSON.parse(localStorage.getItem(`precioTotal_${usuarioLogueado.correo}`)) || 0;
    cursosAInscribirse = JSON.parse(localStorage.getItem(`CursosEmpresas_${usuarioLogueado.correo}`)) || [];
    console.log(cursosAlmacenados);
}

console.log(alumnosInscriptos, montoTotalEmpresas, cursosAInscribirse);
const contenedorCarrito = document.getElementById("JS-contenedorCursos");
const carritoVacio = document.getElementById("JS-carritoVacio");
let montoTotalCarrito = 0;
let descuentoPorGiftcards = parseFloat(localStorage.getItem("descuento")) || 0;
let total = 0;
const PrecioTotal = document.getElementById("JS-precioTotal");
console.log(PrecioTotal);
let giftcard;
let cursosDelUsuario = [];
let cursosDelUsiarioEmpresa = [];
if (usuarioLogueado != null) {
    cursosDelUsuario = JSON.parse(localStorage.getItem(`cursosDe_${usuarioLogueado.correo}`)) || [];
    cursosDelUsiarioEmpresa = JSON.parse(localStorage.getItem(`CursosEmpresaDe_${usuarioLogueado.correo}`)) || [];
    if (estadoDeSesion) {
        giftcard = JSON.parse(localStorage.getItem(`giftcardParaComprar${usuarioLogueado.correo}`));
        console.log(giftcard);
    }
}

const usuariosRegistrados = JSON.parse(localStorage.getItem("BDUsuarios"));

function mostrarCarrito() {
    if (contenedorCarrito) {
        montoTotalCarrito = 0;
        contenedorCarrito.innerHTML = "";
        console.log(cursosAlmacenados.length);
        console.log(giftcard);
        if (cursosAlmacenados.length === 0 && !giftcard && cursosAInscribirse.length === 0) {
            const ContenedorCarritoVacio = document.createElement("div");
            ContenedorCarritoVacio.classList.add("cursos");
            ContenedorCarritoVacio.id = "JS-carritoVacio";
            ContenedorCarritoVacio.innerHTML = `
            <img class="carrito-vacio" src="../img/empty-cart_2762885.png">
            <p class="cesta-vacia">Tu cesta está vacía!</p>
                <a class="boton-comprar" href="../index.html">
                    <button class="boton-comprar">Seguir comprando</button>
                    </a>
        </div>`;
            cambiarElMontoTotalEnTiempoReal();
            cambiarElMontoDeDescuentoEnTiempoReal();
            actualizarElTotal();

            contenedorCarrito.appendChild(ContenedorCarritoVacio);
        } else {
            carritoVacio.classList.add("oculto");
            cursosAlmacenados.forEach((item) => {
                const contenedorCurso = document.createElement("div");
                contenedorCurso.classList.add("cursos-en-carrito");
                contenedorCurso.id = "carrito";
                contenedorCurso.innerHTML = `<img class="imagen-curso" src="${item.img}" />
                <div class="info-curso">
                    <h2 class="titulo-curso">${item.nombre}</h2>
                    <div class="textos-curso">
                        <p class="texto-curso">${item.duracion}</p>
                        <p class="texto-curso">Cantidad: 1</p>
                        <p class="texto-curso">Precio: $${item.precio}</p>
                    </div>
                </div>
                <div class="botones-curso">
                    <a href="#js-descripcion__contenido"><button class="boton-curso" onclick="mostrarDetalles(${item.id})">Ver detalles</button></a>
                    <button class="boton-curso" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
                </div>
            </div>`;
                montoTotalCarrito += parseFloat(item.precio);
                contenedorCarrito.appendChild(contenedorCurso);
            });
            if (giftcard) {
                const contenedorCurso = document.createElement("div");
                contenedorCurso.classList.add("cursos-en-carrito");
                contenedorCurso.id = "carrito";
                contenedorCurso.innerHTML = `<img class="imagen-curso" src="../img/giftcard.png" />
                <div class="info-curso">
                    <h2 class="titulo-curso">Giftcard para ${giftcard.nombre}</h2>
                    <div class="textos-curso">
                        <p class="texto-curso">Cantidad: 1</p>
                        <p class="texto-curso">Precio: $${giftcard.monto}</p>
                        </div>
                </div>
                <div class="botones-curso">
                    <button class="boton-curso" onclick="eliminarGiftcard()">Eliminar</button>
                </div>
            </div>`;
                contenedorCarrito.appendChild(contenedorCurso);
                montoTotalCarrito += parseFloat(giftcard.monto);
            }
            if(cursosAInscribirse.length !== 0){
                console.log('hola');
                const contenedorCurso = document.createElement("div");
                contenedorCurso.classList.add("cursos-en-carrito");
                contenedorCurso.id = "carrito";
                contenedorCurso.innerHTML = `<img class="imagen-curso" src="${cursosAInscribirse.img}" />
                <div class="info-curso">
                    <h2 class="titulo-curso">${cursosAInscribirse.nombre}</h2>
                    <div class="textos-curso">
                        <p class="texto-curso">${cursosAInscribirse.duracion}</p>
                        <p class="texto-curso">Cantidad: ${alumnosInscriptos.length}</p>
                        <p class="texto-curso">Precio: $${cursosAInscribirse.precio} c/u</p>
                    </div>
                </div>
                <p class="texto-curso empresas">Para empresas</p>
                <div class="botones-curso">
                    <a href="#js-descripcion__contenido"><button class="boton-curso" onclick="mostrarDetalles(${cursosAInscribirse.id})">Ver detalles</button></a>
                    <button class="boton-curso" onclick="eliminarCursoEmpresa()">Eliminar</button>
                    <button class="boton-curso" onclick="verInscriptos()">Ver inscriptos</button>
                </div> 
            </div>`;
            contenedorCarrito.appendChild(contenedorCurso);
            montoTotalCarrito += montoTotalEmpresas;
            }
        }
        actualizarElTotal();
        cambiarElMontoTotalEnTiempoReal();
        cambiarElMontoDeDescuentoEnTiempoReal();

        localStorage.setItem("precioOriginal", JSON.stringify(montoTotalCarrito));
    }
}

const precioOriginal = document.getElementById("JS-montoTotal");

function cambiarElMontoTotalEnTiempoReal() {
    if (contenedorCarrito) {
        precioOriginal.textContent =
            montoTotalCarrito <= 0 ? "$0.00 ARS" : `$${montoTotalCarrito.toFixed(2)} ARS`;
        localStorage.setItem("precioOriginal", JSON.stringify(montoTotalCarrito));
    }
}

function eliminarGiftcard() {
    giftcard = null;
    localStorage.removeItem(`giftcardParaComprar${usuarioLogueado.correo}`);
    mostrarCarrito();
}

function cambiarElMontoDeDescuentoEnTiempoReal() {
    const descuento = document.getElementById("JS-descuentoPorGiftcard");
    descuento.textContent =
        descuentoPorGiftcards === 0 ? "$0.00 ARS" : `$${descuentoPorGiftcards.toFixed(2)} ARS`;
}


function generarDescuentoPorGiftcard() {
    let indice = localStorage.getItem("idUsuario");
    const inputCodigo = document.getElementById("JS-input-codigo");
    const botonAplicar = document.getElementById("JS-aplicar");
    const giftcardDelUsuario = usuarioLogueado.giftcard;
    console.log(giftcardDelUsuario);
    if (giftcardDelUsuario) {
        botonAplicar.addEventListener("click", (event) => {
            if (
                inputCodigo.value === giftcardDelUsuario.codigoDeLaGiftcard &&
                !giftcardDelUsuario.utilizada
            ) {
                descuentoPorGiftcards = parseFloat(giftcardDelUsuario.monto);
                giftcardDelUsuario.utilizada = true;
                usuarioLogueado.giftcard = giftcardDelUsuario;
                usuariosRegistrados[indice] = usuarioLogueado;
                localStorage.setItem("BDUsuarios", JSON.stringify(usuariosRegistrados));
                localStorage.setItem("descuento", JSON.stringify(descuentoPorGiftcards));
                cambiarElMontoTotalEnTiempoReal();
                cambiarElMontoDeDescuentoEnTiempoReal();
                actualizarElTotal();
            }
        });
    } else {
        console.error("No se encontró ninguna giftcard válida.");
    }
}

function actualizarElTotal() {
    total = montoTotalCarrito - descuentoPorGiftcards;
    PrecioTotal.textContent = total <= 0 ? "$0.00 ARS" : `$${total.toFixed(2)} ARS`;
    localStorage.setItem("total", JSON.stringify(total));
    console.log(JSON.parse(localStorage.getItem("total")));
}

function eliminarDescuento() {
    if (usuarioLogueado.giftcard) {
        console.log("asd");
        console.log(descuentoPorGiftcards);
        usuarioLogueado.giftcard.utilizada = false;
        usuariosRegistrados[indice] = usuarioLogueado;
        localStorage.setItem("BDUsuarios", JSON.stringify(usuariosRegistrados));
        descuentoPorGiftcards = 0;
        localStorage.setItem("descuento", JSON.stringify(descuentoPorGiftcards));
        console.log(descuentoPorGiftcards);
        cambiarElMontoTotalEnTiempoReal();
        actualizarElTotal();
        cambiarElMontoDeDescuentoEnTiempoReal();
    }
}

function eliminarDelCarrito(id) {
    cursosAlmacenados = cursosAlmacenados.filter((item) => item.id !== id);
    localStorage.setItem(`carrito_${usuarioLogueado.correo}`, JSON.stringify(cursosAlmacenados));
    actualizarContador();
    mostrarCarrito();
    mostrarContadorDinamico();
}

function eliminarCursoEmpresa(){
    cursosAInscribirse = null;
    localStorage.setItem(`CursosEmpresas_${usuarioLogueado.correo}`, JSON.stringify(cursosAInscribirse));
    actualizarContador();
    mostrarCarrito();
    mostrarContadorDinamico();
}



function actualizarContador(){
    let contador = parseInt(sessionStorage.getItem(`contador_${usuarioLogueado.correo}`)) || 0;
    contador -= 1;
    sessionStorage.setItem(`contador_${usuarioLogueado.correo}`, contador);
}

function vaciarCarrito() {
    giftcard = null;
    localStorage.setItem(`giftcardParaComprar${usuarioLogueado.correo}`, JSON.stringify(giftcard));
    console.log(giftcard);
    cursosAlmacenados = [];
    localStorage.setItem(`carrito_${usuarioLogueado.correo}`, JSON.stringify(cursosAlmacenados));
    sessionStorage.removeItem(`contador_${usuarioLogueado.correo}`)
    console.log(cursosAlmacenados);
    alumnosInscriptos = [];
    montoTotalEmpresas = [];
    cursosAInscribirse = 0;
    localStorage.setItem(`alumnosInscriptos_${usuarioLogueado.correo}`, JSON.stringify(alumnosInscriptos));
    localStorage.setItem(`precioTotal_${usuarioLogueado.correo}`, JSON.stringify(montoTotalEmpresas));
    localStorage.setItem(`CursosEmpresas_${usuarioLogueado.correo}`, JSON.stringify(cursosAInscribirse));

    mostrarCarrito();
}

function guardarCursosEnElUsuario() {
    if(cursosAlmacenados){
    cursosDelUsuario = cursosDelUsuario.concat(cursosAlmacenados);
    }
    console.log(cursosAInscribirse);
    cursosDelUsuarioEmpresa = cursosDelUsiarioEmpresa.concat(cursosAInscribirse);
    console.log(cursosDelUsuario);
    console.log(cursos)
    console.log(cursosAlmacenados);
    listaDeUsuarios = JSON.parse(localStorage.getItem(`alumnosInscriptos_${usuarioLogueado.correo}`));
    console.log()
    localStorage.setItem(`listaDeUsuarios_${usuarioLogueado.correo}${cursosAInscribirse}`, JSON.stringify(listaDeUsuarios));
    localStorage.setItem(`CursosEmpresaDe_${usuarioLogueado.correo}`, JSON.stringify(cursosDelUsuarioEmpresa));
    console.log(cursosDelUsiarioEmpresa, listaDeUsuarios);
    localStorage.setItem(`cursosDe_${usuarioLogueado.correo}`, JSON.stringify(cursosDelUsuario));
}


const overlayCarrito = document.getElementById('JS-overlay');
const inscriptoContenedor = document.getElementById('JS-contenedorInscripto');
function verInscriptos() {
    overlayCarrito.style.display = 'grid';
    inscriptoContenedor.innerHTML = '';  
    alumnosInscriptos.forEach((item) => {
        const contenedorInscriptos = document.createElement('div');
        contenedorInscriptos.classList.add('inscripto-contenedor');
        contenedorInscriptos.innerHTML = `<label for="${item.dni}">${item.nombre} ${item.apellido} - DNI: ${item.dni}</label>`;
        inscriptoContenedor.appendChild(contenedorInscriptos);
    });
}

function cerrarOverlay(){
    overlayCarrito.style.display = 'none';
}


function mostrarContadorDinamico(){
    let contadorCarrito = document.querySelector(".contadorCarrito");
    let contador = parseInt(sessionStorage.getItem("contador")) || 0;
    contadorCarrito.innerHTML=`${contador}`;
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

if (compraHecha) {
    guardarCursosEnElUsuario();
    vaciarCarrito();
}
mostrarCarrito();


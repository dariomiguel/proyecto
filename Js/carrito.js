
const cursos = JSON.parse(localStorage.getItem('cursos'));
let cursosAlmacenados = JSON.parse(localStorage.getItem('carrito')) || [];
console.log(cursosAlmacenados);
const contenedorCarrito = document.getElementById('JS-contenedorCursos');
const carritoVacio = document.getElementById('JS-carritoVacio');

function mostrarCarrito() {
    if(contenedorCarrito){
        contenedorCarrito.innerHTML = '';
        if (cursosAlmacenados.length === 0) {
            const carritoVacio = document.createElement('div');
            carritoVacio.classList.add('cursos');
            carritoVacio.id = 'JS-carritoVacio';
            carritoVacio.innerHTML = `
            <img class="carrito-vacio" src="../img/empty-cart_2762885.png">
            <p class="cesta-vacia">Tu cesta está vacía!</p>
                <a class="boton-comprar" href="../index.html">
                    <button class="boton-comprar">Seguir comprando</button>
                    </a>
        </div>`
        contenedorCarrito.appendChild(carritoVacio);
        } else {
            carritoVacio.classList.add('oculto');
            cursosAlmacenados.forEach((item) => {
                const contenedorCurso = document.createElement('div');
                contenedorCurso.classList.add('cursos-en-carrito');
                contenedorCurso.id = 'carrito';
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
                    <button class="boton-curso">Ver detalles</button>
                    <button class="boton-curso" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
                </div>
            </div>`; 
                contenedorCarrito.appendChild(contenedorCurso);
            });
        } 
    }
}

function eliminarDelCarrito(id){
    cursosAlmacenados = cursosAlmacenados.filter(item => item.id !== id);
localStorage.setItem('carrito', JSON.stringify(cursosAlmacenados));
mostrarCarrito();
}

mostrarCarrito();



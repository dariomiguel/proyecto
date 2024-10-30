
const cursos = JSON.parse(localStorage.getItem('cursos'));
let cursosAlmacenados = JSON.parse(localStorage.getItem('carrito')) || [];
console.log(cursosAlmacenados);
const contenedorCarrito = document.getElementById('JS-contenedorCursos');
const carritoVacio = document.getElementById('JS-carritoVacio');
let montoTotal = 0;
let descuentoPorGiftcards = parseFloat(localStorage.getItem('descuento')) || 0;
const giftcard = JSON.parse(localStorage.getItem('giftcard'));
console.log(giftcard);


function mostrarCarrito() {
    if(contenedorCarrito){
        montoTotal = 0;
        contenedorCarrito.innerHTML = '';
        if (cursosAlmacenados.length === 0) {
            const ContenedorCarritoVacio = document.createElement('div');
            ContenedorCarritoVacio.classList.add('cursos');
            ContenedorCarritoVacio.id = 'JS-carritoVacio';
            ContenedorCarritoVacio.innerHTML = `
            <img class="carrito-vacio" src="../img/empty-cart_2762885.png">
            <p class="cesta-vacia">Tu cesta está vacía!</p>
                <a class="boton-comprar" href="../index.html">
                    <button class="boton-comprar">Seguir comprando</button>
                    </a>
        </div>`
        cambiarElMontoTotalEnTiempoReal();
        cambiarElMontoDeDescuentoEnTiempoReal();
        contenedorCarrito.appendChild(ContenedorCarritoVacio);
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
                montoTotal += parseFloat(item.precio);
                contenedorCarrito.appendChild(contenedorCurso);

            });
        } 
        cambiarElMontoTotalEnTiempoReal();
        cambiarElMontoDeDescuentoEnTiempoReal();
        localStorage.setItem('precioOriginal', JSON.stringify(montoTotal));
        }
    }


    const precioOriginal = document.getElementById('JS-montoTotal');

function cambiarElMontoTotalEnTiempoReal(){
    if(contenedorCarrito){
        montoTotal -= descuentoPorGiftcards;
        precioOriginal.textContent = montoTotal  <= 0 ? '$0.00 US$' : `$${montoTotal.toFixed(2)} US$`;
        localStorage.setItem('precioOriginal', JSON.stringify(montoTotal));
    }   
}

function cambiarElMontoDeDescuentoEnTiempoReal(){
    const descuento = document.getElementById('JS-descuentoPorGiftcard');
    descuento.textContent = descuentoPorGiftcards === 0 ? '$0.00 US$' : `$${descuentoPorGiftcards.toFixed(2)} US$`;
}

function generarDescuentoPorGiftcard(){
    const inputCodigo = document.getElementById('JS-input-codigo');
    const botonAplicar = document.getElementById('JS-aplicar');
    if(giftcard){
        botonAplicar.addEventListener('click', (event) =>{
            if (inputCodigo.value === giftcard.codigoDeLaGiftcard && !giftcard.utilizada) {
                descuentoPorGiftcards += parseFloat(giftcard.monto);
                giftcard.utilizada = true;
                localStorage.setItem('giftcard', JSON.stringify(giftcard));
                localStorage.setItem('descuento', JSON.stringify(descuentoPorGiftcards));
                cambiarElMontoTotalEnTiempoReal();
                cambiarElMontoDeDescuentoEnTiempoReal();
            }
        });
    }else {
        console.error('No se encontró ninguna giftcard válida.');
    }
}


    function eliminarDelCarrito(id){
        cursosAlmacenados = cursosAlmacenados.filter(item => item.id !== id);
    localStorage.setItem('carrito', JSON.stringify(cursosAlmacenados));
    mostrarCarrito();
    }
    
    mostrarCarrito();




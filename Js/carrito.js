const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
const cursos = JSON.parse(localStorage.getItem('cursos'));
const estadoDeSesion = localStorage.getItem("estadoDeSesion");
let indice = localStorage.getItem("idUsuario");
if(estadoDeSesion){
cursosAlmacenados = JSON.parse(localStorage.getItem(`carrito_${usuarioLogueado.correo}`)) || [];
console.log(cursosAlmacenados);
}

const contenedorCarrito = document.getElementById('JS-contenedorCursos');
const carritoVacio = document.getElementById('JS-carritoVacio');
let montoTotal = 0;
let descuentoPorGiftcards = parseFloat(localStorage.getItem('descuento')) || 0;
let total = 0;
const PrecioTotal = document.getElementById('JS-precioTotal');
console.log(PrecioTotal);
let giftcard;
if(estadoDeSesion){
giftcard = JSON.parse(localStorage.getItem(`giftcardParaComprar${usuarioLogueado.correo}`));
console.log(giftcard);
}

const usuariosRegistrados = JSON.parse(localStorage.getItem('BDUsuarios'));


function mostrarCarrito() {
    if(contenedorCarrito){
        montoTotal = 0;
        contenedorCarrito.innerHTML = '';
        if (cursosAlmacenados.length === 0 && !giftcard) {
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
        actualizarElTotal();

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
            if(giftcard){
                const contenedorCurso = document.createElement('div');
                contenedorCurso.classList.add('cursos-en-carrito');
                contenedorCurso.id = 'carrito';
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
            montoTotal += parseFloat(giftcard.monto);
            }
        } 
        actualizarElTotal();
        cambiarElMontoTotalEnTiempoReal();
        cambiarElMontoDeDescuentoEnTiempoReal();

        localStorage.setItem('precioOriginal', JSON.stringify(montoTotal));
        }
    }


    const precioOriginal = document.getElementById('JS-montoTotal');

function cambiarElMontoTotalEnTiempoReal(){
    if(contenedorCarrito){
        precioOriginal.textContent = montoTotal  <= 0 ? '$0.00 ARS' : `$${montoTotal.toFixed(2)} ARS`;
        localStorage.setItem('precioOriginal', JSON.stringify(montoTotal));
    }   
}

function eliminarGiftcard(){
    giftcard = {};
    localStorage.removeItem(`giftcardParaComprar${usuarioLogueado.correo}`);
    mostrarCarrito();
}

function cambiarElMontoDeDescuentoEnTiempoReal(){
    const descuento = document.getElementById('JS-descuentoPorGiftcard');
    descuento.textContent = descuentoPorGiftcards === 0 ? '$0.00 ARS' : `$${descuentoPorGiftcards.toFixed(2)} ARS`;
}

function generarDescuentoPorGiftcard(){
    let indice = localStorage.getItem("idUsuario");
    const inputCodigo = document.getElementById('JS-input-codigo');
    const botonAplicar = document.getElementById('JS-aplicar');
    const giftcardDelUsuario = usuarioLogueado.giftcard;
    console.log(giftcardDelUsuario);
    if(giftcardDelUsuario){
        botonAplicar.addEventListener('click', (event) =>{
            if (inputCodigo.value === giftcardDelUsuario.codigoDeLaGiftcard && !giftcardDelUsuario.utilizada) {
                descuentoPorGiftcards = parseFloat(giftcardDelUsuario.monto);
                giftcardDelUsuario.utilizada = true;
                usuarioLogueado.giftcard = giftcardDelUsuario;
                usuariosRegistrados[indice] = usuarioLogueado;
                localStorage.setItem('BDUsuarios', JSON.stringify(usuariosRegistrados));
                localStorage.setItem('descuento', JSON.stringify(descuentoPorGiftcards));
                cambiarElMontoTotalEnTiempoReal();
                cambiarElMontoDeDescuentoEnTiempoReal();
                actualizarElTotal();
            }
        });
    }else {
        console.error('No se encontró ninguna giftcard válida.');
    }
}

function actualizarElTotal(){
    total = montoTotal - descuentoPorGiftcards;
    PrecioTotal.textContent = total <= 0 ? '$0.00 ARS' : `$${total.toFixed(2)} ARS`;
    localStorage.setItem('total', JSON.stringify(total));
    console.log(JSON.parse(localStorage.getItem('total')));
}

function eliminarDescuento(){
    if(giftcard){
    giftcard.utilizada = false;
    usuarioLogueado.giftcard = giftcard;
    usuariosRegistrados[indice] = usuarioLogueado;
    localStorage.setItem('BDUsuarios', JSON.stringify(usuariosRegistrados));
    descuentoPorGiftcards = 0;
    localStorage.setItem('descuento', JSON.stringify(descuentoPorGiftcards));
    console.log(descuentoPorGiftcards);
    cambiarElMontoTotalEnTiempoReal();
    actualizarElTotal();
    cambiarElMontoDeDescuentoEnTiempoReal();
    }
}

    function eliminarDelCarrito(id){
    cursosAlmacenados = cursosAlmacenados.filter(item => item.id !== id);
    localStorage.setItem(`carrito_${usuarioLogueado.correo}`, JSON.stringify(cursosAlmacenados));
    mostrarCarrito();
    }
    
    mostrarCarrito();




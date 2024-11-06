const formulario = document.getElementById('formularioGiftcard');
const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
const baseDeDatosGiftcard = JSON.parse(localStorage.getItem('BDUsuarios'));
if (formulario){
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
 
    const giftcardHecha = document.getElementById('giftcard');
    const giftcardHechaUbicacion = document.getElementById('giftcardPrecio');
    const giftcard = {
        nombre: document.getElementById('input__destinatario--Id').value,
        email: document.getElementById('input__email--Id').value,
        colorLetra: document.getElementById('giftcardTexto').style.color,
        tamañoFuente: document.getElementById('giftcardFuente').style.fontSize,
        monto: document.getElementById('inputMonto').value,
        top: giftcardHechaUbicacion.style.top,
        right: giftcardHechaUbicacion.style.right,
        left: giftcardHechaUbicacion.style.left,
        bottom: giftcardHechaUbicacion.style.bottom,
        fondo: giftcardHecha.style.backgroundColor,
        codigoDeLaGiftcard: '7553608',
        utilizada: false
    };
    const mensajeDeErrorGiftcard = document.getElementById('mensajeDeErrorGiftcard');
    const existe = baseDeDatosGiftcard.find(item => item.correo === giftcard.email);
    console.log(existe);
        if(!existe){
            mensajeDeErrorGiftcard.classList.add('visible');
            setTimeout(() =>{
                mensajeDeErrorGiftcard.classList.remove('visible');
            }, 7000);
        } else{
            localStorage.setItem(`giftcardParaComprar${usuarioLogueado.correo}`, JSON.stringify(giftcard));
            console.log(localStorage.getItem(`giftcardParaComprar${usuarioLogueado.correo}`));
            formulario.submit();
        }
});
}
const giftcardContainer = document.getElementById('JS-GiftcardContainer');

function generarGiftcard() {
    const giftcard = JSON.parse(localStorage.getItem(`giftcardParaComprar${usuarioLogueado.correo}`));
    console.log(giftcardContainer); 
    const contenedor = document.createElement('div');
    const fontSizeNegrita = parseFloat(giftcard.tamañoFuente) * 2;
    contenedor.id = 'giftcard';
    contenedor.classList.add('giftcard-destinatario');
    contenedor.style.backgroundColor = giftcard.fondo;
    contenedor.innerHTML = `
        <div class="giftcard-precio" id="giftcardPrecio" style="top: ${giftcard.top}; right: ${giftcard.right}; left: ${giftcard.left}; bottom: ${giftcard.bottom};">
            <p id="monto">$${giftcard.monto}.-</p>
        </div>
        <div class="contenedor-texto" id="giftcardTexto" style="color: ${giftcard.colorLetra}">
            <p class="giftcard-texto" id="giftcardFuente" style="font-size: ${giftcard.tamañoFuente}">
                GIFTCARD para <br> <span class="negrita" style="font-size: ${fontSizeNegrita}rem" id="destinatario">${giftcard.nombre}</span>
            </p>
            <p>Tu código de descuento es: <span>${giftcard.codigoDeLaGiftcard}</span>
        </div>`
    giftcardContainer.appendChild(contenedor);
}

function cambiarColorDeLaGiftCard(){
    const radios = document.querySelectorAll('input[name="fondos"]');
    const giftcard = document.getElementById('giftcard');

    radios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            giftcard.style.backgroundColor = event.target.value;
        });
    });
}

function cambiarColorDelTextoDeLaGiftCard(){
    const radios = document.querySelectorAll('input[name="colores"]');
    const giftcardTexto = document.getElementById('giftcardTexto');

    radios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            giftcardTexto.style.color = event.target.value;
        });
    });
}

function cambiarTamañoDelTextoDeLaGiftCard(){
    const radios = document.querySelectorAll('input[name="fuentes"]');
    const giftcardFuentes = document.getElementById('giftcardFuente');
    const destinatario = document.getElementById('destinatario');

    radios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const tamañoFuente = parseFloat(event.target.value);
            giftcardFuentes.style.fontSize = event.target.value;
            destinatario.style.fontSize = (tamañoFuente * 2) + 'rem';
        });
    });
}

function cambiarElNombreDelDestinatarioEnTiempoReal(){
    const inputDestinatario = document.getElementById('input__destinatario--Id');
    const destinatario = document.getElementById('destinatario');

    inputDestinatario.addEventListener('input', function() {
        destinatario.textContent = inputDestinatario.value || 'destinatario';
    });
}

function cambiarElPrecioDeLaGiftcardEnTiempoReal(){
    const inputMonto = document.getElementById('inputMonto');
    const monto = document.getElementById('monto');


    inputMonto.addEventListener('input', (event) => {
        let valorDeLaGiftcard = event.target.value.replace(/[^0-9]/g, '').slice(0, 6);
        if (valorDeLaGiftcard.length > 0 && valorDeLaGiftcard[0] < '1') {
            valorDeLaGiftcard = '';
        }
        inputMonto.value = valorDeLaGiftcard;
        monto.textContent = valorDeLaGiftcard ? `$${valorDeLaGiftcard}.-` : '$0000.-';
    });
}

    function cambiarLaPosicionDelMonto() {
        const divMonto = document.getElementById('giftcardPrecio');
        const radios = document.querySelectorAll('input[name="ubicacion"]');
    
        radios.forEach(radio => {    
            radio.addEventListener('change', (event) => {
                const value = event.target.value;
                divMonto.style.top = 'inherit';
                divMonto.style.right = 'inherit';
                divMonto.style.bottom = 'inherit';
                divMonto.style.left = 'inherit';
                
                switch (value) {
                    case 'abajo-derecha':
                        divMonto.style.bottom = '0';
                        divMonto.style.right = '0';
                        break;
                    case 'arriba-izquierda':
                        divMonto.style.top = '0';
                        divMonto.style.left = '0';
                        break;
                    case 'arriba-derecha':
                        divMonto.style.top = '0';
                        divMonto.style.right = '0';
                        break;
                    default:
                        break;
                }
            });
        });
    }



if(formulario){
cambiarLaPosicionDelMonto();
cambiarElPrecioDeLaGiftcardEnTiempoReal();
cambiarElNombreDelDestinatarioEnTiempoReal();
cambiarTamañoDelTextoDeLaGiftCard();
cambiarColorDelTextoDeLaGiftCard();
cambiarColorDeLaGiftCard();
}
if(giftcardContainer){
generarGiftcard();
}

function mostrarContadorDinamico(){
    let contadorCarrito = document.querySelector(".contadorCarrito");
    let contador = parseInt(sessionStorage.getItem(`contador_${usuarioLogueado.correo}`)) || 0;
    contadorCarrito.innerHTML=`${contador}`;
}

mostrarContadorDinamico();
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

cambiarLaPosicionDelMonto();
cambiarElPrecioDeLaGiftcardEnTiempoReal();
cambiarElNombreDelDestinatarioEnTiempoReal();
cambiarTamañoDelTextoDeLaGiftCard();
cambiarColorDelTextoDeLaGiftCard();
cambiarColorDeLaGiftCard();
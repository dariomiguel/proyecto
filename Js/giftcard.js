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

cambiarTamañoDelTextoDeLaGiftCard();
cambiarColorDelTextoDeLaGiftCard();
cambiarColorDeLaGiftCard();
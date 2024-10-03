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

cambiarColorDelTextoDeLaGiftCard();
cambiarColorDeLaGiftCard();
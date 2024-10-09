function desplegarTarjeta(){
    const datosTarjeta = document.getElementById('datosDeTarjeta');
    const mercadoPago = document.getElementById('datosMercadoPago');
    const boton = document.getElementById('botonConfirmar');
    const formulario = document.getElementById('formularioDePago');
    const inputs = document.querySelectorAll('input.required');

    inputs.forEach(input => {
        input.setAttribute('required', ''); 
    });

    datosTarjeta.style.display = 'block';
    mercadoPago.style.display = 'none';
    boton.value = 'Pagar'
    formulario.action = './pago_realizado.html';

}

function desplegarMercadoPago(){
    const datosTarjeta = document.getElementById('datosDeTarjeta');
    const mercadoPago = document.getElementById('datosMercadoPago');
    const boton = document.getElementById('botonConfirmar');
    const formulario = document.getElementById('formularioDePago');
    const inputs = document.querySelectorAll('input.required');

    inputs.forEach(input => {
        input.removeAttribute('required') 
    });

    formulario.action = 'https://www.mercadopago.com.ar/home';
    boton.value = 'Continuar'
    datosTarjeta.style.display = 'none';
    mercadoPago.style.display = 'block';
}
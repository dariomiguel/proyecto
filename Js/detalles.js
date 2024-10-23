function ampliarUnidades(opcionId){
    const contenedorUno = document.getElementById('unidadUno');
    const contenedorDos = document.getElementById('unidadDos');
    const contenedorTres = document.getElementById('unidadTres');


    contenedorUno.classList.remove('activo');
    contenedorDos.classList.remove('activo');
    contenedorTres.classList.remove('activo');

    switch(opcionId){
        case 'unidadUno':
            contenedorUno.classList.add('activo');
            break;
        case 'unidadDos':
            contenedorDos.classList.add('activo');
            break;
        case 'unidadTres':
            contenedorTres.classList.add('activo');
            break;
        default:
            break;
    }
}
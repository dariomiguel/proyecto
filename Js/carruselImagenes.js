let sliderInner = document.querySelector(".contenedorImagenesSlider");
let imagenes = document.querySelectorAll(".imagenCarrusel");
let opciones = document.querySelectorAll(".opcionCarrusel");
let index = 1;


function cambiarImagen(){
    let cambio = index * -100;
    sliderInner.style.transform = "translateX(" + cambio +"%)";
    seleccionarInput(index);
    index++;
    
    if(index >= imagenes.length  ){
        index = 0;
    }
}

function seleccionarInput(aux){
    opciones.forEach(opcion =>{
        if(opcion.value == aux ){
            opcion.checked = true;
        }
    })
}

opciones.forEach(opcion =>{
    opcion.addEventListener("change" , seleccionarImagen)
});


function seleccionarImagen(event){
        let valorIndice = event.target.value ;
        let cambio = valorIndice * -100;
        sliderInner.style.transform = "translateX(" + cambio +"%)";
        index = valorIndice;
}

setInterval(cambiarImagen,3000);

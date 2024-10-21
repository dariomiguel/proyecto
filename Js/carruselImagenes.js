let sliderInner = document.querySelector(".contenedorImagenesSlider");
let imagenes = document.querySelectorAll(".imagenCarrusel");
let opciones = document.querySelectorAll(".opcionCarrusel");
let index = 1;


function cambiarImagen(){
    let cambio = index * -100;//CUENTA PARA QUE PASE A LA SIGUIENTE IMAGEN
    sliderInner.style.transform = "translateX(" + cambio +"%)";//CODIGO QUE GENERA EL CAMBIO DE IMAGEN
    seleccionarInput(index);//FUNCION PARA QUE SE SELECCIONE EL INPUT DE ABAJO A MEDIDA QUE CAMBIA LA IMAGEN SOLA
    index++;//AUMENTO DEL INDICE PARA QUE VAYA CAMBIANDO DE IMAGEN
    
    if(index >= imagenes.length  ){//IF QUE SE ASEGURA DE RESETEAR EL INDICE CUANDO LLEGA AL TOPE
        index = 0;
    }
}

function seleccionarInput(aux){//FUNCION QUE HACE QUE SE SELECCIONE EL INPUT AUTOMATICAMENTE A MEDIDA QUE CAMBIAN LAS IMAGENES
    opciones.forEach(opcion =>{//FOREACH PARA RECORRER EL ARRAY DE INPUTS
        if(opcion.value == aux ){//PREGUNTA SI EL VALUE DEL INPUT ES IGUAL INDICE
            opcion.checked = true;//MARCA EL INPUT AUTOMATICAMENTE
        }
    })
}

opciones.forEach(opcion =>{//FOREACH PARA RECCORER EL ARRAY DE INPUTS
    opcion.addEventListener("change" , seleccionarImagen)//LISTENER PARA CUANDO SE SELECCIONA OTRO INPUT 
                                                         //MANUALMENTE QUE LLAME A LA FUNCION
});


function seleccionarImagen(event){
        let valorIndice = event.target.value ;//LE DA EL VALOR DEL INDICE QUE SE SELECCIONO
        let cambio = valorIndice * -100;//REALIZA LA CUENTA PARA IR A ESA IMAGEN
        sliderInner.style.transform = "translateX(" + cambio +"%)";//CODIGO QUE HACE EL CAMBIO DE IMAGEN
        index = valorIndice;//HACE QUE EL INDICE CONTINUE DE LA POSICION SELECCIONADA
}

setInterval(cambiarImagen,3000);//HACE QUE LA FUNCION cambiarImagen SE REPITA CADA 3SEG

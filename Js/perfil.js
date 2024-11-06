let listaDeUsuarios = JSON.parse(localStorage.getItem("BDUsuarios"));
let indice = localStorage.getItem("idUsuario");
let usuarioEnSesion = JSON.parse(localStorage.getItem("usuarioLogueado"));
const cursosDelUsuarioPerfil = JSON.parse(localStorage.getItem(`cursosDe_${listaDeUsuarios[indice].correo}`));
let contenedor = document.getElementById("datos-basicosId");
let botonCerrarSesion = document.getElementById("btn__cerrar-sesion");
let botonEliminarPerfil = document.getElementById("btn__eliminar-perfil");

let nombre = document.createElement("p");
let usuario = document.createElement("p");
let correo = document.createElement("p");

nombre.textContent = "Nombre:" + listaDeUsuarios[indice].nombre;
contenedor.appendChild(nombre);

usuario.textContent = "Usuario:" + listaDeUsuarios[indice].nombreDeUsuario;
contenedor.appendChild(usuario);

correo.textContent = "Correo:" + listaDeUsuarios[indice].correo;
contenedor.appendChild(correo);

botonCerrarSesion.addEventListener("click", function () {
    localStorage.removeItem("estadoDeSesion");
    window.location.href = "../index.html";
});

botonEliminarPerfil.addEventListener("click", function () {
    // Preguntar al usuario si desea eliminar el elemento
    let confirmacion = confirm("¿Estás seguro de que deseas eliminar este elemento?");

    // Si el usuario acepta (presiona "Aceptar")
    if (confirmacion) {
        localStorage.removeItem("estadoDeSesion");
        localStorage.removeItem("idUsuario");
        localStorage.removeItem(`carrito_${usuarioEnSesion.correo}`);
        listaDeUsuarios.splice(indice, 1);
        actualizarContador();
        localStorage.setItem("BDUsuarios", JSON.stringify(listaDeUsuarios));

        window.location.href = "../index.html";
    }
});

function mostrarGiftcard(){
    const textoGiftcard = document.getElementById('JS-textoGiftcard');
    const giftcardContainer = document.getElementById('JS-giftcardContenedor');
    const giftcard = listaDeUsuarios[indice].giftcard;
    console.log(listaDeUsuarios[indice]);
    console.log(giftcard);
    if(giftcard && !giftcard.utilizada){
        textoGiftcard.style.display = 'none';
        giftcardContainer.style.display = 'flex';
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
    } else {
        textoGiftcard.style.display = 'block';
        giftcardContainer.style.display = 'none';
    }
}

const contenedorCursos = document.getElementById('contenedorCursos');
function mostrarCursos(){
    const textoCurso = document.getElementById('JS-textoCursos');
    console.log(cursosDelUsuarioPerfil);
    if(cursosDelUsuarioPerfil){
    cursosDelUsuarioPerfil.forEach(item => {
        const contenedorCurso = document.createElement('div');
                contenedorCurso.classList.add('cursos-en-perfil');
                contenedorCurso.id = 'perfil';
                contenedorCurso.innerHTML = `<img class="imagen-curso" src="${item.img}" />
                <div class="info-curso">
                    <h2 class="titulo-curso">${item.nombre}</h2>
                    <div class="textos-curso">
                        <p class="texto-curso">${item.duracion}</p>
                    </div>
                </div>`;
            contenedorCursos.appendChild(contenedorCurso);
    });
    } else {
        textoCurso.style.display = 'block';
        contenedorCursos.style.display = 'none';
    }
}

function actualizarContador() {
    // Obtiene el valor actual del contador desde sessionStorage o usa 0 si no existe
    localStorage.removeItem(`contador_${usuarioEnSesion.correo}`);
}


mostrarCursos();
mostrarGiftcard();

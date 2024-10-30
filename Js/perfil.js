let listaDeUsuarios = JSON.parse(localStorage.getItem("BDUsuarios"));
let indice = localStorage.getItem("idUsuario");

let contenedor = document.getElementById("datos-basicosId");
let botonCerrarSesion = document.getElementById("btn__cerrar-sesion");
let botonEliminarPerfil = document.getElementById("btn__eliminar-perfil");

let nombre = document.createElement("p");
nombre.textContent = "Nombre:" + listaDeUsuarios[indice].nombre;
contenedor.appendChild(nombre);

let usuario = document.createElement("p");
usuario.textContent = "Usuario:" + listaDeUsuarios[indice].usuario;
contenedor.appendChild(usuario);

let correo = document.createElement("p");
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
        listaDeUsuarios.splice(indice, 1);
        localStorage.setItem("BDUsuarios", JSON.stringify(listaDeUsuarios));

        window.location.href = "../index.html";
    }
});

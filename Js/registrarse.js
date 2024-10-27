document
    .getElementById("form__loginInputId")
    .addEventListener("submit", function () {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const usuario = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contrasena").value;

        const contrasenaCifrada = cifradoCesar(contrasena, contrasena.length);

        localStorage.setItem("nombre", nombre);
        localStorage.setItem("apellido", apellido);
        localStorage.setItem("correo", correo);
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("contrasena", contrasenaCifrada);
    });

function cifradoCesar(contrasena, desplazamiento) {
    let resultado = "";
    for (let i = 0; i < contrasena.length; i++) {
        let charCode = contrasena.charCodeAt(i);

        // Cifrado solo para letras mayúsculas y minúsculas
        if (charCode >= 65 && charCode <= 90) {
            // Letras mayúsculas
            resultado += String.fromCharCode(
                ((charCode - 65 + desplazamiento) % 26) + 65
            );
        } else if (charCode >= 97 && charCode <= 122) {
            // Letras minúsculas
            resultado += String.fromCharCode(
                ((charCode - 97 + desplazamiento) % 26) + 97
            );
        } else {
            // Otros caracteres permanecen sin cambios
            resultado += contrasena[i];
        }
    }
    return resultado;
}

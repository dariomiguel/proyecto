const formLogin = document.getElementById("form__loginInputId");

formLogin.addEventListener("submit", function (e) {
    const usuario = document.getElementById("usuario").value;
    const usuarioLocalStorage = localStorage.getItem("usuario");
    let contrasena = document.getElementById("contrasena").value;
    contrasena = cifradoCesar(contrasena, contrasena.length);
    const contrasenaLocalStorage = localStorage.getItem("contrasena");

    if (usuario === usuarioLocalStorage && contrasena === contrasenaLocalStorage) {
        localStorage.setItem("estadoDeSesion", "Activo");
    } else {
        e.preventDefault();
        alert("Usuario o contraseña incorrectos, por favor vuelva intentarlo");
    }
});

function cifradoCesar(contrasena, desplazamiento) {
    let resultado = "";
    for (let i = 0; i < contrasena.length; i++) {
        let charCode = contrasena.charCodeAt(i);

        // Cifrado solo para letras mayúsculas y minúsculas
        if (charCode >= 65 && charCode <= 90) {
            // Letras mayúsculas
            resultado += String.fromCharCode(((charCode - 65 + desplazamiento) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Letras minúsculas
            resultado += String.fromCharCode(((charCode - 97 + desplazamiento) % 26) + 97);
        }
        // Cifrado para números (0-9)
        else if (charCode >= 48 && charCode <= 57) {
            resultado += String.fromCharCode(((charCode - 48 + desplazamiento) % 10) + 48);
        } else {
            // Otros caracteres permanecen sin cambios
            resultado += contrasena[i];
        }
    }
    return resultado;
}

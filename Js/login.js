const formLogin = document.getElementById("form__loginInputId");

formLogin.addEventListener("submit", function (e) {
    const usuarioDesdeInput = document.getElementById("usuario").value;
    let contrasenaInput = document.getElementById("contrasena").value;
    contrasenaInput = cifradoCesar(contrasenaInput, contrasenaInput.length);

    const baseDeDatosGuardada = JSON.parse(localStorage.getItem("BDUsuarios"));
    let seEncontroUsuario = false;

    if (baseDeDatosGuardada !== null) {
        seEncontroUsuario = encontrarUsuario(baseDeDatosGuardada, usuarioDesdeInput);
    }

    // console.log("Existe el usuario en la base de datos?  " + seEncontroUsuario);

    if (seEncontroUsuario) {
        let indice = posicionDeUsuarioEnBaseDeDatos(baseDeDatosGuardada, usuarioDesdeInput);
        let contrasenaCoinciden = contrasenaCorrecta(baseDeDatosGuardada, indice, contrasenaInput);

        if (contrasenaCoinciden) {
            localStorage.setItem("estadoDeSesion", "Activo");
            localStorage.setItem("idUsuario", indice);
            localStorage.setItem("usuarioLogueado", JSON.stringify(baseDeDatosGuardada[indice]));
            return;
        }
    }

    e.preventDefault();
    alert("Usuario o contraseña incorrectos, por favor vuelva intentarlo");
});

function encontrarUsuario(miArray, nombreAComparar) {
    let seEncuentra = false;

    miArray.forEach((usuario) => {
        if (usuario.nombreDeUsuario === nombreAComparar) seEncuentra = true;
    });

    return seEncuentra;
}

function posicionDeUsuarioEnBaseDeDatos(miArray, nombreAComparar) {
    return miArray.findIndex((usuario) => usuario.nombreDeUsuario === nombreAComparar);
}

function contrasenaCorrecta(miArray, indice, contrasenaAComparar) {
    return miArray[indice].contrasena == contrasenaAComparar;
}

///////////////////////////////////////////////////////////////////////////////////
///Para hacer un pequeño encriptado y que no aparezca directamente la contraseña///
///////////////////////////////////////////////////////////////////////////////////
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

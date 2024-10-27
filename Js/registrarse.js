document.getElementById("form__registerInputId").addEventListener("submit", function (e) {
    e.preventDefault();
    let baseDeDatosGuardada = JSON.parse(localStorage.getItem("BDUsuarios"));

    if (baseDeDatosGuardada === null) localStorage.setItem("BDUsuarios", JSON.stringify([]));

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const nombreDeUsuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    const contrasenaCifrada = cifradoCesar(contrasena, contrasena.length);

    const ListaDeUsuarios = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        nombreDeUsuario: nombreDeUsuario,
        contrasena: contrasenaCifrada,
    };

    baseDeDatosGuardada = JSON.parse(localStorage.getItem("BDUsuarios"));
    baseDeDatosGuardada.push(ListaDeUsuarios);

    localStorage.setItem("BDUsuarios", JSON.stringify(baseDeDatosGuardada));
    localStorage.setItem("estadoDeSesion", "Activo");
    window.location.href = "../index.html";
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

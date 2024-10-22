const botonAgregarPersona = document.getElementById("boton__agregarPersona");

botonAgregarPersona.addEventListener("click", agregarTexto);

function agregarTexto() {
    let contenedor = document.getElementById("contenedorPersonasAgregadas");
    let parrafo = document.createElement("div");
    parrafo.innerHTML = `
        <div class="inscripcion__input">
            <label for="curso">Nombre</label>
            <input id="curso" name="curso" type="text" placeholder="Nombre" required/>
        </div>
        <div class="inscripcion__input">
            <label for="descripcion">Apellido</label>
            <input id="descripcion" name="descripcion" placeholder="Apellido" required/>
        </div>
        <div class="inscripcion__input">
            <label for="duracion">DNI</label>
            <input id="tel" name="duracion" placeholder="DNI" pattern="\\d*" title="Por favor, ingrese un DNI válido" required/>
        </div>
    `;

    contenedor.appendChild(parrafo);
}

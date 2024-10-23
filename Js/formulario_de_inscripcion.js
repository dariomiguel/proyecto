const botonAgregarPersona = document.getElementById("boton__agregarPersona");

botonAgregarPersona.addEventListener("click", agregarTexto);

function agregarTexto() {
    let contenedor = document.getElementById("contenedorPersonasAgregadas__Id");
    let parrafo = document.createElement("div");
    parrafo.innerHTML = `
                <div class="inscripcion">
                    <div class="inscripcion__contenedor">
                        
                        <div class="inscripcion__input">
                            <label for="curso">Nombre</label>
                            <input  name="curso" type="text" placeholder="Nombre" required/>
                        </div>
                        <div class="inscripcion__input">
                            <label for="descripcion">Apellido</label>
                            <input  name="descripcion" placeholder="Apellido" required/>
                        </div>

                        <div class="inscripcion__input">
                            <label for="duracion">DNI</label>
                            <input  name="duracion" placeholder="DNI" pattern="\d*" title="Por favor, ingrese un DNI válido" required/>
                        </div>

                        <!-- <button type="button" class="removerCurso"></button> -->
                    </div>
                </div>
    `;

    contenedor.appendChild(parrafo);
}

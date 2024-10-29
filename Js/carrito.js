
const cursos = JSON.parse(localStorage.getItem('cursos'));

let carritoDeCompras = []; // Inicializa el carrito

function agregarAlCarrito(id) {
    const curso = cursos.find(c => c.id === id);
    if (curso) {
        carritoDeCompras.push(curso); // Agrega el curso al carrito
        mostrarCarrito(); // Muestra el carrito actualizado
    }
}

function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');
    const carritoVacio = document.getElementById('JS-carritoVacio');
    console.log(carritoVacio);
    // Verificamos si el contenedor del carrito existe
        if (carritoDeCompras.length === 0) {
            carritoVacio.style.display = 'grid'; // Muestra el mensaje de carrito vacío
            contenedorCarrito.style.display = 'none'; // Oculta el contenedor de cursos
        } else {
            carritoVacio.style.display = 'none'; // Oculta el mensaje de carrito vacío
            contenedorCarrito.style.display = 'block'
            contenedorCarrito.innerHTML = ''; // Limpia el contenedor antes de mostrar los cursos
            carritoDeCompras.forEach(curso => {
                const contenedorCurso = document.createElement('div');
                contenedorCurso.innerHTML = `<h1>${curso.nombre}</h1>`; // Muestra el nombre del curso
                contenedorCarrito.appendChild(contenedorCurso);
            });
        }   
}
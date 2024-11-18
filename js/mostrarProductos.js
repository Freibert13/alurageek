import { api } from "./api.js";


const lista = document.querySelector("[data-lista]");

function crearCard(nombre, Imagen, precio, id) {
    const producto = document.createElement("li");
    producto.className = "card";
    producto.innerHTML = `
        <article>
            <img class="card-image" src="${Imagen}" alt="Imagen de ${nombre}">
            <div class="card-info">
                <h2>${nombre}</h2> 
            </div>
            <div class="card-price">
                <p>$${precio}</p>
                <button class="delete-button" aria-label="Eliminar producto ${nombre}" data-id="${id}">
                    <img src="./Assets/vector.png" alt="Eliminar producto">
                </button>
            </div>
        </article>`;

   
    producto.querySelector(".delete-button").addEventListener("click", async (evento) => {
        const idProducto = evento.target.closest('button').getAttribute('data-id');

        try {
            await api.eliminarProducto(idProducto);
            alert(`Producto ${idProducto} eliminado`);

         
            lista.innerHTML = '';
            listarProductos(); 
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            alert("Ocurrió un error al eliminar el producto.");
        }
    });

    return producto;
}

async function listarProductos() {
    try {
        const listaAPI = await api.listarProductos();
        listaAPI.forEach(producto => {
            const card = crearCard(producto.nombre, producto.Imagen, producto.precio, producto.id);
            lista.appendChild(card);
        });
    } catch (error) {
        console.error("Error al listar productos:", error);
        alert("Ocurrió un error al cargar los productos.");
    }
}

listarProductos(); 

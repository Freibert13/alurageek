import { api } from "./api.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    evento.preventDefault();

   
    const nombre = document.querySelector("[data-nombre]").value;
    const Imagen = document.querySelector("[data-Imagen]").value;
    const precio = document.querySelector("[data-precio]").value;

    try {
        
        await api.enviarProducto(nombre, Imagen, precio);

       
        document.querySelector("[data-nombre]").value = "";
        document.querySelector("[data-Imagen]").value = "";
        document.querySelector("[data-precio]").value = "";

        alert("¡Producto cargado con éxito!");
    } catch (error) {
        console.error("Error al cargar el producto:", error);
        alert("Hubo un problema al cargar el producto. Inténtalo de nuevo.");
    }
}

formulario.addEventListener("submit", evento => crearProducto(evento));

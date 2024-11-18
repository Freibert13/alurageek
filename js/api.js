async function listarProductos  () {
    const conexion = await fetch ("http://localhost:3001/productos");
    
    const conexionConvertida = conexion.json();
    
    return conexionConvertida
}

async function enviarProducto (nombre, Imagen, precio) {
    const conexion = await fetch ("http://localhost:3001/productos", {
        method: "POST", 
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre: nombre,
            Imagen: Imagen,
            precio: precio
        })
    })

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
    });

    if (!conexion.ok) {
        throw new Error("No se pudo eliminar el producto");
    }

    return await conexion.json();
}

export const api ={
    listarProductos, enviarProducto, eliminarProducto,
};

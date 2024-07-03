const apiUrl = "http://localhost:3000/producto";

// Función para obtener datos de productos
let getData = async () => {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud GET: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la solicitud GET:", error);
        throw error;
    }
};

// Función para enviar datos de un nuevo producto
let postData = async (producto) => {
    try {
        const response = await fetch("http://localhost:3000/producto", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto)
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud POST: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al enviar los datos:", error);
        throw error;
    }
};

// Función para eliminar un producto
let deleteData = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud DELETE: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        throw error;
    }
};

// Función para actualizar un producto
let putData = async (producto) => {
    try {
        const response = await fetch(`${apiUrl}/${producto.id}`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image: producto.image,
                modelo: producto.modelo,
                categoria: producto.categoria,
                precio: producto.precio
            })
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud PUT: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al actualizar los datos:", error);
        throw error;
    }
};

export { getData, postData, deleteData, putData };

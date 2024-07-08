const apiUrl = "http://localhost:3000/users";

const getData = async () => {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error en la solicitud GET:", error);
        throw error;
    }
};

const postData = async (contrasena, correo) => {
    try {
        // Verificar si el correo ya existe en la base de datos
        const users = await getData();
        const userExists = users.find(user => user.gmail === correo);
        if (userExists) {
            throw new Error("Correo electrónico ya registrado");
        }

        // Si el correo no existe, proceder con la inserción del nuevo usuario
        const response = await fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contrasena,
                gmail: correo
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error en la solicitud POST:", error);
        return null;
    }
};


const deleteData = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error en la solicitud DELETE:", error);
        return null;
    }
};

const putData = async (obj) => {
    try {
        const response = await fetch(`${apiUrl}/${obj.id}`, {
            method: "PUT",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error en la solicitud PUT:", error);
        return null;
    }
};

export { getData, postData, deleteData, putData };


const apiUrl = "http://localhost:3000/users";

let getData = async () => {
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

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la solicitud GET:", error);
        throw error;
    }
};

let postData = async (contrasena, correo) => {
    try {
        let response = await fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contrasena: contrasena,
                gmail: correo
            })
        });
        let data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
};

let deleteData = async (id) => {
    try {
        let response = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
};

let putData = async (obj) => {
    try {
        let response = await fetch(`${apiUrl}/${obj.id}`, {
            method: "PUT",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        });
        let data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
};

export { getData, postData, deleteData, putData };

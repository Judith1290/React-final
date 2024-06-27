import React, { useState } from 'react';
// import { getData } from '../../services/apiFetch';
import { Link } from 'react-router-dom';



const Login = () => {

    const [contraseña, setcontraseña] = useState('');
    const [correo, setcorreo] = useState('');

    const handleLogin = async () => {
        try {
            const userExists = await getData('?correo=${correo}');

            if (userExists) {

                alert("Inicio de sesión exitoso");
            } else {
                alert("Usuario no encontrado");
            }
        } catch (error) {
            console.error("Error al verificar usuario:", error);
            alert("Error al intentar iniciar sesión");
        }
    };

    return (
        <>
            <div>
                <h1>LOGIN</h1>

                <input type='password' name='contraseña' id='contraseña' placeholder='password' value={contraseña} onChange={(e) => setcontraseña(e.target.value)} />
                <input type='text' placeholder='Gmail' value={correo} onChange={(e) => setcorreo(e.target.value)} />
                <button onClick={handleLogin}>LOGEAR</button>
                <button><Link to='/principal'>INICIO</Link></button>
            </div>


        </>
    );

}
export default Login;
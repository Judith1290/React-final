import React, { useState } from 'react';
import { getData } from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [contrasena, setContrasena] = useState('');
    const [correo, setCorreo] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userExists = await getData();
            const user = userExists.find((user) => user.gmail === correo);
            if (user) {
                if (user.contrasena === contrasena) {
                    console.log("Usuario existe");
                    navigate('/Principal');
                } else {
                    alert("Contraseña incorrecta");
                }
            } else {
                console.log("Usuario no existe");
                alert("Usuario no existe");
            }
        } catch (error) {
            console.error("Error al verificar usuario:", error);
            alert("Error al intentar iniciar sesión");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2 className="title">Iniciar Sesión</h2>
                <p className="subtitle">¿No tienes una cuenta? <Link to="/registro" className="link">Regístrate</Link></p>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="correo" className="block text-sm font-medium">Correo Electrónico</label>
                        <input
                            type="text"
                            id="correo"
                            className="input"
                            placeholder="tucorreo@example.com"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contrasena" className="block text-sm font-medium">Contraseña</label>
                        <input
                            type="password"
                            id="contrasena"
                            className="input"
                            placeholder="Ingrese 6 caracteres o más"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="button">Inicio</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

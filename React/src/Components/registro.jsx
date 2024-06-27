import React, { useState } from 'react';
// import { postData } from '../../services/apiFetch';
import { useNavigate, Link } from 'react-router-dom';

const Registro = () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setcontraseña] = useState('');
    const [correo, setcorreo] = useState('');
    const navigate = useNavigate();

    const boton = async () => {

        if (!usuario.trim() || !contraseña.trim() || !correo.trim()) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        try {
            const response = await postData(usuario, contraseña, correo);
            if (response) {
                alert('Registro exitoso');
                navigate('/');
            } else {
                alert('Registro fallido');
            }
        } catch (error) {
            console.error('Error al enviar datos:', error);
            alert('Error al intentar registrar');
        }
    };

    return (
        <>
            <div>
                <h1>REGISTRO</h1>
                <input type="text" placeholder='nombre de usuario' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                <input type='password' name='contraseña' id='contraseña' placeholder='password' value={contraseña} onChange={(e) => setcontraseña(e.target.value)} />
                <input type='text' placeholder='Gmail' value={correo} onChange={(e) => setcorreo(e.target.value)} />
                <button onClick={boton}>REGISTRAR</button>
                <button><Link to='/'>LOGIN</Link></button>
            </div>
        </>
    );

}
export default Registro;
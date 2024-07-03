import React, { useState } from 'react';
import { postData } from '../services/api';
import { Link, useNavigate } from 'react-router-dom';

const Registro = () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setcontraseña] = useState('');
    const [correo, setcorreo] = useState('');


    const boton = async () => {

        const navigate = useNavigate()

        if (!usuario.trim() || !contraseña.trim() || !correo.trim()) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        try {
            const response = await postData(contraseña, correo);
            if (response) {
                alert('Registro exitoso');
                navigate('/Login')
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
            <div className='container'>
                <div className="card">

                    <h1 className="title">REGISTRO</h1>

                    <div className="card">
                        <input type="text" className="block text-sm font-medium" placeholder='nombre de usuario' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        <input type='password' className="block text-sm font-medium" name='contraseña' id='contraseña' placeholder='password' value={contraseña} onChange={(e) => setcontraseña(e.target.value)} />
                        <input type='text' className="block text-sm font-medium" placeholder='Gmail' value={correo} onChange={(e) => setcorreo(e.target.value)} />

                    </div>
                    <button onClick={boton} className="button">REGISTRAR</button>
                </div>

            </div>


        </>
    );

}
export default Registro;

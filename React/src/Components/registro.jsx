import React, { useState } from 'react';
import { postData } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [correo, setCorreo] = useState('');
    const navigate = useNavigate();  

    const boton = async () => {
        if (!usuario.trim() || !contraseña.trim() || !correo.trim()) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        try {
            const response = await postData(contraseña, correo);
            if (response) {
                alert('Registro exitoso');
                navigate('/Login');  
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
                        <input 
                            type="text" 
                            className="block text-sm font-medium" 
                            placeholder='Nombre de usuario' 
                            value={usuario} 
                            onChange={(e) => setUsuario(e.target.value)} 
                        />
                        <input 
                            type='password' 
                            className="block text-sm font-medium" 
                            name='contraseña' 
                            id='contraseña' 
                            placeholder='Password' 
                            value={contraseña} 
                            onChange={(e) => setContraseña(e.target.value)} 
                        />
                        <input 
                            type='text' 
                            className="block text-sm font-medium" 
                            placeholder='Gmail' 
                            value={correo} 
                            onChange={(e) => setCorreo(e.target.value)} 
                        />
                    </div>
                    <button onClick={boton} className="button">REGISTRAR</button>
                </div>
            </div>
        </>
    );
};

export default Registro;


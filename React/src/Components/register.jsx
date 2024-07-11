import React, { useState } from 'react';
import { postData } from '../services/api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Registro = () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [correo, setCorreo] = useState('');
    const navigate = useNavigate();

    const boton = async () => {
        if (!usuario.trim() || !contraseña.trim() || !correo.trim()) {

            Swal.fire("Por favor, complete todos los campos!");
            return;
        }
        if (!correo.includes('@')) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Correo electrónico inválido,por favor ingresar@!",
            });
            return;
        }
        try {
            const response = await postData(contraseña, correo);
            if (response) {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registro exitoso",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/Login');
            } else {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "usuario ya existente!",

                });
            }
        } catch (error) {
            console.error('Error al enviar datos:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Registro fallido!",

            });
        }
    };

    return (
        <>
            <div className='container'>
                <div className="card">
                    <h1 className="title">REGISTRO</h1>

                    <div className="mb-4">
                        <label htmlFor="correo" className="block text-sm font-medium" ></label>
                        <input
                            type="text"
                            className="block text-sm font-medium"
                            placeholder='Nombre de usuario'
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="correo" className="block text-sm font-medium"></label>
                        <input
                            type='password'
                            className="block text-sm font-medium"
                            name='contraseña'
                            id='contraseña'
                            placeholder='Password'
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="correo" className="block text-sm font-medium"></label>
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


import React from 'react';
import Carrusel from './carrusel'
function Inicio() {
    return (
        <>

            <div className="bg-red-600 text-white text-center p-4">
                <p className='letras'>Te damos la bienvenida a nuestra página web, esperamos que puedas conseguir lo que necesitas</p>
                <h2 className="letras">VENTA DE ACCESORIOS PARA CELULARES</h2>
            </div>
                 <div><Carrusel /></div>

            <div className="bg-white text-center p-8">
                <h3 className='text-red-600 text-xl font-bold mt-4'>Registrate para poder ver mas de nuestro productos </h3>
                <h3 className="text-red-600 text-xl font-bold mt-4">¡ENTRE MÁS COMPRES, MÁS GANAS!</h3>
                 <p className="text-red-600 text-sm mt-2">Aplican restricciones</p>
            </div>
            </>
    );
}
export default Inicio
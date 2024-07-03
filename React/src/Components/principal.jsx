import React from 'react';
import Bootstrap from './bootstrap';
import Nav from './nan';
import Footer from './footer';


function Principal() {
    return (
        <>
            <div><Nav /></div>

            <div className="bg-red-600 text-white text-center p-4">
                <p className='colorp'>Te damos la bienvenida a nuestra página web, esperamos que puedas conseguir lo que necesitas</p>
                <h2 className="text-xl font-bold">VENTA DE ACCESORIOS PARA CELULARES</h2>
            </div>
            <div><Bootstrap /></div>
            <div className="bg-white text-center p-8">

                <h3 className="text-red-600 text-xl font-bold mt-4">¡ENTRE MÁS COMPRES, MÁS GANAS!</h3>
                <img src="" alt="" className="" />
                <p className="text-red-600 text-sm mt-2">Aplican restricciones</p>
            </div>
            <div> <Footer/></div>
        </>
    );
}
export default Principal
import React from 'react'
import Inicio from '../Components/inicio'
import BarraDeNavegacionPrincipal from '../Components/barraDeNavegacionPrincipal'
import PieDePagina from '../Components/PieDePagina'
const principal = () => {
    return (
        <div>

            <BarraDeNavegacionPrincipal />
            <Inicio />
            <PieDePagina />
        </div>
    )
}

export default principal

import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Registro from '../Components/registro';
import Login from '../Components/login';
import Principal from '../Components/principal';
import Contacto from '../Components/contacto';
import Administrador from '../Components/borrar despues';
import TodosLosProductos from '../Components/todosLosProdtuctos';




function Rutas() {
    return (
        <Routes>
            <Route path='Login' element={<Login />} />
            <Route path='/Registro' element={<Registro />} />
            <Route path='/' element={< Principal />} />
            <Route path='/Contacto' element={< Contacto />} />
            <Route path='/Administrador' element={< Administrador />} />
            <Route path='/TodosLosProductos' element={< TodosLosProductos />} />

        </Routes>
    )
}
export default Rutas

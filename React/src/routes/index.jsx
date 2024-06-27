import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Registro from '../Components/registro';
import Login from '../Components/login';

function Rutas() {
    return (
        <Routes>
             <Route path='/' element={<Login />} />
             <Route path='/Registro' element={<Registro />} />
           
            {/* <Route path='/tareas' element={< />} /> */}
        </Routes>
    )
}
export default Rutas

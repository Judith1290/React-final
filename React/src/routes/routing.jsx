import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Administrador from '../pages/Administrador';
import Login from '../pages/login';
import Principal from '../pages/principal';
import Registro from '../pages/registro';
import TodosLosProductos from '../pages/TodosLosProductos';
import Informacion from '../pages/informacion';


function Routing() {
    return (

        <div>

                <Routes>

                    <Route path='/Login' element={< Login />} />
                    <Route path='/' element={< Principal />} />
                    <Route path='/Administrador' element={< Administrador />} />
                    <Route path='/registro' element={< Registro />} />
                    <Route path='/todosLosProductos' element={< TodosLosProductos />} />
                    <Route path='/informacion' element={< Informacion />} />

                </Routes>


        </div>
    )
}
export default Routing

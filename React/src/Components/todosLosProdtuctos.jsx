import { useState, useEffect } from 'react';
import NavbarPri from './Navbar';

function TodosLosProductos() {
    const [productos, setProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = () => {
        const data = JSON.parse(localStorage.getItem('productos')) || [];
        setProductos(data);
    };

    const filteredProductos = productos.filter((producto) =>
        producto.modelo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='administrador'>

            {/* <header className='header'>
                <h1>Productos</h1>
                <input
                    className='searchBar'
                    type='text'
                    placeholder='Buscar producto'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </header> */}
            <div><NavbarPri /></div>

            <div className='inputField'>
                {filteredProductos.map((producto) => (
                    <div key={producto.id} className="productItem">
                        <div className='imageContainer'>

                            <img src={producto.image} alt={producto.modelo} className="" />
                        </div>

                        <p>{producto.modelo}</p>
                        <p>₡{producto.precio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodosLosProductos;

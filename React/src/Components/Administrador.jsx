import { useState, useEffect } from 'react';


function Principal() {
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
        <div className='principal'>
            <header className='header'>
                <h1>Productos</h1>
                <input
                    className='searchBar'
                    type='text'
                    placeholder='Buscar producto'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </header>
            <div className='productList'>
                {filteredProductos.map((producto) => (
                    <div key={producto.id} className="productItem">
                        <img src={producto.image} alt={producto.modelo} className="productImage" />
                        <p>{producto.modelo}</p>
                        <p>{producto.precio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Principal;

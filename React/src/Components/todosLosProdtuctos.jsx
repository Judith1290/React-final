import { useState, useEffect } from 'react';
import NavbarPri from './Navbar';
// import { produData } from '../services/apiProductos';

function TodosLosProductos() {
    // const [productos, setProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    useEffect(() => {
        fetchProductos();
    }, []);

    // const fetchProductos = async () => {
    //     try {
    //         const data = await produData();
    //         setProductos(data);
    //     } catch (error) {
    //         console.error("Error al obtener los productos:", error);
    //     }
    // };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleSelectCategory = (category) => {
        setFilterCategory(category);
    };

    const filteredProductos = productos.filter((producto) => {
        return (
            producto.modelo.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (!filterCategory || producto.categoria === filterCategory)
        );
    });

    return (
        <div className='todosLosProductos'>
            <NavbarPri onSearch={handleSearch} onSelectCategory={handleSelectCategory} />
            <div className='inputField'>
                {filteredProductos.map((producto) => (
                    <div key={producto.id} className="productItem">
                        <div className='imageContainer'>
                            <img src={producto.image} alt={producto.modelo} className="productImage" />
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

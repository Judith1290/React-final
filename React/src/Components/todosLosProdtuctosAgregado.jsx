import { useState, useEffect } from 'react';
import NavbarPri from './Navbar2';
import { getData } from '../services/apiProductos';

function TodosLosProductos() {
    // almacena los productos, término de búsqueda y categoría de filtrado.
    const [productos, setProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    // useEffect para obtener los productos 
    //  al montar el componente y configurar un intervalo para actualizarlos cada 5 segundos.
    useEffect(() => {
        fetchProductos();
        const interval = setInterval(fetchProductos, 5000); // Actualiza los productos cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    // Función para obtener los productos desde la API.
    const fetchProductos = async () => {
        try {
            const data = await getData();
            setProductos(data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    };
    // Maneja la actualización del término de búsqueda.
    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    // Maneja la actualización de la categoría de filtrado.
    const handleSelectCategory = (category) => {
        setFilterCategory(category);
    };
    // Filtra los productos según el término de búsqueda y la categoría seleccionada.
    const filteredProductos = productos.filter((producto) => {
        // Filtrar por categoría si está seleccionada
        const matchesCategory = filterCategory ? producto.categoria === filterCategory : true;
        // Filtrar por término de búsqueda si está presente
        const matchesSearch = searchTerm ? producto.modelo.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        return matchesCategory && matchesSearch;
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
                        <p>{producto.categoria}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodosLosProductos;


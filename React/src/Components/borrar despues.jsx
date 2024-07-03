import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Administrador() {
    const [modelo, setModelo] = useState('');
    const [precio, setPrecio] = useState('');
    const [imageBase64, setImageBase64] = useState('');
    const [productos, setProductos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = () => {
        const data = JSON.parse(localStorage.getItem('productos')) || [];
        setProductos(data);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageBase64(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const submitData = () => {
        const producto = { id: Date.now(), image: imageBase64, modelo, precio };
        let data = JSON.parse(localStorage.getItem('productos')) || [];

        if (isEditing) {
            data = data.map((item) => (item.id === editingId ? { ...producto, id: editingId } : item));
        } else {
            data.push(producto);
            alert("Producto,agregado con exito")
        }

        localStorage.setItem('productos', JSON.stringify(data));
        fetchProductos();
        clearForm();
    };

    const clearForm = () => {
        setModelo('');
        setPrecio('');
        setImageBase64('');
        setIsEditing(false);
        setEditingId(null);
    };

    const handleEdit = (producto) => {
        setModelo(producto.modelo);
        setPrecio(producto.precio);
        setImageBase64(producto.image);
        setIsEditing(true);
        setEditingId(producto.id);
    };

    const handleDelete = (id) => {
        let data = JSON.parse(localStorage.getItem('productos')) || [];
        data = data.filter((producto) => producto.id !== id);
        localStorage.setItem('productos', JSON.stringify(data));
        fetchProductos();
    };

    return (
        <div className='administrador'>
            <div className='formContainer'>
                <h2>{isEditing ? 'Editar Producto' : 'Agregar Producto'}</h2>
                <div className='formSection'>
                    <div className='imageContainer'>
                        {imageBase64 && (
                            <img className='productImage' src={imageBase64} alt="Producto" />
                        )}
                    </div>
                    <div>
                        <input type="file" onChange={handleImageChange} />
                        <select className='inputField' value={modelo} onChange={(e) => setModelo(e.target.value)}>
                            <option className='option' value="">Selecciona el modelo</option>
                            <option className='option' value="samsung">Samsung</option>
                            <option className='option' value="huawei">Huawei</option>
                            <option className='option' value="iphone">iPhone</option>
                            <option className='option' value="xiaomi">Xiaomi</option>
                        </select>
                        <input className='inputField' type="text" placeholder='Precio en CR' value={precio} onChange={(e) => setPrecio(e.target.value)} />
                        <input onClick={submitData} className='submitButton' type="button" value={isEditing ? "Actualizar" : "Agregar"} />
                        {isEditing && (
                            <input onClick={clearForm} className='closeButton' type="button" value="Cancelar" />
                        )}


                    </div>
                    <button variant="outline-success"><Link to='/'>regresar</Link></button>
                </div>
            </div>
            <div className="App">
                {productos.map((producto) => (
                    <div key={producto.id} className="productItem">
                        <img src={producto.image} alt={producto.modelo} className="productImage" />
                        <p>{producto.modelo}</p>
                        <p>₡{producto.precio}</p>
                        <button onClick={() => handleEdit(producto)}>Editar</button>
                        <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Administrador;

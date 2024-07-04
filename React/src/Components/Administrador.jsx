import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { putData, getData, deleteData,postData } from '../services/apiProductos';
import Producto from './Producto';

function Administrador() {
    const [modelo, setModelo] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imageBase64, setImageBase64] = useState('');
    const [productos, setProductos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    // const [ntp, setNtp] = useState(0)

    useEffect(() => {
        fetchProductos();
        // setNtp(+1)
    }, []);

    const fetchProductos = async () => {
        try {
            const data = await getData();
            console.log(data)
            setProductos(data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    };

    

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageBase64(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const submitData = async () => {
        const producto = { image: imageBase64, modelo, categoria, precio };

        try {
            if (isEditing) {
                producto.id=editingId
                await putData(producto);
                alert("Producto actualizado con éxito");
            } else {
                await postData(producto);
                alert("Producto agregado con éxito");
            }
            fetchProductos();
            clearForm();
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

    const clearForm = () => {
        setModelo('');
        setPrecio('');
        setCategoria('');
        setImageBase64('');
        setIsEditing(false);
        setEditingId(null);
    };

    const handleEdit = (producto) => {
        setModelo(producto.modelo);
        setPrecio(producto.precio);
        setCategoria(producto.categoria);
        setImageBase64(producto.image);
        setIsEditing(true);
        setEditingId(producto.id);
    };

    const remover = async (id) => {
        console.log(id)
        try {
            // fetchProductos();
           await deleteData(id);
            setProductos(productos.filter(product => product.id !== id));
            alert('Producto eliminado');
            
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
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
                        <select className='inputField' value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                            <option className='option' value="">Selecciona la categoría</option>
                            <option className='option' value="Cargadores">Cargadores</option>
                            <option className='option' value="Cables USB">Cables USB</option>
                            <option className='option' value="Cubo">Cubo</option>
                            <option className='option' value="Temperados">Temperados</option>
                            <option className='option' value="AROS DE LUZ">AROS DE LUZ</option>
                            <option className='option' value="Audifono">Audifono</option>
                            <option className='option' value="Celulares">Celulares</option>
                        </select>
                        <input className='inputField' type="text" placeholder='Precio en CR' value={precio} onChange={(e) => setPrecio(e.target.value)} />
                        <input onClick={submitData} className='submitButton' type="button" value={isEditing ? "Actualizar" : "Agregar"} />
                        {isEditing && (
                            <input onClick={clearForm} className='closeButton' type="button" value="Cancelar" />
                        )}
                    </div>
                    <button variant="outline-success"><Link to='/'>Regresar</Link></button>
                </div>
            </div>
            <div className="App">
                {productos.map((producto) => (

                    <Producto key={producto.id} producto={producto} productos={productos} setProductos={setProductos} admin={true}>
                        <button onClick={() => handleEdit(producto)}>Editar</button>
                        <button onClick={() => remover(producto.id)}>Eliminar</button>
                    </Producto>
                ))}
            </div>
        </div>
    );
}

export default Administrador;
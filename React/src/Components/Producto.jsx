
const Producto = ({producto, children}) => {

 return (
    <div key={producto.id} className="productItem">
    <div className='imageContainer'>
        <img src={producto.image} alt={producto.modelo} className="productImage" />
    </div>
    <p>{producto.modelo}</p>
    <p>₡{producto.precio}</p>
    <p>{producto.categoria}</p>
    {children}
     
   
    
</div>
  );
}

export default Producto


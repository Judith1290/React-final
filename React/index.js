// index.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());  // Habilita CORS para permitir solicitudes desde otros orígenes
app.use(express.json());  // Permite al servidor analizar el JSON en las solicitudes

let productos = [
    // Puedes agregar productos iniciales aquí si es necesario
];

// Función para manejar solicitudes GET a /productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

// Función para manejar solicitudes POST a /productos
app.post('/productos', (req, res) => {
    const nuevoProducto = req.body;
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

// Función para manejar solicitudes DELETE a /productos/:id
app.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    productos = productos.filter(producto => producto.id !== parseInt(id));
    res.status(204).end();  // No devuelve contenido en la respuesta
});

// Función para manejar solicitudes PUT a /productos/:id
app.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const { modelo, precio, categoria, image } = req.body;
    productos = productos.map(producto =>
        producto.id === parseInt(id) ? { id, modelo, precio, categoria, image } : producto
    );
    res.json(productos.find(producto => producto.id === parseInt(id)));
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const express = require('express')
const app = express()

const Productos = [
    { id: 1, nombre: 'Producto_1' },
    { id: 2, nombre: 'Producto_2' },
    { id: 3, nombre: 'Producto_3' },
    { id: 4, nombre: 'Producto_4' },
    { id: 5, nombre: 'Producto_5' },
];

app.get('/api/productos', (req, res) => {

    res.send(Productos);

});

app.get('/api/productoRandom', (req, res) => {

    let rand = Math.floor(Math.random() * Productos.length);
    let rValue = Productos[rand]

    res.send(rValue)


});




const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Escuchando en el purto ${port}`)
});
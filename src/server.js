const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const containerPro = require('./class/containerPro.js');   //clase Contenedor
const containerMsj = require('./class/containerMsj.js');   //clase Contenedor

//Creo mi server io express
const app = express();
const httpServer = new HttpServer(app);
const ioServer = new IOServer(httpServer);

const contenedorProductos = new containerPro('./src/files/productos.txt');
const contenedorMensajes = new containerMsj('./src/files/mensajes.txt');

contenedorMensajes.deleteAll();
// contenedorProductos.deleteAll();

app.use(express.json());
app.use(express.static('public'));               //Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.urlencoded({ extended: true }));  //Indicamos que vamos a recibir bodys que no solo son texto

//---------------------Configuro acciones websocket----------------------------
ioServer.on('connection', async socket => {
    console.log(`¡Nuevo cliente conectado: ${socket.id}!`);
    
    socket.emit('lista-productos', await contenedorProductos.getAll());
    socket.emit('lista-mensajes', await contenedorMensajes.getAll());

    socket.on('nuevo-mensaje', async mensaje => {        
        await contenedorMensajes.save(mensaje);
        ioServer.sockets.emit('lista-mensajes', await contenedorMensajes.getAll());
    });

    // socket.on('nuevo-producto', async producto => {        
    //     await contenedorProductos.save(producto);
    //     ioServer.sockets.emit('lista-productos', await contenedorProductos.getAll());
    
    // });

});
//-----------------------------------------------------------------------------

//---------------------Configuro rutas de mi API REST-----------------------------------------
app.post('/api/productos', async (req, res) => {
    const producto = await contenedorProductos.save(req.body);
    res.send(producto);
    ioServer.sockets.emit('lista-productos', await contenedorProductos.getAll());
});
//-----------------------------------------------------------------------------

//---------------------Levanto el server---------------------------------------
const PORT = process.env.PORT || 8080   //para que se configure correctamente el puerto en glitch

const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 });
server.on("error", error => console.log(`Error en servidor ${error}`));
//-----------------------------------------------------------------------------
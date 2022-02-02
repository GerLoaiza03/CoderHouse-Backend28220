//Import express
const express = require("express");

// //Import express-handlebars
// const {engine} = require('express-handlebars');

//Import cors
const cors = require("cors");

//Import uploader
const upload = require('./services/uploader.js')

//Iniciar
const app = express();
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log("Servidor escuchando en: " + PORT);
});

//Import container
const Container = require("./class/container");
//Instanciar container
const container = new Container();


// app.engine("hbs", engine({extname: ".hbs",partialsDir: __dirname + "/views/partials"
// }));
app.set("views", "./views");
app.set("view engine", "ejs");


//Import router
const routerProducts = require("./router/productos");


//Configurar para indicar que products pueda recibir json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Public
app.use(express.static('public'));
app.use(cors());


//Middleware manejo de errores
app.use((err, req, res, next) => {
    console.log(err.stack);
});

app.use((req, res, next) => {
    let timestamp = Date.now();
    let time = new Date(timestamp);
    console.log("Petición Realizada a las: " + time.toTimeString().split(" ")[0]);
    next();
});

app.get("/", (req, res) => {
    res.send(`<h1> Saludo Tutora, Esta es la Entrega "Desafío Cuatro", Author: Germán Loaiza\n <ul> <li>GET. '/api/productos'\n</li> <li>GET. '/api/products/:id'\n</li> <li>POST. '/api/products'\n
    <li>PUT. '/api/products/:id'\n</li><li>DELETE. '/api/products/:id'\n</li><li>FORMULARIO. '/form.html'\n <a href="./form.html">Ingrese al Form<a/></li></ul></h1>`);
});

//Middleware
app.use("/api/products", routerProducts);

//Get random product
app.get("/api/productoRandom", (req, res) => {
    try {
    container.getProductoRandom().then((result) => {
        let products = result.payload;
        console.log(products);
        if (result.status === "success") {
            console.log("RESULT", result);
            res.send(result.payload);
        } else {
            res.send(res.message);
        }
    });
    } catch (error) {
        res.send(res.message);
    }
});

//Se envía como un form data
app.post(
    "/api/uploadfile",
    upload.fields([
      {
        name: "file",
        maxCount: 1
      },
      {
        name: "documents",
        maxCount: 3
      }
    ]),
    (req, res) => {
      const files = req.files;
      console.log(files);
      if (!files || files.length === 0) {
        res.status(500).send({ messsage: "No se subió archivo" });
      }
      res.send(files);
    }
  );
  
  // vista productos en
let products = [];
app.get("/view/products", (req, res) => {
  container.getAll().then((result) => {
    let info = result.payload;
    let preparedObject = {
      products: info
    };
    res.render("products.ejs", preparedObject);
  });
});

app.post("/view/products", (req, res) => {
  let product = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail
  };
  products.push(product);
  res.send({ message: "Registrado" });
});

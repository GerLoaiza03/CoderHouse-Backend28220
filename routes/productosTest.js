const express = require("express");
const faker = require("faker")

const app = express();
const { Router } = express;
const router = new Router();


//GET
router.get("/", (req, res) => {
    //Genero un array vacio, mediante un push add 5 productos con faker y lo envio a la vista.
    let arrayPtos = [];
    
    for (let index = 0; index < 5; index++) {
        arrayPtos.push({
            titulo: faker.commerce.productName(),
            precio: faker.commerce.price(),
            thumbail: faker.image.image()
        })
    }

    res.send(arrayPtos)
});

//EXPORT MODULO ROUTER
module.exports = router;
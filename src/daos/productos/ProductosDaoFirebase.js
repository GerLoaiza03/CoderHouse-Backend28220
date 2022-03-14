const ContenedorFirebase = require ("../../contenedores/ContenedorFirebase")

class ProductosDaoFirebase extends ContenedorFirebase {

    constructor() {
        super('productos',{
            timestamp: {type: String, required: true},
            nombre: {type: String, required: true},
            descripcion: {type: String, required: true},
            codigo: {type: Number, required: true},
            thumbnail: {type: String, required: true},
            precio: {type: Number, required: true},
            stock: {type: Number, required: true}
        })
    }
}

module.exports = ProductosDaoFirebase
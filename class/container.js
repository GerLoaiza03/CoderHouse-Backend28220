const fs = require("fs");

class Container {
async save(product) {
    try {
        let data = await fs.promises.readFile("./files/productos.txt", "utf-8");
        let products = JSON.parse(data);
        if (products.some((pro) => pro.title === product.title)) 
        {
            return { 
                status: "error", 
                message: "El Producto ya Existe" };
        } else {
            let dataObj = {
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
                id: products.length + 1
            };    
            products = [...products, dataObj];
        try {
            await fs.promises.writeFile(
                "./files/productos.txt",
                JSON.stringify(products, null, 2));
            return { 
                status: "success", 
                message: "Producto Almacenado Exitosamente" };
        } catch (error) {
            return { 
                status: "error", 
                message: "No se Almaceno el Producto" };
            }
        }
    } catch (error) 
    {   //Cuando no Existe el Archivo "productos.txt"
        let dataObj = {
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            id: 1
        };

        try {
            await fs.promises.writeFile(
            "./files/productos.txt",
            JSON.stringify([dataObj], null, 2)
            );
            return { 
                status: "success", 
                message: "Se Crea el Archivo y se Guarda el Producto Exitosamente" 
            };
        } catch (error) {
            return {
                status: "error",
                message: "No se pudo Crear el Archivo y Guardar Producto: " + error
            };
        }
    }
}

async getById(id) {
    let data = await fs.promises.readFile("./files/productos.txt", "utf-8");
    try {
        
        let products = JSON.parse(data);
        let product = products.filter((product) => product.id === id);
        // let result = products.filter((product) => product.id !== id);
        // const producto = products.filter((x) => x.id == id);
        // console.log(producto)
        console.log(product.id)
    if (product === id) {
        return { 
            status: "successs", 
            product: product 
        };
    } else {
        return {
            status: "error",
            // product: null,
            message: "Producto no Encontrado"
        };
    }
    } catch (error) {
        return {
            status: "error",
            message: "No se encontró el Producto"
        };
    }
}

async getAll() {
    try {
        let data = await fs.promises.readFile("./files/productos.txt", "utf-8");
        let products = JSON.parse(data);
        console.log(products);
        return { 
            status: "success", 
            message: "Productos Encontrados Exitosamente" 
        };
    } catch (error) {
        return {
            status: "error",
            message: "No se Encontrarón los Productos"
        };
    }
}

async deleteById(id) {      
    try {// Lee el Archivo para Obtener Array de Productos y Elimina el Producto por ID
        let data = await fs.promises.readFile("./files/productos.txt", "utf-8");
        let products = JSON.parse(data);
        let result = products.filter((product) => product.id !== id);
        products = result;

      //Escribe el Archivo con el Nuevo Array 
    await fs.promises.writeFile(
        "./files/productos.txt",
        JSON.stringify(products, null, 2)
    );
        return { 
            status: "success", 
            message: "Producto Eliminado Exitosamente" };
    } catch (error) {
        return {
            status: "Error",
            message: "No se encontró el Producto a Eliminar"
        };
    }
}

async deleteAll() {
    try {
    await fs.promises.writeFile(
        "./files/productos.txt", 
        JSON.stringify([])
    );

    return { 
        status: "success", 
        message: "Productos Eliminados Exitosamente" };
    } catch (error) {
    return {
        status: "error",
        message: "No se Pudieron Eliminar los Productos"
    };
    }
}
}

module.exports = Container;
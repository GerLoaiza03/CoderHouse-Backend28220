const fs = require('fs')

class containerPro {
    constructor(filePath) {
        this.filePath = filePath;
        this.idCount = 0;
        this.productos = [];
    }
    
    async read(){
        try {
            const json = await fs.promises.readFile(this.filePath,this.encoding)
            this.productos = JSON.parse(json)
        }
        catch (error) {
            this.productos = []   //considero que no existe si falla el read
        }
    }

    async write(){
        try {
            const json = JSON.stringify(this.productos, null, 2)
            await fs.promises.writeFile(this.filePath, json ,this.encoding)
        }
        catch (error) {
            throw new Error(`Error al escribir: ${error.message}`)
        }
    }



    async save(newProducto){
        await this.read()
        // this.idCount = this.idCount + 1
        this.idCount = this.productos.length + 1
        newProducto.id = this.idCount

        this.productos.push(newProducto)
        await this.write()

        return newProducto
    }

    async indexById(idProducto) {
        await this.read()

        for (let i = 0; i < this.productos.length; i++) {
            if ( (this.productos[i]).id == idProducto ) {
               return i
            }
         }
        
        return null
    }

    async getById(idProducto) {
        const index = await this.indexById(idProducto)
        
        if(index == null) {
            return null
        }
        
        return this.productos[index]
    }

   async  getAll() {
        await this.read()


        return this.productos
    }

    async deleteById(idProducto) {
        const index = await this.indexById(idProducto)

        if(index != null) {
            const eliminated = this.productos.splice(index, 1)
            return eliminated[0]
        }

        return null
    }

    async deleteAll(){
        this.Productos = []
        await this.write()
    }

    async update(id, newProducto){
        const actualProducto = await this.getById(id)

        if( actualProducto == null) {
            return null
        }

        for (const property in newProducto) {
            actualProducto[property] = newProducto[property]          
        }
                
        return actualProducto
    }

}

module.exports = containerPro
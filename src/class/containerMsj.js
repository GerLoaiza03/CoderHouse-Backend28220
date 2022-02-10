const fs = require('fs')

class containerMsj
 {
    constructor(filePath) {
        this.filePath = filePath;
        this.idCount = 0;
        this.encoding = 'utf-8';
        this.Mensajes = [];
    }

    async read(){
        try {
            const json = await fs.promises.readFile(this.filePath,this.encoding)
            this.Mensajes = JSON.parse(json)
        }
        catch (error) {
            this.Mensajes = []   //considero que no existe si falla el read
        }
    }

    async write(){
        try {
            const json = JSON.stringify(this.Mensajes, null, 2)
            await fs.promises.writeFile(this.filePath, json ,this.encoding)
        }
        catch (error) {
            throw new Error(`Error al escribir: ${error.message}`)
        }
    }

    async save(newMensaje){
        await this.read()
        this.idCount = this.idCount + 1
        newMensaje.id = this.idCount

        this.Mensajes.push(newMensaje)
        await this.write()

        return newMensaje.id
    }

    async indexById(idMensaje) {
        await this.read()
        
        for (let i = 0; i < this.Mensajes.length; i++) {
            if ( (this.Mensajes[i]).id == idMensaje ) {
               return i
            }
         }
        
        return null
    }

    async getById(idMensaje) {
        const index = await this.indexById(idMensaje)
        
        if(index == null){
            return null
        }
        
        return this.Mensajes[index]
    }

    async getAll() {
        await this.read()

        return this.Mensajes
    }

    async deleteById(idMensaje) {
        const index = await this.indexById(idMensaje) //actualiza this.Mensajes
       
        if(index != null) {
            this.Mensajes.splice(index, 1)
            await this.write()
        }
    }

    async deleteAll(){
        this.Mensajes = []
        await this.write()
    }
}

module.exports = containerMsj

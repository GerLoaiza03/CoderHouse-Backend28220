const libros = [{ nombre: 'El Señor de las Moscas', autor: 'William Golding' }, { nombre: 'Fundación', autor: 'Isaac Asimov' }]

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
            this.nombre = nombre,
            this.apellido = apellido,
            this.libros = libros,
            this.mascotas = mascotas;
    }

    getFullName() {
        // return "El Nombre del usuario es: " + this.nombre + " " + this.apellido
        return `El Nombre del usuario es ${this.nombre} ${this.apellido} `
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        // return "Tiene " + this.mascotas.length + " mascotas"
        return `Tiene ${this.mascotas.length} mascotas`
    }   

    addBook(nombre, autor) {
        const addBook = { nombre: nombre, autor: autor }
        this.libros.push(addBook)
    }

    getBookNames() {
        const Arr = libros.map(libros => libros.nombre)
        return Arr;
    }
}


let usuario = new Usuario("Germán", "Loaiza", libros, ["Perro", "Gato"])

console.log(usuario.getFullName())
console.log(usuario.getBookNames())
console.log(usuario.countMascotas())
usuario.addMascota("Conejo")
usuario.addBook("Domine JavaScript", "Pablo E. Fernandez")
console.log(usuario.getBookNames())
console.log(usuario.countMascotas())
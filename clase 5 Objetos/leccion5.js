/*
Declara un objeto libro con:
    título: "El señor de los anillos"
    autor: "J.R.R. Tolkien"
    año: 1954
Modifica el año a 1955.
Agrega una propiedad genero con el valor "Fantasía".
Usa destructuring para crear variables titulo y autor.
Declara otro objeto infoExtra con:
    paginas: 1216
    editorial: "Minotauro"
Usa spread para crear un nuevo objeto libroCompleto que combine libro e infoExtra.
Imprime libroCompleto.
*/

let libro = {
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    año: 1954
}
libro.año = 1955;
libro.genero = "fantasía";
const {titulo, autor} = libro;

let infoExtra = {
    paginas: 1216,
    editorial: "Minotauro"
}

const libroCompleto = {...libro, ...infoExtra}
console.log(libroCompleto);
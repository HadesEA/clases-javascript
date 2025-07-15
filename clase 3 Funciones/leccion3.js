// Declara una función clásica saludar que reciba un nombre e imprima “Hola, [nombre]”.
// Declara una arrow function multiplicar que reciba dos números y retorne el resultado.
// Declara una función procesar que reciba un nombre y una función callback, y la ejecute.
// Usa procesar para llamar a saludar con tu nombre.
// Imprime el resultado de multiplicar con dos números que elijas.

function saludar(nombre) {
    console.log("Hola, " + nombre + "!")
}
saludar("Pepe");

let multi = (a, b) => {return a * b}
console.log(multi(5, 7));

function procesar(nombre, functionCallback) {
    functionCallback(nombre);
}
procesar("Juan", saludar);

console.log(multi(9,7))
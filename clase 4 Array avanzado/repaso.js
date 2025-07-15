// forEach()
// Recorre todos los elementos , como un for pero más legible 
let numeros = [1, 2, 3, 4, 5]
// Con forEach
numeros.forEach(function(num) {
    console.log("Número:", num)
});

// Con Arrow function
numeros.forEach(num => console.log("Números:", num))

// Map(), crea un nuevo array aplicando una función a cada elemento.
let cuadrados = numeros.map(num => num * num);
console.log(cuadrados);

// Filter, crea un nuevo array solo con los elementos que cumplen una condición
let pares = numeros.filter(num => num % 2 == 0)
console.log(pares)

// Reduce, reduce el array a un único valor, por ejemplo lo suma de todos los números
let suma = numeros.reduce((acumulador, num) => acumulador + num, 0) // Acumulador empieza en 0 (el segundo argumento)
console.log(suma)

// find(), devuelve el primer elemento que cumpla una condición
// some(), devuelve true si al menos uno cumple la condición
let encontrado = numeros.find(num => num > 3);
let hayMayorA10 = numeros.some(num => num > 10);
console.log(encontrado, hayMayorA10)

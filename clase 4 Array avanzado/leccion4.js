// Declara un array numeros con estos valores: [3, 6, 9, 12, 15]
// Usa forEach para imprimir cada número.
// Usa map para crear un nuevo array con el doble de cada número e imprímelo.
// Usa filter para obtener solo los números mayores a 10 e imprímelos.
// Usa reduce para sumar todos los números e imprime el resultado.
// Usa find para encontrar el primer número mayor a 10 e imprímelo.
let numeros = [3, 6, 9, 12, 15];
numeros.forEach(num => console.log(num));

let doble = numeros.map(num => num * num);
console.log("Números elevados:", doble)

let numMayA10 = numeros.filter(num => num > 10)
console.log("Números mayores a 10:", numMayA10)

let sumaNumeros = numeros.reduce((acumulador, num) => acumulador + num, 0)
console.log("Suma de los números:", sumaNumeros)

let primerMayA10 = numeros.find(num => num > 10)
console.log("Primer número mayor a 10:", primerMayA10)
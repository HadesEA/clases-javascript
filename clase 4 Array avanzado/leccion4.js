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
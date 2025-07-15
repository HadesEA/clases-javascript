let x = 10;
let y = 3;

// Operadores
console.log(x + y) // 13
console.log(x - y) // 7
console.log(x * y) // 30
console.log(x / y) // 33.333....
console.log(x % y) // 1 (residuo)
console.log(x ** y) // 1000 (exponente)

// Comparaciones
console.log(x == y) // false
console.log(x != y) // true
console.log(x > y) // true
console.log(x < y) // false
console.log(x >= y) // true
console.log(x <= y) // false

// Diferencia entre '==' y '==='
console.log(5 == '5') // true (compara valor haciendo conversión de tipo)
console.log(5 === '5') // false (Compara valor y tipo)


// Condicionales
let edad = 22;

if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

// Condicionales múltiples
let nota = 85

if (nota >= 90) {
    console.log("Excelente")
} else if (nota >= 70) {
    console.log("Bien")
} else {
    console.log("Necesita mejorar")
}

// Operador ternario para casos simples únicamente
let permiso = (edad >= 18) ? "Puedes entrar" : "No puedes entrar"
console.log(permiso) // Puedes entrar

// Bucles 
// For
for (let i = 0; i < 5; i++){
    console.log("iteracion:", i)
}

// For para recorrer arrays
let colores = ["Rojo", "Azul", "Negro"]
for (let color of colores) {
    console.log(color);
}

// while
let i = 0;
while (i < 5){
    console.log("While:", i);
    i++;
}
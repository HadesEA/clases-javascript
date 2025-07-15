// Las funciones son ciudadanos de primera clase en JS:
// * Se pueden guardar en variables
// * Se pueden pasar como argumentos a funciones
// * Se pueden devolver como resultado de funciones

// Declaración clásica
function saludar(nombre) {
    console.log("Hola, " + nombre + "!")
}

saludar("Juan");

// Expresión de función (function expression)
const despedir = function (nombre){
    console.log("Adiós, " + nombre + "!")
}
// Invocación de la función
despedir("Pedro");

// Arrow function (función flecha)
const saludarArrow = (nombre) => {
    console.log("Hole desde arrow, " + nombre + "!")
}

saludarArrow("Hades")

// Si tienes un parámetro y una línea de retorno puede ser más corta:
const saludarArrow2 = (nombre) => console.log("Hola desde arrow2, " + nombre + "!")
saludarArrow2("Hades")

// Funciones como parámetros (callbacks)
function procesar(nombre, funcionCallback) {
    funcionCallback(nombre);
}

procesar("hades", saludar)
procesar("hades", despedir)
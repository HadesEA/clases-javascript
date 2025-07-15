// Los objetos en JavaScript son colecciones de pares clave/valor.
// Parecidos a diccionarios en Python o clases simples en C#

// Crear y usar objetos
const persona = {
    nombre: "Hades",
    edad: 1000,
    ciudad: "Athenas"
}

// Maneras de imprimirlo
console.log(persona.nombre)
console.log(persona["edad"])

// Agregar / Modificar / Eliminar propiedades
persona.edad = 1001;
persona.profesion = "Desarrollador";
delete persona.ciudad;

console.log(persona);

// Destructuring 
// Extraer propiedades de forma rápida.
const {nombre, profesion} = persona;
console.log(nombre)
console.log(profesion)

// También funciona con arrays
const numeros = [1, 2, 3]
const [primero, segundo] = numeros
console.log(primero)
console.log(segundo)

// Spread operator (...)
// Sirve para copiar o combinar objetos o arrays:

// Combinar objetos
const copiaPersona = { ...persona}
console.log(copiaPersona)

// Combinar objetos
const datosExtra = {pais: "México", hobby: "Ajedrez"}
const personaCompleta = {...persona, ...datosExtra}
console.log(personaCompleta)

// Copiar / Combinar arrays
const otrosNumeros = [40, 50];
const combinados = [...numeros, ...otrosNumeros];
console.log(combinados)
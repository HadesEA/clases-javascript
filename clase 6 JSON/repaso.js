// JSON = JavaScript Object Notation
// Es una forma de representar datos como texto.
// Se parece mucho a los objetos de JS, pero:
// Las claves siempre van entre comillas dobles ".
// No admite funciones, solo datos (string, number, boolean, array, null, object).

// {
//     "nombre": "Hades",
//     "edad": 1000,
//     "ciudad": "El Infierno",
//     "coloresFavoritos": ["Rojo", "Negro"]
// }

// Convertir entre objeto y JSON
// JSON.stringify() convierte un objeto de JS a una cadena JSON
const persona = { nombre: "Hades", edad: 22}
const jsonString = JSON.stringify(persona);
console.log(jsonString)

// JSON.parse() convierte una cadena JSON a un objeto de JS:
const text = '{"nombre":"Hades","edad":22}';
const objeto = JSON.parse(text)
console.log(objeto.nombre)

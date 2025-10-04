// Métodos de cadenas de texto
// Estos métodos se pueden utilizar a modo de interactuar con las cednas de texto
// a fin de corroborrar información, modificarla, etc.
let cad = "abs"
let cadena = "Cadena de prueba"
let concatenar = " de metodos"
let endswith = "prueba"
let startswith = "Cadena"

// Concatenación (Unión de dos cadenas de texto)
console.log(cadena);
console.log(cadena.concat(concatenar));
console.log();

// Comprobamos que el valor real de la variable "cadena" no se ve modificado al concatenar.
console.log(cadena);
console.log();

// metodo que verifica si una cadena de texto inicia con x valor
// se le puede dar texto o una variable.
console.log(cadena.startsWith(startswith));
console.log();

// Metodo que verifica si una cadena de texto termina con x valor
// se le puede dar texto o una variable.
console.log();
console.log(cadena.endsWith(endswith));

// Metodo que verifica que una cadena de caracteres se encuentre dentro de una cadena
// en otras palabras da true si existe la palabra que le pedimos verificar, en la cadena, y sino está da false
console.log();
console.log(cadena.includes("prueba")); // True
console.log(cadena.includes("papanicolao")); // False

// Metodo que devuelve la ULTIMA posicion del caracter, palabra o variable que le demos.
// Sino se encuentra la letra o palabra, nos da -1
console.log();
console.log(cadena.lastIndexOf("a")); // 15
console.log(cadena.lastIndexOf("z")); // -1

// Metodo que devuelve la primera posición del caracter, palabra o variable que le demos.
// Sino se encuentra la letra o palabra, nos da -1.
console.log();
console.log(cadena.indexOf("a")); // 1
console.log(cadena.indexOf("z")); // -1

// Ambos pad agregan texto x cantidad de veces hasta que se rellene la cadena original
// La variable cad tiene 3 caracteres, por lo que si le damos un valor (10, "y") a padStart
// la cadena pasará a tener 10 espacios, rellenando con el texto brindado los espacios que quedan vacíos
// al agregar la cantidad de espacios deseados. Como la cadena cad tiene 3 caracteres
// se le resta a 10 espacios que nosotros queremos que tenga, y quedan 7, 7 caracteres que se agregarán a la cadena 
console.log();
console.log(cad.padStart(10,"yey")); // yeyyeyyabs
console.log(cad.padEnd(10,"e")); // abseeeeeee

// Metodo que permite repetir x cantidad de veces una cadena de texto.
console.log();
console.log(cadena.repeat(2)); // Cadena de pruebaCadena de prueba

// Metodo que crea arrays separando una cadena de texto en base a un parámetro dado
console.log();
console.log(cadena.split(" ")); // Se le da un espacio para que ese sea el parámetro de la separación

// Metodo que toma únicamente un rango de posiciones y la muestra. 
console.log();
console.log(cadena.substring(8,15));

// Metodo que convierte a minúsculas un texto
console.log();
console.log(cadena.toLowerCase());

// Metodo que convierte a mayúsculas un texto
console.log();
console.log(cadena.toUpperCase());

// Metodo que convierte a texto una variable
// es notorio con las variables de tipo número
// donde algunas operaciones de números se convierten en una concatenación en lugar de una operación.
// De igual manera se podría convertir un array en cadena de texto con este método.
console.log();
console.log(cadena.toString());

// Método que devuelve la cantidad de caracteres que tiene un elemento.
console.log();
console.log(cadena.length());

// Metodo que elimina los espacios de una cadena, modificando la longitud de la cadena 
console.log();
console.log(cadena.trim()); // Elimina los espacios del inicio y el final
console.log(cadena.trimStart()); // Elimina los espacios del inicio 
console.log(cadena.trimEnd()); // Elimina los espacios del final 
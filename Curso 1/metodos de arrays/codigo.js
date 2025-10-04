// PARA REFERIRSE AL FINAL DE UN ARRAY SIN TENER QUE ADIVINAR SU LONGITUD SE UTILIZA EL VALOR -1


// -------- METODOS TRANSFORMADORES --------

// Metodos para los arrays o listos
// Estos nos permiten modificar e interactuar con las listas de manera más simple.
let numeros = [1,2,3,4,5];

// Metodo que elimina el último elemento de una lista, pero antes de eso nos lo devuelve
// para mostrarlo o usarlo, dicho elemento se puede guardar en una variable
console.log(numeros);
console.log(numeros.pop()+"\n");

// Método que elimina el primer elemento de la lista, devolviéndolo devolviendolo al usar la función
// y borrandolo de la lista original.
console.log(numeros);
console.log(numeros.shift()+"\n");

// Metodo que agrega elementos al final del array y devuelve la longitud del array
console.log(numeros);
console.log(numeros.push(5,6)+"\n");

// Metodo que invierte el orden de los elementos de la lista, ni más ni menos.
console.log(numeros);
console.log(numeros.reverse()+"\n");

// Metodo que agrega elementos al inicio del array, y devuelve la longitud del array.
console.log(numeros.reverse());
console.log(numeros.unshift(0,1));
console.log(numeros+"\n");

// Metodo que ordena de forma lexicográfica, ordena de menor a mayor en números y de a-z en cadenas de texto.
console.log(numeros.sort()+"\n");

// Metodo que elimina elementos o los reemplaza dependiendo el cómo usemos el método, y los devuelve para mostrarte cuáles son los que se eliminan

// Si solo le damos dos valores numéricos apartir del index del primer valor, comenzará a borrar la
// cantidad de elementos que le demos como segundo valor.

// Y si queremos reemplazar, en lugar de borrar, además de los dos valores
// le agregaremos los valores que van a sustituir a la cantidad de elementos que se van a eliminar.

// Tambien puedes solo agregar elementos poniendo un 0 en la cantidad de elementos a eliminar.
console.log(numeros.splice(2,3,3,2,1));
console.log(numeros);
console.log(numeros.splice(1,3));
console.log(numeros);
console.log(numeros.splice(3,0,10,11));
console.log(numeros+"\n");

// -------- METODOS ACCESORES --------

// Metodo que convierte el array en cadena de texto, además de permitirnos
// asignarle el caracter de separación. Join crea una cadena de texto que se puede asignar a una variable
// más no modifica el arreglo original.
let palabras = ["pato","perro","gato","pajaro","lagartija"];
let resultado = palabras.join("\n");
console.log(resultado+"\n");

// Metodo que toma una cantidad de datos en un rango de (inicio,final) y los muestra
// sin contar al último elemento del rango dado.
console.log(palabras.slice(1,3)+"\n");


// -------- METODOS DE REPETICION --------

// Los métodos filter y foreach nos permiten recorrer el arreglo por completo, dandole una función para que funcione.
// palabras.filter(numero => console.log(numero + "\n"));
// A su vez filter se destaca de forEach por lo siguiente.

// Metodo que permite filtrar un array en base a una condición, y los elementos que cumplan dicha condición
// crearán un nuevo array, el cuál podemos almacenar en una variable
console.log(palabras.filter(numeros => numeros.length > 4)+"\n");

recorrido = palabras.forEach(numeros => console.log(numeros + "\n"));
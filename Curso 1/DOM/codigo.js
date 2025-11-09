// Selección de elementos del DOM

let obtenerObjeto = document.getElementById("parrafo"); // Selecciona el primer elemento con el id parrafo
let obtenerObjeto1 = document.getElementsByClassName("nodos"); // Selecciona todos los elementos con la clase parrafo
let obtenerObjeto2 = document.getElementsByTagName("p"); // Selecciona todos los elementos con la etiqueta p
let obtenerObjeto3 = document.querySelector(".manejo"); // Selecciona el primer elemento que coincida con el selector o selectores CSS
let obtenerObjeto4 = document.querySelectorAll(".manejo__item"); // Selecciona todos los elementos que coincidan con el selector o selectores CSS

obtenerObjeto1[0].style.backgroundColor = "yellow"; // Cambia el color de fondo del primer elemento seleccionado a amarillo

// Modificación de contenido y estilos

obtenerObjeto4[2].style.color = "red"; // Cambia el color del tercer elemento seleccionado a rojo

const rangoInput = document.querySelector('.rangoInput');

rangoInput.setAttribute("type", "color"); // Cambia el atributo type a number
rangoInput.getAttribute("type"); // Obtiene el valor del atributo type 
rangoInput.removeAttribute("type"); // Elimina el atributo type

// Atributos globales

const titulo = document.querySelector('.titulo');
titulo.setAttribute("contentEditable", "true"); // Permite editar el contenido del elemento
titulo.setAttribute("contentEditable", "false"); // Impide editar el contenido del elemento, esto está por defecto

titulo.setAttribute("dir", "rtl"); // Establece la dirección del texto de derecha a izquierda
titulo.setAttribute("dir", "ltr"); // Establece la dirección del texto de izquierda a derecha

titulo.setAttribute("draggable", "true"); // Permite arrastrar el elemento
titulo.setAttribute("draggable", "false"); // Impide arrastrar el elemento, esto está por defecto

titulo.setAttribute("hidden", ""); // Oculta el elemento
titulo.removeAttribute("hidden"); // Muestra el elemento

titulo.setAttribute("tabindex", "1"); // Permite enfocar el elemento con la tecla tabulador

titulo.setAttribute("title", "Título de la página"); // Establece un texto emergente al pasar el cursor sobre el elemento


// Atributos de inputs

const input = document.querySelector('.inputTexto');
document.writeln(input.className); // Muestra la clase del input
document.writeln(input.value); // Muestra el valor del input

input.type = "password"; // Cambia el tipo de input a password
input.type = "file"; // Cambia el tipo de input a image
input.accept = "image/png" // Establece el tipo de archivo que se puede subir

const inFo = document.querySelector(".inputForm");
inFo.minLength = "5"; // Establece la longitud mínima de caracteres
inFo.placeholder = "Azumakina"; // Establece un texto de sugerencia
inFo.required = true; // Establece que el campo es obligatorio

// Atributos de estilos

titulo.style.backgroundColor = "lightblue"; // Cambia el color de fondo del título a azul claro
titulo.style.marginTop = "30px";

// Atributos de ClassList y sus métodos

titulo.classList.add("nuevaClase"); // Agrega una nueva clase al título
titulo.classList.item(1); // Muestra la clase en la posición 1
titulo.classList.remove("nuevaClase"); // Elimina la clase nuevaClase del título
titulo.classList.toggle("nuevaClase"); // Agrega la clase nuevaClase si no existe, si existe la elimina
titulo.classList.contains("titulo"); // Devuelve true si el título tiene la clase titulo, de lo contrario false
titulo.classList.replace("titulo", "nuevoTitulo"); // Reemplaza la clase titulo por nuevoTitulo



document.writeln(titulo.textContent); // Muestra el contenido de texto del título
document.writeln(titulo.innerText); // Muestra el contenido de texto del título, respetando los estilos CSS
alert(titulo.innerHTML); // Muestra el contenido HTML del título
document.writeln(titulo.outerText); // Muestra el contenido de texto del título, respetando los estilos CSS
alert(titulo.outerHTML); // Muestra el contenido HTML del título

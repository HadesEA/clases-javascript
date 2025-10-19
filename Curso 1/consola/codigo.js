console.assert(5 > 3); // Si es falso se muestra un error en consola, si es verdadero no pasa nada
console.error("Esto es un error"); // Muestra un mensaje de error en consola
console.warn("Esto es una advertencia"); // Muestra una advertencia en consola
console.info("Esto es un mensaje informativo"); // Muestra un mensaje informativo en consola
console.table({ // Muestra una tabla en consola
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
});
console.dir([1,5,4,2,6,3,7]); // Muestra una lista interactiva en consola
console.clear(); // Limpia la consola
console.count("contador"); // Cuenta cuántas veces se ha llamado a esta línea
console.count("contador");
console.count("contador");
console.countReset("contador"); // Reinicia el contador
console.count("contador");
console.time("tiempo"); // Inicia un temporizador
console.timeLog(); // Muestra el tiempo transcurrido
console.timeEnd();  // Finaliza el temporizador y muestra el tiempo total
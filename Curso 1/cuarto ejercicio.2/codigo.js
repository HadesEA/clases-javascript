// Crear función para preguntar a qué materia se quiere inscribir
// Si ya hay 20 alumnos anotados negar la inscripción
// Si hay menos inscribir y añadir a la lista de alumnos
const materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
};

const incripcionMateria = (alumno,materia) => {

    if(materias[materia].length >= 21){
        console.log(`Lo siento ${alumno}, las clases de ${materia} ya están llenas.`);
    } else{
        materias[materia].push(alumno);
        console.log(`Felicidades ${alumno}, te has inscrito a ${materia}.`);
        console.log(materias);
    }
}

incripcionMateria("Cofla","fisica");
incripcionMateria("Maria","quimica");
incripcionMateria("Pepito","programacion");
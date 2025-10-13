const obtenerInformacion = (materia)=>{
    const materias = {
        fisica: ["Perez","pedro","pepito","cofla","maria"],
        programacion: ["Dalto","pedro","juan","pepito"],
        logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
        quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
    };
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else{
        return materias;
    }
}

const mostrarInformacion = (materia) =>{
    let informacion = obtenerInformacion(materia);
    if (informacion !== false){
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        console.log(`El profesor de ${informacion[1]} es: ${profesor}.\nLos alumnos inscritos son: ${alumnos}\n`);
    }
}

const cantidadDeClases = (alumno)=>{{
    let informacion = obtenerInformacion();
    let cantidadClases = 0;
    let materias = []
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadClases++;
            materias.push(info);
        }
    }
    console.log(`${alumno} está en ${cantidadClases} materias: ${materias + " "}\n`);
}}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("quimica");
mostrarInformacion("logica");
cantidadDeClases("pepito");
cantidadDeClases("cufla");
cantidadDeClases("cofla");
cantidadDeClases("pedro");
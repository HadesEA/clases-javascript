const materias = {
    fisica: [90,6,3],
    matematica: [80,8,2],
    logica: [85,7,4],
    quimica: [70,6,5],
    calculo: [95,9,1],
    programacion: [79,7,4],
    biologia: [75,9,2],
    bbdd: [98,9,1],
    algebra: [100,10,4],
}

const aprobo = () => {
    for (materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        
        console.log(materia)
        if (asistencias >= 90){
            console.log("%cAsistencias normales", "color: green")
        } else {
            console.log("%cFalta de asistencias", "color: red")
        }

        if (promedio >= 7){
            console.log("%cPromedio normal", "color: green")
        } else {
            console.log("%cPromedio desaprobado", "color: red")
        }

        if (trabajos >= 3){
            console.log("%cTrabajos entregados\n", "color: green")
        } else {
            console.log("%cFalta de trabajos\n", "color: red")
        }
    }
}

aprobo();
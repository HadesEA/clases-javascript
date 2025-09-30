let nombres = ["Maximo", "Decimo", "Meridio", "Del", "Sol"];
let numeros = [1,2,3,4,5]

// forDetenible en este caso es un label al cuál se le puede dar un uso como el mostrado
// donde se hace referencia la nombre del label para detener el for principal aun estando 
// en un for anidado
forDetenible: 
for (nombre of nombres){
    if(nombre == "Meridio"){
        for (numero in numeros){
            document.write(numero + "<br>")
            if (numero == 3)
                break forDetenible;
        }
    } else {
        document.write(nombre + "<br>")
    }
}


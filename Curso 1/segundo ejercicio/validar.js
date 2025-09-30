let free = false;

const validarCliente = time =>{
    let edad = prompt("Qué edad tienes? ")
    if (edad >= 18 && time == 2 && !free){
        alert("Puedes entrar gratis por ser la primera persona después de las 2AM")
        free = true
    } else if (edad >= 18){
        alert(`Son las ${time}hrs y puedes pasar pero tienes que pagar la entrada`)
    } else{
        alert("A dónde crees que vas?")
    }
}

validarCliente(3)
validarCliente(4)
validarCliente(5)
validarCliente(12)
validarCliente(3)
validarCliente(2)
validarCliente(2)
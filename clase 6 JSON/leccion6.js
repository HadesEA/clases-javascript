// 1️⃣ Declara un objeto usuario con:
//  nombre: "Hades"
//  edad: 22
//  activo: true
// 2️⃣ Usa JSON.stringify para convertir usuario a texto, guárdalo en una variable usuarioJSON y muestra el resultado.
// 3️⃣ Declara una cadena productoJSON que contenga:
// {"nombre":"Laptop","precio":25000,"disponible":true}
// 4️⃣ Usa JSON.parse para convertir productoJSON a un objeto producto y muestra el valor de producto.nombre.
let usuario = {
    nombre: "Hades",
    edad: 22,
    activo: true
}

const usuarioJSON = JSON.stringify(usuario)
console.log(usuarioJSON)

let productoJSON = '{"nombre":"laptop","precio":25000,"disponible":true}'
const producto = JSON.parse(productoJSON)
console.log(producto.nombre)
console.log(producto)


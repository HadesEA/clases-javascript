class animal{
    // contructor de la clase
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    // Metodo de la clase animal, el cuál muestra la información del animal
    verInfo() {
        document.write(this.informacion + "<br>")
    }    
}

// Demostración de herencia, la clase perro
// recibe en el constructor los datos que tiene 
// la clase animal, además de crear el atributo raza
// para la clase perro únicamente.
class Perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    // Metodo static, tiene la peculiaridad
    // de que puede ser invocado o usado
    // sin necesidad de que se haya creado
    // un objeto, o de ser creado uno, puede
    // llamar a este método sin necesidad de 
    // darle parámetros al objeto.
    static ladrar() {
        alert("¡WAW!")
    }
}

let perro = new animal("perro",5,"cafe");
let perro1 = new Perro("perro",5,"cafe", "doberman");
let gato = new animal("gato",3,"blanco");
let pajaro = new animal("pajaro",2,"verde");

// console.log(perro)
// console.log(gato)
// console.log(pajaro)


perro.verInfo();
perro1.verInfo();
perro1.ladrar();
Perro.ladrar();
gato.verInfo();
pajaro.verInfo();
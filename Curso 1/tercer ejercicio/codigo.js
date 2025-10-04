class celulares{
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = rdp;
        this.resolucionCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false
    }

    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular")
        } else {
            alert("El celular está apagado")
        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolución de ${this.resolucionCamara}`)
    }

    grabarVideo(){
        alert(`Video tomado en una resolución de ${this.resolucionCamara}`)
    }

    mostrarInfo(){
        alert(`Información:
            Color: ${this.color}
            Peso: ${this.peso}
            Resolución de Pantalla: ${this.resolucionPantalla}
            Resolución de Camara: ${this.resolucionCamara}
            Memoria RAM: ${this.memoriaRam}
            `)
    }
}

class CelularGamaAlta extends celulares{
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.resolucionCamaraExtra = rdce;
    }

    grabarVideoLento(){
        alert("Estás grabando en cámara lenta")
    }

    reconocimientoFacial(){
        alert("Vamor a iniciar un reconocimiento facial")
    }

    infoAltaGama(){
        alert(`Resolución de cámara extra: ${this.resolucionCamaraExtra}`)
        this.mostrarInfo()
    }
}

// celular1 = new celulares("Rojo","150g","5'","full hd","1GB");
// celular2 = new celulares("Verde","100g","5.4'","full hd","2GB");
// celular3 = new celulares("Azul","120g","5.7'","full hd","2GB");

celularA1 = new CelularGamaAlta("pistache","130g","5.1","4k","3gb","full hd")
celularA1 = new CelularGamaAlta("violeta","120g","5.6","4k","2gb","hd")

// celular1.mostrarInfo();
// celular2.mostrarInfo();
// celular3.mostrarInfo();

celularA1.infoAltaGama();
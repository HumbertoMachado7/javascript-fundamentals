/*
Base de lo que quiero crear como template

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio 2025,
    detalleDelAuto: function(){
        console.log  (`Auto ${this.modelo} ${this.annio}`);
    }
};

*/

// Funcion Constructora

function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
};

var autoNuevo = new Auto("Tesla","Model 3", 2025);
console.log (autoNuevo);

var autoNuevo2 = new Auto("Tesla","Modelo X", 2023);
var autoNuevo3 = new Auto("Toyota","Corolla",2024);

console.log (autoNuevo2);
console.log (autoNuevo3);


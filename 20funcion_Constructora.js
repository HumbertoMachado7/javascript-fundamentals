// 20funcion_Constructora.js - Modificado para exportar

// Funcion Constructora
function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}; // El punto y coma aquí es opcional pero inofensivo

// --- Quitamos el objeto literal comentado y las instancias/logs ---
/*
var miAuto = { ... }; // Comentario eliminado
*/
// var autoNuevo = new Auto("Tesla","Model 3", 2025); // Línea eliminada
// console.log (autoNuevo);                          // Línea eliminada
// var autoNuevo2 = new Auto("Tesla","Modelo X", 2023); // Línea eliminada
// var autoNuevo3 = new Auto("Toyota","Corolla",2024); // Línea eliminada
// console.log (autoNuevo2);                         // Línea eliminada
// console.log (autoNuevo3);                         // Línea eliminada

// Exportamos la función constructora
module.exports = Auto;
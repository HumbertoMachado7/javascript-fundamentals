// 18funcionConstructora.js - Modificado para exportar
function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// ¡Quitamos estas líneas de aquí! Las pruebas las crearán y verificarán.
// var autoNuevo = new Auto("Tesla","Model 3", 2020);
// autoNuevo
// var autoNuevo2 = new Auto ("Tesla","Model X",2022);
// var autoNuevo3 = new Auto ("Toyota","Corolla", 2023);

// Exportamos la función constructora
module.exports = Auto;
// 19creandoListaAuto.js - Refactorizado para Testing

// --- Función Constructora Base ---
function Auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

// --- Función para Generar la Flota ---
function generarFlotaDeAutos(cantidad) {
  // Datos Simulados (dentro de la función o accesibles en su scope)
  const marcasDisponibles = ["Tesla", "Toyota", "Honda", "Ford", "BMW", "Chevrolet"];
  const modelosDisponibles = ["Modelo-A", "Modelo-B", "Sedan", "SUV", "Compacto", "Deportivo"];
  const anioInicial = 2015;
  const anioFinal = 2024;

  let flotaGenerada = []; // Array local para esta generación

  for (let i = 0; i < cantidad; i++) {
      // Generar datos aleatorios
      let marcaAleatoria = marcasDisponibles[Math.floor(Math.random() * marcasDisponibles.length)];
      let modeloAleatorio = modelosDisponibles[Math.floor(Math.random() * modelosDisponibles.length)];
      let annioAleatorio = Math.floor(Math.random() * (anioFinal - anioInicial + 1)) + anioInicial;

      // Crear instancia
      let autoGenerado = new Auto(marcaAleatoria, modeloAleatorio, annioAleatorio);

      // Agregar a la flota local
      flotaGenerada.push(autoGenerado);
  }

  // Devolver la flota creada
  return flotaGenerada;
}

// --- Quitamos la ejecución directa y los console.log de aquí ---
// const cantidadAutosACrear = 30;
// console.log(...);
// let flotaDeAutos = [];
// for (let i = 0; ...) { ... }
// console.log(...);


// --- Exportamos la función generadora y el constructor ---
module.exports = {
  Auto, // Exportamos el constructor por si acaso
  generarFlotaDeAutos // Exportamos la función principal a probar
};
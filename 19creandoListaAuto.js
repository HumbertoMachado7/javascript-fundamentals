// --- Tu Función Constructora Base ---
// (Por convención, la nombramos con Mayúscula inicial: Auto)
function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
  }
  
  // --- Datos Simulados para la Generación Automática ---
  // Podrías tener listas más complejas o leer datos de otro lugar
  const marcasDisponibles = ["Tesla", "Toyota", "Honda", "Ford", "BMW", "Chevrolet"];
  const modelosDisponibles = ["Modelo-A", "Modelo-B", "Sedan", "SUV", "Compacto", "Deportivo"]; // Modelos genéricos para el ejemplo
  const anioInicial = 2015;
  const anioFinal = 2024;
  
  // --- Almacenamiento para los Autos Creados ---300
  // Usaremos un array para guardar todos los objetos 'Auto' que creemos
  let flotaDeAutos = []; // Un array vacío para empezar
  
  // --- El Loop para Crear 30 Autos Automáticamente ---
  const cantidadAutosACrear = 30;
  
  console.log(`Iniciando creación de ${cantidadAutosACrear} autos...`);
  
  for (let i = 0; i < cantidadAutosACrear; i++) {
    // 1. Generar datos aleatorios para este auto específico
    let marcaAleatoria = marcasDisponibles[Math.floor(Math.random() * marcasDisponibles.length)];
    let modeloAleatorio = modelosDisponibles[Math.floor(Math.random() * modelosDisponibles.length)];
    // Genera un año aleatorio entre anioInicial y anioFinal
    let annioAleatorio = Math.floor(Math.random() * (anioFinal - anioInicial + 1)) + anioInicial;
  
    // 2. Crear la nueva instancia del auto usando 'new' y el constructor
    //    Pasamos los datos aleatorios generados a la función constructora
    let autoGenerado = new Auto(marcaAleatoria, modeloAleatorio, annioAleatorio);
  
    // 3. Agregar el auto recién creado a nuestro array 'flotaDeAutos'
    flotaDeAutos.push(autoGenerado);
  
    // Opcional: Mostrar qué auto se creó en esta iteración
    console.log(`Creado auto ${i + 1}: ${marcaAleatoria} ${modeloAleatorio} ${annioAleatorio}`);
  }
  
  // --- Verificación ---
  // Ahora, la variable 'flotaDeAutos' contiene 30 objetos 'Auto'
  console.log(`\n¡Creación completada! Se generaron ${flotaDeAutos.length} autos.`);
  
  // Puedes inspeccionar el array completo o autos individuales:
  console.log("Contenido de la flota (primeros 5):", flotaDeAutos.slice(0, 5)); // Muestra los primeros 5
  // console.log(flotaDeAutos); // Descomenta para ver todos los 30 autos
  
  // Ejemplo de acceso a un auto específico de la flota:
  console.log("\nDetalles del auto número 10:");
  console.log("Marca:", flotaDeAutos[9].marca); // Índice 9 para el décimo auto
  console.log("Modelo:", flotaDeAutos[9].modelo);
  console.log("Año:", flotaDeAutos[9].annio);

  /*

Para ver otros autos del mismo modo que el primero

var valor = 1  // aqui cambio del numero de auto.
console.log ("Auto numero ",valor);
console.log ("Marca",flotaDeAutos[valor].marca);
console.log ("Modelo: ",flotaDeAutos[valor].modelo);
console.log ("Annio: ", flotaDeAutos[valor].annio);

  */
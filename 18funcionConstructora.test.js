// 1. Importar la función constructora que queremos probar
const Auto = require('./18funcionConstructora.js'); // Asegúrate que el nombre del archivo coincida

// 2. Agrupar pruebas para la función constructora Auto
describe('Función Constructora Auto', () => {

  // 3. Prueba: ¿Crea un objeto con las propiedades correctas?
  test('debería crear un objeto con las propiedades marca, modelo y annio', () => {
    // Creamos una instancia para probar
    const cochePrueba = new Auto("Ford", "Fiesta", 2019);

    expect(cochePrueba).toBeDefined(); // ¿Existe?
    expect(typeof cochePrueba).toBe('object'); // ¿Es un objeto?
    expect(cochePrueba).not.toBeNull(); // ¿No es null?
    expect(cochePrueba).toHaveProperty('marca'); // ¿Tiene la propiedad 'marca'?
    expect(cochePrueba).toHaveProperty('modelo'); // ¿Tiene la propiedad 'modelo'?
    expect(cochePrueba).toHaveProperty('annio'); // ¿Tiene la propiedad 'annio'?
  });

  // 4. Prueba: ¿Asigna correctamente los valores pasados como argumento?
  test('debería asignar correctamente los valores de marca, modelo y annio pasados al constructor', () => {
    const marca = "Renault";
    const modelo = "Clio";
    const annio = 2021;
    const cochePrueba = new Auto(marca, modelo, annio);

    expect(cochePrueba.marca).toBe(marca); // ¿La propiedad 'marca' tiene el valor esperado?
    expect(cochePrueba.modelo).toBe(modelo); // ¿La propiedad 'modelo' tiene el valor esperado?
    expect(cochePrueba.annio).toBe(annio); // ¿La propiedad 'annio' tiene el valor esperado?
  });

  // 5. Prueba: ¿Crea instancias diferentes cada vez?
  test('debería crear instancias diferentes en cada llamada con "new"', () => {
    const auto1 = new Auto("VW", "Golf", 2022);
    const auto2 = new Auto("VW", "Golf", 2022); // Mismos datos, pero nueva instancia
    const auto3 = new Auto("Fiat", "500", 2023);

    expect(auto1).not.toBe(auto2); // ¿Son objetos diferentes en memoria? (Aunque tengan mismos datos)
    expect(auto1).not.toBe(auto3);
    expect(auto2).not.toBe(auto3);
  });

});
// 1. Importar la función constructora que queremos probar
const Auto = require('./20funcion_Constructora.js'); // Asegúrate que el nombre del archivo coincida

// 2. Agrupar pruebas para la función constructora Auto (versión 20)
describe('Función Constructora Auto (Archivo 20)', () => {

  // 3. Prueba: ¿Crea un objeto con las propiedades correctas?
  test('debería crear un objeto con las propiedades marca, modelo y annio', () => {
    const cochePrueba = new Auto("Peugeot", "208", 2022);

    expect(cochePrueba).toBeDefined();
    expect(typeof cochePrueba).toBe('object');
    expect(cochePrueba).not.toBeNull();
    expect(cochePrueba).toHaveProperty('marca');
    expect(cochePrueba).toHaveProperty('modelo');
    expect(cochePrueba).toHaveProperty('annio');
  });

  // 4. Prueba: ¿Asigna correctamente los valores pasados como argumento?
  test('debería asignar correctamente los valores de marca, modelo y annio pasados al constructor', () => {
    const marca = "Fiat";
    const modelo = "Cronos";
    const annio = 2023;
    const cochePrueba = new Auto(marca, modelo, annio);

    expect(cochePrueba.marca).toBe(marca);
    expect(cochePrueba.modelo).toBe(modelo);
    expect(cochePrueba.annio).toBe(annio);
  });

  // 5. Prueba: ¿Crea instancias diferentes cada vez?
  test('debería crear instancias diferentes en cada llamada con "new"', () => {
    const auto1 = new Auto("Chevrolet", "Cruze", 2021);
    const auto2 = new Auto("Chevrolet", "Cruze", 2021); // Mismos datos, pero nueva instancia
    const auto3 = new Auto("Ford", "Ranger", 2024);

    expect(auto1).not.toBe(auto2);
    expect(auto1).not.toBe(auto3);
    expect(auto2).not.toBe(auto3);
  });

});
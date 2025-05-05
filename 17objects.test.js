// 1. Importar el objeto que queremos probar
const miAutoTest = require('./17objects.js'); // Usamos una variable diferente (miAutoTest) para claridad

// 2. Agrupar las pruebas para el objeto miAuto
describe('Objeto miAuto', () => {

  // 3. Prueba básica: ¿Existe el objeto?
  test('debería existir y ser un objeto', () => {
    expect(miAutoTest).toBeDefined(); // ¿Está definido?
    expect(typeof miAutoTest).toBe('object'); // ¿Es de tipo 'object'?
    expect(miAutoTest).not.toBeNull(); // ¿No es null?
  });

  // 4. Prueba de propiedades: ¿Tiene las claves esperadas?
  test('debería tener las propiedades marca, modelo, annio y detalleDelAuto', () => {
    expect(miAutoTest).toHaveProperty('marca');
    expect(miAutoTest).toHaveProperty('modelo');
    expect(miAutoTest).toHaveProperty('annio');
    expect(miAutoTest).toHaveProperty('detalleDelAuto');
  });

  // 5. Prueba de valores iniciales: ¿Tienen los valores correctos?
  test('debería tener los valores iniciales correctos para las propiedades', () => {
    expect(miAutoTest.marca).toBe("Toyota");
    expect(miAutoTest.modelo).toBe("Corolla");
    expect(miAutoTest.annio).toBe(2025); // Verificamos el valor numérico
  });

  // 6. Prueba del método: ¿Es una función?
  test('la propiedad detalleDelAuto debería ser una función', () => {
    expect(typeof miAutoTest.detalleDelAuto).toBe('function');
  });

  // 7. Prueba de la salida del método (opcional pero útil)
  test('el método detalleDelAuto debería imprimir el formato correcto en consola', () => {
    // Espiar console.log
    const logSpy = jest.spyOn(console, 'log');

    // Ejecutar el método del objeto importado
    miAutoTest.detalleDelAuto();

    // Verificar que console.log fue llamado con el texto esperado
    // Usamos el valor 'annio' definido en el objeto (2025)
    expect(logSpy).toHaveBeenCalledWith('Auto Corolla 2025');

    // Limpiar el espía
    logSpy.mockRestore();
  });

});
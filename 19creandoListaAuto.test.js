// 1. Importar las funciones/constructores necesarios del archivo refactorizado
const { Auto, generarFlotaDeAutos } = require('./19creandoListaAuto.js');

// 2. Describir el conjunto de pruebas para la generación de la flota
describe('Generación de Flota de Autos', () => {

    const cantidadPrueba = 30; // Usamos la misma cantidad que el script original
    let flotaResultado; // Variable para almacenar la flota generada

    // Hook 'beforeAll': Ejecutar la generación UNA VEZ antes de todas las pruebas
    // Esto es eficiente, ya que no necesitamos generar la flota en cada 'test'
    beforeAll(() => {
        flotaResultado = generarFlotaDeAutos(cantidadPrueba);
    });

    // 3. Prueba: ¿Se generó un array?
    test('debería generar un array', () => {
        expect(Array.isArray(flotaResultado)).toBe(true);
    });

    // 4. Prueba: ¿Tiene la longitud correcta?
    test(`debería generar exactamente ${cantidadPrueba} autos`, () => {
        expect(flotaResultado).toHaveLength(cantidadPrueba);
    });

    // 5. Prueba: ¿Contiene objetos? (Verificando el primer elemento)
    test('los elementos del array deberían ser objetos', () => {
        // Nos aseguramos que haya al menos un elemento antes de accederlo
        if (flotaResultado.length > 0) {
            expect(typeof flotaResultado[0]).toBe('object');
            expect(flotaResultado[0]).not.toBeNull();
        } else {
            // Si el array estuviera vacío (no debería con cantidadPrueba > 0),
            // podemos lanzar un error o simplemente aceptar la prueba
            expect(flotaResultado.length).toBeGreaterThan(0); // Otra forma de asegurar que no está vacío
        }
    });

    // 6. Prueba: ¿Tienen la estructura correcta? (Verificando el primer elemento)
    test('cada auto en la flota debería tener propiedades marca, modelo y annio', () => {
        if (flotaResultado.length > 0) {
            const primerAuto = flotaResultado[0];
            expect(primerAuto).toHaveProperty('marca');
            expect(primerAuto).toHaveProperty('modelo');
            expect(primerAuto).toHaveProperty('annio');
        } else {
             expect(flotaResultado.length).toBeGreaterThan(0);
        }
    });

     // 7. Prueba: ¿Son instancias de Auto? (Verificando el primer elemento)
     test('cada elemento debería ser una instancia del constructor Auto', () => {
         if (flotaResultado.length > 0) {
            expect(flotaResultado[0]).toBeInstanceOf(Auto);
         } else {
             expect(flotaResultado.length).toBeGreaterThan(0);
         }
     });

     // 8. Prueba: ¿Las propiedades tienen los tipos correctos? (Verificando el primer elemento)
    test('las propiedades de los autos deberían tener los tipos de datos correctos', () => {
         if (flotaResultado.length > 0) {
            const primerAuto = flotaResultado[0];
            expect(typeof primerAuto.marca).toBe('string');
            expect(typeof primerAuto.modelo).toBe('string');
            expect(typeof primerAuto.annio).toBe('number');
        } else {
             expect(flotaResultado.length).toBeGreaterThan(0);
        }
    });

});
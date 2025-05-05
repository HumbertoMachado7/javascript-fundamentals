// 1. Importar los datos (el array 'articulos') que queremos probar
// Asegúrate que 21metodos_Recorrido_Arrays.js solo exporta el array: module.exports = articulos;
const articulos = require('./21metodos_Recorrido_Arrays.js');

// 2. Agrupar las pruebas relacionadas con los métodos de array sobre 'articulos'
describe('Métodos de Array sobre la lista de Artículos', () => {

    // 3. Pruebas para el método .filter()
    describe('.filter()', () => {
        test('debería retornar solo artículos con costo <= 500', () => {
            // Ejecutamos el filtro DENTRO de la prueba
            const filtrados = articulos.filter(articulo => articulo.costo <= 500);

            // Verificamos la cantidad de resultados
            expect(filtrados).toHaveLength(2);

            // Verificamos el contenido exacto (usando toEqual para comparar arrays/objetos)
            expect(filtrados).toEqual([
                { nombre: 'Libro', costo: 320 },
                { nombre: 'Teclado', costo: 500 }
            ]);

            // Verificaciones adicionales (opcional)
            expect(filtrados[0].nombre).toBe('Libro');
            expect(filtrados[1].costo).toBe(500);
        });

        test('debería retornar un array vacío si ningún artículo cumple la condición', () => {
            const filtradosCaros = articulos.filter(articulo => articulo.costo > 50000);
            expect(filtradosCaros).toHaveLength(0);
            expect(filtradosCaros).toEqual([]); // Un array vacío
        });
    });

    // 4. Pruebas para el método .map()
    describe('.map()', () => {
        test('debería retornar un array con solo los nombres de los artículos', () => {
            // Ejecutamos el map DENTRO de la prueba
            const nombres = articulos.map(articulo => articulo.nombre);

            // Verificamos la cantidad de resultados (debe ser igual al original)
            expect(nombres).toHaveLength(articulos.length); // Longitud original: 7

            // Verificamos el contenido exacto del array de nombres
            expect(nombres).toEqual([
                "Bici", "TV", "Libro", "Celular", "Laptop", "Teclado", "Audifonos"
            ]);

            // Verificación adicional (opcional)
            expect(nombres[0]).toBe('Bici');
            expect(nombres[6]).toBe('Audifonos');
        });

        test('debería retornar un array con los costos duplicados', () => {
             const costosDuplicados = articulos.map(articulo => articulo.costo * 2);
             expect(costosDuplicados).toHaveLength(articulos.length);
             expect(costosDuplicados).toEqual([6000, 5000, 640, 20000, 40000, 1000, 3400]);
             expect(costosDuplicados[0]).toBe(6000);
        });
    });

});
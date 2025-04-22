let estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes (estudiante) {
    console.log (`Hola, ${estudiante}`);
};

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes (estudiantes[i]);
}

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

/*
Aquí está la diferencia clave:

for (var estudiante of estudiantes):
Ámbito (Scope): var tiene ámbito de función (function scope) o ámbito global si no está dentro de una función. Esto significa que la variable estudiante declarada con var existe en toda la función que contiene el bucle for, no solo dentro del bucle.
Comportamiento: En esencia, se crea una sola variable estudiante para todo el bucle. En cada iteración, el valor de esa misma variable se actualiza con el siguiente elemento del array.
Implicación Principal (Problema Clásico): Si dentro del bucle crearas funciones que "capturan" la variable estudiante (por ejemplo, usando setTimeout o añadiendo event listeners), todas esas funciones terminarían refiriéndose a la misma variable, la cual tendría el último valor del array después de que el bucle haya terminado.
for (let estudiante of estudiantes):
Ámbito (Scope): let tiene ámbito de bloque (block scope). Esto significa que la variable estudiante solo existe dentro del bloque del bucle for...of.
Comportamiento (Clave): Lo más importante es que, con let (y const) en bucles for...of, for...in o for clásico, JavaScript crea una nueva vinculación (binding) de la variable para cada iteración. Es como si en cada vuelta del bucle tuvieras una variable estudiante "fresca" y separada, inicializada con el valor de esa iteración específica.
Implicación Principal (Solución): Debido a que se crea una nueva vinculación en cada iteración, si creas funciones dentro del bucle que capturen estudiante, cada función capturará el valor que estudiante tenía en esa iteración específica. Esto resuelve el problema clásico que tenía var con los cierres (closures) en bucles.
En tu ejemplo específico:
Como solo estás llamando a saludarEstudiantes(estudiante) directamente dentro del bucle (sin crear otras funciones que la capturen para ejecutarse más tarde), el resultado visible en la consola será exactamente el mismo para ambos bucles. Ambos imprimirán:
Hola, Maria
Hola, Sergio
Hola, Rosa
Hola, Daniel

*/

/*
¿Cuándo importa la diferencia?
La diferencia se vuelve crucial en escenarios más complejos, especialmente con cierres (closures) y código asíncrono.
Ejemplo con var (problemático):
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Siempre imprimirá 3, 3, 3
  }, 10);
}

Aquí, cuando los setTimeout se ejecutan, el bucle for ya terminó y la única variable i (con ámbito de función) vale 3.
Ejemplo con let (correcto):
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Imprimirá 0, 1, 2
  }, 10);
}

Aquí, cada setTimeout captura una i diferente (la que existía en esa iteración específica), gracias al ámbito de bloque y la nueva vinculación por iteración de let.
Conclusión:
Aunque en tu caso simple el resultado es idéntico, la práctica recomendada en JavaScript moderno (ES6 y posterior) es usar let (o const si no necesitas reasignar dentro del bloque) en tus bucles. Proporciona un ámbito más predecible y evita problemas comunes relacionados con var y los cierres. Usa let para tus variables de bucle como estudiante.
*/

// Diferencias entre for ... of, y for ... in

/*
¡Perfecto! Usando tu mismo código base, podemos ilustrar muy bien la diferencia entre for...of y for...in.

Tu Código Base:

let estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  // Importante: Esta función espera recibir un NOMBRE de estudiante
  console.log(`Hola, ${estudiante}`);
}


1. for...of (Como ya lo tienes): Itera sobre los VALORES

Este bucle está diseñado específicamente para recorrer los valores de objetos iterables como los arrays.

console.log("--- Usando for...of (Itera sobre VALORES) ---");
for (let estudiante of estudiantes) {
  // 'estudiante' toma directamente el VALOR de cada elemento ("Maria", "Sergio", etc.)
  saludarEstudiantes(estudiante);
}
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
JavaScript
IGNORE_WHEN_COPYING_END

Salida Esperada para for...of:

--- Usando for...of (Itera sobre VALORES) ---
Hola, Maria
Hola, Sergio
Hola, Rosa
Hola, Daniel

2. for...in: Itera sobre las PROPIEDADES (Índices en arrays)

Este bucle está diseñado para recorrer los nombres de las propiedades enumerables de un objeto. En el caso de un array, las propiedades principales son sus índices (que son tratados como strings: "0", "1", "2", "3").

console.log("\n--- Usando for...in (Itera sobre ÍNDICES/PROPIEDADES) ---");
for (let indice in estudiantes) {
  // 'indice' toma el NOMBRE DE LA PROPIEDAD ("0", "1", "2", "3")
  console.log(`Propiedad/Índice encontrado: ${indice} (Tipo: ${typeof indice})`);

  // *** Intento 1: Pasar el índice directamente a la función ***
  // Esto es INCORRECTO porque la función espera un nombre, no un índice.
  console.log("Intentando saludar con el índice:");
  saludarEstudiantes(indice);

  // *** Intento 2: Usar el índice para OBTENER el valor ***
  // Esta es la forma correcta de obtener el valor si USAS for...in
  console.log("Saludando con el valor obtenido usando el índice:");
  let valorEstudiante = estudiantes[indice]; // Accedemos al array con el índice
  saludarEstudiantes(valorEstudiante);
  console.log("-----"); // Separador
}


Salida Esperada para for...in:

--- Usando for...in (Itera sobre ÍNDICES/PROPIEDADES) ---
Propiedad/Índice encontrado: 0 (Tipo: string)
Intentando saludar con el índice:
Hola, 0  // <--- ¡ERROR LÓGICO! Saluda al índice "0"
Saludando con el valor obtenido usando el índice:
Hola, Maria // <--- Correcto, usando estudiantes[indice]
-----
Propiedad/Índice encontrado: 1 (Tipo: string)
Intentando saludar con el índice:
Hola, 1 // <--- ¡ERROR LÓGICO! Saluda al índice "1"
Saludando con el valor obtenido usando el índice:
Hola, Sergio // <--- Correcto, usando estudiantes[indice]
-----
Propiedad/Índice encontrado: 2 (Tipo: string)
Intentando saludar con el índice:
Hola, 2 // <--- ¡ERROR LÓGICO! Saluda al índice "2"
Saludando con el valor obtenido usando el índice:
Hola, Rosa // <--- Correcto, usando estudiantes[indice]
-----
Propiedad/Índice encontrado: 3 (Tipo: string)
Intentando saludar con el índice:
Hola, 3 // <--- ¡ERROR LÓGICO! Saluda al índice "3"
Saludando con el valor obtenido usando el índice:
Hola, Daniel // <--- Correcto, usando estudiantes[indice]
-----


Diferencias Clave Resumidas:

Característica	for...of	for...in
Itera sobre	Los valores de un iterable	Los nombres de propiedades (claves/índices) de un objeto
Variable Bucle	Contiene el valor del elemento	Contiene el nombre de la propiedad (índice como string)
Uso con Arrays	Recomendado para obtener valores	No recomendado para iterar arrays (ver abajo por qué)
Uso con Objetos	No funciona directamente (objetos no son iterables por defecto)	Recomendado para iterar claves de objetos

¿Por qué for...in NO se recomienda para arrays?

Itera sobre índices (como strings): Te da "0", "1", "2"... no los valores directamente. Necesitas un paso extra (array[indice]) para obtener el valor.

Orden no garantizado: Aunque la mayoría de los motores JavaScript modernos iteran los índices numéricos en orden, la especificación de for...in no garantiza el orden de las propiedades.

Itera sobre TODAS las propiedades enumerables: Si por alguna razón (¡mala práctica!) alguien añade una propiedad no numérica al array (estudiantes.extra = "algo"), for...in también iteraría sobre "extra", lo cual casi nunca es lo que quieres al recorrer un array. for...of ignora estas propiedades no-índice.

Conclusión:

Usa for...of cuando quieras recorrer los valores de un array (o cualquier otro iterable como strings, Map, Set). Es la forma moderna, directa y segura.

Usa for...in cuando quieras recorrer las claves (nombres de propiedades) de un objeto genérico. (Y si lo usas en objetos, a menudo se combina con hasOwnProperty para evitar iterar sobre propiedades heredadas).
*/
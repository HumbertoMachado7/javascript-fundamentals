// 1. Opciones y configuración básica
const opciones = ["Piedra", "Papel", "Tijera"];
const mensajePrompt = `Elije: 1=${opciones[0]}, 2=${opciones[1]}, 3=${opciones[2]}`;
const mensajeInvalido = "¡Opción no válida! Debes elegir 1, 2 ó 3. Refresca para intentar.";

// 2. Obtener y validar entrada del usuario (Usando mapeo para concisión)
const eleccionUsuarioTexto = prompt(mensajePrompt);
const mapaEntrada = { "1": opciones[0], "2": opciones[1], "3": opciones[2] };
const jugador1 = mapaEntrada[eleccionUsuarioTexto]; // Busca la opción basada en "1", "2", o "3"

// Si la entrada no está en el mapa, jugador1 será undefined -> inválido
if (!jugador1) {
    alert(mensajeInvalido);
    throw new Error("Entrada de usuario inválida.");
}

// 3. Elección aleatoria de la Computadora (sin cambios, es conciso)
const jugador2 = opciones[Math.floor(Math.random() * opciones.length)];

// 4. Mostrar elecciones (Usando template literals ES6)
console.log(`Tu elección: ${jugador1}`);
console.log(`Computadora: ${jugador2}`);

// 5. Función flecha (ES6) para determinar resultado (con ternarios)
const determinarResultado = (opcionJ1, opcionJ2) => {
    // Ternario principal: chequear empate primero
    return (opcionJ1 === opcionJ2)
        ? "Resultado: ¡Empate!" // Si es empate...
        : (() => { // Si no es empate, ejecutar esta función flecha inmediata
            let mensaje = "";
            switch (opcionJ1) {
                case "Piedra":
                    mensaje = (opcionJ2 === "Tijera") ? "¡Ganaste! Piedra rompe Tijera." : "Perdiste. Papel envuelve Piedra.";
                    break;
                case "Papel":
                    mensaje = (opcionJ2 === "Piedra") ? "¡Ganaste! Papel envuelve Piedra." : "Perdiste. Tijera corta Papel.";
                    break;
                case "Tijera":
                    mensaje = (opcionJ2 === "Papel") ? "¡Ganaste! Tijera corta Papel." : "Perdiste. Piedra rompe Tijera.";
                    break;
            }
            return `Resultado: ${mensaje}`; // Añadir prefijo "Resultado: " al final
          })(); // Llamar a la función flecha inmediatamente
};

// 6. Llamar a la función y mostrar el resultado
const resultadoFinal = determinarResultado(jugador1, jugador2);
console.log(resultadoFinal);

/*
Cambios clave para la concisión:
Validación de Entrada: Se usa un objeto mapaEntrada para convertir directamente el texto ("1", "2", "3") a la opción ("Piedra", "Papel", "Tijera"). Si la entrada no es una clave válida, jugador1 queda undefined, lo cual se detecta fácilmente con if (!jugador1).
Template Literals: Los console.log usan `Tu elección: ${jugador1}` (backticks) para una interpolación de variables más limpia (ES6).
Función Flecha: La función determinarResultado se define usando la sintaxis de función flecha (const determinarResultado = (...) => { ... }).
Ternario Principal + IIAFE (Opcional, para estructura): Se usa un ternario principal para separar el caso de empate. Para el caso de "no empate", se usa una IIAFE (Immediately Invoked Arrow Function Expression) (() => { ... })() para mantener el switch dentro de la parte false del ternario principal. Esto es un poco más avanzado, pero permite devolver el resultado del switch directamente. Alternativamente, podrías haber mantenido el if de empate y luego solo el switch con return mensajeResultado al final, como en la versión anterior, si esto parece demasiado complejo.
Mensajes Concisos: Se quita el prefijo "Resultado: " de dentro de los ternarios y se añade una sola vez al final, antes de devolver el mensaje final.
*/
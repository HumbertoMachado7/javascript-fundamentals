const opciones = ["Piedra", "Papel", "Tijera"];

const eleccionUsuarioTexto = prompt('Elije: 1=Piedra, 2=Papel, 3=Tijera');

let jugador1; // Variable para guardar "Piedra", "Papel" o "Tijera"
/*  por sí sola declara la variable jugador1 pero no le asigna ningún valor inicial explícito. Internamente, JavaScript le da un valor por defecto de undefined.Entonces, ¿por qué se hace así?
La razón principal es el ámbito (scope) de la variable y dónde necesitas usarla.*/

// Validar y convertir la entrada
if (eleccionUsuarioTexto === "1") {
    jugador1 = opciones[0]; // Piedra
} else if (eleccionUsuarioTexto === "2") {
    jugador1 = opciones[1]; // Papel
} else if (eleccionUsuarioTexto === "3") {
    jugador1 = opciones[2]; // Tijera
} else {
    // Si el usuario no ingresó 1, 2 ó 3, informamos y detenemos.
    alert("¡Opción no válida! Debes elegir 1, 2 ó 3. Refresca la página para intentar de nuevo.");
    // Lanzamos un error para detener la ejecución, ya que la entrada no es válida.
    throw new Error("Entrada de usuario inválida.");
}

// Si llegamos aquí, la entrada del usuario fue válida y jugador1 tiene un valor correcto.

// Generar la elección aleatoria del jugador 2 (Computadora)
const indiceAleatorio = Math.floor(Math.random() * opciones.length); // Genera 0, 1 ó 2
const jugador2 = opciones[indiceAleatorio];

// Mostrar las elecciones de ambos jugadores
console.log("Tu elección:", jugador1);
console.log("Elección de la Computadora:", jugador2);

// Comparar las elecciones y determinar el resultado usando switch
function determinarResultado(j1, j2) {
    let mensajeResultado = "";

    // Primero, el caso más simple: Empate
    if (j1 === j2) {
        mensajeResultado = "Resultado: ¡Empate!";
    } else {
        // Si no es empate, usamos switch basado en la elección de jugador1
        switch (j1) {
            case "Piedra":
                if (j2 === "Tijera") {
                    mensajeResultado = "Resultado: ¡Ganaste! Piedra rompe Tijera.";
                } else { // j2 debe ser "Papel"
                    mensajeResultado = "Resultado: Perdiste. Papel envuelve Piedra.";
                }
                break; // No olvidar el break

            case "Papel":
                if (j2 === "Piedra") {
                    mensajeResultado = "Resultado: ¡Ganaste! Papel envuelve Piedra.";
                } else { // j2 debe ser "Tijera"
                    mensajeResultado = "Resultado: Perdiste. Tijera corta Papel.";
                }
                break; // No olvidar el break

            case "Tijera":
                if (j2 === "Papel") {
                    mensajeResultado = "Resultado: ¡Ganaste! Tijera corta Papel.";
                } else { // j2 debe ser "Piedra"
                    mensajeResultado = "Resultado: Perdiste. Piedra rompe Tijera.";
                }
                break; // No olvidar el break
        }
    }
    // Mostramos el resultado final
    console.log(mensajeResultado);

    // Devuelvo el mensaje calculado
    return mensajeResultado;
}

// Llamar a la función para obtener y mostrar el resultado
determinarResultado(jugador1, jugador2);
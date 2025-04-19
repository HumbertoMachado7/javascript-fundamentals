let eleccion = ["Piedra", "Papel", "Tijera"];

let jugador1 = eleccion[Math.floor(Math.random() * eleccion.length)]; // elije aleatorio

// Jugador 2 elige aleatoriamente
let jugador2 = eleccion[Math.floor(Math.random() * eleccion.length)];

console.log("Jugador 1 eligió:", jugador1);
console.log("Jugador 2 eligió:", jugador2);

function compara(jugador1, jugador2) {
    if (jugador1 === jugador2) {
        console.log("Resultado: Empate");
    } else if (
        (jugador1 === "Piedra" && jugador2 === "Tijera") ||
        (jugador1 === "Tijera" && jugador2 === "Papel")  ||
        (jugador1 === "Papel"  && jugador2 === "Piedra")
    ) {
        // Si se cumple alguna condición de victoria para jugador1
        console.log("Resultado: ¡Jugador 1 gana con " + jugador1 + "!");
    } else {
        // Si no es empate y no ganó jugador1, por descarte gana jugador2
        console.log("Resultado: ¡Jugador 2 gana con " + jugador2 + "!");
    }
}

compara(jugador1, jugador2);

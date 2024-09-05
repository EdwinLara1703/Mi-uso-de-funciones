javascript
function jugar() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intentos = 5;

    while (intentos > 0) {
        const numeroUsu = prompt(`Adivina el número del 1 al 10. Te quedan ${intentos} intentos:`);

        if (numeroUsu === null) {
            alert("Juego cancelado.");
            return;
        }

        const numero = parseInt(numeroUsu);

        if (isNaN(numero) || numero < 1 || numero > 10) {
            alert("Por favor, ingresa un número válido entre 1 y 10.");
            continue;
        }

        intentos--;

        if (numero === numeroSecreto) {
            alert(`¡Felicidades! Adivinaste el número en ${5 - intentos} intentos.`);
            return;
        } else if (intentos > 0) {
            alert(`Número incorrecto. Te quedan ${intentos} intentos.`);
        }
    }

    alert(`Lo siento, no adivinaste el número. Era ${numeroSecreto}.`);
}

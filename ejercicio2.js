const prompt = require('prompt-sync')();

const pinCorrecto = "1742";


let intento = prompt("Escribe tu PIN: ");


while (intento !== pinCorrecto) {
  console.log("El pin incorrecto, inténtalo de nuevo.");

  
  intento = prompt("Escribe tu pin: ");
}

console.log("Bienvenido a Nequi");
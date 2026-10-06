const prompt = require('prompt-sync')();
let opcion;


do {
 
  console.log("===== MENÚ NEQUI =====");
  console.log("1) Ver saldo");
  console.log("2) Enviar dinero");
  console.log("3) Recargar");
  console.log("4) Salir");

  
  opcion = prompt("Elige una opción (1-4): ");

  
  if (opcion === "1") {
    console.log("💰 Tu saldo es: $395.000");
  } else if (opcion === "2") {
    console.log("📤 Enviando dinero...");
  } else if (opcion === "3") {
    console.log("📥 Recargando saldo...");
  } else if (opcion === "4") {
    console.log("👋 Saliendo de Nequi. ¡Hasta pronto!");
  } else {
    console.log("⚠️ Opción no válida. Intenta de nuevo.");
  }

} while (opcion !== "4");
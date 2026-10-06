const movimientos = [
  { valor: 250000, tipo: "recibido" },
  { valor: 0,      tipo: "vacio" },
  { valor: -80000, tipo: "comercio" },  
  { valor: 0,      tipo: "vacio" },
  { valor: -45000, tipo: "retiro" },
  { valor: -30000, tipo: "comercio" },  
  { valor: 120000, tipo: "recibido" }
];


let posicionEncontrada = -1;


for (let i = 0; i < movimientos.length; i++) {

 
  if (movimientos[i].valor === 0) {
    continue; 
  }

  
  if (movimientos[i].tipo === "comercio") {
    posicionEncontrada = i;
    console.log("Primer pago a comercio encontrado en la posición" + i);
    break; 
  }
}


if (posicionEncontrada === -1) {
  console.log("no se encontró ningún pago");
}
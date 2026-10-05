const movimientos = [
  { valor: 250000, tipo: "recibido" },
  { valor: -50000, tipo: "retiro" },
  { valor: 120000, tipo: "recibido" },
  { valor: -45000, tipo: "retiro" },
  { valor: 300000, tipo: "recibido" },
  { valor: -150000, tipo: "retiro" }
];

let total = 0;
let cantidadRetiros = 0;

for (let contador = 0; contador < movimientos.length; contador++) {
  total = total + movimientos[contador].valor;

  if (movimientos[contador].valor < 0) {
    cantidadRetiros = cantidadRetiros + 1;
  }
}

console.log("Total del mes: " + total);
console.log("Cantidad de retiros: " + cantidadRetiros);

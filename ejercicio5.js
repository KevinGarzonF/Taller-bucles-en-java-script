const usuarios = [
  {
    nombre: "Ana",
    movimientos: [-80000, 250000, -50000, -100000]
  },
  {
    nombre: "Luis",
    movimientos: [-150000, -50000, 50000]
  },
  {
    nombre: "Marta",
    movimientos: [-100000, -60000, -40000, 700000, -10000]
  }
];


for (let i = 0; i < usuarios.length; i++) {

 
  let totalUsuario = 0;

  
  for (let j = 0; j < usuarios[i].movimientos.length; j++) {
    totalUsuario = totalUsuario + usuarios[i].movimientos[j];}

  
  console.log(usuarios[i].nombre + "Total movido: $" + totalUsuario);
}

const piedra = "1";
const papel = "2";
const tijera = "3";

function buscarGanador(usuario1, usuario2){

  if (usuario1 == usuario2){
    alert("Empate");
  } else {
    if ((usuario1 == piedra && usuario2 == tijera) ||
        (usuario1 == papel && usuario2 == piedra) ||
        (usuario1 == tijera && usuario2 == papel)
    ) {
      alert("Ganó el usuario 1!!");
    } else {
        alert("Ganó el usuario 2!!");
    }
  }
}

let usuario1 = "";
let usuario2 = "";

// Elige el usuario 1
do {
  usuario1 = prompt("Usuario 1-> Selecciona: [1] Piedra [2] Papel [3] Tijera");
}
while (usuario1 != "1" && usuario1 != "2" && usuario1 != "3");

// Elige el usuario 2
do {
  usuario2 = prompt("Usuario 1-> Selecciona: [1] Piedra [2] Papel [3] Tijera");
}
while (usuario2 != "1" && usuario2 != "2" && usuario2 != "3");

// Buscar al Ganador
buscarGanador(usuario1,usuario2);


let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

// Gato
let gatoX = 0;
let gatoY = 0;
const ANCHOGATO = 50;
const ALTURAGATO = 50;
// Raton
let comidaX = 50;
let comidaY = 50;
const ANCHOCOMIDA = 30;
const ALTURACOMIDA = 30;

function graficarRectangulo(x, y, ancho, alto, color) {
 ctx.fillStyle = color;
 ctx.fillRect(x, y, ancho, alto);
};

function graficarGato() {
 graficarRectangulo(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#3b3636");
};

function graficarComida() {
 graficarRectangulo(comidaX, comidaY, ANCHOCOMIDA, ALTURACOMIDA, "#1a1903");
};

function iniciarJuego() {
 gatoX = (canvas.width / 2) - (ANCHOGATO / 2);
 gatoY = (canvas.height / 2) - (ALTURAGATO / 2);
  //COMIDA ESQUINA INFERIOR DERECHA
 comidaX = canvas.width - ANCHOCOMIDA;
 comidaY = canvas.height - ALTURACOMIDA;
 //ctx.clearRect(0, 0, canvas.width, canvas.height);
 graficarGato();
 graficarComida();
}
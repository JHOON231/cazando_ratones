let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
let btnArriba = document.getElementById("btnArriba");
let btnIzquierda = document.getElementById("btnIzquierda");
let btnAbajo = document.getElementById("btnAbajo");
let btnDerecha = document.getElementById("btnDerecha");
let btnReiniciar = document.getElementById("btnReiniciar");
const VELOCIDAD = 15;
let tiempo = 50;
let intervalo;
let puntos = 0;

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
 graficarRectangulo(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#969494");
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
  document.getElementById("puntos").textContent = puntos;
  document.getElementById("tiempo").textContent = tiempo;
 limpiarCanvas();
 graficarGato();
 graficarComida();
 intervalo = setInterval(restarTiempo, 1000);
}

btnArriba.onclick = moverArriba;
btnAbajo.onclick = moverAbajo;
btnIzquierda.onclick = moverIzquierda;
btnDerecha.onclick = moverDerecha;
btnReiniciar.onclick = reiniciarJuego;

function limpiarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const LIMITE_X = canvas.width - ANCHOGATO;
const LIMITE_Y = canvas.height - ALTURAGATO;


function moverIzquierda(){
    gatoX -= 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha(){
    gatoX += 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();

}

function moverArriba(){
    gatoY -= 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo(){
    gatoY += 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision(){
    if (
        gatoX < comidaX + ANCHOCOMIDA &&
        gatoX + ANCHOGATO > comidaX &&
        gatoY < comidaY + ALTURACOMIDA &&
        gatoY + ALTURAGATO > comidaY
    ){
        comidaX = Math.random() * (canvas.width - ANCHOCOMIDA);
        comidaY = Math.random() * (canvas.height - ALTURACOMIDA);
        limpiarCanvas();
        graficarGato();
        graficarComida();
        puntos++;
        document.getElementById("puntos").textContent = puntos;
        if (puntos >= 6){
            clearInterval(intervalo);
            alert("🏆 GANASTE");
        }
    }
}

function restarTiempo(){
    tiempo--;

    document.getElementById("tiempo").textContent = tiempo;

    if (tiempo <= 0){
        clearInterval(intervalo);
        alert("⏰ GAME OVER");
    }
}

function reiniciarJuego(){

    clearInterval(intervalo);

    puntos;
    tiempo;
    gatoX = canvas.width / 2 - ANCHOGATO / 2;
    gatoY = canvas.height / 2 - ALTURAGATO / 2;
    comidaX = Math.random() * (canvas.width - ANCHOCOMIDA);
    comidaY = Math.random() * (canvas.height - ALTURACOMIDA);
    document.getElementById("puntos").textContent = puntos;
    document.getElementById("tiempo").textContent = tiempo;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    intervalo = setInterval(restarTiempo, 1000);
}

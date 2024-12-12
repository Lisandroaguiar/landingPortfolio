
let particulas;
function setup() {
  createCanvas(windowWidth,windowHeight);
particulas=[100];

for(let i=0; i<50; i++){
  particulas[i]=new Escena(2);
particulas[i].inicializarParticulas();

}
background(0);

}


function draw() {background(0,30);


for(let i=0; i<particulas.length; i++){
particulas[i].dibujarParticulas();
particulas[i].actualizarParticulas();

}
}

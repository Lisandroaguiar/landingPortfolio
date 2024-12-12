class Escena {
  constructor(cantParticulas_) {
    this.cantParticulas=cantParticulas_;
    this.particulasRojas=[this.cantParticulas];
    this.particulasVerdes=[this.cantParticulas];
    this.particulasAzules=[this.cantParticulas];
    this.valor1_=round(random(3));

    this.valor2_=round(random(3));

    this.valor3_=round(random(3));
  }

  crearParticulasRojas() {
    for (let i=0; i<this.cantParticulas; i++) {

      this.particulasRojas[i]=new Particula(random(width), random(height), random(0.9), random(0.1, 0.4), random(0.1, 2), color(random(255), 0, 0));
    }
    console.log(this.particulasRojas.lenght);
  }

  crearParticulasVerdes() {

    for (let i=0; i<this.cantParticulas; i++) {

      this.particulasVerdes[i]=new Particula(random(width), random(height), random(0.9), random(0.1, 0.9), random(0.1, 2), color(random(255)));
    }
  }

  crearParticulasAzules() {

    for (let i=0; i<this.cantParticulas; i++) {

      this.particulasAzules[i]=new Particula(random(width), random(height), random(0.9), random(0.1, 2), random(0.1, 3), color(random(40), random(90), random(100,255)));
    }
  }

  inicializarParticulas() {
    this.crearParticulasRojas();
    this.crearParticulasVerdes();
    this.crearParticulasAzules();
  }

  dibujarParticulas() {
    for (let i=0; i<this.cantParticulas; i++) {

      this.particulasAzules[i].dibujarParticula();
    }
    for (let i=0; i<this.cantParticulas*0.1; i++) {

      this.particulasVerdes[i].dibujarParticula();
    }

    for (let i=0; i<this.cantParticulas*0.03; i++) {

      this.particulasRojas[i].dibujarParticula();
    }
  }
  actualizarParticulas() {
    for (let i=0; i<this.cantParticulas; i++) {
console.log(this.valor1_);
      this.particulasAzules[i].comportamientoParticula(this.valor1_);
      this.particulasRojas[i].comportamientoParticula(this.valor2_);
      this.particulasVerdes[i].comportamientoParticula(this.valor3_);
    }
  }

  colisionEntreParticulas(particula1, particula2) {
    let distanciaEntreParticulas= dist(particula1.posX, particula1.posY, particula2.posX, particula2.posY);
    if (distanciaEntreParticulas<particula1.tam+particula2.tam/2) {
      particula1.posX+=random(10);
      particula2.posX+=random(10);
    }
  }
}

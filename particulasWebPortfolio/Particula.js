class Particula {

  constructor(x_, y_, velocidad_, tam_, anchoLinea_, colorLinea_) {
    this.posX=x_;
    this.posY=y_
      this.velocidad=velocidad_
      this.tam=tam_;
    this.anchoLinea=anchoLinea_
      this.colorLinea=colorLinea_;
    this.angulo=0;
  }

  dibujarParticula() {
    push();
    noFill()
      strokeWeight(this.anchoLinea);
    stroke(this.colorLinea);
    ellipse(this.posX, this.posY, this.tam, this.tam);
    pop();
  }

  seguirMouse() {
    if (this.posX<mouseX) {
      this.posX+=this.velocidad;
    } else if (this.posX>mouseX) {
      this.posX-=this.velocidad
    }
    if (this.posY<mouseY) {
      this.posY+=this.velocidad
    } else if (this.posY>mouseY) {
      this.posY-=this.velocidad
    }
  }

  comportamientoParticula(tipoDeComportamiento_) {

    let distanciaAlMouse = dist(mouseX, mouseY, this.posX, this.posY);
    if (distanciaAlMouse<this.tam*30) {
      this.seguirMouse();
    } else {
      this.angulo++;
      if (this.angulo>=1000) {
        this.angulo=0;
      }


      let anguloMapeado=map(this.angulo, 0, 1000, 0, TWO_PI)

        if (tipoDeComportamiento_==0) {

        this.posX+=1/sin(anguloMapeado);
        this.posY+=1/cos(anguloMapeado);
      } else if (tipoDeComportamiento_==1) {
        this.posX+=1/sin(anguloMapeado);
        this.posY+=cos(anguloMapeado);
      } else if (tipoDeComportamiento_==2) {
        this.posX+=sin(anguloMapeado);
        this.posY+=1/cos(anguloMapeado);
      } else if (tipoDeComportamiento_==3) {
        this.posX+=sin(anguloMapeado);
        this.posY+=cos(anguloMapeado);
      }



      if (this.posX>width) {
        this.posX=random(100);
      }
      if (this.posX<0) {
        this.posX=random(800, width);
      }

      if (this.posY>height) {
        this.posY=random(100);
      }
      if (this.posY<0) {
        this.posY=random(800, height);
      }
    }
  }
  actualizarParticula() {
    this.comportamientoParticula();
  }
}

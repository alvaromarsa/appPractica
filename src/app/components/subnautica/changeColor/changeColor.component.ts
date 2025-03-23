import { CommonModule } from "@angular/common";
import { Component, input, signal,  } from '@angular/core';
import { Submarino } from "../../../interfaces/submarinos.interface";
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-change-color',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './changeColor.component.html',

})
export class ChangeColorComponent {


  public seamoth: Submarino = {

    name: 'Seamoth',
    color: 'Blanco',
    modulo: ['Modulo de profundidad'],
    capacidadModulos: 3,

  };

  public cyclops: Submarino = {
    name: 'Cyclops',
    color: 'Azul',
    modulo: ['Modulo de escaner'],
    capacidadModulos: 5
  }

  colorSubmarino : string = '';
  color = signal('Blanco');

  submarinosObjetos = signal<Submarino[]>([
    { name: 'Seamoth', color: 'Blanco', modulo: ['Modulo de profundidad'], capacidadModulos: 3},
    { name: 'Cyclops', color: 'Azul', modulo: ['Modulo de escaner'], capacidadModulos: 5},
  ]);


  submarinos: Submarino[] = [this.seamoth, this.cyclops];


cambiarColor () : void {

  let hayColor : string = this.colorSubmarino;
  const colores: string[] = ["azul", "verde", "amarillo", "negro", "rojo"];

  if (!hayColor){
    return;
  }
  else {

    let colorValido = false;

    for (let i of colores){

      if(i == this.colorSubmarino.toLowerCase()){

        this.colorSubmarino.color = this.colorSubmarino.toLowerCase();
        colorValido = true;
        break;

      }

    }
    if (!colorValido) {
      alert('El color no es válido');
    }
  }


};

resetColor ():void {

  this.color.set('Blanco');
};



}

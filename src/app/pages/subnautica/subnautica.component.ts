import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

export interface Submarino {

  name: string;
  color: string;
  modulo: [string];
  capacidadModulos: number;

}

@Component({
  selector: 'app-subnautica',
  styleUrl: './subnautica.component.css',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './subnautica.component.html'

})

export class SubnauticaComponent {

  colorSubmarino : string = '';
  moduloSubmarino: string[] = ["Módulo de escudo","Módulo de recarga","Módulo de torpedos", "Módulo de profundidad MKII"];
  moduloSeleccionado: string = '';


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


  submarinos: Submarino[] = [this.seamoth, this.cyclops];
  submarinoSeleccionado: Submarino = this.seamoth;

  actualizarSubmarino(event: Event) {
    const target = event.target as HTMLSelectElement; // Asegura que es un <select>
    const nombre = target.value;
    this.submarinoSeleccionado = this.submarinos.find(sub => sub.name === nombre) || this.seamoth;
  }

  agregarModulo () : void {

   const limiteModulos: number = this.submarinoSeleccionado.capacidadModulos;

   if(!this.moduloSeleccionado){
    return;
  }
    else {


      if (this.submarinoSeleccionado.modulo.length < limiteModulos ){

        this.submarinoSeleccionado.modulo.push(this.moduloSeleccionado);

      }
      else {
          alert('No puedes instalar mas modulos');

      }
    }

  };

  resetModulo () : void {

    this.submarinoSeleccionado.modulo.splice(1);

  };


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

          this.submarinoSeleccionado.color = this.colorSubmarino.toLowerCase();
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

    this.submarinoSeleccionado.color = "Blanco";
  };



}




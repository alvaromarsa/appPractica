import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Submarino } from '../../../../interfaces/submarinos.interface';

@Component({
  selector: 'app-add-module',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './addModule.component.html',

})
export class AddModuleComponent {

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


  moduloSubmarino: string[] = ["Módulo de escudo","Módulo de recarga","Módulo de torpedos", "Módulo de profundidad MKII"];
  moduloSeleccionado: string = '';


  modulo = signal('Modulo de profundidad');

  submarinosObjetos = signal<Submarino[]>([
    { name: 'Seamoth', color: 'Blanco', modulo: ['Modulo de profundidad'], capacidadModulos: 3},
    { name: 'Cyclops', color: 'Azul', modulo: ['Modulo de escaner'], capacidadModulos: 5},
  ]);

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
}

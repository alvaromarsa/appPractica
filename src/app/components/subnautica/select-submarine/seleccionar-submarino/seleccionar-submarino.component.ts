import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Submarino } from '../../../../interfaces/submarinos.interface';

@Component({
  selector: 'app-seleccionar-submarino',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './seleccionar-submarino.component.html',

})
export class SeleccionarSubmarinoComponent {

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
    public submarinoSeleccionado: Submarino = this.seamoth;

    actualizarSubmarino(event: Event) {
      const target = event.target as HTMLSelectElement; // Asegura que es un <select>
      const nombre = target.value;
      this.submarinoSeleccionado = this.submarinos.find(sub => sub.name === nombre) || this.seamoth;
    }
}

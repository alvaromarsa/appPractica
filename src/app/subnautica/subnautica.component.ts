import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-subnautica',
  styleUrl: 'subnautica.component.css',
  template:`

  <h1>Hola Subnautica</h1>

  <h2>Vamos a modificar datos de los submarinos de Subnautica</h2>
<div class="selectSubmarinos">
  <select (change)="actualizarSubmarino($event)">
  <option *ngFor="let submarino of submarinos" [value]="submarino.name"> {{submarino.name}}</option>
  </select>
</div>
  <h2>Nombre del submarino</h2>
   <h3>{{submarinoSeleccionado.name}}</h3>
  <h2>Color del submarino</h2>
    <h3>{{submarinoSeleccionado.color}}</h3>

  <div>
   <input type="text" [(ngModel)]="colorSubmarino" name="colorSubmarino" id="inputColor" >
   <p *ngIf="!colorSubmarino">Introduzca un color</p>
  </div>
     <button (click)="cambiarColor()">Cambiar color</button>
     <button (click)="resetColor()">Volver a color blanco</button>


  <hr>

  <div class="modulos">
    <div class="listaModulos">
      <li *ngFor="let i of submarinoSeleccionado.modulo">
          {{i}}
      </li>
    </div>
    <div class="selectorModulos">
      <label for="modulo">Selecciona un modulo:</label>
      <select id="modulo" [(ngModel)]="moduloSeleccionado">
        <option *ngFor="let i of moduloSubmarino">{{ i }}</option>
      </select>
    </div>
    <div class="botones modulos">
      <button (click)="agregarModulo()">Agregar modulo</button>
      <button (click)="resetModulo()">Volver a configuracion de fabrica</button>
    </div>

  </div>

  `

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

export interface Submarino {

  name: string;
  color: string;
  modulo: [string];
  capacidadModulos: number;


}


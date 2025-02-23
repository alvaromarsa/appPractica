import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-subnautica',
  styleUrl: 'subnautica.component.css',
  template:`

  <h1>Hola Subnautica</h1>

  <h2>Vamos a modificar datos de los submarinos de Subnautica</h2>

  <h2>Nombre del submarino</h2>
   <h3>{{seamoth.name}}</h3>
  <h2>Color del submarino</h2>
    <h3>{{seamoth.color}}</h3>

  <div>
   <input type="text" [(ngModel)]="colorSubmarino" name="colorSubmarino" id="inputColor" >
   <p *ngIf="!colorSubmarino">Introduzca un color</p>
  </div>
     <button (click)="cambiarColor()">Cambiar color</button>
     <button (click)="resetColor()">Volver a color blanco</button>


  <hr>

  <div>


  </div>

  <h2>Modulos del submarino</h2>

  <li *ngFor="let i of seamoth.modulo">
      {{i}}
  </li>

  <input type="text" [(ngModel)]="moduloSubmarino" name="moduloSubmarino" >

    <button (click)="agregarModulo()">Agregar modulo</button>
    <button (click)="resetModulo()">Volver a configuracion de fabrica</button>



  `

})

export class SubnauticaComponent {

  colorSubmarino : string = '';
  moduloSubmarino: string = '';

   public seamoth: Submarino = {

    name: 'Seamoth',
    color: 'Blanco',
    modulo: ['Modulo de profundidad']

  };

  agregarModulo () : void {

      this.seamoth.modulo.push(this.moduloSubmarino)


  };

  resetModulo () : void {

    this.seamoth.modulo.splice(1);

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

          this.seamoth.color = this.colorSubmarino.toLowerCase();
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

    this.seamoth.color = "Blanco";
  };



}

export interface Submarino {

  name: string;
  color: string;
  modulo: [string];


}


import { Component } from "@angular/core";
import { SubmarinosComponent } from "./submarinos/submarinos.component";

@Component({
  selector: 'app-subnautica',
  template:`

  <h1>Hola Subnautica</h1>

  <h2>Vamos a modificar datos de los submarinos de Subnautica</h2>

  <h3>{{seamoth.name}}</h3>
  <h4>{{seamoth.color}}</h4>
  <input type="text" name="colorSubmarino" id="inputColor">
     <button (click)="cambiarColor('negro')">Cambiar color</button>
     <button (click)="reset()">Volver a color blanco</button>


  `

})

export class SubnauticaComponent {

   public seamoth: Submarino = {

    name: 'Seamoth',
    color: 'Blanco',

  };

  cambiarColor (colorNuevo : string) : void {

    this.seamoth.color

    this.seamoth.color = colorNuevo;


  }

  reset ():void {

    this.seamoth.color = "blanco";
  }



}

export interface Submarino {

  name: string;
  color?: string;


}


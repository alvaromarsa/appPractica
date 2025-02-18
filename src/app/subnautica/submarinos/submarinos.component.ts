import { Component } from '@angular/core';

@Component({
  selector: 'app-submarinos',
  templateUrl: './submarinos.component.html',
  styleUrl: './submarinos.component.css'
})
export class SubmarinosComponent {

}

export interface Submarino {

  name: string;
  color?: string;


}


  const seamoth: Submarino = {

    name: 'Seamoth',

  };

  const cyclops: Submarino = {

    name: 'Cyclops',

  };

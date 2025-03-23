import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ChangeColorComponent } from "../../components/subnautica/changeColor/changeColor.component";
import { AddModuleComponent } from "../../components/subnautica/add-module/addModule/addModule.component";
import { SeleccionarSubmarinoComponent } from "../../components/subnautica/select-submarine/seleccionar-submarino/seleccionar-submarino.component";


@Component({
  selector: 'app-subnautica',
  styleUrl: './subnautica.component.css',
  standalone:true,
  imports: [FormsModule, CommonModule, ChangeColorComponent, AddModuleComponent, SeleccionarSubmarinoComponent],
  templateUrl: './subnautica.component.html'

})

export class SubnauticaComponent {



}




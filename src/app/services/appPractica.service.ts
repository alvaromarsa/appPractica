import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppPracticaService {

  submarinoSeleccionado: any;
  colorSubmarino: string = 'blanco';

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

}

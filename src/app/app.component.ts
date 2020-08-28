import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public edadUno:number;
  public edadDos:number;
  public sumaEdades:number;
  public promedio:number;

  sumarEdades() {
    this.sumaEdades = this.edadUno+this.edadDos;
  }

  calcularPromedio(){
    this.promedio = (this.edadUno+this.edadDos)/2;
  }

  limpiarNumeros(){
    this.promedio = 0;
    this.edadUno = 0;
    this.edadDos = 0;
    this.sumaEdades = 0;
  }

}

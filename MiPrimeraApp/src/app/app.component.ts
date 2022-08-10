import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPrimeraApp';

  campoTexto: string;
  constructor(){
    this.campoTexto = "Valor inicial";
  }

  onClick(){
    this.campoTexto = "Valor desde el boton";
  }
  
  onFinCronometro($e:any){
    console.log($e);
  }
}

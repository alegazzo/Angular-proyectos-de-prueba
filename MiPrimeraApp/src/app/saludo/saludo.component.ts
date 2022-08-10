import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  // template: '<h1>Componente Saludo!</h1>',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string;

  constructor() { 
    this.mensaje = 'Un saludo a todos';

    setTimeout(()=>{
      this.mensaje = 'Otro mensaje diferente';
    },3000);
  }

  mostrarSaludo(): string {
    return 'Saludo desde el metodo';
  }

  ngOnInit(): void {
  }

}

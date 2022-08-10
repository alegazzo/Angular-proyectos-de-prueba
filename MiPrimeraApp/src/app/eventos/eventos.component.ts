import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  @Input("num1") numero1: number;
  @Input("num2") numero2: number;
  resultado: number;

  constructor() {
    this.numero1 = 78;
    this.numero2 = 54;
    this.resultado = 0;

  }

  sumar(){
    this.resultado = this.numero1 + this.numero2;
  }

  ngOnInit(): void {
  }

}

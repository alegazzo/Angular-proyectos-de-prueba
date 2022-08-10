import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea.models';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[];

  constructor() {
    this.tareas = [];
  }

  onClick(ptarea: Tarea){
    ptarea.completa = !ptarea.completa;
  }
  onBorrar(indice: number){
    this.tareas.splice(indice,1);
  }
  ngOnInit(): void {
  }

 

}

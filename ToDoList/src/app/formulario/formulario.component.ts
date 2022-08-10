import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea.models';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() tareaCreada: EventEmitter<Tarea>;
  nuevaTarea: Tarea;

  formulario: string[];

  constructor() {
    this.nuevaTarea = new Tarea();
    this.tareaCreada = new EventEmitter();
    this.formulario = ['formulario'];
  }

  onClick(){
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = new Tarea();
  }

  ngOnInit(): void {
  }

}

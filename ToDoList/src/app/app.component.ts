import { Component } from '@angular/core';
import { Tarea } from './models/tarea.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrayTareas: Tarea[];

  constructor(){
    this.arrayTareas = [];
  }
  
  onTareaCreada($e: any){

    this.arrayTareas.push($e);

  }
}

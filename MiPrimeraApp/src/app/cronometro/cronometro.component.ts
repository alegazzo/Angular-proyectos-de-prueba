import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  segundos: number;

  @Input("seg") contador: number;

  @Output() finCronometro: EventEmitter<string>;

  constructor() {
    this.segundos = 10;
    this.contador = 0;
    this.finCronometro = new EventEmitter();
    
  }

  start(){

    let interval = setInterval(()=>{

      if(this.segundos>0) this.segundos = this.segundos - 1;
      
      else{
        clearInterval(interval);
        this.segundos = this.contador ? this.contador : 10;
        this.finCronometro.emit("Finaliza el cronometro con el numero " + this.segundos);
      }   

    },1000);
  }

  ngOnInit(): void {
    this.segundos = this.contador ? this.contador : 10;
  }

}

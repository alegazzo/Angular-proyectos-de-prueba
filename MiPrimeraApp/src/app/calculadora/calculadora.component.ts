import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string;
  calculo: boolean


  constructor() { 
    this.resultado = "";
    this.calculo = false;

  }

  ngOnInit(): void {
  }

  concatenar($event:any){
    if(this.calculo){
      this.resultado = $event.target.innerText;
      this.calculo = false;
    }
    else{
      this.resultado += $event.target.innerText;
    }
    
  }

  // se le puede pasar string como parametro.
  // concatenar2(val:string){
  //   if(this.calculo){
  //     this.resultado = val;
  //     this.calculo = false;
  //   }
  //   else{
  //     this.resultado += val;
  //   }
    
  // }

  calcular(){
    this.resultado = eval(this.resultado);
    this.calculo = true;
     
  }
}

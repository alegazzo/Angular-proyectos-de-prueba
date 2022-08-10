import { Component, Input, OnInit } from '@angular/core';
import { producto } from '../models/producto';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() listaComanda: producto[];
 
  constructor() {
    this.listaComanda = [];
 
  }

  calculaTotal(){
    let resultado = 0;
    for(let producto of this.listaComanda){
      resultado += producto.precio * producto.cantidad;
    }
    return resultado;
  }

  onClick(indice : number){
    if(this.listaComanda[indice].cantidad === 1){
      this.listaComanda.splice(indice,1);
    }
    else{
      this.listaComanda[indice].cantidad --;
    }
    
  }
  
  ngOnInit(): void {
  }

}

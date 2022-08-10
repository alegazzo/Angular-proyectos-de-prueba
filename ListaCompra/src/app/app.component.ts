import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productosSeleccionados: Producto[];

  productosComprados: Producto[]


  constructor(){
    this.productosSeleccionados = [];
    this.productosComprados = [];
  }

  onProductoCreado($event: Producto){
    this.productosSeleccionados.push($event);
  }

  onProductoComprado($event: number){
    console.log($event);
    const comprado = this.productosSeleccionados.splice($event,1);
    this.productosComprados.push(comprado[0]);

  }

  onProductoDevuelto($event: number){
    const devuelto = this.productosComprados.splice($event,1);
    this.productosSeleccionados.push(devuelto[0]);
  }
}

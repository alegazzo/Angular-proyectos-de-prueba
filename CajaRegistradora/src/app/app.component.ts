import { Component } from '@angular/core';
import { producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaProductos: producto[];
  listaComanda: producto[];

  constructor(){
    this.listaProductos = [
      new producto('https://picsum.photos/200','Producto',10),
      new producto('https://picsum.photos/200','Producto',10),
      new producto('https://picsum.photos/200','Producto',10),
      new producto('https://picsum.photos/200','Producto',10),
      new producto('https://picsum.photos/200','Producto',10),
      new producto('https://picsum.photos/200','Producto',10),
      new producto('https://picsum.photos/200','Producto',10),
    ];
    this.listaComanda = [];
  }

  onProductoSeleccionado(e: producto){
    const productoEncontrado = this.listaComanda.find(x=> x.nombre == e.nombre);

    if(productoEncontrado){
      productoEncontrado.cantidad ++;
    }
    else{
      this.listaComanda.push(e);
    }
  }
}

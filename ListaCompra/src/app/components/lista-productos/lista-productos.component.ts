import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() listaProductos: Producto[];

  @Input() textoBoton: string;

  @Output() productoComprado: EventEmitter<number>;

  constructor() {
    this.listaProductos = [];
    this.textoBoton = "";
    this.productoComprado = new EventEmitter();
  }

  onClick(indice: number){
    this.productoComprado.emit(indice);
  }

  ngOnInit(): void {
  }

}

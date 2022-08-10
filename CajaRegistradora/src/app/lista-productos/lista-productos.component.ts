import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { producto } from '../models/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() listaProductos: producto[];
  @Output() productoSeleccionado: EventEmitter<producto>;

  constructor() {
    this.listaProductos = [];
    this.titulo = '';
    this.productoSeleccionado = new EventEmitter();
  }

  onClick(pProducto: producto){
 
    this.productoSeleccionado.emit(pProducto);
    
  }

  ngOnInit(): void {
  }

}

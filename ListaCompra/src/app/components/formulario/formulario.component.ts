import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() productoCreado: EventEmitter<Producto>;
  nuevoProducto: Producto;

  constructor() {
    this.nuevoProducto = new Producto("",0,"");
    this.productoCreado = new EventEmitter();
  }

  onClick(){
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto = new Producto("",0,"");
  }

  ngOnInit(): void {
  }

}

export class Producto {
    nombre: string;
    cantidad: number;
    departamento: string;

    constructor(pNombre: string, pCantidad: number, pDepartamento: string){
        this.nombre = pNombre;
        this.cantidad = pCantidad;
        this.departamento = pDepartamento;
    }
}
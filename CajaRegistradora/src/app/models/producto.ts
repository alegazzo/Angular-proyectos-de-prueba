export class producto{
    cantidad: number;
    img: string;
    nombre: string;
    precio: number;
    
    constructor( pImg : string, pNombre: string, pPrecio: number){
        this.cantidad = 1;
        this.img = pImg;
        this.nombre = pNombre;
        this.precio = pPrecio
    }

}
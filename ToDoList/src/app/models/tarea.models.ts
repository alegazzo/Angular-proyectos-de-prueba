export class Tarea {

    titulo: string;

    descripcion: string;

    completa: boolean;

    constructor(pTitulo = '', pDescripcion = ''){
        this.titulo = pTitulo;
        this.descripcion = pDescripcion;
        this.completa = false;
        
    }
}
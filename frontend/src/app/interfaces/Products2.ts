export class Products2 {
    constructor(_id ='', nombre='', description= '', tipo='' , estado=''){
        this._id=_id
        this.nombre = nombre  
        this.description = description
        this.tipo = tipo
        this.estado = estado
    }

    _id : string;
    nombre: string;
    description: string;
    tipo: string;
    estado: string;
    
}
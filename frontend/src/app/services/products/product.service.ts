import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Products2} from '../../interfaces/Products2'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProducts: Products2;//
  products: Products2[];//

  readonly URI = 'http://localhost:3000/products'

  constructor(private http: HttpClient) {
    this.selectedProducts = new Products2();//esto

   }

  createProduct(products2:Products2) {
    return this.http.post(this.URI, products2);
  }
  getProducts(){
    return this.http.get(this.URI)
  }

  deleteProduct(_id :string){
    return this.http.delete(`${this.URI}/${_id}`)
  }

  updateProduct(products2:Products2){
    return this.http.put(`${this.URI}/${products2._id}`, products2)
  }

  /*
  createProduct(nombre: string, tipo:string , description: string ){
    const fd = new FormData()
    fd.set('nombre',nombre)
    fd.set('tipo', tipo)
    fd.set('description', description)
    return this.http.post(this.URI,fd)
  } 
  
  getProducts(){
    return this.http.get<Products[]>(this.URI)

  }

  getProduct(id: string){
    //return this.http.get(this.URI + '/' + id)
    return this.http.get <Products>(`${this.URI}/${id}`)
  }

  deleteProduct(id :string){
    return this.http.delete(`${this.URI}/${id}`)
  }

  updateProduct(id: string, nombre: string,tipo:string, description:string ){
    return this.http.put(`${this.URI}/${id}`, {nombre,tipo,description})
  }
  */
  
}

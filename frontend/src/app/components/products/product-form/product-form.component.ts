import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/products/product.service'
import {Router} from '@angular/router' //render cuando registre



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private productService : ProductService, private route: Router) { }

  ngOnInit(): void {
  }
  /*
  createProduct(nombre: HTMLInputElement, tipo:HTMLSelectElement, description: HTMLInputElement) :boolean{
    console.log(nombre.value)
    console.log(tipo.value)
    console.log(description.value)
    this.productService.createProduct(nombre.value, tipo.value, description.value)
      .subscribe(
          res => {
            console.log(res)
          },
          err => console.log(err)
      )
    //console.log(description.value)
    //this
    return false  
  }
  /**
    console.log(title.value)
    console.log(description.value)
    this.photoService.createPhoto(title.value, description.value, this.file)
      .subscribe(
        res => {
            this.route.navigate(['/photos'])
            console.log(res)}, 
        err => console.log(err)
      )
    return false

  }
   */
  
}

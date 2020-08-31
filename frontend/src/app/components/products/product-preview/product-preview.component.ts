import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
import {Products} from '../../../interfaces/Products'
import {ProductService} from '../../../services/products/product.service'

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {
  id: string
  product: Products
  constructor(
    private activeRouter : ActivatedRoute,
    private router : Router,
    private productsService: ProductService
  ) { }

  ngOnInit(): void {}
}
    /*
    this.activeRouter.params.subscribe(params =>{ 
      this.id = params['id'],
      this.productsService.getProduct(this.id)
        .subscribe(
          res => {
            this.product = res,
            console.log(res)},
          err => console.log(err)
          )
        })
  }

  deleteProduct(id:string){
    this.productsService.deleteProduct(id)
      .subscribe( 
        res => {this.router.navigate(['/products']),console.log(res)},
        err => console.log(err)
      )
  }

  updateProduct( nombre: HTMLInputElement,tipo:HTMLSelectElement ,description: HTMLInputElement): boolean{
    this.productsService.updateProduct(this.id, nombre.value ,tipo.value ,description.value)
      .subscribe( res => {this.router.navigate(['/products']),console.log(res)},
        err=> console.log(err))
    return false
  }
  */



import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/products/product.service'
import {Router} from '@angular/router' //render cuando registre

  
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = []
  constructor(private productService: ProductService, private router : Router) { }

  ngOnInit(): void { }
  /*
    this.productService.getProducts()
    .subscribe( 
      res => {
        this.products = res,
        console.log(res)},
      err => console.log(err))
  }
  selectedCard(id :string){
    this.router.navigate(['/products', id])// lo pasamos a travews del enrutar, importamos alla
    console.log(id) //se hace en el preview
    //this.photoService.getPhoto(id)
      //.subscribe( res => console.log(res),
      //err => console.log(err))
  }
  */
}

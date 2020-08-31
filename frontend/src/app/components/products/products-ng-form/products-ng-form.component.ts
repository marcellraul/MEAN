import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../../services/products/product.service'
import { NgForm } from '@angular/forms';
import { Products2} from '../../../interfaces/Products2'

declare var M: any;
@Component({
  selector: 'app-products-ng-form',
  templateUrl: './products-ng-form.component.html',
  styleUrls: ['./products-ng-form.component.css'],
  providers: [ProductService]
})
export class ProductsNgFormComponent implements OnInit {
  //products = []
  constructor(public productServices: ProductService) { }

  ngOnInit(): void {
    this.GetProducts()
  }
  createProducts(form?: NgForm){
    this.productServices.createProduct(form.value)
      .subscribe(res => {
          console.log(res)
          this.resetForm()
          this.GetProducts
          //M.toast({html: 'Save successfully'});
        })
  }

  GetProducts(){
    this.productServices.getProducts()
      .subscribe(
        res => {
          console.log(res)
          this.productServices.products = res as Products2[]
        }
      )
  }

  editForm(form?: NgForm){
    console.log(form.value);
    if(form.value._id) {
      this.productServices.updateProduct(form.value)
        .subscribe(res => {
          this.resetForm(form)
          this.GetProducts
         // M.toast({html: 'Updated Successfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      //this.productServices.selectedProducts= new Products2()
      //this.employeeService.selectedEmployee = new Employee();
    }
  }

  deleteProduct(_id: string, form: NgForm){
    if(confirm('Are you sure you want to delete it?')) {
      this.productServices.deleteProduct(_id)
        .subscribe(res => {
          console.log(form.value);
          this.GetProducts;
          //this.resetForm(form);
          //M.toast({html: 'Deleted Succesfully'});
        });
   }
  }

  editProduct(product: Products2){
    this.productServices.selectedProducts = product

  }

}

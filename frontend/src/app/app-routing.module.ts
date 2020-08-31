import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
//products
import {ProductFormComponent} from './components/products/product-form/product-form.component'
import {ProductListComponent} from './components/products/product-list/product-list.component'
import {ProductPreviewComponent} from './components/products/product-preview/product-preview.component'
import {ProductsNgFormComponent} from './components/products/products-ng-form/products-ng-form.component'

const routes: Routes = [
  {
    path: 'photos',
    component: PhotoListComponent
  },
  {
    path: 'photos/new',
    component: PhotoFormComponent
  },
  {
    path: 'photos/:id',
    component: PhotoPreviewComponent
  },
  {
    path: '',
    redirectTo:'/photos',
    pathMatch: 'full' //
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/new',
    component: ProductFormComponent
  },
  {
    path: 'products/:id',
    component: ProductPreviewComponent
  }
  ,
  {
    path: 'productsng',
    component: ProductsNgFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

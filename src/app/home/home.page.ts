import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit  {
  
  products:any = [];
  categories: any = [];

  constructor(private servProducts: ProductsService, private servCategories: CategoriesService) {}
  ngOnInit(){
    this.get_Products()
    this.get_Categories();
  }
 
  get_Products(){
    this.products = [];
   this.servProducts.getProducts().subscribe((data: {}) => {
     console.log(data, 'products');
     this.products = data;
   })
  }
  get_Categories(){
    this.categories = [];
    this.servCategories.getCategories().subscribe((data: {}) =>{
      console.log(data, 'categories');
      this.categories = data;
    })
  }

}


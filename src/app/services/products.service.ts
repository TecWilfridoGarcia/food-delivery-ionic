import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './../model';



@Injectable({
  providedIn: 'root'
}) 
 
export class ProductsService {
   productsUrl = '../../assets/products.json';
  constructor(private http: HttpClient) {
    
  }
  products: Products[]=[];
getProducts(): Observable<any>  {
 return this.http.get(this.productsUrl);
}

 

}

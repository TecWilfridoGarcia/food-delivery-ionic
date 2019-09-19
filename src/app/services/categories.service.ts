import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  header: HttpHeaders | { [header: string]: string | string[]; };

  constructor(private http: HttpClient) { }
  private productsUrl = '../../assets/categories.json';

  getCategories(): Observable<any> {
   return this.http.get(this.productsUrl);
  }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/env/env';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseURL: string = env.baseUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/products`);
  }

  getProductsBySearch(query: string) {
    return this.http.get<Product[]>(`${this.baseURL}/items?q=${query}`);
  }

  getProductById(id: string): Observable<Product|undefined> {
    return this.http.get<Product>(`${this.baseURL}/products/${id}`);
  }
}

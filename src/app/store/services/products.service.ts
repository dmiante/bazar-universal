import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pro, Product } from '../interfaces/product.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseURL: string = '../../../assets/products.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pro> {
    const apiurl = `${this.baseURL}`;
    const res = this.http.get<Pro>(apiurl);
    return res;
  }

  getProducts(): Observable<Product[]> {
    return this.getAll().pipe(map((product) => product.products));
  }

  searchProduct(query: string): Observable<Product[]> {
    return this.getProducts().pipe(
      map((p) =>
        p.filter(({ title, description, category, brand }) => {
          return (
            title.toLowerCase().includes(query.toLowerCase()) ||
            description.toLowerCase().includes(query.toLowerCase()) ||
            category.toLowerCase().includes(query.toLowerCase()) ||
            brand.toLowerCase().includes(query.toLowerCase())
          );
        })
      )
    );
  }

  searchProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((p) => {
        return p.find((p) => p.id === id);
      })
    );
  }
}

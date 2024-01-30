import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/env/env';
import { Pro, Product } from '../interfaces/product.interface';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseURL: string = env.baseUrl;
  private baseURL2: string = '../../../assets/products.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pro> {
    const apiurl = `${this.baseURL2}`;
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
    // const res = this.http.get<Product>(`${this.baseURL2}/items/${id}`);
    // return res;
    return this.getProducts().pipe(
      map((p) => {
        return p.find((p) => p.id === id);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { PRODUCTS } from '../data/product.data';
import { of, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly baseUrl = '/api/products';

  constructor(private readonly http: HttpClient) { }

getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl);
}
createProduct(product: Product): Observable<Product> {
  return this.http.post<Product>(this.baseUrl, product);
}
getProduct(productId: string): Observable<Product> {
  return this.http.get<Product>(`${this.baseUrl}/${productId}`);
}
updateProduct(product: Product): Observable<Product> {
  return this.http.put<Product>(`${this.baseUrl}/edit/${product._id}`, product);
}
removeProduct(productId: string): Observable<Product> {
  return this.http.delete<Product>(`${this.baseUrl}/${productId}`);
}
}

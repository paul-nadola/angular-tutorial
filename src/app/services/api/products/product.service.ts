import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'https://fakestoreapi.com/'

  constructor(
    private http: HttpClient
  ) { }

  getAllProductsWithLimit(limit:number = 5) {
    // const productUrl:string = this.baseUrl + 'products?limit=' + 5;
    const productsUrl:string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<ProductRepresentation[]>(productsUrl)
    //or return this.http.get<Array<ProductRepresentation>>(productsUrl)
  }
  createProduct(product: ProductRepresentation) {
    const productsUrl: string = `${this.baseUrl}productsddd`
    return this.http.post<ProductRepresentation>(productsUrl, product)
  }
}

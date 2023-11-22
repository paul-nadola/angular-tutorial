import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  constructor (
    private activatedRoute: ActivatedRoute,
    private service: ProductService
  ) {

  }
  param: any;
  queryParam: any;

  ngOnInit(): void {
    const product: ProductRepresentation ={
      title: 'My Product',
      description: 'This is a product description',
      price: 1000,
      category: 'Any Category',
      image: 'https://some-image.jpg'
    }
    this.service.createProduct(product)
    .subscribe({
      next: (result: ProductRepresentation) => {
        console.log(result)
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
        if (error instanceof ErrorEvent) {
          console.error('An error occurred:', error);
        } else {
          // The backend returned an unsuccessful response code.
          console.error(`Server returned status code ${error.status}, error message: ${error.message}`);

        }
      }
    })
    // this.service.getAllProductsWithLimit()
    // .subscribe({
    //   next: (data) => {
    //     console.log(data)
        
    //   }
    // });
  }

  // ngOnInit(): void {
  //   console.log(this.activatedRoute)
  //   this.param = this.activatedRoute.snapshot.params['username'];
  //   this.queryParam = this.activatedRoute.snapshot.queryParams['course']
  //   // this.param = this.activatedRoute.snapshot.params['id'];
  // }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';

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
    this.service.getAllProductsWithLimit()
    .subscribe({
      next: (data) => {console.log(data)}
    });
  }

  // ngOnInit(): void {
  //   console.log(this.activatedRoute)
  //   this.param = this.activatedRoute.snapshot.params['username'];
  //   this.queryParam = this.activatedRoute.snapshot.queryParams['course']
  //   // this.param = this.activatedRoute.snapshot.params['id'];
  // }
}

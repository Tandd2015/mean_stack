import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(private readonly productService: ProductService, private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.productService.getProduct(id))
    )
    .subscribe(product => {
      console.log('product from the API at product-detail', product);
      this.product = product;
    });
  }

}

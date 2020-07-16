import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  products: Product[] = [];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => this.productService.getProduct(id)),
      )
      .subscribe(product => {
        console.log('product from the API, ', product);
        this.product = product;
      });
  }
  onSubmit(event: Event, form: NgForm) {
    console.log('updating product ...', {...form.value, _id: this.product._id});
    this.productService.updateProduct({...form.value, _id: this.product._id})
      .subscribe(updatedProduct => {
        console.log('updated product ...', updatedProduct);
        this.router.navigateByUrl('/products');
      });
  }
  onDelete(product: Product): void{
    console.log('deleting a product', product);
    this.productService.removeProduct(product._id).subscribe(deletedProduct => {
      console.log('deleted product', deletedProduct);
      this.products = this.products.filter(currentProduct => currentProduct._id !== deletedProduct._id);
      this.router.navigateByUrl('/products');
    });
  }
}

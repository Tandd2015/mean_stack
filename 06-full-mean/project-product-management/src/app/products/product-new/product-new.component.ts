import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models';
import { NgForm } from '@angular/forms';

import { ProductService } from '../../services';
@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product = new Product();
  constructor(private readonly productService: ProductService, private readonly router: Router) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.productService.createProduct(form.value).subscribe(createdProduct => {
      console.log(createdProduct);
      this.product = new Product();
      form.reset();
      this.router.navigateByUrl('/products');
    });
  }
}

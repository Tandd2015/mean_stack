import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

import { ProductService } from '../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product;
  constructor(private readonly productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  onSelect(product: Product): void {
    console.log('selecting a product', product);
    this.selectedProduct = this.selectedProduct === product ? null : product;
  }

  OnCreate(product: Product): void {
    console.log('creating a product', product);
    this.productService
      .createProduct(product)
      .subscribe(createdProduct => (this.products = [...this.products, createdProduct]));
  }

  onDelete(product: Product): void{
    console.log('deleting a product', product);
    this.productService.removeProduct(product._id).subscribe(deletedProduct => {
      console.log('deleted product', deletedProduct);
      this.products = this.products.filter(currentProduct => currentProduct._id !== deletedProduct._id);
    });
  }
  onEvent(event: Event): void {
    console.log('event passing');
    event.stopPropagation();
  }
}

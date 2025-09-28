import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit { // Note: spiegami implement OnInit

  products: any[] = []; // TODO: togliere any
  // Note: spiegami il codice e la sintassi

  productService: ProductService = inject(ProductService);
  // Note: spiegami il codice e la sintassi

  ngOnInit(): void {
    this.productService
  }
  // Note: spiegami il codice e la sintassi
}

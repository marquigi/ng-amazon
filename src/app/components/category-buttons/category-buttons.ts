import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-category-buttons',
  imports: [],
  templateUrl: './category-buttons.html',
  styleUrl: './category-buttons.css'
})
export class CategoryButtons implements OnInit {

  categories: Category[] = [];

  productsService: ProductService = inject(ProductService);

  // NOTA
  ngOnInit(): void {
    this.productsService.getCategories()
      .then(r => this.categories = r)
      .catch(err => console.log(err));
  }

}

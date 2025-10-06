import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./components/product-list/product-list";
import { SearchBar } from "./components/search-bar/search-bar";
import { CategoryButtons } from "./components/category-buttons/category-buttons";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, SearchBar, CategoryButtons],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-amazon');
}

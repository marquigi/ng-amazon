import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./components/product-list/product-list";
import { SearchBar } from "./components/search-bar/search-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-amazon');
}

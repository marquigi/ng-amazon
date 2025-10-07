import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryButtons } from "./components/category-buttons/category-buttons";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoryButtons, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-amazon');
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  async getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data)

    return data;
  }
}

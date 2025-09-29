import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  // "implements OnInit" obbliga la classe a implementare il metodo "ngOnInit()",
  // che viene eseguito automaticamente da Angular all’inizializzazione del componente.


  products: any[] = [];
  // Questa proprietà è un array che conterrà i prodotti. Per ora utilizza "any" come tipo generico,
  // ma in futuro sarebbe meglio sostituirlo con un’interfaccia tipizzata per maggiore sicurezza e chiarezza.

  productService: ProductService = inject(ProductService);
  // Questa riga crea un'istanza del servizio ProductService usando la funzione "inject()" di Angular.
  // In pratica, Angular fornisce automaticamente l'oggetto ProductService, che servirà per recuperare i dati dei prodotti.
  // È un'alternativa al classico metodo con il costruttore.

  ngOnInit(): void {
    this.productService.getProducts();
  }
  // "ngOnInit()" viene eseguito automaticamente quando il componente viene inizializzato.
  // È il posto giusto per recuperare i dati, ad esempio chiamando il servizio per caricare i prodotti.
}

import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  // "implements OnInit" obbliga la classe a implementare il metodo "ngOnInit()",
  // che viene eseguito automaticamente da Angular all’inizializzazione del componente.

  productService: ProductService = inject(ProductService);
  // Questa riga crea un'istanza del servizio ProductService usando la funzione "inject()" di Angular.
  // In pratica, Angular fornisce automaticamente l'oggetto ProductService, che servirà per recuperare i dati dei prodotti.
  // È un'alternativa al classico metodo con il costruttore.

  // products: any[] = [];
  // Questa proprietà è un array che conterrà i prodotti. Per ora utilizza "any" come tipo generico,
  // ma in futuro sarebbe meglio sostituirlo con un’interfaccia tipizzata per maggiore sicurezza e chiarezza.
  products: Product[] = [];
  // Cambio il tipo e importo il tipo da models/product

  ngOnInit(): void {
    // "ngOnInit()" viene eseguito automaticamente quando il componente viene inizializzato.
    // È il posto giusto per recuperare i dati, ad esempio chiamando il servizio per caricare i prodotti.
    this.productService.getProducts()
      .then(r => this.products = r.products)
      .catch(err => console.log("ERRORE NEL RECUPERO DEI PRODOTTI"));
    // Qui viene gestita la risposta del servizio: "r" rappresenta l'oggetto restituito dalla promessa,
    // e la proprietà "products" di "r" viene assegnata all'array locale "this.products" per visualizzarli nel template.
  }

  filteredProduct() {
    // "filteredProduct()" restituisce la lista dei prodotti filtrata in base al testo di ricerca.
    // Se la proprietà "ricerca" del servizio non è vuota, filtra i prodotti confrontando il titolo con la stringa cercata.
    if (this.productService.ricerca != "") {
      return this.products.filter(x => x.title.toLowerCase().includes(this.productService.ricerca.toLowerCase()));
      // "toLowerCase()" converte entrambe le stringhe in minuscolo, così il confronto non è sensibile alle maiuscole/minuscole.
    } else {
      return this.products;
    }
  }

}

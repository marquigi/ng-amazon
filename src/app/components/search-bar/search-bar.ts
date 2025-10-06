import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {

  stringaRicerca: string = "";

  productsService: ProductService = inject(ProductService);

  // Metodo chiamato al click del pulsante "Cerca"
  // Passa la stringa digitata alla funzione del servizio che aggiorna la ricerca
  eseguiRicerca() {
    this.productsService.aggiornaStringRicerca(this.stringaRicerca);
  }
}

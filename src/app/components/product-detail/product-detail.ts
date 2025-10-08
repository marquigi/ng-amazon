import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {

  product?: Product;

  ps: ProductService = inject(ProductService);

  // Usa la funzione inject per ottenere un'istanza di ActivatedRoute, che permette di accedere ai parametri della route corrente
  route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // Recupero l'id dall'indirizzo
    // Recupera il valore dell'ID passato nell'URL per poi usarlo per richiedere il prodotto al servizio
    const id = this.route.snapshot.paramMap.get("id")
    console.log(id);

    // con l'id recuperato chiamo il metodo del servizio
    // Che recupera dal server un prodotto in base all'id
    this.ps.getProductsById(id!)
      // Quando la Promise del servizio si risolve, assegna il prodotto alla proprietà 'product' del componente
      .then(prodotto => this.product = prodotto)
      .catch(err => console.log(err))
  }
}

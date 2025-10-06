import { Injectable } from '@angular/core';
import { ProductsResponse } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  // Dichiarazione di una proprietà "ricerca" di tipo stringa, inizialmente vuota
  // Sarà usata per memorizzare il testo inserito nella barra di ricerca
  ricerca: string = "";

  async getProducts(): Promise<ProductsResponse> {
    // Una funzione "asincrona" (async) è una funzione che:
    // - restituisce sempre una Promise, anche se usi "return" normale
    // - permette di usare "await" per aspettare il risultato di operazioni lente (es. fetch)
    // - non blocca il resto del programma: mentre questa funzione aspetta, altre parti del codice possono continuare
    // - ": Promise<ProductsResponse>" indica che restituisce una Promise
    //    che, quando completata, conterrà un valore di tipo ProductsResponse

    const response = await fetch("https://dummyjson.com/products");
    // "fetch" fa una richiesta HTTP (qui di tipo GET) all'URL indicato
    // "await" blocca l'esecuzione finché non arriva la risposta
    // "response" conterrà l'oggetto della risposta HTTP

    const data = await response.json();
    // ".json()" legge il corpo della risposta e lo trasforma da JSON a oggetto JavaScript
    // anche questo è asincrono, quindi serve "await"
    // "data" conterrà i prodotti già pronti come oggetto/array

    console.log(data)

    return data;
    // restituisce i dati a chi ha chiamato la funzione
    // essendo async, in realtà torna una Promise che risolve con "data"
  }

  async getCategories() {
    const response = await fetch("https://dummyjson.com/products/categories");
    // NOTA

    const data: Category[] = await response.json();
    // ".json()" legge il corpo della risposta e lo trasforma da JSON a oggetto JavaScript
    // anche questo è asincrono, quindi serve "await"
    // "data" conterrà i prodotti già pronti come oggetto/array

    return data;
    // restituisce i dati a chi ha chiamato la funzione
    // essendo async, in realtà torna una Promise che risolve con "data"
  }

  async searchProducts(q: string) {
    const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURI(q)}`);
    // NOTA

    const data = await response.json();
    // ".json()" legge il corpo della risposta e lo trasforma da JSON a oggetto JavaScript
    // anche questo è asincrono, quindi serve "await"
    // "data" conterrà i prodotti già pronti come oggetto/array

    return data;
    // restituisce i dati a chi ha chiamato la funzione
    // essendo async, in realtà torna una Promise che risolve con "data"
  }

  aggiornaStringRicerca(r: string) {
    console.log("NUOVA RICERCA:", r);
    this.ricerca = r;
    // Aggiorna il valore della proprietà "ricerca" con il testo ricevuto come parametro
    // Serve a tenere sincronizzato il valore digitato nella barra di ricerca
  }
}

import { Injectable } from '@angular/core';
import { Product, ProductsResponse } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  // Proprietà per memorizzare il testo inserito nella barra di ricerca
  ricerca: string = "";


  async getProducts(): Promise<ProductsResponse> {
    // "async" indica che la funzione è asincrona e restituisce una Promise
    // ": Promise<ProductsResponse>" specifica il tipo della Promise che questa funzione restituisce
    // Le funzioni asincrone permettono di usare "await" per attendere risultati di operazioni asincrone senza bloccare l'esecuzione del programma

    const response = await fetch("https://dummyjson.com/products");
    // "fetch" è una funzione globale che invia una richiesta HTTP (di default GET) all'URL specificato e restituisce una Promise
    // "await" sospende l'esecuzione della funzione fino a quando la Promise restituita da fetch non viene risolta, ottenendo l'oggetto Response

    const data: ProductsResponse = await response.json();
    // ".json()" legge il corpo della risposta e lo trasforma da JSON a oggetto JavaScript
    // anche questo è asincrono, quindi serve "await"
    // "data" conterrà i prodotti già pronti come oggetto/array

    console.log(data)

    return data;
    // restituisce i dati a chi ha chiamato la funzione
    // essendo async, in realtà torna una Promise che risolve con "data"
  }


  // Funzione che riceve un ID e restituisce i dettagli del prodotto corrispondente dal server
  async getProductsById(id: string) {
    // "id: string" indica che la funzione accetta un parametro "id" di tipo stringa
    // La funzione è asincrona e restituisce implicitamente una Promise

    const response = await fetch(`https://dummyjson.com/products/${id}`);
    // Template literal (backticks) permette di inserire l'espressione ${id} all'interno della stringa URL
    // "fetch" invia una richiesta GET all'URL dinamico costruito con l'id passato come parametro
    // "await" attende che la Promise di fetch venga risolta con la risposta HTTP

    const data: Product = await response.json();
    // ".json()" legge il corpo della risposta e lo trasforma da JSON a oggetto JavaScript
    // anche questo è asincrono, quindi serve "await"
    // "data" conterrà i prodotti già pronti come oggetto/array

    console.log(data)

    return data;
    // Restituisce i dati del prodotto come risultato della Promise della funzione asincrona
  }


  // Funzione asincrona che recupera la lista delle categorie
  async getCategories() {
    const response = await fetch("https://dummyjson.com/products/categories");
    // "fetch" invia una richiesta GET all'endpoint delle categorie
    // "await" attende la risposta HTTP


    const data: Category[] = await response.json();
    // "response.json()" legge e converte il corpo della risposta JSON in un array di oggetti Category
    // "await" sospende l'esecuzione finché la conversione non è completata

    return data;
    // restituisce i dati a chi ha chiamato la funzione
    // essendo async, in realtà torna una Promise che risolve con "data"
  }


  // Funzione asincrona che esegue una ricerca di prodotti in base a una query string "q"
  async searchProducts(q: string) {
    const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURI(q)}`);
    // "fetch" invia una richiesta HTTP (GET) all'endpoint di ricerca, includendo la query "q" codificata
    // "encodeURI(q)" assicura che eventuali spazi o caratteri speciali nella stringa di ricerca non causino errori nell'URL

    const data = await response.json();
    // ".json()" legge il corpo della risposta e lo trasforma da JSON a oggetto JavaScript
    // anche questo è asincrono, quindi serve "await"
    // "data" conterrà i prodotti già pronti come oggetto/array

    return data;
    // restituisce i dati a chi ha chiamato la funzione
    // essendo async, in realtà torna una Promise che risolve con "data"
  }


  // Funzione che aggiorna la proprietà "ricerca" con la nuova stringa ricevuta come parametro "r"
  // "r: string" indica che il parametro è una stringa
  aggiornaStringRicerca(r: string) {
    console.log("NUOVA RICERCA:", r);
    this.ricerca = r;
    // Aggiorna il valore della proprietà "ricerca" con il testo ricevuto come parametro
    // Serve a tenere sincronizzato il valore digitato nella barra di ricerca
  }
}

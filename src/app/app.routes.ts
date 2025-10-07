import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Home } from './components/home/home';
import { Contatti } from './components/contatti/contatti';

// L'array 'routes' definisce le rotte principali dell'app. 
// Ogni oggetto ha una proprietà 'path' (il percorso nell'URL) e 'component' (il componente mostrato in quella rotta).
// Esempio: quando l'URL è '/prodotti', Angular mostra il componente ProductList.
export const routes: Routes = [
    {
        path: "prodotti",
        component: ProductList
    },
    {
        path: "",
        component: Home
    },
    {
        path: "contatti",
        component: Contatti
    }
];

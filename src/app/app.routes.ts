import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Home } from './components/home/home';
import { Contatti } from './components/contatti/contatti';
import { ProductDetail } from './components/product-detail/product-detail';
import { PostAdd } from './components/post-add/post-add';

// L'array 'routes' definisce le rotte principali dell'app. 
export const routes: Routes = [
    {
        path: "prodotti",
        // Ogni oggetto ha una proprietà 'path' (il percorso nell'URL) e 'component' (il componente mostrato in quella rotta).
        // Esempio: quando l'URL è '/prodotti', Angular mostra il componente ProductList.
        component: ProductList
    },
    {
        path: "",
        component: Home
    },
    {
        path: "contatti",
        component: Contatti
    },
    {
        path: "prodotti/:id",
        // ':id' indica un parametro dinamico nell'URL, cioè il valore dell'ID del prodotto che sarà letto dal componente
        component: ProductDetail
    },
    {
        path: "nuovo-post",
        component: PostAdd
    }
];

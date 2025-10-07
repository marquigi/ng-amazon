import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Home } from './components/home/home';
import { Contatti } from './components/contatti/contatti';

// NOTA; cosa fa? e perchè?; cos'è path? che valori dargli. component serve per importare
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

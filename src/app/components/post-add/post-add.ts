import { Component, inject } from '@angular/core';
import { NuovoPost } from '../../models/post';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-post-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './post-add.html',
  styleUrl: './post-add.css'
})
export class PostAdd {

  model: NuovoPost = new NuovoPost();
  // Creo un nuovo post vuoto collegato al form per scrivere i dati

  ps = inject(ProductService);
  // Mi serve per aggiungere nuovi post tramite il servizio

  // Funzione
  aggiungiPost() {
    // Qui potrei chiamare il servizio per fare una HTTP POST e salvare il post sul server 
    console.log(this.model);

    this.ps.addPost(this.model);
    this.model = new NuovoPost();
    // Resetto il form per prepararlo a un nuovo post
  }
}

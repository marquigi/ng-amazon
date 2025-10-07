import { Component } from '@angular/core';
import { SearchBar } from "../search-bar/search-bar";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SearchBar, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}

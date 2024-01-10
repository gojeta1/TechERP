import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonlistComponent } from '../buttonlist/buttonlist.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    ButtonlistComponent,
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

    constructor() {}


}

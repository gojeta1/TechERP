import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalprodutosComponent } from "../modals/modalprodutos/modalprodutos.component";

declare var M: any;

@Component({
    selector: 'app-produtos',
    standalone: true,
    templateUrl: './produtos.component.html',
    styleUrl: './produtos.component.scss',
    imports: [
        CommonModule,
        ModalprodutosComponent,
    ]
})
export class ProdutosComponent implements OnInit{

    constructor() {}

    ngOnInit(): void {
      const elems = document.querySelectorAll('.modal');
      const instance = M.Modal.init(elems)
    }

}

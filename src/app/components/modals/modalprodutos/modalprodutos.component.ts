import { Component, OnInit } from '@angular/core';

declare var M: any | undefined;


@Component({
  selector: 'app-modalprodutos',
  standalone: true,
  imports: [],
  templateUrl: './modalprodutos.component.html',
  styleUrl: './modalprodutos.component.scss'
})
export class ModalprodutosComponent implements OnInit{
  ngOnInit(): void {
      const elems = document.querySelectorAll('select')
      const instance = M.FormSelect.init(elems)
  }

  limpaCampos(){
    
  }
}

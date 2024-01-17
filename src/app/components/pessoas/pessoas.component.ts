import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalpessoasComponent } from "../modals/modalpessoas/modalpessoas.component";

declare var M: any | undefined;


@Component({
    selector: 'app-pessoas',
    standalone: true,
    templateUrl: './pessoas.component.html',
    styleUrl: './pessoas.component.scss',
    imports: [
        CommonModule,
        ModalpessoasComponent
    ]
})
export class PessoasComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
    const elems = document.querySelectorAll('.tabs');
    const instance = M.Tabs.init(elems, {
      indicator: 'teal',
    })

    const elems2 = document.querySelectorAll('.modal');
    const instance2 = M.Modal.init(elems2);
  }

  openModal(){

    const modal = document.getElementById('modalPessoas');
    const instance2 = M.Modal.getInstance(modal);

    instance2.open();
    
  }


}

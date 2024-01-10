import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonlistComponent } from '../buttonlist/buttonlist.component';
declare var M: any;


@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [
    CommonModule,
    ButtonlistComponent,
  ],
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.scss'
})
export class PessoasComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
    const elems = document.querySelectorAll('.tabs');
    const instance = M.Tabs.init(elems, {
      indicator: 'teal',
    })
  }



}

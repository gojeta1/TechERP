import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;


@Component({
  selector: 'app-useredit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './useredit.component.html',
  styleUrl: './useredit.component.scss'
})
export class UsereditComponent {


    file: null | any
    filepath: string = ''
    nome: string  = ''
    telephone: string = ''
    place: string = ''
    email: string = ''
    cpf: string = ''
    cidade: string = ''
  




  constructor(private router: Router){}

  clearDados(){

      this.filepath = '',
      this.nome = '',
      this.telephone = '',
      this.place = '',
      this.email = '',
      this.cpf = '',
      this.cidade = ''
  }

  editedUser(){

  }
}
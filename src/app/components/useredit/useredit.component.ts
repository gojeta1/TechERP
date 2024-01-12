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

  private _avatarUrl: string | null = null;
  public get avatarUrl(): string | null {
    return this._avatarUrl;
  }
  public set avatarUrl(value: string | null) {
    this._avatarUrl = value;
  }

  onFileChange(el: any) {
    const fileInput = el.target;
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.avatarUrl = e.target.result;
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }
  
  editedUser(){

  }
}
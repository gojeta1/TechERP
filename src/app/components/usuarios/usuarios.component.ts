import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ModalusuariosComponent } from '../modals/modalusuarios/modalusuarios.component';

declare var M: any;

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, ModalusuariosComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})

export class UsuariosComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    const elems = document.querySelectorAll('.modal')
    const instance = M.Modal.init(elems)
  }

  email = {
    guilherme: 'guilherme@gmail.com',
    eduarda: 'eduarda@gmail.com',
    marconi: 'marconi@gmail.com',
    amanda: 'amanda@gmail.com',
    regina: 'regina@gmail.com',
    karina: 'karina@gmail.com'
  }


}

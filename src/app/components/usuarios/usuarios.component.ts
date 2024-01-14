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
    markis: 'markis@gmail.com',
    natalia: 'natalia@gmail.com',
    nelson: 'nelson@gmail.com',
    cicera: 'cicera@gmail.com',
    maria: 'maria@gmail.com',
    nadia: 'karina@gmail.com'
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})

export class UsuariosComponent {

  email = {
    guilherme: 'guilherme@gmail.com',
    eduarda: 'eduarda@gmail.com',
    marconi: 'marconi@gmail.com',
    amanda: 'amanda@gmail.com',
    regina: 'regina@gmail.com',
    karina: 'karina@gmail.com'
  }


}

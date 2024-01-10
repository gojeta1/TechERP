import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttonlist',
  standalone: true,
  imports: [],
  templateUrl: './buttonlist.component.html',
  styleUrl: './buttonlist.component.scss'
})
export class ButtonlistComponent {

  constructor(private router: Router){}
  
  voltarHome(){
    this.router.navigate(['/home/dashboard'])
  }
}

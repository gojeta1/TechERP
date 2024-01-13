import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contratosoptions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contratosoptions.component.html',
  styleUrl: './contratosoptions.component.scss'
})
export class ContratosoptionsComponent {
@Input() show: boolean = false;
}

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

declare var M: any;
@Component({
  selector: 'app-financeirooptions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financeirooptions.component.html',
  styleUrl: './financeirooptions.component.scss',
  animations: [
    trigger('slideDown', [
        state('hidden', style({ height: '0', opacity: 0 })),
        state('visible', style({ height: '*', opacity: 1 })),
        transition('hidden <=> visible', animate('500ms ease-in-out')),
    ]),
],
})
export class FinanceiroOptionsComponent  {
  
  constructor(){}

  @Input() show: boolean = false;

    ngOnInit(): void {
      if(typeof document !== 'undefined'){
        document.body.style.overflowY = 'hidden'; // Impede que o corpo da página role enquanto as opções estão visíveis
      }
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      // Seu código que acessa o document vai aqui
      document.body.style.overflowY = 'auto'; // Restaura o rolamento normal do corpo da página ao destruir o componente
    }
}
  
  // Restante do seu código...
}

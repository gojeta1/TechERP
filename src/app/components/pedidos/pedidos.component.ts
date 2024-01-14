import { AfterViewInit, Component } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.sidenav');
    const instance = M.Sidenav.init(elems,{})
  }
}

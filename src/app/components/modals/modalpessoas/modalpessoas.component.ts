import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


declare var M: any;

@Component({
  selector: 'app-modalpessoas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modalpessoas.component.html',
  styleUrl: './modalpessoas.component.scss'
})
export class ModalpessoasComponent implements AfterViewInit{
  
  constructor(private el: ElementRef){}

  ngAfterViewInit(): void {
    const elems = this.el.nativeElement.querySelectorAll('select')
    const instance = M.FormSelect.init(elems,{})
  }

}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-modalusuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modalusuarios.component.html',
  styleUrl: './modalusuarios.component.scss'
})
export class ModalusuariosComponent implements OnInit{

  constructor(private el:ElementRef){}

  ngOnInit(): void {
    const elems = this.el.nativeElement.querySelectorAll('select');
    const instance = M.FormSelect.init(elems,{});

    const elems2 = this.el.nativeElement.querySelectorAll('.datepicker');
    const instance2 = M.Datepicker.init(elems2, {
      i18n:{
        months: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro'
        ],
        monthsShort: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez'
        ],
        weekdays: [
          'Domingo',
          'Segunda',
          'Terça',
          'Quarta',
          'Quinta',
          'Sexta',
          'Sábado'
        ],
        weekdaysShort: [
          'Dom',
          'Seg',
          'Ter',
          'Qua',
          'Qui',
          'Sex',
          'Sab'
        ],
        weekdaysAbbrev: [
          'D', 'S','T','Q','Q','S','S'
        ]
      },
      format: 'dd mmmm yyyy',
      
    });
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
}

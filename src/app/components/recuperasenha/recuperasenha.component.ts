import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription, interval } from 'rxjs';

declare var M: any;


@Component({
  selector: 'app-recuperasenha',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recuperasenha.component.html',
  styleUrl: './recuperasenha.component.scss'
})
export class RecuperasenhaComponent implements OnInit, OnDestroy {

  tempoRestante: number = 60;
  aguardandoCodigo: boolean = true;
  private intervalSubscription: Subscription | undefined;
  exibirElementos: boolean = false;
  email: string = '';
  codigoVerifica: number | undefined;
  codigoVerificacao: string = '';

  ngOnDestroy(): void {
    this.iniciarContagemRegressiva();
  }

  ngOnInit(): void {
    this.pararContagemRegressiva();
  }

  enviarCodigo(){
    if(this.email === ''){
      M.toast({html: 'Nenhum e-mail Informado', classes:'red'});
    }else{
      this.exibirElementos = true;
      this.iniciarContagemRegressiva();
    }
  }

  iniciarContagemRegressiva(): void {
    this.intervalSubscription = interval(1000).subscribe(() => {
      if (this.tempoRestante > 0) {
        this.tempoRestante --;
      } else {
        this.aguardandoCodigo = false;
        this.pararContagemRegressiva();
      }
    });
  }

  pararContagemRegressiva(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  reenviarCodigo(): void {
    // Lógica para reenviar o código aqui
    
    // Reinicie a contagem regressiva
    this.tempoRestante = 60;
    this.aguardandoCodigo = true;
    this.iniciarContagemRegressiva();
  }
}

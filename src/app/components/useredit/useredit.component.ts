import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-useredit',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    FormsModule,
  ],
  templateUrl: './useredit.component.html',
  styleUrl: './useredit.component.scss'
})
export class UsereditComponent implements AfterViewInit {

  dados: {
    nome: string;
    telephone: string;
    place: string;
    email: string;
    cpf: number;
    cidade: string;    
  } | any



  constructor(private router: Router){}

  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems, {
    });
  }
  
  closeEdit(){
      this.router.navigate(['/home/dashboard'])
  }

  clearDados(){
    if(this.dados === '' && this.dados.departamento === false){
      M.toast({html: 'Não existe dados preenchidos', classes: 'red lighten-1'});
    }else{
      this.dados = { 
        nome: '',
        telephone: '',
        place: '',
        email: '',
        cpf: '',
        cidade: '',
      };

      // console.log(this.dados.departamento);
    }
  }

  editedUser(){

  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { SpinnerComponent } from '../spinner/spinner.component';

declare var M: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    SpinnerComponent, 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private router: Router, private AuthService: AuthService){}

  username: string = '';
  password: string = '';
  notification: {message:  string, type: string} | null = null;
  isLoading: boolean = false;

  singin(){
      try {

        this.AuthService.login(this.username,this.password)

        if(this.AuthService.isAuthenticatedUser()){

          this.isLoading = true;
          M.toast({html: 'Login realizado com Sucesso !', classes:'teal accent-4'});
          setTimeout(() => {
            this.isLoading = false;
            this.router.navigate(['home/dashboard'])
          }, 5000);

          setTimeout(() => {
              M.toast = null;
          }, 3000);

        } else {
          
          this.isLoading = false;
          M.toast({html: 'Credenciais Incorretas !', classes: 'red lighten-1'});


          setTimeout(() => {
              M.toast = null;
          }, 5000);

          this.router.navigate([''])
        }
      } catch (error) {
        this.isLoading = false;
        M.toast({html: 'Algo Deu Errado !' , classes: 'red lighten-1'});

      }     
    }
}


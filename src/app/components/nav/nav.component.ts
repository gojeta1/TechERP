import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { UsereditComponent } from '../useredit/useredit.component';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotificationComponent } from '../notification/notification.component';

// import M from 'materialize-css';
declare var M: any;

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    SpinnerComponent,
    UsereditComponent,
    DashboardComponent,
    NotificationComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements AfterViewInit {

  constructor(private authService: AuthService, private el: ElementRef, private router: Router){}

  isLoading: boolean = false;


  ngAfterViewInit(): void {

    const elems = this.el.nativeElement.querySelectorAll('.sidenav');
    const instance = M.Sidenav.init(elems, Option);  
    

    const elems3 = document.querySelectorAll('.dropdown-trigger');
    const instances3 = M.Dropdown.init(elems3,{
      direction: 'right',
    });


  }

  Logout(){

    M.toast({html: 'Até Logo !', classes: 'blue'});
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.authService.logout();
    }, 3000);
  }

  userEdit(): void{
    // this.userEdited = true;
    this.router.navigate(['/home/useredit']);
}
  notificationModal(){

  }
  
  voltarHome(){
    this.router.navigate(['/home/dashboard'])
  }

  // Opções Sidenav

  Dashboard(){
    this.router.navigate(['/home/dashboard']);
  }


  Cadastros(){
    this.router.navigate(['/home/cadastros'])
  }

  Pessoas(){
    this.router.navigate(['/home/pessoas']);
  }

  Financeiro(){
    this.router.navigate(['/home/financeiro']);
  }

  Contratos(){
    this.router.navigate(['/home/contratos']);
  }

  Produtos(){
    this.router.navigate(['/home/produtos']);
  }
  Estoque(){
    this.router.navigate(['/home/estoque']);
  }

  Usuarios(){
    this.router.navigate(['/home/usuarios']);
  }

  Configuracoes(){
    this.router.navigate(['/home/config']);
  }



  



}

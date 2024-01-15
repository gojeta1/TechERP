import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { UsereditComponent } from '../useredit/useredit.component';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotificationComponent } from '../notification/notification.component';
import { FinanceiroOptionsComponent } from "../financeirooptions/financeirooptions.component";
import { CommonModule } from '@angular/common';
import { ContratosoptionsComponent } from '../contratosoptions/contratosoptions.component';
import { ModaltrocasenhaComponent } from '../modals/modaltrocasenha/modaltrocasenha.component';


// import M from 'materialize-css';
declare var M: any;

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
    imports: [
        CommonModule,
        SpinnerComponent,
        UsereditComponent,
        DashboardComponent,
        NotificationComponent,
        FinanceiroOptionsComponent,
        ContratosoptionsComponent,
        ModaltrocasenhaComponent,
    ]
})
export class NavComponent implements AfterViewInit {

  constructor(private authService: AuthService, private el: ElementRef, private router: Router){}

  isLoading: boolean = false;
  showFinanceiroOptions = false;
  showContratosOptions = false;
  showConfigOptions = false;

  ngAfterViewInit(): void {

    const elems = this.el.nativeElement.querySelectorAll('.sidenav');
    const instance = M.Sidenav.init(elems, Option);  
    
    const elems2 = this.el.nativeElement.querySelectorAll('.modal')
    const instance2 = M.Modal.init(elems2);

    const elems3 = document.querySelectorAll('.dropdown-trigger');
    const instances3 = M.Dropdown.init(elems3,{
      direction: 'left',
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


  toggleFinanceiroOptions() {
      this.showFinanceiroOptions = !this.showFinanceiroOptions;
  }

  toggleContratosOptions() {
    this.showContratosOptions = !this.showContratosOptions;
  }
  voltarHome(){
    this.router.navigate(['/home/dashboard'])
  }

  // Opções Sidenav

  Dashboard(){
    this.router.navigate(['/home/dashboard']);
  }
  Cadastros(){
    this.router.navigate(['/home/cadastros']);
  }
  Pessoas(){
    this.router.navigate(['/home/pessoas']);
  }
  Pedidos(){
    this.router.navigate(['/home/pedidos']);
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

  toogleConfigOptions(){
    this.showConfigOptions = !this.showConfigOptions ;
  }



  



}

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UsereditComponent } from './components/useredit/useredit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { ContratosComponent } from './components/contratos/contratos.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ConfigComponent } from './components/config/config.component';
import { NotificationComponent } from './components/notification/notification.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
     },
     {
        path: 'login',
        component: LoginComponent
     },
     {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
         { path: 'dashboard', 
         component: DashboardComponent,
         canActivate: [AuthGuard],
         },
         // {
         //    path: 'useredit',
         //    component: UsereditComponent,
         //    canActivate: [AuthGuard],
         // },
         {
            path: 'notification',
            component: NotificationComponent,
            canActivate: [AuthGuard],
         },
         {
            path: 'pessoas',
            component: PessoasComponent,
            canActivate: [AuthGuard],
         },
         {
            path: 'financeiro',
            component: FinanceiroComponent,
            canActivate: [AuthGuard],
         },
         {
            path: 'contratos',
            component: ContratosComponent,
            canActivate: [AuthGuard],
         },
         {
            path: 'produtos',
            component: ProdutosComponent,
            canActivate: [AuthGuard],
         },
         {
            path: 'estoque',
            component: EstoqueComponent,
            canActivate: [AuthGuard],
         },
         {
            path: 'usuarios',
            component: UsuariosComponent,
            canActivate: [AuthGuard],
         },
         {
            path: 'config',
            component: ConfigComponent,
            canActivate: [AuthGuard],
         },
       ],
     },

];

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

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
            path: 'pedidos',
            component: PedidosComponent,
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

       ],
     },

];

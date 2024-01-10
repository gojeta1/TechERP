// auth.guard.ts
import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
declare var M: any;

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true;
    } else {
      M.toast({html: 'Sua Sessão expirou !', classes: 'red'})

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);

      return false;
    } 
  }
}

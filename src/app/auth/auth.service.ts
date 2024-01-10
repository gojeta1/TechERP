import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  constructor(private cookieService: CookieService, private router: Router) {}

  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Lógica de autenticação aqui (por exemplo, uma chamada a uma API)
    if(username === 'admin' && password === '123'){

      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c1';
      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 1);
      this.cookieService.set(this.TOKEN_KEY, token, expirationDate);
      this.isAuthenticated = true;
      return true;

    } else {

      this.isAuthenticated = false;
      return false;
    }
    // Se as credenciais estiverem corretas, defina isAuthenticated como true
    //this.isAuthenticated = true;
    //return this.isAuthenticated;
  }

  logout(): void {

    this.cookieService.delete(this.TOKEN_KEY);
    this.isAuthenticated = false;
    this.router.navigate(['']);

  }

  isAuthenticatedUser(): boolean {
    const token = this.cookieService.get(this.TOKEN_KEY);
    return !!token && !this.isTokenExpired(token);
  }

  private isTokenExpired(token: string): boolean {
    try {
      const decodedToken: any = jwtDecode(token);
      const expirationDate = new Date(decodedToken.exp * 1000); // convertendo segundos para milissegundos

      return expirationDate < new Date();
    } catch (error) {
      // Se houver qualquer problema ao decodificar o token, considere-o como expirado
      return true;
    }
  }

}

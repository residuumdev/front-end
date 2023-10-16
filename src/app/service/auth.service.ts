import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    if (token) {
      token = JSON.parse(token);
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(clonedRequest).pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            Swal.fire(
              'Você não tem permissão para acessar este serviço, realize o login!',
            ).then(() => {
              this.router.navigate(['/']);
            });
          }
          // retorna uma função que cria o erro.
          return throwError(() => err);
        }),
      );
    }

    return next.handle(request);
  }
}

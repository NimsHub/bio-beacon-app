import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
token : string | undefined | null;
  constructor() {
    if(localStorage.getItem('authToken')){
      this.token=localStorage.getItem('authToken');
    }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes('/auth')) return next.handle(request)
    let jwtToken = request.clone({
      setHeaders:{
        Authorization:`Bearer ${this.token}`
      }
    })
    return next.handle(jwtToken);
  }
}

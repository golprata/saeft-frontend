import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = environment.api_url.split('/');
    const token = localStorage.getItem('token');
    // const token = 'fAbIaNOiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbC5zaXNhZWUuY29tL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNTYxMTI2MjM0LCJleHAiOjE1NjExMjk4MzQsIm5iZiI6MTU2MTEyNjIzNCwianRpIjoibjd5N005N2lkSkJPeVlWciJ9.AX43oXKlAQj1rEjDx7aUGCXBo7nfj5exSyHur2LEz-s';

    if (token && (requestUrl[2] === apiUrl[2])) {
      const newRequest = request.clone({ setHeaders: {'Authorization': `Bearer ${token}`} });
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }

  }
}

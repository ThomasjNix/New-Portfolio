import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('admin') > -1) {
            const jwtToken = localStorage.getItem('access_token');
            if (jwtToken) {
                req = req.clone({
                    setHeaders: {
                        Authorization: `${jwtToken}`
                    }
                });
            }
        }
        return next.handle(req);
    }
}
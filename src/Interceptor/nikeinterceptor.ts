import { tap, switchMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class NikeInterceptor implements HttpInterceptor {
    constructor() { }

    reLoginInProgress = false;
    refreshTokenInProgress = false;
    reLoggedInSource = new Subject<HttpEvent<any>>();
    refreshTokenSource = new Subject<HttpEvent<any>>();
    reLoggedIn$ = this.reLoggedInSource.asObservable();
    refreshToken$ = this.reLoggedInSource.asObservable();
    /**
     * adds bearer token and accept type
     * @param request incoming httprequest
     */
    private setHeaders(request: HttpRequest<any>) {
        return request.clone({
            setHeaders: {
                // Authorization: `Bearer null`,
                Accept: `application/json`,
                'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = this.setHeaders(request);
        return next.handle(request).pipe();
    }
}

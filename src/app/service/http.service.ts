import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,) { }

    public get(url: string): Observable<any> {
      return this.http.get(this.getFullUrl(url), { responseType: 'json', headers: this.noCacheRequestOptions() })
          .pipe(
              catchError(this.handleError)
          );
    }

    public post(url: string, body: any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(this.getFullUrl(url), body, { responseType: 'json', headers: headers })
          .pipe(
              catchError(this.handleError)
          );
    }

    private getFullUrl(url: string): string {
        return environment.apiUrl + url;
    }

    private handleError(error: HttpErrorResponse) {
        let msg = '';

        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
                if('' + error.name === 'TimeoutError') {
                    msg += ' Timeout Error: ' + (error.error ? error.error.message: '') + '.';
                }
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.' + msg);
    }
    // Temporary fix until we create Token Interceptor for External APPliation and Use SHared HTTP TOken Service
    private noCacheRequestOptions(): HttpHeaders {
        return new HttpHeaders({
            'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        });
    }
}

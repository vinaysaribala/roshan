import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntitlementService {
  endPoint = 'Values'
  constructor(private httpService: HttpService) { }

  public get(): Observable<any> {
    return this.httpService.get(this.endPoint);
  }

  public post(): Observable<any> {
    return this.httpService.post('test/silpa', this.endPoint);
  }
  
  public getList(query: string): Observable<any> {
    return this.httpService.get(`${this.endPoint}/${query}`);
  }
}

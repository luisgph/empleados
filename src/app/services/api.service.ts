import { Injectable } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http : HttpBaseService) { }

  public getEmployees(): Observable<any> {
    return this.http.get('GetListLenguages');
  }

  public getTest(): Observable<any> {
    return this.http.get('posts');
  }

  public postAddEmployees(): Observable<any> {
    return this.http.post('GetListLenguages');
  }

  public postEditEmployees(): Observable<any> {
    return this.http.post('GetListLenguages');
  }
}

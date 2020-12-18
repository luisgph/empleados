import { Injectable } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http : HttpBaseService) { }

  public getEmployees(): Observable<any> {
    return this.http.get('Employee');
  }

  public postAddEmployees(params : any ): Observable<any> {
    return this.http.post('Employee/InsertEmployee', params);
  }

  public postEditEmployees(params : any ): Observable<any> {
    return this.http.post('Employee/UpdateEmployee', params);
  }
}

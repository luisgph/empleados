import { Injectable } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { Observable } from 'rxjs';
import { resultModel } from '../models/resultModel';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(public http : HttpBaseService) { }

  public postLogin(params : any): Observable<resultModel> {
    return this.http.post('login',params);
  }

  public postToken(): Observable<resultModel> {
    return this.http.post('Authorization');
  }
}

import { Injectable } from '@angular/core';
import { employeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
public employee : employeeModel;

  constructor() { }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { GlobalVariablesService } from '../../../services/global-variables.service';
import { resultModel } from '../../../models/resultModel';
import { employeeModel } from '../../../models/employee.model';

export interface PeriodicElement {
  id: number;
  body: string;
  title: string;
  userId: number;
}

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.less']
})
export class ListEmployeesComponent implements OnInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  public displayedColumns: string[] = ['employeeId', 'numberId', 'name', 'lastName', 'role', 'Editar'];
  public dataSource : any;

  
  constructor(public apiService : ApiService,  private router: Router, public globalVariablesService : GlobalVariablesService) {
   }

   ngOnInit(): void {
    this.apiService.getEmployees().subscribe(
      (res:resultModel) => {
        this.dataSource = new MatTableDataSource<resultModel>(res.data);
        this.dataSource.paginator = this.paginator;
        console.log(res);
      })
   }

   public edit(element:employeeModel){
     this.globalVariablesService.employee = element;
    this.router.navigateByUrl('edit');
   }

   public add(){
    this.router.navigateByUrl('add');
   }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import  Swal  from "sweetalert2";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { GlobalVariablesService } from '../../../services/global-variables.service';

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
  
  public displayedColumns: string[] = ['id', 'body', 'title', 'userId', 'Editar'];
  public dataSource : any;

  
  constructor(public apiService : ApiService,  private router: Router, public globalVariablesService : GlobalVariablesService) {
   }

   ngOnInit(): void {
    this.apiService.getTest().subscribe(res => {
      this.dataSource = new MatTableDataSource<PeriodicElement>(res);
       this.dataSource.paginator = this.paginator;
    })
   }

   public edit(element:PeriodicElement){
     this.globalVariablesService.employee = element;
     console.log(  this.globalVariablesService.employee);
     
    this.router.navigateByUrl('edit');
   }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsService } from '../../../services/tools.service';
import { ApiService } from '../../../services/api.service';
import { resultModel } from '../../../models/resultModel';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.less']
})
export class AddEmployeesComponent implements OnInit {
public numberId:string;
public name:string;
public lastName:string;
public role:string;

  constructor( private router:Router , public toolsService:ToolsService, private apiService:ApiService) { }

  ngOnInit(): void {
  }

  public save(){
    const params = {
      "name":this.name,
      "lastName":this.lastName,
      "numberId":this.numberId,
      "role":this.role
    };

    this.apiService.postAddEmployees(params).subscribe(
      (res:resultModel) =>{
        if (res.isSuccess) {
          this.toolsService.showMessage('success','Empleado creado con éxito','list');
        }
      }
    )
  }

  public cancel(){
    this.router.navigateByUrl('list');
  }

}

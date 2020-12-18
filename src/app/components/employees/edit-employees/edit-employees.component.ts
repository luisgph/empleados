import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../../../services/global-variables.service';
import { Router } from '@angular/router';
import { ToolsService } from '../../../services/tools.service';
import { ApiService } from '../../../services/api.service';
import { resultModel } from '../../../models/resultModel';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.less']
})
export class EditEmployeesComponent implements OnInit {

  constructor(public globalVariablesService: GlobalVariablesService,  private router: Router, private toolsService:ToolsService, private apiService:ApiService) { }

  ngOnInit(): void {
  }

  public cancel(){
    this.router.navigateByUrl('list');
  }

  public save(){
    const { employeeId,name,lastName,numberId,role } = this.globalVariablesService.employee;
    const params = {
        "employeeId": employeeId,
        "name":name,
        "lastName":lastName,
        "numberId":numberId,
        "role":role
    };
console.log(params);

    this.apiService.postEditEmployees(params).subscribe(
      (res:resultModel) => {
        console.log(res);
        if (res.isSuccess) {
          this.toolsService.showMessage('success','Empleado modificado con éxito','list');
        }
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../../../services/global-variables.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.less']
})
export class EditEmployeesComponent implements OnInit {

  constructor(public globalVariablesService: GlobalVariablesService) { }

  ngOnInit(): void {
  }

}

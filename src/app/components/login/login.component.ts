import { Component, OnInit } from '@angular/core';
import { userModel } from '../../models/user.model';
import { Router } from '@angular/router';
import { ApiLoginService } from '../../services/api-login.service';
import { resultModel } from '../../models/resultModel';
import { ToolsService } from '../../services/tools.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public user:userModel = new userModel();

  constructor( private router: Router, private apiLoginService:ApiLoginService, private toolsService:ToolsService) { }

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.getToken();
  }

  getToken(){
    this.apiLoginService.postToken().subscribe(
      (res: resultModel) => {
        if (res.isSuccess) {
          localStorage.setItem('token', res.data.accessToken);
        }
      }
    , () => {
    });
  }

  login(){
    const params = {
      "userName" : this.user.userID,
      "password" : this.user.password
    }
    this.apiLoginService.postLogin(params).subscribe(
      (res:resultModel) => {
        if (res.isSuccess) {
          sessionStorage.setItem('user', JSON.stringify( res.isSuccess ));
          this.router.navigateByUrl('list');
        }else{
          this.toolsService.showMessage('error', res.message);
        }
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { userModel } from '../../models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public user:userModel = new userModel();

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl('main');
  }

}

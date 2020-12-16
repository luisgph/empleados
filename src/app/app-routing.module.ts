import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './components/employees/list-employees/list-employees.component';
import { AddEmployeesComponent } from './components/employees/add-employees/add-employees.component';
import { EditEmployeesComponent } from './components/employees/edit-employees/edit-employees.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'main', component : MainComponent },
  { path : 'list', component : ListEmployeesComponent },
  { path : 'add', component : AddEmployeesComponent },
  { path : 'edit', component : EditEmployeesComponent },
  { path : '**', pathMatch : 'full',  redirectTo : 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

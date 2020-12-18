import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './components/employees/list-employees/list-employees.component';
import { AddEmployeesComponent } from './components/employees/add-employees/add-employees.component';
import { EditEmployeesComponent } from './components/employees/edit-employees/edit-employees.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'list', component : ListEmployeesComponent , canActivate : [AuthGuard] },
  { path : 'add', component : AddEmployeesComponent,  canActivate : [AuthGuard] },
  { path : 'edit', component : EditEmployeesComponent,  canActivate : [AuthGuard] },
  { path : '**', pathMatch : 'full',  redirectTo : 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

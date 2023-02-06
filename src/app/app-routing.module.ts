import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocComponent } from './doc/doc.component';
import { FormsComponent } from './forms/forms.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { 
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: 'doc', pathMatch: 'full' },
      { path: 'doc', component: DocComponent },
      { path: 'table', component: TableComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'loader', component: LoaderComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

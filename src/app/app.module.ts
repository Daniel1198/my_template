import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DocComponent } from './doc/doc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableComponent } from './table/table.component';
import { FormsComponent } from './forms/forms.component';
import { LoaderComponent } from './loader/loader.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoaderModule } from './loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DocComponent,
    DashboardComponent,
    TableComponent,
    FormsComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

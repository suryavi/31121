import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import LoginComponent from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { TestuComponent } from './components/testu/testu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [

   {path:'login',component:LoginComponent},
   {path:'setting',component:SettingsComponent},
   {path:'forgetpassword', component:ForgetPasswordComponent},
   {path:'table',component:TableComponent},
   {path:'testu',component:TestuComponent},
   {path:'notfound',component:NotFoundComponent},
   {path:'',redirectTo:'/login',pathMatch:'full'},
   {path:'**',redirectTo:'/notfound',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

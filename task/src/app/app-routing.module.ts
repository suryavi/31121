import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import LoginComponent from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { TestuComponent } from './components/testu/testu.component';

const routes: Routes = [

   {path:'login',component:LoginComponent},
   {path:'forgetpassword', component:ForgetPasswordComponent},
   {path:'table',component:TableComponent},
   {path:'testu',component:TestuComponent},
   {path:'',redirectTo:'/login',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

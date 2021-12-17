import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import LoginComponent from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TestuComponent } from './components/testu/testu.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import { CustomstyleDirective } from './customstyle.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpService} from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    TableComponent,
    TestuComponent,
    CustomstyleDirective,
    NotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatCardModule,
    MatFormFieldModule,ReactiveFormsModule,FormsModule,HttpClientModule,MatTabsModule,MatIconModule,
    BrowserAnimationsModule,MatInputModule,MatButtonModule,MatTableModule,MatPaginatorModule,MatDividerModule,MatDialogModule,
    MatMenuModule,MatSidenavModule,MatTooltipModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

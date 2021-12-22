import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, Form,FormBuilder,FormsModule } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { disableDebugTools } from '@angular/platform-browser';
import { HttpService } from 'src/app/http.service';
import { client } from '../dto/Datas.dto';
import { TableService } from '../table/table.service';
 
export interface Int{
  name:string;
  email: any;
  company:string;
}
@Component({
  selector: 'app-testu',
  templateUrl: './testu.component.html',
  styleUrls: ['./testu.component.scss']
})
export class TestuComponent  {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {   
}
 
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
  }






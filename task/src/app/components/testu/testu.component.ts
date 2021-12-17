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
export class TestuComponent implements OnInit,AfterViewInit {
 
  constructor(private service:HttpService) {   
}
   disCol : string[] = [ 'name', 'company' , 'email'];
   
   listdata = new MatTableDataSource();
  
   @ViewChild(MatPaginator) paginator = {} as MatPaginator;
   
  ngOnInit() {
     
      this.service.getclient().subscribe(list => {
      let aray : any  = list
      console.log(list); 
      this.listdata  = new MatTableDataSource(aray);
      this.listdata.paginator = this.paginator;
      });

  }
  ngAfterViewInit() {
  }
}




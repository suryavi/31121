import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Text } from '@angular/compiler/src/render3/r3_ast';
import { AfterViewInit, Component, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren, ɵɵqueryRefresh } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/http.service'; 
import { TableService } from './table.service';
import {client , campaign} from '../dto/Datas.dto';
import { HttpClient } from '@angular/common/http';
import { Router, Navigation } from '@angular/router';
import { async } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
      
      dashboardlist: any;
      
      column: string[] = ['Name','phone','company','invitation','status','created','updated','Action'];   
      column1: string[] = ['Name','Description','client','listid','status','created','EndDate','updated','Action'];
   
      clientlist = new MatTableDataSource(); // Client Tablex
      campaignslist = new MatTableDataSource();  // Campaigns Table
  
  constructor(private service : HttpService,private Tservice : TableService,private http:HttpClient) 
  {    
      
  }
  ngOnInit(){
    this.service._refreshNeeds.subscribe(() => {
        this.getdash();
        this.getclient();
        this.getcampaign();
    })
     this.getdash();
     this.getclient();
     this.getcampaign();
  }
  getdash(){
    this.service.getdashboard().subscribe( (response)=>{
      this.dashboardlist = JSON.parse(JSON.stringify(response[0]));
      console.log(this.dashboardlist);
    });
  }
getcampaign(){
  this.service.getcampaign().subscribe( (response)=>{
    let  data1 = response;
    this.campaignslist = new MatTableDataSource(data1)
    this.campaignslist.paginator = this.paginator.toArray()[1];
  })
}
getclient(){
this.service.getclient().subscribe((response)=>{
  let data : any =response;
  this.clientlist = new MatTableDataSource(data)
  this.clientlist.paginator = this.paginator.toArray()[0];
 });
}
StatusRetClient(ids:any){
  this.service.putclientdel(ids).subscribe((response)=>{
      console.log(response);
  })
}
StatusCamp(ids:any){
   this.service.statusCamp(ids).subscribe((response)=>{
     console.log(response)
   });
}
deleteData(ids:any){
 this.service.delete(ids).subscribe((response)=>{
    console.log(response);
 })
}
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
 
  // date Variables and Method   
  date = new Date();
  // Create date
  createDate = this.date.toDateString();
  // update date

  // Default status
  is_deleted: boolean = true;

  // hover Effect Delete And Restore Icon button
  kumar = "btn-mat-icon delete-btn";
  kumar1 = "restore-btn";
  //  refresh() {
  //    window.location.reload()
  //  }
  del(id:any){ 
    // status retire
    this.StatusRetClient(id);
    this.kumar = "disab"                      // button hover class
    this.kumar1 = "restore-btn"; 
    // this.refresh()
  }

  ret(id:any){
    // status retire
    this.StatusRetClient(id);
    this.kumar = "btn-mat-icon delete-btn";   // button hover Class 
    this.kumar1 = "disab1";
    // this.refresh();
  };
  check =true;
  chec(id:any){
    this.check = false;
    this.StatusCamp(id);
  };
  inprog(id:any){
    this.check = true;
    this.StatusCamp(id);
  };
  deleteFun(id:any){
    console.log(id);
    this.deleteData(id);
  }

  profileForm = new FormGroup(
    {
    name: new FormControl(null, [Validators.required, Validators.maxLength(16)]),
    emailu: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$')]),
    mobile: new FormControl(null, [Validators.required, Validators.pattern((/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/))]),
    company: new FormControl(null, Validators.required),
    });
  onSubmit() 
  {
    //  console.log(this.is_deleted);
    // this.profileForm.value.phone.toString();
    //  console.log(this.createDate);
     if(this.profileForm.valid)
     {
       var payloadclient = this.profileForm.value;
       console.log(this.profileForm.value.mobile);
       let date = this.createDate;
       let created_at = { date }; 
       let updated_at = { date }; 
        var payload = 
        {
          ...payloadclient,
          invitation : "Pending",
          is_deleted:this.is_deleted,
          created_at,
          updated_at,
        }
        // console.log(payload);
        // this.service.postclient(payload);
        this.service.postclient(payload).subscribe((res)=>{
         console.log(res);
       })
     }
     this.profileForm.reset();
  } 

  copyfunc(Text:any) 
  {
  navigator.clipboard.writeText(Text).then(function() 
  {
    console.log('copy paniyachi');
    },)
   }
  }






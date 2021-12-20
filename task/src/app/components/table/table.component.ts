import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Text } from '@angular/compiler/src/render3/r3_ast';
import { AfterViewInit, Component, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren, ɵɵqueryRefresh } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/http.service'; 
import { TableService } from './table.service';
import {client , campaign} from '../dto/Datas.dto';
import { HttpClient } from '@angular/common/http';
import { Router, Navigation } from '@angular/router';
import { async } from 'rxjs';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import LoginComponent from '../login/login.component';
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
       
      arr1 : any[] = [];
      arr2 : any[] = [];
      arr3 : any[] = [];
      arr4 : any[] = [];
      hasBackdrop : any = true;
      // mode : any = "over";
      datas1 : any;
  constructor(private service : HttpService,private Tservice : TableService,private http:HttpClient) 
  {     
    
    this.service._refreshNeeds.subscribe(() => {
      this.getclient();
      this.getcampaign();
    })
    this.getclient();
    this.getcampaign();
  }
  ngOnInit() {
   var datas =  window.localStorage.getItem('data');
      console.log(datas);
      this.datas1 = datas;
  }
  execute = false;
  // getdash(){
  //   // this.service.getdashboard().subscribe( (response)=>{
  //   //   this.dashboardlist = JSON.parse(JSON.stringify(response[0]));
  //   //   console.log(this.dashboardlist);
  //   // });
  // } 
getdash(){
 var acount:number=0;
 var icount:number=0;

 var cacount:number=0; 
 var iacount: number=0;
  var activeClients:any;
  var inactiveClients:any;
  var completedCampaigns:any;
  var assignedCampaigns:any;
  var len = this.arr2.length;
  var len1 = this.arr3.length;
  // console.log(len);
  for(let i = 0; i <= len-1; i++){
    console.log("hi");
      // if( i == 2){
      // console.log(this.arr2[i].is_deleted);
      // }
      if(this.arr2[i]?.is_deleted == true){
        // console.log(i+3);
        // console.log(true);
        acount++; 
        // console.log(this.acount);
      } else {
        // console.log(false);
        icount++;
        // console.log(this.icount);
      }
  }
  activeClients = acount;
  inactiveClients = icount;
  console.log(activeClients);
  console.log(inactiveClients);

  for(let i = 0; i <= len1-1; i++){
    console.log("hi");
      // if( i == 2){
      // console.log(this.arr2[i].is_deleted);
      // }
      if(this.arr3[i]?.is_deleted == true){
        // console.log(i+3);
        // console.log(true);
        cacount++; 
        // console.log(this.acount);
      } else {
        // console.log(false);
        iacount++;
        // console.log(this.icount);
      }
  }
  assignedCampaigns = cacount;
  completedCampaigns= iacount;
  console.log(assignedCampaigns);
  console.log(completedCampaigns);
  this.dashboardlist = {
    activeClients : activeClients,
    inactiveClients : inactiveClients,
    assignedCampaigns:assignedCampaigns,
    completedCampaigns : completedCampaigns
  }
  
}

getcampaign(){
  this.service.getcampaign().subscribe( (response)=>{
    let  data1 = response;
    this.arr1 = response;
    this.getArr();
    this. getdash();
    // this.once1();
    this.campaignslist = new MatTableDataSource(this.arr3);
    this.campaignslist.paginator = this.paginator.toArray()[1];
    
  })
}
getclient(){
this.service.getclient().subscribe((response)=>{
  let data : any =response;
  this.arr2 = response;
  this.clientlist = new MatTableDataSource(data);
  this.clientlist.paginator = this.paginator.toArray()[0];
 });
}
 getArr(){
  console.log(this.arr1);
  console.log(this.arr2);
  this.arr3 = this.arr1.filter( (cam) => {return this.arr2.some((cl) => {  if(cam.client.oid === cl._id.oid)
  { 
    console.log(typeof cam.client)
    return  cam.client = cl.name
  } }) });
  console.log(this.arr3);
 }
StatusRetClient(ids:any,stat:any){
  this.service.putclientdel(ids,stat).subscribe((response)=>{
  })
}
StatusCamp(ids:any,status:any){
   this.service.statusCamp(ids,status).subscribe((response)=>{
    //  console.log(response)
   });
}
deleteData(ids:any){
 this.service.delete(ids).subscribe((response)=>{
    console.log(response);
 })
}
  
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @Input() mode = {} as MatDrawerMode
  
  
  // date Variables and Method   
  date = new Date();
  // Create date
  createDate = this.date.toDateString();
  // update date

  // Default status
  is_deleted: boolean = true;

  // hover Effect Delete And Restore Icon button
  kumar = " delete-btn";
  kumar1 = "restore-btn";
  //  refresh() {
  //    window.location.reload()
  //  }
  del(id:any,stat:any,ele:any){ 
    // status retire
    this.StatusRetClient(id,stat);
    ele.kumar = "disab";                      // button hover class
    ele.kumar1 = "restore-btn"; 
    // this.refresh()
  }

  ret(id:any,stat:any,ele:any){
    // status retire
    this.StatusRetClient(id,stat);
    ele.kumar = "delete-btn";   // button hover Class 
    ele.kumar1 = "disab1";
    // this.refresh();
  };
  check =true;
  chec(id:any,status:any){
    this.check = false;
    this.StatusCamp(id,status);
  };
  inprog(id:any,status:any){
    this.check = true;
    this.StatusCamp(id,status);
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




function data(data: any) {
  throw new Error('Function not implemented.');
}


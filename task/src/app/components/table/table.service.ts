import { Injectable, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  
    dashboardPayload:any[]=[];
    clientsPayload:any[]=[];
    campaignsPayload:any[]=[];
    client:any[] = [];

    constructor(private service:HttpService, private http:HttpClient) { 
    // console.log(this.clientsPayload.length)
  }
 
// /* Dashboard get data */  
  
//   getDataDashboard(){

//     this.service.getdashboard().subscribe((response)=> {
//     //  console.log("Api reached",response);
//       var obj = JSON.parse(JSON.stringify(response[0]));
//         this.dashboardPayload.push(obj);
//     //  console.log(this.dashboardPayload);
//      return this.dashboardPayload
//     }, (error) => {
//       console.log(error);
//     }
//     )};

// /* Client get data */    

//   getDataClients() {
//     this.service.getclient().subscribe((response)=> {
//     // console.log("Api reached",response);
//     var len = response.length;
//     for(let i = 0; i <= len-1;i++){
//       this.clientsPayload.push(response[i]);
//     } 
//     console.log(this.clientsPayload)
//     // console.log(this.clientsPayload)
//     return this.clientsPayload
//    }, (error) => {
//      console.log(error);
//    }
//    )};

// /* Campaigns get data*/

//   getDataCampaigns(){
//     this.service.getcampaign().subscribe((response)=> {
//     var len = response.length;
//     //  console.log(len);
//     //  console.log("Api reached",response);
//     for(let i = 0; i <= len-1;i++){
//       this.campaignsPayload.push(response[i]);
//     }  
//      console.log(this.campaignsPayload);
//     return this.campaignsPayload
//     }, (error) => {
//       console.log(error);
//     }
//     )};
    // StatusRetClient(ids:any){
      // this.service.putclientdel(ids).subscribe((response)=>{
          // console.log(response);
      // })
  //  }
    // StatusCamp(ids:any){
      //  this.service.statusCamp(ids).subscribe((response)=>{
      //  });
  //  }
  //  deleteData(ids:any){
    //  this.service.delete(ids).subscribe((response)=>{
        // console.log(response);
    //  })
  //  }
}



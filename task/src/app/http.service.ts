import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from "rxjs/operators"
import { client } from './components/dto/Datas.dto';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
   
  constructor(private http:HttpClient) { }

   dashboard = "http://localhost:3000/dashboard";
   client = "http://localhost:3000/clients";
   campaign = "http://localhost:3000/campaigns";
   
   private refreshNeeds = new Subject<void>();
    
    get _refreshNeeds(){
        return this.refreshNeeds;
    }
    getdashboard():Observable<any>{
    return this.http.get(`${this.dashboard}`);
    }
  
  getclient():Observable<any>{
    // return this.http.get(`${this.client}`);
    return this.http.get(this.client);
  }
  getcampaign():Observable<any>{
    return this.http.get(`${this.campaign}`);
  }
 postclient(data:any):Observable<any>{
   return this.http.post(`${this.client}`,data)
   .pipe(
     tap(()=>{
       this.refreshNeeds.next();
     })
   )
  }
 putclientdel(id:any):Observable<any>{
  // console.log("posting",id);
  return this.http.put(`${this.client}/${id}`,id).
  pipe(
    tap(()=>{
      this.refreshNeeds.next();
    })
  )
}
delete(id:any):Observable<any>{
  console.log(id);
  return this.http.delete(`${this.campaign}/${id}`,id).
  pipe(
    tap(()=>{
      this.refreshNeeds.next();
    })
  )
}

statusCamp(id:any):Observable<any>{
  console.log(id);
  return this.http.put(`${this.campaign}/${id}`,id).
  pipe(
    tap(()=>{
      this.refreshNeeds.next();
    })
  )

}
//  getdel(data:any):Observable<any>{
//    return this.http.get(`${this.client}`,data)
//  }
}


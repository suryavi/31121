
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login-variable.component.scss']
})
export default class LoginComponent implements OnInit {

   public error = "";

   
  constructor() { }
  datas : any ;
  ngOnInit(): void {

  }
  
  form = new FormGroup({
    emai : new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$')]), 
    pasw : new FormControl('',Validators.required),

  });
  
  onSubmit(data:any){
  console.log(data);
  window.localStorage.setItem('data',this.form.value.emai);
  }

}


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

  ngOnInit(): void {

  }
  
  form = new FormGroup({
    emai : new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$')]), 
    pasw : new FormControl('',Validators.required),

  });

  onSubmit(){

  console.log(this.form.value);
  
  } 

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form1 = new FormGroup({
    old : new FormControl('',[Validators.required]), 
    pasw : new FormControl('',Validators.required),

  });
  
  onSubmit(){

  console.log(this.form1.value);
  // var email1 =  this.form.value.emai;
  // console.log(email1);
  // return email1;
  } 

}

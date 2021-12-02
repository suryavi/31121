import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss', './forget-password-variable.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form1 = new FormGroup({
    emai : new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$')]), 

  });

}

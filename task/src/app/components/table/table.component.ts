import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {

  }

  // showFiller = false;

  columns: string[] = ['position', 'Name', 'email', 'age','what'];

  // column: string[] = ['position', 'Name', 'email', 'age'];

  dataSource = new MatTableDataSource<Infor>(information);

  @ViewChild(MatPaginator) paginator = {} as MatPaginator;

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;

  }
  profileForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.maxLength(16)]),
    emailu : new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$')]),
    mobile : new FormControl('',[Validators.required,Validators.pattern((/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/))]),
    company: new FormControl('',Validators.required),
  });
  onSubmit() 
  {
   console.log(this.profileForm.value);
   

  }

}

export interface Infor {


  position: number;
  Name: string;
  email: string;
  age: number;
  

}

const information: Infor[] = [

  { position: 1,  Name:  'Abdullah', email: 'abdullah@gmail.com', age: 26, },
  { position: 2,  Name:  'Arivu', email: 'arivu@gmail.com', age: 26 },
  { position: 3,  Name:  'Azhagappan', email: 'azhagu@gmail.com', age: 26 },
  { position: 4,  Name:  'Chella durai', email: 'chelladurai@gmail.com', age: 21 },
  { position: 5,  Name:  'Cherath', email: `cherath@gmail.com`, age: 22 },
  { position: 6,  Name:  'Chithambaranathan', email: 'Balaji@gmail.com', age: 23 },
  { position: 7,  Name:  'Chockalingam', email: 'sujan@gmail.com', age: 24 },
  { position: 8,  Name:  'EsakkiMuthuKumar', email: 'esakki@gmail.com', age: 25 },
  { position: 9,  Name:  'EsakkiMuthu', email: 'muthu@gmail.com', age: 24 },
  { position: 10, Name:  'Ganesh', email: 'ganesh@gmail.com', age: 25 },
  { position: 11, Name:  'iyyappa', email: 'iyyappa@gmail.com', age: 24 },
  { position: 12, Name:  'kantha', email: 'kantha@gmail.com', age: 26 },
  { position: 13, Name:  'Manick', email: 'manick@gmail.com', age: 25 },
  { position: 14, Name:  'Micheal', email: 'micheal@gmail.com', age: 26 },
  { position: 15, Name:  'PandiyaRaja', email: 'pandi@gmail.com', age: 27 },
  { position: 16, Name:  'Pattamuthu', email: 'patta@gmail.com', age: 26 },
  { position: 17, Name:  'prabha', email: 'prabha@gmail.com', age: 23 },
  { position: 18, Name:  'perumal', email: 'perumal@gmail.com', age: 29 },
  { position: 19, Name:  'varathan', email: 'varathan@gmail.com', age: 24 },
  { position: 20, Name:  'yashin', email: 'yashin@gmail.com', age: 26 },
];


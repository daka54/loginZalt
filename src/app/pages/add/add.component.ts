import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersInterface } from 'src/app/models/user.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  addForm = new FormGroup({
    Id_User :new FormControl(''),
    Login :new FormControl(''),
    Email : new FormControl(''),
    Password:new FormControl('') 
  });
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  }

  postForm(form: UsersInterface){
  
    this.api.userPost(form).subscribe((data) =>{
        console.log(data)
    })
    console.log(form)
    
  }

  exit(){
    this.router.navigate(['dashboard']);
  }
}

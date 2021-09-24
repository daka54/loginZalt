import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersInterface } from 'src/app/models/user.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  dataUser!:UsersInterface;
  
  editForm = new FormGroup({
    Id_User :new FormControl(''),
    Login :new FormControl(''),
    Email : new FormControl(''),
    Password:new FormControl('') 
  });

  userId: any =0
  ngOnInit(): void {
    this.userId = this.activerouter.snapshot.paramMap.get('id');
    
    this.api.getUser(this.userId).subscribe((data:any)=>{
      this.dataUser = data
      
      this.editForm.setValue({
        'Id_User' : this.userId,
        'Login' : this.dataUser.login,
        'Email' : this.dataUser.email,
        'Password': this.dataUser.password
      });
      
      
    })
  }

  postForm(form: UsersInterface){
  
    this.api.putUser(form, this.userId).subscribe((data:UsersInterface)=>{
      
      let userUpdate: any = data;
      console.log(userUpdate);
    })
    console.log(form)
    
  }

  deleteUser(){
    let datos: UsersInterface = this.editForm.value;
    this.api.deleteUserApi(this.userId).subscribe((data:any)=>{
      
      console.log(data);
    })
    console.log('Deleteeeed')
  }

  exit(){
    this.router.navigate(['dashboard']);
  }

}

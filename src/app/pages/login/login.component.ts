import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from 'src/app/models/login.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required)
  })
  
  
  constructor(private api: ApiService, private router: Router) { }

  errorStatus:boolean=false;
  errorMsj: any = "";

  ngOnInit(): void {

  }
  
  onLogin(form: LoginInterface){
    this.api.loginByUser(form).subscribe((data:any) =>{
      let dataResponse:LoginInterface[] = data;
      if(dataResponse.length > 0){
        console.log(dataResponse);
        //localStorage.setItem('token', dataResponse.result.token)
        this.router.navigate(['dashboard']);
      }else{
        this.errorStatus=true;
        this.errorMsj= 'Password incorrect';
        console.log('no entra');
      }
    }
    );
  }

  validate(user: string, password:string){
    
  }
}

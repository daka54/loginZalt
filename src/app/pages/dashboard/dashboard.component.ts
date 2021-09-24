import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersListInterface } from 'src/app/models/usersList.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  constructor(private api: ApiService, private router:Router) { 

  }

  usersList:UsersListInterface[]  = [];

  ngOnInit(): void {
    this.api.getAllUsers().subscribe((data:UsersListInterface[]) =>{
      
      this.usersList = data
      
    }, error=>{
      
      console.log(error)})
  }

  editUser(id: number){
    this.router.navigate(['edit', id])
  }
  
  addUser(){
    this.router.navigate(['add']);
  }
}

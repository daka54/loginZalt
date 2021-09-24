import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInterface } from 'src/app/models/login.interface';
import { UsersInterface } from 'src/app/models/user.interface';
import { UsersListInterface } from 'src/app/models/usersList.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.url
  constructor( public http: HttpClient) { }

  // getUser(user: string, password:string){
  //   const options ={
  //     headers: new HttpHeaders({})
  //   };
  
  //   let body={
  //     login: user,
  //     password
  //   }
  //   return this.http.post<any>(this.baseUrl +'users/log', body, options);
  // }

  loginByUser(form:LoginInterface){
    let options ={
      headers: new HttpHeaders({})
    };

    let direccion = this.baseUrl + 'users/log';
    return this.http.post<any>(direccion, form, options)
  }

  getAllUsers():Observable<UsersListInterface[]>{
  
    let url = this.baseUrl + 'users'
    
    return this.http.get<UsersListInterface[]>(url);
  }

  getUser(id: any):Observable<UsersInterface>{
    let url = this.baseUrl + 'users/' + id
    return this.http.get<UsersInterface>(url)
  }

  putUser(form:UsersInterface, idForm:number):Observable<any>{
    const options ={
      headers: new HttpHeaders({})
    };
    
debugger
    let url = `${this.baseUrl}users/${idForm}`;
    return this.http.put<any>(url, form, options );
  }

  deleteUserApi(idForm:number):Observable<any>{
    let url = `${this.baseUrl}users/${idForm}`;
    let options ={
      headers: new HttpHeaders({
        'Content-type':'aplication/json'
      }),
    }
    return this.http.delete<any>(url, options);

  }

  userPost(form: UsersListInterface){
    let url = this.baseUrl + 'users';
    return this.http.post<any>(url, form);
  }


}

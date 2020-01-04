import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers() {
    let token = localStorage.getItem('access_token');
    return this.http.get('https://colorcrayontipbackend.herokuapp.com/api/v1/users',
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
      );
  }

  getUser(rowid: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get('https://colorcrayontipbackend.herokuapp.com/api/v1/users/' + rowid,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
      );
  }

  

  createUserRegistration(user) {
    let body = JSON.stringify(user);
    return this.http.post('/https://colorcrayontipbackend.herokuapp.com/api/v1/users', body, httpOptions);
  }
}

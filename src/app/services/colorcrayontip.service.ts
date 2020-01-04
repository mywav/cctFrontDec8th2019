import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ColorcrayontipService {

  constructor(private http:HttpClient) { }

  getQuizes() {
    let token = localStorage.getItem('access_token');
    return this.http.get('https://colorcrayontipbackend.herokuapp.com/api/v1/quizes',
       {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
      );
  }

  getQuizesForStudent(userObject) {
    let token = localStorage.getItem('access_token');
    let body = userObject;
    return this.http.get('https://colorcrayontipbackend.herokuapp.com/api/v1/quizes/username/' + body,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  getQuiz(id: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get('https://colorcrayontipbackend.herokuapp.com/api/v1/quizes/' + id,
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
      );
  }

  createQuizRegistration(quiz) {
    quiz.username = quiz.username.username;
    let body = JSON.stringify(quiz);
    console.log(quiz);
    return this.http.post('https://colorcrayontipbackend.herokuapp.com/api/v1/quizes', body, httpOptions);
  }
}

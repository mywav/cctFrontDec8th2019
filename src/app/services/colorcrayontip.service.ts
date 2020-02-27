import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ColorcrayontipService {

  constructor(private http:HttpClient) { }

  getQuizes() {
    let token = localStorage.getItem('access_token');
    return this.http.get('http://colorcrayontipbackend.ryannewbold.com/api/v1/quizes',
       {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)},
      ).pipe(catchError(this.handleError('getQuizes', [])));
  }

  getQuizesForStudent(userObject) {
    let token = localStorage.getItem('access_token');
    let body = userObject;
    return this.http.get('http://colorcrayontipbackend.ryannewbold.com/api/v1/quizes/username/' + body,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  getQuiz(id: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get('http://colorcrayontipbackend.ryannewbold.com/api/v1/quizes/' + id,
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
      );
  }

  createQuizRegistration(quiz) {
    quiz.username = quiz.username.username;
    let body = JSON.stringify(quiz);
    console.log(quiz);
    return this.http.post('http://colorcrayontipbackend.ryannewbold.com/api/v1/quizes', body, httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ColorcrayontipService } from '../../services/colorcrayontip.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormSetting } from '../../data/form-settings';

@Component({
  selector: 'app-view-paper',
  templateUrl: './view-paper.component.html',
  styleUrls: ['./view-paper.component.css']
})
export class ViewPaperComponent implements OnInit {

  quizform: FormGroup;
  historicalPapers: FormGroup;
  selectedPaper;
  validMessage: string = "";
  selectedStudent: string;
  public users;
  public usernames: Observable<Object>;
  public pastPapers;
  public historicalPapersList;
  public selectedUsername;
  public usernameJSON;
  public selectedId;



  constructor(private colorcrayontipService: ColorcrayontipService, private usersService: UsersService,
              private router : Router) { }

  ngOnInit() {      
    this.usernames = this.usersService.getUsers();

    this.quizform = new FormGroup({
    rowid: new FormControl(),
    username: new FormControl()
    });
    this.historicalPapers = new FormGroup({
    historicalPapersList: new FormControl()
    });   
    this.getUsers();
   }

   selectChangeHandler (event: any) {
   }

getUsers() {
  this.usersService.getUsers().subscribe(
    data => { this.users = data },
    err => console.error(err),
    () => console.log('users loaded')
  )
}

getHistoricalPapers() {
  this.colorcrayontipService.getQuizesForStudent(this.selectedUsername).subscribe(
    data => { this.pastPapers = data },
    err => console.error(err),
    () => console.log('historical papers loaded')
  )
}

getHistoricalPaper() {
  console.log("whatever")
  this.colorcrayontipService.getQuiz(this.selectedId).subscribe(
    data => {this.selectedPaper = data },
    err => console.error(err),
    () => {
      console.log('historical paper loaded')
      this.router.navigate(['/admin/view/', this.selectedId]);
      
    }
  )
}

submitRegistration() {
  if (this.quizform.valid) {
    this.validMessage = "Thank you for entering the quiz information!";
    this.colorcrayontipService.createQuizRegistration(this.quizform.value).subscribe(
      data => {
        this.quizform.reset();
        return true;
      },
      error => {
        return Observable.throw(error);
      }
    )
  } else {
    this.validMessage = "Please enter your paper name and username.";
  }
}

}

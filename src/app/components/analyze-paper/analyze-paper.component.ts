import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm, NgModel } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ColorcrayontipService } from '../../services/colorcrayontip.service';
import { Observable } from 'rxjs';
import { FormSetting } from 'src/app/data/form-settings';

@Component({
  selector: 'app-analyze-paper',
  templateUrl: './analyze-paper.component.html',
  styleUrls: ['./analyze-paper.component.css']
})
export class AnalyzePaperComponent implements OnInit {

  originalFormSetting: FormSetting = {
    username: null,
    nameofpaper: null,
    question01: null,
    question02: null,
    question03: null,
    question04: null,
    question05: null,
    question06: null,
    question07: null,
    question08: null,
    question09: null,
    question10: null
  };

  myDateValue: Date;
  formSettting : FormSetting = { ...this.originalFormSetting };
  public users;
  analyzePaperForm: FormGroup;
  validMessage: string="";
  usernames: Observable<Object>;
  date_taken: Date;
  

  constructor(private usersService: UsersService, private colorcrayontipService: ColorcrayontipService) { }

  ngOnInit() {
      this.usernames = this.usersService.getUsers();
      this.analyzePaperForm = new FormGroup({  
      rowid: new FormControl(),
      username: new FormControl(),
      date_taken: new FormControl(),
      nameofpaper: new FormControl(),
      question01: new FormControl(),
      question02: new FormControl(),
      question03: new FormControl(),
      question04: new FormControl(),
      question05: new FormControl(),
      question06: new FormControl(),
      question07: new FormControl(),
      question08: new FormControl(),
      question09: new FormControl(),
      question10: new FormControl(),
    });
    this.getUsers();
    this.date_taken = new Date();
    this.myDateValue = new Date();
  }

  submitRegistration() {
    if (this.analyzePaperForm.valid) {
      this.validMessage = "The analysis has been saved.";
      this.colorcrayontipService.createQuizRegistration(this.analyzePaperForm.value).subscribe(
        data => {
          this.analyzePaperForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
    this.validMessage = "Please fill out the analysis completely.";
    }
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      data => { this.users = data },
      err => console.error(err),
      () => console.log('users loaded')
    )
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }
}

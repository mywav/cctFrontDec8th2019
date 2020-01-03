import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  
  userForm: FormGroup;
  validMessage: string= "";

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
      this.userForm = new FormGroup({
      username: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {
    if (this.userForm.valid) {
      this.validMessage = "The student has been registered.";
      this.usersService.createUserRegistration(this.userForm.value).subscribe(
        data => {
          this.userForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please enter a name before submitting.";
    }
  }
}

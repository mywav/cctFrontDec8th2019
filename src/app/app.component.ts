import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myDateValue: Date; 
  title = 'colorcrayontip-ui';
  public checkModel: any = { left: true, middle: false, right: false };
  public radioModel: string = 'Left';

  constructor(private authService: AuthService, public router: Router) {
    authService.handleAuthentication();
  }

  ngOnInit() {
    this.myDateValue = new Date();
  } 
  
  logInOrOut() {
    if (this.authService.isAuthenticated())
    {
      this.authService.logout();
      this.router.navigate(['/']);
    }
    else
    {
      this.authService.login();
      this.router.navigate(['/']);
    }
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}

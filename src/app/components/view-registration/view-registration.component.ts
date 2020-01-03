import { Component, OnInit } from '@angular/core';
import { ColorcrayontipService } from '../../services/colorcrayontip.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public quizReg: any;

  constructor(private colorcrayontipService: ColorcrayontipService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.getQuizReg(this.route.snapshot.params.id);
  }

  getQuizReg(rowid:number) {
    this.colorcrayontipService.getQuiz(rowid).subscribe(
      data => {this.quizReg = data},
      err => console.error(err),
      () => console.log(this.quizReg.question01)
    );          
  }
}

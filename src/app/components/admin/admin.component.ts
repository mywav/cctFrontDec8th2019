import { Component, OnInit } from '@angular/core';
import { ColorcrayontipService } from '../../services/colorcrayontip.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public quizes;

  constructor(private colorcrayontipService: ColorcrayontipService) { }

  ngOnInit() {
    this.getQuizes();
  }
  
  getQuizes() {
    this.colorcrayontipService.getQuizes().subscribe(
      data => { this.quizes = data },
      err => console.error(err),
      () => console.log('quizes loaded')
    );
  }
}

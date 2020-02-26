import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { ColorcrayontipService } from './colorcrayontip.service';

describe('ColorcrayontipService', () => {

  let colorcrayontipService: ColorcrayontipService;
  let httpTestingController: HttpTestingController;

  let testQuizes: any = [
    {
      "date_taken": null,
      "question01": null,
      "question02": null,
      "question03": null,
      "question04": null,
      "question05": null,
      "question06": null,
      "question07": null,
      "question08": null,
      "question09": null,
      "question10": null,
      "username": "testUserName",
      "nameofpaper": "testPaper",
      "id": 1}
  ]
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ColorcrayontipService ]
  });

  colorcrayontipService = TestBed.get(ColorcrayontipService);
  httpTestingController = TestBed.get(HttpTestingController);
});

  it('should GET all quizes', inject([ColorcrayontipService], (service: ColorcrayontipService) => {
    expect(service).toBeTruthy();
  }));
});

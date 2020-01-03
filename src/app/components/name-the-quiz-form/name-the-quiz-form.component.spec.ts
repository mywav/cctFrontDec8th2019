import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameTheQuizFormComponent } from './name-the-quiz-form.component';

describe('NameTheQuizFormComponent', () => {
  let component: NameTheQuizFormComponent;
  let fixture: ComponentFixture<NameTheQuizFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameTheQuizFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameTheQuizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

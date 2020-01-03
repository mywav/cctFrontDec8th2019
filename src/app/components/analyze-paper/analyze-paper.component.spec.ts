import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzePaperComponent } from './analyze-paper.component';

describe('AnalyzePaperComponent', () => {
  let component: AnalyzePaperComponent;
  let fixture: ComponentFixture<AnalyzePaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzePaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

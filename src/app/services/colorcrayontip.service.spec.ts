import { TestBed, inject } from '@angular/core/testing';

import { ColorcrayontipService } from './colorcrayontip.service';

describe('ColorcrayontipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorcrayontipService]
  });
});

  it('should be created', inject([ColorcrayontipService], (service: ColorcrayontipService) => {
    expect(service).toBeTruthy();
  }));
});

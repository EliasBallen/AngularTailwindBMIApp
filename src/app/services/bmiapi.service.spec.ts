import { TestBed } from '@angular/core/testing';

import { BmiapiService } from './bmiapi.service';

describe('BmiapiService', () => {
  let service: BmiapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmiapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

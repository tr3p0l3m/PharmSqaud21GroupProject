import { TestBed } from '@angular/core/testing';

import { PassingserviceService } from './passingservice.service';

describe('PassingserviceService', () => {
  let service: PassingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

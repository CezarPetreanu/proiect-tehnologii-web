import { TestBed } from '@angular/core/testing';

import { MockDataService } from './mock-data-service.service';

describe('MockDataServiceService', () => {
  let service: MockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

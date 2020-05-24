import { TestBed, inject } from '@angular/core/testing';

import { PassengerService } from './service/passenger.service';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassengerService]
    });
  });

  it('should be created', inject([PassengerService], (service: PassengerService) => {
    expect(service).toBeTruthy();
  }));
});

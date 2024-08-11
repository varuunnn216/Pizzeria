import { TestBed } from '@angular/core/testing';

import { PizzaServiceService } from './pizza-service.service';

describe('PizzaServiceService', () => {
  let service: PizzaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

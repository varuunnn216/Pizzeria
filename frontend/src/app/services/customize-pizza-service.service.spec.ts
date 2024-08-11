import { TestBed } from '@angular/core/testing';

import { CustomizePizzaServiceService } from './customize-pizza-service.service';

describe('CustomizePizzaServiceService', () => {
  let service: CustomizePizzaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomizePizzaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

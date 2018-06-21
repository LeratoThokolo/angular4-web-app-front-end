import { TestBed, inject } from '@angular/core/testing';

import { PnpdriverService } from './pnpdriver.service';

describe('PnpdriverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PnpdriverService]
    });
  });

  it('should be created', inject([PnpdriverService], (service: PnpdriverService) => {
    expect(service).toBeTruthy();
  }));
});

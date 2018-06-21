import { TestBed, inject } from '@angular/core/testing';

import { BankdetailService } from './bankdetail.service';

describe('BankdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankdetailService]
    });
  });

  it('should be created', inject([BankdetailService], (service: BankdetailService) => {
    expect(service).toBeTruthy();
  }));
});

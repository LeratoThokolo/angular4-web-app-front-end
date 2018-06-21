import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingdetailsComponent } from './bankingdetails.component';

describe('BankingdetailsComponent', () => {
  let component: BankingdetailsComponent;
  let fixture: ComponentFixture<BankingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

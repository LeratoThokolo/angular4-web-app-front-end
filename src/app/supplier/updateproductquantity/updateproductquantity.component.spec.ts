import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproductquantityComponent } from './updateproductquantity.component';

describe('UpdateproductquantityComponent', () => {
  let component: UpdateproductquantityComponent;
  let fixture: ComponentFixture<UpdateproductquantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateproductquantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateproductquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

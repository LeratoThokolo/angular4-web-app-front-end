import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistbycategoryComponent } from './productlistbycategory.component';

describe('ProductlistbycategoryComponent', () => {
  let component: ProductlistbycategoryComponent;
  let fixture: ComponentFixture<ProductlistbycategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlistbycategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

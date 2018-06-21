import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedriverComponent } from './createdriver.component';

describe('CreatedriverComponent', () => {
  let component: CreatedriverComponent;
  let fixture: ComponentFixture<CreatedriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

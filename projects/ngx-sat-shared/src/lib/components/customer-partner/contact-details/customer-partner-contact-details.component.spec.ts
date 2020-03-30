import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPartnerContactDetailsComponent } from './customer-partner-contact-details.component';

describe('CustomerPartnerContactDetailsComponent', () => {
  let component: CustomerPartnerContactDetailsComponent;
  let fixture: ComponentFixture<CustomerPartnerContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPartnerContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPartnerContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

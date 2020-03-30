import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPartnerIncompleteCustomerFoundComponent } from './customer-partner-incomplete-customer-found.component';

describe('CustomerPartnerIncompleteCustomerFoundComponent', () => {
  let component: CustomerPartnerIncompleteCustomerFoundComponent;
  let fixture: ComponentFixture<CustomerPartnerIncompleteCustomerFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPartnerIncompleteCustomerFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPartnerIncompleteCustomerFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

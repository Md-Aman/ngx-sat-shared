import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPartnerCustomerFoundComponent } from './customer-partner-customer-found.component';

describe('CustomerPartnerCustomerFoundComponent', () => {
  let component: CustomerPartnerCustomerFoundComponent;
  let fixture: ComponentFixture<CustomerPartnerCustomerFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPartnerCustomerFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPartnerCustomerFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

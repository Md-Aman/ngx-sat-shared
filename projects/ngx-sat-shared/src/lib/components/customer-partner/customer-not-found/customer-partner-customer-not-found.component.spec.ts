import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPartnerCustomerNotFoundComponent } from './customer-partner-customer-not-found.component';

describe('CustomerPartnerCustomerNotFoundComponent', () => {
  let component: CustomerPartnerCustomerNotFoundComponent;
  let fixture: ComponentFixture<CustomerPartnerCustomerNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPartnerCustomerNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPartnerCustomerNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

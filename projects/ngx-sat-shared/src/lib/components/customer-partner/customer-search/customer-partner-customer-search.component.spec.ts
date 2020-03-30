import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPartnerCustomerSearchComponent } from './customer-partner-customer-search.component';

describe('CustomerPartnerCustomerSearchComponent', () => {
  let component: CustomerPartnerCustomerSearchComponent;
  let fixture: ComponentFixture<CustomerPartnerCustomerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPartnerCustomerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPartnerCustomerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

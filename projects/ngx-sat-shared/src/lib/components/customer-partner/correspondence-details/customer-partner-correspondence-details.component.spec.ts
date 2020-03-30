import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPartnerCorrespondenceDetailsComponent } from './customer-partner-correspondence-details.component';

describe('CustomerPartnerCorrespondenceDetailsComponent', () => {
  let component: CustomerPartnerCorrespondenceDetailsComponent;
  let fixture: ComponentFixture<CustomerPartnerCorrespondenceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPartnerCorrespondenceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPartnerCorrespondenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoverNoteCustomerPartnerContactDetailsComponent } from './new-cover-note-customer-partner-contact-details.component';

describe('NewCoverNoteCustomerPartnerContactDetailsComponent', () => {
  let component: NewCoverNoteCustomerPartnerContactDetailsComponent;
  let fixture: ComponentFixture<NewCoverNoteCustomerPartnerContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoverNoteCustomerPartnerContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoverNoteCustomerPartnerContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

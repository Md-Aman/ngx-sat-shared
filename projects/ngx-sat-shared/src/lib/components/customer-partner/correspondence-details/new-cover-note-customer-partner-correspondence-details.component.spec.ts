import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoverNoteCustomerPartnerCorrespondenceDetailsComponent } from './new-cover-note-customer-partner-correspondence-details.component';

describe('NewCoverNoteCustomerPartnerCorrespondenceDetailsComponent', () => {
  let component: NewCoverNoteCustomerPartnerCorrespondenceDetailsComponent;
  let fixture: ComponentFixture<NewCoverNoteCustomerPartnerCorrespondenceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoverNoteCustomerPartnerCorrespondenceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoverNoteCustomerPartnerCorrespondenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoverNoteCustomerPartnerIncompleteCustomerFoundComponent } from './new-cover-note-customer-partner-incomplete-customer-found.component';

describe('NewCoverNoteCustomerPartnerIncompleteCustomerFoundComponent', () => {
  let component: NewCoverNoteCustomerPartnerIncompleteCustomerFoundComponent;
  let fixture: ComponentFixture<NewCoverNoteCustomerPartnerIncompleteCustomerFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoverNoteCustomerPartnerIncompleteCustomerFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoverNoteCustomerPartnerIncompleteCustomerFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

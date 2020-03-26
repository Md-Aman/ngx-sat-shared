import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoverNoteCustomerPartnerCustomerFoundComponent } from './new-cover-note-customer-partner-customer-found.component';

describe('NewCoverNoteCustomerPartnerCustomerFoundComponent', () => {
  let component: NewCoverNoteCustomerPartnerCustomerFoundComponent;
  let fixture: ComponentFixture<NewCoverNoteCustomerPartnerCustomerFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoverNoteCustomerPartnerCustomerFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoverNoteCustomerPartnerCustomerFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoverNoteCustomerPartnerCustomerSearchComponent } from './new-cover-note-customer-partner-customer-search.component';

describe('NewCoverNoteCustomerPartnerCustomerSearchComponent', () => {
  let component: NewCoverNoteCustomerPartnerCustomerSearchComponent;
  let fixture: ComponentFixture<NewCoverNoteCustomerPartnerCustomerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoverNoteCustomerPartnerCustomerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoverNoteCustomerPartnerCustomerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

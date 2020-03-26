import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoverNoteCustomerPartnerCustomerNotFoundComponent } from './new-cover-note-customer-partner-customer-not-found.component';

describe('NewCoverNoteCustomerPartnerCustomerNotFoundComponent', () => {
  let component: NewCoverNoteCustomerPartnerCustomerNotFoundComponent;
  let fixture: ComponentFixture<NewCoverNoteCustomerPartnerCustomerNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoverNoteCustomerPartnerCustomerNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoverNoteCustomerPartnerCustomerNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

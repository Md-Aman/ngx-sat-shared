import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ncn-customer-partner-contact-details',
  templateUrl: './new-cover-note-customer-partner-contact-details.component.html',
  styleUrls: ['./new-cover-note-customer-partner-contact-details.component.scss']
})
export class NewCoverNoteCustomerPartnerContactDetailsComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() faxList;
  @Input() mobileList;
  @Input() flList;
  accordionsAreDisabled = false;
  constructor() { }

  ngOnInit() {}

}

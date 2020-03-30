import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'customer-partner-contact-details',
  templateUrl: './customer-partner-contact-details.component.html',
  styleUrls: ['./customer-partner-contact-details.component.scss']
})
export class CustomerPartnerContactDetailsComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() faxList;
  @Input() mobileList;
  @Input() flList;
  accordionsAreDisabled = false;
  constructor() { }

  ngOnInit() {}

}

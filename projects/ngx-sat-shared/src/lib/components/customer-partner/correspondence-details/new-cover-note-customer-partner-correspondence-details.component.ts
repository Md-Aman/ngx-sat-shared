import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { Store } from '@ngxs/store';
// import { GET_POSTCODE_INFO } from '../../../../store/dashboard/dashboard.action';

@Component({
  selector: 'ncn-customer-partner-correspondence-details',
  templateUrl: './new-cover-note-customer-partner-correspondence-details.component.html',
  styleUrls: ['./new-cover-note-customer-partner-correspondence-details.component.scss']
})
export class NewCoverNoteCustomerPartnerCorrespondenceDetailsComponent implements OnInit {
  @Input() parentForm: FormGroup;


  accordionsAreDisabled = false;
  constructor() { }

  ngOnInit() {
  }

  searchPostCode($event){
    // this.store.dispatch(new GET_POSTCODE_INFO(this.parentForm.controls.clientPostcode.value)).subscribe( state => {
    //   const postCodeInfo = state.DashboardState.postCodeInfo;
    //   this.parentForm.controls.clientCity.setValue(postCodeInfo.city);
    //   this.parentForm.controls.clientState.setValue(postCodeInfo.state);
    //   this.parentForm.controls.clientCountry.setValue('MAL');
    // })
  }
}

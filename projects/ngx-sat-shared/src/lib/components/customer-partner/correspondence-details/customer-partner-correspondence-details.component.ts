import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { Store } from '@ngxs/store';
// import { GET_POSTCODE_INFO } from '../../../../store/dashboard/dashboard.action';

@Component({
  selector: 'customer-partner-correspondence-details',
  templateUrl: './customer-partner-correspondence-details.component.html',
  styleUrls: ['./customer-partner-correspondence-details.component.scss']
})
export class CustomerPartnerCorrespondenceDetailsComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Output() searchPostcode:EventEmitter<any> = new EventEmitter<any>();

  accordionsAreDisabled = false;
  constructor() { }

  ngOnInit() {
  }

  onSearchPostCode($event){
    this.searchPostcode.emit(this.parentForm.controls.clientPostcode.value);
    // this.store.dispatch(new GET_POSTCODE_INFO(this.parentForm.controls.clientPostcode.value)).subscribe( state => {
    //   const postCodeInfo = state.DashboardState.postCodeInfo;
    //   this.parentForm.controls.clientCity.setValue(postCodeInfo.city);
    //   this.parentForm.controls.clientState.setValue(postCodeInfo.state);
    //   this.parentForm.controls.clientCountry.setValue('MAL');
    // })
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { CustomerPartnerBase } from '../../../classes/customer-partner.base';
// import { STEP3 } from 'src/app/shared/interfaces/new-cn';
// import { IDTYPE } from 'src/app/shared/enums/index.enum';

@Component({
  selector: 'customer-partner-customer-found',
  templateUrl: './customer-partner-customer-found.component.html',
  styleUrls: ['./customer-partner-customer-found.component.scss']
})
export class CustomerPartnerCustomerFoundComponent extends CustomerPartnerBase{  
  @Output() searchAgain:EventEmitter<boolean> = new EventEmitter<boolean>();

  // customerInfoForm: FormGroup = this.fb.group({
  //   address: [''],
  //   fixedLineNumber: [''],
  //   faxNumber: [''],
  // });

  constructor(private fb: FormBuilder) {
    super();
  }

  restartSearch() {
    this.searchAgain.emit(true);
  }
}
